// Här skedde en uppdatering: Ny extern JS-fil skapad. Vi återanvänder tekniken från quiz.html
// men byter ut innehållet till ett nytt quiz om Internkontroll (Uppföljning 2024 & 2025).
// ES2023-anmärkning: Koden är kompatibel med moderna webbläsare. Vi använder moderna
// array-metoder och event-lyssnare. Ingen avancerad ES2023-only API krävs här.

// -------------------------
// Quizdata – 5 frågor
// -------------------------
const quizData = [
    {
        question: "Jämförelse av identifierade risker – Vilken ny riskkategori tillkom specifikt i 2025 års internkontrollplan som inte fanns med i 2024 års uppföljning?",
        options: [
            "A) Bristande underhåll av kommunala anläggningar",
            "B) Ohälsosam stress och brist på återhämtning",
            "C) Dokumenthantering och digital arbetsplats",
            "D) Medarbetare klickar på skadliga länkar"
        ],
        correct: 2,
        explanation: "✅ Rätt svar: C. 2025 identifierades en ny riskkategori under Verksamhetsrisker: 'Dokumenthantering och digital arbetsplats'. Den tar upp att dokument/filer lagras på flera ställen, risk för dubbletter och svårigheter att hitta varandras dokument. För att hantera detta genomfördes utbildning för alla inom förvaltningen gällande den nya Teamskanalen, samt ett omtag av riktlinjer för var dokument ska sparas och lagras. Detta fanns inte med i 2024 års uppföljning och visar en ökad prioritering av digital informationshantering mellan åren.",
        source: "(Simrishamns kommun, 2025, s. 3; Simrishamns kommun, 2024, s. 3–6)"
    },
    {
        question: "Krishantering och beredskap – Vilken ny riskkategori med tillhörande kontrollmoment infördes 2025 för att stärka motståndskraften?",
        options: [
            "A) Risker kopplade till medarbetares kompetens och rekrytering",
            "B) Bristande förmåga att hantera händelser som riskerar att få negativa konsekvenser",
            "C) Upphandlings- och inköpsrisker",
            "D) Kommunikationsrisker vid krissituationer"
        ],
        correct: 1,
        explanation: "✅ Rätt svar: B. I 2025 införs en ny riskkategori under Ekonomi/finansiella risker: 'Bristande förmåga att hantera händelser som riskerar att få negativa konsekvenser', med kontrollmomentet 'Kontinuitetsplan'. Målet är att det ska finnas upprättade kontinuitetsplaner under året 2025. Resultattexten anger att enheternas arbete har genomförts med dokumenterade processer och att fortsatt arbete med planerna och checklistor pågår. Detta fanns inte i 2024 års uppföljning och markerar ett tydligt steg mot mer proaktiv krishantering.",
        source: "(Simrishamns kommun, 2025, s. 4; Simrishamns kommun, 2024, s. 1–8)"
    },
    {
        question: "Arbetsmiljö och trygghet – Valfisken: Hur skilde sig bedömningen mellan 2024 och 2025?",
        options: [
            "A) 2024: tillfällig förbättring men ökande otrygghet i slutet; 2025: tryggare",
            "B) Båda åren oförändrad otrygghet",
            "C) 2024 konstant förbättring; 2025 försämring",
            "D) 2024 fokus på belysning; 2025 fokus på möbelplacering"
        ],
        correct: 0,
        explanation: "✅ Rätt svar: A. 2024 beskriver en komplex utveckling: borttagna möbler gav en betydande men tillfällig förbättring; mot slutet av året ökade antalet otrygghetsskapande händelser vilket indikerar att grundorsaken inte var möblerna. 2025 är lägesbilden mer positiv: Valfisken upplevs som tryggare och ett fortsatt tvärsektoriellt arbete pågår, bland annat i samverkan med polis, SoC och BuF. Detta tyder på att bredare samverkansinsatser haft bättre effekt än en isolerad åtgärd.",
        source: "(Simrishamns kommun, 2024, s. 7; Simrishamns kommun, 2025, s. 6)"
    },
    {
        question: "Riskkontroll och organisatoriskt lärande – Vilken skillnad i informationssäkerhet 2024 vs 2025?",
        options: [
            "A) 2024: dialog på APT; 2025: årlig kontroll att medarbetare känner till riskerna",
            "B) 2024: inga kontroller; 2025: obligatorisk utbildning",
            "C) Identiska kontrollmoment",
            "D) 2024: extern konsult; 2025: intern hantering"
        ],
        correct: 0,
        explanation: "✅ Rätt svar: A. 2024 års risk 'Medarbetare klickar på länkar som innebär tekniska problem för hela kommunen' hanterades med dialog vid APT och informationsspridning från IT. 2025 kvarstår den risken men kompletteras med en ny relaterad risk: 'Obehörig tillgång till verksamhetssystem'. Metod: kontroll att medarbetarna faktiskt känner till riskerna, med avstämning en gång per år samt avstämning på arbetsplatsträffar. Det innebär en förflyttning från ren informationsdelning till verifierad kunskap och medvetenhet.",
        source: "(Simrishamns kommun, 2024, s. 6; Simrishamns kommun, 2025, s. 5)"
    },
    {
        question: "Strategisk utveckling och organisationsförändring – Vilken trend syns för HR-risker mellan 2024 och 2025?",
        options: [
            "A) 2024: framgångsrika rekryteringar; 2025: påbörjad status utan resultat",
            "B) 2024: rekryteringsproblem; 2025: förbättrade processer",
            "C) Identiska utmaningar båda åren",
            "D) 2024: bemanningsfokus; 2025: kompetensutveckling"
        ],
        correct: 0,
        explanation: "✅ Rätt svar: A. 2024 redovisas konkreta framgångar: två nya medarbetare rekryterades till fritids- och föreningsutveckling samt ny förvaltningschef under hösten; processerna var framgångsrika med många kvalificerade sökande. 2025 finns samma riskkategori kvar ('Brist på kompetent personal samt svårighet att rekrytera rätt kompetens'), men kontrollmomentet har status 'Påbörjad' (gul) och resultatdelen är ännu tom, vilket indikerar att uppföljningen för året inte slutförts.",
        source: "(Simrishamns kommun, 2024, s. 5; Simrishamns kommun, 2025, s. 4–5)"
    }
];

