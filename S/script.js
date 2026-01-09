// ============================================
// JAVASCRIPT FÖR FRÄCKT FREDAGSQUIZ
// Svart humor, katter och lite av varje!
//
// Skapad: 2025-11-28
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna raknull.jpg, kaffe_och_trekant.jpg, samlat_puckon.jpg 
// och vi_vet_inte_varfor_vi_graver.jpg växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// UPPDATERING: Nu med fyra bilder!
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');
        const img4 = document.getElementById('img4');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // UPPDATERING: Nu med fyra bilder
        const images = [img1, img2, img3, img4];
        let currentImageIndex = 0;
        let imageInterval = null;
        
        // Funktion för att växla till nästa bild
        function switchImage() {
            // Ta bort active-class från alla bilder
            images.forEach(img => img.classList.remove('active'));
            
            // Växla till nästa bild
            currentImageIndex = (currentImageIndex + 1) % images.length;
            
            // Lägg till active-class på nästa bild
            images[currentImageIndex].classList.add('active');
        }
        
        // Starta bildväxling när bildskärmen visas
        // Detta körs när användaren navigerar från intro-slides till bildskärmen
        const imageSection = document.getElementById('imageSection');
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    if (!imageSection.classList.contains('hidden')) {
                        // Bildskärmen är nu synlig, starta bildväxling
                        if (!imageInterval) {
                            imageInterval = setInterval(switchImage, 3000); // Växla var 3:e sekund
                        }
                    } else {
                        // Bildskärmen är dold, stoppa bildväxling
                        if (imageInterval) {
                            clearInterval(imageInterval);
                            imageInterval = null;
                        }
                    }
                }
            });
        });
        
        observer.observe(imageSection, { attributes: true });
    });
})();

