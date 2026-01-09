// ============================================
// QUIZ: Kultur- och fritidsnämnden september 2025
// Använder ES2023+ funktionalitet för moderna JavaScript-strukturer
// ============================================

// ============================================
// INTRODUKTIONSTEXTER - Tillitsbaserat ledarskap och ekonomi
// Här skedde en uppdatering: Förnyad sektion om tillitsbaserat ledarskap kopplat till ekonomi
// ============================================
const introPages = [
    {
        title: "Välkommen till Quizet!",
        body: `
            <p>Detta quiz handlar om <strong>Kultur- och fritidsnämndens</strong> verksamhet och resultat under september 2025.</p>
            <p>Du kommer att få testa dina kunskaper om viktiga händelser, projekt och resultat som dokumenteras i nämndens månads- och delårsrapporter.</p>
            <p>Innan vi börjar med quizet vill vi introducera dig till ett viktigt ledarskapsperspektiv som påverkar hur ekonomisk styrning och uppföljning fungerar i offentlig verksamhet: <strong>tillitsbaserat ledarskap</strong>.</p>
        `
    },
    {
        title: "Tillitsbaserat ledarskap - Från problem till lösning",
        body: `
            <p><strong>Tillitsbaserad styrning och ledning</strong> har fått stort genomslag i svensk offentlig sektor under senare år. Utvecklingen är ett svar på kritik mot att styrning av den offentligt finansierade välfärden fått allt större inslag av kontroll och återrapportering.</p>
            <p><strong>Vad New Public Management (NPM) ledde till:</strong></p>
            <ul>
                <li><strong>Detaljstyrning och misstro:</strong> Omfattande kontroll som minskade professionell autonomi</li>
                <li><strong>Mätobsessionen:</strong> Fokus på kvantifierbara resultat - det som inte kan mätas riskerar att förbises</li>
                <li><strong>Administrativ inflation:</strong> Fler chefer och administratörer i staberna, färre resurser till kärnverksamheten</li>
                <li><strong>Ökad arbetsbelastning:</strong> Omfattande tidsödande intern rapportering samtidigt som förtroende för yrkeskunskap minskade</li>
            </ul>
            <p>Tillitsbaserat ledarskap innebär att flytta fokus från denna detaljstyrning till att ge medarbetare större handlingsutrymme, ansvar och förtroende för sin professionella kompetens.</p>
            <p><em>Källa: <a href="https://snsse.cdn.triggerfish.cloud/uploads/2023/02/tillforlitlig-styrning-och-organisering-av-valfarden.pdf" target="_blank" rel="noopener noreferrer">Björk, L. och Tengblad, S. (red.) (2023). Tillförlitlig styrning och organisering av välfärden. Stockholm: SNS Förlag.</a></em></p>
        `
    },
    {
        title: "Från tillit till tillförlitlighet",
        body: `
            <h3>Är brist på tillit verkligen problemet?</h3>
            <p>Forskare vid SNS ifrågasätter om välfärdens utmaningar verkligen beror på brist på tillit. De menar att fokus bör ligga på <strong>tillförlitlig organisering</strong> - att skapa organisationer som är värda att lita på.</p>
            <p><strong>Vad innebär tillförlitlig organisering?</strong></p>
            <p>Istället för att bara "ge tillit" handlar det om att skapa organisatoriska förutsättningar som gör det möjligt för medarbetare att utföra sitt uppdrag på ett professionellt sätt:</p>
            <ul>
                <li><strong>Tydliga uppdrag:</strong> Klara roller och ansvar utan otydligheter</li>
                <li><strong>Rätt resurser:</strong> Tid, kompetens och verktyg som matchar uppgiften</li>
                <li><strong>Stödjande strukturer:</strong> System som underlättar istället för försvårar arbetet</li>
                <li><strong>Meningsfulla mål:</strong> Uppföljning av det som verkligen betyder något för brukare och medborgare</li>
            </ul>
            <p>Frågan blir då: <em>Hur kan vi organisera välfärden så att den blir tillförlitlig och bättre rustad inför utmaningar, kriser och omvärldsförändringar?</em></p>
            <p><em>Källa: <a href="https://snsse.cdn.triggerfish.cloud/uploads/2023/02/tillforlitlig-styrning-och-organisering-av-valfarden.pdf" target="_blank" rel="noopener noreferrer">Björk, L. och Tengblad, S. (red.) (2023). Tillförlitlig styrning och organisering av välfärden. Stockholm: SNS Förlag.</a></em></p>
        `
    },
    {
        title: "Tillförlitlig ekonomistyrning i praktiken",
        body: `
            <h3>Vad innebär detta för ekonomin i organisationen?</h3>
            <p>När vi kombinerar tillitsbaserat ledarskap med tillförlitlig organisering i ekonomistyrning uppstår en kraftfull transformation:</p>
            <ul>
                <li><strong>Från kontroll till dialog:</strong> Ekonomiska uppföljningar blir samtal om vad som fungerar och varför, inte bara kontroll av budgetavvikelser.</li>
                <li><strong>Bättre prognoser:</strong> Medarbetare som arbetar i tillförlitliga organisationer vågar vara ärliga om ekonomiska utmaningar tidigt.</li>
                <li><strong>Kvalitet framför kvantitet:</strong> Färre men mer meningsfulla ekonomiska nyckeltal som verkligen speglar verksamhetens värde för medborgarna.</li>
                <li><strong>Effektivare uppföljning:</strong> Mindre tid på detaljrapportering, mer tid på analys och åtgärder.</li>
                <li><strong>Gemensamt ägandeskap:</strong> Ekonomiska prognoser blir en gemensam angelägenhet när organisationen är tillförlitlig.</li>
            </ul>
            <p>Controllern blir en <strong>strategisk partner</strong> som stödjer verksamheten och bidrar till tillförlitlig organisering, inte en "sifferpolis" som kontrollerar.</p>
            <p><em>Källor:</em></p>
            <ul>
                <li><a href="https://snsse.cdn.triggerfish.cloud/uploads/2023/02/tillforlitlig-styrning-och-organisering-av-valfarden.pdf" target="_blank" rel="noopener noreferrer">Björk, L. och Tengblad, S. (red.) (2023). Tillförlitlig styrning och organisering av välfärden. Stockholm: SNS Förlag.</a></li>
                <li><a href="https://controllerutangranser.wordpress.com/2025/09/26/tillitsbaserat-ledarskap-en-djupdykning-i-teori-och-praktik/" target="_blank" rel="noopener noreferrer">Controller utan gränser (2025). "Tillitsbaserat ledarskap – en djupdykning i teori och praktik"</a></li>
            </ul>
        `
    },
    {
        title: "Från teori till praktik - Simrishamns kommun",
        body: `
            <h3>Rapportering som skapar tillförlitlighet</h3>
            <p>När vi studerar hur kommuner rapporterar sin ekonomi kan vi se spår av både tillitsbaserad styrning och strävanden mot tillförlitlig organisering. Rapporter och uppföljningar bör vara:</p>
            <ul>
                <li><strong>Begripliga:</strong> Skrivna för verksamheten och politiken, inte bara för specialister</li>
                <li><strong>Relevanta:</strong> Fokus på det som verkligen påverkar verksamhetens mål och medborgarnas behov</li>
                <li><strong>Transparenta:</strong> Öppna om både framgångar och utmaningar</li>
                <li><strong>Framåtblickande:</strong> Inte bara vad som hänt, utan vad vi lär oss och vilka åtgärder som planeras</li>
                <li><strong>Kontextuella:</strong> Siffror sätts i relation till verksamhetens förutsättningar och uppdrag</li>
            </ul>
            <p><strong>Nu är det din tur!</strong> De rapporter du kommer att möta frågor om - månadsrapporter och delårsrapporter från Kultur- och fritidsnämnden i Simrishamns kommun - är konkreta exempel på ekonomisk styrning och uppföljning i praktiken.</p>
            <p>Genom att studera dessa rapporter kan vi lära oss både <em>vad</em> som har hänt i verksamheten och <em>hur</em> kommunen väljer att kommunicera ekonomisk information. Detta är tillförlitlig organisering i praktiken!</p>
            <p>Klicka vidare för att se startbilden och sedan börja quizet. Lycka till! 🎯</p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Kultur- och fritidsnämnden september 2025
// ============================================
const quizData = [
    {
        question: "Familjens nya mötesplats: Österlens museum arbetar med att omvandla en del av bottenvåningen till ett rum för lek, skapande och möten över generationerna - projektet kallas 'Hafreborg'. När planeras invigningen av denna nya familjedel att ske?",
        answers: [
            "15 november i samband med höstlovet",
            "30 november i samband med julmarknad",
            "13 december under Luciahelgen",
            "6 januari på trettondagen"
        ],
        correct: 1, // Index 1 = "30 november i samband med julmarknad"
        explanation: `
            <strong>Rätt svar: 30 november i samband med julmarknad</strong>
            <p>"Projektet ombyggnad 'Hafreborg' pågår (utfall -121 tkr; budget -539 tkr). Planeringsmöten har hållits och offerter har inkommit. Byggnation och målningsarbeten pågår. Nya filmer har tagits fram i samarbete med Marint centrum. Illustratörer har varit på museet och skisser på väggmålningar är klara. Arbetet påbörjas i oktober. En ny båt, en flatbottnad eka, har kommit på plats. Invigning av ny familjedel på museet ska ske den 30 november i samband med julmarknad på museet."</p>
            <p><em>Källa: Simrishamns kommun (2025) Månadsrapport sept 2025, s. 5.</em></p>
        `
    },
    {
        question: "Brobyggande över gränser: Projektet 'More Than One Story', som sprider det brobyggande kortspelet världen över, fick under våren 2025 två nya samarbetspartners i Europa. Vilka länder var det?",
        answers: [
            "Polen och Tjeckien",
            "Armenien och Bulgarien",
            "Estland och Lettland",
            "Kroatien och Slovenien"
        ],
        correct: 1, // Index 1 = "Armenien och Bulgarien"
        explanation: `
            <strong>Rätt svar: Armenien och Bulgarien</strong>
            <p>"Projektet som sprider det brobyggande kortspelet More Than One Story fortsatte runt om i världen där uppskattningsvis 1,7 miljoner människor i över 37 länder har berörts under projektets 12 år. Projektet fick nya samarbetspartners i Armenien och Bulgarien. Över 3 000 personer per månad besökte projektets hemsida där alla kan spela kortspelet via online videomöten."</p>
            <p><em>Källa: Simrishamns kommun (2025) Delårsrapport 2025, s. 36.</em></p>
        `
    },
    {
        question: "När kostnaderna skenar iväg: Fritidsenhetens energi- och vattenkostnader ligger just nu 260 tkr över årsbudget. Vad är den huvudsakliga orsaken till denna överskridning?",
        answers: [
            "Ökade uppvärmningskostnader på grund av kallare väder än normalt",
            "Extra öppettider på utomhusbaden för skolverksamhetens simundervisning",
            "Installation av ny ventilation i bowlinghallen",
            "Läckage i rörsystem på Korsavadsanläggningen"
        ],
        correct: 1, // Index 1 = "Extra öppettider på utomhusbaden för skolverksamhetens simundervisning"
        explanation: `
            <strong>Rätt svar: Extra öppettider på utomhusbaden för skolverksamhetens simundervisning</strong>
            <p>"Energi- och vattenpriserna inom fritidsenheten ligger just nu 260 tkr över årsbudget. Energi- och vattenkostnaderna påverkas bland annat av de extra öppettiderna på utomhusbaden som skolverksamheten har nyttjat."</p>
            <p><em>Källa: Simrishamns kommun (2025) Månadsrapport sept 2025, s. 4.</em></p>
        `
    },
    {
        question: "Sommarens nya upplägg: Ungdomsverksamheten förändrade upplägget för sin sommarverksamhet 2025 med fokus på det lokala och spontana. Vilken förändring gjordes konkret?",
        answers: [
            "Samarbete startades med fritidsgårdar i Tomelilla kommun",
            "En extra vecka öppet samt utökade öppettider dagtid",
            "Nya lokaler öppnades i Hammenhög",
            "Digital sommarverksamhet via streaming"
        ],
        correct: 1, // Index 1 = "En extra vecka öppet samt utökade öppettider dagtid"
        explanation: `
            <strong>Rätt svar: En extra vecka öppet samt utökade öppettider dagtid</strong>
            <p>"Inför sommaren arbetade ungdomsverksamheten fram ett nytt upplägg för sin sommarverksamhet med fokus på det lokala och spontana. En extra vecka öppet adderades till sommarverksamheten samt att öppettiderna utökades dagtid under sommaren. Ett utökat fokus på lokala utflykter och spontana aktiviteter präglade utbudet. Detta för att möjliggöra, attrahera och tillgängliggöra verksamheten för fler barn och unga."</p>
            <p><em>Källa: Simrishamns kommun (2025) Delårsrapport 2025, s. 6.</em></p>
        `
    },
    {
        question: "Konst på Skansen: Planeringsarbete pågår för att placera offentlig konst i det expansiva Skansenområdet. Ett konstprogram finns redan framtaget. Vad har förvaltningen konkret gjort under 2025 som ett första steg i projektet?",
        answers: [
            "Beställt ett konstverk av en lokal konstnär",
            "Genomfört en medborgarenkät om konstpreferenser",
            "Köpt in facklitteratur om offentlig konst",
            "Anlitat en konstkurator från Region Skåne"
        ],
        correct: 2, // Index 2 = "Köpt in facklitteratur om offentlig konst"
        explanation: `
            <strong>Rätt svar: Köpt in facklitteratur om offentlig konst</strong>
            <p>"Med hänsyn till den begränsade tid som återstår av budgetåret 2025 har en inledande satsning i form av inköp av facklitteratur med koppling till offentlig konst genomförts. Detta utgör ett konkret och kostnadseffektivt första steg i projektets genomförande. Investeringen stärker projektets kunskapsmässiga grund och kan fungera som ett verktyg för inspiration i konstprojektet."</p>
            <p><em>Källa: Simrishamns kommun (2025) Månadsrapport sept 2025, s. 5-6.</em></p>
        `
    }
];

// ============================================
// GLOBALA VARIABLER FÖR QUIZ-STATE
// ============================================
let currentIntroPage = 0; // Nuvarande introduktionssida
let currentQuestion = 0; // Nuvarande fråga i quizet
let score = 0; // Användarens poäng
let answered = false; // Om användaren har svarat på aktuell fråga

// ============================================
// DOM-ELEMENT
// Här hämtar vi alla viktiga element från HTML:en
// ============================================
const introSection = document.getElementById('introSection');
const imageSection = document.getElementById('imageSection');
const quizContent = document.getElementById('quizContent');
const progressFill = document.getElementById('progressFill');

// Intro-navigering
const introPageTitle = document.getElementById('introPageTitle');
const introPageBody = document.getElementById('introPageBody');
const introPrevBtn = document.getElementById('introPrevBtn');
const introNextBtn = document.getElementById('introNextBtn');

// Här skedde en uppdatering: Lade till sidindikator-element
const pageNumber = document.getElementById('pageNumber');
const pageDots = document.getElementById('pageDots');

// Bildsektion
const continueBtn = document.getElementById('continueBtn');

// Modaler
const techBtn = document.getElementById('techBtn');
const promptBtn = document.getElementById('promptBtn');
const techModal = document.getElementById('techModal');
const promptModal = document.getElementById('promptModal');
const closeButtons = document.querySelectorAll('.close');

// ============================================
// INITIALISERING - Körs när sidan laddas
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Här skedde en uppdatering: Skapa sidindikator-prickar först
    createPageDots();
    
    // Visa första introduktionssidan
    showIntroPage(0);
    
    // Lyssna på knappar
    setupEventListeners();
});

// ============================================
// EVENT LISTENERS - Kopplar knappar till funktioner
// ============================================
function setupEventListeners() {
    // Intro-navigering
    introPrevBtn.addEventListener('click', () => navigateIntro(-1));
    introNextBtn.addEventListener('click', () => navigateIntro(1));
    
    // Fortsätt-knapp från bildskärm
    continueBtn.addEventListener('click', startQuiz);
    
    // Modal-knappar
    techBtn.addEventListener('click', () => openModal(techModal));
    promptBtn.addEventListener('click', () => openModal(promptModal));
    
    // Stäng-knappar i modaler
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = e.target.getAttribute('data-close');
            const modal = document.querySelector(modalId);
            closeModal(modal);
        });
    });
    
    // Stäng modal vid klick utanför
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
}

// ============================================
// SKAPA SIDINDIKATOR-PRICKAR
// Här skedde en uppdatering: Ny funktion för att skapa visuella sidprickar
// ============================================
function createPageDots() {
    pageDots.innerHTML = ''; // Rensa först
    
    // Skapa en prick för varje sida
    for (let i = 0; i < introPages.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'page-dot';
        dot.setAttribute('data-page', i);
        dot.setAttribute('title', `Gå till sida ${i + 1}`);
        
        // Klick på prick för att hoppa till sida
        dot.addEventListener('click', () => {
            currentIntroPage = i;
            showIntroPage(i);
        });
        
        pageDots.appendChild(dot);
    }
}

// ============================================
// INTRODUKTIONSNAVIGERING
// Här hanterar vi navigering mellan introduktionssidorna
// Här skedde en uppdatering: Lade till uppdatering av sidindikator
// ============================================
function showIntroPage(pageIndex) {
    const page = introPages[pageIndex];
    introPageTitle.textContent = page.title;
    introPageBody.innerHTML = page.body;
    
    // Här skedde en uppdatering: Uppdatera sidnummer-text
    pageNumber.textContent = `Sida ${pageIndex + 1} av ${introPages.length}`;
    
    // Här skedde en uppdatering: Uppdatera aktiv prick
    const dots = pageDots.querySelectorAll('.page-dot');
    dots.forEach((dot, index) => {
        if (index === pageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Uppdatera knappar
    introPrevBtn.disabled = (pageIndex === 0);
    
    // Om sista sidan, ändra text på nästa-knapp
    if (pageIndex === introPages.length - 1) {
        introNextBtn.textContent = 'Se startbild ➡️';
    } else {
        introNextBtn.textContent = 'Nästa ➡️';
    }
}

function navigateIntro(direction) {
    currentIntroPage += direction;
    
    // Om vi är på sista sidan och klickar nästa, gå till bildskärm
    if (currentIntroPage >= introPages.length) {
        introSection.classList.add('hidden');
        imageSection.classList.remove('hidden');
        return;
    }
    
    // Annars visa rätt sida
    showIntroPage(currentIntroPage);
}

// ============================================
// STARTA QUIZ
// Döljer bildskärm och visar första frågan
// ============================================
function startQuiz() {
    imageSection.classList.add('hidden');
    quizContent.classList.remove('hidden');
    
    // Återställ quiz-state
    currentQuestion = 0;
    score = 0;
    answered = false;
    
    // Visa första frågan
    displayQuestion();
    updateProgress();
}

// ============================================
// VISA FRÅGA
// Renderar en fråga med svarsalternativ
// ============================================
function displayQuestion() {
    const question = quizData[currentQuestion];
    
    // Skapa HTML för frågan
    const questionHTML = `
        <div class="question-container">
            <div class="question-number">Fråga ${currentQuestion + 1} av ${quizData.length}</div>
            <h2 class="question-text">${question.question}</h2>
            <div class="answers-container">
                ${question.answers.map((answer, index) => `
                    <button class="answer-btn" data-index="${index}">
                        ${String.fromCharCode(65 + index)}) ${answer}
                    </button>
                `).join('')}
            </div>
            <div id="feedback"></div>
        </div>
    `;
    
    quizContent.innerHTML = questionHTML;
    
    // Lyssna på svar
    const answerButtons = quizContent.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
    });
    
    answered = false;
}

// ============================================
// HANTERA SVAR
// Körs när användaren klickar på ett svar
// ============================================
function handleAnswer(selectedIndex) {
    // Om redan svarat, gör inget
    if (answered) return;
    
    answered = true;
    const question = quizData[currentQuestion];
    const answerButtons = quizContent.querySelectorAll('.answer-btn');
    const feedbackDiv = document.getElementById('feedback');
    
    // Markera rätt och fel svar
    answerButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correct) {
            btn.classList.add('incorrect');
        }
    });
    
    // Visa feedback
    if (selectedIndex === question.correct) {
        score++;
        feedbackDiv.className = 'feedback correct';
        feedbackDiv.innerHTML = question.explanation;
    } else {
        feedbackDiv.className = 'feedback incorrect';
        feedbackDiv.innerHTML = `
            <strong>Tyvärr, det var inte rätt!</strong>
            ${question.explanation}
        `;
    }
    
    // Lägg till nästa-knapp
    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-question-btn';
    nextBtn.textContent = currentQuestion < quizData.length - 1 ? 'Nästa fråga ➡️' : 'Se resultat 🎉';
    nextBtn.addEventListener('click', nextQuestion);
    feedbackDiv.appendChild(nextBtn);
    
    // Uppdatera progress
    updateProgress();
}

// ============================================
// NÄSTA FRÅGA
// Går till nästa fråga eller visar resultat
// ============================================
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        displayQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

// ============================================
// VISA RESULTAT
// Visar slutresultat och möjlighet att starta om
// ============================================
function showResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    
    let message = '';
    if (percentage === 100) {
        message = 'Perfekt! Du har koll på Kultur- och fritidsnämndens verksamhet! 🌟';
    } else if (percentage >= 80) {
        message = 'Mycket bra! Du har god insikt i verksamheten! 👍';
    } else if (percentage >= 60) {
        message = 'Bra jobbat! Det finns mer att lära, men du har en god grund! 📚';
    } else {
        message = 'Det finns mycket att lära! Läs gärna rapporterna och försök igen! 💪';
    }
    
    const resultsHTML = `
        <div class="result-container">
            <h2 class="result-title">Quiz slutfört! 🎉</h2>
            <div class="result-score">${score} av ${quizData.length} rätt</div>
            <div class="result-score">${percentage}%</div>
            <p class="result-message">${message}</p>
            <div class="result-buttons">
                <button class="restart-btn" onclick="restartQuiz()">Starta om quiz 🔄</button>
                <a href="https://kentlundgren.se/program/quiz/0/" class="browse-quiz-btn" target="_blank" rel="noopener noreferrer">Se alla quiz 📚</a>
            </div>
        </div>
    `;
    
    quizContent.innerHTML = resultsHTML;
    updateProgress();
}

// ============================================
// STARTA OM QUIZ
// Återställer allt och börjar om från början
// ============================================
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    currentIntroPage = 0;
    
    // Visa intro igen
    quizContent.classList.add('hidden');
    introSection.classList.remove('hidden');
    showIntroPage(0);
    updateProgress();
}

// ============================================
// UPPDATERA PROGRESSBAR
// Visar hur långt användaren har kommit
// ============================================
function updateProgress() {
    // Om vi är i intro-fasen (inklusive bildskärm), visa 0%
    if (quizContent.classList.contains('hidden')) {
        progressFill.style.width = '0%';
        return;
    }
    
    // Om vi är i quiz-fasen, visa progress baserat på frågor
    const progress = ((currentQuestion + (answered ? 1 : 0)) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// ============================================
// MODAL-HANTERING
// Öppna och stänga modaler
// ============================================
function openModal(modal) {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
}

// ============================================
// SLUT PÅ SCRIPT
// Quiz är nu redo att användas!
// ============================================


