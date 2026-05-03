import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  /** Chemin relatif de la page, ex: "/services/cybersecurity" */
  path?: string;
  /** URL absolue de l'image Open Graph */
  ogImage?: string;
  /** Type de page pour le schema.org JSON-LD */
  schemaType?: 'WebPage' | 'Service' | 'AboutPage' | 'ContactPage';
}

const SITE_NAME = 'Locow Tech';
const BASE_URL = 'https://www.locowtech.cm';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * useSEO — Gère dynamiquement le titre, la description, les balises Open Graph,
 * les Twitter Cards, les méta GEO et le JSON-LD structuré pour chaque page.
 *
 * Usage: appelez ce hook en haut de chaque composant Page.
 */
export function useSEO({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  schemaType = 'WebPage',
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${BASE_URL}${path}`;

    // ── Titre ──────────────────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Helpers ────────────────────────────────────────────────────────────
    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr === 'property' ? 'property' : 'name', selector.match(/["']([^"']+)["']/)?.[1] ?? '');
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const upsertMeta = (nameOrProp: string, isProp: boolean, content: string) => {
      const attr = isProp ? 'property' : 'name';
      const selector = `meta[${attr}="${nameOrProp}"]`;
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, nameOrProp);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const upsertLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── SEO de base ────────────────────────────────────────────────────────
    upsertMeta('description', false, description);
    upsertMeta('robots', false, 'index, follow');
    upsertLink('canonical', canonicalUrl);

    // ── GEO SEO ────────────────────────────────────────────────────────────
    upsertMeta('geo.region', false, 'CM');
    upsertMeta('geo.placename', false, 'Yaoundé, Cameroon');
    upsertMeta('geo.position', false, '3.8480;11.5021');
    upsertMeta('ICBM', false, '3.8480, 11.5021');

    // ── Open Graph ─────────────────────────────────────────────────────────
    upsertMeta('og:type', true, 'website');
    upsertMeta('og:site_name', true, SITE_NAME);
    upsertMeta('og:title', true, fullTitle);
    upsertMeta('og:description', true, description);
    upsertMeta('og:url', true, canonicalUrl);
    upsertMeta('og:image', true, ogImage);
    upsertMeta('og:locale', true, 'fr_CM');
    upsertMeta('og:locale:alternate', true, 'en_CM');

    // ── Twitter Card ───────────────────────────────────────────────────────
    upsertMeta('twitter:card', false, 'summary_large_image');
    upsertMeta('twitter:title', false, fullTitle);
    upsertMeta('twitter:description', false, description);
    upsertMeta('twitter:image', false, ogImage);

    // ── JSON-LD Schema.org ─────────────────────────────────────────────────
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      description:
        'Leading provider of intelligent solutions, consulting, cybersecurity, technological services, eco-construction, finance, and agricultural technology across Cameroon and Africa.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yaoundé',
        addressCountry: 'CM',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@locowtech.cm',
        contactType: 'customer service',
        areaServed: 'CM',
        availableLanguage: ['French', 'English'],
      },
      sameAs: [
        'https://www.linkedin.com/company/locowtech',
        'https://twitter.com/locowtech',
        'https://www.facebook.com/locowtech',
      ],
    };

    const pageSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: fullTitle,
      description,
      url: canonicalUrl,
      isPartOf: { '@id': BASE_URL },
    };

    const upsertJsonLd = (id: string, data: object) => {
      let el = document.querySelector<HTMLScriptElement>(`script[data-schema="${id}"]`);
      if (!el) {
        el = document.createElement('script');
        el.setAttribute('type', 'application/ld+json');
        el.setAttribute('data-schema', id);
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    upsertJsonLd('organization', orgSchema);
    upsertJsonLd('page', pageSchema);
  }, [title, description, path, ogImage, schemaType]);
}
