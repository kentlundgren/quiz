// ============================================
// JAVASCRIPT FÖR QUIZ: ATT KOMMA IGÅNG MED GENERATIV AI I KOMMUNAL FÖRVALTNING
// Skapad: 2025-12-19
// 
// Detta quiz handlar om hur kommuner och offentlig förvaltning kan
// komma igång med att använda generativ AI i sin verksamhet.
// 
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna Assistant.jpg och Copilot.jpg
// växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // Två bilder (Assistant.jpg och Copilot.jpg)
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
// INTRODUKTIONSTEXTER - Fem slides om generativ AI i kommunal förvaltning
// Baserade på blogginlägget och Digg/IMY:s riktlinjer
// ============================================
const introPages = [
    {
        title: "🤖 Från Google till AI-dialog",
        body: `
            <p>Välkommen till ett quiz om <strong>generativ AI i kommunal förvaltning</strong>! Här får du testa dina kunskaper om hur du kan använda AI-verktyg effektivt i ditt arbete.</p>
            
            <div class="read-material-box">
                <strong>📖 Läs först bakgrundsmaterialet!</strong>
                <p>För bästa resultat, läs igenom presentationen innan du gör quizet.</p>
                <a href="GenerativAI.html" target="_blank" rel="noopener noreferrer">Öppna presentationen →</a>
            </div>
            
            <h3>💡 Den grundläggande skillnaden</h3>
            <ul>
                <li><strong>Google = söka befintlig information</strong> – du får en lista med länkar och klickar dig fram till svaret</li>
                <li><strong>Generativ AI = skapa nytt innehåll</strong> – AI:n skapar texter, sammanfattningar och analyser baserat på din input</li>
            </ul>
            
            <div class="info-box">
                <strong>🔑 Nyckelinsikt</strong>
                <p>När du googlar ställer du en fråga och får ett svar. När du arbetar med generativ AI har du en <em>dialog</em> där flera meddelanden bygger på varandra.</p>
            </div>
            
            <h3>📝 Exempel på skillnaden</h3>
            <div class="prompt-example">
                <p><strong>Google-sökning:</strong> "Vad säger PBL om samråd?"</p>
                <p><strong>AI-dialog:</strong> "Jag arbetar som handläggare i en mindre kommun. Vi tar fram en detaljplan för ett bostadsområde nära kusten med riksintresse för naturvård. Vilka särskilda hänsyn behöver vi ta?"</p>
            </div>
            
            <p><em>Källa: <a href="https://controllerutangranser.wordpress.com/2025/12/19/att-komma-igang-med-generativ-ai-i-kommunal-forvaltning/" target="_blank" rel="noopener noreferrer">Lundgren (2025)</a>.</em></p>
        `
    },
    {
        title: "✍️ Fyra delar i en bra prompt",
        body: `
            <p>En väl strukturerad prompt innehåller <strong>fyra grundläggande delar</strong>. Denna struktur hjälper AI:n att förstå vad du behöver och leverera ett mer träffsäkert resultat.</p>
            
            <div class="info-box">
                <strong>📋 De fyra delarna</strong>
                <ol>
                    <li><strong>Sammanhang</strong> – Berätta vem du är och vilken situation du befinner dig i. AI:n vet ingenting om dig från början.</li>
                    <li><strong>Uppgift</strong> – Var specifik om vad du vill att AI:n ska göra. "Hjälp mig med yttrandena" är vagt. "Kategorisera yttrandena efter ämnesområde" är konkret.</li>
                    <li><strong>Format</strong> – Specificera hur du vill ha resultatet (löpande text, tabell, punktlista, längd).</li>
                    <li><strong>Avgränsningar</strong> – Ange villkor och begränsningar som AI:n ska förhålla sig till.</li>
                </ol>
            </div>
            
            <div class="warning-box">
                <strong>💡 Tips: Avsluta alltid med</strong>
                <p>"Fråga om något är oklart!"</p>
                <p>Genom att avsluta så ger du AI:n möjlighet att ställa motfrågor om din förfrågan är otydlig. Detta leder ofta till bättre resultat.</p>
            </div>
            
            <h3>📝 Komplett prompt-exempel</h3>
            <div class="prompt-example">
                <p>"Jag är planhandläggare i en svensk kommun och arbetar med en detaljplan för ett nytt bostadsområde. Under samrådet har vi fått in 47 yttranden från privatpersoner, föreningar och myndigheter.</p>
                <p>Din uppgift är att kategorisera yttrandena efter ämnesområde och sammanfatta de viktigaste synpunkterna.</p>
                <p>Presentera resultatet som en tabell med max 500 ord.</p>
                <p>Fråga om något är oklart!"</p>
            </div>
            
            <p><em>Källa: <a href="https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/" target="_blank" rel="noopener noreferrer">MIT Sloan (2025)</a>.</em></p>
        `
    },
    {
        title: "💬 Dialogen är nyckeln",
        body: `
            <p>En av de viktigaste insikterna om generativ AI är att <strong>första svaret sällan är det bästa svaret</strong>. Dialogen är kärnan i arbetssättet.</p>
            
            <div class="warning-box">
                <strong>⚠️ Viktigt!</strong>
                <p>Behandla aldrig första svaret som färdigt. Läs svaret kritiskt och ställ följdfrågor.</p>
            </div>
            
            <h3>🔄 Följdfrågor att ställa</h3>
            <ul>
                <li>"Kan du <strong>utveckla avsnittet om X</strong> mer?"</li>
                <li>"Du <strong>missade att nämna Y</strong> – ta med det."</li>
                <li>"Skriv om med mer <strong>fokus på åtgärder</strong>."</li>
                <li>"<strong>Korta ner till hälften</strong> men behåll huvudpoängerna."</li>
            </ul>
            
            <div class="info-box">
                <strong>🎯 Principen</strong>
                <p>Ju mer du förfinar och justerar, desto bättre blir resultatet. Precis som när du ber en kollega om hjälp behövs ibland förtydliganden för att resultatet ska bli bra.</p>
            </div>
            
            <h3>📝 Bra avslutningsfraser</h3>
            <ul>
                <li>"Fråga om något är oklart!"</li>
                <li>"Analysera vilka olika perspektiv ovanstående kan analyseras ur."</li>
                <li>"Vilka risker ser du med detta förslag?"</li>
            </ul>
            
            <p><em>Källa: <a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer">DAIR.AI (2025)</a>.</em></p>
        `
    },
    {
        title: "📚 Ge AI:n rätt underlag",
        body: `
            <p>Du kan förbättra AI:ns svar genom att <strong>ge den relevant bakgrundsinformation och källor</strong>. Här är tre sätt att göra det.</p>
            
            <div class="info-box">
                <strong>🛠️ Tre sätt att förbättra resultatet</strong>
                <ol>
                    <li><strong>Ge exempel</strong> – "Här är hur vi formulerade det förra gången – använd samma stil."</li>
                    <li><strong>Länka till regelverk</strong> – PBL på lagen.nu, Boverkets kunskapsbank, etc.</li>
                    <li><strong>Lägg till ert lokala perspektiv</strong> – "Vi är en mindre kommun med begränsade resurser – ta hänsyn till det."</li>
                </ol>
            </div>
            
            <h3>🔗 Vad fungerar bäst?</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #276749; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Format</th>
                        <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Fungerar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">HTML-sidor</td>
                        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; background: #d1fae5;">✅ Utmärkt</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">lagen.nu</td>
                        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; background: #d1fae5;">✅ Mycket bra</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">PDF-dokument</td>
                        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; background: #fef3c7;">⚠️ Bäst att ladda upp</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Inloggningsskyddade sidor</td>
                        <td style="padding: 10px; text-align: center; border: 1px solid #ddd; background: #fee2e2;">❌ Fungerar ej</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="warning-box">
                <strong>💡 Tips</strong>
                <p>När du ger AI:n en länk, beskriv även kort vad länken innehåller och vad du vill att AI:n ska fokusera på.</p>
            </div>
            
            <p><em>Källa: <a href="https://www.boverket.se/sv/PBL-kunskapsbanken/" target="_blank" rel="noopener noreferrer">Boverket (2025)</a>.</em></p>
        `
    },
    {
        title: "🏛️ Nationellt stöd och riktlinjer",
        body: `
            <p>I <strong>januari 2025</strong> presenterade Myndigheten för digital förvaltning (Digg) och Integritetsskyddsmyndigheten (IMY) gemensamma riktlinjer för generativ AI i offentlig förvaltning.</p>
            
            <div class="info-box">
                <strong>📋 18 riktlinjer inom 7 områden</strong>
                <ul>
                    <li>Ledning och ansvar</li>
                    <li>Dataskydd och personuppgiftsbehandling (GDPR)</li>
                    <li>Arbetsrätt</li>
                    <li>Anskaffning</li>
                    <li>Informationssäkerhet</li>
                    <li>Upphovsrätt</li>
                    <li>Etik</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>🤝 Projekt Svea</strong>
                <p>Över 50 offentliga organisationer utvecklar tillsammans en gemensam AI-assistent för offentlig sektor genom AI Sweden.</p>
            </div>
            
            <h3>💬 Vad säger civilministern?</h3>
            <blockquote style="font-style: italic; border-left: 3px solid #276749; padding-left: 15px; margin: 15px 0; color: #2d3748;">
                "Ökad användning av AI kan bidra till minskad administration och frigöra mer tid för mänskliga möten."
                <footer style="font-style: normal; margin-top: 10px;">— Erik Slottner, civilminister</footer>
            </blockquote>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av generativ AI i offentlig förvaltning. Lycka till! 🎯</p>
            
            <p><em>Källa: <a href="https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai" target="_blank" rel="noopener noreferrer">Digg (2025)</a> & <a href="https://www.regeringen.se/pressmeddelanden/2025/01/regeringen-har-tagit-emot-nationella-riktlinjer-for-generativ-ai/" target="_blank" rel="noopener noreferrer">Regeringskansliet (2025)</a>.</em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om generativ AI i kommunal förvaltning
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Vad är den viktigaste skillnaden mellan att googla och att använda generativ AI?",
        answers: [
            "a) Google är gratis medan generativ AI kostar pengar",
            "b) Google söker befintlig information medan generativ AI skapar nytt innehåll baserat på din input",
            "c) Google fungerar på svenska medan generativ AI bara fungerar på engelska",
            "d) Google ger alltid rätt svar medan generativ AI ofta har fel"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Google söker befintlig information medan generativ AI skapar nytt innehåll</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Den grundläggande skillnaden handlar om <strong>vad som händer när du använder verktyget</strong>:</p>
            
            <ul>
                <li><strong>Google:</strong> Du söker bland information som redan finns publicerad på webben – du får en lista med länkar och klickar dig fram till svaret.</li>
                <li><strong>Generativ AI:</strong> Istället för att leta upp befintlig information <em>skapar</em> AI:n nya texter, sammanfattningar och analyser baserat på det du ger den.</li>
            </ul>
            
            <div class="info-box">
                <strong>🔑 Nyckelinsikt</strong>
                <p>Kvaliteten på det du får ut beror helt på kvaliteten på det du stoppar in. En annan central skillnad är att generativ AI möjliggör en <strong>dialog</strong> där flera meddelanden bygger på varandra.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Kostnad:</strong> Båda finns i gratis och betalversioner</li>
                <li><strong>C) Språk:</strong> Båda fungerar utmärkt på svenska</li>
                <li><strong>D) Kvalitet:</strong> Varken Google eller AI ger alltid "rätt" svar – källkritik behövs i båda fallen</li>
            </ul>
            
            <p><strong>Källa:</strong> Myndigheten för digital förvaltning & Integritetsskyddsmyndigheten (2025). <em>Riktlinjer för generativ AI inom offentlig förvaltning</em>. Tillgänglig: <a href="https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai" target="_blank" rel="noopener noreferrer">www.digg.se</a> [Hämtad 2025-12-19].</p>
        `
    },
    {
        question: "Vilka fyra delar bör en bra prompt innehålla?",
        answers: [
            "a) Rubrik, brödtext, sammanfattning och källförteckning",
            "b) Fråga, svar, kommentar och betyg",
            "c) Sammanhang, uppgift, format och avgränsningar",
            "d) Inledning, analys, slutsats och rekommendation"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) Sammanhang, uppgift, format och avgränsningar</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>En väl strukturerad prompt innehåller <strong>fyra grundläggande delar</strong>:</p>
            
            <ol>
                <li><strong>Sammanhang</strong> – Berätta vem du är och vilken situation du befinner dig i. AI:n vet ingenting om dig från början.</li>
                <li><strong>Uppgift</strong> – Var specifik om vad du vill att AI:n ska göra.</li>
                <li><strong>Format</strong> – Specificera hur du vill ha resultatet (löpande text, tabell, punktlista, längd etc.).</li>
                <li><strong>Avgränsningar</strong> – Ange villkor och begränsningar som AI:n ska förhålla sig till.</li>
            </ol>
            
            <div class="info-box">
                <strong>🎯 Denna struktur hjälper AI:n</strong>
                <p>När du ger AI:n tydlig kontext kan den leverera ett mer träffsäkert resultat. Forskare inom prompt engineering betonar att specifika och kontextrika prompter konsekvent ger bättre resultat än vaga eller generiska frågor.</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Rubrik, brödtext...</strong> – Detta är struktur för en rapport, inte en prompt</li>
                <li><strong>B) Fråga, svar...</strong> – Detta beskriver ett quiz-format, inte prompt-skrivning</li>
                <li><strong>D) Inledning, analys...</strong> – Detta är struktur för en akademisk uppsats</li>
            </ul>
            
            <p><strong>Källa:</strong> MIT Sloan Teaching & Learning Technologies (2025). <em>Effective Prompts for AI: The Essentials</em>. Tillgänglig: <a href="https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/" target="_blank" rel="noopener noreferrer">mitsloanedtech.mit.edu</a> [Hämtad 2025-12-19].</p>
        `
    },
    {
        question: "Varför bör man avsluta en prompt med \"Fråga om något är oklart!\"?",
        answers: [
            "a) Det är ett krav enligt Digg:s riktlinjer för AI-användning",
            "b) Det gör att AI:n kan ställa motfrågor om förfrågan är otydlig, vilket ofta leder till bättre resultat",
            "c) Det aktiverar en särskild \"expertfunktion\" i AI-modellen",
            "d) Det förhindrar att AI:n ger felaktiga svar"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Det gör att AI:n kan ställa motfrågor om förfrågan är otydlig</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Genom att avsluta en prompt med "Fråga om något är oklart!" ger du AI:n möjlighet att <strong>ställa motfrågor</strong> om din förfrågan är otydlig eller saknar viktig information.</p>
            
            <div class="info-box">
                <strong>🤝 Dialogen är nyckeln</strong>
                <p>Principen bygger på insikten att generativ AI fungerar bäst som en <strong>dialogpartner</strong> – precis som när du ber en kollega om hjälp behövs ibland förtydliganden för att resultatet ska bli bra.</p>
            </div>
            
            <h3>📝 Andra bra avslutningsfraser</h3>
            <ul>
                <li>"Analysera vilka olika perspektiv ovanstående kan analyseras ur"</li>
                <li>"Vilka risker ser du med detta förslag?"</li>
                <li>"Vad behöver jag komplettera för att du ska kunna ge ett bättre svar?"</li>
            </ul>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Krav enligt Digg:</strong> Det är ett tips, inte ett formellt krav</li>
                <li><strong>C) "Expertfunktion":</strong> Ingen sådan speciell funktion existerar</li>
                <li><strong>D) Förhindrar fel:</strong> AI:n kan fortfarande göra fel – alltid kvalitetssäkra!</li>
            </ul>
            
            <p><strong>Källa:</strong> DAIR.AI (2025). <em>Prompt Engineering Guide</em>. Tillgänglig: <a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer">www.promptingguide.ai</a> [Hämtad 2025-12-19].</p>
        `
    },
    {
        question: "Vilka två myndigheter har tillsammans tagit fram nationella riktlinjer för användning av generativ AI i offentlig förvaltning?",
        answers: [
            "a) Boverket och Lantmäteriet",
            "b) Skatteverket och Försäkringskassan",
            "c) Myndigheten för digital förvaltning (Digg) och Integritetsskyddsmyndigheten (IMY)",
            "d) Sveriges Kommuner och Regioner (SKR) och Statistiska centralbyrån (SCB)"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) Myndigheten för digital förvaltning (Digg) och Integritetsskyddsmyndigheten (IMY)</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>I <strong>januari 2025</strong> presenterade Myndigheten för digital förvaltning (Digg) och Integritetsskyddsmyndigheten (IMY) gemensamma riktlinjer för hur kommuner, regioner och myndigheter bör använda generativ AI.</p>
            
            <div class="info-box">
                <strong>📋 18 riktlinjer inom 7 områden</strong>
                <ul>
                    <li>Ledning och ansvar</li>
                    <li>Dataskydd och personuppgiftsbehandling (GDPR)</li>
                    <li>Arbetsrätt</li>
                    <li>Anskaffning</li>
                    <li>Informationssäkerhet</li>
                    <li>Upphovsrätt</li>
                    <li>Etik</li>
                </ul>
            </div>
            
            <div class="warning-box">
                <strong>💬 Civilminister Erik Slottner</strong>
                <p>"Ökad användning av AI kan bidra till minskad administration och frigöra mer tid för mänskliga möten."</p>
            </div>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Boverket och Lantmäteriet:</strong> Dessa myndigheter arbetar med byggfrågor och geografi</li>
                <li><strong>B) Skatteverket och Försäkringskassan:</strong> Verksamhetsmyndigheter utan detta uppdrag</li>
                <li><strong>D) SKR och SCB:</strong> SKR är en intresseorganisation, inte en myndighet</li>
            </ul>
            
            <p><strong>Källa:</strong> Regeringskansliet (2025). <em>Regeringen har tagit emot nationella riktlinjer för generativ AI</em>. Pressmeddelande 2025-01-21. Tillgänglig: <a href="https://www.regeringen.se/pressmeddelanden/2025/01/regeringen-har-tagit-emot-nationella-riktlinjer-for-generativ-ai/" target="_blank" rel="noopener noreferrer">www.regeringen.se</a> [Hämtad 2025-12-19].</p>
        `
    },
    {
        question: "En kommun överväger att använda generativ AI för att sammanställa medborgarnas yttranden i en detaljplaneprocess. Vilken av följande aspekter är viktigast att beakta ur ett rättssäkerhetsperspektiv?",
        answers: [
            "a) Att AI-verktyget är det billigaste alternativet på marknaden",
            "b) Att AI-sammanfattningen granskas av en tjänsteman innan den används som beslutsunderlag, eftersom AI kan missa nyanser och göra fel",
            "c) Att samtliga yttranden publiceras i sin helhet på kommunens webbplats",
            "d) Att medborgarna informeras om att AI används i alla kommunala processer"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Att AI-sammanfattningen granskas av en tjänsteman</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Ur ett <strong>rättssäkerhetsperspektiv</strong> är det centralt att beslut som fattas av offentlig förvaltning grundas på korrekta och fullständiga underlag.</p>
            
            <div class="warning-box">
                <strong>⚠️ AI:ns begränsningar</strong>
                <p>Generativ AI kan vara ett kraftfullt verktyg för att sammanställa stora mängder yttranden, men tekniken har begränsningar:</p>
                <ul>
                    <li>Kan <strong>missa viktiga nyanser</strong></li>
                    <li>Kan <strong>feltolka innehåll</strong></li>
                    <li>Kan till och med <strong>"hallucinera" information</strong> som inte finns i ursprungsmaterialet</li>
                </ul>
            </div>
            
            <div class="info-box">
                <strong>🛡️ Human oversight – mänsklig kontroll</strong>
                <p>Digg och IMY:s riktlinjer betonar: "Beslut med stöd av generativ AI bör ha mänsklig kontroll." En kvalificerad tjänsteman ska alltid granska och ta ansvar för underlaget.</p>
            </div>
            
            <h3>⚖️ Juridiskt perspektiv</h3>
            <p>I planprocesser enligt PBL har kommunen en <strong>skyldighet att redovisa hur inkomna synpunkter har beaktats</strong> i samrådsredogörelsen (5 kap. PBL). AI:n är ett verktyg, men det är alltid tjänstemannen – och ytterst den beslutande nämnden – som bär ansvaret.</p>
            
            <h3>❌ Varför inte de andra alternativen?</h3>
            <ul>
                <li><strong>A) Pris:</strong> Irrelevant för rättssäkerhetsbedömningen</li>
                <li><strong>C) Publicering:</strong> Kan vara relevant av andra skäl, men adresserar inte kärnfrågan</li>
                <li><strong>D) Information:</strong> Viktigt, men inte det viktigaste ur rättssäkerhetsperspektiv</li>
            </ul>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Myndigheten för digital förvaltning & Integritetsskyddsmyndigheten (2025). <em>Riktlinjer för generativ AI</em>. Tillgänglig: <a href="https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai" target="_blank" rel="noopener noreferrer">www.digg.se</a></li>
                <li>SFS 2010:900. <em>Plan- och bygglag</em>, 5 kap. Tillgänglig: <a href="https://lagen.nu/2010:900" target="_blank" rel="noopener noreferrer">lagen.nu</a></li>
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
    
    console.log('QUIZ INITIERAT - Generativ AI i kommunal förvaltning');
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
        message = '🏆 Perfekt! Du har helt koll på generativ AI i offentlig förvaltning! Nu är du redo att börja prompta!';
    } else if (percentage >= 80) {
        message = '⭐ Mycket bra! Du har god förståelse för hur AI kan användas i kommunal verksamhet. Fortsätt öva!';
    } else if (percentage >= 60) {
        message = '👍 Bra jobbat! Du har grundläggande förståelse. Läs gärna igenom presentationen igen!';
    } else {
        message = '📚 Det finns mer att upptäcka! Läs igenom slidesen och presentationen igen för att lära dig mer om generativ AI.';
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
                    <li><strong>Dialog vs sökning:</strong> Generativ AI skapar nytt innehåll genom dialog</li>
                    <li><strong>4 delar i en prompt:</strong> Sammanhang, uppgift, format, avgränsningar</li>
                    <li><strong>"Fråga om oklart":</strong> Ger AI:n chans att ställa motfrågor</li>
                    <li><strong>Digg & IMY:</strong> Nationella riktlinjer för AI i offentlig förvaltning</li>
                    <li><strong>Mänsklig kontroll:</strong> Alltid granska AI-resultat innan beslut</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="GenerativAI.html" target="_blank" rel="noopener noreferrer">Läs hela presentationen</a></li>
                    <li><a href="https://controllerutangranser.wordpress.com/2025/12/19/att-komma-igang-med-generativ-ai-i-kommunal-forvaltning/" target="_blank" rel="noopener noreferrer">Läs blogginlägget</a></li>
                    <li><a href="https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai" target="_blank" rel="noopener noreferrer">Digg:s riktlinjer för generativ AI</a></li>
                    <li><a href="https://www.promptingguide.ai/" target="_blank" rel="noopener noreferrer">Prompt Engineering Guide</a></li>
                </ul>
                <p style="margin-top: 15px; font-size: 0.95em;"><em>🤖 Lycka till med att komma igång med generativ AI!</em></p>
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
// Quiz för Generativ AI i kommunal förvaltning
//
// Skapad: 2025-12-19
// Ämne: Att komma igång med generativ AI i kommunal förvaltning
// Författare: Kent Lundgren med AI-assistans (Claude Opus 4.5)
//
// Källor (i Harvard-format):
// - Myndigheten för digital förvaltning & Integritetsskyddsmyndigheten (2025).
//   Riktlinjer för generativ AI inom offentlig förvaltning.
//   Tillgänglig: https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai
// - Regeringskansliet (2025). Regeringen har tagit emot nationella riktlinjer för generativ AI.
//   Tillgänglig: https://www.regeringen.se/pressmeddelanden/2025/01/regeringen-har-tagit-emot-nationella-riktlinjer-for-generativ-ai/
// - MIT Sloan Teaching & Learning Technologies (2025). Effective Prompts for AI: The Essentials.
//   Tillgänglig: https://mitsloanedtech.mit.edu/ai/basics/effective-prompts/
// - DAIR.AI (2025). Prompt Engineering Guide.
//   Tillgänglig: https://www.promptingguide.ai/
// - Lundgren, K. (2025). Att komma igång med generativ AI i kommunal förvaltning.
//   Tillgänglig: https://controllerutangranser.wordpress.com/2025/12/19/att-komma-igang-med-generativ-ai-i-kommunal-forvaltning/
// ============================================

