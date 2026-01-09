# Fredagsquiz med AI - En pedagogisk genomgång

Detta projekt beskriver och levandegör processen att skapa pedagogiska fredagsquiz tillsammans med generativ AI.

## 🎉 UPPDATERING 2025-11-21 14:30

**Genombrott!** Prompterna har konverterats från PDF/Word till Markdown-format. Detta innebär att:
- ✅ Cursor kan nu **faktiskt läsa** de ursprungliga prompterna
- ✅ Webbapplikationen innehåller nu **verkligt innehåll** med citat från de riktiga prompterna
- ✅ En **före/efter-jämförelse** visar exakt vad som hände när filerna konverterades
- ✅ Processen är nu **fullt fungerande och replikerbar**

Se avsnittet "🎉 GENOMBROTT" i teknik-modalen för detaljer!

## 📋 Om projektet

Ekonom **Kent Lundgren** har sedan mitten av augusti 2025 varje vecka skapat engagerande fredagsquiz med hjälp av två AI-verktyg:
1. **Claude** - för innehållsgenerering
2. **Cursor** - för webbutveckling

Denna webbapplikation beskriver hela processen på ett pedagogiskt och levande sätt - nu med faktiskt innehåll från veckans fredagsquiz om "Årsbokslut och årsredovisning".

## 🚀 Funktioner

- **Tvåstegsprocess visualiserad** - Förklarar hur Claude och Cursor samarbetar
- **Arbetsflödesdiagram** - Visuell representation av hela processen
- **Lärdomar och insikter** - Vad man kan lära sig från AI-assisterad utveckling
- **Tre format pedagogiskt** - Visar att samma prompt finns i PDF, Word OCH Markdown
- **Tydlig vägledning** - När ska man använda vilket format och varför
- **Teknik-modal** - Djupdykning i tekniska val och filformat för AI-arbete
- **Praktisk konverteringsguide** - 4 konkreta metoder för att konvertera PDF/Word till Markdown
- **Filosofi om format** - Ett innehåll, tre format, tre användningsområden

## 🎯 Teknik-modal: PDF vs Word

Ett unikt inslag i denna applikation är en omfattande diskussion om:

### Filformat för AI-arbete

**Utmaningen:**
Både PDF och Word (.docx) är binära format som är svåra för AI-verktyg att läsa direkt.

**Rekommendation:**
- **MARKDOWN (.md)** eller **REN TEXT (.txt)** är klart bäst för AI-arbete
- Direkt läsbara utan specialverktyg
- Enkel struktur och versionskontroll
- Plattformsoberoende och framtidssäkra

**När PDF/Word ändå är relevant:**
- PDF för slutanvändar-publicering
- Word för mänsklig samarbete
- När layout och visuell presentation är kritisk

## 📚 Filosofin om tre format

### Ett innehåll, tre användningsområden

Varje prompt finns i **tre format** - inte för att vara överflödiga, utan för att varje format tjänar ett specifikt syfte:

#### 📄 PDF - För människor som vill LÄSA
**Använd när du ska:**
- Läsa igenom prompten för att förstå innehållet
- Dela med kollegor för genomläsning
- Skriva ut och anteckna på
- Arkivera för framtida referens

**Fördel:** Perfekt formatering, ser exakt likadant ut överallt, professionell presentation

#### 📝 Word - För människor som vill REDIGERA
**Använd när du ska:**
- Skapa en variant av prompten för ett annat ämne
- Kopiera delar av texten till andra dokument
- Göra ändringar och uppdateringar
- Samarbeta med andra som inte använder Markdown

**Fördel:** Bekant verktyg, lätt att redigera, alla kan använda Word

#### 💻 Markdown - För AI som vill FÖRSTÅ
**Använd när du ska:**
- Skicka prompten till Cursor, Claude eller annan AI
- Versionshantera i Git
- Automatisera bearbetning av innehållet
- Säkerställa att AI kan läsa strukturen korrekt

**Fördel:** Direkt läsbar för AI, enkel struktur, framtidssäker

### 🎯 Nyckeln till framgång

> Det handlar inte om att välja ETT format och förkasta de andra.  
> Det handlar om att **ha alla tre format tillgängliga** och  
> **använda rätt format för rätt situation**.

---

## 🔄 Konvertering: PDF/Word → Markdown

Om du inte redan har Markdown-versionen, finns här en **komplett praktisk guide** med 4 metoder:

### Metod 1: Claude AI (Rekommenderat) ⭐⭐⭐⭐⭐
- Ladda upp PDF/Word-fil till Claude
- Be om konvertering till Markdown
- Perfekt om du redan använder Claude!

### Metod 2: Online-verktyg ⭐⭐⭐⭐
- PDF2MD, Convertio, CloudConvert
- Snabbt och enkelt, ingen installation

### Metod 3: Pandoc ⭐⭐⭐
- Professionellt kommandoradsverktyg
- Perfekt för masskonvertering
- Installation: `choco install pandoc`

### Metod 4: Manuellt ⭐⭐
- För korta dokument
- Full kontroll över formatering

**Se `FÖRTYDLIGANDE.md` för detaljerade instruktioner!**

## 📁 Filstruktur

