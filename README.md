# Krishna Kant Sahu — Portfolio

A production-ready portfolio website built with **Next.js 14 (App Router)**, **React**, and **Tailwind CSS**.

Inspired by a cosmic/celestial editorial aesthetic — deep space backgrounds, a glowing planet orb, serif display typography, and elegant minimal layouts.

---

## ✨ Design Inspiration

- **Dark mode default** with a smooth light/dark toggle
- **Cormorant Garamond** serif for display headings — editorial, refined
- **DM Sans** for body — clean, modern, readable  
- **DM Mono** for labels, code, metadata — precise and technical
- Animated **planet orb** (CSS-only, no images) inspired by the cosmic portfolio reference
- Typewriter role animation in the hero
- IntersectionObserver-driven scroll reveals
- Noise grain texture overlay for depth

---

## 🚀 Getting Started (Local)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/krishna-kant-portfolio.git
cd krishna-kant-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

---

## 📦 Project Structure

```
/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout with font + theme providers
│   └── page.tsx          # Home page — assembles all sections
│
├── components/
│   ├── Navbar.tsx        # Sticky nav with dark/light toggle
│   ├── Hero.tsx          # Full-screen hero with planet orb + typewriter
│   ├── About.tsx         # Bio, certifications, tech stack
│   ├── Projects.tsx      # Editorial list-style project showcase
│   └── Footer.tsx        # Contact links + site footer
│
├── public/               # Static assets (add profile photo here)
├── tailwind.config.ts    # Custom theme: fonts, colors, spacing
├── next.config.mjs       # Image domains config
└── tsconfig.json         # TypeScript config
```

---

## 🌍 Deploy to Vercel

### Option A — Vercel Dashboard (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio website"
   git remote add origin https://github.com/YOUR_USERNAME/krishna-kant-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app` 🎉

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🔧 Customization

### Update your personal info
- **Name / hero text** → `components/Hero.tsx`
- **Bio, certifications, skills** → `components/About.tsx`
- **Projects** → `components/Projects.tsx` (update `projects` array)
- **Contact links** → `components/Footer.tsx`
- **Navbar links** → `components/Navbar.tsx`
- **Site metadata / SEO** → `app/layout.tsx`

### Change the color accent
In `app/globals.css`, update `--accent` in both `:root` and `.dark`:
```css
--accent: #c9a96e;  /* gold → change to your preferred accent */
```

### Add a profile photo
Place your photo at `public/profile.jpg`, then update `About.tsx`:
```tsx
import Image from "next/image";
// Replace the "KK" initials div with:
<Image src="/profile.jpg" alt="Krishna Kant Sahu" width={80} height={80} className="rounded-2xl" />
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework, App Router, SSR |
| React 18 | UI components + hooks |
| Tailwind CSS | Utility-first styling |
| next-themes | Dark/light mode with persistence |
| DM Sans + Cormorant | Typography |
| Vercel | Deployment platform |

---

## 📋 Checklist Before Going Live

- [ ] Update email in `Footer.tsx` and `Navbar.tsx`
- [ ] Update LinkedIn and GitHub URLs throughout
- [ ] Update project GitHub links in `Projects.tsx`
- [ ] Add real project screenshots to `/public` or use Unsplash URLs
- [ ] Update `metadata` in `app/layout.tsx` with your real description
- [ ] Test on mobile (iOS Safari + Android Chrome)
- [ ] Run `npm run build` locally to confirm zero errors

---

© 2025 Krishna Kant Sahu
