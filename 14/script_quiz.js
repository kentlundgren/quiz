// ============================================
// JAVASCRIPT FÖR QUIZ: ÅRSBOKSLUT OCH ÅRSREDOVISNING
// En guide för kommunalt anställda i Simrishamn
//
// Skapad: 2025-11-20
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna arsredovisning_2021.jpg och arsredovisning_2024.jpg växlar automatiskt var 3:e sekund
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
// INTRODUKTIONSTEXTER - Fem slides om årsbokslut och årsredovisning
// Här presenteras grundläggande information om årsbokslutsprocessen
// ============================================
const introPages = [
    {
        title: "Årsbokslut vs Årsredovisning – Vad är skillnaden?",
        body: `
            <p>Välkommen till ett quiz om två begrepp som ofta blandas ihop – men som har helt olika roller i den kommunala ekonomiska rapporteringen!</p>
            
            <div class="info-box">
                <strong>🔐 ÅRSBOKSLUT = Stänga kassan</strong>
                <ul>
                    <li><strong>Vad:</strong> Teknisk process där bokföringen avslutas</li>
                    <li><strong>Hur:</strong> Alla siffror "låses" för året</li>
                    <li><strong>Fokus:</strong> Att alla transaktioner är rätt bokförda</li>
                    <li><strong>När:</strong> Januari (stängs 19 januari i Simrishamn)</li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>📖 ÅRSREDOVISNING = Berätta historien</strong>
                <ul>
                    <li><strong>Vad:</strong> Formellt dokument som presenterar resultatet</li>
                    <li><strong>Hur:</strong> Verksamhetsberättelser och målanalyser</li>
                    <li><strong>Fokus:</strong> Varför blev det som det blev?</li>
                    <li><strong>När:</strong> Februari-april (fullmäktige beslutar i april)</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>🎯 Enkelt sagt:</strong>
                <ul>
                    <li><strong>Årsbokslut:</strong> "Vi gick plus 2 miljoner"</li>
                    <li><strong>Årsredovisning:</strong> "Vi gick plus 2 miljoner för att vi gjorde X, Y och Z, och nästa år planerar vi..."</li>
                </ul>
            </div>
            
            <p><em>Källor: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2018597-om-kommunal-bokforing-och_sfs-2018-597/" target="_blank" rel="noopener noreferrer">Lagen om kommunal bokföring och redovisning (2018:597)</a>; <a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em></a>; <a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em></a>.</em></p>
        `
    },
    {
        title: "De heliga datumen – Missa inte dessa!",
        body: `
            <p>I januari och februari är det några kritiska datum du <strong>INTE får missa</strong>. Här är de fyra viktigaste deadlines i Simrishamns årsbokslutsprocess:</p>
            
            <div class="info-box">
                <strong>📅 9 JANUARI - Fakturadödlinje</strong>
                <ul>
                    <li>Sista dagen att fakturera internt och externt</li>
                    <li><strong>MEN:</strong> Fakturera gärna tidigare!</li>
                    <li>⚠️ Missar du detta? Intäkten hamnar i fel år</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>⏰ 14 JANUARI - Betalnings- och attesteringsdödlinje</strong>
                <ul>
                    <li>Alla fakturor måste vara betalda/attesterade</li>
                    <li>Bokföringen stängs för alla utom ekonomerna</li>
                    <li>⚠️ Även fakturor med senare förfallodag!</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>🔒 19 JANUARI - Total stängning</strong>
                <ul>
                    <li>Bokföringen för 2025 stängs helt</li>
                    <li>Balanskonton ska vara avstämda</li>
                    <li>Endast centrala justeringar efter detta</li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>📝 6 FEBRUARI - Årsredovisningens hjärta</strong>
                <ul>
                    <li>Verksamhetsberättelser klara</li>
                    <li>Måluppföljning gjord</li>
                    <li>Investeringsredovisning rapporterad</li>
                </ul>
            </div>
            
            <p><em>Källor: <a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 1</a>; <a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em>, s. 1-2</a>.</em></p>
        `
    },
    {
        title: "Periodisering – Varför ekonomer bryr sig (och varför du också borde!)",
        body: `
            <p>Periodisering är en av de mest grundläggande principerna i kommunal redovisning – och en av de vanligaste källorna till fel vid årsbokslutet!</p>
            
            <div class="info-box">
                <strong>💡 Vad är periodisering?</strong>
                <p>Kostnader och intäkter ska hamna i rätt tidsperiod – när affärshändelsen äger rum, inte när betalning sker.</p>
            </div>
            
            <h3>📋 Exempel 1: Försäkringen som täcker nästa år</h3>
            <ul>
                <li><strong>Faktura:</strong> 120 000 kr kommer december 2025</li>
                <li><strong>Men:</strong> Den täcker januari-december 2026</li>
                <li><strong>Lösning:</strong> Måste periodiseras till 2026!</li>
            </ul>
            
            <h3>📋 Exempel 2: Tjänsten som utfördes men inte fakturerades</h3>
            <ul>
                <li><strong>Utredning:</strong> Gjordes i december 2025</li>
                <li><strong>Faktura:</strong> Skickades i januari 2026</li>
                <li><strong>Lösning:</strong> Måste ha avvikande bokföringsdatum för 2025</li>
            </ul>
            
            <div class="warning-box">
                <strong>⚡ Praktisk regel i Simrishamn:</strong>
                <p>Poster under 10 000 kr behöver inte periodiseras (väsentlighetsprincipen)</p>
            </div>
            
            <div class="info-box">
                <strong>🎯 Varför detta spelar roll:</strong>
                <p>Fel periodisering = Fel budgetuppföljning = Fel beslut för nästa år!</p>
            </div>
            
            <p><em>Källor: <a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 2-3</a>; <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR (2021) <em>RKR R14 Drift- och investeringsredovisning</em></a>.</em></p>
        `
    },
    {
        title: "Din verksamhetsberättelse – Sex rubriker som berättar er historia",
        body: `
            <p>När du ska skriva din verksamhetsberättelse är det lätt att känna sig vilsen. Men strukturen är faktiskt ganska enkel – sex rubriker som tillsammans berättar årets historia!</p>
            
            <div class="info-box">
                <strong>1️⃣ UPPDRAG</strong>
                <p>Kort om vad ni ansvarar för (i punktform)</p>
            </div>
            
            <div class="info-box">
                <strong>2️⃣ HÄNDELSER AV VÄSENTLIG BETYDELSE</strong>
                <p>Cirka 5 viktiga händelser under året – det viktigaste först!</p>
            </div>
            
            <div class="info-box">
                <strong>3️⃣ VERKSAMHETSUPPFÖLJNING</strong>
                <p>Vad har ni gjort? Hur följs verksamheten upp?<br>
                • Uppföljning av privata utförare<br>
                • Uppföljning av intern kontroll</p>
            </div>
            
            <div class="info-box">
                <strong>4️⃣ MÅLUPPFÖLJNING</strong>
                <p>Nådde ni målen? Varför/varför inte?<br>
                <em>"Det ska vara tydligt för läsaren utan att veta vad indikatorerna är"</em></p>
            </div>
            
            <div class="info-box">
                <strong>5️⃣ EKONOMI</strong>
                <p>Över-/underskott i mnkr, fördelat på verksamheter<br>
                <strong>Analys:</strong> VARFÖR blev det så?</p>
            </div>
            
            <div class="info-box">
                <strong>6️⃣ FRAMTID</strong>
                <p>Hur ser framtiden ut för er verksamhet?</p>
            </div>
            
            <div class="warning-box">
                <strong>✍️ Viktigt att komma ihåg:</strong>
                <p>"Skriv kort och kärnfullt. Läsaren ska orka läsa texten"</p>
            </div>
            
            <p><em>Källor: <a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em>, s. 2-6</a>; <a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR (2024) <em>RKR R15 Förvaltningsberättelse</em></a>.</em></p>
        `
    },
    {
        title: "Alla gör samma sak – Jämförelse med andra kommuner",
        body: `
            <p>En sak som är bra att veta: Du är inte ensam! Alla Sveriges 290 kommuner går igenom exakt samma process varje år.</p>
            
            <div class="info-box">
                <strong>🏛️ GEMENSAMT FÖR ALLA SVENSKA KOMMUNER:</strong>
            </div>
            
            <h3>📜 Samma regelverk:</h3>
            <ul>
                <li><a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2018597-om-kommunal-bokforing-och_sfs-2018-597/" target="_blank" rel="noopener noreferrer">Lag om kommunal bokföring och redovisning (2018:597)</a></li>
                <li><a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR:s rekommendationer</a></li>
                <li>Kommun-Bas 26 (baskontoplanen)</li>
            </ul>
            
            <h3>📅 Liknande tidplaner:</h3>
            <ul>
                <li><strong>Årsbokslut:</strong> Januari</li>
                <li><strong>Årsredovisning klar:</strong> Mars-april</li>
                <li><strong>Fullmäktige beslutar:</strong> April</li>
            </ul>
            
            <h3>😰 Samma utmaningar:</h3>
            <ul>
                <li>Få in underlag i tid</li>
                <li>Periodiseringar</li>
                <li>Balanskontostämningar</li>
            </ul>
            
            <div class="warning-box">
                <strong>💪 Glöm inte:</strong>
                <p>Om du känner dig överväldigad – ring din controller eller ekonomifunktion! De har gått igenom det här många gånger och kan hjälpa dig.</p>
            </div>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av årsbokslut och årsredovisning. Lycka till! 🎯</p>
            
            <p><em>Källor: <a href="https://skr.se" target="_blank" rel="noopener noreferrer">SKR (2024)</a>; Helsingborg stad (2024); Landskrona stad (2025).</em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om årsbokslut och årsredovisning
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Du är enhetschef och får en faktura på 240 000 kr i december 2025. Fakturan avser hyra för lokaler januari-december 2026. Vad ska du göra?",
        answers: [
            "a) Betala fakturan direkt - den kom ju 2025 så den ska belasta 2025",
            "b) Periodisera kostnaden till 2026 eftersom hyran avser 2026",
            "c) Vänta med att betala till 2026 så hamnar kostnaden automatiskt rätt",
            "d) Dela upp beloppet 50/50 mellan 2025 och 2026"
        ],
        correct: 1, // Index 1 = b
        explanation: `
            <strong>✓ RÄTT SVAR: b) Periodisera kostnaden till 2026 eftersom hyran avser 2026</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Detta är ett klassiskt exempel på <strong>periodisering</strong>, som är en av de mest grundläggande principerna i kommunal redovisning. Simrishamns instruktioner är mycket tydliga på denna punkt: <em>"Samtliga leverantörsfakturor som ankommer 2025 och avser 2026 ska periodiseras det vill säga kostnaden ska belasta år 2026"</em> (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 3</a>).</p>
            
            <h3>🎯 Vad är periodisering?</h3>
            
            <p>Principen bakom detta finns i Den kommunala redovisningslagen som <em>"förutsätter en noggrann periodisering av såväl intäkter som kostnader"</em> (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 2</a>). Den centrala frågan är <strong>inte när fakturan kommer eller när den betalas</strong>, utan <strong>när affärshändelsen äger rum</strong> - i detta fall när ni faktiskt har lokalerna till ert förfogande.</p>
            
            <h3>🔧 Hur gör man rent praktiskt?</h3>
            
            <p>I praktiken innebär periodisering att du i konteringsraden använder fältet <strong>"periodisering"</strong> och anger den månad som ska belastas - i detta fall januari 2026, vilket anges som <strong>"260101"</strong> (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 3</a>).</p>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Fel! Det skulle innebära att 2025 belastas för en kostnad som avser 2026, vilket strider mot periodiseringsprincipen.</li>
                <li><strong>Alternativ C:</strong> Fel! Tidpunkten för betalning styr INTE vilket år kostnaden ska belasta. Enligt RKR:s rekommendationer ska kostnader redovisas när de uppstår, inte när de betalas (RKR, 2021).</li>
                <li><strong>Alternativ D:</strong> Fel! Hela hyran avser 2026 - det finns ingen koppling till 2025 alls.</li>
            </ul>
            
            <div class="warning-box">
                <strong>⚠️ Varför detta är viktigt:</strong>
                <p>Felaktig periodisering kan leda till att din förvaltnings ekonomiska resultat för både 2025 och 2026 blir missvisande, vilket i sin tur kan påverka budgetbeslut för kommande år.</p>
            </div>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 2-3</a></li>
                <li><a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR (2021) <em>RKR R14 Drift- och investeringsredovisning</em></a></li>
            </ul>
        `
    },
    {
        question: "Det är den 10 januari 2026. Du upptäcker att din enhet utförde en stor utredning åt Tekniska förvaltningen i december 2025, men glömde att skicka internfakturan. Vad gör du?",
        answers: [
            "a) Skickar internfakturan omedelbart - det är ju bara någon dag sent",
            "b) Väntar till februari och skickar då - inga pengar försvinner ju",
            "c) Kan inte göra något - deadline 9 januari har passerat, intäkten är förlorad",
            "d) Kontaktar ekonomifunktionen omedelbart för att få vägledning om hur situationen ska hanteras"
        ],
        correct: 3, // Index 3 = d
        explanation: `
            <strong>✓ RÄTT SVAR: d) Kontaktar ekonomifunktionen omedelbart för att få vägledning om hur situationen ska hanteras</strong>
            
            <h3>💡 Varför är detta rätt svar?</h3>
            
            <p>Detta är en <strong>knepig situation</strong> som visar varför deadlines i årsbokslutet inte är godtyckliga. Enligt Simrishamns instruktioner är den 9 januari <em>"senaste dag att fakturera internt och externt"</em> (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 1</a>). Men vad händer om man missar detta datum?</p>
            
            <h3>🤔 Varför är det så komplicerat?</h3>
            
            <p>Situationen är komplicerad av flera skäl:</p>
            
            <ol>
                <li><strong>Internfakturor måste betalas för att bokföras:</strong> Instruktionerna är tydliga: <em>"Observera att inga interna fordringar får finnas kvar i bokslutet, intäkten bokförs inte förrän internfakturan är betald"</em> (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 2</a>). Om fakturan skickas efter 9 januari hinner den troligen inte betalas innan bokföringen stängs 14 januari.</li>
                
                <li><strong>Bokföringen stängs stegvis:</strong> Den 14 januari stängs bokföringen för alla utom ekonomerna, och den 19 januari stängs den helt (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 1</a>). Efter 19 januari kan endast centrala justeringar göras.</li>
                
                <li><strong>Periodiseringsprincipen:</strong> Tjänsten utfördes i december 2025, så intäkten BORDE belasta 2025 enligt periodiseringsprincipen. Men nu har den normala processen för detta passerat.</li>
            </ol>
            
            <h3>💪 Vad kan ekonomifunktionen göra?</h3>
            
            <p>Genom att kontakta ekonomifunktionen tidigt kan möjliga lösningar utredas, som kan innebära:</p>
            <ul>
                <li>En manuell periodisering genom bokföringsorder (om det fortfarande är tekniskt möjligt)</li>
                <li>Dokumentation av varför intäkten hamnar 2026 trots att tjänsten utfördes 2025</li>
                <li>Vägledning om hur situationen ska hanteras i verksamhetsberättelsen</li>
                <li>Information till revisorerna om avvikelsen</li>
            </ul>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Tekniskt möjligt men skapar problem eftersom fakturan troligen inte hinner betalas innan bokföringen stängs.</li>
                <li><strong>Alternativ B:</strong> Mycket dåligt! Då hamnar intäkten definitivt i fel år, och din verksamhetsberättelse kommer visa lägre intäkter än vad som faktiskt intjänats.</li>
                <li><strong>Alternativ C:</strong> För defaitistiskt - det finns ofta lösningar eller sätt att hantera situationen korrekt, men det kräver tidig kommunikation med ekonomifunktionen.</li>
            </ul>
            
            <div class="warning-box">
                <strong>📢 Lärdomen:</strong>
                <p>Detta exempel visar också varför instruktionerna betonar: <em>"MEN fakturera i god tid innan månadsskiftet om det är möjligt"</em> (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 1</a>). Deadlines finns av en anledning, och ju tidigare man är ute, desto färre problem uppstår!</p>
            </div>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 1-2</a></li>
                <li><a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR (2021) <em>RKR R14 Drift- och investeringsredovisning</em></a></li>
            </ul>
        `
    },
    {
        question: "Du ska skriva din verksamhetsberättelse för årsredovisningen. Under vilken rubrik ska du beskriva att din verksamhet genomförde en stor omorganisation, anställde fem nya medarbetare och fick ett utmärkelsepris för innovativt arbetssätt?",
        answers: [
            "a) Uppdrag",
            "b) Händelser av väsentlig betydelse",
            "c) Verksamhetsuppföljning",
            "d) Framtid"
        ],
        correct: 1, // Index 1 = b
        explanation: `
            <strong>✓ RÄTT SVAR: b) Händelser av väsentlig betydelse</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Denna fråga testar om du förstår <strong>strukturen i en kommunal verksamhetsberättelse</strong> och vad som hör hemma under respektive rubrik. Enligt Simrishamns instruktioner ska verksamhetsberättelsen bestå av sex huvudrubriker, varav en är <strong>"Händelser av väsentlig betydelse"</strong> (<a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em>, s. 3</a>).</p>
            
            <h3>🎯 Vad hör hit under denna rubrik?</h3>
            
            <p>Under denna rubrik ska förhållanden som <em>"ändrats jämfört med tidigare år eller viktiga stora händelser"</em> redovisas. Instruktionerna ger specifika exempel på vad som hör hit:</p>
            
            <ul>
                <li>"Nya eller avvecklade verksamheter/enheter, organisatoriska förändringar"</li>
                <li>"Olika former av utmärkelser eller priser"</li>
                <li>"Stora genomförda investeringar som påverkar invånarna"</li>
            </ul>
            
            <p>I frågan beskrivs tre händelser som alla passar <strong>perfekt</strong> under denna rubrik:</p>
            <ul>
                <li>✅ <strong>Omorganisation och fem nya medarbetare</strong> = organisatorisk förändring och volymförändring</li>
                <li>✅ <strong>Utmärkelsepris</strong> = explicit nämnt som exempel i instruktionerna</li>
            </ul>
            
            <h3>📝 Praktiska tips från instruktionerna</h3>
            
            <div class="info-box">
                <ul>
                    <li>"Händelserna anges i punktform, cirka 5 st per förvaltning"</li>
                    <li>"De viktigaste händelserna anges först"</li>
                    <li>"Tempus vara i imperfekt" (dvs. "genomfördes", "anställdes", "fick")</li>
                    <li>"Meningarna vara fullständiga"</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A (Uppdrag):</strong> Fel! Den rubriken ska innehålla <em>"en kortfattad information i punktform om vilka verksamhetsområden som nämnden har ansvar för"</em> (<a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em>, s. 3</a>) - alltså det grundläggande uppdraget, inte vad som hänt under året.</li>
                
                <li><strong>Alternativ C (Verksamhetsuppföljning):</strong> Fel! Den rubriken ska beskriva <em>"i stora drag vilken verksamhet som bedrivits under året samt hur denna har följts upp"</em> (<a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em>, s. 4</a>) - alltså den löpande verksamheten, inte specifika händelser.</li>
                
                <li><strong>Alternativ D (Framtid):</strong> Fel! Den rubriken ska ge <em>"kortfattad information avseende hur framtiden ser ut för nämnden"</em> (<a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em>, s. 6</a>) - alltså framåtblickande, inte beskrivning av vad som redan hänt.</li>
            </ul>
            
            <div class="warning-box">
                <strong>🌍 Gäller för alla kommuner:</strong>
                <p>Denna strukturering är inte unik för Simrishamn - den följer i stort RKR:s rekommendationer om förvaltningsberättelse (RKR R15), vilket innebär att du kommer hitta liknande struktur i de flesta svenska kommuners årsredovisningar.</p>
            </div>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em>, s. 3-4</a></li>
                <li><a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR (2024) <em>RKR R15 Förvaltningsberättelse</em></a></li>
            </ul>
        `
    },
    {
        question: "Din kollega säger: 'Jag förstår inte varför vi har både årsbokslut och årsredovisning - är det inte samma sak?' Vilket svar är mest korrekt?",
        answers: [
            "a) Det är i princip samma sak, bara olika namn på samma process",
            "b) Årsbokslutet är när siffrorna stängs och kontrolleras, årsredovisningen är när vi berättar historien bakom siffrorna med verksamhetsberättelser och målanalyser",
            "c) Årsredovisningen är bara för aktiebolag, kommuner gör endast årsbokslut",
            "d) Skillnaden är att årsbokslutet görs av ekonomerna medan årsredovisningen görs av politikerna"
        ],
        correct: 1, // Index 1 = b
        explanation: `
            <strong>✓ RÄTT SVAR: b) Årsbokslutet är när siffrorna stängs och kontrolleras, årsredovisningen är när vi berättar historien bakom siffrorna med verksamhetsberättelser och målanalyser</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Detta är <strong>kärnan</strong> i hela diskussionen om årsbokslut kontra årsredovisning, och missförstånd här leder ofta till att people missar deadlines eller inte förstår varför vissa saker måste göras vid specifika tidpunkter.</p>
            
            <h3>📊 Skillnaden kan förklaras genom syfte, innehåll och tidpunkt</h3>
            
            <div class="info-box">
                <strong>🔐 ÅRSBOKSLUT - Den tekniska processen</strong>
                <p>Enligt Lagen om kommunal bokföring och redovisning (2018:597) ska bokföringsskyldigheten innefatta att <em>"vid räkenskapsårets utgång avsluta bokföringen med en årsredovisning"</em> (Sveriges Riksdag, 2018). Men före årsredovisningen kommer årsbokslutet - den tekniska process där:</p>
                <ul>
                    <li>All löpande bokföring avslutas</li>
                    <li>Bokslutstransaktioner genomförs (periodiseringar, avskrivningar, etc.)</li>
                    <li>Balanskonton avstäms och dokumenteras</li>
                    <li>Bokföringen "stängs" så inga fler ändringar kan göras</li>
                </ul>
                <p>I Simrishamn sker detta under januari, med kritiska datum 9, 14 och 19 januari (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 1</a>).</p>
            </div>
            
            <div class="info-box">
                <strong>📖 ÅRSREDOVISNING - Berättelsen och analysen</strong>
                <p>Årsredovisningen bygger på årsbokslutet men går mycket längre. RKR beskriver att årsredovisningen ska ge en <em>"rättvisande bild"</em> av verksamheten och inte bara presentera siffror utan också förklara och analysera (RKR, 2024).</p>
                
                <p>I Simrishamns process innebär detta:</p>
                <ul>
                    <li>Verksamhetsberättelser (deadline 6 februari)</li>
                    <li>Måluppföljning och analys</li>
                    <li>Investeringsredovisning i detalj</li>
                    <li>Förvaltningsberättelse med analys av resultat och måluppfyllelse</li>
                    <li>Kommunstyrelsens ordförandes avsnitt</li>
                </ul>
                <p>Hela denna process sträcker sig från januari till april, när kommunfullmäktige slutligen beslutar om årsredovisningen.</p>
            </div>
            
            <h3>🏪 En praktisk analogi</h3>
            
            <p>Tänk på det som skillnaden mellan att:</p>
            <ul>
                <li><strong>Årsbokslut:</strong> Räkna kassan i en butik efter stängningsdags, kontrollera att alla kvitton finns, se till att inget är fel</li>
                <li><strong>Årsredovisning:</strong> Skriva årsrapporten till ägarna där du förklarar varför försäljningen ökade, vilka nya produkter ni lanserade, och vad planerna är för nästa år</li>
            </ul>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Helt fel och tyvärr ett vanligt missförstånd. Processerna har olika syften, innehåll och tidpunkter.</li>
                
                <li><strong>Alternativ C:</strong> Fel på flera sätt! För det första måste även kommuner upprätta årsredovisning - det är ett lagkrav enligt <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2018597-om-kommunal-bokforing-och_sfs-2018-597/" target="_blank" rel="noopener noreferrer">Lagen om kommunal bokföring och redovisning 2 kap. 1 §</a> (Sveriges Riksdag, 2018).</li>
                
                <li><strong>Alternativ D:</strong> Innehåller viss sanning (ekonomerna gör mycket av årsbokslutet, politikerna beslutar om årsredovisningen) men missar helt poängen med vad som skiljer dem åt i innehåll och syfte.</li>
            </ul>
            
            <div class="warning-box">
                <strong>🌍 Samma process i alla kommuner:</strong>
                <p>Även om Simrishamn är en mindre kommun (18 000 invånare), följer de samma grundläggande process som större kommuner som Helsingborg (150 000 invånare). Skillnaderna ligger mer i detaljeringsnivå och resursinsats än i grundstrukturen.</p>
            </div>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em></a></li>
                <li><a href="Instruktioner__till_arsredovisning_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025b) <em>Instruktioner till årsredovisning 2025</em></a></li>
                <li><a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2018597-om-kommunal-bokforing-och_sfs-2018-597/" target="_blank" rel="noopener noreferrer">Sveriges Riksdag (2018) <em>Lag (2018:597) om kommunal bokföring och redovisning</em></a></li>
                <li><a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR (2024) <em>RKR R15 Förvaltningsberättelse</em></a></li>
                <li>Helsingborg stad (2024) <em>Instruktioner för årsbokslut och årsredovisning 2024</em></li>
            </ul>
        `
    },
    {
        question: "I november 2025 köpte Kultur och Fritidsförvaltningen in ny sportutrustning till fritidsgårdarna för totalt 45 000 kr som bokfördes som en investering (projekt 6000-9999). Vid årsbokslutet i januari 2026 upptäcker ni att utrustningen består av olika mindre föremål (bordtennisbord, bordshockeyspel, mobila högtalare m.m.) där inget enskilt föremål överstiger 15 000 kr. Enligt Simrishamns investeringsriktlinjer - vad blir konsekvensen?",
        answers: [
            "a) Ingen konsekvens - totalsumman 45 000 kr överstiger ju gränsen på ett halvt prisbasbelopp",
            "b) Transaktionen måste bokas om från investering till drift eftersom varken enskilda föremål eller 'samlade och samtida inköp av flera likartade inventarier' uppfyller kriterierna för investering",
            "c) Kan ligga kvar som investering om minst tre föremål är likartade - då räknas det som samlat inköp",
            "d) Sportutrustning är alltid investering enligt kommunala redovisningsregler, oavsett belopp"
        ],
        correct: 1, // Index 1 = b
        explanation: `
            <strong>✓ RÄTT SVAR: b) Transaktionen måste bokas om från investering till drift eftersom varken enskilda föremål eller "samlade och samtida inköp av flera likartade inventarier" uppfyller kriterierna för investering</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Detta är en fråga som visar hur viktigt det är att <strong>redan vid inköpstillfället</strong> förstå Simrishamns investeringsriktlinjer och vad som klassas som investering kontra driftskostnad. För Kultur och Fritidsförvaltningen, som ofta köper in utrustning till olika verksamheter, är denna förståelse extra viktig.</p>
            
            <h3>📋 Simrishamns investeringsriktlinjer</h3>
            
            <p>Enligt kommunens fastställda investeringsriktlinjer (<a href="Investeringsriktlinjer_Simrishamns_kommun.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2022) <em>Investeringsriktlinjer för Simrishamns kommun</em>. KS 2022-03-16, §37, Dnr KS 2021/357</a>) ska <strong>SAMTLIGA tre</strong> nedanstående kriterier vara uppfyllda för att något ska klassas som investering:</p>
            
            <ol>
                <li>"Anskaffningen ska vara avsedd för stadigvarande bruk eller innehav"</li>
                <li>"Anskaffningen ska överstiga ett halvt prisbasbelopp (prisbasbelopp 2025 = ca 26 000 kr)"</li>
                <li>"Anskaffningen ska beräknas ha en ekonomisk livslängd på minst tre år"</li>
            </ol>
            
            <div class="warning-box">
                <strong>⚠️ Kritiskt:</strong>
                <p>"Uppfylls inte samtliga tre kriterier ska anskaffningen redovisas som en driftskostnad" (<a href="Investeringsriktlinjer_Simrishamns_kommun.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2022) <em>Investeringsriktlinjer för Simrishamns kommun</em>. KS 2022-03-16, §37, Dnr KS 2021/357, s. 2</a>).</p>
            </div>
            
            <h3>🎯 Beloppsgränsen och "likartade inventarier"</h3>
            
            <p>Investeringsriktlinjerna har också en specifik regel om samlade inköp: <em>"Beloppsgränsen gäller även vid: Samlade och samtida inköp av flera likartade inventarier. Ett exempel på detta kan vara ett samtida inköp av ett antal likartade cyklar till flera olika förskolor. Likartade kan ses som olika modeller på cyklar"</em> (<a href="Investeringsriktlinjer_Simrishamns_kommun.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2022) <em>Investeringsriktlinjer för Simrishamns kommun</em>. KS 2022-03-16, §37, Dnr KS 2021/357, s. 2</a>).</p>
            
            <p>Men i vårt exempel har vi:</p>
            <ul>
                <li>Bordtennisbord (ca 8 000-10 000 kr styck)</li>
                <li>Bordshockeyspel (ca 5 000 kr)</li>
                <li>Mobila högtalare (ca 3 000 kr styck)</li>
                <li>Diverse annan sportutrustning</li>
            </ul>
            
            <p>Dessa är <strong>INTE "likartade inventarier"</strong> - de är olika typer av utrustning med olika funktioner. Riktlinjerna nämner också "samlade och samtida inköp av inventarier med ett naturligt samband" och ger exemplet "inköp av klassrumsmöbler till ett antal klassrum inom grundskolan" (<a href="Investeringsriktlinjer_Simrishamns_kommun.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2022) <em>Investeringsriktlinjer för Simrishamns kommun</em>. KS 2022-03-16, §37, Dnr KS 2021/357, s. 2</a>).</p>
            
            <p>Man kan argumentera för att "sportutrustning till fritidsgårdar" har ett naturligt samband, men det kritiska är att <strong>inget enskilt föremål överstiger gränsen</strong> på ca 26 000 kr, och de är inte tillräckligt likartade för att räknas som "flera likartade inventarier".</p>
            
            <h3>🚨 Konsekvenserna av ombokningen är omfattande</h3>
            
            <div class="warning-box">
                <strong>1. Investeringsredovisningen påverkas:</strong>
                <p>Den investering som Kultur och Fritidsförvaltningen trodde hade gjorts har egentligen inte gjorts. Detta påverkar förvaltningens investeringsbudget, anläggningsregistret och rapporteringen i årsredovisningen.</p>
            </div>
            
            <div class="warning-box">
                <strong>2. Driftredovisningen påverkas:</strong>
                <p>De 45 000 kr ska istället belasta driften, vilket innebär 45 000 kr högre driftskostnader än budgeterat. Risk för att förvaltningen går från plus till minus i driftsresultatet!</p>
            </div>
            
            <div class="warning-box">
                <strong>3. Resultatpåverkan:</strong>
                <p>Driftskostnader påverkar årets resultat direkt, medan investeringar inte gör det (de aktiveras som tillgång och skrivs av över tiden). En ombokering från investering till drift försämrar alltså årets resultat med 45 000 kr.</p>
            </div>
            
            <h3>⏰ Tidpunkten är kritisk</h3>
            
            <p>Enligt årsbokslutsinstruktionerna ska det göras <em>"kontroll att de transaktioner som är bokförda som investeringar (projekt 6000-9999) faller inom ramen för vad en investering är samt att transaktioner som faller inom ramen för investeringar inte är bokförda i driftsredovisningen"</em> senast den 19 januari 2026 (<a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 7</a>).</p>
            
            <p>Detta är exakt den typ av kontroll som ska fånga upp felklassificeringar som denna!</p>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Alternativ A:</strong> Missar helt poängen med investeringsriktlinjerna. Det är inte totalsumman som räknas (såvida det inte är likartade inventarier eller inventarier med naturligt samband), utan varje enskild anskaffning måste uppfylla kriterierna.</li>
                
                <li><strong>Alternativ C:</strong> Felaktigt! Det finns inget i riktlinjerna som säger att "minst tre likartade föremål" räcker. Exemplet med cyklar i riktlinjerna handlar om att man köper flera exemplar av SAMMA typ av vara (flera cyklar), inte tre olika typer av sportutrustning.</li>
                
                <li><strong>Alternativ D:</strong> Helt fel! Det finns inget i varken Simrishamns riktlinjer eller RKR:s rekommendationer som säger att viss typ av utrustning automatiskt är investering. Tvärtom är kriterierna mycket tydliga: stadigvarande bruk + över beloppsgräns + minst 3 års livslängd = ALLA tre måste vara uppfyllda.</li>
            </ul>
            
            <h3>💡 Praktiska lärdomar</h3>
            
            <div class="info-box">
                <strong>För att undvika detta i framtiden:</strong>
                <ul>
                    <li><strong>Planera inköpen annorlunda:</strong> Om man VILL att det ska vara en investering, köp färre men dyrare föremål som uppfyller beloppsgränsen</li>
                    <li><strong>Konsultera ekonomifunktionen FÖRE inköp:</strong> Ring controllern innan ni gör större inköp</li>
                    <li><strong>Budgetera rätt från början:</strong> Om det är driftskostnad, se till att det finns pengar i driftsbudgeten</li>
                    <li><strong>Dokumentera bedömningen:</strong> När ni klassificerar något som investering, dokumentera varför</li>
                </ul>
            </div>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li><a href="Investeringsriktlinjer_Simrishamns_kommun.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2022) <em>Investeringsriktlinjer för Simrishamns kommun</em>. KS 2022-03-16, §37, Dnr KS 2021/357</a></li>
                <li><a href="Instruktioner_till arsbokslut_2025.pdf" target="_blank" rel="noopener noreferrer">Simrishamns kommun (2025a) <em>Instruktioner till årsbokslut 2025</em>, s. 7</a></li>
                <li><a href="https://www.rkr.se/" target="_blank" rel="noopener noreferrer">RKR (2021) <em>RKR R14 Drift- och investeringsredovisning</em></a></li>
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
        message = 'Perfekt! Du har helt koll på årsbokslut och årsredovisning! 🌟 Du förstår både processerna, deadlines och vad som krävs för en bra verksamhetsberättelse.';
    } else if (percentage >= 80) {
        message = 'Mycket bra! Du har god förståelse för årsbokslutsprocessen och vet vad som förväntas i årsredovisningen. 👍';
    } else if (percentage >= 60) {
        message = 'Bra jobbat! Du har grundläggande förståelse, men det finns mer att utforska. Gå gärna igenom slidesen igen! 📚';
    } else {
        message = 'Det finns mycket att lära! Årsbokslut och årsredovisning är komplexa processer, men genom att läsa igenom materialet igen kommer du att få bättre grepp om det. 💪';
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
                    <li>Årsbokslut och årsredovisning är olika processer med olika syften</li>
                    <li>Deadlines i januari är kritiska – missa dem inte!</li>
                    <li>Periodisering handlar om när affärshändelsen äger rum, inte när betalning sker</li>
                    <li>Verksamhetsberättelsen har en tydlig struktur med sex rubriker</li>
                    <li>Investeringsriktlinjer avgör om något ska bokföras som investering eller drift</li>
                    <li>Vid osäkerhet – kontakta alltid din controller eller ekonomifunktion!</li>
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
// Skapad: 2025-11-20
// Ämne: Årsbokslut och årsredovisning i Simrishamn
// Författare: Kent Lundgren med AI-assistans (Claude 4.5 Sonnet)
// ============================================