```
000/
├── index.html                   # Huvudfil med komplett innehåll
├── styles.css                   # CSS med moderna funktioner och responsiv design
├── script.js                    # JavaScript (ES2023) för interaktivitet
│
├── promt1_till_251121.pdf       # 📄 Prompt 1 (PDF - för läsning)
├── promt1_till_251121.docx      # 📝 Prompt 1 (Word - för redigering)
├── promt1_till_251121.md        # 💻 Prompt 1 (Markdown - för AI)
│
├── promt2_till_251121.pdf       # 📄 Prompt 2 (PDF - för läsning)
├── promt2_till_251121.docx      # 📝 Prompt 2 (Word - för redigering)
├── promt2_till_251121.md        # 💻 Prompt 2 (Markdown - för AI)
│
├── README.md                    # Denna fil (projektdokumentation)
├── FÖRTYDLIGANDE.md             # Guide för filformat-konvertering
├── UPPDATERING_2025-11-21.md    # Beskrivning av Markdown-genombrott
└── UPPDATERING_TRE_FORMAT.md    # Beskrivning av tre-format-filosofin
```

**🎯 Tre format - tre användningsområden:**
- **📄 PDF** - Perfekt för människor som vill LÄSA (bevarar formatering)
- **📝 Word** - Perfekt för människor som vill REDIGERA (lätt att ändra)
- **💻 Markdown** - Perfekt för AI som vill FÖRSTÅ (direkt läsbar)

**🎉 GENOMBROTT!** Prompterna finns nu i alla tre format vilket innebär att:
- ✅ Cursor kan läsa Markdown-versionen (.md) direkt
- ✅ Människor kan läsa PDF-versionen (.pdf) med perfekt formatering
- ✅ Människor kan redigera Word-versionen (.docx) enkelt
- ✅ Webbapplikationen visar alla tre format och förklarar när man använder vilket
- ✅ Ett innehåll, tre format, tre användningsområden!

## 🛠️ Teknisk implementation

### HTML
- Semantisk HTML5-struktur
- Tillgänglighetsanpassad (ARIA-labels, alt-texter)
- SEO-optimerad

### CSS
- CSS-variabler för enkel temahantering
- Responsiv design med Flexbox och Grid
- Moderna animationer och transitions
- Print-styles för utskrift
- Dark mode-kompatibel struktur

### JavaScript (ES2023)
- Modal-hantering med fokus på tillgänglighet
- Smooth scroll-funktionalitet
- Intersection Observer för scroll-animationer
- Copy-to-clipboard med moderna Clipboard API
- Felhantering och performance monitoring
- Säker hantering av externa länkar

**Notering:** JavaScript-koden använder ES2023-funktionalitet inklusive:
- Moderna event listeners
- Async/await för asynkrona operationer
- Intersection Observer API
- Clipboard API
- Performance API

## 🎨 Design-principer

1. **Pedagogisk tydlighet** - Informationen presenteras steg för steg
2. **Visuell hierarki** - Tydliga rubriker, färgkodning och ikoner
3. **Responsiv** - Fungerar på alla enheter
4. **Tillgänglig** - Följer WCAG-riktlinjer
5. **Modern** - Använder senaste webbstandarder

## 📚 Referenser

- [Exempel på fredagsquiz](https://kentlundgren.se/program/quiz/0/)
- [Processbeskrivning](https://kentlundgren.se/program/quiz/00/)
- [Veckans quiz (v47)](https://kentlundgren.se/program/quiz/13/)
- [Kent Lundgrens AI-arbete](https://kentlundgren.se/program/ekonom/)

## 🤖 Skapad med AI

Detta projekt är självt ett exempel på AI-assisterad utveckling:
- **Konceptualisering:** Analys av quiz-skapandeprocessen
- **Implementation:** Cursor användes för att generera HTML, CSS och JavaScript
- **Meta-aspekt:** Webbsidan beskriver samma process som användes för att skapa den!

## 🔮 Framtida utveckling

Möjliga förbättringar:
- Interaktiva tutorials för att skapa egna prompts
- Gallerivisning av tidigare fredagsquiz
- A/B-testning av olika prompt-formuleringar
- Integrering med API:er för direktgenerering av quiz

## 📝 Användning

1. Öppna `index.html` i en webbläsare
2. Klicka på "⚙️ Teknik & Filformat" för att läsa om tekniska överväganden
3. Scrolla genom sidan för att lära dig om processen

## 🎓 Lärdomar

Nyckeltakeaways från detta projekt:
1. **Rätt verktyg för rätt uppgift** - Claude för innehåll, Cursor för kod
2. **Textbaserade format** - Markdown/text är överlägset för AI-arbete
3. **Iterativ process** - Sällan perfekt första gången
4. **Människa + AI** - Bäst resultat när de samarbetar

## 📄 Licens

Detta projekt skapades som pedagogiskt exempel av Kent Lundgren med AI-assistans.

## 👤 Kontakt

**Kent Lundgren**  
Webbplats: [kentlundgren.se](https://kentlundgren.se)

---

*Skapad: November 2025*  
*Utvecklad med: Claude & Cursor (AI-assisterad utveckling)*

