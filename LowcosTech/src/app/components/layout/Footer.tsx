import { Link } from 'react-router';
import { SERVICES } from '../../../core/constants';
import logoImg from '../../../imports/logo.png';

const SOCIAL_ICONS: { label: string; href: string; svgPath: string }[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/locowtech',
    svgPath:
      'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/locowtech',
    svgPath:
      'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/locowtech',
    svgPath:
      'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
];

const COMPANY_LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/vision', label: 'Vision' },
  { to: '/sectors', label: 'Sectors of Activity' },
  { to: '/contact', label: 'Contact' },
  { to: '#', label: 'Careers' },
  { to: '#', label: 'News' },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" aria-label="LowCosTech — Accueil">
              <img src={logoImg} alt="LowCosTech" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-sm text-neutral-400 mb-2">Smart and Innovative Solutions</p>
            <p className="text-sm text-neutral-400">
              Leading technology provider for digital transformation worldwide.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Entreprise">
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {COMPANY_LINKS.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-neutral-400 mb-6">
              <li>Yaoundé, Cameroon</li>
              <li>
                <a href="mailto:contactus@lowcostech.com" className="hover:text-white transition-colors">
                  contactus@lowcostech.com
                </a>
              </li>
              <li>
                <a href="mailto:dotf@lowcostech.com" className="hover:text-white transition-colors">
                  dotf@lowcostech.com
                </a>
              </li>
              <li>
                <a href="tel:+237000000000" className="hover:text-white transition-colors">
                  +237 694352740 / +237 677476687
                </a>
              </li>
            </ul>
            <div className="flex gap-3" aria-label="Réseaux sociaux">
              {SOCIAL_ICONS.map(({ label, href, svgPath }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-neutral-700 hover:border-white hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </address>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400 text-center md:text-left">
            © {new Date().getFullYear()} LowCosTech. All rights reserved. Driving global digital transformation.
          </p>
          <nav aria-label="Mentions légales" className="flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
