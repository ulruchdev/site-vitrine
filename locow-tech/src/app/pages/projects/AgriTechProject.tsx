import { Link } from 'react-router';
import { ArrowRight, Leaf, Smartphone, CloudRain } from 'lucide-react';

export function AgriTechProject() {
  return (
    <div>
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/70 z-10"></div>
        <img src="https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=1600" alt="AgriTech" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="text-sm tracking-wider text-white/80 mb-4">AGRICULTURE · SMART FARMING</div>
          <h1 className="text-6xl md:text-7xl text-white mb-6">AgriTech Platform</h1>
          <p className="text-2xl md:text-3xl mb-8 text-brand-orange">
            Precision agriculture for African smallholders.
          </p>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Combining satellite imagery, weather prediction, and mobile technology to empower farmers.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-6">Empowering 50,000+ Farmers Across Africa</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl leading-relaxed">
            Our AgriTech platform delivers actionable agricultural insights via SMS, voice, and mobile apps—optimizing
            irrigation, predicting pest outbreaks, and connecting farmers to markets. All working offline-first for
            low-connectivity regions across 8 African countries.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-neutral-50 p-8 rounded-xl">
              <Leaf className="w-16 h-16 mx-auto mb-4 text-brand-orange" />
              <div className="text-4xl mb-2 text-brand-orange">45%</div>
              <p className="text-neutral-600">Average Yield Increase</p>
            </div>
            <div className="text-center bg-neutral-50 p-8 rounded-xl">
              <Smartphone className="w-16 h-16 mx-auto mb-4 text-brand-orange" />
              <div className="text-4xl mb-2 text-brand-orange">50K+</div>
              <p className="text-neutral-600">Farmers Served</p>
            </div>
            <div className="text-center bg-neutral-50 p-8 rounded-xl">
              <CloudRain className="w-16 h-16 mx-auto mb-4 text-brand-orange" />
              <div className="text-4xl mb-2 text-brand-orange">8</div>
              <p className="text-neutral-600">Countries Deployed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Join the Agricultural Revolution</h2>
          <Link to="/services/agritech" className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg bg-brand-orange">
            Learn More <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
