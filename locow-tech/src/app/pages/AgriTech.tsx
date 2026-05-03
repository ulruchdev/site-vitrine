import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router';
import { ArrowRight, Leaf, CloudRain, TrendingUp, Smartphone, MapPin, Users } from 'lucide-react';

export function AgriTech() {
  useSEO({
    title: `AgriTech — Agriculture de Précision pour lAfrique`,
    description: `Technologies agricoles innovantes pour les petits exploitants africains. Agriculture de précision, IoT, drones. Locow Tech.`,
    path: '/services/agritech',
    schemaType: 'Service',
  });
  const solutions = [
    {
      icon: <CloudRain className="w-8 h-8" />,
      title: 'Weather & Climate Intelligence',
      description: 'Hyperlocal weather forecasts and climate predictions to optimize planting and harvesting schedules.',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Crop Management',
      description: 'Satellite imagery and AI-powered crop health monitoring for early detection of pests and diseases.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Market Linkage',
      description: 'Connect farmers directly to buyers and provide real-time market prices for better negotiations.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Extension Services',
      description: 'SMS and voice-based agricultural advice in local languages, accessible on basic phones.',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Precision Agriculture',
      description: 'GPS-guided planting, variable rate fertilization, and precision irrigation systems.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Cooperative Management',
      description: 'Digital tools for farmer cooperatives to manage members, finances, and collective marketing.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=1600"
          alt="Agricultural Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-6 w-fit bg-brand-orange/20 text-brand-orange">
            Services
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-6 max-w-4xl">
            Agricultural Technology
          </h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Precision agriculture solutions for African smallholders. Combining satellite imagery, weather
            prediction, and mobile technology to increase yields and improve farmer livelihoods.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">
                Empowering Farmers with Smart Technology
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Agriculture is the backbone of the African economy, yet many smallholder farmers lack access
                to the information and tools they need to maximize productivity. Locow Tech's AgriTech
                solutions bridge this gap with affordable, accessible technology designed for low-connectivity environments.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Our platform combines satellite imagery, weather data, soil sensors, and mobile technology
                to deliver actionable insights directly to farmers via SMS, voice calls, and simple mobile
                apps that work offline.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl mb-2 text-brand-orange">50K+</div>
                  <div className="text-neutral-600">Farmers Served</div>
                </div>
                <div>
                  <div className="text-4xl mb-2 text-brand-orange">45%</div>
                  <div className="text-neutral-600">Yield Increase</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all hover:opacity-90 bg-brand-orange"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1746014929708-fcb859fd3185?w=800"
                alt="Farmer with crops"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Our AgriTech Solutions</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Comprehensive agricultural technology services designed for the African context.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-brand-orange/10 text-brand-orange"
                >
                  {solution.icon}
                </div>
                <h3 className="text-xl mb-3">{solution.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Real Impact</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Stories from farmers across Africa using our technology to transform their livelihoods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-2xl mb-3">Maize Farmers, Kenya</h3>
              <p className="text-neutral-600 mb-4">
                "The weather alerts helped us avoid planting before heavy rains. Our yields increased by 40% this season."
              </p>
              <div className="text-sm font-semibold text-brand-orange">
                2,500 farmers · 40% yield increase
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-6xl mb-4">🥜</div>
              <h3 className="text-2xl mb-3">Groundnut Cooperative, Senegal</h3>
              <p className="text-neutral-600 mb-4">
                "Market price information gave us better negotiating power. We sold at 25% higher prices."
              </p>
              <div className="text-sm font-semibold text-brand-orange">
                800 farmers · 25% price increase
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-6xl mb-4">🌽</div>
              <h3 className="text-2xl mb-3">Rice Farmers, Cameroon</h3>
              <p className="text-neutral-600 mb-4">
                "Pest detection alerts via SMS saved our entire crop. We caught the infestation early."
              </p>
              <div className="text-sm font-semibold text-brand-orange">
                1,200 farmers · Crop saved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-12 border border-neutral-200 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs tracking-wider text-neutral-500 mb-4">FEATURED PROJECT</div>
                <h2 className="text-4xl mb-6">AgriTech Intelligence Platform</h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Our flagship agricultural platform combines satellite imagery, weather prediction, and
                  soil sensors to deliver actionable insights to farmers via SMS and voice. Working
                  offline-first for low-connectivity regions across 8 African countries.
                </p>
                <Link
                  to="/projects/agritech"
                  className="inline-flex items-center gap-2 text-lg text-brand-orange"
                >
                  Explore the Platform <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1651838677683-f642527059c6?w=800"
                  alt="AgriTech platform"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Transform Your Agricultural Operations
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Join thousands of farmers across Africa using technology to increase yields and improve livelihoods.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-lg transition-all hover:opacity-90 bg-brand-orange"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
