import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ACADEMY_INFO } from '../data/cmsData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Plane, 
  Compass, 
  Navigation,
  ExternalLink
} from 'lucide-react';
import { CorporateEnquiry } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<CorporateEnquiry>({
    contactName: '',
    organization: '',
    email: '',
    phone: '',
    enquiryType: 'Facility Rental',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="Connect With RBTA"
        title="Visit Our Campus in Bengaluru."
        description="Located at the prestigious Padukone-Dravid Centre for Sports Excellence, RBTA is conveniently situated just 15 minutes from Kempegowda International Airport, making it accessible for domestic and international players."
        breadcrumbs={[{ label: 'Contact' }]}
        backgroundImage="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Airport Distance', value: '15 Mins' },
          { label: 'Operational Days', value: 'Mon - Sat' },
          { label: 'Campus Courts', value: '10+ Hard' },
          { label: 'Covered Arenas', value: '3 Courts' }
        ]}
      />

      {/* Contact Cards Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#287B54]/10 text-[#287B54] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#101D32] font-['Sora']">
                Campus Location
              </h4>
              <p className="text-xs text-[#57655F] mt-2 leading-relaxed">
                {ACADEMY_INFO.fullAddress}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 text-[11px] font-mono text-[#287B54] font-semibold">
              Near Bettahalasuru Cross
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#174D3A]/10 text-[#174D3A] flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#101D32] font-['Sora']">
                Telephone & WhatsApp
              </h4>
              <p className="text-xs text-[#57655F] mt-2 leading-relaxed">
                Direct Line: <a href={`tel:${ACADEMY_INFO.phone}`} className="font-semibold text-[#101D32] hover:underline">{ACADEMY_INFO.phone}</a>
              </p>
              <p className="text-xs text-[#57655F] mt-1 leading-relaxed">
                WhatsApp: <a href={`https://wa.me/${ACADEMY_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="font-semibold text-[#287B54] hover:underline">{ACADEMY_INFO.whatsappFormatted}</a>
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 text-[11px] font-mono text-gray-500">
              Response time &lt; 2 hrs
            </div>
          </div>

          {/* Card 3: Email Inquiries */}
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#101D32]/10 text-[#101D32] flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#101D32] font-['Sora']">
                Email Desks
              </h4>
              <p className="text-xs text-[#57655F] mt-2 leading-relaxed">
                General: <a href={`mailto:${ACADEMY_INFO.email}`} className="font-medium text-[#101D32] hover:underline truncate block">{ACADEMY_INFO.email}</a>
              </p>
              <p className="text-xs text-[#57655F] mt-1 leading-relaxed">
                Admissions: <a href={`mailto:${ACADEMY_INFO.admissionsEmail}`} className="font-medium text-[#287B54] hover:underline truncate block">{ACADEMY_INFO.admissionsEmail}</a>
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 text-[11px] font-mono text-gray-500">
              Verified Official Desks
            </div>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-700/10 text-amber-700 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#101D32] font-['Sora']">
                Operating Schedule
              </h4>
              <p className="text-xs text-[#57655F] mt-2 leading-relaxed">
                {ACADEMY_INFO.hours}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100 text-[11px] font-mono text-amber-700 font-semibold">
              Sundays: Recovery & Prehab
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Campus Travel Directions */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Map Representation */}
            <div className="lg:col-span-7 bg-[#101D32] rounded-2xl overflow-hidden border border-gray-300 shadow-md relative min-h-[380px] p-8 text-white flex flex-col justify-between">
              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#287B54] text-[#D2E635]">
                  Campus Location Guide
                </span>
                <h3 className="text-2xl font-bold font-['Sora'] mt-3">
                  Padukone–Dravid Centre for Sports Excellence (CSE)
                </h3>
                <p className="text-xs text-gray-300 mt-1 max-w-md">
                  Survey No 336, Bettahalasuru, Jala Hobli, Yelahanka, Bengaluru, Karnataka 562157
                </p>
              </div>

              {/* Graphic Airport Distance Feature */}
              <div className="relative z-10 bg-[#0B1320]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 my-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D2E635] text-[#101D32] flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Kempegowda International Airport (BLR)</h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Just 14.5 km away (~15 minutes by taxi along NH 44 / Bellary Road).
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Padukone-Dravid+Centre+for+Sports+Excellence+Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#D2E635]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Background court grid */}
              <div className="court-grid-pattern absolute inset-0 opacity-15 pointer-events-none" />
            </div>

            {/* Travel Directions Guide */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold font-['Sora'] text-[#101D32]">
                How to Reach RBTA
              </h3>

              <div className="space-y-3 text-xs text-[#57655F]">
                <div className="p-4 rounded-xl bg-[#F8F9F6] border border-gray-200">
                  <span className="font-bold text-[#101D32] block mb-1">From Airport (BLR):</span>
                  Take Bellary Road (NH 44) heading South toward Bengaluru City. Take the exit ramp at Bettahalasuru Cross; turn onto the CSE access road. Total drive time: 15 minutes.
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9F6] border border-gray-200">
                  <span className="font-bold text-[#101D32] block mb-1">From Central Bengaluru (MG Road / Cubbon Park):</span>
                  Head North via Hebbal Flyover onto NH 44 (Airport Expressway). Continue past Yelahanka to Bettahalasuru. Drive time: 35–45 minutes depending on traffic.
                </div>

                <div className="p-4 rounded-xl bg-[#F8F9F6] border border-gray-200">
                  <span className="font-bold text-[#101D32] block mb-1">Visitor Parking:</span>
                  Complimentary secure vehicle parking is available on campus directly outside the tennis pavilion for parents and visitors.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General & Corporate Message Form */}
      <section className="py-20 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
              Send a General Message
            </h2>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#287B54] mx-auto" />
              <h3 className="text-xl font-bold font-['Sora'] text-[#101D32]">Message Delivered</h3>
              <p className="text-xs text-[#57655F]">We will reply to {formData.email} promptly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 bg-[#101D32] text-white text-xs font-bold uppercase rounded-lg"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg">{error}</div>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101D32] uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101D32] uppercase mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101D32] uppercase mb-1">Message *</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we assist you today?..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[#101D32] hover:bg-[#174D3A] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#D2E635]" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
