// ============================================
// JAVASCRIPT FÖR QUIZ: DANMARK, GRÖNLAND OCH SVERIGE
// Quiz nr 21 i serien Fredagsquiz
// Skapad: 2026-01-23
// 
// Detta quiz handlar om koloniala relationer och nordisk historia,
// med fokus på relationen mellan Danmark och Grönland samt
// den historiska bakgrunden mellan Sverige och Danmark.
// 
// Struktur: Extern JavaScript-fil enligt best practice
// Detta program är skrivet i modern JavaScript (ES6+)
// ============================================

// ============================================
// BILDVÄXLING
// Bilderna Danmark_Gronland1.jpg och Danmark_Gronland2.jpg
// växlar automatiskt var 3:e sekund
// Detta sker innan användaren klickar på knappen för att starta quizet
// ============================================

(function() {
    // Hämta bildelement när DOM är redo
    document.addEventListener('DOMContentLoaded', function() {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        // Array för att hålla koll på vilken bild som är aktiv
        // Två bilder (Danmark_Gronland1.jpg och Danmark_Gronland2.jpg)
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
// INTRODUKTIONSTEXTER - Fem slides om Danmark, Grönland och Sverige
// Baserade på blogginlägget "Efter 21 krig kom freden – men för vem?"
// ============================================
const introPages = [
    {
        title: "🇩🇰 Danmarks koloniala arv – från mission till självstyre",
        body: `
            <p>Välkommen till ett quiz om <strong>Danmark, Grönland och Sverige</strong>! Här får du testa dina kunskaper om koloniala relationer och nordisk historia.</p>
            
            <div class="read-material-box">
                <p><strong>📖 Läs först!</strong></p>
                <p>För att få ut maximalt av detta quiz, läs gärna blogginlägget först:</p>
                <a href="https://controllerutangranser.wordpress.com/2026/01/23/efter-21-krig-kom-freden-men-for-vem/" target="_blank" rel="noopener noreferrer">Efter 21 krig kom freden – men för vem?</a>
            </div>
            
            <h3>📜 Huvudbudskap</h3>
            <p>Danmark etablerade sig på Grönland 1721 och styrde ön som koloni i över 200 år. Kolonialismen har lämnat djupa spår som Danmark nu börjar konfrontera.</p>
            
            <h3>🗓️ Nyckelår i Danmarks relation till Grönland</h3>
            <ul>
                <li><strong>1721</strong> – Hans Egede landstiger och påbörjar koloniseringen</li>
                <li><strong>1776</strong> – Danskt handelsmonopol införs, Grönland stängs för utlänningar</li>
                <li><strong>1953</strong> – Grönland blir danskt "amt" efter FN-påtryckningar</li>
                <li><strong>1979</strong> – Hjemmestyre (hemstyre) införs efter folkomröstning</li>
                <li><strong>2009</strong> – Selvstyre-lagen erkänner grönländarnas rätt till självbestämmande</li>
            </ul>
            
            <div class="info-box">
                <strong>💬 Viktigt citat</strong>
                <p><em>"Vi kan inte förändra det som hänt. Men vi kan ta ansvar."</em></p>
                <p>– Mette Frederiksen, Danmarks statsminister, vid ursäkten för spiralkampanjen, 2025</p>
            </div>
            
            <p><em>Källa: <a href="https://www.diis.dk/en/research/why-is-greenland-part-of-the-kingdom-of-denmark-a-short-history" target="_blank" rel="noopener noreferrer">DIIS (2025)</a></em></p>
        `
    },
    {
        title: "🏛️ Rigsfællesskabet – Danmarks unika statsstruktur",
        body: `
            <p>Danmark utgör idag <strong>"Rikets gemenskap" (Rigsfællesskabet)</strong> tillsammans med Grönland och Färöarna – ett slags Commonwealth med gemensam grundlag men olika grad av självstyre.</p>
            
            <h3>📊 Strukturöversikt</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #c41e3a; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Land</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Befolkning</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Självstyre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Danmark</strong> (moderlandet)</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">5,9 miljoner</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">–</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Grönland</strong> (Kalaallit Nunaat)</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">56 000</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Selvstyre sedan 2009</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Färöarna</strong> (Føroyar)</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">54 000</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Hjemmestyre sedan 1948</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>🤝 Gemensamt för alla tre</h3>
            <ul>
                <li>Dansk grundlag</li>
                <li>Dansk utrikespolitik och försvar</li>
                <li>Dansk valuta (danska kronor)</li>
                <li>Representation i Folketinget (2 platser vardera för Grönland och Färöarna)</li>
            </ul>
            
            <div class="info-box">
                <strong>🌟 Grönlands unika rättigheter</strong>
                <ul>
                    <li>Erkända som folk med rätt till självbestämmande enligt folkrätten</li>
                    <li>Juridisk rätt att rösta om självständighet</li>
                    <li>Kontroll över naturresurser</li>
                </ul>
            </div>
            
            <p><em>Källa: <a href="https://english.stm.dk/the-prime-ministers-office/the-unity-of-the-realm/greenland/" target="_blank" rel="noopener noreferrer">Statsministeriet (2025)</a></em></p>
        `
    },
    {
        title: "💔 Grönlands perspektiv – trauma och motstånd",
        body: `
            <p>Den koloniala historien innebär inte bara politiska förändringar utan <strong>djupa personliga trauman</strong> för grönländska familjer. Sanningsprocessen har bara börjat.</p>
            
            <h3>😢 Tre traumatiska kapitel</h3>
            
            <h4>1. "De små danskarna" (1951)</h4>
            <ul>
                <li>22 grönländska barn (5-8 år) skickades till Danmark</li>
                <li><strong>Syfte:</strong> Skapa "förebilder" för modernisering</li>
                <li><strong>Resultat:</strong> Alienation, psykisk ohälsa, missbruk</li>
                <li><strong>Ursäkt utfärdad 2020</strong></li>
            </ul>
            
            <h4>2. Spiralkampanjen (1960-70-talet)</h4>
            <ul>
                <li>Ca 4 500 kvinnor/flickor fick spiral utan samtycke</li>
                <li>Vissa så unga som 12 år</li>
                <li><strong>Syfte:</strong> Minska befolkningstillväxt</li>
                <li><strong>Ursäkt utfärdad 2025</strong></li>
            </ul>
            
            <h4>3. Tvångsförflyttningar (1953)</h4>
            <ul>
                <li>Inuitsamhällen flyttades för amerikansk militärbas</li>
                <li>Thulebasen (nu Pituffik Space Base)</li>
                <li>Rättsprocesser pågår fortfarande</li>
            </ul>
            
            <div class="warning-box">
                <strong>💬 Grönländskt perspektiv</strong>
                <p><em>"Vi kommer aldrig få tillbaka det som togs ifrån oss. Men vi kan kräva att sanningen berättas."</em></p>
                <p>– Naja Lyberth, aktivist och offer för spiralkampanjen</p>
            </div>
            
            <p><em>Källa: <a href="https://www.humanium.org/en/denmarks-experiment-on-inuit-children-a-painful-legacy-of-forced-assimilation/" target="_blank" rel="noopener noreferrer">Humanium (2025)</a></em></p>
        `
    },
    {
        title: "🗽 Namminersulivinneq – vägen mot självständighet",
        body: `
            <p>Majoriteten av grönlänningar vill på sikt ha <strong>självständighet</strong>, men ekonomin är den stora utmaningen. Balansen mellan självbestämmande och välfärd är central.</p>
            
            <h3>💰 Grönlands ekonomi i siffror</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Befolkning</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">56 000 invånare</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Landarea</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">2,17 miljoner km² (världens största ö)</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Danskt bloktilskud</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">~4 miljarder DKK/år (~5,5 mdr SEK)</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Andel av budget</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">~2/3 av offentlig budget</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;"><strong>Huvudnäringar</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Fiske (90% av export), turism</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>🗳️ Politisk vilja</h3>
            <ul>
                <li>75% röstade för Selvstyre-lagen 2009</li>
                <li>De flesta partier stöder självständighet – men i olika takt</li>
                <li>"Långsam självständighet" vs "Nu-självständighet"</li>
            </ul>
            
            <div class="info-box">
                <strong>🌍 Geopolitisk aktualitet</strong>
                <ul>
                    <li>USA har uttryckt intresse för Grönland ("Grönland är inte till salu")</li>
                    <li>Arktis alltmer strategiskt viktigt</li>
                    <li>Grönland söker diversifiera sina internationella relationer</li>
                </ul>
            </div>
            
            <h3>🇬🇱 Grönländska nyckelord</h3>
            <ul>
                <li><strong>Namminersulivinneq</strong> = självständighet</li>
                <li><strong>Kalaallit Nunaat</strong> = Grönland ("Grönlänningarnas land")</li>
                <li><strong>Ajungilak</strong> = "Det är bra"</li>
            </ul>
            
            <p><em>Källa: <a href="https://en.wikipedia.org/wiki/Greenlandic_independence" target="_blank" rel="noopener noreferrer">Wikipedia (2025)</a></em></p>
        `
    },
    {
        title: "🇸🇪 Från ärverival till broderfolk – vad Sverige kan lära",
        body: `
            <p>Sverige och Danmark låg i krig <strong>21 gånger</strong> mellan 1205 och 1814. Idag är de "broderfolk". Denna transformation ger perspektiv på andra maktrelationer.</p>
            
            <h3>⚔️ Sverige-Danmark: 600 års konflikt</h3>
            <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                <thead>
                    <tr style="background: #c41e3a; color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">År</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Händelse</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">1397</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Kalmarunionen – Danmark, Sverige, Norge förenade</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">1520</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Stockholms blodbad – dansk-norsk kung avrättar adelsmän</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">1523</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Gustav Vasa bryter unionen – Sverige självständigt</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">1658</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Freden i Roskilde – Sverige tar Skåne, Blekinge, Halland</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">1814</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Sista kriget – Danmark tvingas avträda Norge</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">2000</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">Öresundsbron öppnar – integration</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>🔄 Paralleller till Danmark-Grönland</h3>
            <ul>
                <li>Territoriella maktrelationer kan förändras radikalt över tid</li>
                <li>Ekonomisk integration och ömsesidigt beroende främjar fred</li>
                <li>Historiska trauman behöver inte definiera framtiden</li>
                <li>Erkännande av orättvisor är första steget mot försoning</li>
            </ul>
            
            <div class="warning-box">
                <strong>💭 Avslutande tanke</strong>
                <p>Om Sverige och Danmark kunde gå från 600 års krig till broderfolk – då är inga relationer omöjliga att förändra.</p>
            </div>
            
            <p><strong>Nu är du redo för quizet!</strong> Fem frågor väntar som testar din förståelse av nordisk historia och koloniala relationer. Lycka till! 🎯</p>
            
            <p><em>Källor: <a href="https://en.wikipedia.org/wiki/Denmark%E2%80%93Sweden_relations" target="_blank" rel="noopener noreferrer">Wikipedia (2025)</a> | <a href="https://www.britannica.com/topic/Treaty-of-Roskilde" target="_blank" rel="noopener noreferrer">Britannica (2025)</a></em></p>
        `
    }
];

// ============================================
// QUIZFRÅGOR - Fem frågor om Danmark, Grönland och Sverige
// Frågorna är analyserade och förbättrade för att vara engagerande och pedagogiska
// All fakta är bevarad och referenser är inkluderade i Harvard-format
// ============================================
const quizData = [
    {
        question: "Vilket år landsteg den norsk-danska missionären Hans Egede på Grönland och påbörjade den moderna danska koloniseringen?",
        answers: [
            "a) 1536",
            "b) 1721",
            "c) 1814",
            "d) 1953"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) 1721</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Hans Egede landsteg på Grönland den <strong>3 juli 1721</strong> med skeppet "Haabet" (Hoppet). Han hade fått tillstånd av kung Frederik IV av Danmark-Norge att söka efter ättlingar till de gamla norska bosättarna från vikingatiden och att sprida den lutherska tron.</p>
            
            <div class="info-box">
                <strong>📜 Vad hände egentligen?</strong>
                <ul>
                    <li>Egede fann inga nordiska ättlingar – den norska kolonin hade försvunnit redan under 1400-talet</li>
                    <li>Han stannade kvar och påbörjade missionsarbete bland inuiterna</li>
                    <li>Han grundade det som idag är Grönlands huvudstad <strong>Nuuk</strong> (då kallat Godthåb, "Gott hopp")</li>
                    <li>Han kallas ibland "Grönlands apostel"</li>
                </ul>
            </div>
            
            <h3>❌ Varför de andra alternativen är fel</h3>
            <ul>
                <li><strong>1536</strong> – Reformationen i Danmark-Norge</li>
                <li><strong>1814</strong> – Norge avträddes från Danmark till Sverige (Kielfreden)</li>
                <li><strong>1953</strong> – Grönland blev ett danskt amt och upphörde formellt att vara koloni</li>
            </ul>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Wikipedia (2025) <em>Hans Egede</em>. Tillgänglig: <a href="https://en.wikipedia.org/wiki/Hans_Egede" target="_blank" rel="noopener noreferrer">en.wikipedia.org</a> [Hämtad: 23 januari 2026].</li>
                <li>Visit Greenland (2025) <em>300 Years: Hans Egede's Mission and Legacy in Greenland</em>. Tillgänglig: <a href="https://visitgreenland.com/articles/300-years-hans-egedes-mission-and-legacy-in-greenland/" target="_blank" rel="noopener noreferrer">visitgreenland.com</a> [Hämtad: 23 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Ungefär hur många krig utkämpades mellan Sverige och Danmark från medeltiden fram till 1814?",
        answers: [
            "a) 5 krig",
            "b) 10 krig",
            "c) 21 krig",
            "d) 35 krig"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) 21 krig</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p>Historiker räknar med ungefär <strong>21 separata krig</strong> mellan Sverige och Danmark (ofta Danmark-Norge) under perioden från tidig medeltid fram till 1814. Denna långa serie av konflikter gör Sverige och Danmark till <strong>ett av de flitigast stridande länderparen i europeisk historia</strong>!</p>
            
            <div class="info-box">
                <strong>⚔️ Vad handlade konflikterna om?</strong>
                <ul>
                    <li>Kontroll över Östersjön och dess handelsvägar</li>
                    <li>Territoriella gränser (särskilt Skåneland)</li>
                    <li>Politiskt inflytande inom Kalmarunionen (1397-1523)</li>
                    <li>Tullar genom Öresund</li>
                </ul>
            </div>
            
            <h3>📜 Några betydelsefulla krig</h3>
            <ul>
                <li><strong>Kalmarkriget (1611-1613)</strong></li>
                <li><strong>Torstensonkriget (1643-1645)</strong></li>
                <li><strong>Karl X Gustavs krig (1657-1660)</strong> – ledde till freden i Roskilde</li>
            </ul>
            
            <p>Det sista kriget mellan länderna ägde rum <strong>1814</strong>, då Sverige invaderade Norge som en följd av Kielfreden. Idag är Sverige och Danmark "broderfolk" – en fantastisk förvandling!</p>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Wikipedia (2025) <em>List of wars between Denmark and Sweden</em>. Tillgänglig: <a href="https://en.wikipedia.org/wiki/List_of_wars_between_Denmark_and_Sweden" target="_blank" rel="noopener noreferrer">en.wikipedia.org</a> [Hämtad: 23 januari 2026].</li>
                <li>Wikipedia (2025) <em>Denmark–Sweden relations</em>. Tillgänglig: <a href="https://en.wikipedia.org/wiki/Denmark%E2%80%93Sweden_relations" target="_blank" rel="noopener noreferrer">en.wikipedia.org</a> [Hämtad: 23 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Vad kallas den danska kampanj från 1960-70-talen där uppskattningsvis 4 500 grönländska kvinnor och flickor fick preventivmedel (spiral) insatta utan deras vetskap eller samtycke?",
        answers: [
            "a) Moderniseringsprogrammet",
            "b) Spiralkampanjen (Spiralkampagnen)",
            "c) Befolkningsprojektet",
            "d) Hälsoreformen"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Spiralkampanjen (Spiralkampagnen)</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p><strong>Spiralkampanjen</strong> (danska: Spiralkampagnen) var en statlig kampanj som genomfördes av den danska hälsovården på Grönland från 1960-talet till 1991. Syftet var att minska befolkningstillväxten på Grönland.</p>
            
            <div class="warning-box">
                <strong>⚠️ Vad hände under kampanjen?</strong>
                <ul>
                    <li>Uppskattningsvis <strong>4 500 kvinnor och flickor</strong> fick spiraler insatta</li>
                    <li>Många var minderåriga, vissa så unga som <strong>12 år</strong></li>
                    <li>Insättningen skedde ofta under rutinmässiga läkarundersökningar <strong>utan förvarning</strong></li>
                    <li>Flickor kunde ledas direkt från klassrummet till en läkare</li>
                    <li>Många visste inte ens att de hade en spiral</li>
                </ul>
            </div>
            
            <h3>📰 Upptäckten och ursäkten</h3>
            <ul>
                <li>Kampanjen kom först till allmänhetens kännedom <strong>2022</strong> genom en dansk podcast</li>
                <li>I september <strong>2025</strong> utfärdade Danmarks statsminister Mette Frederiksen en officiell ursäkt</li>
                <li>Grönlands dåvarande premiärminister Muté B. Egede har kallat kampanjen för "folkmord"</li>
            </ul>
            
            <p>FN:s specialrapportör för ursprungsfolks rättigheter besökte Grönland 2023 och konstaterade att kampanjen utgjorde <strong>"förnedrande och omänsklig behandling"</strong> i strid med flera internationella konventioner.</p>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>UN News (2023) <em>Rights expert urges Denmark and Greenland to examine colonial legacy's impact</em>. Tillgänglig: <a href="https://news.un.org/en/story/2023/02/1133382" target="_blank" rel="noopener noreferrer">news.un.org</a> [Hämtad: 23 januari 2026].</li>
                <li>JusticeInfo (2025) <em>Denmark's apology to Greenlandic women</em>. Tillgänglig: <a href="https://www.justiceinfo.net/en/150175-denmarks-apology-to-greenlandic-women.html" target="_blank" rel="noopener noreferrer">www.justiceinfo.net</a> [Hämtad: 23 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Genom freden i Roskilde 1658 tvingades Danmark-Norge avträda stora landområden till Sverige. Vilka av följande landskap avträddes vid denna fred?",
        answers: [
            "a) Gotland, Öland och Jämtland",
            "b) Skåne, Blekinge, Halland och Bohuslän",
            "c) Åland, Finland och Estland",
            "d) Själland, Fyn och Jylland"
        ],
        correct: 1, // Index 1 = b)
        explanation: `
            <strong>✓ RÄTT SVAR: b) Skåne, Blekinge, Halland och Bohuslän</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p><strong>Freden i Roskilde</strong> (Roskildefreden) slöts den 26 februari 1658 efter den svenske kungen Karl X Gustavs spektakulära militära kampanj, inklusive det berömda <strong>"tåget över Bält"</strong> där svenska trupper marscherade över den frusna isen.</p>
            
            <div class="info-box">
                <strong>🗺️ Områden som avträddes</strong>
                <p><strong>Från Danmark:</strong></p>
                <ul>
                    <li><strong>Skåne</strong> (Scania) – dagens södra Sverige</li>
                    <li><strong>Blekinge</strong> – sydöstra Sverige</li>
                    <li><strong>Halland</strong> – redan pantsatt till Sverige sedan 1645, nu permanent avträtt</li>
                    <li><strong>Bornholm</strong> – ön i Östersjön (återlämnades dock till Danmark 1660)</li>
                </ul>
                <p><strong>Från Norge:</strong></p>
                <ul>
                    <li><strong>Bohuslän</strong> – västra kusten norr om Göteborg</li>
                    <li><strong>Trondheim-området</strong> (Trøndelag) – återlämnades till Norge 1660</li>
                </ul>
            </div>
            
            <h3>📊 Betydelsen</h3>
            <p>Freden i Roskilde var en <strong>förödande förlust</strong> för Danmark – ungefär en tredjedel av territoriet gick förlorat. Den etablerade i stort sett de gränser som gäller än idag mellan Sverige och Danmark/Norge.</p>
            
            <h3>❌ Varför de andra alternativen är fel</h3>
            <ul>
                <li><strong>Gotland, Öland och Jämtland</strong> – var redan svenska eller avträddes vid andra tillfällen</li>
                <li><strong>Åland, Finland och Estland</strong> – berör svensk-ryska/finska relationer</li>
                <li><strong>Själland, Fyn och Jylland</strong> – förblev danska (Karl X Gustav försökte erövra dem men misslyckades)</li>
            </ul>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Britannica (2025) <em>Treaty of Roskilde</em>. Tillgänglig: <a href="https://www.britannica.com/topic/Treaty-of-Roskilde" target="_blank" rel="noopener noreferrer">www.britannica.com</a> [Hämtad: 23 januari 2026].</li>
                <li>Wikipedia (2025) <em>Treaty of Roskilde</em>. Tillgänglig: <a href="https://en.wikipedia.org/wiki/Treaty_of_Roskilde" target="_blank" rel="noopener noreferrer">en.wikipedia.org</a> [Hämtad: 23 januari 2026].</li>
            </ul>
        `
    },
    {
        question: "Vad heter det danska uttrycket för den konstitutionella gemenskap som förenar Danmark, Grönland och Färöarna under samma grundlag?",
        answers: [
            "a) Kongedømmet",
            "b) Folkefællesskabet",
            "c) Rigsfællesskabet",
            "d) Nordunionen"
        ],
        correct: 2, // Index 2 = c)
        explanation: `
            <strong>✓ RÄTT SVAR: c) Rigsfællesskabet</strong>
            
            <h3>💡 Förklaring</h3>
            
            <p><strong>Rigsfællesskabet</strong> är det danska uttrycket för den konstitutionella struktur som förenar Danmark, Grönland och Färöarna. Ordet kan översättas ungefär som <strong>"Rikets gemenskap"</strong> eller "Rikets sammanhållning".</p>
            
            <div class="info-box">
                <strong>🏛️ En unik statsrättslig konstruktion</strong>
                <ul>
                    <li>Alla tre delar delar samma grundlag (Danmarks grundlov)</li>
                    <li>Alla tre delar har samma statschef (Danmarks monark)</li>
                    <li>Alla tre delar har gemensam utrikes- och försvarspolitik</li>
                    <li>Grönland och Färöarna har 2 platser vardera i Folketinget</li>
                </ul>
            </div>
            
            <h3>🔓 Självstyre inom Rigsfællesskabet</h3>
            <ul>
                <li><strong>Grönland</strong> har <em>Selvstyre</em> sedan 2009 (tidigare <em>Hjemmestyre</em> sedan 1979)</li>
                <li><strong>Färöarna</strong> har <em>Hjemmestyre</em> sedan 1948</li>
            </ul>
            
            <p>Rigsfællesskabet skiljer sig från en federation genom att det ytterst är en <strong>enhetlig suverän stat</strong> – autonomin för Grönland och Färöarna är delegerad, inte konstitutionellt garanterad på samma sätt som i en förbundsstat.</p>
            
            <div class="warning-box">
                <strong>🌟 Viktigt sedan 2009</strong>
                <p>Sedan 2009 erkänner dansk lag uttryckligen grönlänningarna som ett folk med <strong>rätt till självbestämmande enligt folkrätten</strong>, inklusive rätten att rösta om full självständighet.</p>
            </div>
            
            <h3>❌ Varför de andra alternativen är fel</h3>
            <ul>
                <li><strong>Kongedømmet</strong> – "kungariket", generellt ord för monarki</li>
                <li><strong>Folkefællesskabet</strong> – "folkgemenskapen", inget officiellt begrepp</li>
                <li><strong>Nordunionen</strong> – finns inte som formell beteckning</li>
            </ul>
            
            <p><strong>Källor:</strong></p>
            <ul>
                <li>Wikipedia (2025) <em>Danish Realm</em>. Tillgänglig: <a href="https://en.wikipedia.org/wiki/Danish_Realm" target="_blank" rel="noopener noreferrer">en.wikipedia.org</a> [Hämtad: 23 januari 2026].</li>
                <li>Statsministeriet (2025) <em>Greenland</em>. Tillgänglig: <a href="https://english.stm.dk/the-prime-ministers-office/the-unity-of-the-realm/greenland/" target="_blank" rel="noopener noreferrer">english.stm.dk</a> [Hämtad: 23 januari 2026].</li>
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
    
    console.log('QUIZ INITIERAT - Danmark, Grönland och Sverige – Historia och Relationer');
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
        message = '🏆 Perfekt! Du har utmärkt koll på nordisk historia och koloniala relationer! Kunskap är första steget mot förståelse och försoning.';
    } else if (percentage >= 80) {
        message = '⭐ Mycket bra! Du har god förståelse för denna komplexa historia. Fortsätt utforska!';
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
                    <li><strong>1721:</strong> Hans Egede landstiger på Grönland och påbörjar koloniseringen</li>
                    <li><strong>21 krig:</strong> Sverige och Danmark krigade 21 gånger – nu broderfolk</li>
                    <li><strong>Spiralkampanjen:</strong> Ett mörkt kapitel som Danmark nu ber om ursäkt för</li>
                    <li><strong>Freden i Roskilde 1658:</strong> Sverige fick Skåne, Blekinge, Halland och Bohuslän</li>
                    <li><strong>Rigsfællesskabet:</strong> Danmarks unika konstitutionella gemenskap</li>
                </ul>
            </div>
            
            <div class="info-box" style="margin: 30px auto; max-width: 600px; text-align: left;">
                <strong>📚 Vill du lära dig mer?</strong>
                <ul>
                    <li><a href="https://controllerutangranser.wordpress.com/2026/01/23/efter-21-krig-kom-freden-men-for-vem/" target="_blank" rel="noopener noreferrer">Läs blogginlägget "Efter 21 krig kom freden – men för vem?"</a></li>
                    <li><a href="https://www.diis.dk/en/research/why-is-greenland-part-of-the-kingdom-of-denmark-a-short-history" target="_blank" rel="noopener noreferrer">DIIS: Why is Greenland part of the Kingdom of Denmark?</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Denmark%E2%80%93Sweden_relations" target="_blank" rel="noopener noreferrer">Wikipedia: Denmark–Sweden relations</a></li>
                    <li><a href="https://controllerutangranser.wordpress.com/" target="_blank" rel="noopener noreferrer">Controller utan gränser – fler analyser</a></li>
                </ul>
                <p style="margin-top: 15px; font-size: 0.95em;"><em>🌍 Historia hjälper oss förstå nutiden – och forma framtiden!</em></p>
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
// Quiz nr 21: Danmark, Grönland och Sverige – Historia och Relationer
//
// Skapad: 2026-01-23
// Ämne: Koloniala relationer och nordisk historia
// Författare: Kent Lundgren med AI-assistans (Claude)
//
// Källor (i Harvard-format):
// - Lundgren, K. (2026). Efter 21 krig kom freden – men för vem?.
//   Tillgänglig: https://controllerutangranser.wordpress.com/2026/01/23/efter-21-krig-kom-freden-men-for-vem/
// - DIIS (2025). Why is Greenland part of the Kingdom of Denmark? A short history.
//   Tillgänglig: https://www.diis.dk/
// - Wikipedia (2025). Denmark–Sweden relations.
//   Tillgänglig: https://en.wikipedia.org/wiki/Denmark–Sweden_relations
// - Britannica (2025). Treaty of Roskilde.
//   Tillgänglig: https://www.britannica.com/topic/Treaty-of-Roskilde
// ============================================
