import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
  
  export function EcoConstruction() {
    useSEO({
    title: `Éco-Construction — Bâtiments Durables en Afrique`,
    description: `Solutions de construction écologique et durable adaptées au marché africain. Locow Tech.`,
    path: '/services/eco-construction',
    schemaType: 'Service',
  });
  return (
    <div>
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <img src="https://images.unsplash.com/photo-1495578942200-c5f5d2137def?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Eco Construction" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-6 w-fit" style={{ backgroundColor: 'rgba(240, 162, 106, 0.2)', color: 'rgb(240, 162, 106)' }}>Services</div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">Eco-Construction</h1>
          <p className="text-xl text-white/90 max-w-3xl">Sustainable building solutions combining traditional African materials with modern technology for environmentally responsible construction.</p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-6">Building a Sustainable Future</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
            Our eco-construction services integrate smart building technologies, sustainable materials, and traditional craftsmanship to create environmentally friendly, energy-efficient structures.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg" style={{ backgroundColor: 'rgb(240, 162, 106)' }}>
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
