# Prachi Singh Portfolio

Backend-focused full-stack portfolio for Prachi Singh, built as a lightweight static frontend with a Node.js contact API.

## Tool Breakdown

- **UI:** Semantic HTML and custom CSS with Manrope and DM Mono typography.
- **Frontend:** Single-page HTML application served directly or by Node.js.
- **Animations:** Scroll reveal, cursor follow ring, hero parallax, draggable orb, Oneko pointer companion, marquee banner, and a 3D cube that breaks apart and reassembles.
- **Icons:** Text symbols and directional marks keep the page dependency-free.
- **Images/assets:** The Oneko pixel asset loads from its public GitHub URL; the page does not require local image assets for the core experience.
- **Responsive:** Desktop, tablet, and mobile layouts with touch-aware cursor behavior.
- **Sections:** Hero, About, achievements, selected work, backend/full-stack capabilities, toolkit, GitHub activity, and contact.
- **Profiles:** GitHub profile and contribution activity plus LeetCode problem-solving profile.
- **Contact:** The form uses `POST /api/contact` when served by Node and falls back to `mailto:` when opened directly as a file.
- **Deployment:** Run the Node server on any host that supports Node.js. Vercel can serve the static page, while the contact API should use a serverless function or a separate Node host.
- **Libraries:** No npm runtime dependencies. Google Fonts are loaded from Google Fonts.
- **Structure:** `index.html` contains the page UI and browser interactions; `server.js` serves the page and handles contact requests; `package.json` contains the start command.

## Run Locally

```bash
npm start
```

Open `http://localhost:3000`.

## GitHub

Profile: https://github.com/prachids-356

LeetCode: https://leetcode.com/u/prachids-356/
