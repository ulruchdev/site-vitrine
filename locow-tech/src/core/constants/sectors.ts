import type { Sector } from '../types';
import { BRAND } from '.';


export const SECTORS: Sector[] = [
  {
    id: 'digital-applications',
    title: 'Digital Applications',
    description: 'Custom software solutions tailored for African businesses.',
    image: 'https://images.unsplash.com/photo-1620829813573-7c9e1877706f?w=800',
    accentColor: BRAND.terracotta,
    href: '/services/digital-applications',
  },
  {
    id: 'consulting',
    title: 'Consulting & Support',
    description: 'Strategic technology consulting and ongoing support.',
    image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?w=800',
    accentColor: BRAND.orange,
    href: '/services/consulting',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    accentColor: BRAND.rose,
    href: '/services/cybersecurity',
  },
  {
    id: 'tech-services',
    title: 'Technological Services',
    description: 'Hardware and software integration and managed IT services.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accentColor: BRAND.terracotta,
    href: '/services/tech-services',
  },
  {
    id: 'eco-construction',
    title: 'Eco-Construction',
    description: 'Sustainable building solutions for the African market.',
    image: 'https://images.unsplash.com/photo-1495578942200-c5f5d2137def?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    accentColor: BRAND.orange,
    href: '/services/eco-construction',
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Fintech solutions for mobile money and financial inclusion.',
    image: 'https://images.unsplash.com/photo-1660742533971-eb413acbfb47?w=800',
    accentColor: BRAND.rose,
    href: '/services/finance',
  },
  {
    id: 'agritech',
    title: 'AgriTech',
    description: 'Precision agriculture for African smallholders.',
    image: 'https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=800',
    accentColor: BRAND.orange,
    href: '/services/agritech',
  },
];

/** Sectors shown on the Home page Business Sectors section (6 items, no AgriTech) */
export const HOME_SECTORS: Sector[] = SECTORS.slice(0, 6);
