// ============================================
// JAVASCRIPT FÖR QUIZ: FRITIDSKORTET MÖTER KULTURSKOLAN
// VERSION 2 - MED FIREBASE-INTEGRATION
// Kultur för alla barn – vad säger forskningen och verkligheten?
//
// Skapad: 2025-12-05
// Uppdaterad: 2025-12-09 med Firebase-integration
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
//
// ============================================
// NYTT I VERSION 2:
// - Namnruta i början - användaren måste ange sitt namn
// - Svårighetsbetyg 1-10 efter quizresultat
// - Firebase-lagring av namn + betyg + poäng + datum
// ============================================

// ============================================
// NYTT I VERSION 2: GLOBALA VARIABLER FÖR ANVÄNDARNAMN OCH SPARALTERNATIV
// ============================================
// Dessa variabler lagrar användarens namn och val av sparalternativ genom hela quizet
// saveOption kan vara: 'anonymous', 'partial', eller 'full'
let userName = '';
let saveOption = 'full'; // Tre alternativ: 'anonymous' | 'partial' | 'full'

// ============================================
// BILDVÄXLING
// Bilderna kultur1.jpg och kultur2.jpg
// växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // Två bilder (kultur1.jpg och kultur2.jpg)
        const images = [img1, img2];
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
// INTRODUKTIONSTEXTER - Fem slides om Fritidskortet och Kulturskolan
// Baserade på Folkhälsomyndighetens information, Barnkonventionen,
// SKR:s statistik och kommunala exempel
// ============================================
const introPages = [
    {
        title: "Fritidskortet – en historisk folkhälsoreform",
        body: `
            <p>Välkommen till ett quiz om <strong>Fritidskortet</strong> och <strong>Kulturskolan</strong>! Här får du testa dina kunskaper om en av de största folkhälsoreformerna på många år.</p>
            
            <div class="info-box">
                <strong>🎉 Fritidskortet lanserades 15 september 2025</strong>
                <ul>
                    <li><strong>Målgrupp:</strong> Alla barn och ungdomar 8–16 år</li>
                    <li><strong>Grundbelopp:</strong> 500 kr/år per barn</li>
                    <li><strong>Förhöjt belopp:</strong> 2 000 kr/år för barn i hushåll med bostadsbidrag</li>
                    <li><strong>Användning:</strong> Avgifter till föreningar och kommunala kulturskolor</li>
                </ul>
            </div>
            
            <h3>🎯 Syftet med Fritidskortet:</h3>
            <ul>
                <li><strong>Ökad fysisk aktivitet</strong> bland barn och unga</li>
                <li><strong>Minska ekonomiska hinder</strong> för deltagande i organiserade aktiviteter</li>
                <li><strong>Stärka folkhälsan</strong> på lång sikt</li>
                <li><strong>Främja social gemenskap</strong> och meningsfull fritid</li>
            </ul>
            
            <p><em>Källa: <a href="https://www.folkhalsomyndigheten.se/livsvillkor-levnadsvanor/halsa-i-olika-grupper/barn-och-unga/fritidskort-for-barn-och-ungdomar/" target="_blank" rel="noopener noreferrer">Folkhälsomyndigheten (2025)</a>. Se även: <a href="https://controllerutangranser.wordpress.com/2025/12/05/fritidskortet-moter-kulturskolan/" target="_blank" rel="noopener noreferrer">Lundgren (2025)</a>.</em></p>
        `
    },
    {
        title: "Barnkonventionen och rätten till kultur",
        body: `
            <p>FN:s barnkonvention blev svensk lag den <strong>1 januari 2020</strong>. Artikel 31 är särskilt viktig för barns rätt till fritid och kultur.</p>
            
            <div class="info-box">
                <strong>📜 Artikel 31 i Barnkonventionen</strong>
                <p><em>"Konventionsstaterna erkänner barnets rätt till vila och fritid, till lek och rekreation anpassad till barnets ålder samt rätt att fritt delta i det kulturella och konstnärliga livet."</em></p>
            </div>
            
            <h3>⚠️ Särskild oro för vissa grupper:</h3>
            <ul>
                <li><strong>Barn i ekonomisk utsatthet</strong> – har ofta sämre tillgång till fritidsaktiviteter</li>
                <li><strong>Barn med funktionsnedsättning</strong> – kan möta fysiska och organisatoriska hinder</li>
                <li><strong>Barn i urbana låginkomstområden</strong> – färre tillgängliga aktiviteter och föreningar</li>
            </ul>
            
            <div class="warning-box">
                <strong>💡 Konventionsstaternas skyldighet</strong>
                <p>Staterna ska <strong>respektera och främja</strong> barnets rätt att fritt delta i det kulturella livet och ska <strong>uppmuntra tillhandahållande av lika möjligheter</strong> för kulturell, konstnärlig och rekreativ verksamhet.</p>
            </div>
            
            <p><em>Källa: <a href="https://www.raddabarnen.se/rad-och-kunskap/skolmaterial/barnkonventionen/barnkonventionen-kort-version/" target="_blank" rel="noopener noreferrer">Rädda Barnen (2018)</a>; <a href="https://unicef.se/barnkonventionen/las-texten" target="_blank" rel="noopener noreferrer">UNICEF Sverige (2025)</a>.</em></p>
        `
    },
    {
        title: "Kulturskolan i siffror",
        body: `
            <p>Den svenska kulturskolan är en unik verksamhet som finns i <strong>nästan alla 290 kommuner</strong>. Här är nyckeltal från SKR:s statistik:</p>
            
            <div class="info-box">
                <strong>📊 Statistik om Kulturskolan (2022)</strong>
                <ul>
                    <li><strong>2,9 miljarder kronor</strong> – kommunernas nettokostnader (+20% sedan 2012)</li>
                    <li><strong>Ca 11%</strong> av barn 6–19 år deltar i ämneskurser</li>
                    <li><strong>77%</strong> av kommunerna erbjuder riktad verksamhet till specifika målgrupper</li>
                    <li><strong>730 000+</strong> deltagartillfällen i öppen verksamhet</li>
                </ul>
            </div>
            
            <h3>👧👦 Könsfördelning och köer:</h3>
            <ul>
                <li><strong>64% flickor</strong> – deltar i högre utsträckning</li>
                <li><strong>36% pojkar</strong> – underrepresenterade</li>
                <li><strong>74%</strong> av kulturskolorna har <strong>kö</strong> till verksamheten</li>
            </ul>
            
            <div class="warning-box">
                <strong>🤔 Utmaning</strong>
                <p>Med köer till 74% av kulturskolorna uppstår frågan: Hur ska Fritidskortet kunna göra skillnad om det redan finns kapacitetsbrist?</p>
            </div>
            
            <p><em>Källa: <a href="https://skr.se/kulturochfritid/kulturochmusikskolor.7675.html" target="_blank" rel="noopener noreferrer">SKR (2025)</a>.</em></p>
        `
    },
    {
        title: "Simrishamns kommun – goda exempel",
        body: `
            <p>Simrishamn är en kommun som visar hur man kan arbeta aktivt med breddat deltagande i kulturskolan.</p>
            
            <div class="info-box">
                <strong>🏆 Simrishamns framgångsfaktorer</strong>
                <ul>
                    <li><strong>Kulturgarantin sedan 2005:</strong> Kultur i skolan för alla elever</li>
                    <li><strong>Sommarkulturskolan sedan 2016:</strong> Kostnadsfri och utan föranmälan</li>
                    <li><strong>Låga avgifter:</strong> 491 kr/termin (jämför Lund: 1 140 kr/termin)</li>
                    <li><strong>Regionalt samarbete:</strong> Del av Regional Kulturskola Skåne med 31 kommuner</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>💡 Vad kan andra kommuner lära?</strong>
                <p>Simrishamns modell visar att <strong>låga avgifter</strong>, <strong>öppen verksamhet utan föranmälan</strong> och <strong>regionalt samarbete</strong> är nycklar till att nå fler barn och unga.</p>
            </div>
            
            <p><em>Källa: <a href="https://www.simrishamn.se/barn-och-utbildning/kulturskolan/kulturgarantin" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025)</a>.</em></p>
        `
    },
    {
        title: "Framtida möjligheter och utmaningar",
        body: `
            <p>Fritidskortet är en stor satsning, men för att nå alla barn krävs mer än ekonomiskt stöd.</p>
            
            <div class="info-box">
                <strong>📈 Anslutning efter 2 månader</strong>
                <p><strong>40%</strong> av föreningar och kulturskolor har anslutit sig – fler behövs för att Fritidskortet ska nå sin fulla potential.</p>
            </div>
            
            <h3>⚠️ Utmaningar att hantera:</h3>
            <ul>
                <li><strong>Kapacitetsbrist:</strong> Hur ta emot nya elever när 74% redan har kö?</li>
                <li><strong>Sociala strukturer:</strong> Ekonomi är bara en del av problemet</li>
                <li><strong>Kulturellt kapital:</strong> Vissa familjer söker inte kulturaktiviteter naturligt</li>
                <li><strong>Uppsökande verksamhet:</strong> Krävs för att nå de som inte kommer av sig själva</li>
            </ul>
            
            <div class="warning-box">
                <strong>🔮 Framåtblick</strong>
                <p><strong>Regionalt samarbete</strong> blir viktigare än någonsin. <strong>Öppen verksamhet</strong> och <strong>uppsökande insatser</strong> är nyckeln till breddat deltagande. Utredningen <strong>Kulturkanon (SOU 2025:92)</strong> kan ge gemensamma referenspunkter för bildning.</p>
            </div>
            
            <h3>📚 Läs mer:</h3>
            <ul>
                <li><a href="https://controllerutangranser.wordpress.com/2025/12/05/fritidskortet-moter-kulturskolan/" target="_blank" rel="noopener noreferrer">Bloggtext med fördjupning</a></li>
                <li><a href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2025/november/fritidskortet-brett-utbud-av-aktiviteter/" target="_blank" rel="noopener noreferrer">Folkhälsomyndigheten om Fritidskortet</a></li>
                <li><a href="https://skr.se/kulturochfritid/kulturochmusikskolor.7675.html" target="_blank" rel="noopener noreferrer">SKR om kulturskolor</a></li>
            </ul>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av Fritidskortet, Barnkonventionen och Kulturskolan. Lycka till! 🎯</p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om Fritidskortet och Kulturskolan
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Hur stort årligt belopp får ett barn genom Fritidskortet om familjen har mottagit bostadsbidrag föregående år?",
        answers: [
            "a) 500 kronor",
            "b) 1 000 kronor",
            "c) 2 000 kronor",
            "d) 3 000 kronor"
        ],
        correct: 2, // Index 2 = c) 2 000 kronor
        explanation: `
            <strong>✓ RÄTT SVAR: c) 2 000 kronor</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Fritidskortet ger alla barn i åldern 8–16 år ett <strong>grundbelopp på 500 kronor per år</strong>. Dock får barn som bor i hushåll som mottagit <strong>bostadsbidrag föregående år</strong> ett förhöjt belopp på <strong>2 000 kronor per år</strong>.</p>
            
            <div class="info-box">
                <strong>💰 Varför olika belopp?</strong>
                <p>Det förhöjda beloppet är avsett att <strong>särskilt stötta barn i familjer med ansträngd ekonomi</strong>. Forskning visar att ekonomiska hinder är en av de främsta anledningarna till att barn inte deltar i organiserade fritidsaktiviteter.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>500 kr (A):</strong> Detta är grundbeloppet för <em>alla</em> barn – inte det förhöjda beloppet</li>
                <li><strong>1 000 kr (B):</strong> Finns inte som belopp i Fritidskortets konstruktion</li>
                <li><strong>3 000 kr (D):</strong> Finns inte som belopp i Fritidskortets konstruktion</li>
            </ul>
            
            <div class="warning-box">
                <strong>📝 Kom ihåg!</strong>
                <p>Fritidskortet kan användas för avgifter till <strong>föreningar</strong> och <strong>kommunala kulturskolor</strong> – inte för utrustning eller resor.</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2025/september/nu-lanseras-fritidskortet-for-barn-och-unga/" target="_blank" rel="noopener noreferrer">Folkhälsomyndigheten (2025)</a>.</p>
        `
    },
    {
        question: "Vilken artikel i FN:s barnkonvention fastslår barnets rätt till vila, fritid och att fritt delta i det kulturella livet?",
        answers: [
            "a) Artikel 12",
            "b) Artikel 24",
            "c) Artikel 31",
            "d) Artikel 42"
        ],
        correct: 2, // Index 2 = c) Artikel 31
        explanation: `
            <strong>✓ RÄTT SVAR: c) Artikel 31</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p><strong>Artikel 31</strong> i barnkonventionen erkänner barnets rätt till vila och fritid, till lek och rekreation anpassad till barnets ålder samt rätt att fritt delta i det kulturella och konstnärliga livet.</p>
            
            <div class="info-box">
                <strong>📜 Artikel 31 i sin helhet</strong>
                <p><em>"Konventionsstaterna erkänner barnets rätt till vila och fritid, till lek och rekreation anpassad till barnets ålder samt rätt att fritt delta i det kulturella och konstnärliga livet."</em></p>
                <p><em>"Konventionsstaterna ska respektera och främja barnets rätt att fullt ut delta i det kulturella och konstnärliga livet och ska uppmuntra tillhandahållande av lämpliga och lika möjligheter för kulturell, konstnärlig, rekreativ och fritidsmässig verksamhet."</em></p>
            </div>
            
            <h3>❌ Vad handlar de andra artiklarna om?</h3>
            
            <ul>
                <li><strong>Artikel 12:</strong> Barnets rätt att <strong>uttrycka sin mening</strong> och bli hörd</li>
                <li><strong>Artikel 24:</strong> Barnets rätt till <strong>hälsa och sjukvård</strong></li>
                <li><strong>Artikel 42:</strong> Staternas skyldighet att <strong>göra konventionen känd</strong></li>
            </ul>
            
            <div class="warning-box">
                <strong>⚖️ Svensk lag sedan 2020</strong>
                <p>Barnkonventionen blev svensk lag den <strong>1 januari 2020</strong>. Detta innebär att artikel 31 har fått ökad <strong>juridisk tyngd</strong> i Sverige.</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://unicef.se/barnkonventionen/las-texten" target="_blank" rel="noopener noreferrer">UNICEF Sverige (2025)</a>.</p>
        `
    },
    {
        question: "Vilket år startade Simrishamns kommun sin Kulturgaranti – modellen för kultur i skolan som inspirerat många andra kommuner?",
        answers: [
            "a) 1995",
            "b) 2005",
            "c) 2010",
            "d) 2016"
        ],
        correct: 1, // Index 1 = b) 2005
        explanation: `
            <strong>✓ RÄTT SVAR: b) 2005</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p><strong>Simrishamns Kulturgaranti</strong> startade <strong>2005</strong> och har sedan dess gett alla elever i kommunens skolor regelbunden tillgång till kulturupplevelser och kulturundervisning.</p>
            
            <div class="info-box">
                <strong>🎨 Vad är Kulturgarantin?</strong>
                <ul>
                    <li>Garanterad <strong>kulturundervisning</strong> för alla elever i kommunens skolor</li>
                    <li>Grundas på <strong>barnkonventionen</strong> och skolans styrdokument</li>
                    <li>Har <strong>inspirerat många andra kommuner</strong> i Sverige</li>
                    <li>Kombinerar professionella kulturupplevelser med egen skapande verksamhet</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra årtalen?</h3>
            
            <ul>
                <li><strong>1995 (A):</strong> Stämmer inte med någon känd milstolpe i Simrishamn</li>
                <li><strong>2010 (C):</strong> Stämmer inte – Kulturgarantin hade då funnits i 5 år</li>
                <li><strong>2016 (D):</strong> Året då <strong>Sommarkulturskolan</strong> startade – ett annat framgångsrikt initiativ</li>
            </ul>
            
            <div class="warning-box">
                <strong>🌞 Bonusfakta: Sommarkulturskolan</strong>
                <p><strong>2016</strong> startade Simrishamn även <strong>Sommarkulturskolan</strong> – en kostnadsfri verksamhet utan föranmälan som ytterligare breddar tillgängligheten.</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://www.simrishamn.se/barn-och-utbildning/kulturskolan/kulturgarantin" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025)</a>.</p>
        `
    },
    {
        question: "Hur stor andel av barn och unga i åldern 6–19 år deltar enligt SKR i kulturskolans ämneskurser?",
        answers: [
            "a) Cirka 5 procent",
            "b) Cirka 11 procent",
            "c) Cirka 25 procent",
            "d) Cirka 40 procent"
        ],
        correct: 1, // Index 1 = b) Cirka 11 procent
        explanation: `
            <strong>✓ RÄTT SVAR: b) Cirka 11 procent</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Enligt Sveriges Kommuner och Regioner (SKR) deltar ungefär <strong>11 procent</strong> av barn och unga i åldern 6–19 år i kulturskolans <strong>ämneskurser</strong>.</p>
            
            <div class="info-box">
                <strong>📊 Men det finns mer!</strong>
                <p>Det är viktigt att notera att kulturskolan genom <strong>öppna verksamheter</strong> och andra projekt når ett betydligt <strong>större antal barn och unga</strong> som inte är formellt anmälda till kurser:</p>
                <ul>
                    <li><strong>730 000+</strong> deltagartillfällen i öppen verksamhet under 2022</li>
                    <li>Kulturgarantier i skolan når <strong>alla elever</strong> i kommuner som har sådana</li>
                    <li>Sommarverksamhet och projekt når ytterligare grupper</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra siffrorna?</h3>
            
            <ul>
                <li><strong>5% (A):</strong> För lågt – underskattar deltagandet</li>
                <li><strong>25% (C):</strong> För högt – skulle innebära ca 450 000 barn</li>
                <li><strong>40% (D):</strong> Betydligt för högt – detta är ungefär andelen föreningar som anslutit sig till Fritidskortet</li>
            </ul>
            
            <div class="warning-box">
                <strong>🤔 Reflektion</strong>
                <p>Med bara <strong>11%</strong> deltagande och <strong>74%</strong> av kulturskolorna med kö – finns det stor potential att nå fler om kapaciteten ökas!</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://skr.se/kulturochfritid/kulturochmusikskolor.7675.html" target="_blank" rel="noopener noreferrer">SKR (2025)</a>.</p>
        `
    },
    {
        question: "Forskaren Cecilia Jeppsson vid Göteborgs universitet har studerat kulturskolans arbete med breddat deltagande. Hennes forskning visar att den \"typiska deltagaren\" i kulturskolan är en svenskfödd flicka med välutbildade föräldrar. Vad är den mest sannolika förklaringen till detta mönster?",
        answers: [
            "a) Kulturskolan marknadsför sig aktivt bara till denna grupp",
            "b) Sociala strukturer och kulturellt kapital påverkar vem som väljer att delta",
            "c) Pojkar och barn med utländsk bakgrund är förbjudna att delta",
            "d) Avgifterna i kulturskolan är så höga att endast rika familjer har råd"
        ],
        correct: 1, // Index 1 = b) Sociala strukturer och kulturellt kapital
        explanation: `
            <strong>✓ RÄTT SVAR: b) Sociala strukturer och kulturellt kapital påverkar vem som väljer att delta</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Cecilia Jeppssons forskning visar att snedfördelningen i kulturskolan är kopplad till <strong>bredare sociala strukturer</strong> och <strong>kulturellt kapital</strong>.</p>
            
            <div class="info-box">
                <strong>🎓 Vad är kulturellt kapital?</strong>
                <p>Begreppet kommer från sociologen Pierre Bourdieu och beskriver hur:</p>
                <ul>
                    <li>Familjer med <strong>högre utbildningsnivå</strong> oftare har vana vid kulturella aktiviteter</li>
                    <li><strong>Kunskap om</strong> och <strong>erfarenhet av</strong> kultur "ärvs" mellan generationer</li>
                    <li>Vissa familjer <strong>naturligt söker</strong> kulturaktiviteter för sina barn</li>
                    <li>Andra familjer kanske inte ens <strong>känner till</strong> att kulturskolan finns</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>A) Aktiv marknadsföring till en grupp:</strong> Felaktigt – kulturskolorna arbetar generellt för att nå <em>alla</em></li>
                <li><strong>C) Förbud mot vissa grupper:</strong> Helt felaktigt – det finns inga sådana förbud</li>
                <li><strong>D) Höga avgifter:</strong> Förenklat – snedfördelningen finns <em>även</em> i kulturskolor med låga eller inga avgifter</li>
            </ul>
            
            <div class="warning-box">
                <strong>🔑 Viktig insikt för Fritidskortet</strong>
                <p>Fritidskortet adresserar den <strong>ekonomiska faktorn</strong>, men för att verkligen bredda deltagandet krävs även <strong>andra insatser</strong>:</p>
                <ul>
                    <li><strong>Uppsökande verksamhet</strong> i områden med lågt deltagande</li>
                    <li><strong>Öppen verksamhet</strong> utan krav på föranmälan</li>
                    <li><strong>Samarbete med skolor</strong> för att nå alla barn</li>
                    <li><strong>Information på flera språk</strong></li>
                </ul>
            </div>
            
            <p><strong>Källa:</strong> Jeppsson, C. (2020) <em>Rörlig och stabil, bred och spetsig: Kulturell reproduktion och strategier för breddat deltagande i den svenska kulturskolan</em>. Doktorsavhandling. Göteborgs universitet. Se även: <a href="https://www.skolporten.se/forskning/intervju/stor-variation-i-kulturskolans-strategier-for-breddat-deltagande/" target="_blank" rel="noopener noreferrer">Skolporten (2020)</a>.</p>
            
            <p><em>📚 <strong>Fördjupning:</strong> Läs mer i bloggtexten <a href="https://controllerutangranser.wordpress.com/2025/12/05/fritidskortet-moter-kulturskolan/" target="_blank" rel="noopener noreferrer">"Fritidskortet möter kulturskolan"</a>.</em></p>
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
// NYTT I VERSION 2: VARIABEL FÖR SVÅRIGHETSBETYG
// ============================================
let selectedDifficulty = null; // Användarens valda svårighetsbetyg (1-10)

