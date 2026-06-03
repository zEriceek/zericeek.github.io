// Ekonomika - 2. pololetí - 20 témat k maturitě/zkoušení

const TOPICS = [
  // ====================================================
  // 1. MARKETINGOVÉ KONCEPCE
  // ====================================================
  {
    id: 'marketingove-koncepce',
    title: 'Marketingové koncepce',
    icon: '💡',
    summary: 'Pět vývojových fází marketingu od výrobní po společenskou — co je marketing a jak se historicky měnil pohled na zákazníka.',
    quickSummary: `Pět vývojových fází marketingu od r. 1900 dodnes. <b>Výrobní</b> (1900–1920, "vyrob co nejlevněji", Baťa) → <b>výrobková</b> (kvalita, luxus) → <b>prodejní</b> (1940–50, čím víc reklamy tím líp) → <b>marketingová</b> (1950–70, zákazník v centru, vznikla z krize nadvýroby) → <b>společenská / ekologicko-sociální</b> (od 1970, i potřeby společnosti, Henkel, Škoda). Každá koncepce reaguje na situaci své doby — kdo má navrch: nabídka, kvalita, reklama, zákazník, nebo planeta.`,
    sections: [
      {
        h: 'Co je marketing',
        body: 'Marketing = soubor činností, procesů a strategií, jejichž cílem je poznat potřeby a přání zákazníků, vytvořit pro ně hodnotu a tu pak nabídnout, komunikovat a doručit.',
        list: [
          'Cílem je uspokojit zákazníka lépe než konkurence.',
          'Nejde primárně o hledání nových zákazníků, ale o tvorbu produktu, který zákazník ocení.',
          'Cílem je i dlouhodobý kontakt se zákazníkem (např. věrnostní programy).'
        ]
      },
      {
        h: 'Dva přístupy uspokojování potřeb',
        list: [
          '<b>a) Zaměření na to, co zákazník chce</b> — firma se soustředí na vědomé potřeby. Nevýhoda: ví o nich i konkurence.',
          '<b>b) Zaměření na to, co by zákazník mohl chtít</b> — firma se snaží přijít s novým produktem (Steve Jobs). Výhoda: firma získá náskok.'
        ]
      },
      {
        h: '1. Výrobní koncepce (1900–1920)',
        body: 'Heslo: „Vyrob co nejlevněji a prodáš.“',
        list: [
          'Zákazník vyhledává levný a dostupný výrobek.',
          'Masová výroba, poptávka převyšuje nabídku.',
          'Snižování nákladů → levný výrobek.',
          'Dnes typické pro Čínu, Vietnam. Hlavní představitel: Tomáš Baťa (inspirace Henry Ford).'
        ]
      },
      {
        h: '2. Výrobková koncepce (1920–1940)',
        body: 'Heslo: „Vyrob co nejkvalitněji a prodáš.“',
        list: [
          'Poválečná léta, krize → firmy se orientují na bohatší zákazníky.',
          'Důraz na kvalitu a neustálé zdokonalování výrobků.',
          'Dnes typické pro luxusní auta, kosmetiku, značkové oděvy.'
        ]
      },
      {
        h: '3. Prodejní koncepce (1940–1950)',
        body: 'Heslo: „Čím více reklamy, tím víc prodáš.“',
        list: [
          'Zákazník musí dostat info o existenci výrobku.',
          'Cílem je prodat vše, co bylo vyrobeno.',
          'Rozmach médií (TV, rozhlas, tisk) → šíření reklamy.',
          'Dnes typické pro prací a čisticí prostředky, drogerii.'
        ]
      },
      {
        h: '4. Marketingová koncepce (1950–1970)',
        body: 'Heslo: „Nejdřív poznej potřeby svého zákazníka a prodáš.“',
        list: [
          'Vznik v době krize z nadvýroby.',
          'Zákazník je středem pozornosti, firmy se přizpůsobují jeho požadavkům.',
          'Vznikají zákaznické servisy, věrnostní programy.',
          'Firma rozčleňuje trh, oslovuje cílové skupiny.'
        ]
      },
      {
        h: '5. Ekologicko-sociální / společenská koncepce (od 1970)',
        body: 'Heslo: „Poznej potřeby zákazníka, zohledni i potřeby společnosti a prodáš.“',
        list: [
          'Soulad potřeb zákazníka a společnosti — ekologie, etika, náboženské normy.',
          'V ČR se prosazuje až na přelomu tisíciletí.',
          'Příklady: Henkel (bezfosfátové prací prostředky), Škoda (ekologická výroba).'
        ]
      },
      {
        h: 'Souhrnná tabulka',
        list: [
          '<b>Výrobní</b>: nízké náklady, dostupnost — „Lidé chtějí levné zboží.“',
          '<b>Výrobková</b>: kvalita, vylepšení — „Lidé chtějí to nejlepší.“',
          '<b>Prodejní</b>: aktivní nabídka, reklama — „Lidé si to musí nejdřív koupit.“',
          '<b>Marketingová</b>: přání zákazníka — „Dělejme to, co lidé opravdu chtějí.“',
          '<b>Společenská</b>: zákazník + společnost + příroda — „Musíme podnikat odpovědně.“'
        ]
      }
    ]
  },

  // ====================================================
  // 2. MARKETINGOVÉ ANALÝZY
  // ====================================================
  {
    id: 'marketingove-analyzy',
    title: 'Marketingové analýzy',
    icon: '📊',
    summary: 'PEST, analýza trhu, konkurence, SWOT a fáze marketingového výzkumu (kvantitativní vs kvalitativní).',
    quickSummary: `Aby firma uspěla, musí znát trh. <b>Makro úroveň: PEST</b> = Politicko-právní, Ekonomická, Sociálně-kulturní, Technologická situace státu. <b>Mikro: analýza trhu</b> (co kdo kupuje) a <b>konkurence</b> (kdo, za kolik, kde). <b>SWOT</b> to shrnuje — uvnitř firmy silné/slabé stránky, vně příležitosti/hrozby. Marketingový výzkum má 4 fáze (definice problému → plán → sběr → analýza). Druhy: <b>kvantitativní</b> (dotazník) vs <b>kvalitativní</b> (hloubkový rozhovor, brainstorming — odpovídá Proč? a Jak?).`,
    sections: [
      {
        h: 'Průzkum trhu — obecně',
        list: [
          'Aby podnikatel uspěl, musí znát situaci na trhu.',
          'Velké firmy si analýzu zadají externě, malé firmy oslovují přímo (dotazování, ochutnávky).'
        ]
      },
      {
        h: 'PEST analýza (makro úroveň)',
        body: 'Než firma vstoupí na zahraniční trh, udělá si PEST.',
        list: [
          '<b>P – Politicko-právní</b>: stabilní politický systém, právní stát, korupce.',
          '<b>E – Ekonomická</b>: inflace, krize, stabilita kurzu měny.',
          '<b>S – Sociálně-kulturní</b>: lidská práva, tolerance k menšinám.',
          '<b>T – Technologická</b>: přírodní podmínky, infrastruktura, IT odborníci.'
        ]
      },
      {
        h: 'Analýza trhu (mikro úroveň)',
        list: [
          'Co zákazníci kupují, jaké mají potřeby.',
          'Složení trhu — mladí, senioři, firmy, neziskovky?',
          'Distribuční cesty — prodejna, e-shop?',
          'Kdy se kupuje — sezónnost (klimatizace v zimě?).'
        ]
      },
      {
        h: 'Analýza konkurence',
        list: [
          'Kdo je konkurent a kde sídlí?',
          'Jaké produkty nabízí a jaké doplňkové služby?',
          'Za kolik prodávají?',
          'Kde prodávají a jak propagují?'
        ]
      },
      {
        h: 'SWOT analýza',
        body: 'Shrnuje PEST, analýzu trhu a konkurence do jedné.',
        list: [
          '<b>Uvnitř firmy</b>: silné a slabé stránky.',
          '<b>Zvenčí firmy</b>: příležitosti a hrozby.'
        ]
      },
      {
        h: 'Fáze marketingového výzkumu',
        list: [
          '<b>1. Definování problému</b> — stanovení cílů.',
          '<b>2. Plán výzkumu</b> — metoda, vzorek respondentů.',
          '<b>3. Sběr informací</b> — pozorování (kamery), průzkum (dotazníky), experiment.',
          '<b>4. Analýza</b> — zpracování dat (počítačové programy), odpovědi na problém.'
        ]
      },
      {
        h: 'Druhy marketingového výzkumu',
        list: [
          '<b>Kvantitativní</b> — co největší počet odpovědí na jasně definovanou otázku (osobní/telefonický rozhovor, dotazník).',
          '<b>Kvalitativní</b> — informace o důvodech a motivech chování („Proč?“, „Jak?“). Hloubkový rozhovor, skupinový rozhovor, brainstorming.'
        ]
      }
    ]
  },

  // ====================================================
  // 3. CHOVÁNÍ KUPUJÍCÍCH
  // ====================================================
  {
    id: 'chovani-kupujicich',
    title: 'Chování kupujících',
    icon: '🛒',
    summary: 'Co ovlivňuje rozhodování spotřebitele a typy nákupů (významnější, rutinní, impulzivní).',
    quickSummary: `Rozhodování spotřebitele ovlivňuje <b>osobnost</b> (věk, příjmy, životní styl) a <b>sociokulturní vlivy</b> (víra, zvyky, tradice). Tři typy nákupů: <b>významný</b> (auto, elektronika) probíhá ve 4 fázích — rozpoznání potřeby → hledání informací → výběr → <b>ponákupní chování</b> (zákazník si znovu vše vyhodnocuje, proto s ním prodejce komunikuje i po prodeji); <b>rutinní</b> (potraviny — hledá oblíbenou značku); <b>impulzivní</b> (mekáč na cestě — koupí značku, která zaujme).`,
    sections: [
      {
        h: 'Co ovlivňuje rozhodování',
        list: [
          '<b>a) Osobnost člověka</b> — věk a fáze životního cyklu (dítě, student, ekonomicky aktivní, senior), příjmy, životní styl.',
          '<b>b) Sociokulturní vlivy</b> — víra, zvyky, tradice.'
        ]
      },
      {
        h: 'Významnější nákupy — fáze rozhodování',
        list: [
          '<b>1. Rozpoznání potřeby</b> — spotřebitel pociťuje nedostatek a chce ho uspokojit.',
          '<b>2. Hledání informací</b> — zavrhne nevhodné alternativy (kvůli ceně, postojům). Info z reklam, recenzí, sociálních sítí, showroomu.',
          '<b>3. Výběr produktu</b> — na základě podnětů, zkušeností. Vybírá emocionálně (pocity) nebo racionálně (parametry).',
          '<b>4. Ponákupní chování</b> — vyhodnocuje, zda se rozhodl správně. Prodejce by měl i po prodeji komunikovat a utvrzovat zákazníka, že udělal dobře.'
        ]
      },
      {
        h: 'Rutinní nákupy (potraviny, drogerie)',
        list: [
          'Opakovaně kupované produkty.',
          'Zákazník nechce ztrácet čas porovnáváním.',
          'Rozhoduje se na základě zkušeností — hledá oblíbenou vyzkoušenou značku.'
        ]
      },
      {
        h: 'Impulzivní nákupy',
        list: [
          'Nákup je třeba učinit v dané chvíli.',
          'Koupí značku, která zaujme, nebo o které ví, že uspokojí potřebu.',
          'Často obrácený postup — zákazník vidí značku a dostane chuť (mekáč na cestě).'
        ]
      }
    ]
  },

  // ====================================================
  // 4. CÍLENÝ MARKETING
  // ====================================================
  {
    id: 'cileny-marketing',
    title: 'Cílený marketing',
    icon: '🎯',
    summary: 'Target marketing: segmentace → targeting → positioning. Jak firma rozdělí trh a zaměří se na cílovou skupinu.',
    quickSummary: `Target marketing = firma se zaměří na konkrétní skupinu zákazníků. Tři kroky <b>STP</b>: <b>1) Segmentace</b> — rozdělí trh podle kritérií (geografická, demografická, psychologická). <b>2) Targeting</b> — vybere segment podle atraktivnosti (kolik zákazníků, jaký zisk) a konkurenceschopnosti. <b>3) Positioning</b> — vytvoří jedinečnou pozici značky v hlavě zákazníka (Apple = prestiž, Lidl = kvalita za nízkou cenu, IKEA = levný design).`,
    sections: [
      {
        h: 'Co to je',
        list: [
          'Target marketing — firma se zaměřuje na konkrétní skupinu zákazníků.',
          'Rozdělí kupující do skupin podle kritérií, vybere skupinu, přizpůsobí produkt, cenu, propagaci, distribuci.'
        ]
      },
      {
        h: '1. Segmentace',
        body: 'Rozdělení trhu na části s podobnými potřebami.',
        list: [
          '<b>Geografické členění</b> — státy, kraje, okresy, města, čtvrti.',
          '<b>Demografické členění</b> — věk, pohlaví, vzdělání, národnost.',
          '<b>Sociální, psychologické členění</b> — příjem, životní styl.'
        ]
      },
      {
        h: '2. Targeting',
        body: 'Výběr segmentu, na který se firma zaměří. Rozhoduje podle:',
        list: [
          '<b>Atraktivnosti segmentu</b> — kolik zákazníků, jak velký zisk.',
          '<b>Konkurenceschopnosti</b> — jak velká konkurence, šance uspět.',
          'Firma se může zaměřit na víc segmentů a každému přizpůsobit produkt (více značek pod jednou firmou — dostupná, prémiová, prestižní).',
          '<b>Tržní specializace</b> — firma se zaměří na jeden specifický segment a nabídne mu vše.'
        ]
      },
      {
        h: '3. Positioning',
        body: 'Metoda, jejímž cílem je v myslích zákazníků jasně definovat produkt, značku nebo firmu. Cílem je odlišit se od konkurence.',
        list: [
          '<b>a) Vztah kvalita–cena</b> — prémiová (vyšší kvalita, vyšší cena), dobrá hodnota (kvalita za rozumnou cenu), nízká cena (nižší kvalita).',
          '<b>b) Zdůraznění užitku</b> — dlouhodobé zdůrazňování vlastností.',
          '<b>c) Vzbuzování emocí</b> — Kofola s láskou, nostalgie.',
          '<b>d) Vyjádření identity</b> — značkami vyjadřujeme, kdo jsme.'
        ]
      },
      {
        h: 'Příklady positioningu',
        list: [
          '<b>IKEA</b> — levný a designový nábytek („Snadno si vybavím byt za málo peněz“).',
          '<b>Apple</b> — prémiová technologie („Styl, inovace, prestiž“).',
          '<b>Lidl</b> — kvalita za nízkou cenu („Levné, ale dobré potraviny“).',
          '<b>Red Bull</b> — energie a výkon („Nakopne mě, když potřebuju“).'
        ]
      },
      {
        h: 'Shrnutí',
        list: [
          '1) Segmentace = rozdělení trhu na skupiny zákazníků.',
          '2) Targeting = výběr konkrétní cílové skupiny.',
          '3) Positioning = vytvoření jedinečné pozice značky v hlavě zákazníka.'
        ]
      }
    ]
  },

  // ====================================================
  // 5. INDIVIDUALIZOVANÝ MARKETING
  // ====================================================
  {
    id: 'individualizovany-marketing',
    title: 'Individualizovaný marketing',
    icon: '👤',
    summary: 'Přizpůsobování produktu individuálním potřebám zákazníka. Mass Customization a CRM.',
    quickSummary: `Přizpůsobování produktu individuálním potřebám jednotlivce. Dvě formy: <b>Mass Customization</b> — produkt na míru, ve třech variantách (úplně na zakázku / stejný základ + úpravy / jen jiné balení a reklama). <b>CRM</b> (Customer Relationship Management) — sběr dat z věrnostních karet (vždy se <b>souhlasem podle GDPR</b>) → analýza, co zákazník kupuje a jak se to v čase mění → individuální nabídka (např. sleva na produkt, který přestal kupovat).`,
    sections: [
      {
        h: 'Co to je',
        list: [
          'Přizpůsobování produktu individuálním potřebám každého zákazníka.',
          'Dříve výroba na zakázku (kusová, malosériová).',
          'S rozvojem technologií se na zákazníka může zaměřit víc firem.'
        ]
      },
      {
        h: '1. Mass Customization (přizpůsobení potřebám uživatele)',
        body: 'Pro každého zákazníka se vyrábí produkt přizpůsobený jeho přáním.',
        list: [
          '<b>a) Úplná výroba na zakázku</b> — kompletně podle přání zákazníka.',
          '<b>b) Stejný základ + úpravy</b> — základní produkt + vylepšení / komponenty.',
          '<b>c) Stejný produkt</b>, mění se jen balení, způsob prodeje, reklama.'
        ]
      },
      {
        h: '2. CRM (Customer Relationship Management)',
        body: 'Pochopení individuálních potřeb na základě získaných informací a jejich ovlivnění komunikací.',
        list: [
          'Prodejce sbírá data o nákupech a tvoří nabídku tak, aby zákazníka zaujala.'
        ]
      },
      {
        h: 'Postup CRM',
        list: [
          '<b>1. Získání dat</b> — věrnostní karty (musí být souhlas kvůli GDPR).',
          '<b>2. Analýza dat</b> — software analyzuje, co zákazník kupuje často, co dřív kupoval hodně a teď ne.',
          '<b>3. Individuální nabídka</b> — sleva na produkt, který zákazník přestal kupovat, nebo nabídka podobného produktu vyšší kvality.'
        ]
      }
    ]
  },

  // ====================================================
  // 6. PRODUKT, OBAL, ZNAČKA
  // ====================================================
  {
    id: 'produkt-obal-znacka',
    title: 'Produkt, obal, značka',
    icon: '📦',
    summary: '5 úrovní produktu, funkce obalu, vlastnosti značky. Marketingový mix 4P.',
    quickSummary: `<b>Marketingový mix 4P</b>: Product, Price, Placement, Promotion. Produkt má <b>5 úrovní</b>: základní užitek → základní produkt → očekávaný → vylepšený → potenciální (na příkladu hotelu: přespat → postel/ručník → klid+wifi → masážní vana → výlet se vznášedlem). Obal má <b>5 funkcí</b>: ochranná, propagační, informační, rozlišovací, manipulační. Značka má <b>4 vlastnosti</b>: diferenciace, relevantnost, prestiž, znalost.`,
    sections: [
      {
        h: 'Marketingový mix 4P',
        body: 'Aby byl marketing účinný, musí být nástroje provázány — vytvoří marketingový mix.',
        list: [
          '<b>Product</b> — produkt (statky, služby).',
          '<b>Price</b> — cena (podle strategie).',
          '<b>Placement</b> — distribuce (jak se produkt dostává k zákazníkovi).',
          '<b>Promotion</b> — propagace (reklama, podpora prodeje).'
        ]
      },
      {
        h: 'Co je produkt',
        list: [
          'Výrobek (prací gel, tiskárna).',
          'Služba (pojištění, péče o vlasy, lázně).',
          'Zážitek (koncert, sportovní utkání).',
          'Informace (články).',
          'Osobnost (Justin Bieber, Donald Trump).'
        ]
      },
      {
        h: '5 úrovní produktu',
        list: [
          '<b>1. Základní užitek</b> — hlavní důvod nákupu (host potřebuje přespat).',
          '<b>2. Základní produkt</b> — uspokojuje potřebu (postel, koupelna, ručník).',
          '<b>3. Očekávaný produkt</b> — to, co zákazník očekává (4-hvězda: klid, čistota, wifi).',
          '<b>4. Vylepšený produkt</b> — co konkurence nemá (masážní vana, welcome drink).',
          '<b>5. Potenciální produkt</b> — možné inovace (výlet se vznášedlem).'
        ]
      },
      {
        h: 'Další služby k produktu',
        list: [
          '<b>Bezplatné</b> — předvedení, poradenství, infolinka, dětský koutek.',
          '<b>Placené</b> — dovoz, úprava (oděvů), montáž.',
          '<b>Zprostředkované</b> — prodávající zadá jiné firmě (servis po záruce, splátky).'
        ]
      },
      {
        h: 'Obal — funkce',
        body: 'Obal komunikuje se zákazníkem a vytváří představu o produktu. U prémiových se očekává kvalitní design.',
        list: [
          '<b>1. Ochranná</b> — ochrana před poškozením.',
          '<b>2. Propagační</b> — upoutání pozornosti.',
          '<b>3. Informační</b> — složení, vlastnosti.',
          '<b>4. Rozlišovací</b> — odlišení od konkurence.',
          '<b>5. Manipulační</b> — snadná manipulace (poutko).'
        ]
      },
      {
        h: 'Značka',
        body: 'Odlišuje produkt od konkurence a symbolizuje hodnoty výrobce (kvalita, prestiž). Měla by být snadno zapamatovatelná, vyslovitelná, vyjádřená logem.',
        list: [
          '<b>1. Diferenciace</b> — musí být jedinečná.',
          '<b>2. Relevantnost</b> — musí mít pro kupujícího význam.',
          '<b>3. Prestiž</b> — závislá na kvalitě a oblibě.',
          '<b>4. Znalost</b> — zavedená, neměnící se značka = stálost podniku.'
        ]
      }
    ]
  },

  // ====================================================
  // 7. ŽIVOTNÍ CYKLUS PRODUKTU, BCG ANALÝZA
  // ====================================================
  {
    id: 'zcp-bcg',
    title: 'Životní cyklus produktu, BCG',
    icon: '📈',
    summary: 'Čtyři fáze ŽCP (zavedení, růst, zralost, útlum) a BCG matice (otazníky, hvězdy, dojné krávy, bídní psi).',
    quickSummary: `Životní cyklus produktu má <b>4 fáze</b>: <b>zavedení</b> (kupují inovátoři, firma má ztrátu, investuje do propagace) → <b>růst</b> (osvojitelé, výnosy převýší náklady, vznikne konkurence) → <b>zralost</b> (NEJDELŠÍ fáze, maximální zisk, pak postupný pokles) → <b>útlum</b> (opozdilci, slevy, pokles o 25–50 % → stažení z trhu). <b>BCG matice</b> řadí produkty firmy do 4 kategorií podle tempa růstu a tržního podílu: <b>otazníky</b> (nové), <b>hvězdy</b> (vysoký růst + podíl, budoucí zisky), <b>dojné krávy</b> (zdroj peněz pro firmu), <b>bídní psi</b> (ztrátoví).`,
    sections: [
      {
        h: '1. Zavedení výrobku',
        list: [
          'Výrobek je novinkou — nízká poptávka.',
          'Příjmy nízké, zisk nulový (nebo ztráta).',
          'Velké prostředky na propagaci.',
          'Zákazníci jsou tzv. <b>inovátoři</b>.'
        ]
      },
      {
        h: '2. Růst výrobku',
        list: [
          'Nastává brzy po úspěšném uvedení.',
          'Roste poptávka, výnosy převyšují náklady.',
          'Nakupují tzv. <b>osvojitelé</b>.',
          'Objevuje se konkurence → firma musí přistoupit ke zvýšení kvality / inovaci.'
        ]
      },
      {
        h: '3. Zralost výrobku',
        list: [
          'Nejdelší období života výrobku.',
          'Poptávka na maximu, vysoké zisky.',
          'Cíl: co nejdéle udržet maximální zisk.',
          'Konkurence roste → prodlužuje se přes propagaci nebo snížení ceny.',
          'Postupně klesá zisk.'
        ]
      },
      {
        h: '4. Útlum výrobku',
        list: [
          'Trh je výrobkem přesycen.',
          'Konkurence přichází s novinkami → prodejnost klesá.',
          'Kupují jen tzv. <b>opozdilci</b>.',
          'Firma reaguje slevami.',
          'Při poklesu prodeje o 25–50 % se výrobek stahuje z trhu. Firma případně prodá licenci.'
        ]
      },
      {
        h: 'BCG analýza (Boston Consulting Group)',
        body: 'Porovnává úspěšnost více produktů firmy. Řadí je do 4 kategorií podle tempa růstu a tržního podílu vůči konkurenci.'
      },
      {
        h: 'Otazníky',
        list: [
          'Nové výrobky, malý podíl na trhu.',
          'Hodně peněz na reklamu, vývoj, distribuci.',
          'Rychlý nárůst prodeje, slabá pozice → otázka, zda investovat dál (→ hvězda) nebo stáhnout (→ bídný pes).'
        ]
      },
      {
        h: 'Hvězdy',
        list: [
          'Vysoké tempo růstu, velký tržní podíl.',
          'Zdroje budoucích zisků.',
          'Velké výdaje na podporu prodeje, časem se z nich stanou dojné krávy.'
        ]
      },
      {
        h: 'Dojné krávy',
        list: [
          'Vysoký podíl na trhu, nízké tempo růstu.',
          'Finanční zdroj pro firmu.',
          'Jejich prodej zajišťuje finance i pro ostatní výrobky.'
        ]
      },
      {
        h: 'Bídní psi',
        list: [
          'Nízký podíl, nízké tempo růstu.',
          'Neperspektivní, ztrátové.',
          'Otázka, zda dál vyrábět.'
        ]
      }
    ]
  },

  // ====================================================
  // 8. CENA
  // ====================================================
  {
    id: 'cena',
    title: 'Cena',
    icon: '💰',
    summary: 'Metody stanovení ceny, elasticita poptávky, vztah kvalita-cena, cenové triky.',
    quickSummary: `Dvě metody stanovení ceny: <b>nákladová</b> — vzorec <b>cena = náklady + zisk + DPH</b> (nebere v úvahu zákazníka ani konkurenci); <b>marketingová</b> — vychází z vnímání zákazníka (zjišťuje dotazováním). Cena se liší podle místa, zákazníků, sezony a doby na trhu. <b>Elasticita poptávky</b>: elastická = na změnu ceny reaguje (kožené bundy), neelastická = reaguje minimálně (elektřina, lidé se bez ní neobejdou). Cenové triky: baťovských 9 na konci, přeškrtnuté ceny, balíčky, <b>cenoví bojovníci</b> (levný produkt přiláká k dalším nákupům — tiskárna levně, drahé tonery).`,
    sections: [
      {
        h: 'Vztah ceny a vnímané kvality',
        list: [
          'Dražší produkty působí kvalitněji — i když být nemusí.',
          'Vysoké ceny = exkluzivita, ujištění, že nemůže mít každý.',
          'Nízká cena může vyvolat pocit výhodné koupě.',
          'Příliš nízká cena ale vyvolá dojem nekvality / padělku.'
        ]
      },
      {
        h: 'Nákladová metoda',
        body: 'Cena nebere v úvahu zákazníka ani konkurenci. Podnikatel počítá podle nákladů.',
        list: [
          '<b>Vzorec: cena = náklady + zisk + DPH</b>'
        ]
      },
      {
        h: 'Marketingová metoda',
        list: [
          'Vychází z toho, jak zákazník vnímá produkt.',
          'Dotazováním zjišťuje, za jakou cenu by si jej koupil.',
          'Možno porovnat i s konkurenčním výrobkem.'
        ]
      },
      {
        h: 'Nastavení cen — co cenu ovlivňuje',
        list: [
          '<b>Místo prodeje</b>: chudé vs bohaté státy, okraj vs centrum, kamenný obchod vs internet.',
          '<b>Zákazníci</b>: speciální ceny pro věrné (zákaznické programy).',
          '<b>Období</b>: vyšší ceny v sezoně (klimatizace v létě).',
          '<b>Doba na trhu</b>: novinky bývají dražší, postupně cena klesá.'
        ]
      },
      {
        h: 'Elasticita poptávky',
        list: [
          '<b>Elastická</b> — na změnu ceny zákazníci pružně reagují (zvýšení ceny → pokles poptávaného množství). Příklad: kožené bundy.',
          '<b>Neelastická</b> — na změnu ceny reagují minimálně. Příklad: elektřina (bez ní se neobejdou).'
        ]
      },
      {
        h: 'Cenové triky — vizuální',
        list: [
          'Baťovských 9 na konci (299 Kč vypadá líp než 300 Kč).',
          'Velkým písmem ceny bez DPH, malým s DPH.',
          'Přeškrtnutá vyšší cena na cenovce.',
          '„Sleva až 70 %“ — ve skutečnosti slevněno míň.'
        ]
      },
      {
        h: 'Cenové triky — balíčky',
        list: [
          'Výhodné balíčky, které nutí koupit víc, než člověk potřebuje.',
          'Cena za každou část zvlášť (v restauraci zvlášť maso, zvlášť příloha).'
        ]
      },
      {
        h: 'Cenoví bojovníci',
        list: [
          'Produkty s výrazně nižší cenou (nízká marže).',
          'Cílí na přilákání zákazníka — ten pak nakoupí i další zboží (s vyšší marží).',
          'Příklad: tiskárna levně, drahé tonery.'
        ]
      }
    ]
  },

  // ====================================================
  // 9. DISTRIBUCE
  // ====================================================
  {
    id: 'distribuce',
    title: 'Distribuce',
    icon: '🚚',
    summary: 'Distribuční cesty a jejich vliv na koncovou cenu. Kdy mezičlánek dává smysl.',
    quickSummary: `Distribuce = cesta produktu k zákazníkovi. <b>4 cesty</b>: 1) bez mezičlánku (výrobce → zákazník: banky, e-shopy, truhláři), 2) přes zprostředkovatele, 3) přes maloobchod (čerstvé potraviny: výrobce → supermarket → zákazník), 4) přes velkoobchod (trvanlivé, drogerie, oděvy: výrobce → velkoobchod → maloobchod → zákazník). Čím víc mezičlánků, tím vyšší koncová cena (každý si přidá marži). Mezičlánky ale dávají smysl: <b>výrobci</b> šetří propagaci a síť skladů, <b>zákazníkovi</b> šetří čas (vše na jednom místě).`,
    sections: [
      {
        h: 'Distribuční cesty',
        body: 'Distribuce = způsob, jakým se produkt dostane k zákazníkovi.',
        list: [
          '<b>a) Bez mezičlánku</b> — výrobce → zákazník (banky, truhláři, e-shopy).',
          '<b>b) Zprostředkovatel</b> — hledá pro výrobce odběratele (nebo pro zákazníka dodavatele).',
          '<b>c) Prodej maloobchodu</b> — výrobce → supermarket → zákazník (čerstvé potraviny).',
          '<b>d) Prodej velkoobchodu</b> — výrobce → velkoobchod → maloobchod → zákazník (trvanlivé potraviny, drogerie, oděvy).'
        ]
      },
      {
        h: 'Vliv na cenu',
        list: [
          'Čím víc mezičlánků, tím vyšší koncová cena.',
          'Každý mezičlánek si přidá marži, aby vydělal.',
          'Příklad: výrobce 100 → +5 zprostředkovatel → +20 velkoobchod → +30 maloobchod = 150.'
        ]
      },
      {
        h: 'Proč mezičlánky existují (i když zdražují)',
        list: [
          '<b>Výhody pro výrobce</b>: mezičlánky propagují produkt (chtějí prodat); nemusí budovat síť skladů / prodejen.',
          '<b>Výhody pro zákazníka</b>: časová úspora — nemusí pro mléko do mlékárny, pro maso do masokombinátu. Vše na jednom místě.'
        ]
      }
    ]
  },

  // ====================================================
  // 10. PROPAGACE
  // ====================================================
  {
    id: 'propagace',
    title: 'Propagace',
    icon: '📢',
    summary: 'Reklama, podpora prodeje, osobní prodej a moderní techniky (direct, guerilla, buzz marketing).',
    quickSummary: `Propagace má <b>4 složky</b>: reklama, podpora prodeje, osobní prodej, publicita. Reklama působí racionálně (argumenty, odborníci) nebo emocionálně (city, hudba). Prostředky: média, merch, ambient marketing (vozíky, MHD), <b>product placement</b> (značka ve filmu), event marketing. Moderní techniky: <b>direct marketing</b> (e-mail, SMS — pozor na GDPR), <b>guerilla marketing</b> (kreativní, nízkonákladový, IKEA obývák v metru), <b>buzz marketing</b> (lidi mluví o značce — Ice Bucket Challenge, influenceři).`,
    sections: [
      {
        h: 'Základní složky propagace',
        list: [
          'Reklama.',
          'Podpora prodeje.',
          'Osobní prodej.',
          'Publicita.'
        ]
      },
      {
        h: 'Reklama — jak působí',
        list: [
          '<b>Slogany</b> — opakováním se dostávají do povědomí („Vanish — skvrn a špíny se zbavíš“).',
          '<b>Racionální působení</b> — přesvědčuje argumenty, doporučení odborníků („dermatologicky testováno“).',
          '<b>Emocionální působení</b> — city, hudba, zvířata, děti, oblíbené osobnosti.'
        ]
      },
      {
        h: 'Reklamní prostředky',
        list: [
          '<b>Média</b> — tisk, televize, rozhlas (široký dosah).',
          '<b>Merch</b> — reklamní předměty, čím dál víc i u umělců (oblečení).',
          '<b>Ambient marketing</b> — netradiční formy: nákupní vozíky, držadla v MHD, odpadkové koše.',
          '<b>Product placement</b> — produkt v díle (postava ve filmu pije Nespresso, jezdí VW).',
          '<b>Event marketing</b> — sportovní / kulturní akce, lidé si značku spojí s příjemným zážitkem.'
        ]
      },
      {
        h: 'Podpora prodeje',
        body: 'Přímý podnět ke koupi.',
        list: [
          '<b>Vzorky</b> — zdarma k vyzkoušení, dárek, součást novin.',
          '<b>Odměny</b> — hračka v cereáliích, 3 za cenu 2, 20 % navíc.',
          '<b>Soutěže</b> — šance na výhru po koupi.'
        ]
      },
      {
        h: 'Osobní prodej',
        list: [
          'Přímé působení na zákazníka.',
          'Vysoká účinnost, rychlá zpětná vazba.',
          'Obchodník vyřeší zákazníkovy pochybnosti na místě.'
        ]
      },
      {
        h: 'Direct marketing',
        body: 'Přímé oslovování bez prostředníků.',
        list: [
          'E-mailing — newslettery, personalizované nabídky.',
          'Poštovní zásilky — letáky, katalogy.',
          'Telemarketing — aktivní (firma volá) / pasivní (lidé volají firmě).',
          'SMS kampaně, sociální média (Messenger).',
          '<b>Výhody</b>: personalizace, přesné cílení.',
          '<b>Nevýhody</b>: databáze kontaktů, GDPR souhlas, někdy obtěžuje (SPAM).'
        ]
      },
      {
        h: 'Guerilla marketing',
        body: 'Nekonvenční, kreativní, nízkonákladová forma. Cíl: překvapit, vyvolat emoci, „buzz“.',
        list: [
          'IKEA — obývák v metru (lidé sedí na nábytku IKEA).',
          'Mr. Clean — přechody pro chodce (jedno pole vyčištěno bělobou).'
        ]
      },
      {
        h: 'Buzz marketing',
        body: 'Cíl: dostat lidi k tomu, aby o značce mluvili dobrovolně. Funguje na principu word of mouth (ústní doporučení), v moderní podobě sociální sítě a influenceři.',
        list: [
          'Virální videa — Ice Bucket Challenge (ALS).',
          'Influencer „náhodně“ doporučí produkt → lavina zájmu.',
          'Limitovaná edice (McDonald\'s burgery).',
          'Tajemné kampaně — Kazma a jeho milion dolarů.'
        ]
      }
    ]
  },

  // ====================================================
  // 11. PLÁNOVÁNÍ PRODEJE
  // ====================================================
  {
    id: 'planovani-prodeje',
    title: 'Plánování prodeje',
    icon: '📅',
    summary: 'Jak podnik sestavuje plán prodeje a podle čeho — požadavky odběratelů, rozbor údajů, průzkum poptávky.',
    quickSummary: `Plán prodeje je <b>jen odhad</b> — na rozdíl od kalkulace nákladů, kde podnik přesně ví, kolik co stojí, u prodeje nelze dopředu vědět, jestli to skutečně prodá. Sestavuje se na období (měsíce) nebo oblast (kraj, město). <b>Tři podklady</b>: 1) <b>požadavky odběratelů</b> (uzavřené smlouvy, pravidelné kontakty), 2) <b>rozbor prodejních údajů</b> (kde se prodává dobře/hůř, trend rostoucí/klesající a proč), 3) <b>průzkum poptávky</b> (u nových produktů bez historie). Součástí plánu bývají i prodejní akce (otevření pobočky, veletrh).`,
    sections: [
      {
        h: 'Co je plán prodeje',
        list: [
          'Podnik si stanovuje plán prodeje.',
          'Na rozdíl od kalkulace nákladů (kde podnik přesně ví, co kolik stojí) je u prodeje jen <b>odhad</b> — podnikatel dopředu neví, jestli skutečně prodá, co plánuje.',
          'Plán může být na určité období (měsíce) nebo oblast (Jihočeský kraj, Praha).',
          'Součástí plánů jsou prodejní akce (slavnostní otevření pobočky, veletrhy).'
        ]
      },
      {
        h: 'Podle čeho se plán sestavuje',
        list: [
          '<b>1. Požadavky odběratelů</b> — z uzavřených smluv, podle pravidelných obchodních kontaktů (u stálých zákazníků očekáváme objednané množství podle zkušeností).',
          '<b>2. Rozbor prodejních údajů</b> — kde se prodává dobře/hůře, trend rostoucí/klesající. Při poklesu zjistit proč (konkurence?).',
          '<b>3. Průzkum poptávky</b> — zejména u nových produktů, kde nemáme historická data.'
        ]
      }
    ]
  },

  // ====================================================
  // 12. PRODEJNÍ ODDĚLENÍ
  // ====================================================
  {
    id: 'prodejni-oddeleni',
    title: 'Prodejní oddělení',
    icon: '🏢',
    summary: 'Co dělá oddělení prodeje, jak je organizováno a jaké profese v něm pracují.',
    quickSummary: `Oddělení prodeje zajišťuje <b>vše kolem prodeje produktu</b> — nabídka odběrateli, uzavření smlouvy, zajištění dodání, jednání, propagace. Ve větších firmách bývá propagace v samostatném <b>marketingovém oddělení</b>. Profese: <b>prodejce</b> (uzavírá obchody telefonicky/e-mailem/osobně), <b>merchandiser</b> (v prodejně se stará o vystavení a reklamní akce), <b>key account manager</b> (pečuje o nejdůležitější zákazníky — velkoodběratele, supermarkety), <b>obchodní zástupce/cestující</b> (jezdí k zákazníkům, často OSVČ, ne zaměstnanec).`,
    sections: [
      {
        h: 'Co dělá oddělení prodeje',
        list: [
          'Nabídka odběrateli, uzavření kupní smlouvy, zajištění dodání produktu, jednání s odběrateli, propagace produktu.',
          'Na propagaci bývá ve větších podnicích zřízen speciální útvar — <b>marketingové oddělení</b>.'
        ]
      },
      {
        h: 'Organizace prodeje (a marketingu)',
        body: 'Hierarchie: představenstvo → generální ředitel → marketingový (obchodní) ředitel → marketing / zásobování / prodej (odbyt).',
        list: [
          '<b>Marketing</b>: výzkum trhu, tvorba obchodní politiky.',
          '<b>Zásobování</b>: nákupní skupiny, sklady materiálu.',
          '<b>Prodej</b>: prodejní skupiny, sklady výrobků, podnikové prodejny, fakturace.'
        ]
      },
      {
        h: 'Profese v prodejním oddělení',
        list: [
          '<b>Prodejce</b> — uzavírá obchody (telefonicky, e-mailem, osobně). Může se specializovat na druh produktu.',
          '<b>Merchandiser</b> — v místě prodeje se stará o vystavení, reklamní akce, podporu prodeje.',
          '<b>Key account manager</b> — pečuje o nejdůležitější zákazníky (velkoodběratelé, supermarkety).',
          '<b>Obchodní zástupce (cestující)</b> — jezdí k zákazníkům, informuje o novinkách, přijímá objednávky. Často OSVČ, ne zaměstnanec.'
        ]
      }
    ]
  },

  // ====================================================
  // 13. ZPŮSOB PRODEJE
  // ====================================================
  {
    id: 'zpusob-prodeje',
    title: 'Způsob prodeje',
    icon: '🏪',
    summary: 'Kde a jak firma prodává — vlastní prodejna, showroom, e-shop, online tržiště. B2B vs B2C.',
    quickSummary: `Formy prodeje: <b>vlastní prodejna</b> (nejnákladnější), <b>showroom</b> (vyzkoušení produktu — elektronika), <b>e-shop</b> (vlastní nebo online tržiště typu Allegro, Alza), <b>aukční servery</b> (E-bay, Aukro), <b>slevové servery</b> (Slevomat), <b>katalogový prodej</b>. Online obchodní vztahy se dělí na <b>B2B</b> (Business-to-Business, firma-firma — elektronická výměna objednávek a faktur, nenáročné na grafiku) a <b>B2C</b> (Business-to-Customers, firma-zákazník — grafika musí oslovit cílovou skupinu a budovat důvěru).`,
    sections: [
      {
        h: 'Formy prodeje',
        list: [
          '<b>Ve vlastní prodejně</b> — nejnákladnější forma. Podnikatel může produkty dodávat do obchodů nebo prodávat ve svých provozovnách.',
          '<b>Showroom</b> — provozovna, kde si kupující produkt prohlédne a vyzkouší (elektronika, technika).',
          '<b>E-shop</b> — internetový obchod (vlastní nebo online tržiště typu Allegro, Alza).',
          '<b>Aukční servery</b> — menší prodejci (E-bay, Aukro).',
          '<b>Slevové servery</b> — Slevomat.',
          '<b>Katalogový prodej</b> — vlasová kosmetika pro profesionály.'
        ]
      },
      {
        h: 'B2B (Business-to-Business)',
        list: [
          'Internetové obchodní vztahy mezi společnostmi.',
          'Elektronická výměna dat (objednávky, faktury) — snižuje náklady, automatizuje.',
          'Aplikace a webové rozhraní nejsou náročné na grafiku.'
        ]
      },
      {
        h: 'B2C (Business-to-Customers)',
        list: [
          'Internetové obchody pro koncové zákazníky.',
          'Cílem je získat a udržet zákazníka.',
          'Grafické zpracování musí oslovit cílovou skupinu a vytvářet důvěryhodné prostředí.'
        ]
      }
    ]
  },

  // ====================================================
  // 14. SJEDNÁNÍ KUPNÍ SMLOUVY
  // ====================================================
  {
    id: 'kupni-smlouva',
    title: 'Sjednání kupní smlouvy',
    icon: '📝',
    summary: 'Jak se uzavírá kupní smlouva (i ústně!), náležitosti písemné smlouvy, dražba, tendr, formulářová smlouva.',
    quickSummary: `U většiny zboží <b>stačí ÚSTNĚ</b> — písemné vyhotovení jen u auta a nemovitosti. Smlouva je uzavřena: zakoupením v prodejně za hotové, objednáním z e-shopu, nebo přijetím nabídky (pokud prodávající nechce být vázán, musí v nabídce uvést, že je <b>nezávazná</b>). <b>Náležitosti písemné smlouvy</b>: smluvní strany, popis zboží (druh, jakost, množství), cena, dodací a platební podmínky, povinnosti kupujícího, všeobecné podmínky (záruka, reklamace). Další formy: dražba (nejvyšší nabídkou), <b>tendr</b> (vyhrává nejlepší nabídka podle zadaných kritérií), formulářová smlouva (operátoři, banky, energie), zaplacení zálohy.`,
    sections: [
      {
        h: 'Kdy je třeba písemná smlouva',
        list: [
          'Některé produkty vyžadují písemné vyhotovení (auto, nemovitost).',
          'U většiny zboží stačí <b>ústně</b>.'
        ]
      },
      {
        h: 'Kdy je smlouva uzavřena',
        list: [
          '<b>Zakoupením v prodejně za hotové</b> (ústní uzavření).',
          '<b>Objednáním zboží</b> (např. z e-shopu).',
          '<b>Přijetím nabídky</b> — firma si vyžádá nabídku, prodejce ji pošle, zákazník odpoví objednávkou → smlouva uzavřena.',
          'Pokud prodávající nechce být přijetím vázán, musí v nabídce uvést, že jde o <b>nezávaznou nabídku</b>.'
        ]
      },
      {
        h: 'Náležitosti písemné kupní smlouvy',
        list: [
          'Smluvní strany (prodávající, kupující).',
          'Popis zboží (druh, jakost, množství).',
          'Cena.',
          'Dodací a platební podmínky.',
          'Povinnosti kupujícího (převzít zboží, zaplatit).',
          'Všeobecné podmínky (záruka, řešení reklamací).'
        ]
      },
      {
        h: 'Další možnosti uzavření smlouvy',
        list: [
          '<b>Dražba</b> — nejvyšší nabídkou.',
          '<b>Veřejná soutěž (tendr)</b> — vyhrává nabídka, která nejlépe splňuje zadaná kritéria (cena, dodací lhůta, parametry).',
          '<b>Formulářová smlouva</b> — připravená, zákazník ji akceptuje nebo ne (mobilní operátoři, banky, energie).',
          '<b>Zaplacením zálohy</b>.'
        ]
      }
    ]
  },

  // ====================================================
  // 15. EXPEDICE, DOPRAVA, REKLAMACE
  // ====================================================
  {
    id: 'expedice-reklamace',
    title: 'Expedice, doprava, reklamace',
    icon: '📮',
    summary: 'Jak probíhá expedice, jaké doklady se vystavují, doprava, dodání, řešení vad a reklamací.',
    quickSummary: `Při expedici se vystaví <b>výdejka</b> (odpis ze skladu), <b>dodací list</b>, <b>faktura</b> (často sloučeno) a u odběratele <b>příjemka</b>. Doprava vlastní nebo externí (Česká pošta, PPL, DHL, Geis). U menších zásilek funguje princip <b>sběrných služeb</b> — zásilky se třídí v depech. Když dodávka není v pořádku → <b>protokol o vadách</b> → dodavatel napraví, případně <b>dobropis</b> (faktura na zápornou částku). <b>Mezi firmami NEPLATÍ spotřebitelský zákon</b> (24 měsíců, 30 dnů) — záruka se sjednává ve smlouvě. Dodavatel odpovídá za <b>zjevné i skryté vady</b>.`,
    sections: [
      {
        h: 'Spokojenost zákazníka závisí na',
        list: [
          'Jak rychle dokážeme zpracovat objednávky.',
          'Kolika objednávkám dokážeme vyhovět.',
          'Zda jsme schopni dodat všechny požadované druhy v požadovaném množství.',
          'Prodej chce maximální skladové zásoby, zásobování je proti (drahé).'
        ]
      },
      {
        h: 'Expedice — doklady',
        list: [
          'Dodání se uskuteční v co nejkratším termínu / dohodnuté době.',
          'V den dodání proběhne expedice — vyjmutí ze skladu, příprava na naložení.',
          'Vystaví se <b>výdejka</b> a produkty se odepíší z karty zásob.',
          'Oznámí se odběrateli (e-mail / SMS).',
          'Vystaví se <b>dodací list</b> a <b>faktura</b> (často sloučeno).',
          'U zásob: odběratel naskladní u sebe na základě <b>příjemky</b>.'
        ]
      },
      {
        h: 'Zajištění dopravy',
        list: [
          'Vlastní vozy/řidiči nebo externí dopravce (Česká pošta, DHL, PPL, Geis).',
          'Druh dopravy: podle velikosti, ceny, vzdálenosti, rychlosti.',
          'U menších zásilek: <b>sběrné služby</b> (PPL, DPD, DHL, Zásilkovna) — zásilky se shromáždí v depu, roztřídí a pošlou do depa u kupujícího.'
        ]
      },
      {
        h: 'Dodání',
        list: [
          'Odběratel zásilku převezme a potvrdí dodací list / dopravní doklad.',
          'U některých výrobků další doklady — certifikát, technická dokumentace, záruční list.',
          'Následuje přejímka na sklad.',
          'Doplňkové: instalace výrobku, poradenství, servis, náhradní díly.'
        ]
      },
      {
        h: 'Vady a reklamace',
        list: [
          'Není-li dodávka v pořádku → <b>protokol o vadách</b>.',
          'Dodavatel napraví (pošle chybějící, vymění za správný druh).',
          'Vhodné nabídnout slevu nebo bezplatnou opravu.',
          'Když nelze dodat → <b>dobropis</b> (faktura na zápornou částku — vrácení peněz).',
          '<b>Mezi firmami neplatí spotřebitelský zákon</b> (24 měsíců záruka, 30 dnů na vyřízení) — záruku lze sjednat ve smlouvě.',
          'Dodavatel odpovídá za <b>zjevné i skryté vady</b> (vady, které produkt měl v době prodeje).',
          'Reklamaci může odmítnout — pokud to dodací podmínky umožňují (např. neodpovídá za škody způsobené přepravou).'
        ]
      }
    ]
  },

  // ====================================================
  // 16. PLATEBNÍ PODMÍNKY (domácí)
  // ====================================================
  {
    id: 'platebni-podminky',
    title: 'Platební podmínky',
    icon: '💳',
    summary: 'Placení před / při / po dodání. Obchodní úvěr. Vymáhání pohledávek krok za krokem.',
    quickSummary: `Tři fáze placení: <b>před dodáním</b> (nejlepší pro prodejce — jistota platby + peníze s předstihem; pro kupujícího riziko, že zboží nepřijde; časté u nových odběratelů), <b>při dodání</b> (dobírka nebo proti dokumentům), <b>po dodání</b> (odklad faktury, <b>dodavatelský úvěr</b> nad 30 dní = úrok). <b>Obchodní úvěr</b> = úvěr od dodavatele, ne banky. Když odběratel neplatí: 1) telefon/e-mail upomínky → 2) písemná upomínka → 3) penále → 4) zastavení dodávek → 5) poslední upozornění → 6) <b>soud (platební rozkaz)</b> → 7) <b>exekuce</b>. Zajištění dluhu: záruka, zadržovací právo, zástavní právo.`,
    sections: [
      {
        h: 'Placení před dodáním',
        list: [
          'Pro prodávajícího <b>nejvýhodnější</b> — má jistotu, že odběratel zaplatí.',
          'Peníze má s předstihem a může je použít na další činnost (dřív další výnosy).',
          'Pro kupujícího nevýhodné — nemá jistotu, že zboží přijde.',
          'Časté u neznámých / nových odběratelů.',
          'Možnost zálohy (částečná úhrada předem, zbytek po dodání).'
        ]
      },
      {
        h: 'Placení po dodání',
        list: [
          'Běžný odklad zaplacení faktury — má splatnost.',
          '<b>Dodavatelský úvěr</b> — splatnost delší než 30 dnů → prodávající získává úrok (může být ve smlouvě).',
          'Pro prodávajícího riziko, že odběratel nezaplatí.',
          'Pro kupujícího výhodné — může zaplatit, až zboží prodá.'
        ]
      },
      {
        h: 'Placení při dodání',
        list: [
          '<b>Při převzetí zboží</b> — typicky dobírka (výdej proti zaplacení).',
          '<b>Při převzetí dokumentů</b> — kdo je majitelem dokumentů (faktura, přepravní doklad, pojištění, certifikáty), může se zbožím nakládat.',
          'Zboží dorazí do skladu v cílové zemi → kupující zaplatí → obdrží doklady → zboží si může vyzvednout.'
        ]
      },
      {
        h: 'Obchodní úvěr',
        list: [
          'Druh úvěru, který neposkytuje banka, ale <b>dodavatel</b> svým odběratelům.',
          'Firma pošle produkty „na dluh“, dostane úrok.'
        ]
      },
      {
        h: 'Vymáhání pohledávek — kroky',
        list: [
          '1) Telefonické / e-mailové upomínky.',
          '2) Písemná upomínka (cca 2 týdny po splatnosti).',
          '3) Vyúčtování penále.',
          '4) Zastavení dodávek (cca měsíc po splatnosti).',
          '5) Poslední písemné upozornění s návrhem splátek.',
          '6) Obrátit se na soud — ve zkráceném řízení vydá <b>platební rozkaz</b>.',
          '7) Pokud stále nezaplatil — soud vydá <b>exekuci</b>.'
        ]
      },
      {
        h: 'Předcházení nezaplacení',
        list: [
          '<b>a) Utvrzení dluhu</b> — sjednání smluvní pokuty, písemné uznání dluhu (usnadní soudní vymáhání).',
          '<b>b) Zajištění dluhu</b>: <b>záruka</b> (zaplatí ručitel), <b>zadržovací právo</b> (věc zadržíme do zaplacení), <b>zástavní právo</b> (věc v zástavě můžeme prodat a uhradit dluh).'
        ]
      }
    ]
  },

  // ====================================================
  // 17. VÝZNAM A FORMY MEZINÁRODNÍHO OBCHODU
  // ====================================================
  {
    id: 'mo-vyznam-formy',
    title: 'Význam a formy MO',
    icon: '🌍',
    summary: 'Co je zahraniční obchod, proč státy mezi sebou obchodují, export / import / reexport.',
    quickSummary: `Zahraniční obchod = směna zboží a služeb přes hranice státu. Důvody: rozdílné klimatické podmínky (melouny: ČR vs Španělsko), surovinové bohatství (nemáme ropu), nižší mzdy v cizině, stav vnitřního trhu (úroda/neúroda). <b>3 významy</b>: ekonomický (úspora nákladů), politický (vztahy mezi státy), kulturní (poznávání). Formy: <b>vývoz</b> (přímý/nepřímý přes speditéra), <b>dovoz</b>, <b>reexport</b> = země A nakoupí v B a prodá do C (přímý B→C / nepřímý B→A→C). Důvody reexportu: ekonomický, <b>kompletace vývozů</b> (komplet je dražší), <b>obchodně politické</b> (obejít vysoká cla přes 3. zemi).`,
    sections: [
      {
        h: 'Definice',
        body: 'Zahraniční obchod = směna zboží a služeb, která probíhá <b>přes hranice státu</b>.'
      },
      {
        h: 'Důvody MO',
        list: [
          'Rozdílné klimatické a přírodní podmínky (melouny: Španělsko vs ČR).',
          'Surovinové bohatství (nemáme mořské plody, ropu).',
          'Levnější výroba v cizině (mzdy v Číně).',
          'Stav vnitřního trhu (neúroda → dovoz, přebytek → vývoz).'
        ]
      },
      {
        h: 'Význam MO',
        list: [
          '<b>Ekonomický</b> — úspora nákladů a výrobních faktorů.',
          '<b>Politický</b> — vztahy mezi obchodujícími státy.',
          '<b>Kulturní</b> — poznávání tradic, surovin, náboženství.'
        ]
      },
      {
        h: 'Vývoz (export)',
        body: 'Prodej zboží/služeb do zahraničí.',
        list: [
          '<b>Přímý</b> — 2 subjekty (tuzemský prodejce a zahraniční odběratel), levnější.',
          '<b>Nepřímý</b> — mezi nimi ještě speditér/přepravce.'
        ]
      },
      {
        h: 'Dovoz (import)',
        body: 'Nákup zboží/služeb ze zahraničí.',
        list: [
          '<b>Přímý</b> — zahraniční prodejce, tuzemský odběratel.',
          '<b>Nepřímý</b> — mezi nimi spediční firma.'
        ]
      },
      {
        h: 'Reexport',
        body: 'Reexportér ze země A nakoupí v zemi B a prodá do země C.',
        list: [
          '<b>Přímý</b> — zboží putuje přímo B → C.',
          '<b>Nepřímý</b> — zboží jde nejdřív do A, pak teprve do C.'
        ]
      },
      {
        h: 'Důvody reexportu',
        list: [
          '<b>Ekonomický</b> — levně koupit v Číně, dráž prodat po Evropě.',
          '<b>Kompletace vývozů</b> — koupí míčky v Číně, hole vyrobí sám, prodá komplet dráž.',
          '<b>Obchodně politické</b> — vysoká cla mezi 2 zeměmi → reexport přes třetí zemi obejde cla.'
        ]
      }
    ]
  },

  // ====================================================
  // 18. VSTUP NA ZAHRANIČNÍ TRHY + INCOTERMS 2020
  // ====================================================
  {
    id: 'mo-vstup-incoterms',
    title: 'Vstup na trhy + INCOTERMS',
    icon: '🚪',
    summary: 'Tři způsoby vstupu firmy na zahraniční trh + dodací podmínky INCOTERMS 2020 (vydává Paříž).',
    quickSummary: `<b>3 způsoby vstupu</b> na zahraniční trh: 1) <b>vývozní operace</b> (vyrobit doma, vyvézt), 2) <b>aktivity nenáročné na kapitál</b> — licence, <b>franšíza</b> (McDonald's, KFC — firma prodá know-how a značku, podnikatel platí poplatek), 3) <b>kapitálové vstupy</b> (vlastní výrobna v zahraničí, fúze, akvizice). <b>INCOTERMS 2020</b> = mezinárodní pravidla dodacích podmínek vydaná <b>Mezinárodní obchodní komorou v Paříži</b>. Určují místo dodání, přechod rizik a nákladů. <b>11 doložek</b> — krajní body: <b>EXW</b> = minimum pro prodávajícího (kupující bere v továrně), <b>DDP</b> = maximum (prodávající platí všechno až ke kupujícímu, vč. cla). Mezi nimi <b>FOB</b> (na palubu lodi), <b>CIF</b> (náklady + pojištění + dopravné).`,
    sections: [
      {
        h: '1) Vývozní operace',
        list: [
          'Firma vyrobí v tuzemsku a vyveze na zahraniční trh.',
          'Pro významnější tržní podíl musí investovat do mezinárodního marketingu.'
        ]
      },
      {
        h: '2) Aktivity nenáročné na kapitál',
        list: [
          'Levnější vstup — typicky <b>licence</b> nebo <b>franšíza</b>.',
          'Firma prodá know-how a značku zahraničnímu podnikateli, který za poplatek / podíl na zisku podniká jejím jménem.',
          'Příklad: McDonald\'s, KFC.'
        ]
      },
      {
        h: '3) Kapitálové vstupy',
        list: [
          'Firma koupí / postaví v zahraničí výrobní halu — vyrábí a prodává přímo tam.',
          'Případně <b>fúze</b> nebo <b>akvizice</b>.'
        ]
      },
      {
        h: 'Dodací podmínky — co určují',
        list: [
          'Práva a povinnosti prodávajícího a kupujícího.',
          'Místo, do kterého zajišťuje dopravu prodávající.',
          'Kde přechází rizika poškození a ztráty.',
          'Kde přechází hrazení nákladů.'
        ]
      },
      {
        h: 'INCOTERMS 2020',
        body: 'Sjednocená mezinárodní pravidla výkladu dodacích podmínek vydaná <b>Mezinárodní obchodní komorou v Paříži</b>.'
      },
      {
        h: '11 doložek INCOTERMS 2020',
        list: [
          '<b>EXW</b> — Ze závodu (kupující bere ve výrobním závodě, vše hradí).',
          '<b>FCA</b> — Vyplaceně dopravci.',
          '<b>FAS</b> — Vyplaceně k boku lodi (přístav nakládky).',
          '<b>FOB</b> — Vyplaceně na palubu (přístav nakládky).',
          '<b>CFR</b> — Náklady a dopravné (přístav vykládky).',
          '<b>CIF</b> — Náklady, pojištění a dopravné (přístav vykládky).',
          '<b>CPT</b> — Přeprava placena do (místo určení).',
          '<b>CIP</b> — Přeprava a pojištění placeny do (místo určení).',
          '<b>DPU</b> — Dodáno a vyloženo v místě určení.',
          '<b>DAP</b> — Dodáno v místě určení.',
          '<b>DDP</b> — Dodáno, clo uhrazeno (prodávající platí všechno).'
        ]
      },
      {
        h: 'Pomůcka k zapamatování',
        body: '<b>EXW</b> = minimum povinností pro prodávajícího (kupující bere v továrně). <b>DDP</b> = maximum (prodávající platí všechno až ke kupujícímu, včetně cla). Čím dál v abecedě, tím víc povinností přechází na prodávajícího.'
      }
    ]
  },

  // ====================================================
  // 19. RIZIKA V MO
  // ====================================================
  {
    id: 'mo-rizika',
    title: 'Rizika v MO',
    icon: '⚠️',
    summary: 'Pět typů rizik (tržní, komerční, přepravní, teritoriální, kurzová) a hedging proti kurzu (forward, opce, swap).',
    quickSummary: `<b>5 typů rizik</b>: <b>tržní</b> (pokles poptávky po exportu), <b>komerční</b> (partner nesplní závazky — odběratel, dopravce, pojišťovna), <b>přepravní</b> (ztráta/poškození zboží — řeší INCOTERMS), <b>teritoriální</b> (nečekaná situace v zahraničí — makroekonomické šoky, politický převrat, přírodní katastrofy), <b>kurzová</b> (vývoj měny — exportérům prospívá <b>slabá</b> domácí koruna; př.: 100 € při 28 CZK/EUR = 2 800 Kč vs 2 400 Kč při kurzu 24). Proti kurzovému riziku se používá <b>hedging</b> — měnové deriváty: <b>forward</b> (předem domluvený kurz, povinnost obou stran), <b>opce</b> (právo, ne povinnost, vždy se platí opční prémie), <b>swap</b> (kombinace spotového a forwardového obchodu).`,
    sections: [
      {
        h: 'Tržní rizika',
        list: [
          'Vyplývají z nižší poptávky po exportu.',
          'Trhy se vyvíjí různě — doma růst, v zahraničí pokles.',
          'Na domácím trhu firma snáz odhalí příčinu poklesu.',
          'Řešení: otevřít v zahraničí kontaktní místo (pár zaměstnanců, monitorují trh, výroba zůstává v ČR).'
        ]
      },
      {
        h: 'Komerční rizika',
        list: [
          'Nesplnění závazků partnerem (odběratel, dopravce, pojišťovna).',
          'V zahraničí nepříjemnější — jiné zákony, zvyklosti, vymahatelnost.',
          'Patří sem riziko platební neschopnosti odběratele (v cizině složitější — jazyk, postupy).'
        ]
      },
      {
        h: 'Přepravní rizika',
        list: [
          'Ztráta nebo poškození zboží během přepravy.',
          'Důležité: kdo je v jaké chvíli za škodu zodpovědný (řeší INCOTERMS).'
        ]
      },
      {
        h: 'Teritoriální rizika',
        list: [
          'Nečekaná situace v zahraničí.',
          'Makroekonomické šoky (inflace, pokles HDP), politické změny (převrat), přírodní katastrofy.',
          'Vede k vyšším nákladům, poklesu poptávky, přerušení vztahů.'
        ]
      },
      {
        h: 'Kurzová rizika',
        list: [
          'Riziko z nepříznivého vývoje měny.',
          '<b>Exportérům přispívá slabá domácí měna.</b>',
          'Příklad: prodej za 100 € → při 24 CZK/EUR vydělá 2 400 Kč, při slabší koruně 28 CZK/EUR vydělá 2 800 Kč.',
          'Eliminace: <b>hedging</b> (měnové deriváty).'
        ]
      },
      {
        h: 'Hedging — měnové deriváty',
        list: [
          '<b>Forward</b> — předem domluvený kurz pro nákup/prodej měny v termínu. Povinnost obou stran.',
          '<b>Opce</b> — <b>právo</b> (ne povinnost) koupit/prodat měnu za daný kurz. Firma platí opční prémii vždy.',
          '<b>Swap</b> — kombinace spotového a forwardového obchodu (dnes směním za aktuální kurz + domluvím odkup zpět).'
        ]
      }
    ]
  },

  // ====================================================
  // 20. OBCHODNĚ-ZAHRANIČNÍ POLITIKA
  // ====================================================
  {
    id: 'mo-politika',
    title: 'Obchodně-zahraniční politika',
    icon: '⚖️',
    summary: 'Dva přístupy státu — liberalismus a protekcionismus. Nástroje protekcionismu (cla, kvóty, normy, podpora vývozu).',
    quickSummary: `Dva přístupy státu: <b>liberalismus</b> (stát nezasahuje, volná konkurence — prospívá spotřebiteli: nižší ceny, vyšší kvalita; mínus pro domácí firmy) vs <b>protekcionismus</b> (stát chrání domácí výrobce před dovozem — plus pro výrobce, mínus pro spotřebitele; může vyvolat <b>odvetu</b> od druhého státu). <b>4 nástroje protekcionismu</b>: 1) <b>cla</b> (poplatek za přechod hranic, zdražují dovoz, příjem do rozpočtu), 2) <b>množstevní kvóty</b> (limit na množství), 3) <b>normy a předpisy</b> (jaké podmínky musí dovoz splňovat), 4) <b>podpora vývozu</b> (info instituce, exportní banky). Význam cla: <b>fiskální</b>, <b>obchodně-politický</b>, <b>cenotvorný</b>. Druhy cel: <b>preferenční, odvetné, ochranné, vyrovnávací</b>.`,
    sections: [
      {
        h: 'Liberalismus',
        list: [
          'Stát nezasahuje, volná konkurence domácího a zahraničního zboží.',
          'Spotřebitel těží — větší výběr, nižší ceny, vyšší kvalita.',
          'Riziko: levné dovozy můžou zlikvidovat domácí firmy.'
        ]
      },
      {
        h: 'Protekcionismus',
        list: [
          'Stát chrání domácí výrobce — hlavně ochranou před dovozem.',
          'Domácí výrobci mají lepší podmínky.',
          'Riziko: menší nabídka, vyšší ceny, horší kvalita.',
          'Opatření můžou vyvolat <b>odvetu</b> od druhého státu.'
        ]
      },
      {
        h: '1. Cla',
        list: [
          'Poplatek za pohyb zboží přes hranice.',
          'Zvyšují cenu dováženého → méně konkurenceschopné vůči domácímu.',
          'Přinášejí prostředky do státního rozpočtu.'
        ]
      },
      {
        h: '2. Množstevní kvóty',
        list: [
          'Stát stanoví množství / hodnotu, které lze vyvézt nebo dovézt.',
          'Při nevyčerpaných kvótách lze požádat o licenci.',
          'Po vyčerpání: obchod zakázán nebo zvýšeno clo.'
        ]
      },
      {
        h: '3. Normy a předpisy',
        list: [
          'Stát stanoví podmínky, jaké musí dovážené zboží splňovat.'
        ]
      },
      {
        h: '4. Podpora vývozu',
        list: [
          'Vývoz zvyšuje produkci, HDP, zaměstnanost.',
          'Vlády zřizují instituce s informacemi o trzích (businessinfo.cz).',
          'Státy zřizují <b>exportní banky</b> — pojišťují vývoz, poskytují úvěry a záruky.'
        ]
      },
      {
        h: 'Clo — význam',
        list: [
          '<b>Fiskální (rozpočtový)</b> — příjem do státního rozpočtu.',
          '<b>Obchodně-politický</b> — hlavní nástroj obchodní politiky.',
          '<b>Cenotvorný</b> — clo je položkou ceny.'
        ]
      },
      {
        h: 'Druhy cel podle účelu',
        list: [
          '<b>Preferenční</b> — zvýhodnění/znevýhodnění daných zemí.',
          '<b>Odvetné</b> — jako odveta za opatření proti nám.',
          '<b>Ochranné</b> — vysoké sazby chrání domácího prodejce.',
          '<b>Vyrovnávací</b> — vyrovnává subvence k zahraničnímu zboží.'
        ]
      }
    ]
  }
];

