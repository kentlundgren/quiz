// ============================================
// JAVASCRIPT FÖR QUIZ: DETALJPLANER OCH BORRBY-ÄRENDET
// Skapad: 2025-12-31
// 
// Detta quiz handlar om detaljplaneprocessen i Sverige
// med fokus på Borrby-ärendet (Borrby 58:3 och S:35)
// 
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna planomradet.jpg och planomradet2.jpg
// växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // Två bilder (planomradet.jpg och planomradet2.jpg)
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
// INTRODUKTIONSTEXTER - Fem slides om detaljplaner och Borrby-ärendet
// Baserade på blogginlägget och PBL
// ============================================
const introPages = [
    {
        title: "🏗️ Detaljplan Borrby – Översikt",
        body: `
            <p>Välkommen till ett quiz om <strong>detaljplaneprocessen i Sverige</strong>! Här får du testa dina kunskaper med utgångspunkt i ett verkligt ärende: Detaljplan för Borrby 58:3 och S:35 i Simrishamns kommun.</p>
            
            <div class="plan-image-container" style="margin: 20px 0; text-align: center;">
                <img src="planomradet.jpg" alt="Karta över planområdet vid Borrbystrand - visar områdets markanvändning med Gata, Parkering, Natur och Besöksanläggning" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <p style="font-size: 0.85rem; color: #64748b; margin-top: 10px; font-style: italic;">
                    Kartan visar planområdet. Källa: <a href="https://lundgren9.github.io/Borrby/Antagandehandling_Borrby_58_3_Borrby_S_35_Borrbystrand_Simrishamn_kommun_sammanslagen.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2024) <em>Antagandehandling</em></a>
                </p>
            </div>
            
            <h3>📍 Om planområdet</h3>
            <p><strong>Planområde:</strong> Cirka 42 300 m² vid Borrbystrand, Simrishamns kommun</p>
            
            <h3>🎯 Huvudsakliga syften</h3>
            <ul>
                <li>Möjliggöra tennisbana och minigolfbana för Borrbystrands camping</li>
                <li>Säkerställa infart till fastighet Borrby 58:7</li>
                <li>Ändra huvudmannaskap för kommunägd mark</li>
                <li>Tillgängliggöra strandområde för personer med funktionsnedsättning</li>
            </ul>
            
            <div class="info-box">
                <strong>🔑 Skydd och riksintressen</strong>
                <ul>
                    <li>Riksintresse friluftsliv och naturvård</li>
                    <li>Riksintresse högexploaterad kust</li>
                    <li>Strandskydd (dispens krävs)</li>
                    <li>Landskapsbildsskydd (upphör vid antagande)</li>
                </ul>
            </div>
            
            <p><em>Källor: <a href="https://lundgren9.github.io/Borrby/Antagandehandling_Borrby_58_3_Borrby_S_35_Borrbystrand_Simrishamn_kommun_sammanslagen.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2024) <em>Antagandehandling</em></a> | <a href="https://lundgren9.github.io/Borrby/" target="_blank" rel="noopener noreferrer">AI-stödd analys av granskningsyttranden</a></em></p>
            
            <div class="warning-box" style="margin-top: 20px;">
                <strong>📖 Förslag på att läsa mer</strong>
                <p>För den som vill fördjupa sig i hur AI kan användas för att systematiskt kategorisera och analysera granskningsyttranden rekommenderas:</p>
                <p><a href="https://lundgren9.github.io/Borrby/" target="_blank" rel="noopener noreferrer"><strong>AI-stödd analys av granskningsyttranden – Borrby-projektet</strong></a></p>
                <p style="font-size: 0.9em; font-style: italic; margin-top: 8px;">Projektet visar hur generativ AI kan användas för att strukturera och kategorisera synpunkter enligt både lokala och nationella kategoriseringsstandards. Ett konkret exempel på AI-tillämpning i kommunal planprocess.</p>
            </div>
        `
    },
    {
        title: "📝 Granskningsyttranden – Vem säger vad?",
        body: `
            <p>Under granskningen av detaljplanen inkom <strong>8 yttranden</strong> – 4 från myndigheter och 4 från sakägare. Dessa speglar de olika intressen som kommunen måste väga mot varandra.</p>
            
            <h3>🏛️ Myndighetsyttranden (4 st)</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Myndighet</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Synpunkt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Lantmäteriet</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Redaktionell korrigering av formulering</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Länsstyrelsen</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Ingen överprövning planerad, strandskyddsdispens ännu ej beviljad</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Trafikverket</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Krav på justering vid väg 1500, stängsel vid tennisbana</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>GlobalConnect</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Ingen påverkan på deras kanalisation</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>👥 Sakägaryttranden (4 st)</h3>
            <ul>
                <li><strong>Sakägare 1:</strong> Nej till förslaget – befintlig ramp bör underhållas istället</li>
                <li><strong>Sakägare 2 (ålfiskare):</strong> Stark kritik, tre alternativ föreslås. Ålfisket är på väg att bli UNESCO-kulturarv!</li>
                <li><strong>Sakägare 3 (Borrby Byalag):</strong> Förslag om att inkludera Kyhlsbadet och skapa "upplevelseområde"</li>
                <li><strong>Sakägare 4:</strong> Yrkar på utökning av tomtyta enligt gällande plan från 1986</li>
            </ul>
            
            <div class="warning-box">
                <strong>💡 Demokrati i praktiken</strong>
                <p>Granskningsyttranden visar att detaljplaneprocessen är en demokratisk process där olika intressen får komma till tals.</p>
            </div>
            
            <p><em>Källa: <a href="https://lundgren9.github.io/Borrby/Antagandehandling_Borrby_58_3_Borrby_S_35_Borrbystrand_Simrishamn_kommun_sammanslagen.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2024) <em>Antagandehandling</em></a>.</em></p>
        `
    },
    {
        title: "⚖️ Intressekonflikter och avvägningar",
        body: `
            <p>I Borrby-ärendet finns flera <strong>intressekonflikter</strong> som kommunen måste hantera. Dessa belyser den komplexa verklighet som ofta möter planerare.</p>
            
            <h3>🔄 Huvudsakliga intressekonflikter</h3>
            
            <div class="info-box">
                <strong>♿ Tillgänglighet vs. 🎣 Kulturarv</strong>
                <ul>
                    <li>Föreslagna gångförbindelsen kan påverka ålfiskeverksamhet</li>
                    <li>UNESCO-kulturarvsstatus för ålfisket är aktuell</li>
                    <li>Balans mellan modern tillgänglighet och traditionella näringar</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>🏛️ Kommunalt ansvar vs. 🏢 Privat drift</strong>
                <ul>
                    <li>Frågor om underhåll av minigolfbana och anläggningar</li>
                    <li>Tidigare eftersatt underhåll av bassäng skapade misstro</li>
                    <li>Bassängen totalrenoverad och öppnad juni 2025 med nytt kafé!</li>
                </ul>
            </div>
            
            <h3>🏠 Enskilda intressen vs. 🌿 Naturvärden</h3>
            <ul>
                <li>Fastighetsägares önskemål om utökad tomtyta</li>
                <li>Områdets naturvärden och strandskydd</li>
                <li>Planens övergripande syfte</li>
            </ul>
            
            <h3>🗺️ Olika lösningar för samma problem</h3>
            <p>Tre alternativa platser för tillgänglighetsanpassning har föreslagits med varierande:</p>
            <ul>
                <li>Kostnader</li>
                <li>Miljöpåverkan</li>
                <li>Effektivitet</li>
            </ul>
            
            <p><em>Källa: <a href="https://www.boverket.se/sv/samhallsplanering/sa-planeras-sverige/" target="_blank" rel="noopener noreferrer">Boverket (2021)</a>.</em></p>
        `
    },
    {
        title: "📋 Detaljplaneprocessen – Så fungerar den",
        body: `
            <p>Detaljplaneprocessen regleras i <strong>Plan- och bygglagen (2010:900)</strong>. Kommunen har ensam rätt att besluta om detaljplaner – det så kallade <em>kommunala planmonopolet</em>.</p>
            
            <h3>📊 Processens huvudsteg</h3>
            <ol>
                <li><strong>Planbesked</strong> – Kommunens avsikt att inleda planläggning (svar inom 4 månader)</li>
                <li><strong>Program</strong> (i vissa fall) – Övergripande förutsättningar kartläggs</li>
                <li><strong>Samråd</strong> – Berörda parter lämnar synpunkter på planförslag</li>
                <li><strong>Samrådsredogörelse</strong> – Kommunen sammanställer och kommenterar</li>
                <li><strong>Granskning</strong> – Reviderat förslag ställs ut (minst 3 veckor)</li>
                <li><strong>Granskningsutlåtande</strong> – Synpunkter sammanställs och kommenteras</li>
                <li><strong>Antagande</strong> – Kommunfullmäktige eller nämnd antar planen</li>
                <li><strong>Laga kraft</strong> – Efter 3 veckor utan överklagande börjar planen gälla</li>
            </ol>
            
            <div class="info-box">
                <strong>🏛️ Länsstyrelsens roll</strong>
                <ul>
                    <li>Bevakar riksintressen, strandskydd, miljökvalitetsnormer</li>
                    <li>Kan överpröva inom <strong>3 veckor</strong> efter antagande</li>
                    <li>Två månader för slutgiltigt beslut om upphävande</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>⏱️ Genomförandetid</strong>
                <p>Minst 5 år, högst 15 år. Under denna tid får planen inte ändras mot fastighetsägares vilja (undantag: nya förhållanden av stor allmän vikt).</p>
            </div>
            
            <p><em>Källa: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener noreferrer">Plan- och bygglag (2010:900)</a>.</em></p>
        `
    },
    {
        title: "🎯 Att maximera nöjdhet i planprocesser",
        body: `
            <p>Hur kan kommuner hantera planprocesser så att <strong>så många som möjligt</strong> blir nöjda? Här är sex viktiga principer baserade på praxis och forskning.</p>
            
            <h3>📌 Sex viktiga principer</h3>
            
            <ol>
                <li><strong>Tidigt och brett samråd</strong>
                    <p>Involvera berörda parter så tidigt som möjligt. Förhindra att positioner låser sig.</p>
                </li>
                <li><strong>Transparent hantering av synpunkter</strong>
                    <p>Visa tydligt hur varje synpunkt har beaktats eller varför den inte kunnat tillgodoses.</p>
                </li>
                <li><strong>Analys av alternativa lösningar</strong>
                    <p>Systematisk jämförelse ur flera perspektiv: kostnad, miljö, tillgänglighet.</p>
                </li>
                <li><strong>Dialog före konfrontation</strong>
                    <p>Proaktiv dialog innan formella samråds- och granskningsskeden.</p>
                </li>
                <li><strong>Tydlig redovisning av avvägningar</strong>
                    <p>Förklara <em>varför</em> en viss lösning valts trots invändningar.</p>
                </li>
                <li><strong>Flexibilitet inom lagliga ramar</strong>
                    <p>Mindre justeringar kan tillgodose enskilda intressen utan att äventyra planens huvudsyfte.</p>
                </li>
            </ol>
            
            <div class="info-box">
                <strong>🖼️ Visualisering som kommunikationsverktyg</strong>
                <ul>
                    <li><strong>Principsnitt</strong> visar höjdskillnader och tillgänglighet</li>
                    <li><strong>Planillustrationer</strong> gör markanvändning begriplig</li>
                    <li>Hjälper icke-experter förstå planens konsekvenser</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>✨ Sammanfattning</strong>
                <p><strong>God planprocess = Transparens + Dialog + Dokumenterade avvägningar + Respekt för olika intressen</strong></p>
            </div>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av detaljplaneprocessen. Lycka till! 🎯</p>
            
            <p><em>Källa: <a href="https://www.boverket.se/sv/samhallsplanering/sa-planeras-sverige/kommunal-planering/detaljplanering/" target="_blank" rel="noopener noreferrer">Boverket (2022)</a>.</em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om detaljplaner och Borrby-ärendet
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Vem har befogenhet att anta en detaljplan i Sverige?",
        answers: [
            "a) Länsstyrelsen i respektive län",
            "b) Boverket som tillsynsmyndighet",
            "c) Endast den berörda kommunen",
            "d) Riksdagen genom särskilt beslut"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) Endast den berörda kommunen</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Enligt Plan- och bygglagen (2010:900) är det en <strong>kommunal angelägenhet</strong> att planlägga användningen av mark och vatten. Detta kallas <em>det kommunala planmonopolet</em>.</p>
            
            <div class="info-box">
                <strong>🏛️ Det kommunala planmonopolet</strong>
                <p>Det är endast kommunen som har befogenhet att anta planer och bestämma om planläggning ska komma till stånd eller inte.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Länsstyrelsen:</strong> Har en granskande och i vissa fall överprövande roll, men kan inte själv anta detaljplaner</li>
                <li><strong>B) Boverket:</strong> Arbetar med metodutveckling och vägledning men har ingen beslutanderätt i enskilda ärenden</li>
                <li><strong>D) Riksdagen:</strong> Stiftar lagar (som PBL) men beslutar inte om enskilda detaljplaner</li>
            </ul>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Boverket (2021) <em>Så planeras Sverige</em>. Tillgänglig: <a href="https://www.boverket.se/sv/samhallsplanering/sa-planeras-sverige/" target="_blank" rel="noopener noreferrer">www.boverket.se</a></li>
                <li>Plan- och bygglag (2010:900) 2 kap. 1 §. Tillgänglig: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener noreferrer">riksdagen.se</a></li>
            </ul>
        `
    },
    {
        question: "Vilken tidsgräns har Länsstyrelsen för att besluta om överprövning av en antagen detaljplan?",
        answers: [
            "a) 1 vecka efter antagande",
            "b) 3 veckor efter antagande",
            "c) 2 månader efter antagande",
            "d) 6 månader efter antagande"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) 3 veckor efter antagande</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>När en detaljplan har antagits av kommunen skickas den till Länsstyrelsen, som <strong>inom tre veckor</strong> kan besluta om att överpröva den.</p>
            
            <div class="info-box">
                <strong>⏱️ Viktiga tidsfrister</strong>
                <ul>
                    <li><strong>3 veckor:</strong> Länsstyrelsen kan besluta om överprövning</li>
                    <li><strong>2 månader:</strong> Om överprövning sker – tid för slutgiltigt beslut om upphävande</li>
                    <li><strong>3 veckor:</strong> Om ingen överprövning eller överklagande – planen vinner laga kraft</li>
                </ul>
            </div>
            
            <h3>🏛️ Vad granskar Länsstyrelsen?</h3>
            <ul>
                <li>Riksintressen</li>
                <li>Miljökvalitetsnormer</li>
                <li>Strandskydd</li>
                <li>Människors hälsa och säkerhet</li>
            </ul>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) 1 vecka:</strong> För kort tid enligt lagen</li>
                <li><strong>C) 2 månader:</strong> Detta är tiden för slutgiltigt beslut vid överprövning, inte beslutet om att överpröva</li>
                <li><strong>D) 6 månader:</strong> Ingen sådan tidsgräns finns i PBL</li>
            </ul>
            
            <p><strong>Källa:</strong> Kungälvs kommun (2024) <em>Planprocessen</em>. Tillgänglig: <a href="https://www.kungalv.se/Bygga--bo--miljo/samhallsplanering/detaljplanering/planprocessen/" target="_blank" rel="noopener noreferrer">www.kungalv.se</a></p>
        `
    },
    {
        question: "Vad är syftet med ett principsnitt i en detaljplan?",
        answers: [
            "a) Att visa detaljplanens juridiskt bindande bestämmelser",
            "b) Att illustrera höjdskillnader, lutningar och nivåförändringar i planområdet",
            "c) Att visa fastighetsgränser och ägoförhållanden",
            "d) Att redovisa kommunens ekonomiska kalkyler för genomförandet"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Att illustrera höjdskillnader, lutningar och nivåförändringar i planområdet</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Ett principsnitt är en <strong>tvärsnittsbild</strong> som visar hur olika nivåer och höjder förhåller sig till varandra i ett planområde.</p>
            
            <div class="info-box">
                <strong>📐 Principsnittets funktion</strong>
                <p>Det används för att visa höjdskillnader, lutningar och nivåförändringar som inte alltid är lätta att förstå enbart genom att studera en plankarta ovanifrån.</p>
            </div>
            
            <h3>🎯 I Borrby-ärendet</h3>
            <p>Principsnittet illustrerar hur den föreslagna gångförbindelsen för personer med funktionsnedsättning skulle utformas från parkeringsplatsen, via en betonglagd passage, ner till strandområdet.</p>
            
            <div class="warning-box">
                <strong>⚠️ Viktigt att veta</strong>
                <p>Principsnitt är <strong>inte juridiskt bindande</strong> – det är <em>plankartan</em> som utgör det juridiskt bindande dokumentet.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Juridiskt bindande:</strong> Nej, endast plankartan är juridiskt bindande</li>
                <li><strong>C) Fastighetsgränser:</strong> Dessa visas på plankartan och i fastighetsregistret</li>
                <li><strong>D) Ekonomiska kalkyler:</strong> Dessa redovisas i separata handlingar</li>
            </ul>
            
            <p><strong>Källa:</strong> Göteborgs Stad <em>Hur du läser och förstår en detaljplan</em>. Tillgänglig: <a href="https://goteborg.se/wps/portal?uri=gbglnk%3A2019129124453620" target="_blank" rel="noopener noreferrer">goteborg.se</a></p>
        `
    },
    {
        question: "Vilket av följande påståenden är KORREKT om en detaljplans genomförandetid?",
        answers: [
            "a) Genomförandetiden är alltid exakt 10 år",
            "b) Under genomförandetiden får planen inte ändras mot fastighetsägares vilja, utom vid nya förhållanden av stor allmän vikt",
            "c) Efter genomförandetidens utgång upphör detaljplanen automatiskt att gälla",
            "d) Genomförandetiden kan vara högst 5 år"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Under genomförandetiden får planen inte ändras mot fastighetsägares vilja, utom vid nya förhållanden av stor allmän vikt</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>En detaljplan har en genomförandetid på <strong>minst 5 och högst 15 år</strong>. Under denna tid har fastighetsägare en garanterad rätt att bygga enligt planen.</p>
            
            <div class="info-box">
                <strong>⏱️ Genomförandetiden i korthet</strong>
                <ul>
                    <li><strong>Längd:</strong> 5–15 år</li>
                    <li><strong>Skydd:</strong> Planen får inte ändras mot fastighetsägares vilja</li>
                    <li><strong>Undantag:</strong> Nya förhållanden av stor allmän vikt som inte kunnat förutses</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>⚠️ Viktigt!</strong>
                <p>Detaljplanen <strong>upphör inte automatiskt</strong> efter genomförandetidens utgång! Den fortsätter att gälla tills den upphävs, ändras eller ersätts av en ny detaljplan.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Alltid 10 år:</strong> Nej, det kan vara 5–15 år</li>
                <li><strong>C) Upphör automatiskt:</strong> Nej, planen gäller tills den aktivt ändras</li>
                <li><strong>D) Högst 5 år:</strong> Nej, det är <em>minst</em> 5 år och <em>högst</em> 15 år</li>
            </ul>
            
            <p><strong>Källa:</strong> Plan- och bygglag (2010:900) 4 kap. 21 §, 38-40 §§. Tillgänglig: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener noreferrer">riksdagen.se</a></p>
        `
    },
    {
        question: "I Borrby-ärendet framförde en ålfiskare att ålfisket är på väg att bli UNESCO-kulturarv. Hur ska kommunen hantera sådana immateriella kulturarvsvärden i detaljplaneprocessen?",
        answers: [
            "a) Immateriella kulturarv nämns inte i PBL och behöver därför inte beaktas",
            "b) Endast materiella kulturarv som byggnader och fornlämningar ska beaktas",
            "c) Kulturarv ingår i den bredare avvägningen av \"allmänna och enskilda intressen\" enligt PBL",
            "d) UNESCO-status ger automatiskt juridiskt skydd som hindrar all exploatering"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) Kulturarv ingår i den bredare avvägningen av "allmänna och enskilda intressen" enligt PBL</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Traditionella näringar och immateriella kulturarv ingår i den bredare avvägningen av <strong>"allmänna och enskilda intressen"</strong> som ska göras enligt 2 kap. PBL.</p>
            
            <div class="info-box">
                <strong>⚖️ Avvägning av intressen</strong>
                <p>Kommunen kan inte bortse från immateriella kulturarv bara för att de inte explicit nämns i lagen – de utgör ett allmänt intresse som ska vägas mot andra intressen i planprocessen.</p>
            </div>
            
            <h3>🎣 I Borrby-ärendet</h3>
            <p>Ålfisket vid kusten är på väg att bli UNESCO-kulturarv. Detta väger tungt i den intresseavvägning som kommunen ska göra mellan:</p>
            <ul>
                <li>Modern tillgänglighet och samhällsutveckling</li>
                <li>Kulturarv och biologisk mångfald</li>
                <li>Traditionella näringar</li>
            </ul>
            
            <div class="warning-box">
                <strong>⚠️ UNESCO-status</strong>
                <p>UNESCO-status ger <strong>inte automatiskt juridiskt skydd</strong> som hindrar all exploatering, men det väger tungt i kommunens avvägning.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Behöver ej beaktas:</strong> Fel – allmänna intressen ska alltid beaktas</li>
                <li><strong>B) Endast materiella:</strong> Nej, även immateriella värden ska vägas in</li>
                <li><strong>D) Automatiskt skydd:</strong> Nej, UNESCO-status ger inga automatiska juridiska hinder</li>
            </ul>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Plan- och bygglag (2010:900) 2 kap. Tillgänglig: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener noreferrer">riksdagen.se</a></li>
                <li>UNESCO (2003) <em>Konventionen om skydd för det immateriella kulturarvet</em>. Tillgänglig: <a href="https://ich.unesco.org/" target="_blank" rel="noopener noreferrer">ich.unesco.org</a></li>
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
    
    console.log('QUIZ INITIERAT - Detaljplaner och Borrby-ärendet');
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
        message = '🏆 Perfekt! Du har helt koll på detaljplaneprocessen! Nu kan du delta i samråd med självförtroende!';
    } else if (percentage >= 80) {
        message = '⭐ Mycket bra! Du har god förståelse för hur kommuner planerar mark och vatten. Fortsätt lära!';
    } else if (percentage >= 60) {
        message = '👍 Bra jobbat! Du har grundläggande förståelse. Läs gärna igenom slidesen igen!';
    } else {
        message = '📚 Det finns mer att upptäcka! Läs igenom blogginlägget och slidesen igen för att lära dig mer.';
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
                    <li><strong>Kommunalt planmonopol:</strong> Endast kommunen kan anta detaljplaner</li>
                    <li><strong>Länsstyrelsens roll:</strong> 3 veckor för beslut om överprövning</li>
                    <li><strong>Principsnitt:</strong> Visar höjdskillnader – ej juridiskt bindande</li>
                    <li><strong>Genomförandetid:</strong> 5–15 år med skydd för fastighetsägare</li>
                    <li><strong>Immateriella kulturarv:</strong> Ingår i intresseavvägningen enligt PBL</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="https://controllerutangranser.wordpress.com/2025/12/31/nar-kommunala-planer-moter-lokala-intressen/" target="_blank" rel="noopener noreferrer">Läs blogginlägget om Borrby-ärendet</a></li>
                    <li><a href="https://www.boverket.se/sv/PBL-kunskapsbanken/" target="_blank" rel="noopener noreferrer">Boverkets PBL-kunskapsbank</a></li>
                    <li><a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/" target="_blank" rel="noopener noreferrer">Plan- och bygglagen (2010:900)</a></li>
                    <li><a href="https://controllerutangranser.wordpress.com/" target="_blank" rel="noopener noreferrer">Controller utan gränser – fler analyser</a></li>
                </ul>
                <p style="margin-top: 15px; font-size: 0.95em;"><em>🏗️ Lycka till med dina kommande detaljplaneärenden!</em></p>
            </div>
            
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
// Quiz för Detaljplaner och Borrby-ärendet
//
// Skapad: 2025-12-31
// Ämne: Detaljplaneprocessen i Sverige med fokus på Borrby-ärendet
// Författare: Kent Lundgren med AI-assistans (Claude Opus 4.5)
//
// Källor (i Harvard-format):
// - Lundgren, K. (2025). När kommunala planer möter lokala intressen.
//   Tillgänglig: https://controllerutangranser.wordpress.com/2025/12/31/nar-kommunala-planer-moter-lokala-intressen/
// - Plan- och bygglag (2010:900).
//   Tillgänglig: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/plan-och-bygglag-2010900_sfs-2010-900/
// - Boverket (2021). Så planeras Sverige.
//   Tillgänglig: https://www.boverket.se/sv/samhallsplanering/sa-planeras-sverige/
// - Boverket (2022). Detaljplanering.
//   Tillgänglig: https://www.boverket.se/sv/samhallsplanering/sa-planeras-sverige/kommunal-planering/detaljplanering/
// - UNESCO (2003). Konventionen om skydd för det immateriella kulturarvet.
//   Tillgänglig: https://ich.unesco.org/
// ============================================

