# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual website for "The Farmer Was Replaced" - an educational programming game. The site is built with Astro.js and Tailwind CSS, featuring internationalization (i18n) support for English and Chinese languages.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production static site
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands directly

### Development Workflow
1. Run `npm run dev` to start development server
2. The site supports both English (default) and Chinese languages
3. Default locale (English) doesn't have URL prefix, Chinese uses `/zh` prefix
4. All pages are in the `src/pages/[...lang]/` directory structure

## Architecture & Structure

### Core Technologies
- **Astro 5** - Static site generator with islands architecture
- **Tailwind CSS 4** - Utility-first CSS framework (via Vite plugin)
- **TypeScript** - Type-safe development
- **MDX** - Enhanced markdown with React components

### Internationalization (i18n)
- Configuration in `Setting.json` and `src/locales.ts`
- Supported languages: English (en, default), Chinese (zh)
- Routing handled by Astro's i18n system
- Translation helper functions in `src/i18n.ts`

### File Structure
```
src/
├── components/         # Astro components (Header, Footer, etc.)
├── layouts/           # Page layout templates
├── pages/[...lang]/   # Multilingual page routes
├── styles/            # Global CSS and Tailwind imports
├── i18n.ts           # Internationalization utilities
├── locales.ts        # Locale configuration
├── consts.ts         # Site constants
└── assets/           # Static assets (images, etc.)
```

### Configuration Files
- `astro.config.mjs` - Astro framework configuration with i18n and integrations
- `Setting.json` - Site metadata, locale settings, and basic configuration
- `package.json` - Dependencies and scripts
- `src/content.config.ts` - Content collections configuration

### Page Structure
- All pages use dynamic routing with `[...lang]` parameter
- Default locale (en) doesn't have URL prefix
- Main pages: index.astro, blog.astro, terms.astro, privacy.astro
- Blog posts handled by `[...slug].astro` dynamic route

### Key Components
- `BaseLayout.astro` - Main layout wrapper with i18n context
- `Header.astro` - Navigation with language switcher
- `Footer.astro` - Site footer component
- `BlogList.astro` - Blog post listing component
- `FormattedDate.astro` - Date formatting utility

### Styling Approach
- Notion-like design philosophy with clean, minimal aesthetic
- Tailwind CSS v4 with Vite integration
- Global styles in `src/styles/global.css`
- Responsive design with generous whitespace

### Static Site Generation
- Built as static site for optimal performance
- Automatic sitemap generation via @astrojs/sitemap
- Image handling with passthrough service
- SEO-friendly with multilingual sitemap support