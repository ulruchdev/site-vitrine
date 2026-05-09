# LowCosTech - Corporate Website

**LowCosTech** is a modern, professional technology consulting company specializing in intelligent digital solutions for African businesses, particularly in Cameroon. This repository contains the source code for the LowCosTech corporate website and portfolio.

## 🌍 Overview

LowCosTech provides comprehensive technology consulting and services across multiple sectors, including:

- **Digital Applications** - Custom software solutions tailored for African businesses
- **Consulting & Support** - Strategic technology consulting and ongoing IT support
- **Cybersecurity** - Comprehensive security solutions and threat protection
- **Technological Services** - Hardware/software integration and managed IT services
- **Eco-Construction** - Sustainable building solutions for the African market
- **Finance** - Fintech and mobile money solutions for financial inclusion
- **AgrAIA** - Precision agriculture and smart farming solutions

The website showcases three flagship projects: **VERIDIA** (Fintech Trust Layer), **AFGRID** (Energy Grid Intelligence), and **AgrAIA** (Smart Farming Solutions).

## 🚀 Tech Stack

### Frontend
- **React** 18.3.1 - Modern JavaScript library for building UIs
- **TypeScript** 5.0+ - Type-safe JavaScript
- **Vite** 6.4.2 - Next-generation frontend build tool
- **React Router** 7.13.0 - Client-side routing

### Styling & Components
- **Tailwind CSS** 4.1.12 - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
  - Includes 20+ pre-built components (dialogs, dropdowns, tabs, etc.)
- **Class Variance Authority** - Type-safe component variants
- **Tailwind Merge** - Intelligent Tailwind CSS class merging
- **Lucide React** - Beautiful, consistent icon library

### Additional Libraries
- **Motion** - Animation and motion library
- **Sonner** - Toast notifications
- **React Hook Form** - Performant form handling
- **Recharts** - Composable charting library
- **Embla Carousel** - Carousel component for image galleries
- **React Day Picker** - Date selection component
- **next-themes** - Dark mode support
- **vaul** - Drawer component

## 📁 Project Structure

```
locow-tech/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── layout/         # Layout components (Header, Footer, Navigation)
│   │   │   ├── ui/             # Radix UI wrapped components
│   │   │   ├── shared/         # Shared components (SectionLabel, etc)
│   │   │   └── features/       # Feature-specific components
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx        # Landing page
│   │   │   ├── About.tsx       # About page
│   │   │   ├── Vision.tsx      # Company vision page
│   │   │   ├── Sectors.tsx     # All sectors listing
│   │   │   ├── Contact.tsx     # Contact form page
│   │   │   ├── [Service]Pages  # Individual service pages
│   │   │   └── projects/       # Project detail pages (Veridia, AFGRID, AgrAIA)
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useActiveLink.ts
│   │   │   └── useSEO.ts       # SEO optimization hook
│   │   ├── App.tsx             # Main app component
│   │   └── routes.ts           # Route definitions
│   ├── core/
│   │   ├── constants/          # Application constants
│   │   │   ├── sectors.ts      # Sector/service definitions
│   │   │   ├── projects.ts     # Project data
│   │   │   └── index.ts
│   │   └── types/              # TypeScript type definitions
│   ├── styles/                 # Global styles
│   │   └── index.css
│   └── main.tsx                # Application entry point
├── public/                      # Static assets
│   ├── robots.txt
│   └── sitemap.xml
├── index.html                   # HTML entry point
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.mjs          # PostCSS configuration
```

## 📄 Main Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero section, about overview, and featured projects |
| `/about` | Company information and background |
| `/vision` | Company vision and mission statement |
| `/sectors` | Overview of all service sectors |
| `/services/digital-applications` | Digital application development services |
| `/services/consulting` | Technology consulting and support services |
| `/services/cybersecurity` | Cybersecurity and threat protection |
| `/services/tech-services` | General technological services |
| `/services/eco-construction` | Eco-construction and sustainable building |
| `/services/finance` | Fintech and financial solutions |
| `/services/AgrAIA` | Agriculture technology solutions |
| `/projects/veridia` | VERIDIA Fintech Trust Layer project |
| `/projects/AFGRID` | AFGRID Energy Grid Intelligence project |
| `/projects/AgrAIA` | AgrAIA Smart Farming project |
| `/contact` | Contact form and company information |

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd locow-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 💻 Development

### Project Scripts

- `npm run dev` - Start the development server with hot module replacement (HMR)
- `npm run build` - Create a production-optimized build
- `npm run preview` - Preview the production build locally

### Adding New Pages

1. Create a new file in `src/app/pages/YourPage.tsx`
2. Add the route in `src/app/routes.ts`
3. Use the `useSEO` hook for page metadata

### Adding New Services/Sectors

1. Add sector data to `src/core/constants/sectors.ts`
2. Create a corresponding page in `src/app/pages/`
3. Update the routes configuration

### Styling

- **Global styles** are in `src/styles/index.css`
- **Tailwind CSS** utility classes are used throughout components
- **UI Components** use Radix UI primitives wrapped with Tailwind styling

## 🎨 Design System

The project uses:
- **Radix UI** for accessible, unstyled components
- **Tailwind CSS** for styling
- **Class Variance Authority** for component variants
- **Dark Mode Support** via `next-themes`

Custom Radix UI components are in `src/app/components/ui/`.

## 📱 Responsive Design

The website is fully responsive and mobile-first, built with Tailwind CSS breakpoints:
- Mobile-first approach
- Touch-friendly UI on smaller screens
- Optimized layouts for tablets and desktops

## 🔍 SEO Optimization

- Uses custom `useSEO` hook for metadata management
- Includes `robots.txt` and `sitemap.xml` for search engine crawling
- Semantic HTML structure
- Open Graph meta tags support

## 🔐 Security

- Cybersecurity is a core offering with dedicated service pages
- Client-side rendering with no sensitive data handling
- Regular dependency updates recommended

## 📦 Dependencies

### Core Dependencies
- `react`, `react-dom` - UI framework
- `react-router` - Client-side routing
- `@radix-ui/*` - Component library (20+ components)
- `tailwindcss` - CSS framework
- `typescript` - Type safety

### UI & Animations
- `lucide-react` - Icons
- `motion` - Animations
- `embla-carousel-react` - Carousel functionality
- `sonner` - Toast notifications

### Forms & Data
- `react-hook-form` - Form handling
- `recharts` - Data visualization
- `react-day-picker` - Date selection

See `package.json` for the complete list and versions.

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Built with ES2020+ syntax

## 🚢 Deployment

The project can be deployed to any static hosting:
- **Vercel** - Recommended for best Vite support
- **Netlify** - Excellent support for SPA deployments
- **GitHub Pages** - Simple static hosting
- **Traditional Servers** - Use the `dist/` folder contents

Example for Vercel:
```bash
npm run build
# Deploy the dist/ folder
```

## 🤝 Contributing

When contributing to this project:
1. Follow the existing code structure and naming conventions
2. Use TypeScript for type safety
3. Test components locally before committing
4. Update documentation for new features

## 📄 License

[Add license information here if applicable]

## 📞 Contact

For inquiries about LowCosTech services, visit the contact page at `/contact` or visit the corporate website.

---

**LowCosTech** - Intelligent Solutions for African Businesses
