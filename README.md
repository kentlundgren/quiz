# Fredagsquiz - Kent Lundgren

Detta repository innehåller en samling interaktiva fredagsquiz som jag har skapat. Varje quiz är en fristående webbapplikation byggd med HTML, CSS och JavaScript.

## 📁 Struktur

Projektet är organiserat i numrerade undermappar där varje mapp innehåller ett komplett fredagsquiz:

- **0/** - Sammanställning och översikt över alla fredagsquiz
- **00/** - "Hur Fredagsquizet Skapas" - beskriver AI-samarbetet mellan Claude och Cursor
- **000/** - Quiz med utförlig dokumentation om utvecklingsprocessen
- **1-19/** - Individuella fredagsquiz (varje nummer är ett separat quiz)
- **S/** - Specialquiz

### Vad innehåller varje quiz-mapp?

Typiskt innehåller varje undermapp:
- `index.html` - Huvudfilen för quizet
- `styles.css` - Stilmall för designen
- `script.js` - JavaScript-logik för quizfunktionalitet
- Bilder (`.jpg`, `.jpeg`) - Visuellt material till frågorna
- Eventuella PDF-filer med bakgrundsmaterial
- I vissa mappar finns även dokumentation (`.docx`, `.pdf`, `.md`)

## 🌐 Var hittar du Fredagsquizen?

Fredagsquizen finns tillgänglig på två ställen:

1. **GitHub Pages** (live-version): [https://kentlundgren.github.io/quiz/](https://kentlundgren.github.io/quiz/)
   - Den aktiva versionen som körs direkt från detta repository
   - Uppdateras automatiskt när ändringar pushas till GitHub
   - Översikt över alla fredagsquiz med beskrivningar
   - *(Ursprungligen publicerad på [kentlundgren.se/program/quiz/0/](https://kentlundgren.se/program/quiz/0/))*

2. **Källkoden**: Du tittar på den just nu! 
   - Repository: [https://github.com/kentlundgren/quiz](https://github.com/kentlundgren/quiz)
   - Öppen källkod - klona, forka eller bidra!

### 🔗 Direktlänkar till varje quiz

**Viktigt att veta:** Varje undermapp har sin egen direktlänk på GitHub Pages! Du kan nå varje individuellt quiz direkt genom att lägga till mappnamnet i URL:en:

- **Quiz 1:** [https://kentlundgren.github.io/quiz/1/](https://kentlundgren.github.io/quiz/1/)
- **Quiz 2:** [https://kentlundgren.github.io/quiz/2/](https://kentlundgren.github.io/quiz/2/)
- **Quiz 3:** [https://kentlundgren.github.io/quiz/3/](https://kentlundgren.github.io/quiz/3/)
- **...osv ända till Quiz 19**

Detta gäller alla undermappar (0, 00, 000, 1-19, S) - varje mapp blir automatiskt tillgänglig som en egen webbsida!

## 🚀 Hur man använder (för utvecklare)

1. Klona detta repository:
   ```bash
   git clone https://github.com/kentlundgren/quiz.git
   ```

2. Navigera till önskad quiz-mapp (t.ex. mapp 1, 2, 3...):
   ```bash
   cd quiz/1
   ```

3. Öppna `index.html` i din webbläsare

## 🎯 Om Fredagsquizen

Fredagsquizen är interaktiva kunskapstester som behandlar olika ämnen. De är byggda med:
- **HTML5** - För struktur och semantik
- **CSS3** - För responsiv design och styling
- **Vanilla JavaScript** - För interaktivitet och quizlogik

## 📊 Specialmappar

Utöver de 19 numrerade quizen finns några specialmappar med unikt innehåll:

- **Mapp 0** ([länk](https://kentlundgren.github.io/quiz/0/)): Sammanställning och översikt över alla fredagsquiz
- **Mapp 00** ([länk](https://kentlundgren.github.io/quiz/00/)): "Hur Fredagsquizet Skapas" - beskriver AI-samarbetet mellan Claude och Cursor
- **Mapp 000** ([länk](https://kentlundgren.github.io/quiz/000/)): Pedagogisk genomgång av utvecklingsprocessen med utförlig dokumentation om hur AI-verktyg (Claude, Cursor) användes
- **Mapp S** ([länk](https://kentlundgren.github.io/quiz/S/)): "Fräckt Fredagsquiz" - specialquiz med svart humor, katter och lite av varje!

### 📘 Dokumentation och guider

Utöver själva quizen finns pedagogiska guider som förklarar tekniken bakom projektet:

#### 🔀 Git och GitHub
- **[GitHub.html](https://kentlundgren.github.io/quiz/GitHub.html)** - Pedagogisk guide om versionshantering:
  - Skillnaden mellan Git och GitHub
  - Viktiga Git-kommandon (fetch, pull, push, commit)
  - Vad betyder Cursors fråga om "git fetch"?
  - Vanliga arbetsflöden och best practices
  - PowerShell-specifika tips

#### 📘 GitHub Pages
- **[GitHub_pages.html](https://kentlundgren.github.io/quiz/GitHub_pages.html)** - Omfattande guide om GitHub Pages:
  - Vad GitHub Pages är och hur det fungerar
  - Hur du aktiverar GitHub Pages för ditt repository
  - Hur filstrukturen blir till webbadresser
  - Fördelar och nackdelar med olika lösningar
  - Vanliga problem och lösningar

## 🛠️ Teknologi

- Ren HTML/CSS/JavaScript (inga ramverk krävs)
- Responsiv design för olika skärmstorlekar
- Interaktiva element med direkta återkopplingar

## 📝 Licens

© Kent Lundgren - Alla rättigheter förbehålles

## 📧 Kontakt

För frågor eller feedback, besök [kentlundgren.se](https://kentlundgren.se)

---

*Skapad med passion för lärande och interaktiv webbutveckling* 🎓