// ============================================
// DOM-ELEMENT
// Här hämtar vi alla viktiga element från HTML:en för att kunna manipulera dem
// ============================================

// NYTT I VERSION 2: NAMNSEKTION-ELEMENT
const nameSection = document.getElementById('nameSection');
const userNameInput = document.getElementById('userName');
const nameError = document.getElementById('nameError');
const startWithNameBtn = document.getElementById('startWithNameBtn');

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

// NYTT I VERSION 2: FIREBASE-MODAL ELEMENT
const firebaseBtn = document.getElementById('firebaseBtn');
const firebaseModal = document.getElementById('firebaseModal');
const refreshResultsBtn = document.getElementById('refreshResultsBtn');
const clearDatabaseBtn = document.getElementById('clearDatabaseBtn'); // NYTT: Rensa-knapp
const savedResultsContainer = document.getElementById('savedResultsContainer');

// NYTT I VERSION 2: VÄLKOMSTMEDDELANDE-ELEMENT
const welcomeMessage = document.getElementById('welcomeMessage');
const displayName = document.getElementById('displayName');

// ============================================
// INITIALISERING - Körs när sidan laddas
// UPPDATERAD I VERSION 2: Startar med namnrutan
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Skapa sidindikator-prickar först
    createPageDots();
    
    // NYTT I VERSION 2: Visa namnrutan först (intro är dold från start)
    // Visa första introduktionssidan (men den är dold bakom namnrutan)
    showIntroPage(0);
    
    // Lyssna på knappar
    setupEventListeners();
    
    // NYTT I VERSION 2: SÄTT UPP NAMNRUTA EVENT LISTENERS
    setupNameSectionListeners();
    
    console.log('QUIZ VERSION 2 INITIERAD - MED FIREBASE-STÖD');
});

