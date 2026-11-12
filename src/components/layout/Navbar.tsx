import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { Logo } from '../common/Logo';
import { ACADEMY_INFO } from '../../data/cmsData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Players', path: '/players' },
    { name: 'Team', path: '/team' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Bhoomi', path: '/bhoomi', highlight: true },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Unified Fixed Header Container */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Announcement & Quick Contact Strip */}
        <div className="bg-[#070D17] text-gray-300 text-[11px] py-1.5 px-4 border-b border-white/10 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#287B54]/40 text-[#D2E635] font-semibold uppercase tracking-wider text-[10px]">
                <Sparkles className="w-3 h-3 text-[#D2E635]" /> Admissions Open 2025–26
              </span>
              <span className="text-gray-400">Padukone-Dravid Centre for Sports Excellence, Bengaluru</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <a 
                href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=Hello%20RBTA%20Team%2C%20I%20would%20like%20to%20enquire%20about%20tennis%20programs.`}
                target="_blank" 
                rel="noreferrer" 
                className="text-[#D2E635] hover:underline flex items-center gap-1 font-medium"
              >
                <MessageSquare className="w-3 h-3" /> WhatsApp
              </a>
              <span className="text-white/20">|</span>
              <a href={`tel:${ACADEMY_INFO.phone}`} className="hover:text-white flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#287B54]" /> {ACADEMY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B1320]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-2.5' 
            : 'bg-[#0B1320]/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <div className="shrink-0 flex items-center">
                <Logo lightMode={true} />
              </div>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => `
                      px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0
                      ${link.highlight 
                        ? 'text-[#D2E635] hover:bg-[#287B54]/20' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'}
                      ${isActive ? 'text-white bg-[#287B54]/40 font-bold shadow-xs' : ''}
                    `}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Right Action: Apply / Enquire */}
              <div className="hidden sm:flex items-center gap-3 shrink-0">
                <Link
                  to="/admissions"
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#287B54] hover:bg-[#349E6D] text-white shadow-md hover:shadow-lg transition-all duration-300 border border-[#D2E635]/30 hover:border-[#D2E635] whitespace-nowrap shrink-0"
                >
                  <span>Apply / Enquire</span>
                  <ChevronRight className="w-4 h-4 text-[#D2E635] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="flex items-center gap-2 lg:hidden">
                <Link
                  to="/admissions"
                  className="px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-[#287B54] text-white sm:hidden whitespace-nowrap"
                >
                  Apply
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#101D32] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Logo lightMode={true} size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col space-y-1">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `
                    px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-between
                    ${isActive ? 'bg-[#287B54] text-white font-bold' : 'text-gray-200 hover:bg-white/5'}
                  `}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </NavLink>

                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => `
                      px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-between
                      ${link.highlight ? 'text-[#D2E635] bg-[#174D3A]/40' : 'text-gray-200 hover:bg-white/5'}
                      ${isActive ? 'bg-[#287B54] text-white font-bold' : ''}
                    `}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>

              {/* Quick Contact & Admission CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <Link
                  to="/admissions"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#287B54] hover:bg-[#349E6D] text-white shadow-lg"
                >
                  <span>Apply for Assessment Trial</span>
                  <ChevronRight className="w-4 h-4 text-[#D2E635]" />
                </Link>

                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=Hello%20RBTA%20Team%2C%20I%20would%20like%20to%20enquire%20about%20tennis%20programs.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-[#D2E635] bg-[#0B1320] border border-[#287B54]/40 hover:border-[#D2E635]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-6 border-t border-white/10 text-xs text-gray-400">
              <p className="font-semibold text-white">Rohan Bopanna Tennis Academy</p>
              <p className="mt-1 text-[11px] leading-relaxed">Padukone-Dravid Centre for Sports Excellence, Bengaluru</p>
              <p className="mt-2 text-[#D2E635] font-mono">{ACADEMY_INFO.phone}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
