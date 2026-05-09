import { useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useSEO } from '../hooks/useSEO';
import { MapPin, Phone, Mail, Globe, Check, AlertCircle } from 'lucide-react';

// Initialize EmailJS with your public key
// Get your credentials at https://www.emailjs.com
const EMAILJS_SERVICE_ID = 'service_lowcostech'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'template_contact_form'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'; // Replace with your public key

// Initialize EmailJS on component mount
emailjs.init(EMAILJS_PUBLIC_KEY);

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useSEO({
    title: `Contact LowCosTech — Global Service Requests`,
    description: `Contact LowCosTech for global digital projects. Email contactus@lowcostech.com or dotf@lowcostech.com.`,
    path: '/contact',
    schemaType: 'ContactPage',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const templateParams = {
        to_email: 'contactus@lowcostech.com,dotf@lowcostech.com',
        from_name: name,
        from_email: email,
        phone: phone,
        service: service || 'General Contact',
        message: message,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setShowSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setService('');
        setMessage('');

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setShowError(true);
      setErrorMessage('Failed to send message. Please try again later.');
      
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <p className="text-neutral-600">contactus@lowcostech.com</p>
                    <p className="text-neutral-600">dotf@lowcostech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-brand-orange">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Website</h3>
                    <p className="text-neutral-600">www.lowcostech.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6">Send us a message</h3>
              
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              {showError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-semibold">Submission failed</p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                    placeholder="Your name"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                    placeholder="+237 XXX XXX XXX"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Service Interested In</label>
                  <select
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    <option value="Digital Applications">Digital Applications</option>
                    <option value="Consulting & Support">Consulting & Support</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Technological Services">Technological Services</option>
                    <option value="Eco-Construction">Eco-Construction</option>
                    <option value="Finance">Finance</option>
                    <option value="AI Powered Agriculture">AI Powered Agriculture</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
                    placeholder="Tell us about your project..."
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 text-white rounded-lg cursor-pointer transition-all font-medium ${
                    isSubmitting
                      ? 'bg-neutral-400 cursor-not-allowed opacity-75'
                      : 'bg-brand-orange hover:opacity-90 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
