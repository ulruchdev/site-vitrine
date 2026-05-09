import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Consulting() {
  useSEO({
    title: `Consulting & Support Technologique en Afrique`,
    description: `Conseil stratégique en transformation digitale et support technologique continu pour les entreprises africaines. LowCosTech.`,
    path: '/services/consulting',
    schemaType: 'Service',
  });
  return (
    <div>
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <img src="https://images.unsplash.com/photo-1758519289200-384c7ef2d163?w=1600" alt="Consulting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-6 w-fit bg-brand-orange/20 text-brand-orange">Services</div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">Consulting & Support</h1>
          <p className="text-xl text-white/90 max-w-3xl">Strategic technology consulting and ongoing support to optimize your digital infrastructure and drive business growth.</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-6">Expert Technology Guidance</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Our consulting services help organizations navigate digital transformation, optimize IT operations, and make strategic technology decisions that align with business objectives.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg bg-brand-orange">
            Schedule Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