// =====================================================
// FLASHCARDS - klíčové pojmy ze všech 20 témat
// =====================================================
const FLASHCARDS = [
  // 1. Marketingové koncepce
  { q: 'Marketing', a: 'Soubor činností, procesů a strategií, jejichž cílem je poznat potřeby zákazníků, vytvořit hodnotu a tu nabídnout, komunikovat a doručit.', topic: 'marketingove-koncepce' },
  { q: '5 marketingových koncepcí', a: 'Výrobní, výrobková, prodejní, marketingová, ekologicko-sociální (společenská).', topic: 'marketingove-koncepce' },
  { q: 'Výrobní koncepce — heslo', a: '„Vyrob co nejlevněji a prodáš.“ Nejstarší koncepce (1900–1920). Dnes typická pro Čínu, Vietnam.', topic: 'marketingove-koncepce' },
  { q: 'Výrobková koncepce — heslo', a: '„Vyrob co nejkvalitněji a prodáš.“ (1920–1940). Dnes typické pro luxusní auta a kosmetiku.', topic: 'marketingove-koncepce' },
  { q: 'Prodejní koncepce — heslo', a: '„Čím více reklamy, tím víc prodáš.“ (1940–1950). Dnes typické pro prací a čisticí prostředky.', topic: 'marketingove-koncepce' },
  { q: 'Marketingová koncepce — heslo', a: '„Nejdřív poznej potřeby svého zákazníka a prodáš.“ (1950–1970). Vznikla v krizi z nadvýroby.', topic: 'marketingove-koncepce' },
  { q: 'Ekologicko-sociální koncepce', a: '„Poznej potřeby zákazníka, zohledni i potřeby společnosti a prodáš.“ Od r. 1970. Příklad: Henkel, Škoda.', topic: 'marketingove-koncepce' },

  // 2. Marketingové analýzy
  { q: 'Co je PEST analýza', a: 'Makro-úroveň analýzy státu před vstupem na trh. P – Politicko-právní, E – Ekonomická, S – Sociálně-kulturní, T – Technologická.', topic: 'marketingove-analyzy' },
  { q: 'SWOT analýza', a: 'Shrnuje PEST, trh a konkurenci. Uvnitř firmy: silné a slabé stránky. Zvenčí: příležitosti a hrozby.', topic: 'marketingove-analyzy' },
  { q: 'Kvantitativní vs kvalitativní výzkum', a: 'Kvantitativní = velký počet odpovědí na jasnou otázku (dotazník). Kvalitativní = důvody a motivy chování („Proč?“, „Jak?“) — hloubkový rozhovor, brainstorming.', topic: 'marketingove-analyzy' },
  { q: '4 fáze marketingového výzkumu', a: '1) Definování problému, 2) plán výzkumu, 3) sběr informací (pozorování, dotazníky, experiment), 4) analýza.', topic: 'marketingove-analyzy' },

  // 3. Chování kupujících
  { q: '4 fáze významnějšího nákupu', a: '1) Rozpoznání potřeby, 2) hledání informací, 3) výběr produktu, 4) ponákupní chování.', topic: 'chovani-kupujicich' },
  { q: 'Co je ponákupní chování', a: 'Zákazník vyhodnocuje, zda se rozhodl správně. Prodejce by měl i po prodeji komunikovat a utvrzovat zákazníka, že udělal dobře.', topic: 'chovani-kupujicich' },
  { q: 'Rutinní nákupy', a: 'Opakovaně kupované produkty. Zákazník nechce ztrácet čas porovnáváním, hledá oblíbenou vyzkoušenou značku.', topic: 'chovani-kupujicich' },
  { q: 'Impulzivní nákupy', a: 'Nákup je třeba učinit hned. Zákazník koupí značku, která zaujme, nebo dostane chuť při pohledu na ni.', topic: 'chovani-kupujicich' },

  // 4. Cílený marketing
  { q: '3 kroky cíleného marketingu', a: '1) Segmentace (rozdělení trhu), 2) targeting (výběr cílové skupiny), 3) positioning (pozice značky v hlavě zákazníka).', topic: 'cileny-marketing' },
  { q: 'Druhy segmentace', a: 'Geografická (státy, města), demografická (věk, pohlaví, vzdělání), sociálně-psychologická (příjem, životní styl).', topic: 'cileny-marketing' },
  { q: 'Podle čeho se rozhoduje targeting', a: 'Atraktivnost segmentu (kolik zákazníků, jaký zisk) a konkurenceschopnost (jak velká konkurence, šance uspět).', topic: 'cileny-marketing' },
  { q: 'Positioning', a: 'Metoda, jejímž cílem je v myslích zákazníků jasně definovat produkt/značku. Cílem je odlišit se od konkurence.', topic: 'cileny-marketing' },

  // 5. Individualizovaný marketing
  { q: 'Mass Customization', a: 'Přizpůsobení potřebám uživatele — pro každého zákazníka se vyrábí produkt podle jeho přání. Tři varianty: úplně na zakázku, stejný základ + úpravy, jen jiné balení/reklama.', topic: 'individualizovany-marketing' },
  { q: 'CRM', a: 'Customer Relationship Management — pochopení individuálních potřeb na základě dat (z věrnostních karet) a tvorba individuální nabídky.', topic: 'individualizovany-marketing' },
  { q: '3 kroky CRM', a: '1) Získání dat (věrnostní karty + GDPR souhlas), 2) analýza dat, 3) individuální nabídka.', topic: 'individualizovany-marketing' },

  // 6. Produkt, obal, značka
  { q: 'Marketingový mix 4P', a: 'Product (produkt), Price (cena), Placement (distribuce), Promotion (propagace).', topic: 'produkt-obal-znacka' },
  { q: '5 úrovní produktu', a: '1) Základní užitek, 2) základní produkt, 3) očekávaný produkt, 4) vylepšený produkt, 5) potenciální produkt.', topic: 'produkt-obal-znacka' },
  { q: '5 funkcí obalu', a: '1) Ochranná, 2) propagační, 3) informační, 4) rozlišovací, 5) manipulační.', topic: 'produkt-obal-znacka' },
  { q: '4 vlastnosti značky', a: '1) Diferenciace (jedinečnost), 2) relevantnost (význam pro zákazníka), 3) prestiž, 4) znalost (stálost podniku).', topic: 'produkt-obal-znacka' },

  // 7. ŽCP a BCG
  { q: '4 fáze životního cyklu produktu', a: '1) Zavedení, 2) růst, 3) zralost, 4) útlum.', topic: 'zcp-bcg' },
  { q: 'Kdo kupuje v zavedení', a: 'Inovátoři. Ve fázi růstu osvojitelé, v útlumu opozdilci.', topic: 'zcp-bcg' },
  { q: 'BCG analýza', a: 'Boston Consulting Group — porovnává produkty firmy podle tempa růstu a tržního podílu. 4 kategorie: otazníky, hvězdy, dojné krávy, bídní psi.', topic: 'zcp-bcg' },
  { q: 'Hvězdy v BCG', a: 'Vysoké tempo růstu, velký tržní podíl. Zdroje budoucích zisků, časem se z nich stanou dojné krávy.', topic: 'zcp-bcg' },
  { q: 'Dojné krávy v BCG', a: 'Vysoký podíl na trhu, nízké tempo růstu. Finanční zdroj pro firmu, financují ostatní výrobky.', topic: 'zcp-bcg' },
  { q: 'Otazníky v BCG', a: 'Nové výrobky, malý podíl. Firma se rozhoduje, zda investovat (→ hvězda) nebo stáhnout (→ bídný pes).', topic: 'zcp-bcg' },
  { q: 'Bídní psi v BCG', a: 'Nízký podíl, nízké tempo růstu. Neperspektivní, ztrátoví — zvážit, zda dál vyrábět.', topic: 'zcp-bcg' },

  // 8. Cena
  { q: 'Nákladová metoda stanovení ceny', a: 'Cena = náklady + zisk + DPH. Nebere v úvahu zákazníka ani konkurenci.', topic: 'cena' },
  { q: 'Marketingová metoda stanovení ceny', a: 'Vychází z toho, jak zákazník vnímá produkt. Dotazováním se zjišťuje, za kolik by si jej koupil.', topic: 'cena' },
  { q: 'Elastická poptávka', a: 'Na změnu ceny zákazníci pružně reagují — zvýšení ceny způsobí pokles poptávaného množství (např. kožené bundy).', topic: 'cena' },
  { q: 'Neelastická poptávka', a: 'Na změnu ceny reagují minimálně — bez statku se neobejdou (např. elektřina).', topic: 'cena' },
  { q: 'Cenoví bojovníci', a: 'Produkty s velmi nízkou cenou (nízká marže). Mají přilákat zákazníky, kteří pak nakoupí i další zboží s vyšší marží. Příklad: tiskárna levně, drahé tonery.', topic: 'cena' },

  // 9. Distribuce
  { q: '4 distribuční cesty', a: '1) Bez mezičlánku (výrobce → zákazník), 2) přes zprostředkovatele, 3) přes maloobchod, 4) přes velkoobchod.', topic: 'distribuce' },
  { q: 'Proč mezičlánky existují, když zdražují', a: 'Výrobce: mezičlánky propagují produkt, nemusí budovat síť skladů. Zákazník: časová úspora — vše na jednom místě.', topic: 'distribuce' },

  // 10. Propagace
  { q: 'Složky propagace', a: 'Reklama, podpora prodeje, osobní prodej, publicita.', topic: 'propagace' },
  { q: 'Direct marketing', a: 'Přímé oslovování bez prostředníků — e-maily, letáky, telemarketing, SMS. Výhody: personalizace, cílení. Nevýhody: GDPR, SPAM.', topic: 'propagace' },
  { q: 'Guerilla marketing', a: 'Nekonvenční, kreativní, nízkonákladová forma. Cíl: překvapit a vyvolat „buzz“. Příklad: IKEA obývák v metru.', topic: 'propagace' },
  { q: 'Buzz marketing', a: 'Cílí na to, aby lidé o značce mluvili dobrovolně. Word of mouth + sociální sítě, influenceři. Příklad: Ice Bucket Challenge.', topic: 'propagace' },
  { q: 'Product placement', a: 'Produkt konkrétní značky je součástí filmu / seriálu — postava pije Nespresso, jezdí VW.', topic: 'propagace' },
  { q: 'Event marketing', a: 'Firma uspořádá sportovní / kulturní akci, aby si lidé značku spojili s příjemným zážitkem.', topic: 'propagace' },

  // 11. Plánování prodeje
  { q: 'Rozdíl plánu prodeje od kalkulace nákladů', a: 'U nákladů podnik přesně ví, kolik co stojí. U prodeje jde jen o odhad — podnikatel dopředu neví, zda skutečně prodá.', topic: 'planovani-prodeje' },
  { q: 'Podle čeho se sestavuje plán prodeje', a: '1) Požadavky odběratelů (smlouvy, pravidelné kontakty), 2) rozbor prodejních údajů (trendy), 3) průzkum poptávky (u nových produktů).', topic: 'planovani-prodeje' },

  // 12. Prodejní oddělení
  { q: 'Co dělá oddělení prodeje', a: 'Nabídka odběrateli, uzavření kupní smlouvy, zajištění dodání, jednání s odběrateli, propagace produktu.', topic: 'prodejni-oddeleni' },
  { q: 'Merchandiser', a: 'V místě prodeje se stará o vhodné vystavení produktu, péči o místo prodeje, reklamní akce, podporu prodeje.', topic: 'prodejni-oddeleni' },
  { q: 'Key account manager', a: 'Věnuje se především nejdůležitějším zákazníkům (velkoodběratelé, supermarkety).', topic: 'prodejni-oddeleni' },
  { q: 'Obchodní zástupce', a: 'Jezdí k zákazníkům, informuje o novinkách, přijímá objednávky. Často OSVČ, ne zaměstnanec.', topic: 'prodejni-oddeleni' },

  // 13. Způsob prodeje
  { q: 'B2B', a: 'Business-to-Business — internetové obchodní vztahy mezi společnostmi. Elektronická výměna dat (objednávky, faktury). Není náročné na grafiku.', topic: 'zpusob-prodeje' },
  { q: 'B2C', a: 'Business-to-Customers — obchody pro koncové zákazníky. Cílem je získat a udržet zákazníka, grafika musí oslovit a budovat důvěru.', topic: 'zpusob-prodeje' },
  { q: 'Showroom', a: 'Provozovna, kde si kupující daný produkt může prohlédnout a vyzkoušet (např. elektronika, technika).', topic: 'zpusob-prodeje' },

  // 14. Kupní smlouva
  { q: 'Kdy je kupní smlouva uzavřena', a: '1) Zakoupením v prodejně za hotové (ústně), 2) objednáním (z e-shopu), 3) přijetím nabídky.', topic: 'kupni-smlouva' },
  { q: 'Náležitosti písemné kupní smlouvy', a: 'Smluvní strany, popis zboží (druh, jakost, množství), cena, dodací a platební podmínky, povinnosti kupujícího, všeobecné podmínky (záruka, reklamace).', topic: 'kupni-smlouva' },
  { q: 'Veřejná soutěž (tendr)', a: 'Vyhrává nabídka, která nejlépe splňuje zadaná kritéria — cena, dodací lhůta, technické parametry.', topic: 'kupni-smlouva' },
  { q: 'Formulářová smlouva', a: 'Podnikatel má připravenou smlouvu, zákazník ji buď akceptuje, nebo ne. Mobilní operátoři, banky, energie.', topic: 'kupni-smlouva' },
  { q: 'Nezávazná nabídka', a: 'Pokud prodávající nechce být přijetím nabídky vázán, musí výslovně uvést, že jde o nezávaznou nabídku.', topic: 'kupni-smlouva' },

  // 15. Expedice
  { q: 'Doklady při expedici', a: 'Výdejka (odepsání z karty zásob), dodací list, faktura. U zásob navíc příjemka u odběratele.', topic: 'expedice-reklamace' },
  { q: 'Sběrné služby', a: 'PPL, DPD, DHL, Zásilkovna — zásilky se shromáždí v depu, roztřídí podle cíle, putují do depa u kupujícího, kurýři je doručí.', topic: 'expedice-reklamace' },
  { q: 'Dobropis', a: 'Faktura na zápornou částku — vrácení peněz, když dodavatel nemůže dodat chybějící zboží.', topic: 'expedice-reklamace' },
  { q: 'Záruka mezi firmami', a: 'Mezi firmami neplatí spotřebitelský zákon (24 měsíců, 30 dnů na vyřízení). Záruku lze sjednat ve smlouvě.', topic: 'expedice-reklamace' },
  { q: 'Zjevné vs skryté vady', a: 'Dodavatel odpovídá za obojí — skryté = vady, které produkt měl už v době prodeje.', topic: 'expedice-reklamace' },

  // 16. Platební podmínky (domácí)
  { q: 'Placení před dodáním', a: 'Pro prodávajícího nejvýhodnější (jistota platby + peníze s předstihem). Pro kupujícího riziko, že zboží nepřijde. Časté u nových odběratelů.', topic: 'platebni-podminky' },
  { q: 'Dodavatelský úvěr', a: 'Splatnost faktury delší než 30 dní — prodávající za to získává úrok (může být ve smlouvě).', topic: 'platebni-podminky' },
  { q: 'Obchodní úvěr', a: 'Úvěr neposkytuje banka, ale dodavatel svým odběratelům — pošle zboží „na dluh“, dostane úrok.', topic: 'platebni-podminky' },
  { q: 'Vymáhání pohledávek — kroky', a: '1) Telefon/e-mail upomínky, 2) písemná upomínka, 3) penále, 4) zastavení dodávek, 5) poslední upozornění s návrhem splátek, 6) soud (platební rozkaz), 7) exekuce.', topic: 'platebni-podminky' },
  { q: 'Zajištění dluhu', a: 'Záruka (zaplatí ručitel), zadržovací právo (věc zadržíme), zástavní právo (věc v zástavě můžeme prodat).', topic: 'platebni-podminky' },

  // 17. Význam a formy MO
  { q: 'Zahraniční obchod', a: 'Směna zboží a služeb, která probíhá přes hranice státu.', topic: 'mo-vyznam-formy' },
  { q: '3 významy mezinárodního obchodu', a: 'Ekonomický (úspora nákladů), politický (vztahy mezi státy), kulturní (poznávání tradic, surovin).', topic: 'mo-vyznam-formy' },
  { q: 'Reexport', a: 'Reexportér ze země A nakoupí v zemi B a prodá do země C. Přímý = B→C, nepřímý = B→A→C.', topic: 'mo-vyznam-formy' },
  { q: '3 důvody reexportu', a: 'Ekonomický (koupit levně, prodat dráž), kompletace vývozů (komplet je dražší než samostatné části), obchodně politické (obejít vysoká cla přes 3. zemi).', topic: 'mo-vyznam-formy' },

  // 18. Vstup + INCOTERMS
  { q: '3 způsoby vstupu na zahraniční trh', a: '1) Vývozní operace, 2) aktivity nenáročné na kapitál (licence, franšíza — McDonald\'s), 3) kapitálové vstupy (vlastní výrobna, fúze, akvizice).', topic: 'mo-vstup-incoterms' },
  { q: 'Kdo vydává INCOTERMS 2020', a: 'Mezinárodní obchodní komora v Paříži.', topic: 'mo-vstup-incoterms' },
  { q: 'EXW', a: 'Ze závodu — minimum povinností pro prodávajícího. Kupující si zboží vyzvedne v závodě a vše hradí.', topic: 'mo-vstup-incoterms' },
  { q: 'DDP', a: 'Dodáno, clo uhrazeno — maximum povinností pro prodávajícího. Platí všechno až ke kupujícímu včetně cla.', topic: 'mo-vstup-incoterms' },
  { q: 'FOB', a: 'Vyplaceně na palubu — prodávající platí dopravu do přístavu nakládky a naložení.', topic: 'mo-vstup-incoterms' },
  { q: 'CIF', a: 'Náklady, pojištění a dopravné — prodávající platí dopravu a pojištění do přístavu vykládky.', topic: 'mo-vstup-incoterms' },

  // 19. Rizika v MO
  { q: '5 typů rizik v MO', a: 'Tržní, komerční, přepravní, teritoriální, kurzová.', topic: 'mo-rizika' },
  { q: 'Teritoriální riziko', a: 'Nečekaná situace v zahraničí — makroekonomické šoky (inflace, pokles HDP), politické převraty, přírodní katastrofy.', topic: 'mo-rizika' },
  { q: 'Komu prospívá exportérům?', a: 'Slabá domácí měna — při kurzu 28 CZK/EUR za 100 € vydělá 2 800 Kč místo 2 400 Kč při kurzu 24.', topic: 'mo-rizika' },
  { q: 'Forward', a: 'Předem domluvený kurz pro nákup/prodej měny v daném termínu. Povinnost obou stran.', topic: 'mo-rizika' },
  { q: 'Opce', a: 'Právo (ne povinnost) koupit/prodat měnu za daný kurz. Firma platí opční prémii vždy, ať opci využije nebo ne.', topic: 'mo-rizika' },
  { q: 'Swap', a: 'Kombinace spotového a forwardového obchodu. Dnes směním měnu za aktuální kurz + domluvím odkup zpět v termínu.', topic: 'mo-rizika' },

  // 20. Politika
  { q: 'Liberalismus', a: 'Stát nezasahuje, volná konkurence. Plus pro spotřebitele (nižší ceny, vyšší kvalita), mínus pro domácí firmy (levné dovozy je můžou zlikvidovat).', topic: 'mo-politika' },
  { q: 'Protekcionismus', a: 'Stát chrání domácí výrobce před dovozem. Plus pro výrobce, mínus pro spotřebitele (menší nabídka, vyšší ceny). Může vyvolat odvetu.', topic: 'mo-politika' },
  { q: '4 nástroje protekcionismu', a: 'Cla, množstevní kvóty, normy a předpisy, podpora vývozu.', topic: 'mo-politika' },
  { q: '3 významy cla', a: 'Fiskální (rozpočet), obchodně-politický (nástroj politiky), cenotvorný (součást ceny).', topic: 'mo-politika' },
  { q: '4 druhy cel podle účelu', a: 'Preferenční, odvetné, ochranné, vyrovnávací.', topic: 'mo-politika' },
  { q: 'Exportní banky', a: 'Státy je zřizují k podpoře vývozu — pojišťují vývoz, poskytují úvěry a záruky exportním firmám.', topic: 'mo-politika' }
];

