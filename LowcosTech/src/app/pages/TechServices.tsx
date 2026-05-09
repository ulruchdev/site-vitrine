import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function TechServices() {
  useSEO({
    title: `Services Technologiques — Intégration IT en Afrique`,
    description: `Intégration matérielle et logicielle, gestion IT infogérée pour les entreprises africaines. LowCosTech.`,
    path: '/services/tech-services',
    schemaType: 'Service',
  });
  return (
    <div>
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600" alt="Tech Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-6 w-fit bg-brand-orange/20 text-brand-orange">Services</div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">Technological Services</h1>
          <p className="text-xl text-white/90 max-w-3xl">Hardware and software integration, cloud infrastructure, and managed IT services for modern African businesses.</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-6">Complete IT Infrastructure Solutions</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            From server deployment to cloud migration, we provide comprehensive technology services that keep your business running smoothly and securely.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg bg-brand-orange">
            Explore Services <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
