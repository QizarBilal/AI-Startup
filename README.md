# 🚀 NovaMind AI Landing Page

A modern, production-ready AI SaaS landing page built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- 🎨 Modern glassmorphism design with gradient accents
- 🌙 Dark mode support with seamless theme switching
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive across all devices
- 🔐 Login & Signup pages with authentication UI
- ⚡ Optimized performance and SEO-ready

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## � Quick Start

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
cd "e:\Resume Projects\AI Startup"
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

# Install dependencies

npm install

# Start development server

npm run dev

```

3. **Open browser** → [http://localhost:3000](http://localhost:3000)

## � Project Structure

```

AI Startup/
├── app/
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Landing page
│ ├── login/ # Login page
│ ├── signup/ # Signup page
│ └── globals.css # Global styles
├── components/
│ ├── Navbar.tsx # Navigation
│ ├── Hero.tsx # Hero section
│ ├── Features.tsx # Features
│ ├── ProductDemo.tsx # Demo section
│ ├── Testimonials.tsx # Reviews
│ ├── Pricing.tsx # Pricing plans
│ ├── FAQ.tsx # FAQ accordion
│ ├── Footer.tsx # Footer
│ ├── Logo.tsx # Brand logo
│ └── Modal.tsx # Modal component
└── lib/
├── data.ts # Content data
└── types.ts # TypeScript types

````

## 🎨 Customization

### Update Content
Edit `lib/data.ts` to modify features, testimonials, pricing, and FAQs.

### Change Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Update Branding
Replace "NovaMind AI" with your brand name in components.

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
````

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## � License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Built with Next.js 14, TypeScript, and TailwindCSS** ⚡