// ============================================
// NYTT I VERSION 2: NAMNSEKTION EVENT LISTENERS
// ============================================
// Hanterar namnrutan som visas först i quizet
// Användaren måste ange sitt namn för att fortsätta
// ============================================
function setupNameSectionListeners() {
    // Klick på "Fortsätt"-knappen
    startWithNameBtn.addEventListener('click', handleNameSubmit);
    
    // Enter-tangent i namnfältet
    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleNameSubmit();
        }
    });
    
    // Dölj felmeddelande när användaren börjar skriva
    userNameInput.addEventListener('input', () => {
        nameError.classList.remove('show');
    });
    
    console.log('NAMNSEKTION EVENT LISTENERS UPPSATTA');
}

// ============================================
// NYTT I VERSION 2: HANTERA NAMNINMATNING
// ============================================
// Validerar att namn är angivet och går vidare till intro
// Läser även av samtyckes-checkbox
// ============================================
function handleNameSubmit() {
    const name = userNameInput.value.trim();
    
    if (!name) {
        // Visa felmeddelande om namn saknas
        nameError.classList.add('show');
        userNameInput.focus();
        console.log('NAMNVALIDERING: Tomt namn - visar fel');
        return;
    }
    
    // SPARA ANVÄNDARNAMNET GLOBALT
    userName = name;
    console.log('ANVÄNDARNAMN SPARAT:', userName);
    
    // LÄSA AV SPARALTERNATIV (radio-knappar)
    const selectedOption = document.querySelector('input[name="saveOption"]:checked');
    saveOption = selectedOption ? selectedOption.value : 'full';
    console.log('SPARALTERNATIV VALT:', saveOption);
    // 'anonymous' = inget sparas, 'partial' = namn+svårighet, 'full' = allt
    
    // Dölj namnrutan
    nameSection.classList.add('hidden');
    
    // Visa intro-sektionen
    introSection.classList.remove('hidden');
    
    // VISA VÄLKOMSTMEDDELANDE MED NAMN
    displayName.textContent = userName;
    welcomeMessage.classList.remove('hidden');
    
    console.log('NAMNRUTA DOLD - INTRO VISAS');
}

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
    
    // NYTT I VERSION 2: FIREBASE-MODAL KNAPP
    firebaseBtn.addEventListener('click', () => {
        openModal(firebaseModal);
        // Ladda sparade resultat när modalen öppnas
        loadSavedResults();
    });
    
    // NYTT: Uppdatera-knapp för resultat
    refreshResultsBtn.addEventListener('click', loadSavedResults);
    
    // NYTT: Rensa databasen-knapp
    clearDatabaseBtn.addEventListener('click', clearDatabase);
    
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
    
    // NYTT I VERSION 2: Återställ svårighetsbetyg
    selectedDifficulty = null;
    
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
// UPPDATERAD I VERSION 2: Inkluderar svårighetsbetyg och Firebase-sparning
// ============================================
function showResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    
    let message = '';
    if (percentage === 100) {
        message = 'Perfekt! Du har helt koll på Fritidskortet, Barnkonventionen och Kulturskolan! 🌟 Du är redo att verka för alla barns rätt till kultur!';
    } else if (percentage >= 80) {
        message = 'Mycket bra! Du har god förståelse för både reformen och de bakomliggande frågorna. 👍';
    } else if (percentage >= 60) {
        message = 'Bra jobbat! Du har grundläggande förståelse, men det finns mer att utforska. Läs gärna bloggtexten! 📚';
    } else {
        message = 'Det finns mycket att lära! Kultur för alla barn är ett fascinerande område – läs igenom materialet igen! 💪';
    }
    
    // ============================================
    // NYTT I VERSION 2: RESULTAT MED SVÅRIGHETSBETYG
    // ============================================
    // Efter quizresultatet visas en sektion där användaren
    // kan betygsätta hur svårt quizet var (skala 1-10)
    // ============================================
    
    const resultsHTML = `
        <div class="result-container">
            <h2 class="result-title">Quiz slutfört! 🎉</h2>
            
            <!-- NYTT: VISA ANVÄNDARENS NAMN -->
            <p style="font-size: 1.2rem; color: var(--primary-color); margin-bottom: 10px;">
                Bra jobbat, <strong>${userName}</strong>!
            </p>
            
            <div class="result-score">${score} av ${quizData.length} rätt</div>
            <div class="result-score">${percentage}%</div>
            <p class="result-message">${message}</p>
            
            <!-- ============================================
                 UPPDATERAT: SVÅRIGHETSBETYG MED TRE SPARALTERNATIV
                 ============================================ -->
            ${saveOption !== 'anonymous' ? `
            <div class="difficulty-section" id="difficultySection">
                <h3 class="difficulty-title">📊 Hur svårt tyckte du quizet var?</h3>
                <p class="difficulty-description">
                    Betygsätt på en skala 1-10, där 1 är mycket lätt och 10 är mycket svårt.
                </p>
                <div class="difficulty-scale" id="difficultyScale">
                    ${[1,2,3,4,5,6,7,8,9,10].map(num => `
                        <button class="difficulty-btn" data-value="${num}">${num}</button>
                    `).join('')}
                </div>
                <div class="difficulty-labels">
                    <span>😊 Mycket lätt</span>
                    <span>😰 Mycket svårt</span>
                </div>
                <button class="submit-rating-btn" id="submitRatingBtn" disabled>
                    ${saveOption === 'partial' ? 'Skicka betyg (utan resultat) 💾' : 'Skicka betyg och spara resultat 💾'}
                </button>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 10px; text-align: center;">
                    ${saveOption === 'partial' ? '📝 <em>Ditt quizresultat (antal rätt) sparas INTE</em>' : '📊 <em>Namn, svårighetsgrad och resultat sparas</em>'}
                </p>
                <div id="saveStatus"></div>
            </div>
            ` : `
            <div class="no-save-section" style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px; text-align: center; border: 2px solid #22c55e;">
                <p style="font-size: 1.2rem; color: #16a34a; margin-bottom: 10px;">
                    🔒 Du valde att göra quizet helt anonymt
                </p>
                <p style="color: #166534; font-size: 0.95rem; margin-bottom: 0;">
                    Inget sparas i databasen. Ditt resultat visas bara här och nu.
                </p>
            </div>
            `}
            <!-- SLUT PÅ SVÅRIGHETSBETYG-SEKTION -->
            
            <!-- NYTT: TYDLIG INFORMATION OM FIREBASE-KNAPPEN -->
            <div class="firebase-button-info" style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%); border-radius: 12px; border: 2px solid #F97316; text-align: center;">
                <h3 style="color: #EA580C; margin-bottom: 15px; font-size: 1.2rem;">🔥 Vill du se alla sparade resultat?</h3>
                <p style="color: #9A3412; margin-bottom: 15px;">
                    Klicka på den <strong style="color: #EA580C;">orangea knappen med en eld-ikon (🔥)</strong> 
                    som finns längst ner till höger på skärmen!
                </p>
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px; flex-wrap: wrap;">
                    <div style="background: linear-gradient(135deg, #FFA000 0%, #F57C00 100%); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(255, 160, 0, 0.4);">
                        🔥
                    </div>
                    <div style="text-align: left;">
                        <p style="margin: 0; font-weight: 600; color: #9A3412;">Så här ser knappen ut →</p>
                        <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #C2410C;">Orange, rund, med eld-emoji</p>
                    </div>
                </div>
                <p style="margin-top: 15px; font-size: 0.9rem; color: #9A3412;">
                    Där kan du se en tabell med alla som gjort quizet, läsa om Firebase-databasen, och mycket mer!
                </p>
            </div>
            <!-- SLUT PÅ FIREBASE-KNAPP INFO -->
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>💡 Viktiga lärdomar från quizet:</strong>
                <ul>
                    <li><strong>Fritidskortet:</strong> 500 kr/år för alla, 2 000 kr/år med bostadsbidrag</li>
                    <li><strong>Barnkonventionen:</strong> Artikel 31 – rätten till kultur, vila och fritid</li>
                    <li><strong>Kulturgarantin:</strong> Simrishamn sedan 2005 – inspirerande modell</li>
                    <li><strong>Deltagande:</strong> Ca 11% i ämneskurser, men fler nås via öppen verksamhet</li>
                    <li><strong>Breddat deltagande:</strong> Kräver mer än pengar – sociala strukturer spelar roll</li>
                    <li><strong>Framgångsfaktorer:</strong> Låga avgifter, uppsökande verksamhet, regionalt samarbete</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="https://controllerutangranser.wordpress.com/2025/12/05/fritidskortet-moter-kulturskolan/" target="_blank" rel="noopener noreferrer">Läs bloggtext med fördjupning</a></li>
                    <li><a href="https://www.folkhalsomyndigheten.se/livsvillkor-levnadsvanor/halsa-i-olika-grupper/barn-och-unga/fritidskort-for-barn-och-ungdomar/" target="_blank" rel="noopener noreferrer">Folkhälsomyndigheten om Fritidskortet</a></li>
                    <li><a href="https://skr.se/kulturochfritid/kulturochmusikskolor.7675.html" target="_blank" rel="noopener noreferrer">SKR om kulturskolor</a></li>
                    <li><a href="https://unicef.se/barnkonventionen/las-texten" target="_blank" rel="noopener noreferrer">Läs Barnkonventionen hos UNICEF</a></li>
                </ul>
                <p style="margin-top: 15px; font-size: 0.95em;"><em>🎨 Kulturskolan når fler än statistiken visar – genom öppen verksamhet, projekt och samarbeten!</em></p>
            </div>
            
            <div class="result-buttons">
                <button class="restart-btn" onclick="restartQuiz()">Starta om quiz 🔄</button>
                <a href="https://kentlundgren.se/program/quiz/0/" class="browse-quiz-btn" target="_blank" rel="noopener noreferrer">Se alla quiz 📚</a>
            </div>
        </div>
    `;
    
    quizContent.innerHTML = resultsHTML;
    updateProgress();
    
    // UPPDATERAT: SÄTT UPP EVENT LISTENERS FÖR SVÅRIGHETSBETYG
    // Bara om användaren inte valde "anonymous"
    if (saveOption !== 'anonymous') {
        setupDifficultyListeners();
    }
}

