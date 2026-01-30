// ============================================
// JAVASCRIPT FÖR QUIZ: NÄR VERKSAMHETEN VÄXER
// Quiz nr 22: Simrishamns kultur- och fritidsförvaltning 2024-2025
// Skapad: 2026-01-30
// 
// Detta quiz handlar om utvecklingen av Simrishamns kultur- och fritidsförvaltning
// under åren 2024-2025, med fokus på nya projekt, ökade besökssiffror och
// inkluderande verksamheter.
// 
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// UPPDATERING 2026-01-30: Fem bilder växlar automatiskt var 3:e sekund
// Bilderna: basta_biennalen.jpg, ekan.jpg, Livsvikig_lasning.jpg, bokslut_2025.jpg, vikingatiden.jpg
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');
        const img4 = document.getElementById('img4');
        const img5 = document.getElementById('img5');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // Fem bilder från Simrishamns verksamhet
        const images = [img1, img2, img3, img4, img5];
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
// INTRODUKTIONSTEXTER - Fem slides om Simrishamns kultur- och fritidsverksamhet
// Baserade på blogginlägget "När verksamheten växer"
// ============================================
const introPages = [
    {
        title: "🎭 Funka-dí – när inkludering blir verklighet",
        body: `
            <div class="read-material-box">
                <p><strong>📖 Läs underlaget först!</strong></p>
                <p>För att få ut maximalt av detta quiz kan du läsa blogginlägget:</p>
                <a href="https://controllerutangranser.wordpress.com/2026/01/30/nar-verksamheten-vaxer/" target="_blank" rel="noopener noreferrer">När verksamheten växer</a>
            </div>
            
            <p>Under 2025 startade Simrishamn en helt ny verksamhet: <strong>Funka-dí</strong>. Namnet är en kreativ ordlek som anknyter till det befintliga ungdomshuset Bénka-dí, och verksamheten riktar sig till barn och ungdomar med funktionsnedsättningar.</p>
            
            <h3>🤝 Samverkan över förvaltningsgränser</h3>
            <p>Det som gör Funka-dí extra intressant är samarbetet mellan tre förvaltningar:</p>
            <ul>
                <li><strong>Kultur- och fritidsförvaltningen</strong></li>
                <li><strong>Utbildningsförvaltningen</strong></li>
                <li><strong>Socialförvaltningen</strong></li>
            </ul>
            <p>Tillsammans arbetar de för att skapa en helhet kring barnen och deras familjer. Detta är ett konkret exempel på hur kommuner kan arbeta över traditionella förvaltningsgränser när det gynnar verksamheten.</p>
            
            <div class="info-box">
                <strong>💡 Varför Funka-dí behövdes</strong>
                <p>Funka-dí fyllde ett viktigt gap i fritidsutbudet. Tidigare kunde barn och ungdomar med funktionsnedsättningar ha svårt att hitta fritidsaktiviteter som var anpassade efter deras behov och förutsättningar. Med Funka-dí får de en egen arena där aktiviteter är utformade med deras behov i fokus.</p>
            </div>
            
            <p>Enligt Regeringens kommittédirektiv (2022) om öppen fritidsverksamhet för ungdomar är det viktigt att belysa hur verksamheternas organisation och utformning påverkar olika gruppers deltagande. Fritidsledare och andra yrkesverksamma har en central roll i att skapa inkluderande miljöer.</p>
            
            <p>Simrishamns satsning på Funka-dí är ett praktiskt exempel på hur kommuner kan arbeta aktivt med inkludering istället för att bara erbjuda generella aktiviteter och hoppas att alla kan delta.</p>
            
            <p><strong>Viktigt att komma ihåg:</strong> Ibland räcker det inte med tillgänglighetsanpassning av befintliga verksamheter – ibland behövs särskilt utformade aktiviteter för att verkligen nå alla grupper.</p>
            
            <p><em>Källa: Regeringen (2022) <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/kommittedirektiv/en-utvecklad-oppen-fritidsverksamhet-for-ungdomar_hab196/" target="_blank" rel="noopener noreferrer">En utvecklad öppen fritidsverksamhet för ungdomar</a></em></p>
        `
    },
    {
        title: "🏠 Bénka-dí – när ungdomar väljer att komma",
        body: `
            <p>På ungdomshuset Bénka-dí hände något anmärkningsvärt mellan 2024 och 2025. Besöken ökade från <strong>10 398 till 13 818</strong> – en ökning med <strong>3 420 besök eller 33 procent</strong>. Detta är den kanske mest imponerande enskilda siffran i hela verksamhetsrapporten.</p>
            
            <h3>📊 Besöksutveckling i siffror</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">År</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Antal besök</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Förändring</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">2024</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">10 398</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">–</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">2025</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">13 818</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>+33%</strong></td>
                    </tr>
                </tbody>
            </table>
            
            <h3>🎯 I perspektiv</h3>
            <p>För att sätta detta i perspektiv: Enligt Myndigheten för ungdoms- och civilsamhällesfrågor (MUCF:s) nationella ungdomsenkät från 2018 besöker ungefär <strong>7 procent</strong> av unga mellan 16-25 år en fritidsgård eller ungdomens hus varje månad (Regeringen, 2022).</p>
            
            <p>En ökning med 33 procent på bara ett år är därför <strong>exceptionell</strong> och tyder på professionellt fritidsledararbete, rätt mix av aktiviteter, lämpliga öppettider och en trygg, välkomnande miljö där ungdomarna känner sig sedda och respekterade.</p>
            
            <div class="info-box">
                <strong>🌟 Hemligheten bakom framgången</strong>
                <ul>
                    <li>Professionellt fritidsledararbete</li>
                    <li>Rätt mix av aktiviteter</li>
                    <li>Lämpliga öppettider</li>
                    <li>Trygg och välkomnande miljö</li>
                    <li>Ungdomar känner sig sedda och respekterade</li>
                </ul>
            </div>
            
            <p>Som framgår av kommittédirektivet (Regeringen, 2022) har fritidsledare och andra yrkesverksamma inom öppen fritidsverksamhet för ungdomar en viktig roll i att möta unga med olika behov och förutsättningar samt i att skapa öppna miljöer som är inkluderande och socialt engagerande.</p>
            
            <p>Bénka-dís framgång visar att kommunal ungdomsverksamhet verkligen kan göra skillnad när den bedrivs professionellt och med ungdomarnas behov i centrum.</p>
            
            <p><em>Källa: Regeringen (2022) <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/kommittedirektiv/en-utvecklad-oppen-fritidsverksamhet-for-ungdomar_hab196/" target="_blank" rel="noopener noreferrer">En utvecklad öppen fritidsverksamhet för ungdomar</a></em></p>
        `
    },
    {
        title: "📚 Biblioteket – mer än böcker",
        body: `
            <p>På Simrishamns bibliotek och bokbuss hände något intressant mellan 2024 och 2025. <strong>Besöken ökade</strong> från 107 904 till cirka <strong>116 000</strong>, medan <strong>antalet lån minskade</strong> från 95 414 till <strong>93 666</strong>.</p>
            
            <h3>🤔 Ett motsägelsefullt mönster?</h3>
            <p>Detta kan först verka motsägelsefullt – hur kan fler människor besöka biblioteket men färre böcker lånas ut? Svaret ligger i bibliotekets <strong>förändrade roll</strong> i samhället.</p>
            
            <div class="info-box">
                <strong>💡 Bibliotekets nya roller</strong>
                <p>Moderna folkbibliotek är inte längre bara platser där man lånar böcker. De har utvecklats till:</p>
                <ul>
                    <li>Demokratiska mötesplatser</li>
                    <li>Arenor för livslångt lärande</li>
                    <li>Sociala samlingspunkter</li>
                    <li>Studielokaler</li>
                    <li>Kulturhus</li>
                </ul>
            </div>
            
            <h3>🌱 Tre nya projekt 2024-2025</h3>
            <p>I Simrishamn synliggörs denna utveckling genom tre nya projekt som startades 2024 och fortsatte 2025:</p>
            
            <h4>1. Språksamhet</h4>
            <p>Ett integrationsprojekt där människor med annat modersmål än svenska får stöd i språkinlärning genom språkcaféer och samtal.</p>
            
            <h4>2. Bokstart</h4>
            <p>En satsning på de allra minsta barnen och deras föräldrar, där bibliotek, barnhälsovård och förskola samverkar kring barns språkutveckling.</p>
            
            <h4>3. Livsviktig läsning</h4>
            <p>Ett projekt för att främja läsning bland ungdomar – en åldersgrupp där läsningen ofta konkurrerar med många andra fritidsaktiviteter.</p>
            
            <div class="warning-box">
                <strong>📖 Varför besök utan lån?</strong>
                <p>Dessa aktiviteter skapar besök utan att nödvändigtvis generera lån. När människor kommer till biblioteket för att delta i språkcaféer, sagostunder eller läsfrämjande workshops så räknas de i besöksstatistiken men inte alltid i utlåningsstatistiken.</p>
            </div>
            
            <p>Som Kulturrådet (2025) betonar är barns språk- och läsutveckling en viktig demokratifråga som har stor betydelse för ett socialt hållbart samhälle. Biblioteken spelar en central roll i detta arbete.</p>
            
            <p><em>Källa: Kulturrådet (2025) <a href="https://www.kulturradet.se/i-fokus/bibliotek/" target="_blank" rel="noopener noreferrer">Bibliotek – tillsammans lyfter vi läsandet!</a></em></p>
        `
    },
    {
        title: "🏊‍♂️ Tobisviksbadet – när investeringar möter verkligheten",
        body: `
            <p>Den <strong>15 juni 2024</strong> var en efterlängtad dag för Simrishamns invånare och sommarbesökare. Tobisviksbadet återöppnade efter en omfattande renovering.</p>
            
            <h3>📈 Besöksutveckling trots utmaningar</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">År</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Öppet</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Besök</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">2024</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Från 15 juni (halv säsong)</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">22 898</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">2025</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Hela året</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">23 902</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>⚠️ Utmaningar under återöppningen</h3>
            <p>Återöppningen var inte helt problemfri. Under garantiperioden upptäcktes tekniska problem som krävde åtgärder:</p>
            
            <div class="warning-box">
                <strong>💰 Oförutsedda kostnader</strong>
                <ul>
                    <li><strong>Läcka:</strong> 240 000 kronor att åtgärda</li>
                    <li><strong>Vattenberedning:</strong> 700 000 kronor mer än budgeterat under garantitiden</li>
                </ul>
                <p>Detta visar på de utmaningar som kommuner ställs inför när de driver och underhåller simhallar och andra idrottsanläggningar.</p>
            </div>
            
            <h3>👔 Ny verksamhetsledare 2025</h3>
            <p>För att hantera den ökade komplexiteten i badverksamheten och för att säkerställa professionell drift året runt tillsatte kommunen 2025 en ny verksamhetsledare specifikt för badverksamheten. Detta är ett tecken på att kommunen tar simhallsdriften på allvar och är beredd att investera i rätt kompetens.</p>
            
            <div class="info-box">
                <strong>🏊 Simhallar är viktiga för:</strong>
                <ul>
                    <li>Folkhälsan</li>
                    <li>Turism</li>
                    <li>Sociala mötesplatser</li>
                    <li>Barn- och ungdomsaktiviteter</li>
                </ul>
            </div>
            
            <p>Enligt Sveriges Kommuner och Regioner (2025) satsar kommunerna allt mer på utbyggnad och drift av idrottsanläggningar, men detta innebär också ökade driftkostnader och underhållsbehov. Simrishamns erfarenheter med Tobisviksbadet är ett exempel på hur även välplanerade renoveringar kan möta oförutsedda utmaningar.</p>
            
            <p>Trots utmaningarna visar besökssiffrorna att investeringen i Tobisviksbadet varit värd mödan.</p>
            
            <p><em>Källa: Sveriges Kommuner och Regioner (2025) <a href="https://skr.se" target="_blank" rel="noopener noreferrer">Sveriges Kommuner och Regioner</a></em></p>
        `
    },
    {
        title: "📖 Sommarboken – när barn läser av lust",
        body: `
            <p>Sommarens stora succé 2025 var <strong>Sommarboken</strong>, ett läsfrämjandeprojekt som lockade <strong>541 barn och unga</strong> att läsa under sommarlovet. Jämfört med 446 deltagare året innan var det en ökning med <strong>95 barn</strong> – en imponerande tillväxt med <strong>21 procent</strong>.</p>
            
            <h3>📊 Utvecklingen</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">År</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Deltagare</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Förändring</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">2024</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">446</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">–</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">2025</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">541</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>+21%</strong></td>
                    </tr>
                </tbody>
            </table>
            
            <h3>🌞 Vad är Sommarboken?</h3>
            <p>Sommarboken är ett <strong>nationellt läsfrämjandeprojekt</strong> som pågår varje sommar och syftar till att motivera barn och unga att läsa under sommarlovet när de inte har skolans strukturer.</p>
            
            <div class="warning-box">
                <strong>⚠️ "Sommarfallet" – ett verkligt problem</strong>
                <p>Forskning visar att det så kallade "sommarfallet" – att barns läsförmåga kan försämras under de långa sommarlovet när de inte läser – är ett verkligt fenomen, särskilt för barn från hem med färre böcker och lägre utbildningsnivå.</p>
            </div>
            
            <h3>🎯 Varför är detta viktigt?</h3>
            <p>Kulturrådet (2025) betonar att barns språk- och läsutveckling är en viktig demokratifråga som har stor betydelse för ett socialt hållbart samhälle. Genom att engagera över 500 barn i sommarläsning bidrar Simrishamns bibliotek konkret till att:</p>
            <ul>
                <li>Minska kunskapsklyftor</li>
                <li>Främja läsning som en lustfylld aktivitet</li>
                <li>Motverka "sommarfallet"</li>
                <li>Skapa positiva läsvanor</li>
            </ul>
            
            <div class="info-box">
                <strong>💪 Framgångens nycklar</strong>
                <p>Ökningen från 446 till 541 deltagare visar att bibliotekspersonalen har arbetat aktivt med att:</p>
                <ul>
                    <li>Marknadsföra projektet</li>
                    <li>Skapa engagemang</li>
                    <li>Göra det enkelt och roligt att delta</li>
                </ul>
            </div>
            
            <p>Enligt Kulturrådet (2021-2023) genom satsningen "Läsfrämjandelyft för folkbibliotekarier" är kompetensutveckling inom litteraturförmedling och läsfrämjande avgörande för att nå barn och unga.</p>
            
            <p>Sommarboken är ett exempel på hur kommunala bibliotek kan göra konkret skillnad för barns läsutveckling genom väl genomförda, evidensbaserade projekt som både är roliga och pedagogiskt värdefulla.</p>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar om Simrishamns kultur- och fritidsförvaltning. Lycka till! 🎯</p>
            
            <p><em>Källor: Kulturrådet (2021-2023) <a href="https://www.kulturradet.se/i-fokus/bibliotek/" target="_blank" rel="noopener noreferrer">Läsfrämjandelyft för folkbibliotekarier</a> | Kulturrådet (2025) <a href="https://www.kulturradet.se/i-fokus/bibliotek/" target="_blank" rel="noopener noreferrer">Bibliotek – tillsammans lyfter vi läsandet!</a></em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om Simrishamns kultur- och fritidsförvaltning
// Frågorna är analyserade och anpassade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Vilken ny verksamhet startades 2025 för att öka inkluderingen av barn och ungdomar med funktionsnedsättningar?",
        answers: [
            "a) Bénka-dí Plus",
            "b) Funka-dí",
            "c) Tillsammans för alla",
            "d) Inkluderande fritid"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Funka-dí</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Funka-dí var en helt ny verksamhet som lanserades under 2025 i Simrishamns kommun. Namnet är en kreativ lek med ord som anknyter till det befintliga ungdomshuset Bénka-dí. Verksamheten skapades i samarbete mellan <strong>tre förvaltningar</strong>:</p>
            
            <div class="info-box">
                <strong>🤝 Samverkan mellan förvaltningar</strong>
                <ul>
                    <li>Kultur- och fritidsförvaltningen</li>
                    <li>Utbildningsförvaltningen</li>
                    <li>Socialförvaltningen</li>
                </ul>
                <p>Detta visar på en helhetssyn där olika delar av kommunen samarbetar för att möta barn och ungas behov.</p>
            </div>
            
            <h3>🎯 Varför Funka-dí var viktig</h3>
            <p>Funka-dí fyllde ett viktigt gap i fritidsutbudet för barn och ungdomar med funktionsnedsättningar. Tidigare kunde dessa barn och ungdomar ha svårt att hitta fritidsaktiviteter som var anpassade efter deras behov och förutsättningar.</p>
            
            <p>Enligt Regeringens kommittédirektiv (2022) om en utvecklad öppen fritidsverksamhet för ungdomar är det viktigt att belysa hur organisationen och utformningen av den öppna fritidsverksamheten påverkar ungas deltagande, särskilt för olika grupper av unga med olika behov och förutsättningar.</p>
            
            <div class="warning-box">
                <strong>💭 Viktigt att komma ihåg</strong>
                <p>Starten av Funka-dí visar på en viktig princip: Ibland räcker det inte med tillgänglighetsanpassning av befintliga verksamheter – ibland behövs särskilt utformade aktiviteter för att verkligen nå alla grupper.</p>
            </div>
            
            <p><strong>Källa och vidare läsning:</strong></p>
            <ul>
                <li>Regeringen (2022) <em>En utvecklad öppen fritidsverksamhet för ungdomar (Kommittédirektiv 2022:96)</em>. Tillgänglig: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/kommittedirektiv/en-utvecklad-oppen-fritidsverksamhet-for-ungdomar_hab196/" target="_blank" rel="noopener noreferrer">www.riksdagen.se</a> [Hämtad: 30 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Med hur många procent ökade besöken på ungdomshuset Bénka-dí mellan 2024 och 2025?",
        answers: [
            "a) 15 procent",
            "b) 25 procent",
            "c) 33 procent",
            "d) 40 procent"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) 33 procent</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Besöken på Bénka-dí ökade från <strong>10 398 år 2024</strong> till <strong>13 818 år 2025</strong>, vilket motsvarar en ökning med <strong>3 420 besök eller 33 procent</strong>. Detta är den kanske mest imponerande enskilda siffran i hela verksamhetsrapporten och visar på en verksamhet som verkligen når ut till fler ungdomar.</p>
            
            <h3>📊 I nationellt perspektiv</h3>
            <p>För att sätta denna ökning i perspektiv kan vi jämföra med riksgenomsnittet. Enligt Myndigheten för ungdoms- och civilsamhällesfrågor (MUCF:s) nationella ungdomsenkät från 2018 besökte ungefär <strong>7 procent</strong> av unga mellan 16-25 år en fritidsgård eller ungdomens hus varje månad (Regeringen, 2022).</p>
            
            <p>En ökning med 33 procent på ett år är <strong>exceptionell</strong> och tyder på att verksamheten erbjuder aktiviteter och en miljö som ungdomarna verkligen värdesätter.</p>
            
            <div class="info-box">
                <strong>🌟 Framgångsfaktorer</strong>
                <p>Denna tillväxt kommer troligen inte av sig själv. Den är resultatet av:</p>
                <ul>
                    <li>Professionellt fritidsledararbete</li>
                    <li>Rätt mix av aktiviteter</li>
                    <li>Lämpliga öppettider</li>
                    <li>En trygg, välkomnande miljö där ungdomar känner sig sedda och respekterade</li>
                </ul>
            </div>
            
            <p>Som framgår av kommittédirektivet (Regeringen, 2022) har fritidsledare och andra yrkesverksamma inom öppen fritidsverksamhet för ungdomar en viktig roll i att möta unga med olika behov och förutsättningar samt i att skapa öppna miljöer som är inkluderande och socialt engagerande.</p>
            
            <div class="warning-box">
                <strong>📈 Vad säger siffran?</strong>
                <p>Simrishamns starka utveckling på Bénka-dí visar att kommunal ungdomsverksamhet verkligen kan göra skillnad när den bedrivs professionellt och med ungdomarnas behov i centrum.</p>
            </div>
            
            <p><strong>Källa och vidare läsning:</strong></p>
            <ul>
                <li>Regeringen (2022) <em>En utvecklad öppen fritidsverksamhet för ungdomar (Kommittédirektiv 2022:96)</em>. Tillgänglig: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/kommittedirektiv/en-utvecklad-oppen-fritidsverksamhet-for-ungdomar_hab196/" target="_blank" rel="noopener noreferrer">www.riksdagen.se</a> [Hämtad: 30 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Vilket av följande påståenden om Simrishamns biblioteksverksamhet 2024-2025 stämmer?",
        answers: [
            "a) Både besök och lån ökade mellan åren",
            "b) Besöken ökade men lånen minskade",
            "c) Både besök och lån minskade mellan åren",
            "d) Besöken minskade men lånen ökade"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Besöken ökade men lånen minskade</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Mellan 2024 och 2025 ökade besöken på biblioteket och bokbussen från <strong>107 904 till cirka 116 000</strong>, medan antalet lån minskade från <strong>95 414 till 93 666</strong>.</p>
            
            <h3>🤔 Ett motsägelsefullt mönster?</h3>
            <p>Detta kan först verka motsägelsefullt – hur kan fler människor besöka biblioteket men färre böcker lånas ut? Svaret ligger i bibliotekets <strong>förändrade roll</strong> i samhället.</p>
            
            <div class="info-box">
                <strong>📚 Bibliotekets nya roller</strong>
                <p>Moderna folkbibliotek är inte längre bara platser där man lånar böcker, utan har utvecklats till:</p>
                <ul>
                    <li>Demokratiska mötesplatser</li>
                    <li>Arenor för livslångt lärande</li>
                    <li>Sociala samlingspunkter</li>
                    <li>Studielokaler</li>
                    <li>Plats för språkcaféer och aktiviteter</li>
                </ul>
            </div>
            
            <h3>🌱 Tre nya projekt förklarar utvecklingen</h3>
            <p>I Simrishamn synliggjordes denna utveckling genom de tre nya projekten som startades 2024 och fortsatte 2025:</p>
            
            <h4>1. Språksamhet</h4>
            <p>Ett integrationsprojekt där människor med annat modersmål än svenska kunde få stöd i språkinlärning</p>
            
            <h4>2. Bokstart</h4>
            <p>En satsning på de allra minsta barnen och deras föräldrar</p>
            
            <h4>3. Livsviktig läsning</h4>
            <p>Ett projekt för att främja läsning bland ungdomar</p>
            
            <div class="warning-box">
                <strong>💡 Varför besök utan lån?</strong>
                <p>Dessa aktiviteter skapar besök utan att nödvändigtvis generera lån. När människor kommer till biblioteket för att delta i språkcaféer, sagostunder eller läsfrämjande workshops så räknas de i besöksstatistiken men inte alltid i utlåningsstatistiken.</p>
            </div>
            
            <p>Som Kulturrådet (2021-2023) betonar i sin satsning "Läsfrämjandelyft för folkbibliotekarier" är bibliotekens roll idag mycket bredare än bara bokutlåning – det handlar om litteraturförmedling, läsfrämjande och att skapa inkluderande mötesplatser.</p>
            
            <p><strong>Källor och vidare läsning:</strong></p>
            <ul>
                <li>Kulturrådet (2021-2023) <em>Läsfrämjandelyft för folkbibliotekarier</em>. Tillgänglig: <a href="https://www.kulturradet.se/i-fokus/bibliotek/" target="_blank" rel="noopener noreferrer">www.kulturradet.se</a> [Hämtad: 30 januari 2026].</li>
                <li>Kulturrådet (2025) <em>Bibliotek – tillsammans lyfter vi läsandet!</em> Tillgänglig: <a href="https://www.kulturradet.se/i-fokus/bibliotek/" target="_blank" rel="noopener noreferrer">www.kulturradet.se</a> [Hämtad: 30 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "När återöppnade Tobisviksbadet efter sin omfattande renovering?",
        answers: [
            "a) 1 maj 2024",
            "b) 15 juni 2024",
            "c) 1 juli 2024",
            "d) 15 augusti 2024"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) 15 juni 2024</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Tobisviksbadet återöppnade den <strong>15 juni 2024</strong> efter en omfattande renovering. Detta var en efterlängtad händelse för Simrishamns invånare och sommarbesökare.</p>
            
            <div class="info-box">
                <strong>📊 Besökssiffror</strong>
                <p>Trots att badet bara var öppet <strong>halva sommarsäsongen 2024</strong> (från mitten av juni till säsongens slut), lockade det <strong>22 898 besökare</strong>, vilket visar på det stora behovet av badanläggningar i kommunen.</p>
                <p>Under 2025, när badet var öppet hela året, ökade besöken till <strong>23 902</strong>.</p>
            </div>
            
            <h3>⚠️ Utmaningar under återöppningen</h3>
            <p>Återöppningen var dock inte helt problemfri. Under garantiperioden uppstod flera oförutsedda problem:</p>
            
            <div class="warning-box">
                <strong>💰 Oförutsedda kostnader</strong>
                <ul>
                    <li>En läcka upptäcktes som kostade <strong>240 000 kronor</strong> att åtgärda</li>
                    <li>Vattenberedningskostnaderna under garantitiden blev <strong>700 000 kronor högre</strong> än budgeterat</li>
                </ul>
                <p>Detta visar på de utmaningar som kommuner ställs inför när de driver och underhåller simhallar och andra idrottsanläggningar.</p>
            </div>
            
            <h3>👔 Ny verksamhetsledare 2025</h3>
            <p>För att hantera den ökade komplexiteten i badverksamheten och för att säkerställa professionell drift året runt tillsatte kommunen 2025 en <strong>ny verksamhetsledare</strong> specifikt för badverksamheten. Detta är ett tecken på att kommunen tar simhallsdriften på allvar och är beredd att investera i rätt kompetens för att säkerställa god kvalitet och drift.</p>
            
            <p>Enligt Sveriges Kommuner och Regioner (2016) satsar kommunerna allt mer på utbyggnad och drift av idrottsanläggningar, men detta innebär också ökade driftkostnader och underhållsbehov. Simrishamns kommuns erfarenheter med Tobisviksbadet är ett exempel på hur även väl planerade renoveringar kan möta oförutsedda utmaningar.</p>
            
            <div class="info-box">
                <strong>🏊 Varför simhallar är viktiga</strong>
                <ul>
                    <li>Folkhälsa och motion</li>
                    <li>Turism och besöksnäring</li>
                    <li>Sociala mötesplatser</li>
                    <li>Barn- och ungdomsaktiviteter</li>
                </ul>
            </div>
            
            <p>Trots de inledande utmaningarna visar besökssiffrorna att investeringen i Tobisviksbadet varit värd mödan.</p>
            
            <p><strong>Källa och vidare läsning:</strong></p>
            <ul>
                <li>Sveriges Kommuner och Regioner (2025) <em>Sveriges Kommuner och Regioner</em>. Tillgänglig: <a href="https://skr.se" target="_blank" rel="noopener noreferrer">skr.se</a> [Hämtad: 30 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Hur många barn och unga deltog i biblioteksprojektet 'Sommarboken' 2025, vilket var en rekordnivå?",
        answers: [
            "a) 386 deltagare",
            "b) 446 deltagare",
            "c) 541 deltagare",
            "d) 623 deltagare"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) 541 deltagare</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Sommarboken 2025 lockade <strong>541 barn och unga</strong> att delta i sommarens läsprojekt, en ökning från 446 deltagare året innan. Detta innebär en tillväxt med <strong>95 deltagare eller cirka 21 procent</strong> – ett imponerande resultat som visar att bibliotekspersonalens arbete med att göra läsning tilltalande och tillgänglig för barn och unga verkligen bär frukt.</p>
            
            <h3>📖 Vad är Sommarboken?</h3>
            <p>Sommarboken är ett <strong>nationellt läsfrämjandeprojekt</strong> som pågår varje sommar och syftar till att motivera barn och unga att läsa under sommarlovet.</p>
            
            <div class="warning-box">
                <strong>⚠️ Problemet: "Sommarfallet"</strong>
                <p>Projektet är viktigare än många kanske inser. Forskning visar att det så kallade <strong>"sommarfallet"</strong> – att barns läsförmåga kan försämras under de långa sommarlovet när de inte läser – är ett verkligt fenomen, särskilt för barn från hem med färre böcker och lägre utbildningsnivå.</p>
            </div>
            
            <h3>🎯 Varför är detta viktigt?</h3>
            <p>Kulturrådet (2025) betonar att barns språk- och läsutveckling är en viktig <strong>demokratifråga</strong> som har stor betydelse för ett socialt hållbart samhälle. Genom att engagera över 500 barn i sommarläsning bidrar Simrishamns bibliotek konkret till att:</p>
            <ul>
                <li>Minska kunskapsklyftor</li>
                <li>Främja läsning som en lustfylld aktivitet</li>
                <li>Motverka "sommarfallet"</li>
                <li>Skapa positiva läsvanor</li>
            </ul>
            
            <div class="info-box">
                <strong>💪 Framgångens nycklar</strong>
                <p>Ökningen från 446 till 541 deltagare visar att bibliotekspersonalen har arbetat aktivt med att:</p>
                <ul>
                    <li>Marknadsföra projektet</li>
                    <li>Skapa engagemang</li>
                    <li>Göra det enkelt och roligt att delta</li>
                </ul>
            </div>
            
            <p>Enligt Kulturrådet (2021-2023) genom satsningen "Läsfrämjandelyft för folkbibliotekarier" är kompetensutveckling inom litteraturförmedling och läsfrämjande avgörande för att nå barn och unga, och Simrishamns resultat visar exempel på hur professionellt läsfrämjandearbete ger konkreta resultat.</p>
            
            <p>Sommarboken är ett exempel på hur kommunala bibliotek kan göra konkret skillnad för barns läsutveckling genom väl genomförda, evidensbaserade projekt som både är roliga och pedagogiskt värdefulla.</p>
            
            <p><strong>Källor och vidare läsning:</strong></p>
            <ul>
                <li>Kulturrådet (2021-2023) <em>Läsfrämjandelyft för folkbibliotekarier</em>. Tillgänglig: <a href="https://www.kulturradet.se/i-fokus/bibliotek/" target="_blank" rel="noopener noreferrer">www.kulturradet.se</a> [Hämtad: 30 januari 2026].</li>
                <li>Kulturrådet (2025) <em>Bibliotek – tillsammans lyfter vi läsandet!</em> Tillgänglig: <a href="https://www.kulturradet.se/i-fokus/bibliotek/" target="_blank" rel="noopener noreferrer">www.kulturradet.se</a> [Hämtad: 30 januari 2026].</li>
            </ul>
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
    
    console.log('QUIZ INITIERAT - När verksamheten växer: Simrishamns kultur- och fritidsförvaltning 2024-2025');
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
        introNextBtn.textContent = 'Se startbilder ➡️';
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
// Visar slutresultatet efter alla frågor
// ============================================
function showResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    
    let message = '';
    if (percentage === 100) {
        message = '🏆 Perfekt! Du har utmärkt koll på kommunal verksamhetsutveckling! Kunskap är grunden för att förstå hur samhället utvecklas.';
    } else if (percentage >= 80) {
        message = '⭐ Mycket bra! Du har god förståelse för hur kultur- och fritidsverksamhet utvecklas. Fortsätt utforska!';
    } else if (percentage >= 60) {
        message = '👍 Bra jobbat! Du har grundläggande kunskap. Läs gärna igenom slidesen igen för att lära dig mer!';
    } else {
        message = '📚 Det finns mer att upptäcka! Läs blogginlägget och slidesen igen för att fördjupa dina kunskaper.';
    }
    
    const resultsHTML = `
        <div class="result-container">
            <h2 class="result-title">Quiz slutfört! 🎉</h2>
            <div class="result-score">${score} av ${quizData.length} rätt</div>
            <div class="result-score">${percentage}%</div>
            <p class="result-message">${message}</p>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>💡 Viktiga lärdomar från quizet:</strong>
                <ul>
                    <li><strong>Funka-dí:</strong> Ny verksamhet för barn och unga med funktionsnedsättningar</li>
                    <li><strong>33% ökning:</strong> Bénka-dí lockade 3 420 fler besök under 2025</li>
                    <li><strong>Biblioteket:</strong> Fler besök men färre lån – visar förändrad roll i samhället</li>
                    <li><strong>15 juni 2024:</strong> Tobisviksbadet återöppnade efter renovering</li>
                    <li><strong>541 deltagare:</strong> Rekordmånga barn deltog i Sommarboken 2025</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="https://controllerutangranser.wordpress.com/2026/01/30/nar-verksamheten-vaxer/" target="_blank" rel="noopener noreferrer">Läs blogginlägget "När verksamheten växer"</a></li>
                    <li><a href="https://www.kulturradet.se/i-fokus/bibliotek/" target="_blank" rel="noopener noreferrer">Kulturrådet: Bibliotek – tillsammans lyfter vi läsandet!</a></li>
                    <li><a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/kommittedirektiv/en-utvecklad-oppen-fritidsverksamhet-for-ungdomar_hab196/" target="_blank" rel="noopener noreferrer">Regeringen: En utvecklad öppen fritidsverksamhet för ungdomar</a></li>
                    <li><a href="https://controllerutangranser.wordpress.com/" target="_blank" rel="noopener noreferrer">Controller utan gränser – fler analyser</a></li>
                </ul>
                <p style="margin-top: 15px; font-size: 0.95em;"><em>🎯 Kommunal verksamhetsutveckling gör verklig skillnad för människors vardag!</em></p>
            </div>
            
            <div class="result-buttons">
                <button class="restart-btn" onclick="restartQuiz()">Starta om quiz 🔄</button>
            </div>
        </div>
    `;
    
    quizContent.innerHTML = resultsHTML;
    updateProgress();
}

// ============================================
// STARTA OM QUIZ
// Återställer quizet till början
// ============================================
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    currentIntroPage = 0;
    
    // Visa intro-sektionen igen
    quizContent.classList.add('hidden');
    imageSection.classList.add('hidden');
    introSection.classList.remove('hidden');
    
    showIntroPage(0);
    updateProgress();
    
    console.log('QUIZ OMSTARTAT');
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
// ============================================
// Quiz nr 22: När verksamheten växer - Simrishamns kultur- och fritidsförvaltning 2024-2025
//
// Skapad: 2026-01-30
// Ämne: Kommunal verksamhetsutveckling, inkludering och tillgänglighet
// Författare: Kent Lundgren med AI-assistans (Claude)
//
// Källor (i Harvard-format):
// - Lundgren, K. (2026). När verksamheten växer.
//   Tillgänglig: https://controllerutangranser.wordpress.com/2026/01/30/nar-verksamheten-vaxer/
// - Kulturrådet (2021-2023). Läsfrämjandelyft för folkbibliotekarier.
//   Tillgänglig: https://www.kulturradet.se/i-fokus/bibliotek/
// - Kulturrådet (2025). Bibliotek – tillsammans lyfter vi läsandet!
//   Tillgänglig: https://www.kulturradet.se/i-fokus/bibliotek/
// - Regeringen (2022). En utvecklad öppen fritidsverksamhet för ungdomar (Kommittédirektiv 2022:96).
//   Tillgänglig: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/kommittedirektiv/en-utvecklad-oppen-fritidsverksamhet-for-ungdomar_hab196/
// - Sveriges Kommuner och Regioner (2025). Sveriges Kommuner och Regioner.
//   Tillgänglig: https://skr.se
// ============================================