// ============================================
// INTRODUKTIONSTEXTER - Fem roliga och fräcka slides
// Här presenteras quizets teman med humor och charm
// ============================================
const introPages = [
    {
        title: "Välkommen till det fräcka hörnet! 😈",
        body: `
            <p>Äntligen fredag! Du har överlevt ännu en vecka av möten, mail och mikrovärmda luncher. Nu är det dags att <strong>slappna av</strong> och testa hur bra du är på... ja, lite av varje!</p>
            
            <div class="spicy-box">
                <strong>🔥 Vad väntar dig?</strong>
                <p>Det här quizet är INTE för din chef att se över axeln. Vi pratar:</p>
                <ul>
                    <li><strong>Svart humor</strong> – så mörk att den behöver ficklampa</li>
                    <li><strong>Kattfakta</strong> – för katter är internets sanna kungar</li>
                    <li><strong>Fräcka frågor</strong> – som får dig att rodna (lite)</li>
                    <li><strong>Random kunskap</strong> – som du aldrig visste att du behövde</li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>📝 Så funkar det:</strong>
                <p>5 frågor. 4 svarsalternativ per fråga. Rätt svar = du är grym. Fel svar = du lär dig något nytt!</p>
            </div>
            
            <p>Redo? Klicka dig vidare för att förbereda dig mentalt! 🎭</p>
        `
    },
    {
        title: "Svart humor – konsten att skratta åt det förbjudna 🖤",
        body: `
            <p>Svart humor är som kaffe – inte för alla, men de som gillar det <em>verkligen</em> gillar det. Det handlar om att hitta det komiska i det obekväma.</p>
            
            <div class="info-box">
                <strong>🎭 Visste du att...</strong>
                <ul>
                    <li>Svart humor har visat sig vara kopplat till <strong>högre intelligens</strong> enligt forskning</li>
                    <li>Den kallas också "galgenhumor" – för skämt på väg till avrättningen är tydligen tradition</li>
                    <li>Britter och skandinaver är särskilt kända för sin mörka humor</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>⚠️ Varning!</strong>
                <p>Svart humor är som en fjäder – lätt att bära för den som har den, tung för den som inte fattar poängen!</p>
            </div>
            
            <h3>🤔 Exempel på svart humor:</h3>
            <p>"Jag bad min fru att beskriva mig med ett ord. Hon sa 'otillräcklig'. Jag sa 'det är två ord'. Hon sa 'det bevisar min poäng'."</p>
            
            <p><em>Förlåt inte? Då kanske du borde stanna på denna sida lite längre... 😅</em></p>
        `
    },
    {
        title: "Katter – Internets fluffiga diktatorer 🐱",
        body: `
            <p>Ingen kan scrolla internet utan att stöta på katter. De har tagit över, och vi är bara deras tjänare. Här är lite fakta om våra lurviga överherrar:</p>
            
            <div class="info-box">
                <strong>🐾 Kattfakta du kanske inte visste:</strong>
                <ul>
                    <li>Katter sover <strong>12-16 timmar per dag</strong> – och dömer dig resten av tiden</li>
                    <li>En katt kan rotera sina öron 180 grader – perfekt för att ignorera dig från alla vinklar</li>
                    <li>Katter kan hoppa upp till <strong>6 gånger sin egen längd</strong></li>
                    <li>De har <strong>230 ben</strong> – 24 fler än människor</li>
                    <li>En katthjärna är till 90% identisk med en människas – förklarar deras överlägsna attityd</li>
                </ul>
            </div>
            
            <div class="spicy-box">
                <strong>😼 Varför älskar internet katter?</strong>
                <p>Teorier inkluderar:</p>
                <ul>
                    <li>De är fluffiga och mjuka (obvs)</li>
                    <li>De gör dumma saker med maximal självsäkerhet</li>
                    <li>De bryr sig inte om vad du tycker – total power move</li>
                </ul>
            </div>
            
            <p>I quizet finns det såklart kattrelaterade frågor. Du har blivit varnad! 🐈</p>
        `
    },
    {
        title: "Fräckheter & Tabuämnen 🌶️",
        body: `
            <p>Okej, nu blir det lite <em>pikant</em>. Vi pratar om saker som får folk att rodna, fnissa, eller byta samtalsämne vid middagsbordet.</p>
            
            <div class="spicy-box">
                <strong>🔥 Varför är vi så fascinerade av det förbjudna?</strong>
                <p>Forskning visar att människor är naturligt nyfikna på tabuämnen. Det förbjudna blir extra lockande – precis som den där sista biten choklad man inte "ska" ta.</p>
            </div>
            
            <div class="info-box">
                <strong>💡 Visste du att...</strong>
                <ul>
                    <li>Människor tänker på "saker" <strong>betydligt oftare</strong> än de vågar erkänna i enkäter</li>
                    <li>Antika romare hade <strong>fertilitetsgudar</strong> överallt – de var betydligt mer öppna än vi</li>
                    <li>I Victoriatiden var det skandalöst att visa <strong>anklar</strong> – ja, anklar!</li>
                    <li>Bonoboapor löser <em>alla</em> konflikter med... ja, du vet</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>😏 Förväntningar:</strong>
                <p>Oroa dig inte – frågorna är fräcka men inte <em>för</em> fräcka. Tänk "pub quiz efter några öl", inte "censurera detta omedelbart".</p>
            </div>
            
            <p>Om du rodnar lätt – det är en del av charmen! 😊</p>
        `
    },
    {
        title: "Redo att bevisa din kunskap? 🏆",
        body: `
            <p>Du har nu förberetts mentalt. Du vet vad som väntar. Det är dags att ta steget in i det fräcka quizet!</p>
            
            <div class="info-box">
                <strong>📋 Snabb repetition:</strong>
                <ul>
                    <li><strong>5 frågor</strong> – blandat med humor, katter och lite fräckis</li>
                    <li><strong>4 alternativ</strong> – bara ett är rätt (oftast)</li>
                    <li><strong>Ingen tidsgräns</strong> – ta den tid du behöver</li>
                    <li><strong>Förklaringar</strong> – efter varje fråga lär du dig något nytt</li>
                </ul>
            </div>
            
            <div class="spicy-box">
                <strong>🎯 Tips för att lyckas:</strong>
                <ul>
                    <li>Lita på din magkänsla – den vet mer än du tror</li>
                    <li>Det mest absurda svaret är ibland det rätta</li>
                    <li>Om du skrattar åt en fråga – bra tecken!</li>
                    <li>Dela gärna ditt resultat... eller inte, beroende på hur det går 😅</li>
                </ul>
            </div>
            
            <h3>🚀 Vad väntar du på?</h3>
            <p>Klicka vidare för att se några underhållande bilder, och sedan... <strong>LET'S GO!</strong></p>
            
            <p><em>P.S. Om du får alla rätt är du officiellt en fräck kunskapsmästare! 👑</em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem fräcka och roliga frågor
// Blandning av svart humor, kattfakta och lite pikant allmänbildning
// ============================================
const quizData = [
    {
        question: "🐱 Katter spinner när de är nöjda, men forskare har upptäckt att de också spinner i en annan situation. Vilken?",
        answers: [
            "a) När de planerar världsherravälde",
            "b) När de är stressade eller skadade (för att läka sig själva)",
            "c) När de drömmer om att fånga möss",
            "d) När de vill att du ska vakna kl 05:00"
        ],
        correct: 1,
        explanation: `
            <strong>✓ RÄTT SVAR: b) När de är stressade eller skadade</strong>
            
            <h3>🐾 Den fascinerande sanningen!</h3>
            
            <p>Katters spinnande vibrerar i frekvenser mellan <strong>25-150 Hz</strong>, vilket faktiskt har läkande egenskaper! Forskning visar att dessa vibrationer kan:</p>
            
            <div class="info-box">
                <strong>🔬 Vetenskapliga fördelar med kattspinnande:</strong>
                <ul>
                    <li>Främja läkning av ben och muskler</li>
                    <li>Minska stress och sänka blodtrycket</li>
                    <li>Lindra smärta (som en naturlig smärtlindring)</li>
                </ul>
            </div>
            
            <p>Så nästa gång din katt spinner – kanske den inte bara är glad, utan aktivt håller på att reparera sig själv som en liten fluffig Wolverine! 🦸‍♂️🐱</p>
            
            <p><strong>Fun fact:</strong> Detta kan vara anledningen till att katter verkar ha "nio liv" – de bokstavligen <em>vibrerar</em> sig själva till hälsa!</p>
        `
    },
    {
        question: "🖤 Vilken historisk person är känd för följande citat: 'Jag har aldrig låtit skolgång störa min utbildning'?",
        answers: [
            "a) Albert Einstein – när han skolkade för att lösa relativitetsteorin",
            "b) Mark Twain – författaren bakom Tom Sawyer",
            "c) Winston Churchill – mellan whiskyglasen",
            "d) Oscar Wilde – förmodligen på väg till en fest"
        ],
        correct: 1,
        explanation: `
            <strong>✓ RÄTT SVAR: b) Mark Twain</strong>
            
            <h3>📚 Mästaren av sarkasm!</h3>
            
            <p><strong>Samuel Langhorne Clemens</strong>, mer känd som Mark Twain, var en av historiens vassaste pennor. Han hatade formell utbildning men älskade att lära sig – på egna villkor!</p>
            
            <div class="info-box">
                <strong>✍️ Fler klassiska Twain-citat:</strong>
                <ul>
                    <li>"Om man berättar sanningen behöver man inte minnas någonting"</li>
                    <li>"Det är lättare att lura folk än att övertyga dem om att de blivit lurade"</li>
                    <li>"Jag rökte bara en cigarr åt gången"</li>
                </ul>
            </div>
            
            <p>Twain lämnade skolan vid <strong>12 års ålder</strong> när hans pappa dog, men blev en av världens mest älskade författare. Bevis på att formell utbildning inte är allt! 📖</p>
            
            <p><strong>Svart humor-bonus:</strong> Twain sa också: "Ryktet om min död är kraftigt överdrivet" – efter att en tidning felaktigt publicerat hans dödsannons! 💀😄</p>
        `
    },
    {
        question: "🌶️ I antikens Rom fanns det en gud vid namn Mutunus Tutunus. Vad var han gud för?",
        answers: [
            "a) Åska och blixtar (Jupiters kusin)",
            "b) Äktenskaplig lycka och fertilitet (med en MYCKET specifik symbol)",
            "c) Vin och fest (Bacchus lillbror)",
            "d) Skämt och skratt (den första stand-up-komikern)"
        ],
        correct: 1,
        explanation: `
            <strong>✓ RÄTT SVAR: b) Äktenskaplig lycka och fertilitet</strong>
            
            <h3>🏛️ Romarna var... öppna!</h3>
            
            <p><strong>Mutunus Tutunus</strong> var en fertilitetsgud, och hans staty var... ja, låt oss säga att den var <em>anatomiskt korrekt och optimistisk</em>. 😳</p>
            
            <div class="info-box">
                <strong>💍 Bröllopstradition:</strong>
                <p>Romerska brudar fick faktiskt "välsigna sig" med gudens staty före bröllopet. Det ansågs ge lycka i äktenskapet!</p>
            </div>
            
            <div class="spicy-box">
                <strong>🔥 Fler fräcka antika fakta:</strong>
                <ul>
                    <li>Pompeji hade <strong>mer än 35 bordeller</strong> i en stad med 11 000 invånare</li>
                    <li>Falusar (ja, sådana) användes som <strong>lyckobringare</strong> och hängdes vid dörrar</li>
                    <li>Greker och romare hade <strong>inga ord för heterosexuell/homosexuell</strong> – de brydde sig mer om vem som hade makt</li>
                </ul>
            </div>
            
            <p>Så nästa gång någon säger att "förr i tiden var folk mer anständiga" – hänvisa till romarna! 😏</p>
        `
    },
    {
        question: "😸 Vad händer om en katt äter för mycket kattmynta (catnip)?",
        answers: [
            "a) Den blir permanent hög och börjar filosofera om livets mening",
            "b) Den kan få magproblem, men blir INTE beroende – effekten avtar efter 10-15 min",
            "c) Den får superkrafter i exakt 37 minuter",
            "d) Den börjar prata människospråk (men bara på latin)"
        ],
        correct: 1,
        explanation: `
            <strong>✓ RÄTT SVAR: b) Den kan få magproblem, men blir inte beroende</strong>
            
            <h3>🌿 Kattmynta-vetenskap!</h3>
            
            <p>Kattmynta innehåller <strong>nepetalakton</strong>, en kemikalie som binder till kattens feromonceller och ger dem en "rush" – men det är helt ofarligt!</p>
            
            <div class="info-box">
                <strong>🔬 Fakta om kattmynta:</strong>
                <ul>
                    <li>Effekten varar bara <strong>10-15 minuter</strong></li>
                    <li>Katten blir "immun" i ca <strong>30 minuter</strong> efteråt</li>
                    <li>Cirka <strong>30% av katter</strong> reagerar inte alls på kattmynta</li>
                    <li>Reaktionen är <strong>ärftlig</strong> – som en genetisk party-gen!</li>
                </ul>
            </div>
            
            <p>Om en katt äter FÖR mycket kan den få diarré eller kräkas, men det finns <strong>ingen risk för beroende</strong> – till skillnad från oss och choklad! 🍫</p>
            
            <p><strong>Bonus:</strong> Kattmynta fungerar även som myggmedel för människor! Katter = multifunktionella husdjur. 🦟❌</p>
        `
    },
    {
        question: "🖤 Vilket av följande är ett VERKLIGT ord i svenska språket?",
        answers: [
            "a) Mammalull – ull från mammut",
            "b) Fulgas – illaluktande gaser (officiellt ord sedan 2015)",
            "c) Bansen – ett gammalt ord för att vara på dåligt humör",
            "d) Snansen – att gå omkring och snoka"
        ],
        correct: 2,
        explanation: `
            <strong>✓ RÄTT SVAR: c) Bansen</strong>
            
            <h3>📖 Svenska språkets dolda skatter!</h3>
            
            <p><strong>Bansen</strong> är ett gammalt svenskt dialektord som betyder att vara på <em>dåligt humör</em> eller <em>butter</em>. "Hen är på bansen idag!"</p>
            
            <div class="info-box">
                <strong>🇸🇪 Fler underbara svenska ord du kanske inte kände till:</strong>
                <ul>
                    <li><strong>Mångata:</strong> Reflektionen av månen på vattnet (vi har ett ORD för det!)</li>
                    <li><strong>Fika:</strong> Känt världen över nu!</li>
                    <li><strong>Lagom:</strong> Kan inte översättas – och det är lagom bra så</li>
                    <li><strong>Gökotta:</strong> Att gå upp tidigt för att höra fåglar sjunga</li>
                    <li><strong>Tretår:</strong> En tredje påtår kaffe (för att två inte räcker)</li>
                </ul>
            </div>
            
            <p>Svenska språket är fullt av charmiga, specifika ord som andra språk bara avundas oss! 🇸🇪✨</p>
            
            <p><strong>Fun fact:</strong> "Fulgas" finns faktiskt INTE som officiellt ord, men det borde det – vi behöver det! 💨😅</p>
        `
    }
];

// ============================================
// GLOBALA VARIABLER FÖR QUIZ-STATE
// Här hanterar vi programmets tillstånd
// ============================================
let currentIntroPage = 0; // Nuvarande introduktionssida
let currentQuestion = 0; // Nuvarande fråga i quizet
let score = 0; // Användarens poäng
let answered = false; // Om användaren har svarat på aktuell fråga

// ============================================
// DOM-ELEMENT
// Här hämtar vi alla viktiga element från HTML:en för att kunna manipulera dem
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

// Sidindikator-element
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
    // Skapa sidindikator-prickar först
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
// Skapar visuella prickar för varje introduktionssida
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
// ============================================
function showIntroPage(pageIndex) {
    const page = introPages[pageIndex];
    introPageTitle.textContent = page.title;
    introPageBody.innerHTML = page.body;
    
    // Uppdatera sidnummer-text
    pageNumber.textContent = `Sida ${pageIndex + 1} av ${introPages.length}`;
    
    // Uppdatera aktiv prick
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
        introNextBtn.textContent = 'Visa bilderna! 📸';
    } else {
        introNextBtn.textContent = 'Ge mig mer! ➡️';
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
// Renderar en fråga med svarsalternativ dynamiskt
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
                        ${answer}
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
// Här sker färgkodning (grön/röd) och feedback
// ============================================
function handleAnswer(selectedIndex) {
    // Om redan svarat, gör inget
    if (answered) return;
    
    answered = true;
    const question = quizData[currentQuestion];
    const answerButtons = quizContent.querySelectorAll('.answer-btn');
    const feedbackDiv = document.getElementById('feedback');
    
    // Markera rätt och fel svar med färgkodning
    answerButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct'); // Grön bakgrund
        } else if (index === selectedIndex && selectedIndex !== question.correct) {
            btn.classList.add('incorrect'); // Röd bakgrund
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
            <strong>😅 Oops, det var inte helt rätt!</strong>
            ${question.explanation}
        `;
    }
    
    // Lägg till nästa-knapp
    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-question-btn';
    nextBtn.textContent = currentQuestion < quizData.length - 1 ? 'Nästa fråga! 🔥' : 'Se ditt resultat! 🎉';
    nextBtn.addEventListener('click', nextQuestion);
    feedbackDiv.appendChild(nextBtn);
    
    // Uppdatera progress
    updateProgress();
}

