# Animated Landing Page

A small Next.js app demonstrating an animated, responsive landing page built with Tailwind CSS and Framer Motion. This project includes a hero section with animated images and simple UI components for a food-themed landing page.

## Features

- Animated hero using `framer-motion`
- Responsive layout with `tailwindcss`
- Reusable UI components in the `components/` folder
- Image assets stored in `app/assets/food`

## Requirements

- Node.js 16.8+ (or current LTS)
- npm, yarn, or pnpm

## Quick Start

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

- `app/` - Next.js app routes and pages (see `app/page.tsx`)
- `components/` - UI components (Banner, NavBar, Menu, Review, Footer, etc.)
- `app/assets/food/` - image assets used on the landing page
- `public/` - static files

## Notable Files

- `app/page.tsx` - main landing page with Framer Motion animations
- `components/Banner/Banner.jsx` - banner component

## Adding or Replacing Assets

Place images in `app/assets/food/` and import them from `app/page.tsx` or components as needed. Use Next.js `Image` for optimal loading.

## Dependencies

This project uses (examples):

- `next`
- `react` / `react-dom`
- `framer-motion`
- `tailwindcss`
- `react-icons`

See `package.json` for the full list and exact versions.

## Contributing

Feel free to open issues or pull requests to improve animations, accessibility, or responsiveness.

## License

This project is provided as-is under the MIT License. See LICENSE for details (or create one if needed).