// =====================================================
// QUIZ — multiple choice
// =====================================================
const QUIZ = [
  // 1. Marketingové koncepce
  { q: 'Heslo „Vyrob co nejlevněji a prodáš“ patří ke které koncepci?', options: ['Výrobní', 'Výrobková', 'Prodejní', 'Marketingová'], correct: 0, topic: 'marketingove-koncepce' },
  { q: 'Která koncepce klade důraz na kvalitu a zdokonalování výrobků?', options: ['Výrobková', 'Výrobní', 'Prodejní', 'Společenská'], correct: 0, topic: 'marketingove-koncepce' },
  { q: 'Hlavním představitelem výrobní koncepce v ČSR byl:', options: ['Tomáš Baťa', 'Emil Škoda', 'Henry Ford', 'Steve Jobs'], correct: 0, topic: 'marketingove-koncepce' },
  { q: 'Heslo „Nejdřív poznej potřeby svého zákazníka“ patří ke koncepci:', options: ['Marketingové', 'Výrobní', 'Prodejní', 'Výrobkové'], correct: 0, topic: 'marketingove-koncepce' },
  { q: 'Která koncepce vznikla v důsledku krize z nadvýroby?', options: ['Marketingová', 'Výrobní', 'Prodejní', 'Výrobková'], correct: 0, topic: 'marketingove-koncepce' },

  // 2. Analýzy
  { q: 'Co znamená písmeno T v PEST analýze?', options: ['Technologická', 'Trhová', 'Trendová', 'Tržní'], correct: 0, topic: 'marketingove-analyzy' },
  { q: 'SWOT analýza zkoumá vně firmy:', options: ['Příležitosti a hrozby', 'Silné a slabé stránky', 'Cenu a kvalitu', 'Trh a konkurenci'], correct: 0, topic: 'marketingove-analyzy' },
  { q: 'Hloubkový rozhovor a brainstorming patří k:', options: ['Kvalitativnímu výzkumu', 'Kvantitativnímu výzkumu', 'PEST analýze', 'SWOT analýze'], correct: 0, topic: 'marketingove-analyzy' },

  // 3. Chování kupujících
  { q: 'Co spadá pod ponákupní chování?', options: ['Zákazník hodnotí, zda se rozhodl správně', 'Zákazník hledá informace', 'Zákazník rozpoznává potřebu', 'Zákazník porovnává ceny'], correct: 0, topic: 'chovani-kupujicich' },
  { q: 'Nákup potravin v supermarketu je typicky:', options: ['Rutinní', 'Významný', 'Impulzivní', 'Emoční'], correct: 0, topic: 'chovani-kupujicich' },

  // 4. Cílený marketing
  { q: 'Co je správné pořadí cíleného marketingu?', options: ['Segmentace → targeting → positioning', 'Targeting → segmentace → positioning', 'Positioning → segmentace → targeting', 'Segmentace → positioning → targeting'], correct: 0, topic: 'cileny-marketing' },
  { q: 'Rozdělení trhu podle věku a pohlaví je členění:', options: ['Demografické', 'Geografické', 'Psychologické', 'Sociální'], correct: 0, topic: 'cileny-marketing' },
  { q: 'Positioning Apple je:', options: ['Prémiová technologie, prestiž', 'Levný a designový nábytek', 'Kvalita za nízkou cenu', 'Energie a výkon'], correct: 0, topic: 'cileny-marketing' },

  // 5. Individualizovaný marketing
  { q: 'CRM je zkratka pro:', options: ['Customer Relationship Management', 'Customer Retail Marketing', 'Cost Reduction Management', 'Channel Relationship Marketing'], correct: 0, topic: 'individualizovany-marketing' },
  { q: 'Mass Customization znamená:', options: ['Přizpůsobení produktu individuálním potřebám zákazníka', 'Hromadná výroba bez rozlišení', 'Reklama pro masy', 'Snížení nákladů na výrobu'], correct: 0, topic: 'individualizovany-marketing' },

  // 6. Produkt, obal, značka
  { q: '4P marketingového mixu jsou:', options: ['Product, Price, Placement, Promotion', 'Product, People, Process, Place', 'Price, Product, People, Promotion', 'Place, Plan, Promotion, Price'], correct: 0, topic: 'produkt-obal-znacka' },
  { q: 'Kolik je úrovní produktu?', options: ['5', '3', '4', '7'], correct: 0, topic: 'produkt-obal-znacka' },
  { q: 'Vlastnost konkurence nemá, ale my ano — která úroveň?', options: ['Vylepšený produkt', 'Základní produkt', 'Očekávaný produkt', 'Potenciální produkt'], correct: 0, topic: 'produkt-obal-znacka' },
  { q: 'Funkce obalu „upoutání pozornosti“ je:', options: ['Propagační', 'Ochranná', 'Informační', 'Manipulační'], correct: 0, topic: 'produkt-obal-znacka' },

  // 7. ŽCP, BCG
  { q: 'Inovátoři kupují produkt ve fázi:', options: ['Zavedení', 'Růst', 'Zralost', 'Útlum'], correct: 0, topic: 'zcp-bcg' },
  { q: 'Která fáze ŽCP je nejdelší?', options: ['Zralost', 'Růst', 'Zavedení', 'Útlum'], correct: 0, topic: 'zcp-bcg' },
  { q: 'BCG produkt s vysokým podílem a nízkým tempem růstu je:', options: ['Dojná kráva', 'Hvězda', 'Otazník', 'Bídný pes'], correct: 0, topic: 'zcp-bcg' },
  { q: 'Nový výrobek s malým podílem v BCG je:', options: ['Otazník', 'Hvězda', 'Dojná kráva', 'Bídný pes'], correct: 0, topic: 'zcp-bcg' },

  // 8. Cena
  { q: 'Vzorec nákladové metody:', options: ['Cena = náklady + zisk + DPH', 'Cena = náklady × marže', 'Cena = výnosy − náklady', 'Cena = poptávka × nabídka'], correct: 0, topic: 'cena' },
  { q: 'Elektřina je příkladem poptávky:', options: ['Neelastické', 'Elastické', 'Klesající', 'Sezónní'], correct: 0, topic: 'cena' },
  { q: 'Cenovým bojovníkem je typicky:', options: ['Produkt s nízkou marží, který přiláká zákazníka', 'Nejdražší produkt na trhu', 'Produkt vyrobený v Číně', 'Produkt s nejvyšší kvalitou'], correct: 0, topic: 'cena' },

  // 9. Distribuce
  { q: 'Čím víc mezičlánků, tím:', options: ['Vyšší koncová cena', 'Nižší koncová cena', 'Stejná cena', 'Závisí na kvalitě'], correct: 0, topic: 'distribuce' },
  { q: 'Mezičlánky existují, protože:', options: ['Šetří výrobci propagaci a zákazníkovi čas', 'Snižují kvalitu', 'Snižují cenu', 'Jsou povinné ze zákona'], correct: 0, topic: 'distribuce' },

  // 10. Propagace
  { q: 'IKEA obývák v metru je příklad:', options: ['Guerilla marketingu', 'Direct marketingu', 'Buzz marketingu', 'Product placementu'], correct: 0, topic: 'propagace' },
  { q: 'Ice Bucket Challenge je příklad:', options: ['Buzz marketingu', 'Product placementu', 'Direct marketingu', 'Telemarketingu'], correct: 0, topic: 'propagace' },
  { q: 'Postava ve filmu pije Nespresso — to je:', options: ['Product placement', 'Event marketing', 'Ambient marketing', 'Direct marketing'], correct: 0, topic: 'propagace' },

  // 11. Plánování prodeje
  { q: 'Plán prodeje je:', options: ['Odhad, ne přesný výpočet', 'Přesný výpočet jako u nákladů', 'Příkaz od státu', 'Marketingová strategie'], correct: 0, topic: 'planovani-prodeje' },

  // 12. Prodejní oddělení
  { q: 'Kdo se stará o vystavení produktu v prodejně?', options: ['Merchandiser', 'Key account manager', 'Obchodní zástupce', 'Prodejce'], correct: 0, topic: 'prodejni-oddeleni' },
  { q: 'Kdo se věnuje hlavně velkoodběratelům?', options: ['Key account manager', 'Merchandiser', 'Prodejce', 'Obchodní zástupce'], correct: 0, topic: 'prodejni-oddeleni' },

  // 13. Způsob prodeje
  { q: 'B2B je zkratka pro:', options: ['Business-to-Business', 'Buy-to-Buy', 'Brand-to-Buyer', 'Business-to-Bank'], correct: 0, topic: 'zpusob-prodeje' },
  { q: 'Allegro a Alza jsou příklady:', options: ['Online tržiště', 'Aukčních serverů', 'Showroomů', 'Slevových serverů'], correct: 0, topic: 'zpusob-prodeje' },

  // 14. Kupní smlouva
  { q: 'Kupní smlouva v prodejně za hotové je uzavřena:', options: ['Ústně', 'Vždy písemně', 'Až po zaplacení', 'Až po podpisu'], correct: 0, topic: 'kupni-smlouva' },
  { q: 'Co NENÍ náležitostí písemné kupní smlouvy?', options: ['Datum narození kupujícího', 'Popis zboží', 'Cena', 'Dodací podmínky'], correct: 0, topic: 'kupni-smlouva' },
  { q: 'Tendr je:', options: ['Veřejná soutěž, vyhrává nejlepší nabídka', 'Dražba s nejvyšší cenou', 'Formulářová smlouva', 'Záruka kvality'], correct: 0, topic: 'kupni-smlouva' },

  // 15. Expedice
  { q: 'Doklad při expedici, který odepisuje zboží ze skladu, je:', options: ['Výdejka', 'Příjemka', 'Faktura', 'Dodací list'], correct: 0, topic: 'expedice-reklamace' },
  { q: 'Dobropis je:', options: ['Faktura na zápornou částku — vrácení peněz', 'Pojistka proti vadě', 'Doklad o pojištění', 'Certifikát kvality'], correct: 0, topic: 'expedice-reklamace' },
  { q: 'Mezi firmami záruka:', options: ['Není ze zákona, lze sjednat ve smlouvě', 'Je vždy 24 měsíců', 'Je vždy 30 dnů', 'Není možná'], correct: 0, topic: 'expedice-reklamace' },

  // 16. Platební podmínky
  { q: 'Pro kterou stranu je placení před dodáním nejvýhodnější?', options: ['Pro prodávajícího', 'Pro kupujícího', 'Pro dopravce', 'Pro banku'], correct: 0, topic: 'platebni-podminky' },
  { q: 'Dodavatelský úvěr získává úrok, když splatnost je:', options: ['Delší než 30 dnů', 'Delší než 14 dnů', 'Delší než 60 dnů', 'Vždy'], correct: 0, topic: 'platebni-podminky' },
  { q: 'První krok při vymáhání pohledávek je:', options: ['Telefonická / e-mailová upomínka', 'Soud', 'Exekuce', 'Penále'], correct: 0, topic: 'platebni-podminky' },
  { q: 'Co soud vydá ve zkráceném řízení?', options: ['Platební rozkaz', 'Exekuci', 'Pokutu', 'Insolvenci'], correct: 0, topic: 'platebni-podminky' },

  // 17. Význam MO
  { q: 'Co je reexport?', options: ['Reexportér ze země A nakoupí v B a prodá do C', 'Opětovný vývoz vráceného zboží', 'Dovoz s pozdějším vrácením', 'Vývoz přes spediční firmu'], correct: 0, topic: 'mo-vyznam-formy' },
  { q: 'Které jsou tři významy MO?', options: ['Ekonomický, politický, kulturní', 'Ekonomický, fiskální, kulturní', 'Politický, vojenský, ekonomický', 'Sociální, ekonomický, vědecký'], correct: 0, topic: 'mo-vyznam-formy' },
  { q: 'Proč je přímý vývoz levnější?', options: ['Jen 2 subjekty místo 3', 'Není zatížen clem', 'Stát ho dotuje', 'Nevztahují se na něj INCOTERMS'], correct: 0, topic: 'mo-vyznam-formy' },

  // 18. INCOTERMS
  { q: 'Kdo vydává INCOTERMS 2020?', options: ['Mezinárodní obchodní komora v Paříži', 'OSN', 'Evropská komise', 'WTO'], correct: 0, topic: 'mo-vstup-incoterms' },
  { q: 'Které INCOTERMS znamená minimum povinností pro prodávajícího?', options: ['EXW', 'DDP', 'CIF', 'FOB'], correct: 0, topic: 'mo-vstup-incoterms' },
  { q: 'Které INCOTERMS znamená maximum povinností pro prodávajícího?', options: ['DDP', 'EXW', 'FCA', 'FAS'], correct: 0, topic: 'mo-vstup-incoterms' },
  { q: 'McDonald\'s a KFC jsou příklad vstupu na trh formou:', options: ['Franšízy', 'Kapitálového vstupu', 'Vývozní operace', 'Fúze'], correct: 0, topic: 'mo-vstup-incoterms' },

  // 19. Rizika MO
  { q: 'Pokles poptávky po exportu je riziko:', options: ['Tržní', 'Komerční', 'Teritoriální', 'Přepravní'], correct: 0, topic: 'mo-rizika' },
  { q: 'Politický převrat v cílové zemi je riziko:', options: ['Teritoriální', 'Komerční', 'Tržní', 'Přepravní'], correct: 0, topic: 'mo-rizika' },
  { q: 'Forward je:', options: ['Předem domluvený kurz, povinnost obou stran', 'Právo (ne povinnost) měnit kurz', 'Kombinace spotového a forwardového obchodu', 'Pojištění proti ztrátě zboží'], correct: 0, topic: 'mo-rizika' },
  { q: 'U opce platí firma opční prémii:', options: ['Vždy, ať opci využije nebo ne', 'Jen když opci využije', 'Jen když neopci nevyužije', 'Není žádná prémie'], correct: 0, topic: 'mo-rizika' },
  { q: 'Komu prospívá slabá domácí měna?', options: ['Exportérům', 'Importérům', 'Spotřebitelům', 'Bankám'], correct: 0, topic: 'mo-rizika' },

  // 20. Politika
  { q: 'Co NENÍ nástroj protekcionismu?', options: ['Pevný směnný kurz', 'Cla', 'Kvóty', 'Normy'], correct: 0, topic: 'mo-politika' },
  { q: 'Kolik máme druhů cel podle účelu?', options: ['4', '3', '5', '6'], correct: 0, topic: 'mo-politika' },
  { q: 'Které clo je odveta za opatření proti nám?', options: ['Odvetné', 'Preferenční', 'Ochranné', 'Vyrovnávací'], correct: 0, topic: 'mo-politika' },
  { q: 'Tři významy cla jsou:', options: ['Fiskální, obchodně-politický, cenotvorný', 'Fiskální, kulturní, politický', 'Cenotvorný, sociální, ekonomický', 'Politický, vojenský, fiskální'], correct: 0, topic: 'mo-politika' }
];

