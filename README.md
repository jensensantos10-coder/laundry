# FreshPress Laundry - Modern Laundry Business Website

A professional, modern static website for a laundry business built with React, TypeScript, Tailwind CSS, and GSAP animations.

## 🚀 Features

### Pages
- **Home Page**: Hero section with parallax animations, services overview, customer reviews carousel, and FAQ accordion
- **Services Page**: Detailed service cards with icons, descriptions, and mobile-friendly accordions
- **Pricing Page**: Clear pricing tables (weight-based, per-item, packages), promotional section
- **About Us Page**: Business story, mission statement, team section, service area map with ZIP code checker
- **Contact Page**: Contact form with validation, embedded map, business hours, social media links

### Technical Features
- ✅ React 18+ with TypeScript for type safety
- ✅ Vite for fast development and optimized builds
- ✅ Tailwind CSS with custom theme (professional color scheme)
- ✅ GSAP for advanced parallax scrolling and animations
- ✅ React Router for client-side routing
- ✅ Leaflet maps integration (free, open-source)
- ✅ Fully responsive design (mobile-first approach)
- ✅ Form validation
- ✅ SEO-friendly structure
- ✅ Optimized production build with code splitting

### Design
- Modern, clean aesthetic with professional color scheme
- Consistent typography hierarchy
- Smooth animations and transitions
- Clear visual hierarchy
- Responsive across all device sizes

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

```bash
# Build for production
npm run build
```

The optimized production files will be in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   ├── ui/              # Reusable UI components (Button, Card, Accordion, Input)
│   ├── home/            # Home page components (Hero, Reviews, FAQ, ServicesOverview)
│   └── about/           # About page components (ServiceAreaMap)
├── pages/               # Page components (Home, Services, Pricing, About, Contact)
├── types/               # TypeScript type definitions
├── utils/               # Utility functions (validation, constants)
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles with Tailwind
```

## 🎨 Customization

### Business Information
Edit `src/utils/constants.ts` to update:
- Business name and tagline
- Contact information (phone, email, address)
- Business hours
- Social media links
- Location coordinates for map

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Blue (#0EA5E9) - trust and cleanliness
- Secondary: Teal (#14B8A6) - freshness
- Accent: Orange (#F97316) - energy and action

### Content
- **Services**: Edit `src/pages/Services.tsx`
- **Pricing**: Edit `src/pages/Pricing.tsx`
- **Team Members**: Edit `src/pages/About.tsx`
- **Reviews**: Edit `src/components/home/Reviews.tsx`
- **FAQ**: Edit `src/components/home/FAQ.tsx`

## 🌐 Deployment

The built files in `dist/` can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animations

GSAP animations are used throughout the site:
- Hero section parallax scrolling
- Scroll-triggered content reveals
- Smooth page transitions
- Interactive hover effects
- Review carousel auto-play

## 🗺️ Maps Integration

The site uses Leaflet (free, open-source) for map functionality:
- Interactive map on About and Contact pages
- ZIP code service area checker
- Coverage radius visualization
- Custom markers and popups

## 📝 Form Validation

Contact form includes validation for:
- Required fields
- Email format
- Phone number format
- Service selection

## 🔧 Technologies Used

- **React 18.3+**: UI library
- **TypeScript**: Type safety
- **Vite 5+**: Build tool
- **Tailwind CSS 3+**: Styling
- **GSAP 3+**: Animations
- **React Router DOM**: Routing
- **React Icons**: Icon library
- **Leaflet**: Maps
- **React Leaflet**: React wrapper for Leaflet

## 📄 License

This project is created for demonstration purposes.

## 🤝 Support

For questions or support, contact: info@freshpresslaundry.com

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
