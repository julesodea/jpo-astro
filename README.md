# Jules O'Dea Portfolio - Astro Version

This is an Astro.js migration of the original Next.js portfolio site. It's a single-page portfolio showcasing Jules O'Dea's work as a Frontend Developer based in Auckland, New Zealand.

## Tech Stack

- **Astro 5.x** - Static site framework
- **React** - For interactive components
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vercel Analytics** - Performance and analytics tracking
- **TypeScript** - Type safety

## Features

- ✨ Smooth animations with Framer Motion
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡️ Fast performance with Astro
- 📊 Vercel Analytics & Speed Insights integration
- 📄 PDF CV download endpoint

## Project Structure

```
/
├── public/
│   ├── favicon.ico
│   ├── julesodea-cv.pdf
│   └── ... (other static assets)
├── src/
│   ├── components/
│   │   ├── footer/
│   │   ├── nav/
│   │   ├── theme/
│   │   ├── wave/
│   │   └── HomeContent.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── contact.astro
│   │   └── cv/
│   │       └── index.ts
│   └── styles/
│       └── global.css
└── package.json
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run start
```

## Migration Notes

This project was migrated from Next.js to Astro.js while maintaining the same features and design:

- **Layout**: Next.js `app/layout.tsx` → Astro `src/layouts/Layout.astro`
- **Pages**: Next.js App Router → Astro file-based routing
- **Interactive Components**: React components with `client:load` directive for interactivity
- **Theme System**: Custom theme toggle using localStorage (replaced `next-themes`)
- **Analytics**: Maintained Vercel Analytics and Speed Insights
- **API Routes**: Next.js Route Handlers → Astro API endpoints
- **Styling**: Kept Tailwind CSS 4.x configuration

## Deployment

This project is optimized for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

## License

Private - Jules O'Dea
