import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { 
  Trophy, 
  Target, 
  Award, 
  Compass, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Quote,
  Star
} from 'lucide-react';
import { COACHES_DATA, ACADEMY_INFO, TESTIMONIALS_DATA } from '../data/cmsData';
import { CoachModal } from '../components/common/CoachModal';
import { Coach } from '../types';

export const AboutPage: React.FC = () => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [isCoachModalOpen, setIsCoachModalOpen] = useState(false);

  const founderCoach = COACHES_DATA.find((c) => c.isFounder) || COACHES_DATA[0];
  const seniorLeadership = COACHES_DATA.filter((c) => !c.isFounder);

  const openCoach = (coach: Coach) => {
    setSelectedCoach(coach);
    setIsCoachModalOpen(true);
  };

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="About RBTA • Bengaluru"
        title="Shaping the Future of India's Tennis Champions."
        description="Founded by Grand Slam Champion & World No. 1 Rohan Bopanna, RBTA was created to give Indian tennis players an international-standard training ecosystem on home soil with our guiding philosophy: Serve Big. Play Smart. Win Bold."
        breadcrumbs={[{ label: 'About' }]}
        backgroundImage="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Trained Students', value: '300+' },
          { label: 'Years of Excellence', value: '10+' },
          { label: 'Competitions', value: '22' },
          { label: 'Specialized Programs', value: '15+' }
        ]}
      />

      {/* Founder Spotlight: Rohan Bopanna */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Founder Photographic Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] border-4 border-white">
                <img
                  src={founderCoach.image}
                  alt={founderCoach.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[#D2E635] text-xs font-mono uppercase tracking-wider font-bold">
                    Founder & Director
                  </div>
                  <h3 className="text-2xl font-bold font-['Sora']">{founderCoach.name}</h3>
                  <p className="text-xs text-gray-300 mt-1">
                    Australian Open 2024 Champion • World No. 1
                  </p>
                </div>
              </div>

              {/* Accolade badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col items-center justify-center p-4 bg-[#174D3A] text-white rounded-2xl shadow-xl border-2 border-[#D2E635] text-center max-w-[170px]">
                <Trophy className="w-6 h-6 text-[#D2E635] mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Padma Shri Awardee</span>
                <span className="text-[9px] text-gray-300 mt-0.5">Govt. of India</span>
              </div>
            </div>

            {/* Right: Founder Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#287B54]">
                <span className="w-8 h-[2px] bg-[#287B54]"></span>
                <span>The Founder's Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-[#101D32] leading-tight">
                "Indian Players Deserve a World-Class Base at Home."
              </h2>

              <p className="text-base sm:text-lg text-[#57655F] leading-relaxed">
                For over two decades, Rohan Bopanna has represented India at the highest echelons of professional tennis—competing across 80+ Grand Slam main draws, winning the 2017 French Open and 2024 Australian Open, and reaching ATP World No. 1 at age 43.
              </p>

              <p className="text-sm sm:text-base text-[#57655F] leading-relaxed">
                Having traveled the globe and observed the world's most successful sports academies, Rohan recognized that Indian junior athletes often had to move overseas at great expense to access tour-level coaches, recovery technologies, and sports science. In 2016, he founded RBTA to dismantle that barrier.
              </p>

              {/* Quote box */}
              <div className="p-5 rounded-2xl bg-[#EFF2EF] border-l-4 border-[#287B54] italic text-[#202723] flex items-start gap-4">
                <Quote className="w-7 h-7 text-[#287B54] shrink-0 mt-1" />
                <p className="text-sm sm:text-base leading-relaxed">
                  "{founderCoach.quote}"
                </p>
              </div>

              {/* Founder credentials list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-[#202723]">
                {founderCoach.credentials.slice(0, 4).map((cred, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#287B54] shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openCoach(founderCoach)}
                  className="px-6 py-3 rounded-xl bg-[#101D32] hover:bg-[#174D3A] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
                >
                  <span>View Rohan Bopanna’s Full Career Bio</span>
                  <ArrowRight className="w-4 h-4 text-[#D2E635]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy History & Milestones */}
      <section className="py-20 lg:py-28 bg-[#101D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2E635] font-mono">
              The Evolution of RBTA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-white mt-2">
              From an Ambitious Dream to an International Hub.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10 relative">
              <div className="text-2xl font-black text-[#D2E635] font-['Sora']">2016</div>
              <h4 className="text-base font-bold text-white mt-2">Foundation & Vision</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Rohan Bopanna founds RBTA in Bengaluru with initial development courts, focusing on grassroots coaching and right basics for junior talents.
              </p>
            </div>

            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10 relative">
              <div className="text-2xl font-black text-[#D2E635] font-['Sora']">2018</div>
              <h4 className="text-base font-bold text-white mt-2">Move to Padukone-Dravid CSE</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                RBTA partners with India’s flagship integrated sports complex, expanding to 10+ championship hard courts, covered arenas, and athlete residential suites.
              </p>
            </div>

            <div className="bg-[#0B1320] p-6 rounded-2xl border border-white/10 relative">
              <div className="text-2xl font-black text-[#D2E635] font-['Sora']">2021</div>
              <h4 className="text-base font-bold text-white mt-2">Launch of Bhoomi Program</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Rohan launches the Bhoomi Foundation to provide 100% tennis, academic, and residential scholarships for underprivileged children from rural India.
              </p>
            </div>

            <div className="bg-[#0B1320] p-6 rounded-2xl border border-[#287B54] relative bg-gradient-to-b from-[#0B1320] to-[#174D3A]/40">
              <div className="text-2xl font-black text-[#D2E635] font-['Sora']">2024 & Beyond</div>
              <h4 className="text-base font-bold text-white mt-2">Global Tour Hub</h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                With Scott Davidoff as Technical Director and Rohan as World No. 1, RBTA becomes an international training hub for ATP/WTA pros and ranked juniors worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-[#EFF2EF] text-[#202723]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#287B54]/10 text-[#287B54] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold font-['Sora'] text-[#101D32]">Our Mission</h3>
                <p className="mt-4 text-base text-[#57655F] leading-relaxed">
                  To discover, nurture, and prepare tennis players of all backgrounds to compete at their highest potential through world-class technical coaching, cutting-edge sports science, physical conditioning, and unwavering character integrity.
                </p>
              </div>
              <ul className="mt-6 pt-6 border-t border-gray-100 space-y-2 text-xs text-[#202723]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54]" />
                  <span>Uncompromising scientific training standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54]" />
                  <span>Individualized athlete periodization plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54]" />
                  <span>Social impact through the Bhoomi scholarship program</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#174D3A]/10 text-[#174D3A] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold font-['Sora'] text-[#101D32]">Our Vision</h3>
                <p className="mt-4 text-base text-[#57655F] leading-relaxed">
                  To establish India as a dominant global powerhouse in international tennis by producing Grand Slam contenders, Davis Cup and Billie Jean King Cup representatives, NCAA collegiate scholars, and confident, well-rounded citizens of the world.
                </p>
              </div>
              <ul className="mt-6 pt-6 border-t border-gray-100 space-y-2 text-xs text-[#202723]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54]" />
                  <span>Ranked among Asia’s top tennis development academies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54]" />
                  <span>A seamless bridge from grassroots to pro circuit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54]" />
                  <span>Sustained international recognition for excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Coaching Staff Preview */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#287B54] font-mono">
                World-Class Mentorship
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-[#101D32] mt-2">
                Leadership & Senior Coaching Faculty.
              </h2>
            </div>
            <Link
              to="/team"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#287B54] hover:underline"
            >
              <span>View All Coaches & Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seniorLeadership.slice(0, 3).map((coach) => (
              <div
                key={coach.id}
                onClick={() => openCoach(coach)}
                className="group bg-[#F8F9F6] rounded-2xl overflow-hidden border border-gray-200 cursor-pointer hover:shadow-lg hover:border-[#287B54] transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#101D32] text-[#D2E635]">
                      {coach.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold font-['Sora'] text-[#101D32] group-hover:text-[#287B54] transition-colors">
                      {coach.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#287B54] mt-0.5">
                      {coach.role}
                    </p>
                    <p className="text-xs text-[#57655F] mt-2 line-clamp-3">
                      {coach.bio}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-400">
                    <span>{coach.experience}</span>
                    <span className="text-[#287B54] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View Profile <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Testimonials from Legends & Trainees */}
      <section className="py-20 lg:py-24 bg-[#101D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D2E635] font-mono">
              Endorsements
            </span>
            <h2 className="text-3xl font-extrabold font-['Sora'] text-white mt-1">
              What the Tennis World Says About RBTA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-[#0B1320] p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D2E635] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D2E635]" />
                    ))}
                  </div>
                  {t.highlight && (
                    <div className="text-xs font-mono font-bold text-[#D2E635] mb-2 uppercase tracking-wider">
                      "{t.highlight}"
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  {t.avatar && (
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#287B54]"
                    />
                  )}
                  <div>
                    <h4 className="text-xs font-bold text-white font-['Sora']">{t.author}</h4>
                    <p className="text-[10px] text-[#287B54] font-medium leading-tight">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Admissions CTA banner */}
      <section className="py-16 bg-[#174D3A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora']">
            Experience the RBTA Development Ecosystem.
          </h3>
          <p className="text-sm sm:text-base text-gray-200 mt-3 max-w-xl mx-auto">
            Book an on-court assessment trial with our senior coaches at the Padukone-Dravid Centre for Sports Excellence.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="px-6 py-3 rounded-xl bg-[#D2E635] text-[#101D32] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
            >
              Book Assessment Trial
            </Link>
            <Link
              to="/facilities"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-xs border border-white/20 transition-all"
            >
              Explore Facilities
            </Link>
          </div>
        </div>
      </section>

      <CoachModal
        isOpen={isCoachModalOpen}
        coach={selectedCoach}
        onClose={() => setIsCoachModalOpen(false)}
      />
    </div>
  );
};
