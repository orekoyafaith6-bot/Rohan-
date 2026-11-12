import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  Trophy, 
  Sparkles, 
  Dumbbell, 
  Activity, 
  Heart, 
  Maximize2, 
  CheckCircle2, 
  Flame, 
  Target, 
  Zap, 
  ShieldCheck, 
  Award,
  ChevronDown,
  Calendar,
  Clock
} from 'lucide-react';
import { 
  PROGRAMS_DATA, 
  PLAYERS_DATA, 
  COACHES_DATA, 
  FACILITIES_DATA, 
  NEWS_ARTICLES, 
  PARTNERS_DATA, 
  ACADEMY_INFO,
  VERIFIED_STATS,
  TESTIMONIALS_DATA
} from '../data/cmsData';
import { Lightbox } from '../components/common/Lightbox';
import { PlayerModal } from '../components/common/PlayerModal';
import { Player } from '../types';
import { Quote, Star, Users } from 'lucide-react';

// Animated Count-Up component for reading the verified metrics
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, '');

  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1600; // 1.6 seconds smooth count

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [targetNumber]);

  return (
    <span className="tabular-nums font-black">
      {count}{suffix}
    </span>
  );
};

export const HomePage: React.FC = () => {
  // Interactive state
  const [activePathwayIndex, setActivePathwayIndex] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  
  // Lightbox state for facilities
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const facilityGallery = FACILITIES_DATA.map((fac) => ({
    url: fac.image,
    title: fac.title,
    caption: fac.shortDesc
  }));

  const openFacilityLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
    setIsPlayerModalOpen(true);
  };

  // Featured player for Section 5
  const featuredPlayer = PLAYERS_DATA[0]; // Prajwal Dev
  const galleryPlayers = PLAYERS_DATA.slice(1, 5); // Exactly 4 players for the 4-column showcase grid

  // News items for Section 8
  const featuredNews = NEWS_ARTICLES[0];
  const supportingNews = NEWS_ARTICLES.slice(1, 3);

  const activeProgram = PROGRAMS_DATA[activePathwayIndex];

  return (
    <div className="w-full bg-[#F8F9F6] text-[#202723]">
      {/* ================================================== */}
      {/* SECTION 1 — CINEMATIC HERO */}
      {/* ================================================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-start overflow-hidden bg-[#0A1220] text-white">
        {/* Full-width cinematic tennis background with subtle zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=2000&q=85"
            alt="Rohan Bopanna Tennis Academy - Professional tennis player in action"
            className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1] scale-100 animate-in fade-in duration-700"
          />
          {/* Subtle multi-layer dark & court gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320] via-[#0B1320]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-black/40" />
          
          {/* Subtle court lines motif */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute bottom-20 left-10 right-10 h-[1px] bg-white"></div>
            <div className="absolute top-1/2 left-1/4 bottom-0 w-[1px] bg-white"></div>
          </div>
        </div>

        {/* Content Container on the LEFT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D2E635] mb-4">
              ROHAN BOPANNA TENNIS ACADEMY • BENGALURU
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-['Sora'] text-white leading-[1.08] text-balance">
              Shaping the Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#D2E635]">
                of India's Tennis
              </span>{" "}
              Champions.
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-gray-200/95 leading-relaxed font-normal max-w-xl">
              Serve Big. Play Smart. Win Bold. Elite international coaching, sports science, and high-performance tournament pathways at the Padukone-Dravid Centre for Sports Excellence.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/programs"
                className="px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm bg-gradient-to-r from-[#287B54] to-[#1E6041] hover:from-[#349E6D] hover:to-[#287B54] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 border border-[#D2E635]/40 hover:scale-[1.02]"
              >
                <span>Explore Our Programs</span>
                <ChevronRight className="w-4 h-4 text-[#D2E635]" />
              </Link>
              <Link
                to="/admissions"
                className="px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Join RBTA</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Integrated Hero Stats Bar - Active Rolling Count */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {VERIFIED_STATS.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] backdrop-blur-md border border-white/10 hover:border-[#D2E635]/60 transition-all duration-300 group shadow-lg"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Sora'] text-[#D2E635] tracking-tight drop-shadow-sm group-hover:scale-105 transition-transform origin-left">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs uppercase font-extrabold tracking-wider text-white mt-1.5 font-['Sora']">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-gray-300/80 mt-0.5 leading-snug line-clamp-1">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2 — ABOUT RBTA (Editorial Split-Screen) */}
      {/* ================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8F9F6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Tennis Training Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-h-[600px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1200&q=80"
                  alt="Rohan Bopanna coaching an elite tennis player on court"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                  <div className="text-[#D2E635] text-xs font-mono uppercase tracking-wider font-bold">
                    The Padukone-Dravid CSE Base
                  </div>
                  <div className="text-sm font-semibold mt-1">
                    10+ Championship Courts • Biomechanics Lab • Full Residential Campus
                  </div>
                </div>
              </div>

              {/* Decorative Tennis Ball Accent Badge */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center justify-center w-24 h-24 rounded-2xl bg-[#174D3A] text-white shadow-xl border-2 border-[#D2E635] p-3 text-center">
                <div>
                  <div className="text-xl font-black font-['Sora'] text-[#D2E635]">100%</div>
                  <div className="text-[9px] uppercase tracking-wider font-semibold">Athlete Centric</div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#287B54]">
                <span className="w-8 h-[2px] bg-[#287B54]"></span>
                <span>Our Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-[#101D32] leading-tight">
                More Than a Tennis Academy.
              </h2>

              <p className="text-base sm:text-lg text-[#57655F] leading-relaxed">
                Founded by professional tennis player Rohan Bopanna, RBTA combines expert coaching, sports science, physical conditioning and competitive exposure to develop complete tennis players.
              </p>

              {/* Three Expressive Pillars (Not generic cards) */}
              <div className="space-y-5 pt-4">
                <div className="group pl-5 border-l-4 border-[#287B54] hover:border-[#D2E635] transition-all">
                  <h3 className="text-xl sm:text-2xl font-black font-['Sora'] tracking-tight text-[#101D32] group-hover:text-[#287B54] transition-colors">
                    FITNESS FIRST.
                  </h3>
                  <p className="text-sm text-[#57655F] mt-1 leading-relaxed">
                    Physical conditioning is the engine of modern tennis. We build relentless cardiovascular endurance, explosive lateral recovery, and joint durability so athletes remain powerful deep into three-set battles.
                  </p>
                </div>

                <div className="group pl-5 border-l-4 border-[#174D3A] hover:border-[#D2E635] transition-all">
                  <h3 className="text-xl sm:text-2xl font-black font-['Sora'] tracking-tight text-[#101D32] group-hover:text-[#174D3A] transition-colors">
                    RIGHT BASICS.
                  </h3>
                  <p className="text-sm text-[#57655F] mt-1 leading-relaxed">
                    Clean kinetic biomechanics, balanced contact points, and disciplined footwork. We teach sound fundamentals that never break down under national and international tournament pressure.
                  </p>
                </div>

                <div className="group pl-5 border-l-4 border-[#101D32] hover:border-[#D2E635] transition-all">
                  <h3 className="text-xl sm:text-2xl font-black font-['Sora'] tracking-tight text-[#101D32] group-hover:text-[#287B54] transition-colors">
                    PLAY SMART.
                  </h3>
                  <p className="text-sm text-[#57655F] mt-1 leading-relaxed">
                    Tennis is physical chess. Guided by Rohan Bopanna’s tour-proven doubles and singles intellect, players develop tactical problem-solving, situational composure, and acute court geometry awareness.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#101D32] hover:bg-[#174D3A] text-white transition-all shadow-md hover:shadow-lg"
                >
                  <span>Discover RBTA</span>
                  <ArrowRight className="w-4 h-4 text-[#D2E635]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 3 — PLAYER DEVELOPMENT PATHWAY (Horizontal Progressive) */}
      {/* ================================================== */}
      <section className="py-20 lg:py-28 bg-[#101D32] text-white relative overflow-hidden">
        {/* Subtle background textures */}
        <div className="court-grid-pattern absolute inset-0 opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2E635] inline-block mb-2 font-mono">
                From Grassroots to ATP/WTA Tour
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-white">
                Every Champion Starts Somewhere.
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-gray-300 max-w-md">
              Our 7-stage pathway provides age-appropriate, science-backed progression, ensuring seamless technical and physical evolution at each developmental milestone.
            </p>
          </div>

          {/* Interactive Horizontal Pathway Timeline Tabs */}
          <div className="relative mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center min-w-[750px] justify-between relative">
              {/* Connecting line */}
              <div className="absolute top-6 left-6 right-6 h-[2px] bg-white/20 z-0" />
              
              {PROGRAMS_DATA.map((prog, idx) => {
                const isActive = activePathwayIndex === idx;
                return (
                  <button
                    key={prog.id}
                    onClick={() => setActivePathwayIndex(idx)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm font-['Sora'] transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#D2E635] text-[#101D32] scale-110 shadow-lg ring-4 ring-[#287B54]' 
                        : 'bg-[#174D3A] text-white hover:bg-[#287B54] border border-white/20'
                    }`}>
                      {prog.order}
                    </div>

                    {/* Step label */}
                    <span className={`mt-3 text-xs font-bold uppercase tracking-wider text-center transition-colors max-w-[90px] ${
                      isActive ? 'text-[#D2E635]' : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {prog.name.replace(' Program', '').replace(' Pathway', '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pathway Detail Feature Panel */}
          <div className="bg-[#0B1320] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Photo & Spec */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <img
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-[#0B1320]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B1320]" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#287B54] text-[#D2E635]">
                    Stage {activeProgram.order} • {activeProgram.level}
                  </span>
                  <div className="text-xl font-bold font-['Sora'] text-white mt-2">
                    {activeProgram.ageGroup}
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#D2E635] font-mono font-bold">
                    {activeProgram.ballType}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-white mt-1">
                    {activeProgram.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-300 italic mt-1">
                    "{activeProgram.tagline}"
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    {activeProgram.fullDesc}
                  </p>

                  {/* Program Key Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">Court Size</div>
                      <div className="text-xs font-semibold text-white mt-0.5 truncate">{activeProgram.courtSize}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">Coach Ratio</div>
                      <div className="text-xs font-semibold text-white mt-0.5">{activeProgram.coachRatio}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 col-span-2 sm:col-span-1">
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider">Weekly Training</div>
                      <div className="text-xs font-semibold text-[#D2E635] mt-0.5">{activeProgram.weeklyCommitment}</div>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="mt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#D2E635] mb-2 font-['Sora']">
                      Key Training Objectives:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                      {activeProgram.objectives.slice(0, 4).map((obj, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#287B54] shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom actions */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    Next Intake: <span className="text-white font-semibold">Batches enrolling now</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link
                      to={`/programs/${activeProgram.id}`}
                      className="flex-1 sm:flex-initial text-center px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Program Details
                    </Link>
                    <Link
                      to="/admissions"
                      className="flex-1 sm:flex-initial text-center px-5 py-2.5 rounded-lg bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Enquire Now</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D2E635]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 4 — THE RBTA ADVANTAGE (Asymmetrical Layout) */}
      {/* ================================================== */}
      <section className="py-20 lg:py-28 bg-[#EFF2EF] text-[#202723]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#287B54] inline-block mb-2 font-mono">
              The 360-Degree Performance Model
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-[#101D32]">
              Developing the Complete Athlete.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#57655F]">
              Elite tennis today is won through multi-disciplinary science. At RBTA, our athletes do not just hit tennis balls—they build an indestructible athletic foundation across 8 core dimensions.
            </p>
          </div>

          {/* Asymmetrical composition: 1 prominent action photo + 8 distinctive capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Prominent Athlete Training Photo with editorial stats */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-gray-300 min-h-[420px] lg:min-h-[640px]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                alt="RBTA athletes during high performance strength & conditioning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32] via-[#101D32]/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#287B54] text-[#D2E635] text-xs font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5" /> Biomechanics & S&C
                </div>
                <h3 className="text-2xl font-bold font-['Sora']">
                  Integrated with CSE Sports Science
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Every player's kinetic chain is screened to eliminate injury risks and maximize racquet-head velocity.
                </p>
              </div>
            </div>

            {/* Right: Asymmetrical capability blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Capability 1 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#174D3A]/10 text-[#174D3A] flex items-center justify-center mb-3">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Sora'] text-[#101D32]">
                  Professional Tennis Coaching
                </h4>
                <p className="text-xs sm:text-sm text-[#57655F] mt-1.5 leading-relaxed">
                  Led by Rohan Bopanna, Scott Davidoff, and Balachandran Manikkath. Periodized tactical training focused on weapon development and tour patterns.
                </p>
              </div>

              {/* Capability 2 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#287B54]/10 text-[#287B54] flex items-center justify-center mb-3">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Sora'] text-[#101D32]">
                  Strength & Conditioning
                </h4>
                <p className="text-xs sm:text-sm text-[#57655F] mt-1.5 leading-relaxed">
                  Tennis-specific rotational power, kinetic chain acceleration, and deceleration mechanics built in CSE's 20,000 sq ft performance arena.
                </p>
              </div>

              {/* Capability 3 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#101D32]/10 text-[#101D32] flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Sora'] text-[#101D32]">
                  Sports Science & Biomechanics
                </h4>
                <p className="text-xs sm:text-sm text-[#57655F] mt-1.5 leading-relaxed">
                  High-speed motion capture, force plates, and VO2 Max cardiopulmonary testing in partnership with the Abhinav Bindra Targeting Performance center.
                </p>
              </div>

              {/* Capability 4 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-teal-800/10 text-teal-800 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Sora'] text-[#101D32]">
                  Physiotherapy & Recovery
                </h4>
                <p className="text-xs sm:text-sm text-[#57655F] mt-1.5 leading-relaxed">
                  Hot and cold contrast plunge pools, NormaTec pneumatic compression, sports massage, and daily joint prehab overseen by tour physios.
                </p>
              </div>

              {/* Capability 5 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 text-amber-700 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Sora'] text-[#101D32]">
                  Sports Psychology & Composure
                </h4>
                <p className="text-xs sm:text-sm text-[#57655F] mt-1.5 leading-relaxed">
                  Pressure-state inoculation, emotional resets between points, breathwork protocols, and match visualization methods.
                </p>
              </div>

              {/* Capability 6 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-700/10 text-emerald-700 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Sora'] text-[#101D32]">
                  Athlete Nutrition Plans
                </h4>
                <p className="text-xs sm:text-sm text-[#57655F] mt-1.5 leading-relaxed">
                  Tailored caloric and macro profiles, hydration indexing, match-day fueling strategies, and healthy dining at the CSE cafeteria.
                </p>
              </div>

              {/* Capability 7 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-indigo-700/10 text-indigo-700 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Sora'] text-[#101D32]">
                  Competitive Exposure
                </h4>
                <p className="text-xs sm:text-sm text-[#57655F] mt-1.5 leading-relaxed">
                  On-site AITA tournaments at CSE, structured ITF Junior travel schedules, and coaching support at major national championships.
                </p>
              </div>

              {/* Capability 8 */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#287B54]/10 text-[#287B54] flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold font-['Sora'] text-[#101D32]">
                  Performance Technology
                </h4>
                <p className="text-xs sm:text-sm text-[#57655F] mt-1.5 leading-relaxed">
                  Radar telemetry for serve speed, high-frame-rate stroke analysis, match charting metrics, and digital player logs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 5 — PLAYERS AND ACHIEVEMENTS */}
      {/* ================================================== */}
      <section className="py-20 lg:py-28 bg-[#101D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2E635] inline-block mb-2 font-mono">
                Verified Rankings & Tournament Accolades
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-white">
                Driven by Ambition. Defined by Performance.
              </h2>
            </div>
            <Link
              to="/players"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D2E635] hover:underline"
            >
              <span>Meet All Our Players</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Player Composition */}
          <div className="bg-[#0B1320] rounded-2xl border border-white/10 overflow-hidden mb-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full">
                <img
                  src={featuredPlayer.image}
                  alt={featuredPlayer.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B1320]" />
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#287B54] text-[#D2E635]">
                      Featured Athlete • {featuredPlayer.category}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      Rank: {featuredPlayer.currentRanking}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-white mt-3">
                    {featuredPlayer.name}
                  </h3>
                  <p className="text-xs text-[#D2E635] font-mono mt-0.5">
                    {featuredPlayer.hometown} • {featuredPlayer.plays}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    {featuredPlayer.bio}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-5 space-y-2">
                    {featuredPlayer.achievements.slice(0, 3).map((ach, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                        <Trophy className="w-4 h-4 text-[#D2E635] shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => handlePlayerClick(featuredPlayer)}
                    className="px-5 py-2.5 rounded-lg bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View Full Career Stats</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D2E635]" />
                  </button>
                  <span className="text-xs text-gray-400 font-mono">
                    Career High: {featuredPlayer.careerHigh}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Player Showcase Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryPlayers.map((player) => (
              <div
                key={player.id}
                onClick={() => handlePlayerClick(player)}
                className="group relative bg-[#0B1320] rounded-xl border border-white/10 overflow-hidden cursor-pointer hover:border-[#D2E635]/50 transition-all duration-300 shadow-lg flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-[#D2E635] border border-white/10">
                      {player.category}
                    </span>
                  </div>

                  {player.bhoomiScholar && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-600 text-white">
                        Bhoomi
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-base font-bold font-['Sora'] text-white group-hover:text-[#D2E635] transition-colors">
                      {player.name}
                    </h4>
                    <p className="text-[11px] text-gray-300 font-mono">
                      {player.currentRanking}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#0B1320] border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                  <span>Age {player.age}</span>
                  <span className="text-[#D2E635] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Profile <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/players"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <span>Explore All Academy Players & Rankings</span>
              <ArrowRight className="w-4 h-4 text-[#D2E635]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 6 — BHOOMI FOUNDATION (Distinct, Emotional Styling) */}
      {/* ================================================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#174D3A] via-[#0E3326] to-[#101D32] text-white relative overflow-hidden">
        {/* Warm glow circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#287B54]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D2E635]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D2E635]/40 text-[#D2E635] text-xs font-bold uppercase tracking-widest">
                <Heart className="w-3.5 h-3.5 fill-[#D2E635]" />
                <span>The Bhoomi Program • Social Impact</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-white leading-tight">
                Talent Has No Boundaries. <br />
                <span className="text-[#D2E635]">Opportunity Shouldn't Either.</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
                Through the Bhoomi Program, talented children from underprivileged backgrounds receive opportunities to develop their tennis abilities while continuing their education and receiving residential support.
              </p>

              {/* 6 Key Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3">
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-[#D2E635] font-bold text-sm font-['Sora']">100% Tennis Scholarships</div>
                  <div className="text-xs text-gray-300 mt-1">Full coaching fees & tournament equipment covered</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-[#D2E635] font-bold text-sm font-['Sora']">Formal Education</div>
                  <div className="text-xs text-gray-300 mt-1">Accredited English-medium schooling & private tutoring</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-[#D2E635] font-bold text-sm font-['Sora']">Residential Support</div>
                  <div className="text-xs text-gray-300 mt-1">Safe on-campus housing, wardens & athlete nutrition</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-[#D2E635] font-bold text-sm font-['Sora']">Talent Scouting</div>
                  <div className="text-xs text-gray-300 mt-1">Outreach across rural schools in Karnataka & beyond</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-[#D2E635] font-bold text-sm font-['Sora']">Tournament Travel</div>
                  <div className="text-xs text-gray-300 mt-1">All AITA national tour expenses funded</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="text-[#D2E635] font-bold text-sm font-['Sora']">Medical & Physio</div>
                  <div className="text-xs text-gray-300 mt-1">Full access to CSE sports recovery & wellness</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  to="/bhoomi"
                  className="px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#D2E635] text-[#101D32] hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Discover Bhoomi</span>
                  <ChevronRight className="w-4 h-4 text-[#101D32]" />
                </Link>
                <Link
                  to="/bhoomi#support"
                  className="px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Support the Foundation</span>
                  <Heart className="w-4 h-4 text-[#D2E635]" />
                </Link>
              </div>
            </div>

            {/* Right: Authentic Photograph & Impact Quote */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
                  alt="Bhoomi Foundation scholar athlete at RBTA"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <p className="text-sm italic text-gray-200">
                    "Bhoomi didn’t just teach me how to serve; it gave me an education, a safe home, and the belief that I can play for India."
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#D2E635] font-['Sora']">Kavya M., Age 14</span>
                    <span className="text-gray-300 font-mono">Ranked #14 India U14</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 7 — FACILITIES AND TECHNOLOGY (Asymmetrical Gallery + Lightbox) */}
      {/* ================================================== */}
      <section className="py-20 lg:py-28 bg-[#F8F9F6] text-[#202723]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#287B54] inline-block mb-2 font-mono">
                Padukone–Dravid Centre for Sports Excellence • Bengaluru
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-[#101D32]">
                Where Preparation Meets Performance.
              </h2>
            </div>
            <Link
              to="/facilities"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#287B54] hover:underline"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetrical Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
            {/* Item 1: Large Main Court */}
            <div 
              onClick={() => openFacilityLightbox(0)}
              className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
            >
              <img
                src={FACILITIES_DATA[0].image}
                alt={FACILITIES_DATA[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#287B54] text-[#D2E635]">
                  Courts Complex
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Sora'] mt-1">
                  {FACILITIES_DATA[0].title}
                </h3>
                <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                  {FACILITIES_DATA[0].shortDesc}
                </p>
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Item 2: Covered Training Arena */}
            <div 
              onClick={() => openFacilityLightbox(1)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
            >
              <img
                src={FACILITIES_DATA[1].image}
                alt={FACILITIES_DATA[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold font-['Sora']">Covered Indoor Arena</h4>
                <p className="text-[11px] text-gray-300">All-weather monsoon training</p>
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Item 3: Sports Science Lab */}
            <div 
              onClick={() => openFacilityLightbox(2)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
            >
              <img
                src={FACILITIES_DATA[2].image}
                alt={FACILITIES_DATA[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold font-['Sora']">Biomechanics Lab</h4>
                <p className="text-[11px] text-gray-300">3D Motion Capture & Force Plates</p>
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Item 4: Strength & Conditioning */}
            <div 
              onClick={() => openFacilityLightbox(3)}
              className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
            >
              <img
                src={FACILITIES_DATA[3].image}
                alt={FACILITIES_DATA[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold font-['Sora']">20,000 sq ft Gym</h4>
                <p className="text-[11px] text-gray-300">Keiser pneumatics & sprint track</p>
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Item 5: Recovery Suite */}
            <div 
              onClick={() => openFacilityLightbox(4)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md"
            >
              <img
                src={FACILITIES_DATA[4].image}
                alt={FACILITIES_DATA[4].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-sm font-bold font-['Sora']">Hydrotherapy & Cryo</h4>
                <p className="text-[11px] text-gray-300">Contrast cold plunge pools</p>
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 8 — NEWS AND ACHIEVEMENTS (Editorial Magazine) */}
      {/* ================================================== */}
      <section className="py-20 lg:py-28 bg-[#EFF2EF] text-[#202723]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#287B54] inline-block mb-2 font-mono">
                Tournament Updates & Insights
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-[#101D32]">
                Inside the World of RBTA.
              </h2>
            </div>
            <Link
              to="/news"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#287B54] hover:underline"
            >
              <span>View All News & Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Magazine-style layout: 1 Large Featured Article + 2 Smaller Supporting */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 1 Large Featured Article */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md group flex flex-col justify-between">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#101D32] text-[#D2E635]">
                    {featuredNews.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#287B54]" /> {featuredNews.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#287B54]" /> {featuredNews.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-[#101D32] group-hover:text-[#287B54] transition-colors leading-snug">
                    {featuredNews.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#57655F] leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">By {featuredNews.author}</span>
                  <Link
                    to="/news"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#287B54] hover:text-[#174D3A]"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 2 Smaller Supporting Articles */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {supportingNews.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row"
                >
                  <div className="sm:w-2/5 relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 sm:hidden">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#101D32] text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-gray-500 font-mono mb-1.5">
                        <span className="text-[#287B54] font-semibold">{article.category}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                      <h4 className="text-base font-bold font-['Sora'] text-[#101D32] group-hover:text-[#287B54] transition-colors leading-snug">
                        {article.title}
                      </h4>
                      <p className="mt-1 text-xs text-[#57655F] line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400">{article.readTime}</span>
                      <Link
                        to="/news"
                        className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#287B54] hover:underline"
                      >
                        Read <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* TESTIMONIALS SECTION (Endorsed by Champions) */}
      {/* ================================================== */}
      <section className="py-20 lg:py-28 bg-[#101D32] text-white relative overflow-hidden">
        {/* Subtle court lines background motif */}
        <div className="court-grid-pattern absolute inset-0 opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2E635] font-mono">
              Voices of Excellence • Verified Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Sora'] text-white mt-2">
              Endorsed by Grand Slam Champions.
            </h2>
            <p className="mt-3 text-sm text-gray-300">
              Hear what international tennis legends and junior athlete parents say about the training environment at RBTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-[#0B1320] rounded-2xl p-8 border border-white/10 hover:border-[#287B54] transition-all flex flex-col justify-between shadow-xl relative"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#D2E635]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D2E635]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#287B54] opacity-50" />
                  </div>

                  {t.highlight && (
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D2E635] mb-3">
                      "{t.highlight}"
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3.5">
                  {t.avatar && (
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#287B54]"
                    />
                  )}
                  <div>
                    <h4 className="text-sm font-bold font-['Sora'] text-white">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-[#287B54] font-medium leading-tight mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 9 — PARTNERS AND SPONSORS */}
      {/* ================================================== */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#287B54] font-mono">
              Institutional & Equipment Affiliations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Sora'] text-[#101D32] mt-2">
              Together, We Build the Future of Tennis.
            </h2>
            <p className="mt-3 text-sm text-[#57655F]">
              RBTA collaborates with premier sporting institutions, equipment leaders, and governing bodies to deliver elite athlete outcomes.
            </p>
          </div>

          {/* Verified Partner Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-stretch">
            {PARTNERS_DATA.map((partner) => (
              <div
                key={partner.id}
                className="p-6 rounded-xl bg-[#F8F9F6] border border-gray-200 flex flex-col items-center justify-center text-center hover:border-[#287B54] transition-colors group"
              >
                <div className="font-['Sora'] font-black text-sm sm:text-base tracking-wider text-[#101D32] group-hover:text-[#287B54] transition-colors">
                  {partner.logoText}
                </div>
                {partner.logoSubtext && (
                  <div className="text-[9px] uppercase tracking-wider text-gray-500 font-mono mt-1">
                    {partner.logoSubtext}
                  </div>
                )}
                <div className="mt-3 text-[10px] text-gray-400">
                  {partner.category}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#101D32] hover:bg-[#174D3A] text-white transition-colors"
            >
              <span>Become a Partner or CSR Supporter</span>
              <ArrowRight className="w-4 h-4 text-[#D2E635]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 10 — FINAL CTA (Full-width Cinematic Photo) */}
      {/* ================================================== */}
      <section className="relative py-24 sm:py-32 bg-[#101D32] text-white overflow-hidden">
        {/* Full-width cinematic tennis background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=2000&q=80"
            alt="Tennis player on championship court"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320] via-[#101D32]/80 to-[#174D3A]/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#287B54]/60 border border-[#349E6D] text-[#D2E635] text-xs font-bold uppercase tracking-widest mb-6">
            Admissions Open For 2025–26
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Sora'] text-white leading-tight">
            Your Journey to Tennis Excellence Starts Here.
          </h2>

          <p className="mt-6 text-base sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-light">
            Explore our programs and discover the right development pathway for your tennis ambitions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/programs"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm bg-[#D2E635] text-[#101D32] hover:bg-white transition-all shadow-xl hover:scale-105"
            >
              Explore Programs
            </Link>
            <Link
              to="/admissions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-4 h-4 text-[#D2E635]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox for facilities */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        images={facilityGallery}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % facilityGallery.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + facilityGallery.length) % facilityGallery.length)}
      />

      {/* Modal for player career stats */}
      <PlayerModal
        isOpen={isPlayerModalOpen}
        player={selectedPlayer}
        onClose={() => setIsPlayerModalOpen(false)}
      />
    </div>
  );
};
