import { Link } from 'react-router';
import { ArrowRight, Zap, Battery, CloudRain, TrendingUp } from 'lucide-react';

export function AfGrid() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600"
          alt="AFGRID"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="text-sm tracking-wider text-white/80 mb-4">ENERGY · GRID INTELLIGENCE</div>
          <h1 className="text-6xl md:text-7xl text-white mb-6">AFGRID</h1>
          <p className="text-2xl md:text-3xl mb-8 text-brand-orange">
            The energy nervous system for African distribution.
          </p>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Africa Flexible Grid turns invisible distribution networks into pilotable infrastructure.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">The Challenge</h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Africa's energy infrastructure faces unique challenges: unreliable grid supply, expensive
                diesel generators, fragmented distribution networks, and limited visibility into actual usage patterns.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Telecom towers alone burn $1.1B in diesel annually across Sub-Saharan Africa. Yet most
                operators have no visibility into when outages will occur, how long they'll last, or how
                to optimize their backup systems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl mb-2 text-brand-terracotta">$1.1B</div>
                  <div className="text-neutral-600">Tower diesel / yr (SSA)</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 text-brand-terracotta">6-24h</div>
                  <div className="text-neutral-600">Outage prediction window</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 text-brand-terracotta">40%</div>
                  <div className="text-neutral-600">Diesel cost reduction</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 text-brand-terracotta">18mo</div>
                  <div className="text-neutral-600">GSMA roadmap aligned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">The AFGRID Solution</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Predict outages, orchestrate flex assets, document diesel saved.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CloudRain className="w-12 h-12 mb-4 text-brand-orange" />
              <h3 className="text-xl mb-3">Predictive Intelligence</h3>
              <p className="text-neutral-600">
                LSTM models trained on African grid data predict outages 6-24h ahead.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Battery className="w-12 h-12 mb-4 text-brand-orange" />
              <h3 className="text-xl mb-3">Flex Asset Orchestration</h3>
              <p className="text-neutral-600">
                Coordinate telecom batteries, cold rooms, agri pumps as virtual power plants.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 mb-4 text-brand-orange" />
              <h3 className="text-xl mb-3">Real-time Monitoring</h3>
              <p className="text-neutral-600">
                Field PWA with SMS/USSD fallback for operators in low-connectivity zones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 mb-4 text-brand-orange" />
              <h3 className="text-xl mb-3">Diesel Documentation</h3>
              <p className="text-neutral-600">
                Track every litre not burned for carbon credit monetization.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl mb-6">How It Works</h3>
            <div className="space-y-4 text-neutral-600">
              <p><strong>Mobile Network Backbone:</strong> Uses existing telecom infrastructure for data transmission</p>
              <p><strong>Edge Deployment:</strong> Lightweight sensors and gateways that work offline</p>
              <p><strong>Predictive Analytics:</strong> Machine learning models calibrated on African grid stress patterns</p>
              <p><strong>Demand Response:</strong> Automated load shifting and demand reduction during peak stress</p>
              <p><strong>Carbon Monetization:</strong> Verifiable diesel savings converted to carbon credits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Pilot Deployment Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl mb-4">Telecom Operator, Nigeria</h3>
              <p className="text-neutral-600 mb-6">
                250 tower sites equipped with AFGRID sensors and predictive analytics.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Diesel reduction:</span>
                  <span className="font-semibold text-brand-orange">38%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Cost savings:</span>
                  <span className="font-semibold text-brand-orange">$2.4M/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">CO₂ avoided:</span>
                  <span className="font-semibold text-brand-orange">4,200 tons</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl mb-4">Cold Chain, Kenya</h3>
              <p className="text-neutral-600 mb-6">
                Agricultural cooperative with 50 cold storage facilities using AFGRID.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Load shifting:</span>
                  <span className="font-semibold text-brand-orange">65%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Spoilage reduction:</span>
                  <span className="font-semibold text-brand-orange">22%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Energy costs:</span>
                  <span className="font-semibold text-brand-orange">-$180K/yr</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl mb-4">Distribution Utility, Cameroon</h3>
              <p className="text-neutral-600 mb-6">
                Grid monitoring across 3 urban districts with 15,000 metered customers.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Outage alerts:</span>
                  <span className="font-semibold text-brand-orange">12h avg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Theft detection:</span>
                  <span className="font-semibold text-brand-orange">+45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Revenue recovery:</span>
                  <span className="font-semibold text-brand-orange">$1.2M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Transform Your Energy Infrastructure
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Deploy AFGRID to optimize your energy operations and reduce costs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg transition-all hover:opacity-90 bg-brand-orange"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