// -------------------------
// Tillstånd
// -------------------------
let currentQuestion = 0;
let score = 0;
let answered = false;

// -------------------------
// DOM-element
// -------------------------
const imageSection = document.getElementById('imageSection');
const quizContent = document.getElementById('quizContent');
const progressFill = document.getElementById('progressFill');
const continueBtn = document.getElementById('continueBtn');
const introImage = document.getElementById('introImage');
const introSection = document.getElementById('introSection');
const introPageTitle = document.getElementById('introPageTitle');
const introPageBody = document.getElementById('introPageBody');
const introPrevBtn = document.getElementById('introPrevBtn');
const introNextBtn = document.getElementById('introNextBtn');
const techBtn = document.getElementById('techBtn');
const promptBtn = document.getElementById('promptBtn');

// -------------------------
// Händelser
// -------------------------
// Här skedde en uppdatering: Startknappen låter användaren gå vidare till quizet
continueBtn?.addEventListener('click', () => {
    showQuestion();
});

window.addEventListener('load', () => {
    updateProgress();
    // Bildfelshantering: visa fallback om bilden saknas eller ej kan laddas
    if (introImage) {
        introImage.addEventListener('error', () => {
            const fallback = document.createElement('div');
            fallback.className = 'img-fallback';
            fallback.textContent = 'Internkontroll';
            introImage.replaceWith(fallback);
        }, { once: true });
    }

    // Starta introflödet
    startIntro();
});

