import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function About() {
  useSEO({
    title: `À propos de LowCosTech`,
    description: `Entreprise technologique camerounaise spécialisée dans les solutions digitales pour lAfrique. Découvrez notre histoire, nos valeurs et notre équipe.`,
    path: '/about',
    schemaType: 'AboutPage',
  });

  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl mb-8">About LowCosTech</h1>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                LowCosTech is a leading Cameroonian technology company specializing in intelligent solutions,
                consulting, cybersecurity, technological services, eco-construction, finance, and agricultural
                technology.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Founded with a vision to drive global digital transformation, we combine innovative technology
                with deep expertise to deliver solutions that create lasting impact worldwide.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg bg-brand-orange">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1653565685001-92267a18233a?w=800" alt="Team" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
