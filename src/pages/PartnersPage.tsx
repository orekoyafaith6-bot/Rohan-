import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { PARTNERS_DATA } from '../data/cmsData';
import { 
  Building2, 
  Handshake, 
  CheckCircle2, 
  Send, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CorporateEnquiry } from '../types';

export const PartnersPage: React.FC = () => {
  const [formData, setFormData] = useState<CorporateEnquiry>({
    contactName: '',
    organization: '',
    email: '',
    phone: '',
    enquiryType: 'Corporate Sponsorship',
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
    setError('');

    if (!formData.contactName || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all mandatory fields.');
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
        badge="Institutional & Corporate Alliances"
        title="Together, We Build the Future of Tennis."
        description="RBTA partners with industry leaders in sports infrastructure, equipment, sports medicine, and corporate social responsibility to provide athletes with a competitive edge on the world stage."
        breadcrumbs={[{ label: 'Partners' }]}
        backgroundImage="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Campus Venue', value: 'Padukone-Dravid CSE' },
          { label: 'Equipment Partner', value: 'Wilson' },
          { label: 'Apparel & Shoes', value: 'ASICS' },
          { label: 'Governing Bodies', value: 'AITA & KSLTA' }
        ]}
      />

      {/* Verified Partner Profiles */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
            Verified Relationships
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
            Our Official Partners
          </h2>
          <p className="text-sm text-[#57655F] mt-2">
            Each partner brings specialized expertise to ensure our athletes compete at peak international readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-[#287B54]">
                    {partner.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" /> Verified Partner
                  </span>
                </div>

                <div className="text-2xl font-black font-['Sora'] text-[#101D32]">
                  {partner.logoText}
                </div>
                {partner.logoSubtext && (
                  <div className="text-xs font-semibold text-gray-500 font-mono mt-0.5">
                    {partner.logoSubtext}
                  </div>
                )}

                <h3 className="text-base font-bold text-[#101D32] mt-4">
                  {partner.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#57655F] leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#287B54] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Visit Partner Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Partnership Opportunities */}
      <section className="py-20 bg-[#101D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D2E635] font-mono">
              Collaborate With RBTA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-white mt-1">
              Partnership Pathways for Organizations
            </h2>
            <p className="text-sm text-gray-300 mt-2">
              From corporate tennis wellness retreats and branded court naming rights to CSR youth sponsorship, we design mutually impactful partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10">
              <div className="text-[#D2E635] font-black text-2xl font-['Sora']">01</div>
              <h4 className="text-lg font-bold text-white mt-2">Bhoomi CSR Sponsorship</h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Direct your corporate CSR funds towards 100% tennis scholarships for talented rural athletes, compliant with Section 135 of the Indian Companies Act.
              </p>
            </div>

            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10">
              <div className="text-[#D2E635] font-black text-2xl font-['Sora']">02</div>
              <h4 className="text-lg font-bold text-white mt-2">Corporate Executive Clinics</h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Exclusive high-performance leadership retreats and executive tennis clinics led by Rohan Bopanna and technical directors at the CSE campus.
              </p>
            </div>

            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10">
              <div className="text-[#D2E635] font-black text-2xl font-['Sora']">03</div>
              <h4 className="text-lg font-bold text-white mt-2">Tournament & Event Branding</h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Title and associate sponsorship opportunities across sanctioned AITA National Championships and ITF Junior fixtures hosted at RBTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Enquiry Form (Form B) */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
              FORM B — CORPORATE / PARTNERSHIP ENQUIRY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
              Start a Conversation With Our Leadership
            </h2>
            <p className="text-sm text-[#57655F] mt-2 max-w-xl mx-auto">
              Please complete the enquiry form below. Our Director of Partnerships will arrange a private campus tour and discussion.
            </p>
          </div>

          <div className="bg-[#F8F9F6] rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#287B54]/10 text-[#287B54] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-['Sora'] text-[#101D32]">
                  Partnership Enquiry Received
                </h3>
                <p className="text-sm text-[#57655F] max-w-md mx-auto">
                  Thank you for reaching out to Rohan Bopanna Tennis Academy. Our team will contact your office within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#101D32] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Malhotra"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. TechCorp India Pvt Ltd"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@techcorp.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98860 12345"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                    Enquiry Scope
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                  >
                    <option value="Corporate Sponsorship">Corporate Athlete & Academy Sponsorship</option>
                    <option value="Bhoomi CSR Foundation">Bhoomi Foundation CSR Partnership</option>
                    <option value="Facility Rental">Facility Rental / Event Hosting at CSE</option>
                    <option value="Custom Camp">Custom Corporate Executive Camp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                    Message / Partnership Objectives *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your objectives, proposed timeline, or specific sponsorship interests..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-gray-500">
                    We treat all corporate enquiries with strict confidentiality.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#101D32] hover:bg-[#174D3A] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D2E635]" />
                        <span>Send Corporate Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
