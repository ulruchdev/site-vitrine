import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../../core/constants/projects';
import { BRAND } from '../../../core/constants';
import { SectionLabel } from '../../components/shared/SectionLabel';

export function FeaturedProjectsSection() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="text-4xl md:text-5xl mb-6">
            Built in Africa, Calibrated on Real Incidents
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.id}
              to={project.href}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs tracking-wider text-neutral-500 mb-2">{project.category}</div>
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-neutral-600 mb-4">{project.tagline}</p>
                <span
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: BRAND.orange }}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
