// ============================================
// JAVASCRIPT FÖR QUIZ: NORDISKA CFO:ER 2025
// Mellan Excel och AI – vad säger forskningen och verkligheten?
//
// Skapad: 2025-11-28
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna glad_och_ledsen_ekonom1.jpg och glad_och_ledsen_ekonom2.jpg
// växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// UPPDATERING: Nu med två bilder istället för tre (anpassat för CFO-temat)
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // UPPDATERING: Två bilder (glad_och_ledsen_ekonom1.jpg och glad_och_ledsen_ekonom2.jpg)
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
// INTRODUKTIONSTEXTER - Fem slides om nordiska CFO:er
// Baserade på Hypergenes rapport "Confessions of a Nordic CFO 2025"
// och akademisk forskning om beslutsfattande
// ============================================
const introPages = [
    {
        title: "Nordiska CFO:er 2025 – mellan Excel och AI",
        body: `
            <p>Välkommen till ett quiz om nordiska ekonomichefers vardag! Detta quiz baseras på <strong>Nordens största CFO-undersökning</strong> med 438 deltagare från Sverige, Norge och Finland.</p>
            
            <div class="info-box">
                <strong>📊 Om rapporten</strong>
                <p>Hypergenes rapport "Confessions of a Nordic CFO 2025" ger en unik inblick i ekonomiansvariga chefers vardag, utmaningar och framtidssyn.</p>
            </div>
            
            <h3>🎯 Centrala teman i rapporten:</h3>
            <ul>
                <li><strong>Verktygsanvändning:</strong> Excel som "bästa vän" eller "nödvändigt ont"?</li>
                <li><strong>Beslutsfattande:</strong> Data vs. magkänsla – vad styr?</li>
                <li><strong>Systemintegration:</strong> Fragmenterade lösningar och dubbelarbete</li>
                <li><strong>AI och framtiden:</strong> Möjligheter och realistiska förväntningar</li>
            </ul>
            
            <div class="warning-box">
                <strong>💡 Kritiskt perspektiv</strong>
                <p>Hypergene säljer FP&A-lösningar – rapporten bör läsas med detta i åtanke. Vi belyser även akademiska perspektiv som nyanserar bilden.</p>
            </div>
            
            <p><em>Källa: <a href="https://www.hypergene.com/sv/confessions-of-a-nordic-cfo" target="_blank" rel="noopener noreferrer">Hypergene (2025)</a>. Se även: <a href="https://controllerutangranser.wordpress.com/2025/11/28/confessions-of-a-nordic-cfo-2025-en-kritisk-granskning-av-nordiska-ekonomichefers-vardag/" target="_blank" rel="noopener noreferrer">Lundgren (2025)</a>.</em></p>
        `
    },
    {
        title: "Vad visar undersökningen?",
        body: `
            <p>Rapporten avslöjar intressanta mönster i hur nordiska CFO:er arbetar och fattar beslut:</p>
            
            <div class="info-box">
                <strong>📈 Nyckeltal från undersökningen</strong>
                <ul>
                    <li><strong>80%</strong> använder Excel – <strong>45%</strong> kallar det sin "bästa vän"</li>
                    <li><strong>53%</strong> kombinerar Excel med 2+ andra system</li>
                    <li><strong>70%</strong> har godkänt budgetar de inte trott på</li>
                    <li><strong>2 av 3</strong> fattar beslut baserat på magkänsla</li>
                    <li><strong>87%</strong> upplever att prognoser ändras innan de når ledningen</li>
                    <li><strong>41%</strong> anger dubbelkontroll av data som största tidstjuven</li>
                </ul>
            </div>
            
            <h3>🇳🇴 🇸🇪 🇫🇮 Skillnader mellan länderna:</h3>
            <ul>
                <li><strong>Norge:</strong> 55% kallar Excel sin "bästa vän" – mest Excel-romantiskt</li>
                <li><strong>Sverige:</strong> 44% – mellanläge</li>
                <li><strong>Finland:</strong> 40% – och 33% ser Excel som "nödvändigt ont"</li>
            </ul>
            
            <div class="warning-box">
                <strong>🤔 Reflektion</strong>
                <p>Innebär detta att nordiska CFO:er är irrationella? Eller finns det goda skäl till intuitionsbaserat beslutsfattande? Låt oss se vad forskningen säger!</p>
            </div>
            
            <p><em>Källa: <a href="https://www.hypergene.com/sv/confessions-of-a-nordic-cfo" target="_blank" rel="noopener noreferrer">Hypergene (2025)</a>.</em></p>
        `
    },
    {
        title: "Vad säger forskningen?",
        body: `
            <p>Akademisk forskning ger viktiga perspektiv på de utmaningar som rapporten belyser:</p>
            
            <div class="info-box">
                <strong>🧠 Begränsad rationalitet (<a href="https://doi.org/10.2307/1884852" target="_blank" rel="noopener noreferrer">Simon, 1955</a>)</strong>
                <p>Nobelpristagaren Herbert Simon visade att beslutsfattare väljer <strong>"tillräckligt bra"</strong> lösningar, inte optimala – detta är ett grundvillkor för organisationer, inte en brist.</p>
                <p>Begreppet <strong>"satisficing"</strong> beskriver hur vi nöjer oss med det första alternativet som uppfyller minimikraven.</p>
            </div>
            
            <div class="info-box">
                <strong>💡 Intuition som expertis (<a href="https://doi.org/10.5465/amr.2007.23463682" target="_blank" rel="noopener noreferrer">Dane & Pratt, 2007</a>)</strong>
                <p>Erfarna chefers intuition bygger på <strong>mönsterigenkänning</strong> och kan vara överlägsen analys i komplexa situationer med stor osäkerhet.</p>
                <p>Intuition är mest effektiv för <strong>ostrukturerade strategiska beslut</strong> – just sådana som CFO:er fattar.</p>
            </div>
            
            <h3>📊 ERP/BI-implementering – utmaningar:</h3>
            <ul>
                <li><strong>66%</strong> av ERP-projekt överskrider tid eller budget (Statista, 2022)</li>
                <li>Framgång kräver <strong>kulturförändring</strong>, inte bara teknik</li>
                <li>Offentlig vs privat sektor: Skillnaderna är <strong>mindre än förväntat</strong> (Van Helden & Reichard, 2016)</li>
            </ul>
            
            <p><em>Källor: <a href="https://doi.org/10.2307/1884852" target="_blank" rel="noopener noreferrer">Simon (1955)</a>; <a href="https://doi.org/10.5465/amr.2007.23463682" target="_blank" rel="noopener noreferrer">Dane & Pratt (2007)</a>; <a href="https://www.statista.com/statistics/1368071/erp-implementation-success-rate/" target="_blank" rel="noopener noreferrer">Statista (2022)</a>; <a href="https://doi.org/10.1080/14719037.2015.1014396" target="_blank" rel="noopener noreferrer">Van Helden & Reichard (2016)</a>.</em></p>
        `
    },
    {
        title: "Är bättre system lösningen?",
        body: `
            <p>En kritisk reflektion över rapportens budskap och vad forskningen säger om systemimplementering:</p>
            
            <div class="warning-box">
                <strong>⚠️ Kom ihåg</strong>
                <p>Hypergene säljer FP&A-lösningar (Financial Planning & Analysis). Rapporten bör därför läsas med ett kritiskt öga – men det gör den inte mindre intressant!</p>
            </div>
            
            <h3>🔍 Nyansering av rapportens budskap:</h3>
            <ul>
                <li><strong>Intuitionsbaserat beslutsfattande</strong> är inte nödvändigtvis irrationellt</li>
                <li><strong>"Magkänsla"</strong> hos erfarna CFO:er bygger ofta på årtionden av mönsterigenkänning</li>
                <li><strong>Systemfragmentering</strong> är ett reellt problem, men teknik löser sällan organisatoriska utmaningar</li>
            </ul>
            
            <div class="info-box">
                <strong>🎯 Forskningens slutsats</strong>
                <p><em>"Kombinera analytiska och intuitiva metoder – välj inte mellan dem"</em></p>
                <p>– Hodgkinson & Sadler-Smith (2003)</p>
            </div>
            
            <h3>💭 Viktiga frågor:</h3>
            <ul>
                <li>Är det alltid dåligt att godkänna en budget man inte "tror på"?</li>
                <li>Kan intuition ibland vara snabbare och bättre än dataanalys?</li>
                <li>Vad händer när vi förlorar mänskligt omdöme till förmån för algoritmer?</li>
            </ul>
            
            <p><em>Källa: <a href="https://doi.org/10.1348/096317903765913722" target="_blank" rel="noopener noreferrer">Hodgkinson & Sadler-Smith (2003)</a>; <a href="https://controllerutangranser.wordpress.com/2025/11/28/confessions-of-a-nordic-cfo-2025-en-kritisk-granskning-av-nordiska-ekonomichefers-vardag/" target="_blank" rel="noopener noreferrer">Lundgren (2025)</a>.</em></p>
        `
    },
    {
        title: "Förutsättningar för framgång",
        body: `
            <p>Vad krävs för att integrerade system och AI-lösningar verkligen ska fungera i praktiken?</p>
            
            <div class="info-box">
                <strong>🏆 Kritiska framgångsfaktorer (<a href="https://doi.org/10.1080/08874417.2010.11645404" target="_blank" rel="noopener noreferrer">Yeoh & Koronios, 2010</a>)</strong>
                <ul>
                    <li><strong>Stöd från högsta ledningen</strong> – inte bara godkännande utan aktivt engagemang</li>
                    <li><strong>Organisatorisk förändringsberedskap</strong> – vilja att anpassa processer</li>
                    <li><strong>Hög datakvalitet</strong> – systemet är inte bättre än datan som matas in</li>
                    <li><strong>Stödjande organisationskultur</strong> – tillit och tolerans för förändring</li>
                    <li><strong>Realistiska förväntningar</strong> – system automatiserar, men ersätter inte omdöme</li>
                    <li><strong>Tillräcklig utbildning</strong> – teknisk kompetens och förståelse för helheten</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>💬 Citat från rapporten</strong>
                <p><em>"För att lyckas behöver vi kombinera AI och mänskligt omdöme – inte välja mellan dem"</em></p>
                <p>– Espen Sannerud, CFO 3 Norske</p>
            </div>
            
            <h3>📚 Läs mer:</h3>
            <ul>
                <li><a href="https://www.hypergene.com/sv/confessions-of-a-nordic-cfo" target="_blank" rel="noopener noreferrer">Hämta rapporten från Hypergene</a></li>
                <li><a href="Hypergene_CFO_rapport.pdf" target="_blank" rel="noopener noreferrer">Läs rapporten (PDF)</a></li>
                <li><a href="https://controllerutangranser.wordpress.com/2025/11/28/confessions-of-a-nordic-cfo-2025-en-kritisk-granskning-av-nordiska-ekonomichefers-vardag/" target="_blank" rel="noopener noreferrer">Kritisk granskning på bloggen</a></li>
                <li><a href="https://www.hypergene.com/sv" target="_blank" rel="noopener noreferrer">Hypergenes hemsida</a></li>
            </ul>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av CFO:ers vardag, forskning och framgångsfaktorer. Lycka till! 🎯</p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om nordiska CFO:er och beslutsfattande
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Enligt Hypergenes rapport \"Confessions of a Nordic CFO 2025\" – vilket nordiskt land har högst andel CFO:er som kallar Excel sin \"bästa vän\"?",
        answers: [
            "a) Sverige (44%)",
            "b) Finland (40%)",
            "c) Norge (55%)",
            "d) Danmark (48%)"
        ],
        correct: 2, // Index 2 = c) Norge
        explanation: `
            <strong>✓ RÄTT SVAR: c) Norge (55%)</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Norge framstår som mest <strong>"Excel-romantiskt"</strong> i undersökningen, med hela 55% av CFO:erna som kallar Excel sin "bästa vän".</p>
            
            <div class="info-box">
                <strong>🇳🇴 🇸🇪 🇫🇮 Jämförelse mellan länderna:</strong>
                <ul>
                    <li><strong>Norge:</strong> 55% – högst andel "Excel-romantiker"</li>
                    <li><strong>Sverige:</strong> 44% – mellanläge</li>
                    <li><strong>Finland:</strong> 40% – och dessutom har 33% av finländarna en mer kritisk syn och betraktar Excel som ett "nödvändigt ont"</li>
                </ul>
            </div>
            
            <h3>🤔 Varför skiljer det sig?</h3>
            
            <p>Rapporten spekulerar inte i orsakerna, men det kan ha att göra med:</p>
            <ul>
                <li>Olika grad av digitalisering i olika branscher</li>
                <li>Organisatoriska kulturer och traditioner</li>
                <li>Tillgång till och erfarenhet av alternativa verktyg</li>
            </ul>
            
            <div class="warning-box">
                <strong>📝 Obs!</strong>
                <p>Danmark ingår inte i undersökningen – alternativ D är en distraktor. Rapporten omfattar endast Sverige, Norge och Finland.</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://www.hypergene.com/sv/confessions-of-a-nordic-cfo" target="_blank" rel="noopener noreferrer">Hypergene (2025)</a>.</p>
        `
    },
    {
        question: "Herbert Simons teori om \"bounded rationality\" (begränsad rationalitet) innebär att beslutsfattare i organisationer typiskt:",
        answers: [
            "a) Alltid fattar optimala beslut när de har tillgång till tillräcklig data",
            "b) Väljer det första alternativet som uppfyller minimikraven (\"satisficing\")",
            "c) Undviker att fatta beslut tills all information finns tillgänglig",
            "d) Delegerar alla komplexa beslut till expertgrupper"
        ],
        correct: 1, // Index 1 = b) Satisficing
        explanation: `
            <strong>✓ RÄTT SVAR: b) Väljer det första alternativet som uppfyller minimikraven ("satisficing")</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Nobelpristagaren Herbert Simon introducerade begreppet <strong>"bounded rationality"</strong> (begränsad rationalitet) 1955. Han argumenterade att beslutsfattare inte fattar <strong>optimala</strong> beslut utan <strong>"tillfredsställande"</strong> beslut.</p>
            
            <div class="info-box">
                <strong>🧠 Vad är "satisficing"?</strong>
                <p>Ordet är en sammanslagning av "satisfy" (tillfredsställa) och "suffice" (räcka till). Det beskriver hur vi:</p>
                <ul>
                    <li>Nöjer oss med det <strong>första alternativet</strong> som uppfyller minimikraven</li>
                    <li>Slutar söka efter bättre alternativ när vi hittat något "tillräckligt bra"</li>
                    <li>Agerar rationellt <strong>inom våra kognitiva begränsningar</strong></li>
                </ul>
            </div>
            
            <h3>🔗 Koppling till rapporten</h3>
            
            <p>När 70% av CFO:erna uppger att de godkänt budgetar de inte trott på, kan detta förstås genom bounded rationality:</p>
            <ul>
                <li>Det är inte irrationellt – det är pragmatiskt givet tidbrist och osäkerhet</li>
                <li>En "tillräckligt bra" budget som godkänns kan vara mer värdefull än en "perfekt" budget som aldrig blir klar</li>
            </ul>
            
            <div class="warning-box">
                <strong>⚠️ Viktigt att förstå:</strong>
                <p>Bounded rationality är inte ett fel som kan "fixas" med bättre system – det är ett grundvillkor för mänskligt beslutsfattande i organisationer.</p>
            </div>
            
            <p><strong>Källa:</strong> Simon, H.A. (1955) 'A Behavioral Model of Rational Choice', <em>The Quarterly Journal of Economics</em>, 69(1), s. 99–118. <a href="https://doi.org/10.2307/1884852" target="_blank" rel="noopener noreferrer">[DOI]</a></p>
        `
    },
    {
        question: "Enligt forskningen av Dane och Pratt (2007) om intuition i beslutsfattande – när är intuition mest effektiv?",
        answers: [
            "a) För välstrukturerade matematiska problem med tydliga rätt och fel",
            "b) För ostrukturerade strategiska beslut i komplexa miljöer",
            "c) Enbart för nybörjare som saknar erfarenhet att analysera data",
            "d) Aldrig – intuition leder alltid till sämre beslut än analys"
        ],
        correct: 1, // Index 1 = b) Ostrukturerade strategiska beslut
        explanation: `
            <strong>✓ RÄTT SVAR: b) För ostrukturerade strategiska beslut i komplexa miljöer</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Dane och Pratt (2007) visade att intuition är mest lämplig för <strong>"executive decisions"</strong> – beslut som präglas av komplexitet, osäkerhet och tidsbrist.</p>
            
            <div class="info-box">
                <strong>🎯 När fungerar intuition bäst?</strong>
                <ul>
                    <li><strong>Strategiska beslut:</strong> Investeringar, förvärv, affärsutveckling</li>
                    <li><strong>Personalfrågor:</strong> Rekrytering, teamsammansättning</li>
                    <li><strong>Krissituationer:</strong> När snabba beslut krävs</li>
                    <li><strong>Komplex osäkerhet:</strong> När all data aldrig kan samlas in</li>
                </ul>
            </div>
            
            <h3>🧠 Vad är expertintuition?</h3>
            
            <p>Erfarna chefers "magkänsla" är inte mystik – det är <strong>mönsterigenkänning</strong> baserad på:</p>
            <ul>
                <li>Årtionden av erfarenhet</li>
                <li>Tusentals tidigare beslutssituationer</li>
                <li>Djup branschkunskap</li>
                <li>Undermedveten bearbetning av komplex information</li>
            </ul>
            
            <div class="warning-box">
                <strong>📊 Viktigt!</strong>
                <p>För <strong>väldefinierade matematiska problem</strong> är analytiska metoder överlägsna. Intuition ska komplettera, inte ersätta, analys.</p>
                <p>Forskningens slutsats: <strong>Kombinera</strong> analytiska och intuitiva metoder!</p>
            </div>
            
            <p><strong>Källa:</strong> Dane, E. och Pratt, M.G. (2007) 'Exploring Intuition and Its Role in Managerial Decision Making', <em>Academy of Management Review</em>, 32(1), s. 33–54. <a href="https://doi.org/10.5465/amr.2007.23463682" target="_blank" rel="noopener noreferrer">[DOI]</a></p>
        `
    },
    {
        question: "Forskning om ERP-implementering (Enterprise Resource Planning) visar att majoriteten av projekt historiskt har:",
        answers: [
            "a) Lyckats på första försöket utan komplikationer",
            "b) Överskridit tid eller budget",
            "c) Avbrutits på grund av tekniska problem",
            "d) Genomförts snabbare än planerat"
        ],
        correct: 1, // Index 1 = b) Överskridit tid eller budget
        explanation: `
            <strong>✓ RÄTT SVAR: b) Överskridit tid eller budget</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Enligt Statista (2022) överskred <strong>66% av ERP-implementeringar</strong> antingen tidsplan eller budget under 2021. Detta är ett återkommande mönster i forskningen.</p>
            
            <div class="info-box">
                <strong>📊 Varför misslyckas så många projekt?</strong>
                <p>Forskningen visar att det sällan handlar om tekniken i sig:</p>
                <ul>
                    <li><strong>Underskattad komplexitet:</strong> Organisatoriska förändringar tar tid</li>
                    <li><strong>Motstånd mot förändring:</strong> Användare håller fast vid gamla arbetssätt</li>
                    <li><strong>Bristande ledningsstöd:</strong> Projekt prioriteras inte tillräckligt</li>
                    <li><strong>Datakvalitetsproblem:</strong> "Garbage in, garbage out"</li>
                    <li><strong>Orealistiska förväntningar:</strong> Tekniken förväntades lösa organisatoriska problem</li>
                </ul>
            </div>
            
            <h3>🔗 Koppling till CFO-rapporten</h3>
            
            <p>Detta nyanserar rapportens budskap om behovet av bättre system:</p>
            <ul>
                <li>Nya system är inte en "quick fix"</li>
                <li>Implementering kräver <strong>kulturförändring</strong></li>
                <li>Framgång beror mer på <strong>organisationen</strong> än på tekniken</li>
            </ul>
            
            <div class="warning-box">
                <strong>💡 Insikt</strong>
                <p>Att 53% av CFO:erna kombinerar Excel med 2+ system kan delvis bero på <strong>misslyckade systemintegreringar</strong> – inte nödvändigtvis på att de föredrar fragmentering.</p>
            </div>
            
            <p><strong>Källa:</strong> Statista (2022) <em>ERP implementation statistics worldwide</em>. <a href="https://www.statista.com/statistics/1368071/erp-implementation-success-rate/" target="_blank" rel="noopener noreferrer">[Statista]</a></p>
        `
    },
    {
        question: "Enligt forskningen om kritiska framgångsfaktorer för Business Intelligence-system (Yeoh & Koronios, 2010) – vilken faktor identifieras konsekvent som mest avgörande?",
        answers: [
            "a) Val av rätt programvaruleverantör",
            "b) Stöd från högsta ledningen",
            "c) Den senaste tekniken",
            "d) Låg initial investeringskostnad"
        ],
        correct: 1, // Index 1 = b) Stöd från högsta ledningen
        explanation: `
            <strong>✓ RÄTT SVAR: b) Stöd från högsta ledningen</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Yeoh och Koronios (2010) och andra forskare visar konsekvent att <strong>stöd från högsta ledningen</strong> är den mest avgörande faktorn för framgång med BI-system.</p>
            
            <div class="info-box">
                <strong>🏆 Vad innebär "stöd från ledningen"?</strong>
                <p>Det handlar inte bara om att ledningen säger "ja" till projektet:</p>
                <ul>
                    <li><strong>Aktivt engagemang:</strong> Ledningen deltar i projektmöten och beslut</li>
                    <li><strong>Resurstilldelning:</strong> Tillräcklig budget och personal</li>
                    <li><strong>Prioritering:</strong> Projektet ses som strategiskt viktigt</li>
                    <li><strong>Signalering:</strong> Ledningen visar att detta är viktigt för hela organisationen</li>
                    <li><strong>Konfliktlösning:</strong> Ledningen tar ansvar för att lösa organisatoriska hinder</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Programvaruleverantör (A):</strong> Viktig, men inte avgörande – de flesta leverantörer har likvärdig funktionalitet</li>
                <li><strong>Senaste tekniken (C):</strong> Kan till och med vara en risk – beprövad teknik är ofta tryggare</li>
                <li><strong>Låg kostnad (D):</strong> Underinvestering är en vanlig orsak till misslyckande</li>
            </ul>
            
            <div class="warning-box">
                <strong>💬 Citat från rapporten</strong>
                <p><em>"För att lyckas behöver vi kombinera AI och mänskligt omdöme – inte välja mellan dem"</em></p>
                <p>– Espen Sannerud, CFO 3 Norske</p>
            </div>
            
            <p><strong>Källa:</strong> Yeoh, W. och Koronios, A. (2010) 'Critical Success Factors for Business Intelligence Systems', <em>Journal of Computer Information Systems</em>, 50(3), s. 23–32. <a href="https://doi.org/10.1080/08874417.2010.11645404" target="_blank" rel="noopener noreferrer">[DOI]</a></p>
            
            <p><em>📚 <strong>Fler källor och fördjupning:</strong> Se den fullständiga referenslistan i bloggtexten <a href="https://controllerutangranser.wordpress.com/2025/11/28/confessions-of-a-nordic-cfo-2025-en-kritisk-granskning-av-nordiska-ekonomichefers-vardag/" target="_blank" rel="noopener noreferrer">"Confessions of a Nordic CFO 2025 – en kritisk granskning"</a>.</em></p>
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
        message = 'Perfekt! Du har helt koll på nordiska CFO:ers vardag och forskningen bakom! 🌟 Du är redo att kombinera Excel, AI och magkänsla!';
    } else if (percentage >= 80) {
        message = 'Mycket bra! Du har god förståelse för både rapportens innehåll och de akademiska perspektiven. 👍';
    } else if (percentage >= 60) {
        message = 'Bra jobbat! Du har grundläggande förståelse, men det finns mer att utforska. Läs gärna bloggtexten och rapporten! 📚';
    } else {
        message = 'Det finns mycket att lära! Både forskningen och praktiken kring beslutsfattande är fascinerande – läs igenom materialet igen! 💪';
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
                    <li><strong>Excel:</strong> Norge mest Excel-romantiskt (55%), Finland mest kritiska</li>
                    <li><strong>Bounded rationality:</strong> Vi väljer "tillräckligt bra", inte optimalt (Simon, 1955)</li>
                    <li><strong>Intuition:</strong> Expertintuition är mönsterigenkänning, inte mystik</li>
                    <li><strong>ERP-projekt:</strong> 66% överskrider tid eller budget</li>
                    <li><strong>Framgångsfaktor #1:</strong> Stöd från högsta ledningen</li>
                    <li><strong>Kombinera:</strong> AI och mänskligt omdöme – inte välja mellan dem!</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="https://controllerutangranser.wordpress.com/2025/11/28/confessions-of-a-nordic-cfo-2025-en-kritisk-granskning-av-nordiska-ekonomichefers-vardag/" target="_blank" rel="noopener noreferrer">Läs kritisk granskning på bloggen (inkl. fullständig referenslista)</a></li>
                    <li><a href="https://www.hypergene.com/sv/confessions-of-a-nordic-cfo" target="_blank" rel="noopener noreferrer">Hämta rapporten från Hypergene</a></li>
                    <li><a href="Hypergene_CFO_rapport.pdf" target="_blank" rel="noopener noreferrer">Läs rapporten (PDF)</a></li>
                    <li><a href="https://www.hypergene.com/sv" target="_blank" rel="noopener noreferrer">Besök Hypergenes hemsida</a></li>
                </ul>
                <p style="margin-top: 15px; font-size: 0.95em;"><em>📖 Fler akademiska källor finns i bloggtexten, inklusive referenser till Kahneman & Tversky, Klein, Hope & Fraser m.fl.</em></p>
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
// Skapad: 2025-11-28
// Ämne: Nordiska CFO:er 2025 – mellan Excel och AI
// Baserad på: Hypergenes rapport och akademisk forskning
// Författare: Kent Lundgren med AI-assistans (Claude Opus 4.5)
// ============================================