// -------------------------
// Inledning i fem sidor
// -------------------------
let introPage = 0;
const introPages = [
    {
        title: 'Veckans heldag om tillitsbaserat ledarskap',
        body: `
            <p>Denna vecka genomförde vi en heldagsföreläsning med praktiska övningar kring tillitsbaserat ledarskap. 
            Syftet var att fördjupa förståelsen för hur tillit kan omsättas i vardagens ledarskap och samverkan.</p>
            <p>Upplägget var interaktivt: korta teoripass varvades med case, reflektion och gruppdialog. 
            Målet var att koppla teori till praktik i vår verksamhetskontext.</p>
        `
    },
    {
        title: 'Teoretisk grund: McGregors teori X och Y',
        body: `
            <p>Tillitsbaserat ledarskap vilar på en humanistisk människosyn. 
            Douglas McGregors <em>Teori X</em> och <em>Teori Y</em> (1960) illustrerar två kontrasterande antaganden:</p>
            <ul>
                <li><strong>Teori X:</strong> Människor undviker arbete och måste kontrolleras.</li>
                <li><strong>Teori Y:</strong> Människor söker ansvar, kan visa självdisciplin och är kreativa.</li>
            </ul>
            <p>Tillitsbaserat ledarskap ansluter till <em>Teori Y</em>: positiva förväntningar, handlingsutrymme och professionell autonomi.</p>
            <p>Källa: <a href="https://controllerutangranser.wordpress.com/2025/09/26/tillitsbaserat-ledarskap-en-djupdykning-i-teori-och-praktik/" target="_blank" rel="noopener">artikel om tillitsbaserat ledarskap</a>.</p>
        `
    },
    {
        title: 'Svensk kontext och NPM-kritik',
        body: `
            <p>Den svenska varianten växte fram som en reaktion mot NPM (New Public Management). 
            Kritiken rörde bland annat detaljstyrning, mätobsession, beställar-utförarmodeller och administrativ 
            inflation – sådant som riskerade att tränga undan professionellt omdöme och helhetssyn.</p>
            <ul>
                <li>Från kontroll till tillit – fokus på uppdrag, värde och samverkan.</li>
                <li>Från detaljkrav till lärande uppföljning och dialog.</li>
            </ul>
            <p>Källa: <a href="https://controllerutangranser.wordpress.com/2025/09/26/tillitsbaserat-ledarskap-en-djupdykning-i-teori-och-praktik/" target="_blank" rel="noopener">artikel om tillitsbaserat ledarskap</a>.</p>
        `
    },
    {
        title: 'Forskning och praktik: Bringselius och Tillitsdelegationen',
        body: `
            <p>Louise Bringselius har gett stark akademisk och praktisk förankring till tillitsbaserad styrning 
            i Sverige. Som forskningsledare i Tillitsdelegationen (2017–2019) tydliggjordes värdet av 
            professionell autonomi, lärande och samverkan.</p>
            <ul>
                <li>Roller och ansvar tydliggörs utan att detaljstyra.</li>
                <li>Kontroll kompletteras med förtroende och gemensam riktning.</li>
            </ul>
            <p>Källa: <a href="https://controllerutangranser.wordpress.com/2025/09/26/tillitsbaserat-ledarskap-en-djupdykning-i-teori-och-praktik/" target="_blank" rel="noopener">artikel om tillitsbaserat ledarskap</a>.</p>
        `
    },
    {
        title: 'Vad vi tränade på under dagen',
        body: `
            <p>Under dagen övade vi på att översätta tillit till konkret beteende:</p>
            <ul>
                <li>Formulera tydliga syften och ramar – och ge handlingsutrymme inom dem.</li>
                <li>Ställa klargörande frågor som stärker förståelse och ansvar.</li>
                <li>Föra lärande uppföljningsdialoger istället för ensidig rapportering.</li>
                <li>Identifiera hinder för tillit och hur de kan minskas i vardagen.</li>
            </ul>
            <p>Nästa steg: Gå vidare till bilden och starta sedan quizet om internkontroll.</p>
        `
    }
];

function startIntro() {
    // Dölj allt annat, visa intro
    if (introSection) introSection.classList.remove('hidden');
    if (imageSection) imageSection.classList.add('hidden');
    if (quizContent) quizContent.classList.add('hidden');
    renderIntro();
    bindIntroNav();
}

