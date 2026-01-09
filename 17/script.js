// ============================================
// JAVASCRIPT FÖR QUIZ: DET NYA REGELLANDSKAPET FÖR BYGGLOV OCH BYGGREGLER
// Skapad: 2025-12-12
// 
// Detta quiz handlar om de stora regelförändringarna för bygglov
// och byggregler som trädde i kraft 2025 i Sverige.
// 
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna bild1.jpg och bild2.jpg
// växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // Två bilder (bild1.jpg och bild2.jpg)
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
// INTRODUKTIONSTEXTER - Fem slides om det nya regellandskapet
// Baserade på Boverkets information, Riksdagens proposition
// och kommunal samhällsbyggnad
// ============================================
const introPages = [
    {
        title: "🏗️ Den dubbla omställningen 2025",
        body: `
            <p>Välkommen till ett quiz om <strong>det nya regellandskapet för bygglov och byggregler</strong>! Här får du testa dina kunskaper om en av de största regelförändringarna på över 15 år.</p>
            
            <div class="info-box">
                <strong>📅 Två stora förändringar samma år</strong>
                <ul>
                    <li><strong>1 juli 2025:</strong> Boverkets nya byggregler ersätter BBR och EKS</li>
                    <li><strong>1 december 2025:</strong> Nytt kapitel 9 i PBL om bygglov träder i kraft</li>
                    <li><strong>Övergångsperiod:</strong> Till 30 juni 2026 för byggreglerna</li>
                </ul>
            </div>
            
            <h3>💡 Varför är detta viktigt?</h3>
            <ul>
                <li><strong>Förenkling:</strong> Kallas "den största förenklingen av bygglovsregler på över 15 år"</li>
                <li><strong>Frihet:</strong> Byggherren får större frihet att välja lösningar</li>
                <li><strong>Ansvar:</strong> Ökat ansvar att dokumentera och bevisa att kraven uppfylls</li>
                <li><strong>Landsbygd:</strong> Mer generösa regler utanför detaljplanelagt område</li>
            </ul>
            
            <p><em>Källa: <a href="https://www.regeringen.se/pressmeddelanden/2025/12/nya-regler-for-bygglov/" target="_blank" rel="noopener noreferrer">Regeringen (2025)</a>. Se även: <a href="https://controllerutangranser.wordpress.com/2025/12/12/det-nya-regellandskapet-for-bygglov-och-byggregler-en-dubbel-omstallning-for-kommunal-samhallsbyggnad/" target="_blank" rel="noopener noreferrer">Lundgren (2025)</a>.</em></p>
        `
    },
    {
        title: "📐 Från BBR till funktionskrav",
        body: `
            <p>Den 1 juli 2025 ersattes <strong>Boverkets byggregler (BBR)</strong> och <strong>konstruktionsregler (EKS)</strong> med nio helt nya författningar. Detta är en fundamental förändring i hur byggregler utformas.</p>
            
            <div class="info-box">
                <strong>🔄 Vad är nytt?</strong>
                <ul>
                    <li><strong>Teknikneutrala funktionskrav</strong> istället för detaljerade anvisningar</li>
                    <li><strong>Allmänna råd i princip borttagna</strong></li>
                    <li><strong>Byggherren väljer lösningar</strong> – så länge funktionskraven uppfylls</li>
                    <li><strong>Ökad dokumentationskrav</strong> – man måste kunna bevisa att kraven uppfylls</li>
                </ul>
            </div>
            
            <h3>⚠️ Viktigt att veta</h3>
            <ul>
                <li><strong>Övergångsperiod:</strong> Byggherren väljer BBR/EKS ELLER nya regler – men man får <em>inte</em> blanda</li>
                <li><strong>Energiregler:</strong> Ännu ej i kraft – väntar på EU-samordning</li>
                <li><strong>Nio nya författningar:</strong> BFS 2024:4 till BFS 2024:12</li>
            </ul>
            
            <div class="warning-box">
                <strong>🤔 Utmaning för byggherrar</strong>
                <p>Utan allmänna råd krävs <strong>mer kompetens</strong> för att hitta rätt lösningar. Detta kan gynna större aktörer med mer resurser.</p>
            </div>
            
            <p><em>Källa: <a href="https://www.boverket.se/sv/byggande/regler-for-byggande/om-boverkets-nya-byggregler/" target="_blank" rel="noopener noreferrer">Boverket (2025)</a>.</em></p>
        `
    },
    {
        title: "🏠 Områdesdifferentierad lovplikt",
        body: `
            <p>En av de viktigaste nyheterna i de nya PBL-reglerna är <strong>områdesdifferentierad lovplikt</strong> – olika regler beroende på var du bygger.</p>
            
            <div class="info-box">
                <strong>📊 Jämförelse: Inom vs utanför detaljplan</strong>
                <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #3b82f6; color: white;">
                            <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Åtgärd</th>
                            <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">Inom detaljplan</th>
                            <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">Utanför detaljplan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Max komplementbyggnad</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd;"><strong>30 kvm</strong></td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd; background: #d1fae5;"><strong>50 kvm</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Sammanlagd pott</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd;"><strong>45 kvm</strong></td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd; background: #d1fae5;"><strong>65 kvm</strong></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Max höjd</td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd;"><strong>4 m</strong></td>
                            <td style="padding: 8px; text-align: center; border: 1px solid #ddd; background: #d1fae5;"><strong>4,5 m</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h3>🆕 Viktiga nyheter</h3>
            <ul>
                <li><strong>Anmälningsplikt borttagen</strong> för komplementbyggnader</li>
                <li><strong>Tillbyggnad upp till 30 kvm</strong> utan lov (alla byggnadstyper)</li>
                <li><strong>Fasadändringar på småhus</strong> kräver ej bygglov inom detaljplan</li>
            </ul>
            
            <p><em>Källa: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/ett-nytt-regelverk-for-bygglov_hc03169/" target="_blank" rel="noopener noreferrer">Riksdagen (2025) Proposition 2024/25:169</a>.</em></p>
        `
    },
    {
        title: "🛡️ Nya aktörer och totalförsvaret",
        body: `
            <p>De nya PBL-reglerna ger <strong>Försvarsmakten och MSB</strong> en helt ny roll i bygglovsprocessen – med <strong>vetorätt</strong> för byggen nära riksintresseområden för totalförsvaret.</p>
            
            <div class="warning-box">
                <strong>⚠️ Vetorätt för totalförsvarets riksintressen</strong>
                <ul>
                    <li>Försvarsmakten och MSB <strong>ska underrättas</strong> vid åtgärder inom/nära riksintresseområden</li>
                    <li><strong>Medgivande krävs</strong> för att lov ska kunna ges</li>
                    <li>Kan <strong>påverka handläggningstider</strong> i berörda områden</li>
                </ul>
            </div>
            
            <h3>📋 Skärpta krav införs för</h3>
            <ul>
                <li>Åtgärder <strong>nära fastighetsgräns</strong></li>
                <li>Byggnation inom <strong>särskilt värdefulla områden</strong></li>
                <li>Områden av <strong>riksintresse för totalförsvaret</strong></li>
            </ul>
            
            <div class="info-box">
                <strong>🏛️ Vad innebär detta?</strong>
                <p>Kommuner som ligger nära militära anläggningar, flygplatser eller andra försvarsrelaterade riksintressen behöver anpassa sina rutiner. Handläggningstiden kan bli längre i dessa ärenden.</p>
            </div>
            
            <p><em>Källa: <a href="https://www.boverket.se/sv/samhallsplanering/uppdrag/nytt-regelverk-for-bygglov/foreslagna-pbl--andringar/" target="_blank" rel="noopener noreferrer">Boverket (2025)</a>.</em></p>
        `
    },
    {
        title: "🏛️ Konsekvenser för kommunerna",
        body: `
            <p>De nya reglerna innebär både <strong>utmaningar</strong> och <strong>möjligheter</strong> för landets kommuner. Här är en översikt:</p>
            
            <div class="warning-box">
                <strong>⚠️ Utmaningar</strong>
                <ul>
                    <li><strong>Minskade intäkter:</strong> Färre bygglovsavgifter när fler åtgärder blir lovfria</li>
                    <li><strong>Ökat tillsynsbehov:</strong> Finansieras via skattemedel, inte avgifter</li>
                    <li><strong>Två parallella regelverk:</strong> Under övergångsperioden</li>
                    <li><strong>Kompetensutveckling:</strong> Personal behöver lära sig nya regler</li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>✅ Möjligheter</strong>
                <ul>
                    <li><strong>Enklare hantering:</strong> Färre lovärenden frigör resurser</li>
                    <li><strong>Landsbygdsutveckling:</strong> Mer generösa regler kan gynna byggande</li>
                    <li><strong>Minskad administration:</strong> Mindre pappersarbete på sikt</li>
                </ul>
            </div>
            
            <h3>💡 Rekommendationer</h3>
            <ol>
                <li><strong>Dokumentera valt regelverk</strong> i varje ärende</li>
                <li><strong>Proaktiv kommunikation</strong> till medborgare om nya regler</li>
                <li><strong>Samverka regionalt</strong> kring erfarenheter och tolkningar</li>
            </ol>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av det nya regellandskapet. Lycka till! 🎯</p>
            
            <p><em>Källa: <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/interpellation/effekter-for-kommunerna-av-bygglovsforenklingar_hd10194/" target="_blank" rel="noopener noreferrer">Riksdagen (2025) Interpellation 2025/26:194</a>.</em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om det nya regellandskapet
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "När ersattes Boverkets byggregler (BBR) och konstruktionsregler (EKS) med de nya byggreglerna?",
        answers: [
            "a) 1 januari 2025",
            "b) 1 juli 2025",
            "c) 1 december 2025",
            "d) 1 januari 2026"
        ],
        correct: 1, // Index 1 = b) 1 juli 2025
        explanation: `
            <strong>✓ RÄTT SVAR: b) 1 juli 2025</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>De nya byggreglerna från Boverket trädde i kraft den <strong>1 juli 2025</strong> och ersatte då BBR och EKS med nio nya författningar (BFS 2024:4 till BFS 2024:12).</p>
            
            <div class="info-box">
                <strong>📅 Viktiga datum att komma ihåg</strong>
                <ul>
                    <li><strong>1 januari 2025:</strong> Aktsamhetsföreskrifterna (BFS 2024:4) trädde i kraft</li>
                    <li><strong>1 juli 2025:</strong> Alla nio nya byggregler i kraft</li>
                    <li><strong>1 december 2025:</strong> Nya PBL-regler för bygglov i kraft</li>
                    <li><strong>30 juni 2026:</strong> Övergångsperioden upphör</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>1 januari 2025 (A):</strong> Endast aktsamhetsföreskrifterna trädde i kraft</li>
                <li><strong>1 december 2025 (C):</strong> Detta datum gäller <em>PBL-reglerna för bygglov</em>, inte byggreglerna</li>
                <li><strong>1 januari 2026 (D):</strong> Inget av regelverken trädde i kraft detta datum</li>
            </ul>
            
            <p><strong>Källa:</strong> <a href="https://www.boverket.se/sv/byggande/regler-for-byggande/om-boverkets-nya-byggregler/" target="_blank" rel="noopener noreferrer">Boverket (2025)</a>.</p>
        `
    },
    {
        question: "Hur stor får en enskild komplementbyggnad vara utanför detaljplanelagt område enligt de nya PBL-reglerna?",
        answers: [
            "a) 25 kvadratmeter",
            "b) 30 kvadratmeter",
            "c) 45 kvadratmeter",
            "d) 50 kvadratmeter"
        ],
        correct: 3, // Index 3 = d) 50 kvadratmeter
        explanation: `
            <strong>✓ RÄTT SVAR: d) 50 kvadratmeter</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Enligt de nya reglerna som infördes genom proposition 2024/25:169 får en enskild komplementbyggnad <strong>utanför detaljplan</strong> vara upp till <strong>50 kvadratmeter</strong> utan krav på bygglov.</p>
            
            <div class="info-box">
                <strong>📊 Områdesdifferentierad lovplikt</strong>
                <table style="width: 100%; margin-top: 10px;">
                    <tr>
                        <td><strong>Inom detaljplan:</strong></td>
                        <td>Max 30 kvm per byggnad</td>
                    </tr>
                    <tr>
                        <td><strong>Utanför detaljplan:</strong></td>
                        <td>Max <strong>50 kvm</strong> per byggnad ✓</td>
                    </tr>
                </table>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>25 kvm (A):</strong> Den tidigare gränsen för attefallshus – stämmer inte längre</li>
                <li><strong>30 kvm (B):</strong> Maxstorleken <em>inom</em> detaljplan, inte utanför</li>
                <li><strong>45 kvm (C):</strong> Den sammanlagda "potten" inom detaljplan, inte per byggnad utanför</li>
            </ul>
            
            <div class="warning-box">
                <strong>💡 Bonusinfo</strong>
                <p>Den sammanlagda "potten" för komplementbyggnader är <strong>45 kvm inom detaljplan</strong> och <strong>65 kvm utanför detaljplan</strong>.</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/ett-nytt-regelverk-for-bygglov_hc03169/" target="_blank" rel="noopener noreferrer">Riksdagen (2025) Proposition 2024/25:169</a>.</p>
        `
    },
    {
        question: "Vilka två myndigheter har fått nya roller i bygglovsprocessen och kan kräva medgivande innan lov ges för vissa byggen?",
        answers: [
            "a) Boverket och Länsstyrelsen",
            "b) Försvarsmakten och MSB (Myndigheten för samhällsskydd och beredskap)",
            "c) Trafikverket och Naturvårdsverket",
            "d) SKR och Lantmäteriet"
        ],
        correct: 1, // Index 1 = b) Försvarsmakten och MSB
        explanation: `
            <strong>✓ RÄTT SVAR: b) Försvarsmakten och MSB</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Enligt de nya reglerna ska <strong>Försvarsmakten</strong> och <strong>MSB</strong> (Myndigheten för samhällsskydd och beredskap) underrättas om ansökningar om lov inom eller i anslutning till områden som är av <strong>riksintresse för totalförsvaret</strong>.</p>
            
            <div class="warning-box">
                <strong>⚠️ Vetorätt!</strong>
                <p>Dessa myndigheter har <strong>vetorätt</strong> – deras medgivande krävs för att lov ska kunna ges. Detta är en helt ny ordning som kan påverka handläggningstider i berörda områden.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>Boverket och Länsstyrelsen (A):</strong> Dessa har inte fått nya roller av detta slag</li>
                <li><strong>Trafikverket och Naturvårdsverket (C):</strong> Har inte nya roller i bygglovsprocessen</li>
                <li><strong>SKR och Lantmäteriet (D):</strong> SKR är en intresseorganisation, inte myndighet med beslutsmakt</li>
            </ul>
            
            <div class="info-box">
                <strong>🛡️ Totalförsvarets intressen</strong>
                <p>Förändringen speglar det förändrade säkerhetsläget i omvärlden och behovet av att skydda totalförsvarets anläggningar och verksamheter.</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://www.boverket.se/sv/samhallsplanering/uppdrag/nytt-regelverk-for-bygglov/foreslagna-pbl--andringar/" target="_blank" rel="noopener noreferrer">Boverket (2025)</a>.</p>
        `
    },
    {
        question: "När upphör övergångsperioden för Boverkets nya byggregler – det vill säga, när måste alla tillämpa de nya reglerna?",
        answers: [
            "a) 31 december 2025",
            "b) 30 juni 2026",
            "c) 1 december 2026",
            "d) 1 juli 2027"
        ],
        correct: 1, // Index 1 = b) 30 juni 2026
        explanation: `
            <strong>✓ RÄTT SVAR: b) 30 juni 2026</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Övergångsperioden för de nya byggreglerna sträcker sig från <strong>1 juli 2025</strong> till <strong>30 juni 2026</strong> – alltså exakt <strong>ett år</strong>.</p>
            
            <div class="info-box">
                <strong>📅 Tidslinje</strong>
                <ul>
                    <li><strong>1 juli 2025:</strong> Nya byggregler i kraft – övergångsperiod börjar</li>
                    <li><strong>Under perioden:</strong> Byggherren väljer antingen nya regler ELLER BBR/EKS</li>
                    <li><strong>30 juni 2026:</strong> Övergångsperiod upphör</li>
                    <li><strong>Från 1 juli 2026:</strong> Endast de nya reglerna gäller</li>
                </ul>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>31 december 2025 (A):</strong> Felaktigt – det är mitt i övergångsperioden</li>
                <li><strong>1 december 2026 (C):</strong> Inget regeltekniskt datum</li>
                <li><strong>1 juli 2027 (D):</strong> Felaktigt – övergångsperioden är ett år, inte två</li>
            </ul>
            
            <div class="warning-box">
                <strong>⚠️ Viktigt!</strong>
                <p>Under övergångsperioden får man <strong>inte blanda</strong> regler från BBR/EKS med de nya byggreglerna i samma projekt. Man måste välja ett regelverk och hålla sig till det.</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/byggregelsystemet/nya-byggregler/" target="_blank" rel="noopener noreferrer">Boverket (2025)</a>.</p>
        `
    },
    {
        question: "En mindre landsbygdskommun oroar sig för konsekvenserna av de nya bygglovsreglerna. Vilken kombination av utmaningar och möjligheter ger den mest korrekta bilden?",
        answers: [
            "a) Utmaning: Fler bygglovsärenden | Möjlighet: Högre avgiftsintäkter",
            "b) Utmaning: Ökat tillsynsbehov med minskade avgiftsintäkter | Möjlighet: Enklare regler kan gynna landsbygdsutveckling",
            "c) Utmaning: Strängare regler på landsbygden | Möjlighet: Mindre administrativt arbete i städerna",
            "d) Utmaning: Alla måste använda de nya reglerna direkt | Möjlighet: Övergångsperiod på tre år"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Utmaning: Ökat tillsynsbehov med minskade avgiftsintäkter | Möjlighet: Enklare regler kan gynna landsbygdsutveckling</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>De nya reglerna innebär att <strong>fler åtgärder blir lovfria</strong>, vilket minskar kommunernas intäkter från bygglovsavgifter. Samtidigt ökar behovet av <strong>tillsyn</strong> – och tillsyn får inte finansieras med avgifter utan belastar skattemedel.</p>
            
            <div class="info-box">
                <strong>✅ Möjligheten för landsbygden</strong>
                <p>Den <strong>områdesdifferentierade lovplikten</strong> med mer generösa regler utanför detaljplan kan gynna landsbygdskommuner där det blir enklare att bygga utan lov.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            
            <ul>
                <li><strong>A) Fler ärenden + högre intäkter:</strong> Fel! Det blir <em>färre</em> ärenden, inte fler</li>
                <li><strong>C) Strängare på landsbygden:</strong> Tvärtom! Reglerna är <em>mer generösa</em> utanför detaljplan</li>
                <li><strong>D) Tre års övergångsperiod:</strong> Fel! Övergångsperioden är <em>ett år</em>, inte tre</li>
            </ul>
            
            <div class="warning-box">
                <strong>💰 Ekonomisk utmaning</strong>
                <p>Kommunerna behöver hitta sätt att finansiera den ökade tillsynen när avgiftsintäkterna minskar. Detta är en verklig utmaning som diskuteras i riksdagens interpellationer.</p>
            </div>
            
            <p><strong>Källa:</strong> <a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/interpellation/effekter-for-kommunerna-av-bygglovsforenklingar_hd10194/" target="_blank" rel="noopener noreferrer">Riksdagen (2025) Interpellation 2025/26:194</a>.</p>
            
            <p><em>📚 <strong>Fördjupning:</strong> Läs mer i bloggtexten <a href="https://controllerutangranser.wordpress.com/2025/12/12/det-nya-regellandskapet-for-bygglov-och-byggregler-en-dubbel-omstallning-for-kommunal-samhallsbyggnad/" target="_blank" rel="noopener noreferrer">"Det nya regellandskapet för bygglov och byggregler"</a>.</em></p>
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
    
    console.log('QUIZ INITIERAT - Det nya regellandskapet för bygglov och byggregler');
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
        message = '🏆 Perfekt! Du har helt koll på det nya regellandskapet! Du är redo för de nya byggreglerna och bygglovsreglerna!';
    } else if (percentage >= 80) {
        message = '⭐ Mycket bra! Du har god förståelse för regeländringarna. Läs gärna bloggtexten för fördjupning!';
    } else if (percentage >= 60) {
        message = '👍 Bra jobbat! Du har grundläggande förståelse, men det finns mer att lära. Kolla in källorna!';
    } else {
        message = '📚 Det finns mer att upptäcka! Regeländringarna är omfattande – läs igenom slidesen igen och kolla källorna!';
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
                    <li><strong>Nya byggregler:</strong> Trädde i kraft 1 juli 2025 – ersätter BBR och EKS</li>
                    <li><strong>Nya PBL-regler:</strong> Trädde i kraft 1 december 2025</li>
                    <li><strong>Övergångsperiod:</strong> Till 30 juni 2026 för byggreglerna</li>
                    <li><strong>Utanför detaljplan:</strong> Max 50 kvm komplementbyggnad utan lov</li>
                    <li><strong>Totalförsvaret:</strong> Försvarsmakten och MSB har vetorätt i vissa områden</li>
                    <li><strong>Kommuner:</strong> Utmaning med tillsyn vs minskade avgiftsintäkter</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="https://controllerutangranser.wordpress.com/2025/12/12/det-nya-regellandskapet-for-bygglov-och-byggregler-en-dubbel-omstallning-for-kommunal-samhallsbyggnad/" target="_blank" rel="noopener noreferrer">Läs bloggtext med fördjupning</a></li>
                    <li><a href="https://www.boverket.se/sv/byggande/regler-for-byggande/om-boverkets-nya-byggregler/" target="_blank" rel="noopener noreferrer">Boverkets nya byggregler</a></li>
                    <li><a href="https://www.boverket.se/sv/samhallsplanering/uppdrag/nytt-regelverk-for-bygglov/" target="_blank" rel="noopener noreferrer">Nytt regelverk för bygglov (Boverket)</a></li>
                    <li><a href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/ett-nytt-regelverk-for-bygglov_hc03169/" target="_blank" rel="noopener noreferrer">Proposition 2024/25:169 (Riksdagen)</a></li>
                </ul>
                <p style="margin-top: 15px; font-size: 0.95em;"><em>🏗️ Lycka till med de nya regelverken!</em></p>
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
// Quiz för det nya regellandskapet för bygglov och byggregler
//
// Skapad: 2025-12-12
// Ämne: Det nya regellandskapet för bygglov och byggregler 2025
// Författare: Kent Lundgren med AI-assistans (Claude Opus 4.5)
//
// Källor:
// - Boverket (2025)
// - Riksdagen (2025) Proposition 2024/25:169
// - Regeringen (2025)
// - Riksdagen (2025) Interpellation 2025/26:194
// ============================================

