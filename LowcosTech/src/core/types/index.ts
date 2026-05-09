export interface Sector {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  accentColor: string;
  href: string;
}

export interface Project {
  id: string;
  category: string;
  title: string;
  tagline: string;
  image: string;
  href: string;
}

export interface ServiceLink {
  name: string;
  href: string;
}

export interface CompanyStat {
  value: string;
  label: string;
}
