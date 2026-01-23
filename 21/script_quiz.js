// ============================================
// JAVASCRIPT FÖR QUIZ: SYNUNDERSÖKNINGAR OCH TERMINALGLASÖGON
// Skapad: 2026-01-16
// 
// Detta quiz handlar om synundersökningar i Sverige
// med fokus på terminalglasögon för datorarbete
// 
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna synundersokning1.jpg och synundersokning2.jpg
// växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // Två bilder (synundersokning1.jpg och synundersokning2.jpg)
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
// INTRODUKTIONSTEXTER - Fem slides om synundersökningar och terminalglasögon
// Baserade på blogginlägget och Kent Lundgrens synundersökningar
// ============================================
const introPages = [
    {
        title: "👓 Vad är en synundersökning?",
        body: `
            <p>Välkommen till ett quiz om <strong>synundersökningar och terminalglasögon</strong>! Här får du testa dina kunskaper om hur synundersökningar går till och vilka rättigheter du har vid bildskärmsarbete.</p>
            
            <div class="read-material-box">
                <p><strong>📖 Läs först!</strong></p>
                <p>För att få ut maximalt av detta quiz, läs gärna blogginlägget först:</p>
                <a href="https://controllerutangranser.wordpress.com/2026/01/16/att-forsta-synundersokningar-och-terminalglasogon/" target="_blank" rel="noopener noreferrer">Att förstå synundersökningar och terminalglasögon</a>
            </div>
            
            <h3>🔍 Definition</h3>
            <p>En synundersökning är en systematisk bedömning av ögonens funktion och hälsa, utförd av legitimerad optiker eller ögonläkare. Den mäter synskärpa, brytningsfel och ögonhälsa.</p>
            
            <h3>📋 Viktiga moment i en synundersökning</h3>
            <ul>
                <li><strong>Anamnes och behovsanalys</strong> – Kartläggning av arbetsförhållanden och synbehov</li>
                <li><strong>Mätning av synskärpa (visus)</strong> – Läsning av syntavla på 5-6 meters avstånd</li>
                <li><strong>Refraktionsmätning</strong> – Bestämning av brytningsfel (sfär, cylinder, axel)</li>
                <li><strong>Pupillavstånd (PD)</strong> – Avståndet mellan pupillerna i millimeter</li>
                <li><strong>Addition</strong> – Lästillägg för presbyopa (åldersynta) personer</li>
            </ul>
            
            <div class="info-box">
                <strong>⚖️ Lagkrav i Sverige</strong>
                <p>Arbetsgivare ska enligt Arbetsmiljöverkets föreskrifter (AFS 2023:11) erbjuda synundersökning till alla som arbetar vid bildskärm mer än <strong>1 timme per dag</strong>. Arbetsgivaren bekostar både undersökning och terminalglasögon om vanliga glasögon inte fungerar för bildskärmsarbete.</p>
                <p><em>Källa: <a href="https://www.av.se/inomhusmiljo/dator--och-bildskarmsarbete/belysning-vid-anvandning-av-datorer-och-bildskarmar/synundersokning-och-glasogon-for-dator--och-bildskarmsarbete/" target="_blank" rel="noopener noreferrer">Arbetsmiljöverket (u.å.)</a></em></p>
            </div>
        `
    },
    {
        title: "📄 Att tolka synreceptet",
        body: `
            <p>När du får ditt glasögonrecept efter en synundersökning innehåller det flera viktiga värden. Här förklarar vi vad de betyder!</p>
            
            <h3>🔢 Sfär (SPH)</h3>
            <ul>
                <li><strong>Plus (+)</strong> = Översynthet/hyperopi (svårt att se nära)</li>
                <li><strong>Minus (−)</strong> = Närsynthet/myopi (svårt att se långt)</li>
                <li>Anges i dioptrier, vanligen i steg om 0,25</li>
            </ul>
            
            <h3>📐 Cylinder (CYL) & Axel (AX)</h3>
            <ul>
                <li><strong>Cylinder</strong> = Styrkan på astigmatismen (brytningsfel)</li>
                <li><strong>Axel</strong> = Riktningen på astigmatismen (0-180 grader)</li>
                <li>Astigmatism uppstår när hornhinnan är oval istället för rund</li>
            </ul>
            
            <h3>📖 Addition (ADD)</h3>
            <ul>
                <li>Lästillägg för personer över cirka 40 år (presbyopi)</li>
                <li>Ökar med åldern, typiskt 1,00-3,00 dioptrier</li>
                <li>Kan vara olika för olika avstånd (läsning vs datorarbete)</li>
            </ul>
            
            <h3>👀 Pupillavstånd (PD)</h3>
            <ul>
                <li>Avstånd mellan pupillerna i millimeter</li>
                <li><strong>Avstånd PD</strong> för långt håll, <strong>Läs PD</strong> för närarbete</li>
                <li>Normalt 58-66 mm, viktigt för glasögonens centrering</li>
            </ul>
            
            <h3>👁️ Synskärpa (Visus)</h3>
            <ul>
                <li>Mått på ögats upplösningsförmåga</li>
                <li><strong>1,0</strong> = "normal syn" (varierar normalt 0,6-1,5)</li>
                <li><strong>Fri visus</strong> = utan glasögon</li>
                <li><strong>Korrigerad visus</strong> = med optimal korrektion</li>
            </ul>
            
            <div class="info-box">
                <strong>💡 Tips!</strong>
                <p>Du har rätt att få ditt recept skriftligt och kan använda det hos vilken optiker du vill.</p>
                <p><em>Källor: <a href="https://www.specsavers.se/synvard/ditt-recept" target="_blank" rel="noopener noreferrer">Specsavers (u.å.)</a> | <a href="https://www.misterspex.se/c/rat/510" target="_blank" rel="noopener noreferrer">Mister Spex (u.å.)</a></em></p>
            </div>
        `
    },
    {
        title: "👴 Presbyopi och glasögonlösningar",
        body: `
            <p>Presbyopi, eller ålderssynthet, är en naturlig åldersförändring som påverkar de flesta från cirka 40 års ålder. Här förklarar vi vad det är och vilka lösningar som finns!</p>
            
            <h3>🧓 Vad är presbyopi (ålderssynthet)?</h3>
            <ul>
                <li>Naturlig åldersförändring från cirka 40-45 års ålder</li>
                <li>Linsen blir stelare och mindre elastisk</li>
                <li>Klassiskt symptom: <em>"Armarna räcker inte till längre"</em> när du läser</li>
                <li>Behov av olika styrkor för långt och nära håll</li>
            </ul>
            
            <div class="warning-box">
                <strong>⚠️ Viktigt att veta</strong>
                <p>Presbyopi är INTE en sjukdom, utan en helt normal del av åldrandet. Alla får det förr eller senare!</p>
            </div>
            
            <h3>👓 Glasögonlösningar för skärmarbete</h3>
            
            <h4>1. Enkelslipade läsglasögon</h4>
            <ul>
                <li>✅ Skarp syn på ett specifikt avstånd (cirka 40 cm)</li>
                <li>✅ Billigast alternativ</li>
                <li>❌ Kräver av/på-hantering vid olika avstånd</li>
            </ul>
            
            <h4>2. Närprogressiva glasögon (Office MIDI)</h4>
            <ul>
                <li>✅ Skarp syn 40 cm - 1,5-2 meter</li>
                <li>✅ Bra för långvarigt datorarbete och läsning</li>
                <li>✅ Brett synfält för närarbete</li>
                <li>❌ Fungerar inte för bilkörning</li>
            </ul>
            
            <h4>3. Rumsprogressiva glasögon (Office MAXI)</h4>
            <ul>
                <li>✅ Skarp syn 40 cm - 4-5 meter</li>
                <li>✅ Perfekt för kontor och möten</li>
                <li>✅ Bekvämt för hela arbetsplatsen</li>
                <li>❌ Ej lämpliga för bilkörning!</li>
            </ul>
            
            <h4>4. Vanliga progressiva glasögon</h4>
            <ul>
                <li>✅ Skarp syn på alla avstånd</li>
                <li>✅ Universella för alla situationer</li>
                <li>❌ Smalare synfält för mellanavstånd</li>
                <li>❌ Kräver tillvänjningstid</li>
            </ul>
            
            <div class="info-box">
                <strong>💼 För datorarbete rekommenderas:</strong>
                <p>Närprogressiva eller rumsprogressiva glasögon ger bäst komfort vid långvarigt skärmarbete!</p>
                <p><em>Källor: <a href="https://www.renoptik.se/arbetsglasogon_terminalglasogon/" target="_blank" rel="noopener noreferrer">RenOptik (u.å.)</a> | <a href="https://www.synsam.se/guide/glasögon/progressiva-glasögon" target="_blank" rel="noopener noreferrer">Synsam (u.å.)</a></em></p>
            </div>
        `
    },
    {
        title: "📊 Kents första synundersökning (maj 2021)",
        body: `
            <p>Låt oss titta på ett verkligt exempel: Kent Lundgrens synundersökning från maj 2021. Detta hjälper dig att förstå hur man tolkar ett synrecept!</p>
            
            <div class="info-box">
                <strong>📄 Källa för denna information:</strong>
                <p>Synundersökning från Specsavers Lund, maj 2021. Se: <a href="SpecSaversKentLundgren_maj_2021_jan_2026.pdf" target="_blank" rel="noopener noreferrer">SpecSaversKentLundgren_maj_2021_jan_2026.pdf</a></p>
            </div>
            
            <h3>👤 Grunddata</h3>
            <ul>
                <li><strong>Datum:</strong> 2021-05-20</li>
                <li><strong>Ålder:</strong> 56 år och 11 månader</li>
                <li><strong>Utförare:</strong> Specsavers Lund</li>
            </ul>
            
            <h3>👁️ Synskärpa</h3>
            <ul>
                <li><strong>Fri visus båda ögonen:</strong> 1,0− (mycket god syn utan glasögon)</li>
                <li><strong>Korrigerad visus:</strong> 1,0− (utmärkt med glasögon)</li>
            </ul>
            
            <h3>🔢 Refraktion (brytningsfel)</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Öga</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Sfär</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Cylinder</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Axel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Höger</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">+0,50</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">−0,75</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">100°</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Vänster</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">−0,25</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">−0,25</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">90°</td>
                    </tr>
                </tbody>
            </table>
            
            <p style="margin-top: 15px;"><strong>Tolkning:</strong></p>
            <ul>
                <li>Höger öga: Lätt översynthet (+0,50), måttlig astigmatism (−0,75)</li>
                <li>Vänster öga: Mycket lätt närsynthet (−0,25), lätt astigmatism (−0,25)</li>
                <li><strong>Anisometropi:</strong> Olika brytningsfel mellan ögonen</li>
            </ul>
            
            <h3>📖 Addition och pupillavstånd</h3>
            <ul>
                <li><strong>Addition 1:</strong> 2,25 (för 40 cm läsavstånd) – typiskt för 56-åring</li>
                <li><strong>Addition 2:</strong> 1,00 (för 70 cm datoravstånd)</li>
                <li><strong>Avstånd PD:</strong> 66,00 mm</li>
                <li><strong>Läs PD:</strong> 64,00 mm</li>
            </ul>
            
            <div class="warning-box">
                <strong>✅ Sammanfattning 2021</strong>
                <p>God grundsyn utan glasögon, presbyopi enligt förväntat för åldern, optimerad för både läsning och datorarbete.</p>
            </div>
        `
    },
    {
        title: "📈 Kents andra synundersökning (januari 2026)",
        body: `
            <p>Nu tittar vi på Kent Lundgrens andra synundersökning, nästan 5 år senare. Vad har förändrats och varför?</p>
            
            <div class="info-box">
                <strong>📄 Källa för denna information:</strong>
                <p>Synundersökning från Specsavers Lund, januari 2026. Se: <a href="SpecSaversKentLundgren_maj_2021_jan_2026.pdf" target="_blank" rel="noopener noreferrer">SpecSaversKentLundgren_maj_2021_jan_2026.pdf</a></p>
            </div>
            
            <h3>👤 Grunddata</h3>
            <ul>
                <li><strong>Datum:</strong> 2026-01-16</li>
                <li><strong>Ålder:</strong> 62 år och 7 månader</li>
                <li><strong>Tid sedan förra undersökningen:</strong> 4 år och 8 månader</li>
            </ul>
            
            <h3>👁️ Synskärpa – Förändring över tid</h3>
            <ul>
                <li><strong>Fri visus höger:</strong> 0,8− (minskning från 1,0−)</li>
                <li><strong>Fri visus vänster:</strong> 0,9− (minskning från 1,0−)</li>
                <li><strong>Korrigerad visus:</strong> 1,0 (fortfarande utmärkt med glasögon! ✓)</li>
            </ul>
            
            <h3>🔢 Refraktion – Märkbara förändringar</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Öga</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Sfär</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Cylinder</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Axel</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Förändring</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Höger</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">+1,00</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">−0,75</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">100°</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">+0,50 sfär</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Vänster</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">+0,50</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">−0,75</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">86°</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">+0,75 sfär, −0,50 cyl</td>
                    </tr>
                </tbody>
            </table>
            
            <p style="margin-top: 15px;"><strong>Viktiga förändringar:</strong></p>
            <ul>
                <li>Höger öga: Ökad översynthet (+0,50 dioptrier)</li>
                <li>Vänster öga: Från närsynthet till översynthet! (+0,75 förändring)</li>
                <li>Vänster öga: Ökad astigmatism (från −0,25 till −0,75)</li>
            </ul>
            
            <h3>📖 Addition och pupillavstånd</h3>
            <ul>
                <li><strong>Addition 1:</strong> 2,25 (oförändrad – linsen nått maximal styvhet)</li>
                <li><strong>Läs PD:</strong> 62,00 mm (minskning från 64,00 mm)</li>
            </ul>
            
            <div class="info-box">
                <strong>🔬 Analys av femårsförändringarna</strong>
                <ul>
                    <li>✓ <strong>Normal åldersförändring:</strong> Ökad översynthet i båda ögonen</li>
                    <li>✓ <strong>Förklaring:</strong> Linsen blir stelare → minskar ljusbrytning → ökad översynthet</li>
                    <li>✓ <strong>Ökad astigmatism</strong> vänster öga (vanligt med åldern)</li>
                    <li>✓ <strong>Korrigerad visus fortfarande utmärkt</strong> (1,0)</li>
                    <li>✓ <strong>Regelbundna kontroller viktiga</strong> för optimal arbetsmiljö</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>✅ Slutsats</strong>
                <p><strong>Typisk synsutveckling för en 60+ person.</strong> Nya glasögon nödvändiga för bibehållen god syn vid datorarbete. Tillvänjning kan ta några veckor. Regelbundna synundersökningar var 2-3:e år rekommenderas!</p>
            </div>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av synundersökningar. Lycka till! 🎯</p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om synundersökningar och terminalglasögon
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Enligt Arbetsmiljöverkets föreskrifter (AFS 2023:11), vid vilket villkor är arbetsgivaren skyldig att erbjuda synundersökning till en anställd?",
        answers: [
            "a) När den anställde arbetar vid bildskärm minst 30 minuter per dag",
            "b) När den anställde arbetar vid bildskärm minst 1 timme per dag",
            "c) När den anställde arbetar vid bildskärm minst 4 timmar per dag",
            "d) Endast när den anställde själv begär det"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) När den anställde arbetar vid bildskärm minst 1 timme per dag</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Enligt Arbetsmiljöverkets föreskrifter <strong>AFS 2023:11</strong> "Arbetsutrustning och personlig skyddsutrustning" ska arbetsgivaren erbjuda synundersökning till alla som normalt arbetar vid bildskärm <strong>mer än en timme per dag</strong>. Detta är en viktig del av det systematiska arbetsmiljöarbetet.</p>
            
            <div class="info-box">
                <strong>⚖️ Arbetsgivarens skyldigheter</strong>
                <ul>
                    <li>Erbjuda synundersökning till alla som arbetar vid bildskärm >1 h/dag</li>
                    <li>Bekosta synundersökningen helt</li>
                    <li>Tillhandahålla terminalglasögon om undersökningen visar behov</li>
                    <li>Betala för grundutförande av terminalglasögon</li>
                </ul>
            </div>
            
            <h3>📊 Visste du att...</h3>
            <p>Enligt en Sifo-undersökning från Specsavers har endast <strong>1 av 4 anställda</strong> blivit erbjudna en synundersökning av sin arbetsgivare, trots att lagen kräver det! Detta är en viktig rättighet som många inte känner till.</p>
            
            <h3>💼 Vad ingår?</h3>
            <p>Terminalglasögonen är ett <strong>arbetsredskap</strong> och ska inte innebära några kostnader för den anställde för grundutförandet. Det är en skattefri förmån!</p>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Arbetsmiljöverket (u.å.) <em>Synundersökning och glasögon för dator- och bildskärmsarbete</em>. Tillgänglig: <a href="https://www.av.se/inomhusmiljo/dator--och-bildskarmsarbete/belysning-vid-anvandning-av-datorer-och-bildskarmar/synundersokning-och-glasogon-for-dator--och-bildskarmsarbete/" target="_blank" rel="noopener noreferrer">www.av.se</a> [Hämtad: 16 januari 2026].</li>
                <li>Unionen (u.å.) <em>Terminalglasögon vid bildskärmsarbete</em>. Tillgänglig: <a href="https://www.unionen.se/rad-och-stod/terminalglasogon-vid-bildskarmsarbete" target="_blank" rel="noopener noreferrer">www.unionen.se</a> [Hämtad: 16 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "En person får ett synrecept där sfärvärdet för höger öga är angivet som +2,00. Vad betyder detta?",
        answers: [
            "a) Personen är närsynt och har svårt att se på långt håll",
            "b) Personen är översynt och har svårt att se på nära håll",
            "c) Personen har astigmatism (brytningsfel)",
            "d) Personen har presbyopi (ålderssynthet)"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Personen är översynt och har svårt att se på nära håll</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Sfärvärdet anger styrkan på glaset i dioptrier och visar om personen är närsynt eller översynt.</p>
            
            <div class="info-box">
                <strong>➕ Plustecken (+) = Översynthet (Hyperopi)</strong>
                <ul>
                    <li>Ljuset fokuseras <em>bakom</em> näthinnan</li>
                    <li>Svårt att se skarpt på <strong>nära håll</strong></li>
                    <li>Ju högre plusvärde, desto större översynthet</li>
                    <li>+2,00 är en <strong>måttlig översynthet</strong></li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>➖ Minustecken (−) = Närsynthet (Myopi)</strong>
                <ul>
                    <li>Ljuset fokuseras <em>framför</em> näthinnan</li>
                    <li>Svårt att se skarpt på <strong>långt håll</strong></li>
                    <li>Ju högre minusvärde, desto större närsynthet</li>
                </ul>
            </div>
            
            <h3>📊 Viktigt att veta</h3>
            <ul>
                <li>Sfärvärdet anges i steg om <strong>0,25 dioptrier</strong></li>
                <li>Förväxla inte med <strong>cylindervärdet</strong> (som anger astigmatism)</li>
                <li>Förväxla inte med <strong>addition</strong> (som anger lästillägg vid presbyopi)</li>
                <li>En person kan ha både översynthet <em>och</em> presbyopi samtidigt</li>
            </ul>
            
            <h3>🔍 Exempel från Kent Lundgrens undersökningar</h3>
            <p>I januari 2026 hade Kent sfärvärde <strong>+1,00</strong> på höger öga, vilket betyder lätt översynthet. Detta hade ökat från +0,50 i maj 2021 – en typisk åldersförändring!</p>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Specsavers (u.å.) <em>Förstå ditt glasögonrecept</em>. Tillgänglig: <a href="https://www.specsavers.se/synvard/ditt-recept" target="_blank" rel="noopener noreferrer">www.specsavers.se</a> [Hämtad: 16 januari 2026].</li>
                <li>Mister Spex (u.å.) <em>Receptet förklarat</em>. Tillgänglig: <a href="https://www.misterspex.se/c/rat/510" target="_blank" rel="noopener noreferrer">www.misterspex.se</a> [Hämtad: 16 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Vid vilken ålder börjar de flesta människor märka av presbyopi (ålderssynthet)?",
        answers: [
            "a) 20-25 år",
            "b) 30-35 år",
            "c) 40-45 år",
            "d) 60-65 år"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) 40-45 år</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Presbyopi, eller ålderssynthet, är en <strong>naturlig åldersrelaterad förändring</strong> av ögats förmåga att fokusera på nära håll. De flesta människor börjar märka av detta omkring <strong>40-45 års ålder</strong>.</p>
            
            <div class="info-box">
                <strong>🔍 Klassiska tecken på presbyopi</strong>
                <ul>
                    <li><em>"Armarna räcker inte till längre"</em> när man läser</li>
                    <li>Svårt att fokusera på nära håll (bok, mobil)</li>
                    <li>Behöver mer ljus för att läsa</li>
                    <li>Huvudvärk och trötta ögon vid närarbete</li>
                    <li>Behöver hålla tidningen eller mobilen längre bort</li>
                </ul>
            </div>
            
            <h3>🔬 Vad händer i ögat?</h3>
            <p>Linsen i ögat blir stelare och förlorar sin elasticitet med åldern, vilket gör det svårare för ögat att ställa om mellan olika avstånd (ackommodation). Detta är en <strong>gradvis process</strong> som fortsätter upp till cirka 60 års ålder, då linsen har nått sin maximala styvhet.</p>
            
            <h3>📈 Utveckling över tid</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Ålder</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Typisk addition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">40-45 år</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">+0,75 till +1,00</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">50-55 år</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">+1,50 till +2,00</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">60+ år</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">+2,25 till +3,00</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>💼 Presbyopi och datorarbete</h3>
            <p>För personer som arbetar mycket vid dator kan presbyopi först märkas genom svårigheter att läsa text på skärmen, huvudvärk och trötta ögon. Vid dessa symtom är det dags för en synundersökning och eventuellt <strong>terminalglasögon</strong>!</p>
            
            <div class="warning-box">
                <strong>📌 Kent Lundgrens exempel</strong>
                <p>I maj 2021, vid 56 års ålder, hade Kent addition 2,25 för läsning – helt normalt för åldern. I januari 2026, vid 62 års ålder, var additionen fortfarande 2,25, vilket visar att linsen nått sin maximala styvhet.</p>
            </div>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Smarteyes (u.å.) <em>Ålderssynthet - presbyopi</em>. Tillgänglig: <a href="https://www.smarteyes.se/ogonhalsa/synfel/alderssynthet-presbyopi" target="_blank" rel="noopener noreferrer">www.smarteyes.se</a> [Hämtad: 16 januari 2026].</li>
                <li>Hultins Optik (2025) <em>Progressiva glasögon</em>. Tillgänglig: <a href="https://hultinsoptik.se/progressiva-glasogon/" target="_blank" rel="noopener noreferrer">hultinsoptik.se</a> [Hämtad: 16 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "En person har en fri visus på 0,8 utan glasögon. Vad betyder detta?",
        answers: [
            "a) Personen har dålig syn och behöver genast glasögon",
            "b) Personen har normal syn inom den normala variationen",
            "c) Personen har mycket god syn över genomsnittet",
            "d) Personen har grå starr (katarakt)"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Personen har normal syn inom den normala variationen</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Synskärpa, eller visus, är ett mått på ögats <strong>upplösningsförmåga</strong>, det vill säga förmågan att urskilja små detaljer.</p>
            
            <div class="info-box">
                <strong>📊 Normal variation av visus</strong>
                <ul>
                    <li><strong>1,0</strong> betraktas ofta som "normal syn"</li>
                    <li>Men normalt varierar synskärpan mellan <strong>0,6 och 1,5</strong></li>
                    <li>Vissa friska personer uppnår 0,5, andra upp till 2,0</li>
                    <li><strong>0,8 är helt normalt!</strong> Ingen anledning till oro</li>
                </ul>
            </div>
            
            <h3>🎯 Vad påverkar synskärpan?</h3>
            <ul>
                <li>Ögats brytningsstyrka (sfär, cylinder)</li>
                <li>Ljusgenomsläppligheten i ögats brytande medier</li>
                <li>Näthinnans struktur och funktion</li>
                <li>Synnervens och det centrala nervsystemets funktion</li>
            </ul>
            
            <h3>🔑 Det viktiga är korrigerad visus!</h3>
            <p>Det som verkligen räknas är inte den <em>fria visus</em> (utan glasögon) utan den <strong>korrigerade visus</strong> (med glasögon). Om personen med glasögon kan uppnå 1,0 eller bättre, så är synen god!</p>
            
            <div class="warning-box">
                <strong>🚗 Körkortkrav i Sverige</strong>
                <p>För körkort i Sverige krävs minst <strong>0,5 visus</strong> på ett öga. En person med 0,8 uppfyller alltså körkortkravet utan problem!</p>
            </div>
            
            <h3>📌 Exempel från Kent Lundgrens undersökningar</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Datum</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Fri visus höger</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Fri visus vänster</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Korrigerad visus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Maj 2021</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">1,0−</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">1,0−</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">1,0−</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Januari 2026</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">0,8−</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">0,9−</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">1,0 ✓</td>
                    </tr>
                </tbody>
            </table>
            
            <p style="margin-top: 15px;"><strong>Tolkning:</strong> Fri visus har sjunkit något över 5 år (normalt med åldern), men korrigerad visus är fortfarande utmärkt med rätt glasögon!</p>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Optikerförbundet (u.å.) <em>Synen</em>. Tillgänglig: <a href="https://optikerforbundet.se/synen/" target="_blank" rel="noopener noreferrer">optikerforbundet.se</a> [Hämtad: 16 januari 2026].</li>
                <li>S:t Eriks Ögonsjukhus (u.å.) <em>Synundersökning</em>. Tillgänglig: <a href="https://sankterik.se/sv-se/patient/undersokningar-och-behandlingar/synundersokning" target="_blank" rel="noopener noreferrer">sankterik.se</a> [Hämtad: 16 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Vilken typ av progressiva glas är MEST lämpliga för en person som arbetar mycket vid dator och behöver se skarpt från läsavstånd (40 cm) upp till cirka 2 meter, men inte behöver se skarpt på längre avstånd?",
        answers: [
            "a) Vanliga progressiva glasögon",
            "b) Enkelslipade läsglasögon",
            "c) Närprogressiva glasögon (Office MIDI)",
            "d) Bifokala glasögon"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) Närprogressiva glasögon (Office MIDI)</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Närprogressiva glasögon, även kallade <strong>Office MIDI</strong> eller arbetsprogressiva, är speciellt designade för personer som arbetar mycket vid dator.</p>
            
            <div class="info-box">
                <strong>👓 Närprogressiva glasögon (Office MIDI)</strong>
                <ul>
                    <li>✅ Skarp syn från cirka <strong>40 cm till 1,5-2 meter</strong></li>
                    <li>✅ Perfekt för datorarbete, läsning och mindre möten</li>
                    <li>✅ <strong>Mycket bredare och bekvämare synfält</strong> för nära- och mellanavstånd</li>
                    <li>✅ Minskar belastning i nacke och axlar</li>
                    <li>✅ Betydligt mer komfortabla för långvarigt skärmarbete</li>
                    <li>❌ Fungerar inte för bilkörning eller långt håll</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <h4>b) Enkelslipade läsglasögon</h4>
            <ul>
                <li>Ger endast skarp syn på <strong>ett specifikt avstånd</strong> (vanligen 40 cm)</li>
                <li>Fungerar inte för datorskärmen som oftast är på 50-70 cm avstånd</li>
                <li>Kräver att man tar av/på glasögonen vid olika avstånd</li>
            </ul>
            
            <h4>a) Vanliga progressiva glasögon</h4>
            <ul>
                <li>Fungerar för <strong>alla avstånd</strong> (nära, mellan, långt)</li>
                <li>Men har <strong>smalare synfält</strong> för mellanavstånd</li>
                <li>Mindre komfortabla för långvarigt datorarbete</li>
                <li>Kräver ofta ogynnsamma huvudpositioner vid skärmarbete</li>
            </ul>
            
            <h4>d) Bifokala glasögon</h4>
            <ul>
                <li>Har en <strong>synlig gräns</strong> mellan avstånds- och närdel</li>
                <li>Äldre teknik, mindre komfortabel</li>
                <li>Saknar mellanzon för datorarbete</li>
            </ul>
            
            <h3>🏢 För ännu större arbetsytor</h3>
            <p>Om du behöver se skarpt upp till <strong>4-5 meter</strong> (t.ex. för möten och presentationer), finns <strong>rumsprogressiva glasögon (Office MAXI)</strong>!</p>
            
            <div class="warning-box">
                <strong>💼 Rekommendation för datorarbete</strong>
                <p>Om du arbetar mer än 4 timmar per dag vid dator, investera i <strong>närprogressiva</strong> eller <strong>rumsprogressiva</strong> glasögon. Din nacke, axlar och ögon kommer att tacka dig!</p>
            </div>
            
            <h3>📊 Jämförelsetabell</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #1e3a5f; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Glastyp</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Synområde</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Bäst för</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Enkelslipade</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">40 cm</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Endast läsning</td>
                    </tr>
                    <tr style="background: #d1fae5;">
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Närprogressiva</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>40 cm - 2 m</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Datorarbete ✓</strong></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Rumsprogressiva</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">40 cm - 5 m</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Kontor + möten</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Vanliga progressiva</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Alla avstånd</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Universellt</td>
                    </tr>
                </tbody>
            </table>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>RenOptik (u.å.) <em>Rumsprogressiva terminalglasögon</em>. Tillgänglig: <a href="https://www.renoptik.se/arbetsglasogon_terminalglasogon/" target="_blank" rel="noopener noreferrer">www.renoptik.se</a> [Hämtad: 16 januari 2026].</li>
                <li>Synsam (u.å.) <em>Progressiva glasögon</em>. Tillgänglig: <a href="https://www.synsam.se/guide/glasögon/progressiva-glasögon" target="_blank" rel="noopener noreferrer">www.synsam.se</a> [Hämtad: 16 januari 2026].</li>
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
    
    console.log('QUIZ INITIERAT - Synundersökningar och Terminalglasögon');
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
        message = '🏆 Perfekt! Du har helt koll på synundersökningar och terminalglasögon! Nu kan du ta tillvara på dina rättigheter!';
    } else if (percentage >= 80) {
        message = '⭐ Mycket bra! Du har god förståelse för synundersökningar och dina rättigheter vid datorarbete. Fortsätt lära!';
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
                    <li><strong>Arbetsgivarens skyldighet:</strong> Erbjuda synundersökning vid >1 h bildskärmsarbete/dag</li>
                    <li><strong>Sfärvärde:</strong> Plus (+) = översynthet, Minus (−) = närsynthet</li>
                    <li><strong>Presbyopi:</strong> Börjar cirka 40-45 års ålder – naturlig åldersförändring</li>
                    <li><strong>Visus 0,8:</strong> Helt normalt inom normal variation (0,6-1,5)</li>
                    <li><strong>Närprogressiva glasögon:</strong> Bäst för datorarbete (40 cm - 2 m)</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="https://controllerutangranser.wordpress.com/2026/01/16/att-forsta-synundersokningar-och-terminalglasogon/" target="_blank" rel="noopener noreferrer">Läs blogginlägget om synundersökningar</a></li>
                    <li><a href="SpecSaversKentLundgren_maj_2021_jan_2026.pdf" target="_blank" rel="noopener noreferrer">Se Kent Lundgrens synundersökningar (PDF)</a></li>
                    <li><a href="https://www.av.se/inomhusmiljo/dator--och-bildskarmsarbete/belysning-vid-anvandning-av-datorer-och-bildskarmar/synundersokning-och-glasogon-for-dator--och-bildskarmsarbete/" target="_blank" rel="noopener noreferrer">Arbetsmiljöverket: Synundersökning och terminalglasögon</a></li>
                    <li><a href="https://controllerutangranser.wordpress.com/" target="_blank" rel="noopener noreferrer">Controller utan gränser – fler analyser</a></li>
                </ul>
                <p style="margin-top: 15px; font-size: 0.95em;"><em>👓 Ta hand om din syn – du har bara ett par ögon!</em></p>
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
// Quiz för Synundersökningar och Terminalglasögon
//
// Skapad: 2026-01-16
// Ämne: Synundersökningar i Sverige med fokus på terminalglasögon för datorarbete
// Författare: Kent Lundgren med AI-assistans (Claude Sonnet 4.5)
//
// Källor (i Harvard-format):
// - Lundgren, K. (2026). Att förstå synundersökningar och terminalglasögon.
//   Tillgänglig: https://controllerutangranser.wordpress.com/2026/01/16/att-forsta-synundersokningar-och-terminalglasogon/
// - Arbetsmiljöverket (u.å.). Synundersökning och glasögon för dator- och bildskärmsarbete.
//   Tillgänglig: https://www.av.se/
// - Specsavers (u.å.). Förstå ditt glasögonrecept.
//   Tillgänglig: https://www.specsavers.se/synvard/ditt-recept
// - Mister Spex (u.å.). Receptet förklarat.
//   Tillgänglig: https://www.misterspex.se/c/rat/510
// - Smarteyes (u.å.). Ålderssynthet - presbyopi.
//   Tillgänglig: https://www.smarteyes.se/ogonhalsa/synfel/alderssynthet-presbyopi
// ============================================
