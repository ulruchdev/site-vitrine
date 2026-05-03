import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { HOME_SECTORS } from '../../../core/constants/sectors';
import { SectionLabel } from '../../components/shared/SectionLabel';

export function SectorsSection() {
  return (
    <section id="sectors" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Our Expertise</SectionLabel>
          <h2 className="text-4xl md:text-5xl mb-6">Business Sectors</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Comprehensive solutions across seven key sectors, tailored to drive digital transformation
            and sustainable growth in Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_SECTORS.map((sector) => (
            <Link
              key={sector.id}
              to={sector.href}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div
                  className="w-12 h-1 mb-4 transition-all duration-300 group-hover:w-24"
                  style={{ backgroundColor: sector.accentColor }}
                />
                <h3 className="text-2xl mb-2">{sector.title}</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {sector.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="inline-flex items-center gap-2 text-sm"
                    style={{ color: sector.accentColor }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
