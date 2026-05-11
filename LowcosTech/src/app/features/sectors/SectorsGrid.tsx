import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { SECTORS } from '../../../core/constants/sectors';
import { BRAND } from '../../../core/constants';

export function SectorsGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl mb-8 text-center">Sectors of Activity</h1>
        <p className="text-xl text-neutral-600 mb-16 max-w-3xl mx-auto text-center">
          Comprehensive solutions across seven key sectors driving digital transformation .
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector) => (
            <Link key={sector.id} to={sector.href} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{sector.title}</h3>
                  <p className="text-sm text-white/80">{sector.description}</p>
                  <span
                    className="inline-flex items-center gap-2 mt-4 text-sm"
                    style={{ color: BRAND.orange }}
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
