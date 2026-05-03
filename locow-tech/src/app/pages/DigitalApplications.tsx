import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router';
import { ArrowRight, Smartphone, Globe, Database, Cloud, Zap, Shield } from 'lucide-react';

export function DigitalApplications() {
  useSEO({
    title: `Digital Applications — Applications sur Mesure pour lAfrique`,
    description: `Solutions logicielles personnalisées pour entreprises africaines : apps mobiles, web, ERP, SaaS. Locow Tech à Yaoundé, Cameroun.`,
    path: '/services/digital-applications',
    schemaType: 'Service',
  });
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android, built with Flutter, React Native, and native technologies.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Applications',
      description: 'Modern, responsive web applications using React, Vue.js, and other cutting-edge frameworks.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Enterprise Software',
      description: 'Custom enterprise resource planning (ERP), customer relationship management (CRM), and business intelligence solutions.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud-based applications with AWS, Azure, and Google Cloud Platform integration.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Progressive Web Apps',
      description: 'Fast, reliable, and engaging PWAs that work offline and provide app-like experiences.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration between systems and third-party services.',
    },
  ];

  const projects = [
    {
      title: 'E-Government Platform',
      description: 'Digital transformation of government services for citizens across Cameroon.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      impact: '2M+ citizens served',
    },
    {
      title: 'veridia App',
      description: 'A hybrid B2B2C + B2C trust layer for mobile-money operators across Africa & MENA. Captures the social-engineering attack in the digital environment, decides at the edge in under 120ms, and archives a signed, immutable evidence bundle retrievable in 30 seconds.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      impact: '500K+ active users',
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive health records and appointment management system for hospitals.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      impact: '50+ hospitals',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1547860664-b8537ca5f833?w=1600"
          alt="Digital Applications"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-6 w-fit bg-brand-orange/20 text-brand-orange">
            Services
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-6 max-w-4xl">
            Digital Applications
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Custom software solutions tailored for African businesses, from mobile apps to enterprise platforms.
            We build digital products that solve real problems and drive measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">
                Transforming Ideas into Powerful Digital Solutions
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                At Locow Tech, we specialize in designing and developing custom digital applications that
                address the unique needs of African businesses and organizations. Our team of experienced
                developers, designers, and product managers work collaboratively to create software that
                is intuitive, scalable, and built to last.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Whether you need a mobile app to reach your customers, a web platform to manage your
                operations, or an enterprise system to streamline your processes, we have the expertise
                and experience to bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all hover:opacity-90 bg-brand-orange"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800"
                alt="Development process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Our Capabilities</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Comprehensive digital application development services across all platforms and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-brand-orange/10 text-brand-orange"
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Featured Projects</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Real-world applications making a difference across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-neutral-600 mb-4">{project.description}</p>
                  <div className="text-sm font-semibold text-brand-orange">
                    {project.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Build Your Digital Solution?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Let's discuss your project and create a custom application that drives your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg transition-all hover:opacity-90 bg-brand-orange"
          >
            Get Started Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
