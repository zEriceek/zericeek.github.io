// ============================================
// Eko Hub - Mezinárodní obchod
// ============================================
const app = document.getElementById('app');
const STORAGE_KEY = 'ekonomikahub.v1';

const state = loadState();
function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : { done: [], bestScore: 0 };
    } catch {
        return { done: [], bestScore: 0 };
    }
}
function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function isDone(id) { return state.done.includes(id); }
function toggleDone(id) {
    if (isDone(id)) state.done = state.done.filter(x => x !== id);
    else state.done.push(id);
    saveState();
}

// Helpers
const $ = (sel, el=document) => el.querySelector(sel);
function h(html) {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
}
function escape(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    })[c]);
}
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function findTopic(id) { return TOPICS.find(t => t.id === id); }
function topicTitleById(id) {
    const t = findTopic(id);
    return t ? t.title : id;
}

// ROUTER
function router() {
    const hash = location.hash || '#/';
    const parts = hash.replace('#/', '').split('/').filter(Boolean);

    if (parts.length === 0) return renderHome();
    if (parts[0] === 'flashcards') return renderFlashcards();
    if (parts[0] === 'quiz') return renderQuiz();
    if (parts[0] === 'tahak') return renderTahak();
    if (parts[0] === 'topic') {
        const topic = findTopic(parts[1]);
        if (topic) return renderTopic(topic);
    }
    renderHome();
}
window.addEventListener('hashchange', () => { router(); window.scrollTo(0, 0); });
window.addEventListener('DOMContentLoaded', () => {
    router();
    document.getElementById('reset-btn').onclick = () => {
        if (confirm('Opravdu chceš smazat veškerý postup?')) {
            localStorage.removeItem(STORAGE_KEY);
            state.done = []; state.bestScore = 0;
            router();
        }
    };
});

// HOME
function renderHome() {
    const doneCount = state.done.length;
    const total = TOPICS.length;
    app.innerHTML = `
        <div class="intro">
            <h1>Ekonomika — 2. pololetí</h1>
            <p>Příprava na ústní zkoušení. 20 témat z marketingu, prodejní činnosti a mezinárodního obchodu. Projeď si čtení, otestuj se kvízem nebo flashcards. Pokud spěcháš, mrkni rovnou na tahák.</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin: 14px 0;">
            <span style="color:var(--muted); font-size:13px;">Probráno: <strong>${doneCount}/${total}</strong></span>
            <div style="display:flex; gap:8px;">
                <a href="#/quiz" class="btn btn-primary" style="text-decoration:none;">Rovnou kvíz →</a>
            </div>
        </div>
        <div class="topic-grid" id="grid"></div>
    `;
    const grid = $('#grid');
    TOPICS.forEach(t => {
        const card = h(`
            <a href="#/topic/${t.id}" class="topic-card ${isDone(t.id) ? 'done' : ''}">
                <div class="topic-icon">${t.icon}</div>
                <h3>${escape(t.title)}</h3>
                <div class="desc">${escape(t.summary)}</div>
            </a>
        `);
        grid.appendChild(card);
    });
}

// TOPIC DETAIL
function renderTopic(topic) {
    const done = isDone(topic.id);
    const sectionsHtml = topic.sections.map(s => {
        let inner = '';
        if (s.body) inner += `<p>${s.body}</p>`;
        if (s.list && s.list.length) {
            inner += `<ul>${s.list.map(li => `<li>${li}</li>`).join('')}</ul>`;
        }
        return `<div class="section"><h2>${escape(s.h)}</h2>${inner}</div>`;
    }).join('');

    const quickHtml = topic.quickSummary ? `
        <div class="quick-summary">
            <div class="quick-summary-label">⚡ Quick summary před zkouškou</div>
            <div class="quick-summary-body">${topic.quickSummary}</div>
        </div>
    ` : '';

    app.innerHTML = `
        <div class="detail-header">
            <div class="breadcrumb"><a href="#/">← Zpět na témata</a></div>
            <h1 class="detail-title"><span class="detail-icon">${topic.icon}</span> ${escape(topic.title)}</h1>
        </div>
        ${quickHtml}
        ${sectionsHtml}
        <div class="done-toggle">
            <span class="done-toggle-text">Až tohle téma zvládneš, označ ho.</span>
            <button id="done-btn" class="btn btn-toggle ${done ? 'on' : 'off'}">
                ${done ? '✓ Hotovo' : 'Označit jako probrané'}
            </button>
        </div>
        <div style="margin-top:20px; display:flex; gap:10px; flex-wrap:wrap;">
            <a href="#/flashcards?topic=${topic.id}" class="btn btn-ghost">Flashcards z tématu</a>
            <a href="#/quiz?topic=${topic.id}" class="btn btn-ghost">Kvíz z tématu</a>
        </div>
    `;
    $('#done-btn').onclick = () => { toggleDone(topic.id); renderTopic(topic); };
}

