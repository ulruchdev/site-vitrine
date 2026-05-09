import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SERVICES } from '../../../core/constants';
import { useActiveLink } from '../../hooks/useActiveLink';
import logoImg from '../../../imports/logo.png';

const NAV_LINKS = [
  { to: '/sectors', label: 'Sectors of Activity' },
  { to: '/vision', label: 'Vision' },
  { to: '/about', label: 'About' },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isActive = useActiveLink();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" aria-label="LowCosTech — Accueil">
            <img src={logoImg} alt="LowCosTech" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-8">
            <ServicesDropdown open={dropdownOpen} onToggle={setDropdownOpen} />

            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-neutral-700 hover:text-neutral-900 transition-colors ${isActive(to) ? 'font-semibold' : ''
                  }`}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="px-6 py-2.5 text-white rounded bg-brand-orange hover:opacity-90 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-neutral-100"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <MobileNav onClose={() => setMobileOpen(false)} isActive={isActive} />
        )}
      </div>
    </header>
  );
}

/* ─── ServicesDropdown ──────────────────────────────────────────────────── */
function ServicesDropdown({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: (v: boolean) => void;
}) {
  const isActive = useActiveLink(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => onToggle(true)}
      onMouseLeave={() => onToggle(false)}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 transition-colors py-8 ${isActive('/services') ? 'font-semibold text-neutral-900' : 'text-neutral-700 hover:text-neutral-900'
          }`}
      >
        Services <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full left-0 w-64 bg-white border border-neutral-200 shadow-xl rounded-lg overflow-hidden"
        >
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              role="menuitem"
              className="block px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-orange border-l-2 border-transparent hover:border-brand-orange transition-all"
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── MobileNav ─────────────────────────────────────────────────────────── */
function MobileNav({
  onClose,
  isActive,
}: {
  onClose: () => void;
  isActive: (path: string) => boolean;
}) {
  return (
    <nav
      aria-label="Navigation mobile"
      className="lg:hidden border-t border-neutral-200 py-4 space-y-1"
    >
      <div className="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
        Services
      </div>
      {SERVICES.map((service) => (
        <Link
          key={service.href}
          to={service.href}
          className="block px-6 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-orange transition-colors"
          onClick={onClose}
        >
          {service.name}
        </Link>
      ))}

      <div className="pt-2 border-t border-neutral-100">
        {NAV_LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`block px-4 py-2 text-neutral-700 hover:bg-neutral-50 transition-colors ${isActive(to) ? 'font-semibold' : ''
              }`}
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="block mx-4 mt-3 px-6 py-2.5 text-white text-center rounded bg-brand-orange hover:opacity-90 transition-opacity"
          onClick={onClose}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
