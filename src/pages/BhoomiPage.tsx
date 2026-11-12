import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { BHOOMI_STORIES, ACADEMY_INFO } from '../data/cmsData';
import { 
  Heart, 
  BookOpen, 
  Trophy, 
  Home, 
  Users, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Quote
} from 'lucide-react';
import { CorporateEnquiry } from '../types';

export const BhoomiPage: React.FC = () => {
  const [formData, setFormData] = useState<CorporateEnquiry>({
    contactName: '',
    organization: '',
    email: '',
    phone: '',
    enquiryType: 'Bhoomi CSR Foundation',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.contactName || !formData.email || !formData.phone || !formData.message) {
      setFormError('Please fill out all required fields before submitting.');
      return;
    }

    setFormLoading(true);
    // Prepare for production backend / email delivery
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="Social Impact • CSR Partner"
        title="Bhoomi & The Rohan Bopanna Tennis Development Foundation."
        description="Talent has no boundaries. Opportunity shouldn't either. Founded by Rohan Bopanna, the Bhoomi Foundation scouts talented children from economically disadvantaged and rural backgrounds across India, providing 100% fully funded scholarships covering elite tennis coaching, formal English-medium schooling, and residential life."
        breadcrumbs={[{ label: 'Bhoomi Foundation' }]}
        backgroundImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Scholars Supported', value: '40+' },
          { label: 'Scholarship Coverage', value: '100%' },
          { label: 'Schooling & Residence', value: 'Full Board' },
          { label: 'National AITA Titles', value: '12+' }
        ]}
      />

      {/* Mission & The 100% Scholarship Model */}
      <section className="py-20 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
                The Foundation Vision
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-[#101D32] leading-tight">
                Breaking Economic Barriers to Crown Future Champions.
              </h2>

              <p className="text-base text-[#57655F] leading-relaxed">
                Tennis has traditionally been seen as an elite, expensive sport with immense hurdles for families of modest means. Rohan Bopanna initiated the Bhoomi Program with a fundamental belief: athletic greatness is found everywhere across India, but only thrives when paired with world-class infrastructure.
              </p>

              <p className="text-sm text-[#57655F] leading-relaxed">
                Rather than offering partial coaching discounts, Bhoomi provides an all-encompassing, holistic ecosystem. Children inducted into Bhoomi live on campus at the Padukone-Dravid Centre for Sports Excellence, attend accredited English-medium partner schools, and receive the identical high-performance training, equipment, and sports science that touring pros receive.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-[#EFF2EF] flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-[#287B54] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D32]">100% Tennis Training</h4>
                    <p className="text-xs text-[#57655F] mt-0.5">High performance squads, Wilson racquets, tournament entry fees & travel coaches.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EFF2EF] flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#287B54] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D32]">Accredited Education</h4>
                    <p className="text-xs text-[#57655F] mt-0.5">Formal schooling, language tutoring, academic mentoring, and university planning.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EFF2EF] flex items-start gap-3">
                  <Home className="w-5 h-5 text-[#287B54] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D32]">Residential Boarding</h4>
                    <p className="text-xs text-[#57655F] mt-0.5">Safe campus hostel suites, dedicated wardens, and customized athlete nutrition.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EFF2EF] flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#287B54] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D32]">Holistic Well-Being</h4>
                    <p className="text-xs text-[#57655F] mt-0.5">Physiotherapy, sports psychology, medical healthcare, and character building.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Photographic Portrait with Quote */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Bhoomi Program scholar in action"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D32] via-[#101D32]/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Quote className="w-6 h-6 text-[#D2E635] mb-2" />
                  <p className="text-xs sm:text-sm italic leading-relaxed text-gray-200">
                    "When we give a child a racket, we don't just teach them tennis. We give them dignity, confidence, and a future they never thought was possible."
                  </p>
                  <p className="text-xs font-bold text-[#D2E635] font-['Sora'] mt-3">
                    — Rohan Bopanna, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Identification & Selection Process */}
      <section className="py-20 bg-[#101D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D2E635] font-mono">
              The Selection Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-white mt-1">
              How We Scout & Select Bhoomi Scholars
            </h2>
            <p className="text-sm text-gray-300 mt-3">
              A transparent, merit-first scouting methodology conducted annually across rural and semi-urban schools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10">
              <span className="w-8 h-8 rounded-full bg-[#287B54] text-[#D2E635] flex items-center justify-center text-xs font-black font-['Sora'] mb-4">
                01
              </span>
              <h4 className="text-base font-bold text-white">Grassroots Outreach</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                RBTA scouting teams visit government and rural schools, conducting basic physical literacy tests (sprint, jump, hand-eye coordination).
              </p>
            </div>

            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10">
              <span className="w-8 h-8 rounded-full bg-[#287B54] text-[#D2E635] flex items-center justify-center text-xs font-black font-['Sora'] mb-4">
                02
              </span>
              <h4 className="text-base font-bold text-white">CSE Campus Trials</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Shortlisted children attend a 3-day residential camp at Padukone-Dravid CSE, tested on coachability, motor learning, and stamina.
              </p>
            </div>

            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10">
              <span className="w-8 h-8 rounded-full bg-[#287B54] text-[#D2E635] flex items-center justify-center text-xs font-black font-['Sora'] mb-4">
                03
              </span>
              <h4 className="text-base font-bold text-white">Family & Needs Audit</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Social workers audit socio-economic backgrounds to ensure scholarships strictly reach deserving families without commercial resources.
              </p>
            </div>

            <div className="bg-[#0B1320] p-6 rounded-2xl border border-[#D2E635] relative bg-gradient-to-b from-[#0B1320] to-[#174D3A]/40">
              <span className="w-8 h-8 rounded-full bg-[#D2E635] text-[#101D32] flex items-center justify-center text-xs font-black font-['Sora'] mb-4">
                04
              </span>
              <h4 className="text-base font-bold text-white">Full Induction</h4>
              <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                Selected scholars are welcomed into the academy with complete gear, school enrollment, dormitory housing, and a dedicated mentor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 lg:py-28 bg-[#EFF2EF] text-[#202723]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
              Real Lives Changed
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
              Bhoomi Scholar Spotlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BHOOMI_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.studentName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold font-['Sora']">{story.studentName}</h3>
                      <p className="text-xs text-[#D2E635] font-mono">{story.origin} • {story.yearsAtRBTA}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="inline-block px-2.5 py-0.5 rounded bg-[#174D3A]/10 text-[#174D3A] text-xs font-bold uppercase">
                      {story.currentLevel}
                    </div>
                    <p className="text-xs sm:text-sm text-[#57655F] leading-relaxed">
                      "{story.story}"
                    </p>
                    
                    <div className="pt-3 border-t border-gray-100 space-y-1.5">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">
                        Key Milestones:
                      </div>
                      {story.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-[#101D32]">
                          <Trophy className="w-3.5 h-3.5 text-[#287B54] shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F9F6] border-t border-gray-100 text-center">
                  <span className="text-[11px] text-gray-500 font-medium">Supported by Bhoomi CSR Patrons</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & CSR Partnership Enquiry Form */}
      <section id="support" className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
              Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
              Support a Future Champion
            </h2>
            <p className="text-sm text-[#57655F] mt-2 max-w-xl mx-auto">
              Corporations (CSR Section 135 compliant), sports trusts, and individual patrons can sponsor one or more Bhoomi scholars covering their comprehensive training and schooling.
            </p>
          </div>

          <div className="bg-[#F8F9F6] rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#287B54]/10 text-[#287B54] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-['Sora'] text-[#101D32]">
                  Thank You for Your Support!
                </h3>
                <p className="text-sm text-[#57655F] max-w-md mx-auto">
                  Our Foundation Secretariat will contact you within 24 hours with our complete Bhoomi CSR Prospectus, audited financial sheets, and scholar allocation details.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#101D32] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="e.g. Anand Murthy"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Murthy Foundation / Tata CSR"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="anand@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                    Enquiry Type
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                  >
                    <option value="Bhoomi CSR Foundation">Bhoomi Foundation CSR Partnership</option>
                    <option value="Corporate Sponsorship">Corporate Athlete Sponsorship</option>
                    <option value="Individual Patron">Individual Scholar Patronage</option>
                    <option value="Equipment Donation">Equipment or Gear Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1.5 font-['Sora']">
                    Message / Partnership Scope *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your organization's CSR priorities or how you wish to support Bhoomi scholars..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-xs focus:border-[#287B54] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-[11px] text-gray-500">
                    Compliant with Section 135 of Companies Act, 2013 (CSR Sports Promotion).
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {formLoading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Foundation Enquiry</span>
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
