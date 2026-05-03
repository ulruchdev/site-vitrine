import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { BRAND } from '../../../core/constants';

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600"
        alt="Modern office corridor"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl leading-tight">
          Locow Tech
        </h1>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl mb-8 max-w-3xl leading-relaxed"
          style={{ color: BRAND.orange }}
        >
          Smart Solutions for African Innovation
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
          Leading provider of intelligent solutions, consulting, cybersecurity, technological services,
          eco-construction, finance, and agricultural technology across Cameroon and Africa.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/sectors"
            className="px-8 py-4 text-white rounded-lg transition-all hover:opacity-90 inline-flex items-center gap-2"
            style={{ backgroundColor: BRAND.orange }}
          >
            Discover Our Services <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/30 hover:bg-white/20 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
