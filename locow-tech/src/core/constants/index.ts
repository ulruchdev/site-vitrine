import type { CompanyStat, ServiceLink } from '../types';

export const BRAND = {
  orange: 'rgb(240, 162, 106)',
  terracotta: 'rgb(174, 82, 72)',
  rose: 'rgb(152, 53, 100)',
  orangeAlpha: 'rgba(240, 162, 106, 0.1)',
} as const;

export const SERVICES: ServiceLink[] = [
  { name: 'Digital Applications', href: '/services/digital-applications' },
  { name: 'Consulting and Support', href: '/services/consulting' },
  { name: 'Cybersecurity', href: '/services/cybersecurity' },
  { name: 'Technological Services', href: '/services/tech-services' },
  { name: 'Eco-Construction', href: '/services/eco-construction' },
  { name: 'Finance', href: '/services/finance' },
  { name: 'AgriTech', href: '/services/agritech' },
];

export const COMPANY_STATS: CompanyStat[] = [
  { value: '500+', label: 'Clients Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '7', label: 'Business Sectors' },
  { value: '98%', label: 'Client Satisfaction' },
];
