// ============================================
// JAVASCRIPT FÖR QUIZ: INVESTERING, REINVESTERING ELLER DRIFT?
// Fokus på reinvesteringar i kommunal redovisning
//
// Skapad: 2025-11-27
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna drift_reinvestering_investering1.jpg, drift_reinvestering_investering2.jpg 
// och drift_reinvestering_investering3.jpg växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // UPPDATERING: Nu med tre bilder istället för två
        const images = [img1, img2, img3];
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
// INTRODUKTIONSTEXTER - Fem slides om investering, reinvestering och drift
// Här presenteras grundläggande information om begreppen
// UPPDATERING: Nytt innehåll med fokus på reinvesteringar
// ============================================
const introPages = [
    {
        title: "Välkommen – Fokus på reinvesteringar!",
        body: `
            <p>Välkommen till ett quiz om tre begrepp som ofta blandas ihop i kommunal redovisning – <strong>investering</strong>, <strong>reinvestering</strong> och <strong>drift</strong>!</p>
            
            <div class="warning-box">
                <strong>📚 Bygger vidare på tidigare material</strong>
                <p>Detta quiz bygger vidare på bloggtexten <a href="https://controllerutangranser.wordpress.com/2025/10/30/drift-eller-investering/" target="_blank" rel="noopener noreferrer">"Drift eller investering?"</a> och det tidigare quizet <a href="https://kentlundgren.se/program/quiz/10/" target="_blank" rel="noopener noreferrer">"Drift eller Investering?"</a>.</p>
                <p>Medan dessa fokuserade på den grundläggande skillnaden mellan drift och investering, går <strong>detta quiz djupare</strong> och fokuserar särskilt på <strong>reinvesteringar</strong> och hur <strong>komponentavskrivning</strong> påverkar klassificeringen.</p>
            </div>
            
            <div class="info-box">
                <strong>🏗️ INVESTERING = Anskaffning för stadigvarande bruk</strong>
                <p>En investering är en anskaffning av en anläggningstillgång som ska användas under en längre tid i verksamheten.</p>
            </div>
            
            <h3>📋 Kännetecken för investering:</h3>
            <ul>
                <li><strong>Stadigvarande bruk:</strong> Ekonomisk livslängd minst 3 år</li>
                <li><strong>Väsentlighetsgräns:</strong> Normalt ½ prisbasbelopp exkl. moms (ca 29 000 kr 2025)</li>
                <li><strong>Aktiveras:</strong> Bokförs i balansräkningen som tillgång</li>
                <li><strong>Avskrivning:</strong> Skrivs av över nyttjandeperioden</li>
            </ul>
            
            <h3>🏛️ Exempel på investeringar:</h3>
            <ul>
                <li>Nybyggnad av skola eller förskola</li>
                <li>Inköp av fordon (brandbilar, sopbilar, bussar)</li>
                <li>Anläggande av nya gator och vägar</li>
                <li>Installation av nytt IT-system</li>
            </ul>
            
            <p><em>Källor: <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R14 (2023)</a>; <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; <a href="https://controllerutangranser.wordpress.com/2025/10/30/drift-eller-investering/" target="_blank" rel="noopener noreferrer">Lundgren (2025b)</a>.</em></p>
        `
    },
    {
        title: "Vad är driftskostnader?",
        body: `
            <p>Driftskostnader är utgifter för den <strong>löpande verksamheten</strong> som förbrukas direkt under den period de uppkommer.</p>
            
            <div class="info-box">
                <strong>🔧 DRIFT = Löpande kostnader som förbrukas direkt</strong>
                <p>Driftskostnader vidmakthåller tillgångens ursprungliga egenskaper utan att höja standarden eller förlänga livslängden väsentligt.</p>
            </div>
            
            <h3>📋 Kännetecken för drift:</h3>
            <ul>
                <li><strong>Vidmakthåller:</strong> Bevarar tillgångens ursprungliga egenskaper</li>
                <li><strong>Återställer:</strong> Återför till ursprunglig prestationsförmåga</li>
                <li><strong>Förbrukas direkt:</strong> Under den period de uppkommer</li>
                <li><strong>Kostnadsförs:</strong> Direkt i resultaträkningen</li>
            </ul>
            
            <h3>🛠️ Exempel på driftskostnader:</h3>
            <ul>
                <li>Löpande reparationer (t.ex. laga en vattenläcka)</li>
                <li>Akut felavhjälpande underhåll</li>
                <li>Målning och tapetsering</li>
                <li>Städning och fastighetsskötsel</li>
                <li>Utbyte av enstaka glödlampor</li>
                <li>Smärre lagningar och justeringar</li>
            </ul>
            
            <div class="warning-box">
                <strong>⚠️ Viktigt gränsdragning:</strong>
                <p>Om åtgärden höjer standarden <strong>UTÖVER</strong> ursprungsnivån eller förlänger nyttjandeperioden väsentligt → INTE drift!</p>
            </div>
            
            <p><em>Källor: <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R14 (2023)</a>; <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>.</em></p>
        `
    },
    {
        title: "Komponentavskrivning – Nyckeln till förståelse",
        body: `
            <p><strong>Komponentavskrivning</strong> innebär att byggnader delas upp i komponenter med olika avskrivningstider. Detta är helt avgörande för att förstå begreppet reinvestering!</p>
            
            <div class="info-box">
                <strong>🧩 VARFÖR KOMPONENTAVSKRIVNING?</strong>
                <ul>
                    <li><strong>Krav:</strong> Explicit krav enligt RKR R4 sedan 2014</li>
                    <li><strong>Rättvisande:</strong> Ger en mer rättvisande bild av tillgångens värde</li>
                    <li><strong>Speglar verkligheten:</strong> Olika delar förbrukas olika snabbt</li>
                    <li><strong>Avgörande:</strong> Nyckeln för att förstå reinvestering</li>
                </ul>
            </div>
            
            <h3>🏠 Typiska komponenter i en byggnad:</h3>
            <ul>
                <li><strong>Stomme:</strong> 50-80 år</li>
                <li><strong>Fasad:</strong> 30-50 år</li>
                <li><strong>Tak:</strong> 25-40 år</li>
                <li><strong>Fönster:</strong> 30-40 år</li>
                <li><strong>Ventilation:</strong> 20-30 år</li>
                <li><strong>Hissar:</strong> 20-25 år</li>
                <li><strong>Våtutrymmen:</strong> 15-25 år</li>
            </ul>
            
            <div class="warning-box">
                <strong>📊 Varje komponent:</strong>
                <ul>
                    <li>Har ett <strong>eget anskaffningsvärde</strong></li>
                    <li>Skrivs av <strong>separat</strong> enligt sin nyttjandeperiod</li>
                    <li>Har ett <strong>bokfört värde</strong> i balansräkningen</li>
                </ul>
            </div>
            
            <p><em>Källor: <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; RKR Praxisundersökning (2023).</em></p>
        `
    },
    {
        title: "Vad är en reinvestering?",
        body: `
            <p><strong>Reinvestering</strong> uppstår när en befintlig komponent ersätts med en ny komponent. Detta är kärnan i detta quiz!</p>
            
            <div class="info-box">
                <strong>🔄 REINVESTERING = Byte av befintlig komponent</strong>
                <p>När en gammal komponent ersätts med en ny utrangeras det gamla och det nya aktiveras som investering.</p>
            </div>
            
            <h3>📋 Så fungerar reinvestering:</h3>
            <ol>
                <li>Den gamla komponenten har ett <strong>bokfört värde</strong> i balansräkningen</li>
                <li>Hela komponenten eller <strong>väsentlig del</strong> av komponenten byts ut</li>
                <li>Det gamla komponentens kvarvarande bokförda värde <strong>utrangeras</strong> (= kostnad)</li>
                <li>Den nya komponenten <strong>aktiveras</strong> som investering (= tillgång)</li>
                <li>Den nya komponenten skrivs av över sin <strong>nya nyttjandeperiod</strong></li>
            </ol>
            
            <h3>🏗️ Exempel på reinvestering:</h3>
            <ul>
                <li>Byte av alla fönster i en fastighet (om fönster är en komponent)</li>
                <li>Nytt ventilationssystem ersätter gammalt system</li>
                <li>Nytt tak ersätter gammalt tak</li>
                <li>Nya LED-armaturer ersätter gamla kvicksilverarmaturer (om armaturer är egen komponent)</li>
            </ul>
            
            <div class="warning-box">
                <strong>🎯 Viktigt att förstå:</strong>
                <ul>
                    <li>Reinvestering <strong>ÄR</strong> en investering (aktiveras)</li>
                    <li>Reinvestering är <strong>INTE</strong> driftkostnad</li>
                    <li>Gäller <strong>oavsett</strong> om nya komponenten har samma eller bättre egenskaper</li>
                    <li><strong>Förutsätter</strong> att tillgången är komponentindelad</li>
                </ul>
            </div>
            
            <p><em>Källor: <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; SKR (2011).</em></p>
        `
    },
    {
        title: "Praktiska exempel och gränsdragning",
        body: `
            <p>Nu ska vi titta på praktiska exempel för att förstå hur man avgör om något är investering, reinvestering eller drift!</p>
            
            <div class="info-box">
                <strong>🪟 EXEMPEL 1: FÖNSTER</strong>
                <p><em>Scenario: Kommunen byter fönster i en skola från 1990</em></p>
                <ul>
                    <li>Om fönster <strong>ÄR</strong> en komponent → <strong>Reinvestering</strong></li>
                    <li>Om fönster <strong>INTE</strong> är en komponent → Kan vara planerat underhåll/drift</li>
                    <li>Om endast ett trasigt glas byts → <strong>Drift</strong></li>
                    <li>Om fönsterkarmar målas → <strong>Drift</strong></li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>🏠 EXEMPEL 2: TAK</strong>
                <p><em>Scenario: Ett tak från 1995 behöver åtgärdas</em></p>
                <ul>
                    <li>Byte av hela taket → <strong>Reinvestering</strong> (om tak är komponent)</li>
                    <li>Laga en lokal läcka → <strong>Drift</strong></li>
                    <li>Byte av några takpannor → <strong>Drift</strong></li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>💡 EXEMPEL 3: GATUBELYSNING</strong>
                <p><em>Scenario: 500 armaturer byts från kvicksilver till LED</em></p>
                <ul>
                    <li>Om armaturer är egen komponent → <strong>Reinvestering</strong></li>
                    <li>Byte av enstaka armatur → Kan vara <strong>drift</strong></li>
                    <li>Byte av glödlampa i armatur → <strong>Drift</strong></li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>🔍 TRE FRÅGOR FÖR ATT AVGÖRA:</strong>
                <ol>
                    <li>Är tillgången <strong>komponentindelad</strong> enligt kommunens riktlinjer?</li>
                    <li>Ersätts en <strong>hel komponent</strong> eller väsentlig del av komponenten?</li>
                    <li>Har den gamla komponenten ett <strong>bokfört värde</strong>?</li>
                </ol>
                <p><strong>JA</strong> på alla tre → <strong>Reinvestering</strong><br>
                <strong>NEJ</strong> på någon → Troligen drift/underhåll</p>
            </div>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem kluriga frågor väntar som testar din förståelse av investering, reinvestering och drift. Lycka till! 🎯</p>
            
            <p><em>Källor: <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; <a href="https://controllerutangranser.wordpress.com/2025/11/27/investering-reinvestering-eller-drift/" target="_blank" rel="noopener noreferrer">Lundgren (2025a)</a>. Se även det tidigare quizet: <a href="https://kentlundgren.se/program/quiz/10/" target="_blank" rel="noopener noreferrer">Drift eller Investering?</a></em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om investering, reinvestering och drift
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// UPPDATERING: Nytt innehåll med fokus på reinvesteringar
// ============================================
const quizData = [
    {
        question: "Simrishamns kommun installerade ett ventilationssystem i kommunhuset år 2000 för 4 miljoner kronor. Avskrivningstiden sattes till 25 år. År 2025 byts hela ventilationssystemet ut mot ett nytt energieffektivt system för 6 miljoner kronor. Ventilation är en egen komponent enligt kommunens riktlinjer. Hur ska utbytet redovisas?",
        answers: [
            "a) Som driftkostnad på 6 miljoner kronor eftersom det är underhåll av befintlig fastighet",
            "b) Som reinvestering på 6 miljoner kronor med utrangering av kvarvarande bokfört värde på 0 kronor (systemet är fullt avskrivet)",
            "c) Som reinvestering på 2 miljoner kronor (skillnaden mot ursprungligt värde) och driftkostnad på 4 miljoner kronor",
            "d) Som planerat underhåll eftersom man bara ersätter något som var trasigt"
        ],
        correct: 1, // Index 1 = b
        explanation: `
            <strong>✓ RÄTT SVAR: b) Som reinvestering på 6 miljoner kronor med utrangering av kvarvarande bokfört värde på 0 kronor</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Efter 25 år (2000-2025) är det gamla systemet <strong>fullt avskrivet</strong> och har ett bokfört värde på <strong>0 kr</strong>. När hela komponenten byts ut är det en <strong>reinvestering</strong> som aktiveras till 6 miljoner kronor.</p>
            
            <div class="info-box">
                <strong>🔑 Nyckelinsikt:</strong>
                <ul>
                    <li>Eftersom det gamla systemet redan är fullt avskrivet blir det <strong>ingen utrangeringskostnad</strong></li>
                    <li>Det spelar <strong>ingen roll</strong> att det nya systemet är energieffektivare</li>
                    <li>Att en komponent byts ut är en <strong>reinvestering</strong> oavsett den nya komponentens egenskaper</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Fel! Det är inte underhåll när hela komponenten byts ut – det är reinvestering.</li>
                <li><strong>Alternativ C:</strong> Fel! Man delar inte upp kostnaden på detta sätt. Hela anskaffningsvärdet aktiveras som investering.</li>
                <li><strong>Alternativ D:</strong> Fel! Planerat underhåll är något annat – här ersätts en hel komponent.</li>
            </ul>
            
            <p><strong>Källor:</strong> <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; <a href="https://controllerutangranser.wordpress.com/2025/11/27/investering-reinvestering-eller-drift/" target="_blank" rel="noopener noreferrer">Lundgren (2025a)</a>.</p>
        `
    },
    {
        question: "En kommunal fastighet har fönster som installerades 1995 för 3 miljoner kronor med 40 års avskrivningstid. År 2025 (efter 30 års avskrivningar) beslutar kommunen att måla om alla fönsterkarmar för 200 000 kronor. Fönster utgör en egen komponent enligt kommunens komponentlista. Hur klassificeras målningen?",
        answers: [
            "a) Som reinvestering eftersom fönster är en komponent och åtgärden påverkar hela denna komponent",
            "b) Som investering eftersom målningen förbättrar fastighetens utseende och därmed värde",
            "c) Som driftkostnad eftersom målningen inte ersätter komponenten utan bara underhåller den",
            "d) Som delreinvestering där 75% (750 000 kr av komponentens bokförda värde) utrangeras"
        ],
        correct: 2, // Index 2 = c
        explanation: `
            <strong>✓ RÄTT SVAR: c) Som driftkostnad eftersom målningen inte ersätter komponenten utan bara underhåller den</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Även om fönster är en egen komponent så <strong>ersätts inte komponenten</strong> (fönstren) när man målar karmarna. Målning är <strong>underhåll</strong> som vidmakthåller den befintliga komponenten.</p>
            
            <div class="info-box">
                <strong>🎯 Avgörande princip:</strong>
                <p>För att det ska vara en reinvestering måste hela komponenten eller en <strong>väsentlig del</strong> av komponenten <strong>bytas ut</strong> – inte bara underhållas.</p>
            </div>
            
            <h3>📋 Vad är skillnaden?</h3>
            
            <ul>
                <li><strong>Byta fönster</strong> → Reinvestering (komponenten ersätts)</li>
                <li><strong>Måla fönsterkarmar</strong> → Drift (komponenten underhålls)</li>
                <li><strong>Byta ett trasigt glas</strong> → Drift (reparation)</li>
            </ul>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Fel! Målning ersätter inte komponenten – den underhåller den bara.</li>
                <li><strong>Alternativ B:</strong> Fel! Att något "ser bättre ut" är inte kriteriet för investering.</li>
                <li><strong>Alternativ D:</strong> Fel! Det finns inget som heter "delreinvestering" på detta sätt i regelverket.</li>
            </ul>
            
            <p><strong>Källor:</strong> <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; <a href="https://controllerutangranser.wordpress.com/2025/11/27/investering-reinvestering-eller-drift/" target="_blank" rel="noopener noreferrer">Lundgren (2025a)</a>.</p>
        `
    },
    {
        question: "Simrishamns kommun har en gatubelysningsanläggning där stolpar, kablar och armaturer redovisas som separata komponenter. Kommunen byter ut 300 gamla armaturer mot nya LED-armaturer. De gamla armaturerna installerades 2010 för totalt 1,5 miljoner kronor med 20 års avskrivningstid. Bytet sker 2025 och de nya LED-armaturerna kostar 2,4 miljoner kronor. Vilket påstående är KORREKT?",
        answers: [
            "a) Detta är en driftkostnad på 2,4 miljoner kronor eftersom det bara är armaturer som byts, inte hela belysningsanläggningen",
            "b) Eftersom LED-lamporna är mer energieffektiva ska merkostnaden mot de gamla armaturerna (0,9 miljoner) aktiveras som investering och resten kostnadsföras som drift",
            "c) Detta är en reinvestering där de nya armaturerna aktiveras för 2,4 miljoner kronor och det kvarvarande bokförda värdet på de gamla armaturerna (0,375 miljoner kr) utrangeras",
            "d) Detta ska redovisas som planerat underhåll eftersom armaturer byts ut regelbundet och därför inte uppfyller kravet på stadigvarande bruk"
        ],
        correct: 2, // Index 2 = c
        explanation: `
            <strong>✓ RÄTT SVAR: c) Detta är en reinvestering där de nya armaturerna aktiveras för 2,4 miljoner kronor och det kvarvarande bokförda värdet på de gamla armaturerna (0,375 miljoner kr) utrangeras</strong>
            
            <h3>💡 Förklaring och beräkning</h3>
            
            <p>Armaturer är enligt förutsättningarna en <strong>egen komponent</strong>. Låt oss räkna på det kvarvarande bokförda värdet:</p>
            
            <div class="info-box">
                <strong>📊 Beräkning av bokfört värde:</strong>
                <ul>
                    <li><strong>Ursprungligt värde:</strong> 1,5 miljoner kr</li>
                    <li><strong>Avskrivningstid:</strong> 20 år</li>
                    <li><strong>Tid sedan installation:</strong> 15 år (2010-2025)</li>
                    <li><strong>Avskrivet:</strong> 15/20 = 75% = 1,125 miljoner kr</li>
                    <li><strong>Kvarvarande:</strong> 25% = 0,375 miljoner kr</li>
                </ul>
            </div>
            
            <h3>🔄 Vad händer vid reinvesteringen?</h3>
            
            <ol>
                <li>De nya LED-armaturerna <strong>aktiveras</strong> för 2,4 miljoner kronor</li>
                <li>Det kvarvarande värdet på de gamla armaturerna (0,375 miljoner kr) <strong>utrangeras</strong> → blir en kostnad i resultaträkningen</li>
            </ol>
            
            <div class="warning-box">
                <strong>🎯 Viktig insikt:</strong>
                <p>Att armaturerna har bättre egenskaper (LED) är <strong>irrelevant</strong> för klassificeringen – det är fortfarande en reinvestering eftersom komponenten byts ut!</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Fel! När en hel komponent byts ut är det reinvestering, inte drift.</li>
                <li><strong>Alternativ B:</strong> Fel! Man delar inte upp kostnaden baserat på förbättrade egenskaper.</li>
                <li><strong>Alternativ D:</strong> Fel! Att armaturer byts ut är en reinvestering när armaturer är en egen komponent.</li>
            </ul>
            
            <p><strong>Källor:</strong> <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; <a href="https://controllerutangranser.wordpress.com/2025/11/27/investering-reinvestering-eller-drift/" target="_blank" rel="noopener noreferrer">Lundgren (2025a)</a>.</p>
        `
    },
    {
        question: "En kommun har två fastigheter där tak behöver åtgärdas:\n\nFastighet A: Taket installerades 1998 för 2 miljoner kr (40 års avskrivning). Några takpannor har lossnat och byts ut för 50 000 kr. Tak är INTE en egen komponent utan ingår i byggnadens totala värde.\n\nFastighet B: Taket installerades 1998 för 2 miljoner kr (40 års avskrivning). Hela taket byts ut 2025 för 3 miljoner kr. Tak ÄR en egen komponent.\n\nHur ska respektive åtgärd redovisas?",
        answers: [
            "a) Fastighet A: Reinvestering. Fastighet B: Reinvestering",
            "b) Fastighet A: Drift. Fastighet B: Drift",
            "c) Fastighet A: Drift. Fastighet B: Reinvestering",
            "d) Fastighet A: Planerat underhåll (kostnadsförs). Fastighet B: Planerat underhåll (kostnadsförs)"
        ],
        correct: 2, // Index 2 = c
        explanation: `
            <strong>✓ RÄTT SVAR: c) Fastighet A: Drift. Fastighet B: Reinvestering</strong>
            
            <h3>💡 Förklaring för Fastighet A</h3>
            
            <p><strong>Byte av några takpannor</strong> är reparation/underhåll som <strong>vidmakthåller</strong> det befintliga taket = <strong>driftkostnad</strong>.</p>
            
            <div class="info-box">
                <strong>📋 Viktigt:</strong>
                <p>Detta gäller <strong>oavsett</strong> om tak är en komponent eller inte – det är bara några takpannor som byts, inte hela taket!</p>
            </div>
            
            <h3>💡 Förklaring för Fastighet B</h3>
            
            <p>Här byts <strong>hela taket</strong> ut och tak <strong>ÄR</strong> en egen komponent. Detta innebär:</p>
            
            <div class="info-box">
                <strong>📊 Beräkning och redovisning:</strong>
                <ul>
                    <li><strong>Ursprungligt värde:</strong> 2 miljoner kr</li>
                    <li><strong>Tid sedan installation:</strong> 27 år (1998-2025)</li>
                    <li><strong>Kvarvarande:</strong> 13/40 = 32,5% = 0,65 miljoner kr</li>
                    <li><strong>Utrangeringskostnad:</strong> 0,65 miljoner kr (belastar resultatet)</li>
                    <li><strong>Nytt tak aktiveras:</strong> 3 miljoner kr (tillgång i balansräkningen)</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>🔑 Nyckelinsikt:</strong>
                <p>Om tak <strong>INTE</strong> hade varit en egen komponent i Fastighet B hade åtgärden kunnat klassificeras som planerat underhåll istället. Men med <strong>komponentredovisning</strong> blir det en reinvestering!</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Fel! Fastighet A är bara byte av några takpannor = drift.</li>
                <li><strong>Alternativ B:</strong> Fel! Fastighet B är byte av hel komponent = reinvestering.</li>
                <li><strong>Alternativ D:</strong> Fel! Fastighet B uppfyller kriterierna för reinvestering.</li>
            </ul>
            
            <p><strong>Källor:</strong> <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; <a href="https://controllerutangranser.wordpress.com/2025/11/27/investering-reinvestering-eller-drift/" target="_blank" rel="noopener noreferrer">Lundgren (2025a)</a>.</p>
        `
    },
    {
        question: "En controller i en kommun funderar på gränsdragningen mellan investering och drift. Tre påståenden diskuteras på ett möte:\n\nPåstående 1: \"Om vi byter ut komponenter innan de är fullt avskrivna kommer utrangeringskostnaden att belasta vårt resultat negativt, därför bör vi alltid vänta tills komponenten är fullt avskriven innan vi gör reinvesteringen.\"\n\nPåstående 2: \"En reinvestering förbättrar alltid kommunens resultat kortsiktigt eftersom utgifter som tidigare var driftskostnader nu aktiveras i balansräkningen.\"\n\nPåstående 3: \"Om vi tillämpar komponentredovisning blir det automatiskt så att fler åtgärder klassas som reinvesteringar istället för som planerat underhåll jämfört med om vi inte hade komponentredovisning.\"\n\nVilket/vilka påstående(n) är KORREKT(A)?",
        answers: [
            "a) Endast påstående 1",
            "b) Endast påstående 3",
            "c) Påstående 2 och 3",
            "d) Alla tre påståenden"
        ],
        correct: 1, // Index 1 = b
        explanation: `
            <strong>✓ RÄTT SVAR: b) Endast påstående 3</strong>
            
            <h3>🔍 Analys av påståendena</h3>
            
            <div class="warning-box">
                <strong>❌ Påstående 1 är FELAKTIGT</strong>
                <p>Att vänta med reinvestering bara för att undvika utrangeringskostnad är <strong>inte god ekonomisk hushållning</strong>. Utrangeringskostnaden är en redovisningsmässig konsekvens som speglar att den gamla komponenten förlorat sitt värde. Att vänta kan leda till:</p>
                <ul>
                    <li>Högre driftkostnader för reparationer</li>
                    <li>Sämre funktion i verksamheten</li>
                    <li>Ökade risker för haverier</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>❌ Påstående 2 är FELAKTIGT</strong>
                <p>Detta är ett <strong>vanligt missförstånd</strong>! En reinvestering påverkar inte resultatet positivt per automatik:</p>
                <ul>
                    <li><strong>Utrangeringskostnaden</strong> (det gamla komponentens bokförda värde) belastar ju resultatet negativt samma år</li>
                    <li>Det är först på <strong>längre sikt</strong>, när avskrivningarna på den nya komponenten är lägre än vad kostnaderna för drift och reparationer skulle ha varit, som det kan finnas en resultatförbättring</li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>✅ Påstående 3 är KORREKT</strong>
                <p>När en kommun tillämpar <strong>komponentredovisning</strong> blir byte av en hel komponent (eller väsentlig del av komponenten) en <strong>reinvestering</strong>.</p>
                <ul>
                    <li><strong>Innan</strong> komponentredovisning var obligatorisk kunde samma åtgärd klassas som "planerat underhåll" och kostnadsföras direkt</li>
                    <li><strong>Med</strong> komponentansatsen aktiveras fler åtgärder som investeringar/reinvesteringar</li>
                    <li>Detta är <strong>poängen med reformen</strong> – att ge en mer rättvisande bild av tillgångarnas värde</li>
                </ul>
            </div>
            
            <h3>🎯 Sammanfattning</h3>
            
            <p>Komponentredovisning förändrar hur vi ser på åtgärder i fastigheter. Det som tidigare kunde vara "underhåll" blir nu ofta "reinvestering" – men det betyder <strong>inte</strong> att resultatet automatiskt förbättras, och det är <strong>inte</strong> ett skäl att skjuta upp nödvändiga åtgärder!</p>
            
            <p><strong>Källor:</strong> <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR R4 (2022)</a>; SKR (2011); <a href="https://controllerutangranser.wordpress.com/2025/11/27/investering-reinvestering-eller-drift/" target="_blank" rel="noopener noreferrer">Lundgren (2025a)</a>.</p>
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
// Visar slutresultat och möjlighet att starta om
// ============================================
function showResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    
    let message = '';
    if (percentage === 100) {
        message = 'Perfekt! Du har helt koll på skillnaden mellan investering, reinvestering och drift! 🌟 Komponentavskrivning är inget problem för dig!';
    } else if (percentage >= 80) {
        message = 'Mycket bra! Du har god förståelse för reinvesteringar och komponentavskrivning. 👍';
    } else if (percentage >= 60) {
        message = 'Bra jobbat! Du har grundläggande förståelse, men det finns mer att utforska. Gå gärna igenom slidesen igen! 📚';
    } else {
        message = 'Det finns mycket att lära! Reinvesteringar och komponentavskrivning är komplexa begrepp – läs igenom materialet igen så får du bättre grepp om det. 💪';
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
                    <li><strong>Investering:</strong> Nyanskaffning av tillgång för stadigvarande bruk</li>
                    <li><strong>Reinvestering:</strong> Byte av en befintlig komponent mot en ny</li>
                    <li><strong>Drift:</strong> Underhåll som vidmakthåller ursprungliga egenskaper</li>
                    <li><strong>Komponentavskrivning:</strong> Nyckeln till att förstå reinvestering</li>
                    <li><strong>Utrangering:</strong> Det bokförda värdet på gammal komponent blir en kostnad</li>
                    <li>Vid osäkerhet – kontakta alltid din controller eller ekonomifunktion!</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="https://controllerutangranser.wordpress.com/2025/11/27/investering-reinvestering-eller-drift/" target="_blank" rel="noopener noreferrer">Läs blogginlägget om investering, reinvestering och drift</a></li>
                    <li><a href="https://controllerutangranser.wordpress.com/2025/10/30/drift-eller-investering/" target="_blank" rel="noopener noreferrer">Läs blogginlägget om drift eller investering</a></li>
                    <li><a href="https://kentlundgren.se/program/quiz/10/" target="_blank" rel="noopener noreferrer">Testa det tidigare quizet: Drift eller Investering?</a></li>
                </ul>
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
// Quiz är nu redo att användas!
// Skapad: 2025-11-27
// Ämne: Investering, reinvestering och drift
// Fokus: Reinvesteringar och komponentavskrivning
// Författare: Kent Lundgren med AI-assistans (Claude Opus 4.5)
// ============================================

