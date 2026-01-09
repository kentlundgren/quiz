// ============================================
// JAVASCRIPT FÖR QUIZ: SMÅ KOMMUNER, STORA SKILLNADER
// Simrishamn och Tomelilla - Ekonomistyrning i fokus
//
// Skapad: 2025-11-14
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING - Uppdatering 2025-11-14
// Bilderna Simrishamn.jpg och Tomelilla_station.jpg växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        // Array för att hålla koll på vilken bild som är aktiv
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
// INTRODUKTIONSTEXTER - Fem slides om ekonomistyrning
// Här presenteras grundläggande information om Simrishamn och Tomelilla
// Språket är förbättrat för att vara mer engagerande och lättbegripligt
// ============================================
const introPages = [
    {
        title: "Kulturkostnader – Varför så olika?",
        body: `
            <p>Välkommen till ett quiz om ekonomistyrning i två skånska grannkommuner! Vi ska utforska vad siffrorna säger om hur Simrishamn och Tomelilla använder sina resurser.</p>
            
            <div class="info-box">
                <strong>🤖 AI-analys för din kommun!</strong>
                <p>Visste du att det nu är <strong>supermidigt att få fram en AI-genererad analysrapport för vilken svensk kommun som helst</strong>? Kolada har skapat "Läget i X"-rapporter som automatiskt analyserar din kommuns nyckeltal och jämför med andra kommuner!</p>
                <p>📊 <strong>Prova själv:</strong> Gå till <a href="https://www.kolada.se/rapporter/laget/" target="_blank" rel="noopener noreferrer">Koladas rapportsida</a> och välj din kommun!</p>
                <p>I detta quiz använder vi:<br>
                • <a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Läget i Simrishamn 2025</a> (PDF)<br>
                • <a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Läget i Tomelilla 2025</a> (PDF)</p>
            </div>
            
            <h3>💰 Vad kostar kultur?</h3>
            
            <div class="info-box">
                <strong>Nyckeltal per invånare (2024-2025):</strong>
                <ul>
                    <li><strong>Simrishamn:</strong> 2 277 kr/invånare för kulturverksamhet</li>
                    <li><strong>Tomelilla:</strong> 1 739 kr/invånare för kulturverksamhet</li>
                    <li><strong>Riksgenomsnitt:</strong> 1 534 kr/invånare</li>
                </ul>
            </div>
            
            <p>Simrishamn spenderar alltså <strong>31% mer</strong> på kultur än Tomelilla. Båda ligger över riksgenomsnittet. Men varför?</p>
            
            <h3>🤔 Möjliga förklaringar</h3>
            <ul>
                <li><strong>Turistprofil:</strong> Simrishamn lockar många besökare med sommarprogram och evenemang</li>
                <li><strong>Kulturarv:</strong> Fisketraditionen och fruktodlingen kräver underhåll av kulturmiljöer</li>
                <li><strong>Kiviks marknad:</strong> En av Skandinaviens största torghandelsmarknader</li>
                <li><strong>Ambitionsnivå:</strong> Olika val om vad kommunerna vill satsa på</li>
            </ul>
            
            <p><em>Källor: <a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) Läget i Simrishamn 2025</a>; <a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) Läget i Tomelilla 2025</a>.</em></p>
        `
    },
    {
        title: "Fritidshem – En gemensam utmaning",
        body: `
            <p>När vi tittar på fritidshem hittar vi något intressant: båda kommunerna har ovanligt höga kostnader jämfört med vad som förväntas.</p>
            
            <h3>📊 Nettokostnadsavvikelse för fritidshem</h3>
            
            <div class="warning-box">
                <strong>⚠️ Höga avvikelser uppmätta:</strong>
                <ul>
                    <li><strong>Simrishamn:</strong> +22,8%</li>
                    <li><strong>Tomelilla:</strong> +25,4%</li>
                    <li><strong>Riksgenomsnitt:</strong> -4,1%</li>
                </ul>
            </div>
            
            <h3>🎯 Vad betyder nettokostnadsavvikelse?</h3>
            
            <p>Nettokostnadsavvikelse är ett verktyg som visar om en kommun spenderar mer (+) eller mindre (-) än förväntat, när man tagit hänsyn till:</p>
            <ul>
                <li>Antal barn</li>
                <li>Socioekonomiska faktorer</li>
                <li>Geografisk spridning</li>
                <li>Andra strukturella förutsättningar</li>
            </ul>
            
            <p>En positiv avvikelse på över 20% betyder att kommunen spenderar <strong>mycket mer</strong> än genomsnittet, även efter justering för lokala förhållanden.</p>
            
            <h3>💭 Varför är kostnaderna så höga?</h3>
            
            <p>Det kan bero på:</p>
            <ul>
                <li><strong>Hög ambitionsnivå:</strong> Fler personal per barn, längre öppettider, bättre material</li>
                <li><strong>Låg effektivitet:</strong> Bristande organisation eller outnyttjade resurser</li>
                <li><strong>Både och:</strong> En kombination av höga ambitioner och effektivitetsutmaningar</li>
            </ul>
            
            <p>Det intressanta är att riksgenomsnittet ligger på <strong>-4,1%</strong>, vilket betyder att de flesta kommuner i Sverige faktiskt klarar fritidshemmen till <em>lägre</em> kostnader än förväntat.</p>
            
            <p><em>Källor: <a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) Läget i Simrishamn 2025</a>; <a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) Läget i Tomelilla 2025</a>; <a href="https://rka.nu/radetforframjandeavkommunalaanalyser/koladastod/fragorochsvaromkolada.44676.html" target="_blank" rel="noopener noreferrer">RKA (2025) Frågor och svar om Kolada</a>.</em></p>
        `
    },
    {
        title: "Äldreomsorg – Kvalitet till olika kostnader",
        body: `
            <p>Här blir det verkligt intressant! Tomelilla visar att det går att kombinera lägre kostnader med högre kvalitet.</p>
            
            <h3>⭐ Brukarbedömning särskilt boende (helhetssyn)</h3>
            
            <div class="info-box">
                <strong>Hur nöjda är de boende?</strong>
                <ul>
                    <li><strong>Tomelilla:</strong> 88% nöjda (+12 procentenheter sedan förra året!)</li>
                    <li><strong>Simrishamn:</strong> 84% nöjda (-4 procentenheter)</li>
                    <li><strong>Riksgenomsnitt:</strong> 78% nöjda</li>
                </ul>
            </div>
            
            <h3>💰 Kostnad äldreomsorg kr/invånare 80+</h3>
            <ul>
                <li><strong>Tomelilla:</strong> 222 669 kr</li>
                <li><strong>Simrishamn:</strong> 232 337 kr</li>
            </ul>
            
            <h3>🎯 Vad betyder detta?</h3>
            
            <p>Tomelilla lyckas alltså leverera:</p>
            <ul>
                <li>✅ <strong>Högre kvalitet</strong> (88% vs 84% nöjda)</li>
                <li>✅ <strong>Lägre kostnad</strong> (222 669 kr vs 232 337 kr)</li>
                <li>✅ <strong>Positiv trend</strong> (+12 procentenheter förbättring)</li>
            </ul>
            
            <p>Detta är ett <strong>utmärkt exempel på god ekonomistyrning</strong> där effektivitet och kvalitet går hand i hand. Dessutom har Tomelilla en negativ nettokostnadsavvikelse på -17,1%, vilket betyder att de driver verksamheten mer kostnadseffektivt än förväntat!</p>
            
            <h3>❓ Frågan är: Vad gör Tomelilla rätt?</h3>
            
            <p>Möjliga framgångsfaktorer:</p>
            <ul>
                <li>Smart organisation och arbetssätt</li>
                <li>God personalledning som skapar trygghet</li>
                <li>Effektiv användning av välfärdsteknik</li>
                <li>Förebyggande arbete som minskar behov av dyra akutinsatser</li>
            </ul>
            
            <p>Kolada lyfter fram Tomelilla som ett föredöme värt att studera!</p>
            
            <p><em>Källor: <a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) Läget i Simrishamn 2025</a>; <a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) Läget i Tomelilla 2025</a>.</em></p>
        `
    },
    {
        title: "Grundskola – Tomelillas framgångsrecept",
        body: `
            <p>I grundskolan upprepar sig mönstret: Tomelilla lyckas kombinera kostnadseffektivitet med goda resultat.</p>
            
            <h3>💰 Kostnad grundskola F-9 (kr/elev)</h3>
            
            <div class="info-box">
                <strong>Vad kostar det att utbilda en elev?</strong>
                <ul>
                    <li><strong>Tomelilla:</strong> 127 671 kr/elev</li>
                    <li><strong>Simrishamn:</strong> 145 937 kr/elev</li>
                    <li><strong>Riksgenomsnitt:</strong> 143 539 kr/elev</li>
                </ul>
            </div>
            
            <p>Tomelilla spenderar alltså <strong>12,5% mindre</strong> per elev än Simrishamn, och ligger under både Simrishamn och riksgenomsnittet.</p>
            
            <h3>📊 Nettokostnadsavvikelse grundskola</h3>
            <ul>
                <li><strong>Tomelilla:</strong> -4,6% (kostnadseffektivt!)</li>
                <li><strong>Simrishamn:</strong> +8,9% (högre kostnader än förväntat)</li>
            </ul>
            
            <h3>📚 Men hur är kvaliteten?</h3>
            
            <div class="info-box">
                <strong>Elever i åk 9 behöriga till yrkesprogram:</strong>
                <ul>
                    <li><strong>Tomelilla:</strong> 83,8% (+7,6 procentenheter sedan förra året!)</li>
                    <li><strong>Simrishamn:</strong> 82,8% (+3,2 procentenheter)</li>
                    <li><strong>Riksgenomsnitt:</strong> 82,3%</li>
                </ul>
            </div>
            
            <h3>🌟 Slutsats</h3>
            
            <p>Tomelilla visar att det <strong>INTE finns en automatisk trade-off mellan kostnad och kvalitet</strong>. Genom smart organisering och fokus på vad som verkligen skapar värde kan man faktiskt:</p>
            <ul>
                <li>✅ Ha <strong>lägre kostnader</strong> än genomsnittet</li>
                <li>✅ Leverera <strong>bättre resultat</strong> än genomsnittet</li>
                <li>✅ Visa <strong>positiv utveckling</strong> över tid</li>
            </ul>
            
            <p>Detta är precis vad god ekonomistyrning handlar om!</p>
            
            <p><em>Källor: <a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) Läget i Simrishamn 2025</a>; <a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) Läget i Tomelilla 2025</a>.</em></p>
        `
    },
    {
        title: "LSS-verksamheten – Höga kostnader, låg trygghet",
        body: `
            <p>Nu kommer vi till en utmaning som båda kommunerna delar: LSS-verksamheten. Här ser vi höga kostnader som tyvärr inte leder till högre trygghet för de boende.</p>
            
            <h3>💰 Kostnad funktionsnedsättning totalt (kr/invånare)</h3>
            
            <div class="warning-box">
                <strong>⚠️ Höga kostnader i båda kommunerna:</strong>
                <ul>
                    <li><strong>Tomelilla:</strong> 10 503 kr/invånare</li>
                    <li><strong>Simrishamn:</strong> 10 104 kr/invånare</li>
                    <li><strong>Riksgenomsnitt:</strong> 8 918 kr/invånare</li>
                </ul>
            </div>
            
            <p>Båda kommunerna ligger alltså cirka <strong>13-18% över</strong> riksgenomsnittet i kostnader.</p>
            
            <h3>😟 Brukarbedömning LSS-boende – Trygghet med all personal</h3>
            
            <div class="warning-box">
                <strong>⚠️ Låga trygghetsvärden i båda kommunerna:</strong>
                <ul>
                    <li><strong>Tomelilla:</strong> 62% känner sig trygga</li>
                    <li><strong>Simrishamn:</strong> 67% känner sig trygga</li>
                    <li><strong>Riksgenomsnitt:</strong> 74% känner sig trygga</li>
                </ul>
            </div>
            
            <h3>❓ Det stora problemet</h3>
            
            <p>Vi ser alltså att båda kommunerna:</p>
            <ul>
                <li>❌ Har <strong>höga kostnader</strong> jämfört med riksgenomsnittet</li>
                <li>❌ Har <strong>låga trygghetsvärden</strong> jämfört med riksgenomsnittet</li>
            </ul>
            
            <p>Detta väcker viktiga frågor:</p>
            <ul>
                <li>Varför leder höga kostnader inte till högre trygghet?</li>
                <li>Går pengarna till rätt saker?</li>
                <li>Behövs förändring i organisation eller bemanning?</li>
                <li>Hur kan man förbättra både kvalitet och kostnadseffektivitet?</li>
            </ul>
            
            <h3>✨ Det finns en ljusglimnt!</h3>
            
            <div class="info-box">
                <strong>Daglig verksamhet enligt LSS får höga betyg:</strong>
                <ul>
                    <li><strong>Simrishamn:</strong> 95% nöjda</li>
                    <li><strong>Tomelilla:</strong> 80% nöjda</li>
                </ul>
            </div>
            
            <p>Detta visar att det finns kapacitet och potential i verksamheterna - utmaningen verkar främst ligga i boendeverksamheten.</p>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av ekonomistyrning i dessa två kommuner. Lycka till! 🎯</p>
            
            <p><em>Källor: <a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) Läget i Simrishamn 2025</a>; <a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) Läget i Tomelilla 2025</a>.</em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om ekonomistyrning
// Frågorna är förbättrade för att vara mer engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Både Simrishamn och Tomelilla har mycket hög nettokostnadsavvikelse för fritidshem (22,8% respektive 25,4%). Vad betyder detta?",
        answers: [
            "a) Att kommunerna har fler barn i fritidshem än riksgenomsnittet",
            "b) Att kommunerna spenderar mer på fritidshem än vad som kan förväntas utifrån deras strukturella förutsättningar",
            "c) Att kvaliteten i fritidshemmen är 25% bättre än riksgenomsnittet",
            "d) Att kommunerna får 25% mer statsbidrag för fritidshemsverksamheten"
        ],
        correct: 1, // Index 1 = b
        explanation: `
            <strong>✓ RÄTT SVAR: b) Att kommunerna spenderar mer på fritidshem än vad som kan förväntas utifrån deras strukturella förutsättningar</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Nettokostnadsavvikelse är ett av de viktigaste verktygen inom kommunal ekonomistyrning. Det mäter skillnaden mellan en kommuns faktiska nettokostnader och den så kallade <strong>referenskostnaden</strong>.</p>
            
            <p><strong>Vad är referenskostnad?</strong> Det är den kostnad en kommun förväntas ha om den bedriver verksamheten med genomsnittlig ambitionsnivå och effektivitet, efter justering för strukturella faktorer som:</p>
            <ul>
                <li>Antal barn</li>
                <li>Socioekonomiska förhållanden</li>
                <li>Bebyggelsestruktur (tätort vs landsbygd)</li>
                <li>Befolkningsutveckling</li>
            </ul>
            
            <p>En positiv nettokostnadsavvikelse på 22-25% betyder att kommunerna spenderar <strong>betydligt mer</strong> än vad som kan förväntas, även efter att man tagit hänsyn till alla dessa faktorer.</p>
            
            <h3>🤔 Varför är avvikelserna så höga?</h3>
            
            <p>Enligt RKA (2025) kan höga avvikelser bero på:</p>
            <ul>
                <li><strong>Hög ambitionsnivå:</strong> Fler personal per barn, längre öppettider, bättre material</li>
                <li><strong>Låg effektivitet:</strong> Bristande organisation, outnyttjade resurser</li>
                <li><strong>Kombination av båda</strong></li>
            </ul>
            
            <p>Eftersom riksgenomsnittet för nettokostnadsavvikelse för fritidshem är <strong>-4,1%</strong>, placerar sig Simrishamn och Tomelilla långt över genomsnittet. Kolada markerar dessa nivåer som "ofördelaktiga".</p>
            
            <h3>❌ Varför är de andra alternativen fel?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Nettokostnadsavvikelsen justerar redan för antal barn - det är inräknat i referenskostnaden</li>
                <li><strong>Alternativ C:</strong> Nettokostnadsavvikelse mäter inte direkt kvalitet, även om hög ambitionsnivå teoretiskt skulle kunna ge högre kvalitet</li>
                <li><strong>Alternativ D:</strong> Avvikelsen har inget med statsbidrag att göra - den handlar om kommunens egna kostnader i relation till förväntade kostnader</li>
            </ul>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) <em>Läget i Simrishamn 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
                <li><a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) <em>Läget i Tomelilla 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
                <li><a href="https://rka.nu/radetforframjandeavkommunalaanalyser/koladastod/fragorochsvaromkolada.44676.html" target="_blank" rel="noopener noreferrer">RKA (2025) <em>Frågor och svar om Kolada</em></a></li>
            </ul>
            <p>💡 <strong>Vill du ha en rapport för din kommun?</strong> Besök <a href="https://www.kolada.se/rapporter/laget/" target="_blank" rel="noopener noreferrer">Koladas rapportsida</a> för AI-genererade analysrapporter för alla svenska kommuner!</p>
        `
    },
    {
        question: "Simrishamn spenderar 2 277 kr/invånare på kulturverksamhet jämfört med Tomelillas 1 739 kr/invånare. Vilken av följande faktorer är MEST trolig som förklaring till skillnaden?",
        answers: [
            "a) Simrishamn har fler invånare och därför högre kostnader",
            "b) Tomelilla har färre kulturinstitutioner och därför lägre kostnader",
            "c) Simrishamns turistprofil och omfattande sommarevenemang kräver mer kulturresurser",
            "d) Riksgenomsnittet är högre än Simrishamns kostnad, så skillnaden är inte signifikant"
        ],
        correct: 2, // Index 2 = c
        explanation: `
            <strong>✓ RÄTT SVAR: c) Simrishamns turistprofil och omfattande sommarevenemang kräver mer kulturresurser</strong>
            
            <h3>💡 Analys av kostnadsskillnaderna</h3>
            
            <p>Simrishamns kostnad på 2 277 kronor per invånare är <strong>31% högre</strong> än Tomelillas 1 739 kronor per invånare. Viktigt att notera: båda kommunerna ligger över riksgenomsnittet på 1 534 kronor per invånare.</p>
            
            <p>Enligt Koladas analysrapporter har Simrishamn en stabil och "ofördelaktig" kostnadsnivå för kulturverksamhet som legat högt under en längre tid. Detta tyder på <strong>strukturella orsaker</strong> snarare än tillfälliga kostnadsökningar.</p>
            
            <h3>🎪 Simrishamns turistprofil</h3>
            
            <p>Simrishamn är en stark turistdestination med:</p>
            <ul>
                <li><strong>Kiviks marknad:</strong> En av Skandinaviens största torghandelsmarknader</li>
                <li><strong>Sommarprogram:</strong> Omfattande evenemang med konserter och utställningar</li>
                <li><strong>Kulturarv:</strong> Fiskerinäring och fruktodling med flera kulturmiljöer som kräver underhåll</li>
                <li><strong>Besökarvolym:</strong> Stort antal sommargäster som kräver dimensionering utöver permanent befolkning</li>
            </ul>
            
            <p>Turistdestinationer har ofta högre kulturkostnader eftersom de måste dimensionera sitt kulturutbud inte bara för invånarna utan även för besökare. Detta innebär investeringar i anläggningar, personal och program som driver upp kostnaderna per permanent invånare.</p>
            
            <h3>❌ Varför är de andra alternativen fel?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Kostnader per invånare justerar redan för befolkningsstorlek. Simrishamn har 18 890 invånare och Tomelilla 13 878 invånare - nyckeltalet gör kommunerna jämförbara oavsett storlek.</li>
                <li><strong>Alternativ B:</strong> Båda kommunerna har bibliotek, kulturhus och kulturskolor. Detta alternativ är för simpelt och saknar empiriskt stöd.</li>
                <li><strong>Alternativ D:</strong> Direkt felaktigt - riksgenomsnittet (1 534 kr) ligger betydligt <em>lägre</em> än Simrishamns kostnad, inte högre.</li>
            </ul>
            
            <h3>🎯 Lärdom</h3>
            
            <p>Högre kostnader behöver inte vara "dåliga" - de kan vara medvetna prioriteringar. Simrishamns kulturutbud kan vara en viktig del av turistnäringen och kommunens identitet.</p>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) <em>Läget i Simrishamn 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
                <li><a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) <em>Läget i Tomelilla 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
                <li><a href="https://www.ekonomifakta.se/regional-statistik/din-kommun-i-siffror/simrishamn/" target="_blank" rel="noopener noreferrer">Ekonomifakta (2024a) <em>Simrishamn – Kommun i siffror</em></a></li>
                <li><a href="https://www.ekonomifakta.se/regional-statistik/din-kommun-i-siffror/tomelilla/" target="_blank" rel="noopener noreferrer">Ekonomifakta (2024b) <em>Tomelilla – Kommun i siffror</em></a></li>
            </ul>
        `
    },
    {
        question: "Tomelilla har både lägre kostnader för äldreomsorg (222 669 kr/invånare 80+) och högre brukarbedömning för särskilt boende (88%) än Simrishamn (232 337 kr och 84%). Vad säger detta om Tomelillas ekonomistyrning?",
        answers: [
            "a) Tomelilla har färre äldre invånare och därför lägre kostnader",
            "b) Tomelilla offrar kvalitet för att spara pengar",
            "c) Tomelilla lyckas kombinera kostnadseffektivitet med hög kvalitet",
            "d) Simrishamns högre kostnader beror på högre löner i kommunen"
        ],
        correct: 2, // Index 2 = c
        explanation: `
            <strong>✓ RÄTT SVAR: c) Tomelilla lyckas kombinera kostnadseffektivitet med hög kvalitet</strong>
            
            <h3>💡 Ett föredöme i ekonomistyrning</h3>
            
            <p>Detta är ett <strong>utmärkt exempel</strong> på varför ekonomistyrning handlar om mycket mer än att bara minimera kostnader - det handlar om att optimera relationen mellan resurser och resultat!</p>
            
            <h3>📊 Siffrorna talar sitt tydliga språk:</h3>
            
            <div class="info-box">
                <strong>Tomelillas prestationer inom äldreomsorg:</strong>
                <ul>
                    <li>✅ <strong>Högre kvalitet:</strong> 88% brukarbedömning (jfr Simrishamn 84%, riket 78%)</li>
                    <li>✅ <strong>Positiv trend:</strong> +12 procentenheter förbättring sedan förra året</li>
                    <li>✅ <strong>Lägre kostnad:</strong> 222 669 kr/invånare 80+ (jfr Simrishamn 232 337 kr)</li>
                    <li>✅ <strong>Kostnadseffektiv:</strong> Nettokostnadsavvikelse -17,1% (mer effektiv än förväntat)</li>
                </ul>
            </div>
            
            <h3>🌟 Vad gör Tomelilla rätt?</h3>
            
            <p>Analysrapporten lyfter fram Tomelilla som ett föredöme och pekar på möjliga framgångsfaktorer:</p>
            <ul>
                <li><strong>Effektiv organisation:</strong> Smart arbetssätt som maximerar värdet för brukarna</li>
                <li><strong>God personalledning:</strong> Skapar trygghet och kontinuitet för de boende</li>
                <li><strong>Välfärdsteknik:</strong> Klokt användande av teknik som stödjer personal och brukare</li>
                <li><strong>Förebyggande inriktning:</strong> Minskar behov av dyra akuta insatser</li>
            </ul>
            
            <h3>💭 En viktig princip</h3>
            
            <p>Tomelillas exempel visar något fundamentalt: <strong>Det finns inte alltid en trade-off mellan kvalitet och kostnad.</strong> Genom smart organisering och fokus på vad som verkligen skapar värde för brukarna kan man faktiskt åstadkomma mer med mindre.</p>
            
            <h3>❌ Varför är de andra alternativen fel?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Kostnaden är uttryckt per invånare 80+ år, vilket justerar för antalet äldre</li>
                <li><strong>Alternativ B:</strong> Motsägs direkt av den höga brukarbedömningen - Tomelilla har <em>högre</em> kvalitet, inte lägre</li>
                <li><strong>Alternativ D:</strong> Eventuella löneskillnader mellan två grannkommuner skulle vara marginella och förklarar inte resultaten</li>
            </ul>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) <em>Läget i Simrishamn 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
                <li><a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) <em>Läget i Tomelilla 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
            </ul>
        `
    },
    {
        question: "Både Simrishamn och Tomelilla har höga kostnader för LSS-verksamheten (10 104 resp. 10 503 kr/invånare) jämfört med riksgenomsnittet (8 918 kr/invånare). Samtidigt har båda kommunerna låga trygghetsvärden i LSS-boenden (67% resp. 62% jämfört med riksgenomsnittet 74%). Vad bör detta föranleda?",
        answers: [
            "a) En sänkning av kostnaderna eftersom de höga kostnaderna inte ger resultat",
            "b) En djupanalys av vart pengarna går och varför de inte leder till högre trygghet",
            "c) Mer pengar till LSS-verksamheten för att höja tryggheten",
            "d) Ingen åtgärd – det är normalt med variation mellan kommuner"
        ],
        correct: 1, // Index 1 = b
        explanation: `
            <strong>✓ RÄTT SVAR: b) En djupanalys av vart pengarna går och varför de inte leder till högre trygghet</strong>
            
            <h3>💡 Varför är detta rätt svar?</h3>
            
            <p>Detta är en komplex situation som kräver <strong>analytiskt tänkande</strong> snarare än enkla lösningar. När en verksamhet samtidigt har högre kostnader än genomsnittet OCH lägre kvalitet (mätt som brukarupplevd trygghet), är det ett tydligt tecken på att något inte fungerar optimalt.</p>
            
            <h3>📊 Problembilden</h3>
            
            <div class="warning-box">
                <strong>⚠️ Dubbla utmaningen:</strong>
                <ul>
                    <li><strong>Höga kostnader:</strong> 13-18% över riksgenomsnittet</li>
                    <li><strong>Låg trygghet:</strong> 7-12 procentenheter under riksgenomsnittet</li>
                </ul>
            </div>
            
            <p>Detta gap mellan kostnader och kvalitet kräver förståelse av grundorsaken innan man kan sätta in rätt åtgärder.</p>
            
            <h3>🔍 Vad bör en djupanalys undersöka?</h3>
            
            <p><strong>1. Kostnadsstruktur:</strong></p>
            <ul>
                <li>Går pengarna till direktkontakt med brukare eller till administration?</li>
                <li>Hur ser personaltätheten ut jämfört med andra kommuner?</li>
                <li>Finns det dolda ineffektiviteter i organisationen?</li>
            </ul>
            
            <p><strong>2. Personalförhållanden:</strong></p>
            <ul>
                <li>Vilken är personalomsättningen?</li>
                <li>Hur mycket inhyrd personal används?</li>
                <li>Vilken kompetens har personalen?</li>
                <li>Hur är arbetsmiljön för personalen?</li>
            </ul>
            
            <p><strong>3. Organisation:</strong></p>
            <ul>
                <li>Hur är verksamheten organiserad?</li>
                <li>Finns det stödsystem som underlättar personalens arbete?</li>
                <li>Hur fungerar samverkan mellan olika enheter?</li>
            </ul>
            
            <p><strong>4. Brukarsammansättning:</strong></p>
            <ul>
                <li>Har kommunerna brukare med särskilt komplexa behov?</li>
                <li>Kan detta förklara de höga kostnaderna?</li>
            </ul>
            
            <h3>💡 Lärdomar från andra kommuner</h3>
            
            <p>Koladas analysrapporter pekar ut kommuner med bättre resultat som förebilder:</p>
            <ul>
                <li><strong>För Simrishamn:</strong> Knivsta, Tjörn och Säffle</li>
                <li><strong>För Tomelilla:</strong> Tjörn, Lycksele och Säffle</li>
            </ul>
            
            <p>Detta indikerar att det finns andra kommuner som lyckas bättre - vilket förstärker argumentet för att en djupanalys kan ge värdefulla insikter.</p>
            
            <h3>❌ Varför är de andra alternativen fel?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> För förenklat och riskabelt - att bara sänka kostnader utan att förstå varför resultaten är svaga kan leda till ännu sämre kvalitet</li>
                <li><strong>Alternativ C:</strong> Förutsätter att problemet är resursbrist, vilket inte är självklart när kostnaderna redan är höga</li>
                <li><strong>Alternativ D:</strong> Oansvarigt - systematiska skillnader mellan kostnader och kvalitet bör alltid undersökas, särskilt inom känsliga verksamheter som LSS</li>
            </ul>
            
            <h3>✨ Det finns hopp!</h3>
            
            <p>En ljusglimmt är att daglig verksamhet enligt LSS får höga betyg i båda kommunerna (Simrishamn 95%, Tomelilla 80%). Detta visar att det finns kapacitet och potential - utmaningen verkar främst ligga i boendeverksamheten.</p>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) <em>Läget i Simrishamn 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
                <li><a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) <em>Läget i Tomelilla 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
            </ul>
        `
    },
    {
        question: "Tomelilla har en kostnad på 127 671 kr/elev i grundskolan och en nettokostnadsavvikelse på -4,6%, samtidigt som 83,8% av eleverna i årskurs 9 är behöriga till yrkesprogram. Simrishamn har en kostnad på 145 937 kr/elev och en nettokostnadsavvikelse på +8,9%, med 82,8% behöriga till yrkesprogram. Vilken slutsats är MEST rimlig?",
        answers: [
            "a) Simrishamn bör omedelbart sänka sina kostnader till Tomelillas nivå",
            "b) Tomelilla har sämre kvalitet eftersom de spenderar mindre per elev",
            "c) Tomelilla är ett föredöme för hur man kan kombinera kostnadseffektivitet med goda resultat",
            "d) De strukturella skillnaderna mellan kommunerna förklarar hela kostnadsskillnaden"
        ],
        correct: 2, // Index 2 = c
        explanation: `
            <strong>✓ RÄTT SVAR: c) Tomelilla är ett föredöme för hur man kan kombinera kostnadseffektivitet med goda resultat</strong>
            
            <h3>💡 En framgångshistoria i siffror</h3>
            
            <p>Detta är ett klassiskt exempel på hur man tolkar nyckeltal inom ekonomistyrning av skolan. Tomelillas prestationer är ett tydligt exempel på framgångsrik ekonomistyrning där man lyckas leverera goda resultat till en lägre kostnad.</p>
            
            <h3>📊 Låt oss bryta ner nyckeltalen:</h3>
            
            <p><strong>Kostnadseffektivitet:</strong></p>
            <ul>
                <li>Tomelillas kostnad: 127 671 kr/elev (<strong>12,5% lägre</strong> än Simrishamn)</li>
                <li>Under riksgenomsnittet: 143 539 kr/elev</li>
                <li>Nettokostnadsavvikelse <strong>-4,6%</strong> = mer kostnadseffektiv än förväntat</li>
                <li>Simrishamns nettokostnadsavvikelse <strong>+8,9%</strong> = högre kostnader än förväntat</li>
            </ul>
            
            <p><strong>Kvalitetsmått:</strong></p>
            <ul>
                <li>Tomelilla: <strong>83,8%</strong> behöriga till yrkesprogram (+7,6 procentenheter sedan förra året!)</li>
                <li>Simrishamn: 82,8% (+3,2 procentenheter)</li>
                <li>Riksgenomsnitt: 82,3%</li>
            </ul>
            
            <h3>🌟 Vad betyder detta?</h3>
            
            <div class="info-box">
                <strong>Tomelilla lyckas med trekanten:</strong>
                <ul>
                    <li>✅ <strong>Lägre kostnader</strong> än både Simrishamn och riksgenomsnittet</li>
                    <li>✅ <strong>Bättre resultat</strong> än både Simrishamn och riksgenomsnittet</li>
                    <li>✅ <strong>Positiv utveckling</strong> - störst förbättring av de två kommunerna</li>
                </ul>
            </div>
            
            <p>Nettokostnadsavvikelsen är särskilt viktig här - den justerar för strukturella faktorer som antal elever, socioekonomisk bakgrund, geografisk spridning och kommunens allmänna kostnadsnivå. Tomelillas negativa avvikelse visar att de driver grundskolan mer kostnadseffektivt än vad som kan förväntas.</p>
            
            <h3>🎓 Vad kan vi lära oss?</h3>
            
            <p>Tomelillas exempel visar att det finns möjlighet att vara både kostnadseffektiv och hålla god kvalitet. Analysrapportern klassificerar detta som en "fördelaktig förändring" (grön markering) och lyfter fram kommunen som ett exempel för andra att studera.</p>
            
            <h3>❌ Varför är de andra alternativen fel?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Man kan inte bara kopiera kostnadsstrukturen från en annan kommun. Det kan finnas goda skäl till Simrishamns högre kostnader, även om nettokostnadsavvikelsen tyder på förbättringspotential.</li>
                <li><strong>Alternativ B:</strong> Motsägs direkt av resultaten - Tomelilla har faktiskt <em>bättre</em> resultat trots lägre kostnader!</li>
                <li><strong>Alternativ D:</strong> För kategoriskt - nettokostnadsavvikelsen justerar redan för strukturella skillnader, så den återstående skillnaden beror på ambitionsnivå och/eller effektivitet.</li>
            </ul>
            
            <h3>💭 Slutsats</h3>
            
            <p>Detta är precis vad god ekonomistyrning handlar om: att leverera god kvalitet till en rimlig kostnad. Tomelilla visar att det går!</p>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="https://kolada.se/wp-content/uploads/2025/11/laget_i_Simrishamn_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025a) <em>Läget i Simrishamn 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
                <li><a href="https://www.kolada.se/wp-content/uploads/2025/11/laget_i_Tomelilla_2025.pdf" target="_blank" rel="noopener noreferrer">Kolada (2025b) <em>Läget i Tomelilla 2025 – Intelligent analysrapport</em></a>. Sveriges Kommuner och Regioner (SKR) och Rådet för främjande av kommunala analyser (RKA).</li>
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
        message = 'Perfekt! Du har helt koll på ekonomistyrning i små kommuner! 🌟 Du förstår både nyckeltal och vad de betyder i praktiken.';
    } else if (percentage >= 80) {
        message = 'Mycket bra! Du har god förståelse för ekonomistyrning och kan tolka nyckeltal på ett meningsfullt sätt. 👍';
    } else if (percentage >= 60) {
        message = 'Bra jobbat! Du har grundläggande förståelse, men det finns mer att utforska. Gå gärna igenom slidesen igen! 📚';
    } else {
        message = 'Det finns mycket att lära! Ekonomistyrning är komplext, men genom att läsa igenom materialet igen kommer du att få bättre grepp om det. 💪';
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
                    <li>Ekonomistyrning handlar inte bara om siffror, utan om att förstå vad som skapar värde</li>
                    <li>Högre kostnader leder inte automatiskt till bättre kvalitet</li>
                    <li>Nettokostnadsavvikelse är ett kraftfullt verktyg för att jämföra kommuner</li>
                    <li>Tomelilla visar att det går att vara både kostnadseffektiv och leverera god kvalitet</li>
                    <li>När kostnader är höga men kvalitet låg behövs djupanalys, inte snabba lösningar</li>
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
// Skapad: 2025-11-14
// Ämne: Ekonomistyrning i Simrishamn och Tomelilla
// Författare: Kent Lundgren med AI-assistans (Claude 4.5 Sonnet)
// ============================================

