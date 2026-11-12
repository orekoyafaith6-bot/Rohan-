import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { COACHES_DATA } from '../data/cmsData';
import { Coach } from '../types';
import { CoachModal } from '../components/common/CoachModal';
import { 
  Award, 
  CheckCircle2, 
  Quote, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const TeamPage: React.FC = () => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Leadership', 'Technical Coaching', 'Sports Science & Fitness', 'Physiotherapy & Recovery'];

  const filteredCoaches = selectedCategory === 'All'
    ? COACHES_DATA
    : COACHES_DATA.filter((c) => c.category === selectedCategory);

  const handleOpenCoach = (coach: Coach) => {
    setSelectedCoach(coach);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="Coaching Staff & Specialists"
        title="World-Class Minds Guiding the Next Generation."
        description="Our coaching faculty combines Grand Slam championship pedigree, former Indian Davis Cup head coaches, international European specialists, and leading sports science practitioners at the Padukone–Dravid CSE campus."
        breadcrumbs={[{ label: 'Our Team' }]}
        backgroundImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'ATP/WTA Tour Experience', value: '50+ Yrs' },
          { label: 'Grand Slam Finalists Coached', value: '4' },
          { label: 'Davis Cup Coaches', value: '2' },
          { label: 'Specialist Disciplines', value: '6' }
        ]}
      />

      {/* Filter by Category */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 md:top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
            Filter by Department:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#101D32] text-[#D2E635] shadow-xs'
                    : 'bg-[#EFF2EF] text-[#57655F] hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Directory */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoaches.map((coach) => (
            <div
              key={coach.id}
              onClick={() => handleOpenCoach(coach)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#287B54] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#101D32]/90 text-[#D2E635] border border-white/10 backdrop-blur-sm">
                      {coach.category}
                    </span>
                  </div>

                  {coach.isFounder && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#287B54] text-white">
                        Founder
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-xl font-bold font-['Sora'] group-hover:text-[#D2E635] transition-colors">
                      {coach.name}
                    </h3>
                    <p className="text-xs text-gray-300 font-medium">
                      {coach.role}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-4">
                  {coach.quote && (
                    <div className="text-xs italic text-gray-600 line-clamp-2 border-l-2 border-[#287B54] pl-2.5 font-serif">
                      "{coach.quote}"
                    </div>
                  )}

                  <p className="text-xs text-[#57655F] leading-relaxed line-clamp-3">
                    {coach.bio}
                  </p>

                  {/* Credentials highlights */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-mono">
                      Highlights:
                    </div>
                    {coach.credentials.slice(0, 2).map((cred, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#202723]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#287B54] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cred}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specialties tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {coach.specialties.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#EFF2EF] text-[10px] font-medium text-gray-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-4 bg-[#F8F9F6] border-t border-gray-100 flex items-center justify-between text-xs text-[#57655F]">
                <span className="text-[11px] font-mono">{coach.experience}</span>
                <span className="font-bold text-[#287B54] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Full Bio <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trial Assessment Callout */}
      <section className="py-16 bg-[#101D32] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora']">
            Train Under Tour-Caliber Coaches.
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-xl mx-auto">
            Whether your goal is technical mastery, US College tennis placement, or ATP/WTA points, our coaches provide individualized periodization for serious athletes.
          </p>
          <div className="mt-6">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#287B54] hover:bg-[#349E6D] text-white font-bold uppercase tracking-wider text-xs shadow-lg transition-colors"
            >
              <span>Schedule Assessment With Chief Coaches</span>
              <ChevronRight className="w-4 h-4 text-[#D2E635]" />
            </Link>
          </div>
        </div>
      </section>

      <CoachModal
        isOpen={isModalOpen}
        coach={selectedCoach}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
