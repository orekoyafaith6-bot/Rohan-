import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { ACADEMY_INFO, PROGRAMS_DATA } from '../../data/cmsData';
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, Twitter, ArrowUpRight, Heart, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1320] text-gray-300 border-t border-white/10 relative overflow-hidden">
      {/* Subtle court line background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-white"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-[1px] bg-white"></div>
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Logo lightMode={true} size="lg" />
            <div className="text-xs font-mono font-bold text-[#D2E635] uppercase tracking-wider mt-1">
              {ACADEMY_INFO.motto}
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mt-2">
              {ACADEMY_INFO.subMotto}. Founded by Grand Slam Champion & World No. 1 Rohan Bopanna, RBTA provides an elite tennis development ecosystem combining world-class coaching, sports science, and character development at the Padukone–Dravid Centre for Sports Excellence in Bengaluru, India.
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={ACADEMY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#287B54] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="RBTA Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#287B54] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="RBTA YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#287B54] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="RBTA Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#287B54] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="RBTA Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Bhoomi Highlight Badge */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#174D3A]/60 to-[#101D32] border border-[#287B54]/40 flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#D2E635] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white">The Bhoomi Program</span>
                <p className="text-xs text-gray-300 mt-0.5">
                  100% full tennis, schooling and residential scholarships for underprivileged champions.
                </p>
                <Link to="/bhoomi" className="text-xs font-semibold text-[#D2E635] hover:underline inline-flex items-center gap-1 mt-1">
                  Learn about Bhoomi <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Development Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D2E635] mb-4 font-['Sora']">
              Development Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {PROGRAMS_DATA.map((prog) => (
                <li key={prog.id}>
                  <Link
                    to={`/programs/${prog.id}`}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                  >
                    <span className="text-[#287B54] font-mono">{prog.order}.</span>
                    <span>{prog.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/programs"
                  className="text-[#D2E635] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  View Pathway Guide <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D2E635] mb-4 font-['Sora']">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About RBTA & Founder</Link>
              </li>
              <li>
                <Link to="/players" className="hover:text-white transition-colors">Players & Rankings</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">Coaching & Leadership</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition-colors">Facilities at CSE Campus</Link>
              </li>
              <li>
                <Link to="/bhoomi" className="hover:text-white transition-colors">Bhoomi Foundation</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">Academy News & Results</Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">Partners & Sponsors</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors">Admissions & Trials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Directions</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Venue */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D2E635] mb-4 font-['Sora']">
              Campus Location
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#287B54] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Padukone–Dravid Centre for Sports Excellence, Survey No 336, Bettahalasuru, Bengaluru, Karnataka 562157
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#287B54] shrink-0" />
                <a href={`tel:${ACADEMY_INFO.phone}`} className="hover:text-white">{ACADEMY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#287B54] shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.email}`} className="hover:text-white truncate">{ACADEMY_INFO.email}</a>
              </div>
              
              <div className="pt-3">
                <Link
                  to="/admissions"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-xl bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Book Assessment Trial
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Rohan Bopanna Tennis Academy (RBTA). All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-gray-400">
            <Link to="/about" className="hover:text-white">Philosophy</Link>
            <Link to="/contact" className="hover:text-white">Directions</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap & SEO</Link>
            <span className="text-[#D2E635] font-mono text-[11px]">Padukone-Dravid CSE • Bengaluru</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
