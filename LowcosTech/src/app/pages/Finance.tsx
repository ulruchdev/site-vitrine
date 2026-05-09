import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Finance() {
  useSEO({
    title: `Fintech — Solutions Finance pour lAfrique`,
    description: `Solutions fintech pour la finance inclusive en Afrique : mobile money, paiements digitaux, microfinance. LowCosTech Cameroun.`,
    path: '/services/finance',
    schemaType: 'Service',
  });
  return (
    <div>
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <img src="https://images.unsplash.com/photo-1533234944761-2f5337579079?w=1600" alt="Finance" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-6 w-fit bg-brand-orange/20 text-brand-orange">Services</div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">Finance & FinTech</h1>
          <p className="text-xl text-white/90 max-w-3xl">Innovative fintech solutions for mobile money, payment processing, and financial inclusion.</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-6">Driving Financial Inclusion</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Our financial technology solutions empower African businesses and individuals with secure, accessible digital payment and banking services designed for the mobile-first era.
          </p>
          <Link to="/projects/veridia" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg mr-4 bg-brand-orange">
            Explore VERIDIA <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-lg">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
