import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { PROGRAMS_DATA } from '../data/cmsData';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Clock, 
  Users, 
  ShieldCheck,
  Award
} from 'lucide-react';

export const ProgramsPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const levels = ['All', 'Grassroots', 'Foundation', 'Intermediate', 'Advanced', 'Elite', 'Professional'];

  const filteredPrograms = selectedLevel === 'All'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter((p) => p.level === selectedLevel);

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="Programs & Coaching Pathways"
        title="Serve Big. Play Smart. Win Bold."
        description="Tennis excellence crafted here. RBTA’s comprehensive training spectrum spans Beginner (Red, Orange, Green Dot Ball), Intermediate, Jr PRO, High Performance, and Coaching Certification programs at the Padukone-Dravid Centre for Sports Excellence."
        breadcrumbs={[{ label: 'Programs' }]}
        backgroundImage="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Trained Students', value: '300+' },
          { label: 'Years of Excellence', value: '10+' },
          { label: 'Competitions', value: '22' },
          { label: 'Specialized Programs', value: '15+' }
        ]}
      />

      {/* Filter by Developmental Level */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 md:top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
            Filter by Stage Level:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedLevel === lvl
                    ? 'bg-[#101D32] text-[#D2E635] shadow-sm'
                    : 'bg-[#EFF2EF] text-[#57655F] hover:bg-gray-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs List - Rich Editorial Cards */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredPrograms.map((prog, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={prog.id}
              id={prog.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Photo Side */}
                <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-black/20 to-transparent" />
                  
                  {/* Photo Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D2E635] text-[#101D32]">
                      Stage {prog.order}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#101D32]/80 backdrop-blur-sm text-white border border-white/20">
                      {prog.level}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-xl font-bold font-['Sora']">{prog.ageGroup}</div>
                    <div className="text-xs text-[#D2E635] font-mono mt-0.5">{prog.ballType}</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#287B54]">
                      {prog.coachRatio}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
                      {prog.name}
                    </h3>
                    <p className="text-sm font-medium text-[#287B54] italic mt-1">
                      "{prog.tagline}"
                    </p>

                    <p className="mt-4 text-sm text-[#57655F] leading-relaxed">
                      {prog.fullDesc}
                    </p>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
                      <div className="bg-[#F8F9F6] p-3 rounded-xl border border-gray-100">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Court Size</div>
                        <div className="text-xs font-bold text-[#101D32] mt-0.5">{prog.courtSize}</div>
                      </div>
                      <div className="bg-[#F8F9F6] p-3 rounded-xl border border-gray-100">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Weekly Volume</div>
                        <div className="text-xs font-bold text-[#101D32] mt-0.5 truncate">{prog.weeklyCommitment}</div>
                      </div>
                      <div className="bg-[#F8F9F6] p-3 rounded-xl border border-gray-100 col-span-2 sm:col-span-1">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Schedule</div>
                        <div className="text-xs font-bold text-[#287B54] mt-0.5 truncate">{prog.scheduleOverview}</div>
                      </div>
                    </div>

                    {/* Objectives Checklist */}
                    <div className="mt-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#101D32] mb-2 font-['Sora']">
                        Core Training Objectives:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#57655F]">
                        {prog.objectives.slice(0, 4).map((obj, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#287B54] shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-gray-500">
                      Equipment: <span className="font-medium text-gray-700">{prog.equipmentNeeded}</span>
                    </span>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <Link
                        to={`/programs/${prog.id}`}
                        className="flex-1 sm:flex-initial text-center px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#EFF2EF] hover:bg-gray-200 text-[#101D32] transition-colors"
                      >
                        Deep Dive Page
                      </Link>
                      <Link
                        to="/admissions"
                        className="flex-1 sm:flex-initial text-center px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#287B54] hover:bg-[#349E6D] text-white shadow-md transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Enquire</span>
                        <ChevronRight className="w-4 h-4 text-[#D2E635]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Pathway Progression Matrix Table */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
              Comparative Matrix
            </span>
            <h2 className="text-3xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
              Development Pathway At a Glance
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#101D32] text-white font-['Sora'] uppercase tracking-wider text-[11px]">
                  <th className="p-4">Program</th>
                  <th className="p-4">Age Bracket</th>
                  <th className="p-4">Ball Compression</th>
                  <th className="p-4">Court Size</th>
                  <th className="p-4">Weekly Intensity</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {PROGRAMS_DATA.map((p) => (
                  <tr key={p.id} className="hover:bg-[#F8F9F6] transition-colors">
                    <td className="p-4 font-bold text-[#101D32]">
                      <span className="text-[#287B54] font-mono mr-2">{p.order}.</span>
                      {p.name}
                    </td>
                    <td className="p-4 text-[#57655F]">{p.ageGroup}</td>
                    <td className="p-4 text-[#57655F]">{p.ballType}</td>
                    <td className="p-4 text-[#57655F]">{p.courtSize}</td>
                    <td className="p-4 font-semibold text-[#287B54]">{p.weeklyCommitment}</td>
                    <td className="p-4 text-right">
                      <Link
                        to={`/programs/${p.id}`}
                        className="text-xs font-bold text-[#101D32] hover:text-[#287B54] hover:underline"
                      >
                        Explore →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trial Assessment Banner */}
      <section className="py-16 bg-[#101D32] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora']">
            Unsure Which Program Matches Your Child’s Ability?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-xl mx-auto">
            Our coaching directors conduct comprehensive 90-minute trial assessments on court to benchmark biomechanics and pinpoint the ideal pathway.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="px-6 py-3 rounded-xl bg-[#287B54] hover:bg-[#349E6D] text-white font-bold uppercase tracking-wider text-xs shadow-lg transition-colors"
            >
              Book 90-Minute Trial Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
