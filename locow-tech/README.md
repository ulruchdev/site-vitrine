# Locow Tech — Site Officiel

**Smart Solutions for African Innovation**

## Architecture

Ce projet suit la **Clean Architecture** avec une séparation claire des responsabilités :

```
src/
├── core/                        # Logique métier pure (aucune dépendance UI)
│   ├── constants/               # Constantes globales, données statiques
│   │   ├── index.ts             # BRAND colors, SERVICES nav, COMPANY_STATS
│   │   ├── sectors.ts           # Données des 7 secteurs d'activité
│   │   └── projects.ts          # Données des projets phares
│   └── types/
│       └── index.ts             # Interfaces TypeScript (Sector, Project…)
│
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Layout.tsx       # Navbar + Footer (une seule source de vérité)
│   │   ├── shared/
│   │   │   └── SectionLabel.tsx # Badge réutilisable "Our Expertise" etc.
│   │   └── ui/                  # Composants shadcn/ui (non modifiés)
│   │
│   ├── features/                # Sections UI organisées par domaine
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SectorsSection.tsx
│   │   │   └── FeaturedProjectsSection.tsx
│   │   ├── sectors/
│   │   │   └── SectorsGrid.tsx
│   │   ├── services/            # (extensible par service)
│   │   ├── projects/
│   │   ├── about/
│   │   ├── vision/
│   │   └── contact/
│   │
│   ├── pages/                   # Pages minces — orchestrent les features
│   │   ├── Home.tsx
│   │   ├── Sectors.tsx
│   │   ├── DigitalApplications.tsx
│   │   ├── Cybersecurity.tsx
│   │   ├── Finance.tsx
│   │   ├── Consulting.tsx
│   │   ├── TechServices.tsx
│   │   ├── EcoConstruction.tsx
│   │   ├── AgriTech.tsx
│   │   ├── About.tsx
│   │   ├── Vision.tsx
│   │   ├── Contact.tsx
│   │   └── projects/
│   │       ├── Veridia.tsx
│   │       ├── AfGrid.tsx
│   │       └── AgriTechProject.tsx
│   │
│   ├── App.tsx                  # RouterProvider
│   └── routes.ts                # Définition des routes
│
├── imports/                     # Assets statiques (logo, photos)
└── styles/                      # CSS global (theme, tailwind, fonts)
```

## Principes appliqués

- **Séparation données/UI** : toutes les données statiques (secteurs, projets, nav) sont dans `core/constants`. Les composants consomment sans définir.
- **Pas de dépendances Figma** : suppression de `ImageWithFallback` et du `figmaAssetResolver` Vite.
- **Pages minces** : les pages `Home.tsx`, `Sectors.tsx` etc. n'ont qu'un rôle d'orchestration.
- **Composants réutilisables** : `SectionLabel`, `Layout` sont partagés via `components/shared` et `components/layout`.
- **Images sans personnage** pour Digital Applications, Cybersecurity, Finance, Consulting (politique demandée).

## Démarrage

```bash
npm install
npm run dev
```

## Stack

- React 18 + TypeScript
- React Router 7
- Tailwind CSS 4
- shadcn/ui (Radix primitives)
- Vite 6
