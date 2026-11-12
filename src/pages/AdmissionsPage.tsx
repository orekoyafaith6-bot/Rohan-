import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { PROGRAMS_DATA, FAQS_DATA, ACADEMY_INFO } from '../data/cmsData';
import { AdmissionEnquiry } from '../types';
import { 
  CheckCircle2, 
  Send, 
  Phone, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const location = useLocation();

  const [formData, setFormData] = useState<AdmissionEnquiry>({
    parentName: '',
    playerName: '',
    email: '',
    phone: '',
    playerAge: '',
    currentLevel: 'Beginner / First Steps',
    interestedProgram: 'Junior Development Program',
    preferredTrainingType: 'Full-Time Academy (Morning & Evening)',
    residentialNeeded: 'No',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Read query params (e.g. ?program=red-ball)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const progParam = params.get('program');
    if (progParam) {
      const matched = PROGRAMS_DATA.find((p) => p.id === progParam);
      if (matched) {
        setFormData((prev) => ({ ...prev, interestedProgram: matched.name }));
      }
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.parentName || !formData.playerName || !formData.email || !formData.phone || !formData.playerAge) {
      setError('Please fill in all mandatory fields (indicated by *).');
      return;
    }

    setLoading(true);
    // Simulate API transmission to academy admissions desk
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 750);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="Admissions 2025–26 • Padukone-Dravid CSE"
        title="Serving Champions, One Game at a Time."
        description="Shaping the future of India's tennis champions. Serve Big. Play Smart. Win Bold. Complete the assessment trial application below to schedule an on-court evaluation at the Padukone-Dravid Centre for Sports Excellence in Bengaluru."
        breadcrumbs={[{ label: 'Admissions & Trials' }]}
        backgroundImage="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Trained Students', value: '300+' },
          { label: 'Years of Excellence', value: '10+' },
          { label: 'Competitions', value: '22' },
          { label: 'Specialized Programs', value: '15+' }
        ]}
      />

      {/* Step-by-Step Admissions Journey */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
              The Enrollment Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
              Four Steps to Enrolling at RBTA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-gray-200">
              <span className="w-8 h-8 rounded-full bg-[#101D32] text-[#D2E635] flex items-center justify-center text-xs font-black font-['Sora'] mb-3">
                1
              </span>
              <h4 className="text-base font-bold text-[#101D32]">Online Application</h4>
              <p className="text-xs text-[#57655F] mt-1.5 leading-relaxed">
                Submit player details, current playing experience, and preferred training dates via the form below.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-gray-200">
              <span className="w-8 h-8 rounded-full bg-[#101D32] text-[#D2E635] flex items-center justify-center text-xs font-black font-['Sora'] mb-3">
                2
              </span>
              <h4 className="text-base font-bold text-[#101D32]">On-Court Assessment</h4>
              <p className="text-xs text-[#57655F] mt-1.5 leading-relaxed">
                90-minute trial at Padukone-Dravid CSE evaluating agility, kinetic mechanics, match temperament, and stamina.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F9F6] border border-gray-200">
              <span className="w-8 h-8 rounded-full bg-[#101D32] text-[#D2E635] flex items-center justify-center text-xs font-black font-['Sora'] mb-3">
                3
              </span>
              <h4 className="text-base font-bold text-[#101D32]">Pathway Formulation</h4>
              <p className="text-xs text-[#57655F] mt-1.5 leading-relaxed">
                Senior coaches design an individualized development plan recommending ideal batch, S&C schedule, and tournament targets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#174D3A] text-white">
              <span className="w-8 h-8 rounded-full bg-[#D2E635] text-[#101D32] flex items-center justify-center text-xs font-black font-['Sora'] mb-3">
                4
              </span>
              <h4 className="text-base font-bold text-white">Official Induction</h4>
              <p className="text-xs text-gray-200 mt-1.5 leading-relaxed">
                Complete registration, receive official RBTA kit & player locker, and begin full training at the academy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form A */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 shadow-md p-8 sm:p-10">
            <div className="mb-8 pb-6 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
                FORM A — ADMISSIONS / TRIAL ASSESSMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
                Player Assessment Application
              </h2>
              <p className="text-xs sm:text-sm text-[#57655F] mt-1">
                All fields marked with an asterisk (<span className="text-red-500">*</span>) are mandatory.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-14 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#287B54]/10 text-[#287B54] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-['Sora'] text-[#101D32]">
                  Application Successfully Received!
                </h3>
                <p className="text-sm text-[#57655F] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#101D32]">{formData.parentName}</span>. Our Admissions Coordinator will contact you on WhatsApp/Phone at <span className="font-semibold text-[#101D32]">{formData.phone}</span> within 24 hours to schedule the trial date for <span className="font-semibold text-[#101D32]">{formData.playerName}</span>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=Hi%20RBTA%20Team%2C%20I%20just%20submitted%20the%20trial%20enquiry%20for%20${encodeURIComponent(formData.playerName)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#287B54] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#D2E635]" />
                    <span>Confirm Trial via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-[#EFF2EF] text-[#101D32] text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Player
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                    {error}
                  </div>
                )}

                {/* Section 1: Contact Details */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
                    1. Applicant & Parent Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                        Parent / Guardian / Applicant Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                        Player Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="playerName"
                        value={formData.playerName}
                        onChange={handleChange}
                        placeholder="e.g. Aryan Sharma"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rajesh@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98860 12345"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Player Profile & Program Interest */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
                    2. Playing Level & Pathway Selection
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                        Player Current Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        min="4"
                        max="35"
                        name="playerAge"
                        value={formData.playerAge}
                        onChange={handleChange}
                        placeholder="e.g. 11"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                        Current Playing Experience
                      </label>
                      <select
                        name="currentLevel"
                        value={formData.currentLevel}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                      >
                        <option value="Beginner / First Steps">Beginner / First Steps (Red/Orange Ball)</option>
                        <option value="Intermediate / Regular Rallies">Intermediate / Regular Rallies (Green Ball)</option>
                        <option value="Junior State / AITA Competitor">Junior State / AITA Competitor</option>
                        <option value="National Ranked / ITF Junior">National Ranked / ITF Junior</option>
                        <option value="Collegiate / Touring Pro">Collegiate / Touring Pro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                        Interested Program
                      </label>
                      <select
                        name="interestedProgram"
                        value={formData.interestedProgram}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                      >
                        {PROGRAMS_DATA.map((prog) => (
                          <option key={prog.id} value={prog.name}>
                            {prog.order}. {prog.name} ({prog.ageGroup})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                        Preferred Training Format
                      </label>
                      <select
                        name="preferredTrainingType"
                        value={formData.preferredTrainingType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                      >
                        <option value="Full-Time Academy (Morning & Evening)">Full-Time Academy (Morning & Evening)</option>
                        <option value="After-School Afternoon Batch">After-School Afternoon Batch</option>
                        <option value="Weekend Intensive Match Squad">Weekend Intensive Match Squad</option>
                        <option value="Short-Term Off-Season Camp (1 to 4 Weeks)">Short-Term Off-Season Camp (1 to 4 Weeks)</option>
                        <option value="1:1 Private Tour Coaching">1:1 Private Tour Coaching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                      Require Campus Residential Boarding?
                    </label>
                    <div className="flex items-center gap-6 mt-1 text-xs">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="residentialNeeded"
                          value="Yes"
                          checked={formData.residentialNeeded === 'Yes'}
                          onChange={handleChange}
                          className="accent-[#287B54]"
                        />
                        <span>Yes (Twin-sharing CSE hostel + athlete dining)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="residentialNeeded"
                          value="No"
                          checked={formData.residentialNeeded === 'No'}
                          onChange={handleChange}
                          className="accent-[#287B54]"
                        />
                        <span>No (Day Scholar / Commuter)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#101D32] mb-1 font-['Sora']">
                      Playing Background / Goals / Additional Info
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share tournament history, current coach, AITA/ITF ranking (if any), or specific goals (e.g., college recruitment, national ranking)..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F8F9F6] border border-gray-300 text-xs focus:border-[#287B54] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Consent & Privacy Notice */}
                <div className="p-3.5 bg-[#EFF2EF] rounded-xl text-[11px] text-[#57655F] leading-relaxed">
                  By submitting this form, you consent to RBTA contacting you via WhatsApp, email, or telephone for assessment scheduling. We adhere to strict data privacy and do not share information with commercial third parties.
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#287B54] hover:bg-[#349E6D] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Processing Application...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D2E635]" />
                        <span>Book On-Court Trial Assessment</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Fast Contact & Location Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* WhatsApp Direct Connect */}
            <div className="bg-[#174D3A] text-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-[#D2E635]" />
                <h3 className="text-lg font-bold font-['Sora']">Need Immediate Assistance?</h3>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                Chat directly with our admissions coordinator on WhatsApp for instant answers regarding batch schedules and court availability.
              </p>
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=Hello%20RBTA%20Admissions%2C%20I%20have%20an%20urgent%20enquiry%20regarding%20tennis%20trials.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#D2E635] hover:bg-white text-[#101D32] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp ({ACADEMY_INFO.phone})</span>
              </a>
            </div>

            {/* Trial Checklist Box */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 text-xs">
              <h4 className="font-bold text-[#101D32] uppercase tracking-wider font-['Sora']">
                What to Bring to the Trial
              </h4>
              <ul className="space-y-2 text-[#57655F]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54] shrink-0" />
                  <span>Non-marking court shoes (clay or hard court)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54] shrink-0" />
                  <span>Current tennis racket (spares provided if needed)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54] shrink-0" />
                  <span>Athletic training apparel & water bottle</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54] shrink-0" />
                  <span>Tournament match records (for ranked juniors)</span>
                </li>
              </ul>
            </div>

            {/* Address snippet */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#287B54] shrink-0 mt-0.5" />
                <span className="text-[#57655F] leading-relaxed">
                  Padukone–Dravid CSE, Survey No 336, Bettahalasuru, Bengaluru 562157
                </span>
              </div>
              <div className="pt-2 text-[11px] text-[#287B54] font-medium">
                15 minutes from Bengaluru Kempegowda Airport (BLR)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
              Admissions & Academy FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-[#F8F9F6] hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-sm font-bold text-[#101D32] font-['Sora']">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#287B54] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 text-xs sm:text-sm text-[#57655F] leading-relaxed bg-white border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