// ============================================
// NYTT I VERSION 2: SVÅRIGHETSBETYG EVENT LISTENERS
// ============================================
// Hanterar val av svårighetsbetyg (1-10) och sparning till Firebase
// ============================================
function setupDifficultyListeners() {
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const submitBtn = document.getElementById('submitRatingBtn');
    
    // Klick på betygsknappar
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Ta bort "selected" från alla knappar
            difficultyButtons.forEach(b => b.classList.remove('selected'));
            
            // Markera vald knapp
            btn.classList.add('selected');
            
            // Spara valt värde
            selectedDifficulty = parseInt(btn.dataset.value);
            
            // Aktivera "Skicka"-knappen
            submitBtn.disabled = false;
            
            console.log('SVÅRIGHETSBETYG VALT:', selectedDifficulty);
        });
    });
    
    // Klick på "Skicka betyg"-knappen
    submitBtn.addEventListener('click', saveResultToFirebase);
    
    console.log('SVÅRIGHETSBETYG EVENT LISTENERS UPPSATTA');
}

// ============================================
// NYTT I VERSION 2: SPARA RESULTAT TILL FIREBASE
// ============================================
// Sparar användarens namn, svårighetsbetyg, poäng och datum
// till Firebase Realtime Database
// ============================================
async function saveResultToFirebase() {
    const saveStatus = document.getElementById('saveStatus');
    const submitBtn = document.getElementById('submitRatingBtn');
    const difficultySection = document.getElementById('difficultySection');
    
    // Visa "Sparar..."-meddelande
    saveStatus.innerHTML = '<p style="color: var(--accent-color);">⏳ Sparar ditt resultat...</p>';
    submitBtn.disabled = true;
    
    // Kontrollera att Firebase är redo
    if (!window.firebaseReady || !window.firebaseDb) {
        console.error('FIREBASE INTE REDO');
        saveStatus.innerHTML = `
            <div class="save-error">
                ❌ Kunde inte spara - Firebase inte tillgänglig.<br>
                <small>Ditt resultat: ${userName} gav betyg ${selectedDifficulty}/10</small>
            </div>
        `;
        return;
    }
    
    try {
        // DATA SOM SKA SPARAS - BEROENDE PÅ SPARALTERNATIV
        let resultData;
        
        if (saveOption === 'partial') {
            // DELVIS SPARNING: Namn + svårighetsgrad, MEN INTE resultat
            resultData = {
                namn: userName,
                svårighetsgrad: selectedDifficulty,
                datum: new Date().toISOString(),
                quiz: 'Fritidskortet möter Kulturskolan',
                spartyp: 'delvis' // Markerar att resultat ej sparades
            };
            console.log('SPARAR DELVIS (utan resultat) TILL FIREBASE:', resultData);
        } else {
            // FULL SPARNING: Allt sparas
            resultData = {
                namn: userName,
                svårighetsgrad: selectedDifficulty,
                poäng: `${score} av ${quizData.length}`,
                procent: Math.round((score / quizData.length) * 100),
                datum: new Date().toISOString(),
                quiz: 'Fritidskortet möter Kulturskolan',
                spartyp: 'full' // Markerar att allt sparades
            };
            console.log('SPARAR ALLT TILL FIREBASE:', resultData);
        }
        
        // SKAPA REFERENS TILL DATABASEN
        // Sparar under "quiz-resultat/fritidskortet-kulturskolan/"
        const dbRef = window.firebaseRef(
            window.firebaseDb,
            `quiz-resultat/fritidskortet-kulturskolan/${Date.now()}`
        );
        
        // SPARA DATA
        await window.firebaseSet(dbRef, resultData);
        
        console.log('RESULTAT SPARAT I FIREBASE');
        
        // VISA BEKRÄFTELSE - OLIKA BEROENDE PÅ SPARALTERNATIV
        if (saveOption === 'partial') {
            difficultySection.innerHTML = `
                <div class="save-confirmation">
                    ✅ Tack ${userName}! Din feedback har sparats.<br>
                    <strong>Svårighetsbetyg:</strong> ${selectedDifficulty}/10<br>
                    <em style="font-size: 0.9rem; color: #166534;">Ditt quizresultat sparades inte (som du önskade)</em>
                </div>
            `;
        } else {
            difficultySection.innerHTML = `
                <div class="save-confirmation">
                    ✅ Tack ${userName}! Ditt resultat har sparats.<br>
                    <strong>Svårighetsbetyg:</strong> ${selectedDifficulty}/10<br>
                    <strong>Poäng:</strong> ${score} av ${quizData.length} rätt
                </div>
            `;
        }
        
    } catch (error) {
        console.error('FEL VID SPARNING TILL FIREBASE:', error);
        
        saveStatus.innerHTML = `
            <div class="save-error">
                ❌ Ett fel uppstod vid sparning: ${error.message}<br>
                <small>Ditt resultat: ${userName} gav betyg ${selectedDifficulty}/10</small>
            </div>
        `;
        
        // Återaktivera knappen så användaren kan försöka igen
        submitBtn.disabled = false;
    }
}

