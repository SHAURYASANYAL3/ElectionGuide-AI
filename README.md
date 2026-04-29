# ElectionGuide AI 🗳️

> An intelligent, interactive assistant that helps users understand election processes, timelines, and participation steps — worldwide.

**Challenge Vertical:** Civic Tech / Education

---

## 🎯 Project Overview

ElectionGuide AI is a web-based educational tool that makes democracy accessible. It guides users through the complete election lifecycle — from voter registration to results — using personalized, adaptive content.

Built with **Vite + React**, the app is lightweight (<10MB), fully responsive, and deploys seamlessly to Vercel.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **🏠 Onboarding** | 3-step profile setup (country, election type, knowledge level) |
| **📖 Learn** | 6 topics with step-by-step guides, timeline, and glossary |
| **⚖️ Compare** | Side-by-side comparison of 8 countries' election systems |
| **🎮 Simulate** | Interactive 6-step voting simulation with scoring |
| **✅ Checklist** | Voter readiness tracker with progress bar |
| **🌐 Google Translate** | Multi-language support via Google Translate widget |

---

## 🧠 Smart Assistant Logic

The app adapts content based on the user's profile — this is the core intelligence layer:

### How it works:

1. **Personalized Recommendations** — Beginners see fundamentals (Overview, Registration, Voting). Advanced users get deeper topics (Counting, Results, Campaigns).

2. **Contextual Tips** — Country-specific insights appear dynamically. Example: India users see "India has the largest electorate — 900M+ voters."

3. **Adaptive Detail Levels** — Beginners see the full glossary + timeline. Advanced users skip the glossary.

4. **Smart Scoring** — The simulation grades performance (A+ to C) with actionable feedback.

5. **Profile-Aware Defaults** — The Compare section pre-selects the user's home country.

### Key file: [`src/logic/smartAssistant.js`](src/logic/smartAssistant.js)

```
getRecommendedTopics(level)   → personalized topic order
getContextualTip(country, section)  → dynamic tips
getDetailLevel(level)         → adaptive UI
getSimulationFeedback(journal)     → performance grading
isCorrectChoice(step, index)  → decision validation
```

---

## 🌐 Google Services Integration

**Google Translate Widget** — Enables multi-language support directly in the navigation bar.

- Supports 10 languages: English, Hindi, Spanish, French, German, Portuguese, Japanese, Arabic, Chinese, Bengali
- Loads dynamically via the official Google Translate script
- Styled to match the Notion-inspired design system
- Component: [`src/components/GoogleTranslate.jsx`](src/components/GoogleTranslate.jsx)

---

## 🏗️ Architecture

```
src/
├── components/           # React UI components
│   ├── Nav.jsx           # Navigation with Google Translate
│   ├── Home.jsx          # Onboarding flow
│   ├── Learn.jsx         # Topic-based learning
│   ├── Compare.jsx       # Country comparison
│   ├── Simulate.jsx      # Voting simulation
│   ├── Checklist.jsx     # Readiness tracker
│   └── GoogleTranslate.jsx  # Google Services widget
├── data/                 # Static data modules
│   ├── learnData.js      # Topics, timeline, glossary
│   ├── countryData.js    # 8 countries' election data
│   └── simulationData.js # Sim steps + checklist items
├── logic/                # Smart assistant engine
│   └── smartAssistant.js # Recommendations, tips, scoring
├── test/                 # Vitest test suites
│   ├── smartAssistant.test.js  # Logic tests (17 tests)
│   └── dataIntegrity.test.js   # Data validation (12 tests)
├── App.jsx               # Root component + state
├── main.jsx              # React entry point
└── index.css             # Notion-inspired design system
```

**Design Philosophy:** Clean separation of concerns — data, logic, and presentation are fully decoupled. No unnecessary dependencies.

---

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🧪 Testing

Tests are written with **Vitest** and cover:

1. **Smart Assistant Logic** (`smartAssistant.test.js`)
   - Topic recommendations by level
   - Contextual tips by country
   - Detail level adaptation
   - Simulation scoring/grading
   - Choice validation

2. **Data Integrity** (`dataIntegrity.test.js`)
   - All data modules have required fields
   - Simulation step indices are valid
   - Country data matches compare fields
   - No missing/empty values

Run: `npm run test`

---

## ♿ Accessibility

- Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels on all interactive elements
- `role="tablist"`, `role="checkbox"`, `role="progressbar"` where appropriate
- `aria-live="polite"` for dynamic tips and score updates
- Keyboard navigation (Enter key) on all clickable cards
- `aria-current="page"` on active nav link
- Good color contrast (WCAG AA compliant)

---

## 📌 Assumptions

1. **Static data only** — No backend or API calls. All election data is bundled.
2. **Educational focus** — Content is factual and politically neutral.
3. **Session-based state** — User profile and checklist reset on page reload (no localStorage to keep it clean).
4. **Google Translate** is loaded from CDN — requires internet connection.
5. **8 countries** included as representative samples of diverse electoral systems.

---

## 🔮 Future Improvements

- [ ] Add more countries and regional election data
- [ ] Integrate Google Maps for polling station locator
- [ ] Add localStorage persistence for user progress
- [ ] Screen reader testing with NVDA/VoiceOver
- [ ] Add quiz mode with randomized questions
- [ ] PWA support for offline access
- [ ] Dark mode toggle
- [ ] Analytics via Google Analytics

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Vite** | Build tool & dev server |
| **React 18** | UI framework |
| **Vitest** | Unit testing |
| **Google Translate** | Multi-language support |
| **Vanilla CSS** | Notion-inspired design system |

---

## 📄 License

MIT — Built for civic education and competition submission.