// ============================================
// NÄSTA FRÅGA
// Går till nästa fråga eller visar resultat om alla frågor är besvarade
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
    let emoji = '';
    if (percentage === 100) {
        message = 'PERFEKT! Du är officiellt en fräck kunskapsmästare! Dina vänner borde vara imponerade... eller oroade. 👑';
        emoji = '🏆';
    } else if (percentage >= 80) {
        message = 'Riktigt bra! Du har koll på det mesta – inklusive saker man normalt inte erkänner att man vet! 😏';
        emoji = '🌟';
    } else if (percentage >= 60) {
        message = 'Helt okej! Du är på god väg mot fräck kunskapsnivå. Fortsätt träna på de viktiga ämnena! 📚';
        emoji = '😊';
    } else if (percentage >= 40) {
        message = 'Det finns potential här! Kanske dags att spendera mer tid på internet och mindre på produktiva saker? 😅';
        emoji = '🤔';
    } else {
        message = 'Hmm... antingen var du för anständig för dessa frågor, eller så behöver du mer fredag i ditt liv! 🎉';
        emoji = '😇';
    }
    
    const resultsHTML = `
        <div class="result-container">
            <h2 class="result-title">${emoji} Quizet är slut! ${emoji}</h2>
            <div class="result-score">${score} av ${quizData.length} rätt</div>
            <div class="result-score">${percentage}%</div>
            <p class="result-message">${message}</p>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>🎓 Vad du har lärt dig (kanske):</strong>
                <ul>
                    <li>Katter är magiska läkande varelser 🐱</li>
                    <li>Romarna var... väldigt öppna 🏛️</li>
                    <li>Mark Twain var en sarkastisk legend ✍️</li>
                    <li>Svenska språket har fantastiska ord 🇸🇪</li>
                    <li>Kattmynta är som en mini-fest för katter 🌿</li>
                </ul>
            </div>
            
            <div class="spicy-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>🔥 Dela ditt resultat!</strong>
                <p>Våga du? Eller stannar denna kunskap mellan dig och skärmen... 😏</p>
            </div>
            
            <div class="result-buttons">
                <button class="restart-btn" onclick="restartQuiz()">Kör igen! 🔄</button>
                <a href="https://kentlundgren.se/program/quiz/0/" class="browse-quiz-btn" target="_blank" rel="noopener noreferrer">Fler quiz (seriösa) 📚</a>
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
// Visar hur långt användaren har kommit i quizet
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
// Det fräcka quizet är nu redo att användas!
// Skapad: 2025-11-28
// Ämne: Svart humor, katter och fräckheter
// Författare: Kent Lundgren med AI-assistans (Claude Opus 4.5)
// 
// Ha en fantastisk fredag! 🎉🔥😈
// ============================================