// =====================================================
// TAHÁK — všechno nejdůležitější pohromadě
// =====================================================
const TAHAK = [
  { title: '5 marketingových koncepcí (chronologicky)', items: [
    '<b>Výrobní</b> (1900–1920): „Vyrob co nejlevněji.“ — Baťa, dnes Čína.',
    '<b>Výrobková</b> (1920–1940): „Vyrob co nejkvalitněji.“ — luxus.',
    '<b>Prodejní</b> (1940–1950): „Čím víc reklamy, tím víc prodáš.“ — drogerie.',
    '<b>Marketingová</b> (1950–1970): „Poznej potřeby zákazníka.“ — vznikla v krizi z nadvýroby.',
    '<b>Společenská</b> (od 1970): „Zohledni i potřeby společnosti.“ — Henkel, Škoda.'
  ]},
  { title: 'PEST a SWOT', items: [
    'PEST: <b>P</b>oliticko-právní, <b>E</b>konomická, <b>S</b>ociálně-kulturní, <b>T</b>echnologická.',
    'SWOT vnitřní: silné/slabé stránky. Vnější: příležitosti/hrozby.',
    'Kvantitativní výzkum = dotazník. Kvalitativní = hloubkový rozhovor.'
  ]},
  { title: 'Chování kupujících', items: [
    'Významný nákup: rozpoznání potřeby → hledání info → výběr → ponákupní chování.',
    'Rutinní = potraviny, oblíbená značka. Impulzivní = mekáč na cestě.'
  ]},
  { title: 'Cílený marketing — STP', items: [
    '<b>1. Segmentace</b> = rozdělit trh (geo, demo, psycho).',
    '<b>2. Targeting</b> = vybrat segment (atraktivnost + konkurenceschopnost).',
    '<b>3. Positioning</b> = umístění značky v hlavě zákazníka.'
  ]},
  { title: 'CRM a Mass Customization', items: [
    'Mass Customization = produkt na míru zákazníkovi.',
    'CRM = sběr dat (věrnostní karty + GDPR) → analýza → individuální nabídka.'
  ]},
  { title: 'Marketingový mix 4P + úrovně produktu', items: [
    '<b>4P</b>: Product, Price, Placement, Promotion.',
    '<b>5 úrovní produktu</b>: základní užitek → základní produkt → očekávaný → vylepšený → potenciální.',
    '<b>5 funkcí obalu</b>: ochranná, propagační, informační, rozlišovací, manipulační.',
    '<b>4 vlastnosti značky</b>: diferenciace, relevantnost, prestiž, znalost.'
  ]},
  { title: 'Životní cyklus produktu', items: [
    '<b>1. Zavedení</b>: inovátoři, ztráta, vysoké náklady na propagaci.',
    '<b>2. Růst</b>: osvojitelé, výnosy > náklady, vzniká konkurence.',
    '<b>3. Zralost</b>: NEJDELŠÍ fáze, maximální zisk, pak postupný pokles.',
    '<b>4. Útlum</b>: opozdilci, slevy, prodej licence, stažení z trhu.'
  ]},
  { title: 'BCG matice', items: [
    '<b>Otazníky</b>: nové, malý podíl — investovat nebo stáhnout?',
    '<b>Hvězdy</b>: vysoký růst + vysoký podíl — budoucí zisky.',
    '<b>Dojné krávy</b>: nízký růst + vysoký podíl — finanční zdroj firmy.',
    '<b>Bídní psi</b>: nízký růst + nízký podíl — neperspektivní.'
  ]},
  { title: 'Cena', items: [
    'Nákladová metoda: <b>cena = náklady + zisk + DPH</b>.',
    'Marketingová metoda: vychází z toho, jak zákazník vnímá produkt.',
    'Elastická = kožené bundy. Neelastická = elektřina.',
    'Cenoví bojovníci = levný produkt, který přiláká k nákupu i dalšího zboží.'
  ]},
  { title: 'Distribuce', items: [
    '4 cesty: bez mezičlánku / přes zprostředkovatele / přes maloobchod / přes velkoobchod.',
    'Mezičlánky zdražují, ale: výrobci šetří propagaci a sklady; zákazníkovi šetří čas.'
  ]},
  { title: 'Propagace — moderní techniky', items: [
    '<b>Direct marketing</b> = e-mail, SMS, telemarketing (GDPR!).',
    '<b>Guerilla marketing</b> = kreativní, nízkonákladový, „buzz“ (IKEA v metru).',
    '<b>Buzz marketing</b> = lidi mluví o značce (Ice Bucket Challenge).',
    '<b>Product placement</b> = produkt ve filmu / seriálu.'
  ]},
  { title: 'Prodejní oddělení', items: [
    'Plán prodeje = jen <b>odhad</b>, ne kalkulace.',
    'Profese: prodejce, merchandiser (vystavení), key account manager (velcí), obchodní zástupce (cestuje, často OSVČ).',
    'B2B = firma-firma. B2C = firma-zákazník.'
  ]},
  { title: 'Kupní smlouva', items: [
    'Stačí ÚSTNĚ — písemně jen auto, nemovitost.',
    'Uzavřená: zakoupením, objednáním z e-shopu, přijetím nabídky.',
    'Náležitosti: strany, popis zboží, cena, dodací/platební podmínky, povinnosti, všeobecné podmínky.',
    'Jiné formy: dražba, tendr, formulářová smlouva, zaplacení zálohy.'
  ]},
  { title: 'Expedice a reklamace', items: [
    'Doklady: <b>výdejka</b> (odpis ze skladu), <b>dodací list</b>, <b>faktura</b>, u odběratele <b>příjemka</b>.',
    '<b>Dobropis</b> = faktura na zápornou částku.',
    'Mezi firmami záruka NENÍ ze zákona — sjednává se ve smlouvě.',
    'Dodavatel odpovídá za zjevné I skryté vady.'
  ]},
  { title: 'Platební podmínky (domácí)', items: [
    '<b>Před dodáním</b>: nejlepší pro prodejce, časté u nových odběratelů.',
    '<b>Při dodání</b>: dobírka, nebo proti dokumentům.',
    '<b>Po dodání</b>: odklad faktury, dodavatelský úvěr (>30 dní = úrok).',
    'Vymáhání: upomínky → penále → zastavení dodávek → soud (platební rozkaz) → exekuce.'
  ]},
  { title: 'Mezinárodní obchod — základy', items: [
    'Zahraniční obchod = směna přes hranice státu.',
    '3 významy: ekonomický, politický, kulturní.',
    'Reexport: A nakoupí v B, prodá do C. Důvody: ekonomický, kompletace, obchodně politické (cla).'
  ]},
  { title: 'Vstup na zahraniční trh + INCOTERMS', items: [
    '3 způsoby: vývoz / nenáročné (licence, franšíza — McDonald\'s) / kapitálový (vlastní výrobna, fúze, akvizice).',
    '<b>INCOTERMS 2020</b> vydává <b>Mezinárodní obchodní komora v Paříži</b>.',
    '<b>EXW</b> = minimum pro prodávajícího. <b>DDP</b> = maximum (vč. cla).',
    'Klasické: <b>FOB</b> (na palubu), <b>CIF</b> (náklady + pojištění + dopravné).'
  ]},
  { title: 'Rizika v MO', items: [
    '5 typů: <b>tržní, komerční, přepravní, teritoriální, kurzová</b>.',
    'Exportérům přispívá <b>slabá</b> domácí měna.',
    'Hedging: <b>forward</b> (povinnost), <b>opce</b> (právo + opční prémie), <b>swap</b> (spot + forward).'
  ]},
  { title: 'Obchodní politika', items: [
    'Liberalismus = stát nezasahuje. Protekcionismus = stát chrání domácí výrobce.',
    '4 nástroje protekcionismu: <b>cla, kvóty, normy, podpora vývozu</b>.',
    'Význam cla: fiskální, obchodně-politický, cenotvorný.',
    'Druhy cel: preferenční, odvetné, ochranné, vyrovnávací.'
  ]}
];