function renderIntro() {
    const page = introPages[introPage];
    if (!page) return;
    if (introPageTitle) introPageTitle.textContent = page.title;
    if (introPageBody) introPageBody.innerHTML = page.body;
    if (introPrevBtn) introPrevBtn.disabled = introPage === 0;
    if (introNextBtn) introNextBtn.textContent = introPage === introPages.length - 1 ? 'Fortsätt ➡️' : 'Nästa ➡️';
}

function bindIntroNav() {
    introPrevBtn?.addEventListener('click', () => {
        if (introPage > 0) {
            introPage--;
            renderIntro();
        }
    });
    introNextBtn?.addEventListener('click', () => {
        if (introPage < introPages.length - 1) {
            introPage++;
            renderIntro();
        } else {
            // Klar med intro: visa bildskärmen
            introSection?.classList.add('hidden');
            imageSection?.classList.remove('hidden');
        }
    });
}

// Modal-knappar
techBtn?.addEventListener('click', () => openModal('techModal'));
promptBtn?.addEventListener('click', () => openModal('promptModal'));

// -------------------------
// Funktioner
// -------------------------
function updateProgress() {
    const progress = (currentQuestion / quizData.length) * 100;
    progressFill.style.width = progress + '%';
}

function showQuestion() {
    imageSection.classList.add('hidden');
    quizContent.classList.remove('hidden');

    const q = quizData[currentQuestion];
    quizContent.innerHTML = `
        <div class="question-container">
            <div class="question-number">Fråga ${currentQuestion + 1} av ${quizData.length}</div>
            <div class="question-text">${q.question}</div>
            <div class="options-container" id="optionsContainer">
                ${q.options.map((opt, idx) => `
                    <div class="option" data-index="${idx}">${opt}</div>
                `).join('')}
            </div>
            <div class="answer-feedback" id="answerFeedback"></div>
            <button class="next-btn" id="nextBtn" type="button" disabled>
                ${currentQuestion === quizData.length - 1 ? 'Se resultat 🎉' : 'Nästa fråga ➡️'}
            </button>
        </div>
    `;

    answered = false;
    bindOptionEvents();
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
}

function bindOptionEvents() {
    const q = quizData[currentQuestion];
    const options = Array.from(document.querySelectorAll('.option'));
    options.forEach((opt) => {
        opt.addEventListener('click', () => {
            if (answered) return;

            options.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');

            const idx = Number(opt.dataset.index);
            answered = true;

            // färgsättningar
            options.forEach((o, i) => {
                o.classList.add('disabled');
                if (i === q.correct) {
                    o.classList.add('correct');
                } else if (i === idx && i !== q.correct) {
                    o.classList.add('incorrect');
                }
            });

            if (idx === q.correct) score++;

            showFeedback();
            document.getElementById('nextBtn').disabled = false;
        });
    });
}

function showFeedback() {
    const q = quizData[currentQuestion];
    const feedback = document.getElementById('answerFeedback');
    feedback.innerHTML = `
        <div class="correct-answer">${q.explanation}</div>
        <div>${q.source}</div>
    `;
    feedback.classList.add('show');
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        updateProgress();
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContent.innerHTML = `
        <div class="results-container">
            <div class="results-title">🎯 Quiz slutförd!</div>
            <div class="score">${score}/${quizData.length}</div>
            <div class="score-message">Du fick ${Math.round((score / quizData.length) * 100)}% rätt.</div>
            <button class="restart-btn" type="button" id="restartBtn">Kör igen 🔄</button>
        </div>
    `;

    document.getElementById('restartBtn').addEventListener('click', restartQuiz);
    updateProgress();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    updateProgress();
    showQuestion();
}

// Här skedde en uppdatering: Modal-öppning/stängning som i quiz.html
function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.style.display = 'block';
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.style.display = 'none';
}

// Stäng via X
document.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('.close')) {
        const sel = target.getAttribute('data-close');
        if (sel) {
            const id = sel.startsWith('#') ? sel.substring(1) : sel;
            closeModal(id);
        }
    }
});

// Stäng när man klickar utanför
window.addEventListener('click', (e) => {
    const tech = document.getElementById('techModal');
    const prompt = document.getElementById('promptModal');
    if (e.target === tech) closeModal('techModal');
    if (e.target === prompt) closeModal('promptModal');
});