// FLASHCARDS
function getQueryParam(name) {
    const hash = location.hash;
    const q = hash.indexOf('?');
    if (q < 0) return null;
    const params = new URLSearchParams(hash.substring(q + 1));
    return params.get(name);
}

function renderFlashcards() {
    const topicFilter = getQueryParam('topic');
    let allCards = topicFilter
        ? FLASHCARDS.filter(c => c.topic === topicFilter)
        : FLASHCARDS;
    let cards = shuffle(allCards);
    let idx = 0;
    let flipped = false;
    let activeFilter = topicFilter || 'all';

    function paint() {
        const filters = ['all', ...TOPICS.map(t => t.id)];
        const filtersHtml = filters.map(f => {
            const label = f === 'all' ? 'Vše' : findTopic(f).title;
            const cls = activeFilter === f ? 'active' : '';
            return `<button data-filter="${f}" class="${cls}">${escape(label)}</button>`;
        }).join('');

        if (cards.length === 0) {
            app.innerHTML = `
                <div class="detail-header">
                    <div class="breadcrumb"><a href="#/">← Zpět</a></div>
                    <h1 class="detail-title">Flashcards</h1>
                </div>
                <div class="fc-filter">${filtersHtml}</div>
                <div class="empty">Žádné kartičky pro tento filtr.</div>
            `;
            attachFilters();
            return;
        }

        const card = cards[idx];
        const topicName = topicTitleById(card.topic);
        app.innerHTML = `
            <div class="detail-header">
                <div class="breadcrumb"><a href="#/">← Zpět</a></div>
                <h1 class="detail-title">Flashcards</h1>
            </div>
            <div class="fc-filter">${filtersHtml}</div>
            <div class="fc-stage">
                <div class="fc-progress">Karta ${idx+1} / ${cards.length}</div>
                <div class="fc-card ${flipped ? 'flipped' : ''}" id="card">
                    <div class="fc-card-label">${flipped ? 'odpověď' : 'otázka / pojem'}</div>
                    <div class="fc-card-topic">${escape(topicName)}</div>
                    <div class="fc-card-content">${flipped ? card.a : escape(card.q)}</div>
                </div>
                <div class="fc-hint">${flipped ? 'Pokračuj dál' : 'Klikni pro odhalení'}</div>
                <div class="fc-controls">
                    <button class="btn btn-ghost" id="prev">← Předchozí</button>
                    ${flipped
                        ? `<button class="btn btn-primary" id="next">Další →</button>`
                        : `<button class="btn btn-primary" id="reveal">Odhalit</button>`
                    }
                    <button class="btn btn-ghost" id="shuffle">Zamíchat</button>
                </div>
            </div>
        `;
        attachFilters();
        $('#card').onclick = () => { flipped = !flipped; paint(); };
        $('#prev').onclick = () => { idx = (idx - 1 + cards.length) % cards.length; flipped = false; paint(); };
        $('#shuffle').onclick = () => { cards = shuffle(cards); idx = 0; flipped = false; paint(); };
        const nextBtn = $('#next');
        if (nextBtn) nextBtn.onclick = (e) => { e.stopPropagation(); idx = (idx + 1) % cards.length; flipped = false; paint(); };
        const revealBtn = $('#reveal');
        if (revealBtn) revealBtn.onclick = (e) => { e.stopPropagation(); flipped = true; paint(); };
    }

    function attachFilters() {
        document.querySelectorAll('.fc-filter button').forEach(btn => {
            btn.onclick = () => {
                activeFilter = btn.getAttribute('data-filter');
                allCards = activeFilter === 'all'
                    ? FLASHCARDS
                    : FLASHCARDS.filter(c => c.topic === activeFilter);
                cards = shuffle(allCards);
                idx = 0; flipped = false;
                paint();
            };
        });
    }

    paint();
}

