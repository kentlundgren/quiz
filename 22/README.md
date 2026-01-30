# Quiz 22: När verksamheten växer

> Ett interaktivt quiz om Simrishamns kultur- och fritidsförvaltning 2024-2025

[![Quiz](https://img.shields.io/badge/Quiz-nr%2022-blue)](https://kentlundgren.se/program/quiz/22/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📖 Om quizet

Detta quiz utforskar utvecklingen av Simrishamns kultur- och fritidsförvaltning under åren 2024-2025, en period präglad av nya projekt, ökade besökssiffror och ett starkt fokus på inkludering och tillgänglighet.

Quizet baseras på blogginlägget [När verksamheten växer](https://controllerutangranser.wordpress.com/2026/01/30/nar-verksamheten-vaxer/) och Simrishamns kommuns årsbokslut för Kultur- och fritidsnämnden.

### Teman som täcks

- 🎭 **Funka-dí** - Ny inkluderande verksamhet för barn och ungdomar med funktionsnedsättningar
- 🏠 **Bénka-dí** - Ungdomshuset som ökade sina besök med 33%
- 📚 **Biblioteket** - Förändrad roll från bokutlåning till mötesplats
- 🏊‍♂️ **Tobisviksbadet** - Återöppning efter renovering
- 📖 **Sommarboken** - Rekordmånga barn som läser av lust

## ✨ Funktioner

### Struktur
- **5 informationsslides** med bakgrundsinformation
- **5 quiz-frågor** med förklaringar
- **Automatisk bildväxling** mellan 5 bilder (var 3:e sekund)
- **Progressbar** som visar framsteg
- **Interaktiv navigation** med klickbara prickar

### Design
- 🎨 Responsiv design (fungerar på dator och mobil)
- 💛 Gul bakgrund på svarsalternativ (tydligt att det är inmatningsfält)
- ✅ Färgkodade svar (grönt för rätt, rött för fel)
- 📱 Modern och tillgänglig UI med ARIA-attribut

### Innehåll
- 📄 Klickbara källor i Harvard-format
- 🔗 Länkar till originalunderlag
- 💡 Utförliga förklaringar till varje svar
- 📊 Tabeller och strukturerad information

## 🛠️ Teknisk implementation

```
22/
├── index.html          # Huvudfil med HTML-struktur
├── script.js           # JavaScript-logik och interaktivitet
├── styles.css          # CSS-styling och responsiv design
├── promt.md           # Den ursprungliga prompten
├── promt_bra.html     # Guide om bra prompts
└── [bilder]/          # 5 bilder för bildväxling
    ├── basta_biennalen.jpg
    ├── ekan.jpg
    ├── Livsvikig_lasning.jpg
    ├── bokslut_2025.jpg
    └── vikingatiden.jpg
```

### Teknologi
- **HTML5** - Semantisk markup med ARIA-attribut
- **CSS3** - CSS-variabler, Flexbox, responsiv design
- **JavaScript (ES6+)** - Modern JavaScript med arrow functions och template literals
- **Google Fonts** - Playfair Display & Source Sans Pro

### Kodkvalitet
- ✅ Separata filer för HTML, CSS och JavaScript
- ✅ Väl kommenterad kod
- ✅ Separation of concerns-principen
- ✅ Responsiv och tillgänglig

## 🚀 Användning

### Online (rekommenderat)

Quizet finns tillgängligt på två platser:

- **Officiell hemsida:** [kentlundgren.se/program/quiz/22/](https://kentlundgren.se/program/quiz/22/)
- **GitHub Pages:** [kentlundgren.github.io/quiz/22/](https://kentlundgren.github.io/quiz/22/)

### Lokalt
1. Klona detta repository:
   ```bash
   git clone https://github.com/kentlundgren/quiz.git
   cd quiz/22
   ```

2. Öppna `index.html` i din webbläsare:
   ```bash
   # Windows (PowerShell)
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

3. Inga beroenden eller build-process behövs - det fungerar direkt!

## 📚 Källor och referenser

Quizet är baserat på välrenommerade källor:

- **Kulturrådet** (2021-2023, 2025) - Läsfrämjandelyft för folkbibliotekarier
- **Regeringen** (2022) - En utvecklad öppen fritidsverksamhet för ungdomar (Kommittédirektiv 2022:96)
- **Sveriges Kommuner och Regioner** (2025) - Kommunal kultur- och fritidsverksamhet
- **Lundgren, K.** (2026) - Blogginlägg: När verksamheten växer

Alla källor är citerade i Harvard-format och länkade i quizet.

## 🎯 Quiz-frågor

1. **Funka-dí** - Vilken ny verksamhet startades 2025?
2. **33% ökning** - Hur mycket ökade besöken på Bénka-dí?
3. **Biblioteket** - Vad hände med besök och lån?
4. **15 juni 2024** - När återöppnade Tobisviksbadet?
5. **541 deltagare** - Hur många barn deltog i Sommarboken?

## 🎨 Design och UX

Quizet använder en nordisk färgpalett med djupblå som huvudfärg och ljusare blå för kontrast. Designen är inspirerad av moderna webbstandarder med fokus på:

- **Läsbarhet** - Stora typer och god kontrast
- **Tillgänglighet** - ARIA-attribut och semantisk HTML
- **Användarvänlighet** - Tydliga knappar och feedback
- **Mobilanpassning** - Fungerar perfekt på alla skärmstorlekar

## 📝 Om prompt-filerna

Quizet inkluderar två specialfiler som visar hur det skapades:

- **promt.md** - Den fullständiga prompten som användes för att generera quizet
- **promt_bra.html** - En guide om vad som kännetecknar en bra prompt för AI-assistenter

Dessa filer är länkade från quizets footer och ger insikt i hur man kan arbeta effektivt med AI-verktyg.

## 🔄 Version

- **Quiz nr:** 22
- **Skapad:** 2026-01-30
- **Senast uppdaterad:** 2026-01-30
- **Status:** ✅ Produktionsklar

## 👤 Författare

**Kent Lundgren**
- Blogg: [Controller utan gränser](https://controllerutangranser.wordpress.com/)
- GitHub: [@kentlundgren](https://github.com/kentlundgren)

Utvecklat med AI-assistans från Claude (Anthropic) via Cursor IDE.

## 📄 Licens

Detta projekt är en del av en utbildningsserie om kommunal verksamhetsutveckling och är fritt att använda för icke-kommersiella ändamål.

## 🔗 Relaterade quiz

- [Quiz 21](../21/) - Danmark, Grönland och Sverige – Historia och Relationer
- [Alla quiz](../) - Se hela serien Fredagsquiz

---

<div align="center">

### 🔗 Snabblänkar

**[🎮 Spela på kentlundgren.se](https://kentlundgren.se/program/quiz/22/)** | **[🌐 Spela på GitHub Pages](https://kentlundgren.github.io/quiz/22/)**

**[📝 Visa prompten](promt.md)** | **[💡 Om bra prompts](promt_bra.html)** | **[📦 GitHub Repository](https://github.com/kentlundgren/quiz/tree/main/22)**

---

*Skapad med passion för kommunal verksamhetsutveckling och digital pedagogik* 💙

</div>
