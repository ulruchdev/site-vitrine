import { useSEO } from '../hooks/useSEO';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export function Contact() {
  useSEO({
    title: `Contactez Locow Tech — Yaoundé, Cameroun`,
    description: `Contactez Locow Tech à Yaoundé pour vos projets digitaux en Afrique. hello@locowtech.cm | +237 XXX XXX XXX`,
    path: '/contact',
    schemaType: 'ContactPage',
  });

  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-5xl mb-6">Get in Touch</h1>
              <p className="text-lg text-neutral-600 mb-8">
                Ready to transform your business? Contact our team today to discuss your project.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-brand-orange">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Address</h3>
                    <p className="text-neutral-600">Yaoundé, Cameroon</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-brand-orange">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Phone</h3>
                    <p className="text-neutral-600">+237 694352740 / +237 677476687</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-brand-orange">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Email</h3>
                    <p className="text-neutral-600">locowtech237@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-brand-orange">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Website</h3>
                    <p className="text-neutral-600">www.locowtech237.cm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-neutral-300 rounded-lg" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-neutral-300 rounded-lg" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-neutral-300 rounded-lg" placeholder="+237 XXX XXX XXX" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg">
                    <option>Select a service</option>
                    <option>Digital Applications</option>
                    <option>Consulting & Support</option>
                    <option>Cybersecurity</option>
                    <option>Technological Services</option>
                    <option>Eco-Construction</option>
                    <option>Finance</option>
                    <option>AgriTech</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-neutral-300 rounded-lg" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 text-white rounded-lg bg-brand-orange">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
