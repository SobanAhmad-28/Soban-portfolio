# Soban Ahmad — Personal Portfolio & Data Science Showcase

> Clean, responsive, and editorial portfolio showcasing foundational work in Artificial Intelligence, Machine Learning, Exploratory Data Analysis (EDA), and reproducible Python/Pandas workflows.

- **Live URL**: [https://soban-portfolio-seven.vercel.app](https://soban-portfolio-seven.vercel.app)
- **Repository**: [https://github.com/SobanAhmad-28/Soban-portfolio](https://github.com/SobanAhmad-28/Soban-portfolio)

---

## 🎯 Project Purpose

This portfolio serves as an authentic technical profile and project archive for **Soban Ahmad**, a Computer Science Engineering student concentrating on AI/ML and Data Science.

Unlike generic developer templates filled with synthetic claims or exaggerated metrics, this portfolio focuses on:
- **Transparent Learning**: Documenting practical exploration in data cleaning, exploratory data analysis, and relational querying.
- **Reproducible Projects**: Deep-dive case studies detailing datasets, methodology, challenges, and actual findings.
- **Editorial Design System**: Typography-first layout pairing Newsreader (editorial serif), Inter (clean sans-serif), and JetBrains Mono (technical code font).
- **Interactive Visual Polish**: Canvas 2D ambient particle physics (`AntigravityCanvas`) providing subtle motion without performance degradation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type-checking)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts](https://fonts.google.com/) via `next/font` (Newsreader, Inter, JetBrains Mono)
- **Animation & Graphics**: HTML5 Canvas 2D with spring-damped particle physics, `IntersectionObserver` auto-pausing, and `prefers-reduced-motion` compliance
- **SEO & Discoverability**: Metadata API, dynamic `sitemap.xml`, `robots.txt`, and Open Graph tags
- **Deployment**: [Vercel](https://vercel.com/)

---

## ✨ Features

1. **Editorial Hero Section**:
   - Moniker, tagline, and real-time availability status badge (driven centrally via `src/data/personal.ts`).
   - Interactive Antigravity dot/dash particle canvas reacting smoothly to mouse movement.
   - Interactive student code terminal box illustrating authentic Pandas EDA workflows.
   - 4-card glance bento strip highlighting location, university, degree, and active stack.

2. **About Section**:
   - Authentic narrative describing current engineering interests, foundational focus, and realistic career objectives.
   - Academic details, core focus pillars, and personal philosophy.

3. **Skills & Tools Directory**:
   - Categorized across **Data & AI** (Python, Pandas, NumPy, Scikit-learn, EDA), **Core Engineering** (C/C++, SQL, Git, Linux), and **Workflow & Analysis** (Jupyter, VS Code, Kaggle, GitHub).
   - Interactive category filtering with clean badge counts.

4. **Featured Projects & Deep-Dive Case Studies**:
   - Curated project cards with status indicators (`Completed` / `In Progress`).
   - Dedicated dynamic case-study routes (`/projects/[slug]`) featuring dataset details, statistical breakdowns, methodology, reproducible code snippets, key observations, and limitations.

5. **Academic & Learning Journey**:
   - Interactive chronological timeline documenting coursework, milestones, and personal skill development.

6. **Direct Contact Section**:
   - One-click email copy with instant feedback.
   - Safe contact dispatch: Supports direct Gmail compose and native `mailto` pre-filled links.
   - Optional Web3Forms API background submission (safely degrades to webmail if no key is configured).

---

## 🚀 Local Setup & Development

### Prerequisites
- Node.js 18.18.0 or newer
- npm, pnpm, or yarn

### 1. Clone the repository
```bash
git clone https://github.com/SobanAhmad-28/Soban-portfolio.git
cd Soban-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npm run build` | Compiles optimized production bundle with TypeScript checks |
| `npm run start` | Starts production server locally after building |
| `npm run lint` | Runs ESLint across the codebase |
| `npx tsc --noEmit` | Runs strict TypeScript compiler check without emitting output |

---

## ⚙️ Configuration & Personalization

All personal and project data are decoupled from presentation components and centralized in two configuration files:

- **`src/data/personal.ts`**: Contains name, bio, social URLs, email, education, university, location, and optional availability badge toggle (`showAvailabilityBadge`).
- **`src/data/projects.ts`**: Contains the project directory, tags, metrics, problem statements, code examples, and case study content.

---

## 📌 Honest Project Status

- **Status**: Active student portfolio & technical learning log.
- **Education**: Computer Science Engineering undergraduate.
- **Current Learning**: Deepening knowledge in statistical thinking, feature engineering, and reproducible data workflows.
- All code, datasets, and projects presented in this portfolio reflect authentic coursework and independent student experimentation.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