// ============================================
// STARTA OM QUIZ
// UPPDATERAD I VERSION 2: Återställer även namn och betyg
// ============================================
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    currentIntroPage = 0;
    
    // UPPDATERAT: Återställ svårighetsbetyg, namn och sparalternativ
    selectedDifficulty = null;
    userName = '';
    saveOption = 'full'; // Återställ till standard
    
    // Visa namnrutan igen (inte intro)
    quizContent.classList.add('hidden');
    introSection.classList.add('hidden');
    imageSection.classList.add('hidden');
    nameSection.classList.remove('hidden');
    
    // Återställ namnfältet och samtyckes-checkbox
    userNameInput.value = '';
    nameError.classList.remove('show');
    const consentCheckbox = document.getElementById('saveConsent');
    if (consentCheckbox) {
        consentCheckbox.checked = true;
    }
    
    // Dölj välkomstmeddelandet
    welcomeMessage.classList.add('hidden');
    
    showIntroPage(0);
    updateProgress();
    
    console.log('QUIZ OMSTARTAT - VISAR NAMNRUTA');
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
// NYTT I VERSION 2: LADDA OCH VISA SPARADE RESULTAT FRÅN FIREBASE
// ============================================
// Denna funktion hämtar alla sparade quizresultat från Firebase
// och visar dem i en tabell i Firebase-modalen.
// Alla användare kan se resultaten - det kräver ingen inloggning.
// ============================================
function loadSavedResults() {
    console.log('LADDAR SPARADE RESULTAT FRÅN FIREBASE...');
    
    // Visa laddningsindikator
    savedResultsContainer.innerHTML = '<p class="results-loading">⏳ Laddar resultat...</p>';
    
    // Kontrollera att Firebase är redo
    if (!window.firebaseReady || !window.firebaseDb || !window.firebaseOnValue) {
        console.error('FIREBASE INTE REDO FÖR LÄSNING');
        savedResultsContainer.innerHTML = `
            <p class="results-empty">
                ❌ Kunde inte ansluta till Firebase.<br>
                <small>Försök igen om en stund.</small>
            </p>
        `;
        return;
    }
    
    try {
        // Referens till quiz-resultat i databasen
        const dbRef = window.firebaseRef(
            window.firebaseDb,
            'quiz-resultat/fritidskortet-kulturskolan'
        );
        
        // Hämta data (engångshämtning med onValue)
        window.firebaseOnValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            
            if (!data) {
                console.log('INGA RESULTAT HITTADES I DATABASEN');
                savedResultsContainer.innerHTML = `
                    <p class="results-empty">
                        📭 Inga resultat har sparats ännu.<br>
                        <small>Var först med att göra quizet och betygsätta!</small>
                    </p>
                `;
                return;
            }
            
            // Konvertera objekt till array och sortera efter datum (nyast först)
            const results = Object.values(data).sort((a, b) => {
                return new Date(b.datum) - new Date(a.datum);
            });
            
            console.log(`HITTADE ${results.length} SPARADE RESULTAT`);
            
            // Skapa tabell-HTML
            const tableHTML = `
                <table class="saved-results-table">
                    <thead>
                        <tr>
                            <th>Namn</th>
                            <th>Poäng</th>
                            <th>Svårighet</th>
                            <th>Datum</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${results.map(result => `
                            <tr>
                                <td>${escapeHTML(result.namn || 'Okänd')}</td>
                                <td>${escapeHTML(result.poäng || '-')}</td>
                                <td>${result.svårighetsgrad || '-'}/10</td>
                                <td>${formatDate(result.datum)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <p style="text-align: center; margin-top: 10px; font-size: 0.85rem; color: var(--text-secondary);">
                    Totalt ${results.length} resultat sparade
                </p>
            `;
            
            savedResultsContainer.innerHTML = tableHTML;
            
        }, (error) => {
            console.error('FEL VID HÄMTNING AV RESULTAT:', error);
            savedResultsContainer.innerHTML = `
                <p class="results-empty">
                    ❌ Ett fel uppstod: ${error.message}<br>
                    <small>Försök igen om en stund.</small>
                </p>
            `;
        }, { onlyOnce: true }); // Hämta bara en gång (inte realtidslyssning)
        
    } catch (error) {
        console.error('FEL VID UPPSÄTTNING AV DATABASLYSSNARE:', error);
        savedResultsContainer.innerHTML = `
            <p class="results-empty">
                ❌ Kunde inte ansluta till databasen.<br>
                <small>${error.message}</small>
            </p>
        `;
    }
}

// ============================================
// NYTT: RENSA DATABASEN
// ============================================
// TEKNISK FÖRKLARING:
// Denna funktion anropar Firebase remove() på referensen
// 'quiz-resultat/fritidskortet-kulturskolan/' vilket tar bort
// ALLA poster (child nodes) under den noden.
//
// Firebase remove() är en DESTRUKTIV operation:
// - Data raderas permanent från servern
// - Alla realtidslyssnare får en "value = null" callback
// - Operationen kräver skrivbehörighet i Firebase Security Rules
// - Det går INTE att ångra denna operation!
//
// Tekniskt anrop:
// remove(ref(db, 'quiz-resultat/fritidskortet-kulturskolan'))
// ============================================
async function clearDatabase() {
    console.log('RENSNING AV DATABAS BEGÄRD...');
    
    // Säkerhetsfråga - bekräfta innan radering
    const confirmMessage = 
        '⚠️ VARNING!\n\n' +
        'Du är på väg att RADERA alla sparade quizresultat.\n\n' +
        'TEKNISKT: Detta anropar Firebase remove() på:\n' +
        '"quiz-resultat/fritidskortet-kulturskolan/"\n\n' +
        'Alla poster under denna nod tas bort permanent.\n\n' +
        'Är du HELT säker?';
    
    if (!confirm(confirmMessage)) {
        console.log('RADERING AVBRUTEN AV ANVÄNDAREN');
        return;
    }
    
    // Dubbel bekräftelse
    const doubleConfirm = prompt(
        'Skriv "RADERA" för att bekräfta:\n\n' +
        '(Firebase remove() kommer köras på databasen)'
    );
    
    if (doubleConfirm !== 'RADERA') {
        console.log('RADERING AVBRUTEN - felaktig bekräftelse');
        alert('Radering avbruten. Du skrev inte "RADERA".');
        return;
    }
    
    // Kontrollera att Firebase är redo
    if (!window.firebaseReady || !window.firebaseDb || !window.firebaseRemove) {
        console.error('FIREBASE INTE REDO FÖR RADERING');
        alert('❌ Kunde inte ansluta till Firebase.\nFirebase remove() kunde inte köras.');
        return;
    }
    
    // Visa laddningsindikator
    savedResultsContainer.innerHTML = '<p class="results-loading">⏳ Rensar databasen med remove()...</p>';
    
    try {
        // TEKNISKT: Skapa referens till den nod som ska raderas
        const dbRef = window.firebaseRef(
            window.firebaseDb,
            'quiz-resultat/fritidskortet-kulturskolan'
        );
        
        console.log('ANROPAR: remove(ref(db, "quiz-resultat/fritidskortet-kulturskolan"))');
        
        // TEKNISKT: Anropa Firebase remove() för att radera alla poster
        // remove() returnerar ett Promise som resolves när radering är klar
        await window.firebaseRemove(dbRef);
        
        console.log('DATABAS RENSAD FRAMGÅNGSRIKT');
        
        // Visa bekräftelse
        savedResultsContainer.innerHTML = `
            <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px;">
                <p style="font-size: 1.3rem; color: #16a34a; margin-bottom: 10px;">
                    ✅ Databasen har rensats!
                </p>
                <p style="color: #166534; font-size: 0.95rem; margin-bottom: 15px;">
                    Firebase remove() kördes framgångsrikt på:<br>
                    <code style="background: #d1fae5; padding: 4px 8px; border-radius: 4px; font-family: monospace;">
                        quiz-resultat/fritidskortet-kulturskolan
                    </code>
                </p>
                <p style="color: #166534; font-size: 0.85rem;">
                    Alla poster har raderats permanent.
                </p>
            </div>
        `;
        
    } catch (error) {
        console.error('FEL VID RENSNING AV DATABAS:', error);
        savedResultsContainer.innerHTML = `
            <p class="results-empty">
                ❌ Kunde inte rensa databasen.<br>
                <strong>Firebase-fel:</strong> ${error.message}<br>
                <small style="display: block; margin-top: 10px;">
                    Detta kan bero på:<br>
                    - Saknad skrivbehörighet i Firebase Rules<br>
                    - Nätverksproblem<br>
                    - Firebase-projektet är inte aktivt
                </small>
            </p>
        `;
    }
}

// ============================================
// HJÄLPFUNKTION: ESCAPA HTML FÖR SÄKERHET
// ============================================
// Förhindrar XSS-attacker genom att escapa specialtecken
// ============================================
function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ============================================
// HJÄLPFUNKTION: FORMATERA DATUM
// ============================================
// Konverterar ISO-datum till läsbart svenskt format
// ============================================
function formatDate(isoDate) {
    if (!isoDate) return '-';
    try {
        const date = new Date(isoDate);
        return date.toLocaleDateString('sv-SE', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        return isoDate;
    }
}

// ============================================
// SLUT PÅ SCRIPT VERSION 2
// ============================================
// Quiz med Firebase-integration är nu redo att användas!
//
// SAMMANFATTNING AV NYA FUNKTIONER I VERSION 2:
// 1. Namnruta i början - användaren måste ange sitt namn
// 2. Välkomstmeddelande med användarens namn
// 3. Svårighetsbetyg 1-10 efter quizresultat
// 4. Sparning till Firebase Realtime Database
//
// DATA SOM SPARAS:
// - namn: Användarens namn
// - svårighetsgrad: Betyg 1-10
// - poäng: "X av Y"
// - procent: Procenttal
// - datum: ISO-datum
// - quiz: Quizets namn
//
// Skapad: 2025-12-05
// Uppdaterad: 2025-12-09 med Firebase-integration
// Ämne: Fritidskortet möter Kulturskolan
// Författare: Kent Lundgren med AI-assistans (Claude Opus 4.5)
// ============================================

