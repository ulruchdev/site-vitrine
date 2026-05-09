import { Link } from 'react-router';
import { ArrowRight, Shield, Zap, Lock, Eye } from 'lucide-react';

export function Veridia() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/70 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600"
          alt="VERIDIA"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="text-sm tracking-wider text-white/80 mb-4">FINTECH · TRUST LAYER</div>
          <h1 className="text-6xl md:text-7xl text-white mb-6">VERIDIA</h1>
          <p className="text-2xl md:text-3xl mb-8 text-brand-orange">
            Detect manipulation before the user even taps Send.
          </p>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            A hybrid B2B2C + B2C trust layer for mobile-money operators across Africa & MENA.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">The Problem</h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Modern fraud doesn't begin when the user taps Send. It begins when they receive the WhatsApp,
                the phone call, the SMS that engineers their trust. By the time they reach the payment screen,
                the social attack is complete.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                African mobile money operators lose billions annually to social engineering fraud, yet
                traditional fraud detection systems only activate after the transaction is submitted—too
                late to prevent the manipulation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl mb-2 text-brand-rose">$1.1T</div>
                  <div className="text-neutral-600">Mobile money transactions / yr</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 text-brand-rose">$800M+</div>
                  <div className="text-neutral-600">Annual fraud losses</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 text-brand-rose">70%</div>
                  <div className="text-neutral-600">Social engineering attacks</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 text-brand-rose">5sec</div>
                  <div className="text-neutral-600">Average user decision time</div>
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
            <h2 className="text-4xl mb-6">The VERIDIA Solution</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Capture the attack in the digital environment, decide at the edge, archive immutable evidence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 mb-4 text-brand-orange" />
              <h3 className="text-xl mb-3">Edge Detection</h3>
              <p className="text-neutral-600">
                On-device analysis captures social engineering signals before the user submits payment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 mb-4 text-brand-orange" />
              <h3 className="text-xl mb-3">&lt;120ms Decision</h3>
              <p className="text-neutral-600">
                Real-time fraud assessment using 13 calibrated patterns from African incident data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Lock className="w-12 h-12 mb-4 text-brand-orange" />
              <h3 className="text-xl mb-3">Immutable Evidence</h3>
              <p className="text-neutral-600">
                Cryptographically signed evidence bundle retrievable in 30 seconds for disputes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Eye className="w-12 h-12 mb-4 text-brand-orange" />
              <h3 className="text-xl mb-3">User Transparency</h3>
              <p className="text-neutral-600">
                Clear warnings empower users to make informed decisions about suspicious transactions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl mb-6">Technical Architecture</h3>
            <div className="space-y-4 text-neutral-600">
              <p><strong>SDK Integration:</strong> Native Android SDK with offline-first design</p>
              <p><strong>Edge AI:</strong> On-device inference using TensorFlow Lite, calibrated on African fraud patterns</p>
              <p><strong>Append-only Ledger:</strong> Immutable evidence storage with cryptographic signing</p>
              <p><strong>Network Resilience:</strong> Works on 2G fallback with SMS/USSD integration</p>
              <p><strong>Compliance:</strong> GDPR compliant, supports national data protection laws</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Measured Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 text-brand-orange">87%</div>
              <h3 className="text-xl mb-3">Fraud Detection Rate</h3>
              <p className="text-neutral-600">Of social engineering attacks caught before submission</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-brand-orange">$45M</div>
              <h3 className="text-xl mb-3">Prevented Losses</h3>
              <p className="text-neutral-600">In first year of deployment across pilot operators</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-brand-orange">3.2M</div>
              <h3 className="text-xl mb-3">Protected Users</h3>
              <p className="text-neutral-600">Active users protected across Africa & MENA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Protect Your Mobile Money Ecosystem
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Partner with LowCosTech to deploy VERIDIA and safeguard your customers from fraud.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg transition-all hover:opacity-90 bg-brand-orange"
          >
            Request a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
