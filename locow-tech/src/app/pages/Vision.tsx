import { useSEO } from '../hooks/useSEO';
export function Vision() {
  useSEO({
    title: `Notre Vision — Transformation Digitale en Afrique`,
    description: `La vision de Locow Tech : devenir le partenaire technologique le plus fiable dAfrique pour la transformation numérique durable.`,
    path: '/vision',
    schemaType: 'WebPage',
  });

  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl mb-8">Our Vision</h1>
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl">
            To be Africa's most trusted technology partner, driving digital transformation and sustainable
            growth across the continent.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-terracotta">
              <h3 className="text-2xl mb-2 text-brand-terracotta">Innovation</h3>
              <p className="text-neutral-600">
                Pioneering solutions that address unique African challenges with global standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-orange">
              <h3 className="text-2xl mb-2 text-brand-orange">Excellence</h3>
              <p className="text-neutral-600">
                Delivering world-class quality in every project and client interaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-rose">
              <h3 className="text-2xl mb-2 text-brand-rose">Sustainability</h3>
              <p className="text-neutral-600">
                Building solutions that create lasting value for people and the environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-terracotta">
              <h3 className="text-2xl mb-2 text-brand-terracotta">Partnership</h3>
              <p className="text-neutral-600">
                Collaborating with clients to achieve shared success and long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
