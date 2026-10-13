# Portfolio Website — Implementation Plan (Approved & Implemented)

> **Role:** Computer Science Engineering student learning AI/ML & Data Science  
> **Goal:** Land internships and entry-level roles by demonstrating practical skills  
> **Stack:** Next.js 16.4 (App Router) · TypeScript · Tailwind CSS v4 · Lucide Icons · Vercel

---

## 1. Summary of Changes Implemented

- **Next.js & React Version**: Initialized with `create-next-app@latest` (Next.js 16.4.0 with Turbopack, React 19).
- **Lightweight & Maintainable Codebase**: Pure Tailwind CSS v4 styling, native CSS variables for theme tokens, zero bloated runtime libraries.
- **Strictly Honest Student Profile**:
  - Highlights you as a Computer Science Engineering student developing foundations in AI/ML & Data Science.
  - No claims of senior expertise, imaginary work history, fake testimonials, or fictional certifications.
- **Skills Architecture**:
  - **Tools I Work With (Practising)**: Python, Pandas (hands-on project usage).
  - **Currently Exploring (Learning)**: SQL, NumPy, Machine Learning, Data Visualization.
- **Real Project Focus**:
  - Only genuine project included: **E-commerce Order Status Analysis** (marked as *In Progress*).
  - Explores `order_status` frequency distribution and data cleaning/analysis with Pandas.
  - No fabricated dataset sources, fake metrics, or broken dummy GitHub links.
  - Project case-study page at `/projects/ecommerce-order-status-analysis`.
  - Filter tabs omitted as requested until more projects are added.
- **Safe Handling of Missing / Unavailable Information**:
  - Missing resume download button is gracefully hidden rather than pointing to a broken 404 file.
  - Social media links (GitHub, LinkedIn, Email) are only rendered when valid URLs are configured; otherwise, helpful placeholder guidance is displayed.
  - Avatar defaults to your initials.

---

## 2. Sitemap

```
/                                   → Home (single-page with anchor sections)
  ├─ #hero                          → Greeting, name, student tagline, quick info pills
  ├─ #about                         → CS student bio, quick facts (degree, university, location)
  ├─ #skills                        → Categorized skills (Practising vs Currently Exploring)
  ├─ #projects                      → Project cards with tags and case-study links
  ├─ #journey                       → Chronological milestones in your learning path
  └─ #contact                       → Reach out info, links, and resume download (when set)

/projects/ecommerce-order-status-analysis → Detailed case-study page with Overview, Problem, Approach, Learnings
/sitemap.xml                        → Dynamic XML sitemap for SEO
/robots.txt                         → Crawler rules
```

---

## 3. Placeholders to Fill In

All personal and project configurations live in typed files under `src/data/`:

| Configuration File | Field | Current Value / Status | Action Needed |
|-------------------|-------|------------------------|---------------|
| `src/data/personal.ts` | `firstName` | `"Your First Name"` | Enter your actual first name |
| `src/data/personal.ts` | `lastName` | `"Your Last Name"` | Enter your actual last name |
| `src/data/personal.ts` | `email` | `"your.email@example.com"` | Enter your actual email address |
| `src/data/personal.ts` | `githubUrl` | `""` | Add your profile URL (e.g. `https://github.com/username`) |
| `src/data/personal.ts` | `linkedinUrl` | `""` | Add your LinkedIn URL |
| `src/data/personal.ts` | `university` | `"Your University"` | Enter your college or university name |
| `src/data/personal.ts` | `graduationYear` | `"Expected 20XX"` | Enter your graduation year (e.g. `2027`) |
| `src/data/personal.ts` | `location` | `"Your City, Country"` | Enter your city & country |
| `src/data/personal.ts` | `bio` | 3 student-focused paragraphs | Personalize your bio if desired |
| `src/data/personal.ts` | `resumeFileName` | `null` | Place `resume.pdf` into `public/` and set filename here |
| `src/data/personal.ts` | `avatarPath` | `null` | Place picture in `public/` or leave `null` for initials badge |
| `src/data/skills.ts` | `practising` & `learning` | Python, Pandas (practising); SQL, etc. (learning) | Update as you practice new libraries |
| `src/data/projects.ts` | `ecommerce-order-status-analysis` | Real exploratory analysis details | Add GitHub repo link once uploaded |
| `src/data/journey.ts` | `milestones` | Academic and project milestones | Update dates (`20XX-XX`) to match your real timeline |

---

## 4. Verification & Testing Checklist

- [x] Node.js & npm version compatibility verified (`Node v24.13.0`, `npm v11.6.2`).
- [x] TypeScript type checking passed (`npx tsc --noEmit` exited with code 0).
- [x] ESLint passed with 0 errors and 0 warnings (`npm run lint` exited with code 0).
- [x] Production build passed (`npm run build` generated all static routes and metadata without errors).
- [x] Development server ran on `http://localhost:3000`.
- [x] Browser audit completed:
  - Homepage desktop layout and all 6 sections inspected.
  - Project case-study route (`/projects/ecommerce-order-status-analysis`) verified.
  - Return navigation verified.
  - Mobile viewport (`375x812`) tested.
  - No broken links or runtime errors.