// QUIZ
function renderQuiz() {
    const topicFilter = getQueryParam('topic');
    const pool = topicFilter
        ? QUIZ.filter(q => q.topic === topicFilter)
        : QUIZ;
    let questions = shuffle(pool).map(q => {
        // Shuffle options while tracking correct
        const correctValue = q.options[q.correct];
        const shuffledOpts = shuffle(q.options);
        return {
            q: q.q,
            options: shuffledOpts,
            correctValue: correctValue,
            topic: q.topic,
        };
    });
    let idx = 0;
    let answered = false;
    let score = 0;

    function paint() {
        if (idx >= questions.length) return paintResult();
        const q = questions[idx];
        const pct = (idx / questions.length) * 100;
        const topicName = topicTitleById(q.topic);
        app.innerHTML = `
            <div class="detail-header">
                <div class="breadcrumb"><a href="#/">← Zpět</a></div>
                <h1 class="detail-title">Kvíz${topicFilter ? ': ' + topicName : ''}</h1>
            </div>
            <div class="quiz-stage">
                <div class="quiz-progress">
                    <span>Otázka ${idx+1} / ${questions.length}</span>
                    <span>Skóre: ${score}</span>
                </div>
                <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
                <div class="quiz-topic">${escape(topicName)}</div>
                <div class="quiz-question">${escape(q.q)}</div>
                <div class="quiz-options" id="options"></div>
                <div class="quiz-next" id="next-wrap"></div>
            </div>
        `;
        const opts = $('#options');
        q.options.forEach(opt => {
            const btn = h(`<button class="quiz-option">${escape(opt)}</button>`);
            btn.onclick = () => handleAnswer(opt, q);
            opts.appendChild(btn);
        });
    }

    function handleAnswer(picked, q) {
        if (answered) return;
        answered = true;
        const correct = picked === q.correctValue;
        if (correct) score++;
        $('#options').querySelectorAll('.quiz-option').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === q.correctValue) btn.classList.add('correct');
            else if (btn.textContent === picked && !correct) btn.classList.add('incorrect');
        });
        const nextBtn = h(`<button class="btn btn-primary">${idx+1 === questions.length ? 'Výsledek' : 'Další →'}</button>`);
        nextBtn.onclick = () => { idx++; answered = false; paint(); };
        $('#next-wrap').appendChild(nextBtn);
    }

    function paintResult() {
        const pct = Math.round((score / questions.length) * 100);
        let feedback = '';
        if (pct === 100) feedback = 'Tohle u testu dáš.';
        else if (pct >= 80) feedback = 'Slušný. Jen pár věcí dopilovat.';
        else if (pct >= 60) feedback = 'Solidní základ, ale ještě se na to mrkni.';
        else if (pct >= 40) feedback = 'Půl na půl. Projeď to ještě jednou.';
        else                feedback = 'Klidně projdi flashcards a zkus znova.';

        if (!topicFilter) state.bestScore = Math.max(pct, state.bestScore || 0);
        saveState();

        app.innerHTML = `
            <div class="detail-header">
                <div class="breadcrumb"><a href="#/">← Zpět</a></div>
                <h1 class="detail-title">Hotovo</h1>
            </div>
            <div class="quiz-stage">
                <div class="quiz-result">
                    <div class="quiz-score">${score} / ${questions.length}</div>
                    <div class="quiz-feedback">${feedback} (${pct} %)</div>
                    <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
                        <button class="btn btn-primary" id="retry">Zkusit znovu</button>
                        <a href="#/" class="btn btn-ghost">Zpět na témata</a>
                    </div>
                </div>
            </div>
        `;
        $('#retry').onclick = () => {
            idx = 0; score = 0; answered = false;
            questions = shuffle(questions).map(q => ({ ...q, options: shuffle(q.options) }));
            paint();
        };
    }

    if (questions.length === 0) {
        app.innerHTML = `
            <div class="detail-header">
                <div class="breadcrumb"><a href="#/">← Zpět</a></div>
                <h1 class="detail-title">Kvíz</h1>
            </div>
            <div class="empty">Žádné otázky pro tento filtr.</div>
        `;
        return;
    }

    paint();
}

// TAHAK
function renderTahak() {
    const blocks = TAHAK.map(b => `
        <div class="tahak-block">
            <h3>${escape(b.title)}</h3>
            <ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
    `).join('');

    app.innerHTML = `
        <div class="detail-header">
            <div class="breadcrumb"><a href="#/">← Zpět</a></div>
            <h1 class="detail-title">Tahák před testem</h1>
        </div>
        <div class="tahak-intro">
            Stručný výtah nejdůležitějších věcí ze všech 20 témat. Když na to nebudeš mít čas, projeď si tohle a budeš v pohodě.
        </div>
        ${blocks}
    `;
}
