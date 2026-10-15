# THE BUILDER PROTOCOL — Website Repository

**Live URL:** [thebuilderprotocol.me](https://thebuilderprotocol.me)

## Stack
- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3 (custom obsidian dark theme)
- **Typography:** Plus Jakarta Sans + JetBrains Mono (Google Fonts)
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions (`peaceiris/actions-gh-pages`)

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

Automated via `.github/workflows/deploy.yml` — push to `main` triggers:
1. `npm ci`
2. `npm run build`
3. CNAME verification (`thebuilderprotocol.me`)
4. Deploy `dist/` to `gh-pages` branch

## Architecture

```
src/
├── App.jsx              # Root + hash-based router
├── main.jsx             # React entry point
├── index.css            # Global design system
├── components/
│   ├── Navbar.jsx       # Fixed glassmorphic navbar
│   └── Footer.jsx       # Multi-column footer
└── pages/
    ├── HomePage.jsx     # Core Index + Masthead + Board
    ├── ArchivesPage.jsx # Issue 01 & 02 catalog
    ├── IdeathonPage.jsx # Strategy challenge portal
    └── ContactPage.jsx  # Submission / contact form
public/
├── CNAME                # Custom domain: thebuilderprotocol.me
└── favicon.svg          # Brand favicon
```

## Publication Info
- **Publisher & Editor-in-Chief:** Afsal Ahmed S
- **Institutional Node:** 24cs@stjosephs.tech.sc.in
- **Frequency:** Monthly
- **Access:** Open Access