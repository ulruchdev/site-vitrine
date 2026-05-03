import { BRAND, COMPANY_STATS } from '../../../core/constants';
import { SectionLabel } from '../../components/shared/SectionLabel';

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>About Locow Tech</SectionLabel>
            <h2 className="text-4xl md:text-5xl mb-6">Building the Digital Future of Africa</h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Locow Tech is a Cameroonian technology company specializing in delivering comprehensive
              digital solutions tailored to the unique challenges and opportunities of the African market.
              We combine global best practices with local expertise to drive innovation and growth.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              From intelligent software platforms and cybersecurity to sustainable construction and
              agricultural technology, we provide end-to-end solutions that empower businesses,
              governments, and communities to thrive in the digital age.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {COMPANY_STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-4xl mb-2" style={{ color: BRAND.orange }}>
                    {value}
                  </div>
                  <div className="text-neutral-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1653566031486-dc4ead13a35d?w=800"
              alt="African team in collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div
              className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg opacity-20"
              style={{ backgroundColor: BRAND.orange }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
