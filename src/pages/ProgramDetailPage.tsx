import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { PROGRAMS_DATA } from '../data/cmsData';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Clock, 
  Users, 
  Activity, 
  Sparkles, 
  ShieldCheck,
  Award,
  ChevronLeft
} from 'lucide-react';

export const ProgramDetailPage: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();

  const program = PROGRAMS_DATA.find((p) => p.id === programId);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  // Find index for prev / next navigation
  const currentIndex = PROGRAMS_DATA.findIndex((p) => p.id === program.id);
  const prevProgram = currentIndex > 0 ? PROGRAMS_DATA[currentIndex - 1] : null;
  const nextProgram = currentIndex < PROGRAMS_DATA.length - 1 ? PROGRAMS_DATA[currentIndex + 1] : null;

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge={`Stage ${program.order} • ${program.level}`}
        title={program.name}
        description={program.tagline}
        breadcrumbs={[
          { label: 'Programs', path: '/programs' },
          { label: program.name }
        ]}
        backgroundImage={program.image}
        stats={[
          { label: 'Target Age', value: program.ageGroup },
          { label: 'Coach Ratio', value: program.coachRatio },
          { label: 'Ball Type', value: program.ballType.split(' ')[0] },
          { label: 'Court Dimension', value: program.courtSize.split(' ')[0] }
        ]}
      />

      {/* Program Deep Dive Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Comprehensive Curriculum & Pillars */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview & Philosophy */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#287B54] font-mono">
                Curriculum Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-[#101D32]">
                Philosophy & Training Blueprint
              </h2>
              <p className="text-base text-[#57655F] leading-relaxed">
                {program.fullDesc}
              </p>
              <div className="p-4 rounded-xl bg-[#EFF2EF] border-l-4 border-[#287B54] text-xs sm:text-sm text-[#202723] font-medium">
                Target Level: <span className="font-bold text-[#101D32]">{program.level}</span> • Age Bracket: <span className="font-bold text-[#101D32]">{program.ageGroup}</span>
              </div>
            </div>

            {/* Core Training Objectives */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#287B54]" />
                <h3 className="text-xl sm:text-2xl font-bold font-['Sora'] text-[#101D32]">
                  Training Objectives & Milestones
                </h3>
              </div>
              <p className="text-sm text-[#57655F]">
                By the conclusion of this training block, athletes are systematically measured against these benchmark proficiencies:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.objectives.map((obj, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#F8F9F6] border border-gray-100 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#287B54] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-[#202723] font-medium leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coaching Approach */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#287B54]" />
                <h3 className="text-xl sm:text-2xl font-bold font-['Sora'] text-[#101D32]">
                  Our Pedagogical & Coaching Approach
                </h3>
              </div>
              <ul className="space-y-3">
                {program.coachingApproach.map((app, i) => (
                  <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F9F6] border border-gray-100 text-sm text-[#57655F]">
                    <CheckCircle2 className="w-5 h-5 text-[#287B54] shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Support & Sports Science Integration */}
            <div className="bg-[#101D32] p-8 sm:p-10 rounded-2xl text-white shadow-xl space-y-6">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#D2E635]" />
                <h3 className="text-xl sm:text-2xl font-bold font-['Sora'] text-white">
                  Integrated Sports Science & Performance Support
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                At RBTA, tennis coaching is never isolated from physical durability and recovery:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {program.performanceSupport.map((sup, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[#D2E635] font-bold text-xs uppercase tracking-wider font-mono">Pillar {idx + 1}</div>
                    <div className="text-sm font-semibold text-white mt-1">{sup}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Specifications & Fast Enquiry Card */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            {/* Quick Specs Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-5">
              <h4 className="text-base font-extrabold font-['Sora'] text-[#101D32] uppercase tracking-wider pb-3 border-b border-gray-100">
                Program Specifications
              </h4>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Ball Specification</span>
                  <span className="font-bold text-[#101D32] text-sm">{program.ballType}</span>
                </div>
                <div>
                  <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Court Dimensions</span>
                  <span className="font-bold text-[#101D32] text-sm">{program.courtSize}</span>
                </div>
                <div>
                  <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Coach-to-Player Ratio</span>
                  <span className="font-bold text-[#101D32] text-sm">{program.coachRatio}</span>
                </div>
                <div>
                  <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Weekly Commitment</span>
                  <span className="font-bold text-[#287B54] text-sm">{program.weeklyCommitment}</span>
                </div>
                <div>
                  <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Schedule Overview</span>
                  <span className="font-medium text-[#101D32]">{program.scheduleOverview}</span>
                </div>
                <div>
                  <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Equipment Required</span>
                  <span className="font-medium text-gray-700">{program.equipmentNeeded}</span>
                </div>
              </div>

              {/* Admission Trigger Button */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link
                  to={`/admissions?program=${program.id}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Enquire For This Program</span>
                  <ChevronRight className="w-4 h-4 text-[#D2E635]" />
                </Link>

                <Link
                  to="/facilities"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#EFF2EF] hover:bg-gray-200 text-[#101D32] text-xs font-bold uppercase tracking-wider transition-colors text-center block"
                >
                  View Padukone-Dravid CSE Campus
                </Link>
              </div>
            </div>

            {/* Step navigation */}
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider pt-2">
              {prevProgram ? (
                <Link
                  to={`/programs/${prevProgram.id}`}
                  className="text-[#57655F] hover:text-[#287B54] flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Stage {prevProgram.order}</span>
                </Link>
              ) : <div />}

              {nextProgram ? (
                <Link
                  to={`/programs/${nextProgram.id}`}
                  className="text-[#287B54] hover:underline flex items-center gap-1 ml-auto"
                >
                  <span>Stage {nextProgram.order}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
