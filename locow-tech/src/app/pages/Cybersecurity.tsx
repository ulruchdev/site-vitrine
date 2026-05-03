import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router';
import { ArrowRight, Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from 'lucide-react';

export function Cybersecurity() {
  useSEO({
    title: `Cybersécurité — Protection de Vos Actifs Digitaux`,
    description: `Solutions complètes de cybersécurité pour entreprises africaines : audits, pentest, surveillance 24/7, conformité GDPR. Locow Tech.`,
    path: '/services/cybersecurity',
    schemaType: 'Service',
  });
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Audits & Assessments',
      description: 'Comprehensive security audits to identify vulnerabilities and strengthen your defenses.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Penetration Testing',
      description: 'Ethical hacking services to test your systems against real-world attack scenarios.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Threat Monitoring',
      description: '24/7 security monitoring and incident response to detect and neutralize threats.',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure Security',
      description: 'Secure your networks, servers, and cloud infrastructure against cyber attacks.',
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Incident Response',
      description: 'Rapid response team to contain, investigate, and recover from security incidents.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Compliance & Governance',
      description: 'Ensure compliance with GDPR, ISO 27001, and African data protection regulations.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1634313946117-25462979f178?w=1600"
          alt="Cybersecurity"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-6 w-fit bg-brand-orange/20 text-brand-orange">
            Services
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-6 max-w-4xl">
            Cybersecurity
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Comprehensive security solutions to protect your data, networks, and digital assets from
            evolving cyber threats. Built for the African context with global security standards.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">
                Protecting African Businesses from Cyber Threats
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                In an increasingly connected world, cybersecurity is not optional—it's essential. Locow Tech
                provides enterprise-grade security solutions designed to protect African organizations from
                the full spectrum of cyber threats, from phishing and ransomware to advanced persistent threats.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Our team of certified security experts combines international best practices with deep
                understanding of the African threat landscape to deliver security solutions that work in
                the real world, even in low-bandwidth, resource-constrained environments.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl mb-2 text-brand-orange">99.9%</div>
                  <div className="text-neutral-600">Threat Detection Rate</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 text-brand-orange">24/7</div>
                  <div className="text-neutral-600">Security Monitoring</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all hover:opacity-90 bg-brand-orange"
              >
                Secure Your Business <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
                alt="Cybersecurity operations"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Our Security Services</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              End-to-end cybersecurity solutions to protect your organization at every layer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-brand-orange/10 text-brand-orange"
                >
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERIDIA Integration */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/10 to-pink-900/10 rounded-2xl p-12 border border-neutral-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs tracking-wider text-neutral-500 mb-4">FEATURED PROJECT</div>
                <h2 className="text-4xl mb-6">VERIDIA Trust Layer</h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Our flagship cybersecurity product, VERIDIA, is a hybrid B2B2C + B2C trust layer for
                  mobile-money operators across Africa & MENA. It captures social-engineering attacks in
                  the digital environment and decides at the edge in under 120ms.
                </p>
                <Link
                  to="/projects/veridia"
                  className="inline-flex items-center gap-2 text-lg text-brand-orange"
                >
                  Learn More About VERIDIA <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl mb-2 text-brand-orange">&lt;120ms</div>
                  <div className="text-sm text-neutral-600">Edge Decision Time</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl mb-2 text-brand-orange">$1.1T</div>
                  <div className="text-sm text-neutral-600">Protected Annually</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl mb-2 text-brand-orange">13</div>
                  <div className="text-sm text-neutral-600">Fraud Patterns</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="text-3xl mb-2 text-brand-orange">30s</div>
                  <div className="text-sm text-neutral-600">Evidence Retrieval</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Don't Wait for a Breach
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Contact our security experts today for a free consultation and vulnerability assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg transition-all hover:opacity-90 bg-brand-orange"
          >
            Get a Security Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
