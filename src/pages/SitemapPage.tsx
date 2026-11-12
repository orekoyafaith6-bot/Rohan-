import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/cmsData';

export const SitemapPage: React.FC = () => {
  const redirects = [
    { oldUrl: '/programmes', newUrl: '/programs', status: '301 Permanent Redirect' },
    { oldUrl: '/programmes/red-ball', newUrl: '/programs/red-ball', status: '301 Permanent Redirect' },
    { oldUrl: '/programmes/orange-ball', newUrl: '/programs/orange-ball', status: '301 Permanent Redirect' },
    { oldUrl: '/programmes/green-ball', newUrl: '/programs/green-ball', status: '301 Permanent Redirect' },
    { oldUrl: '/high-performance', newUrl: '/programs/high-performance', status: '301 Permanent Redirect' },
    { oldUrl: '/coaches', newUrl: '/team', status: '301 Permanent Redirect' },
    { oldUrl: '/our-founder', newUrl: '/about', status: '301 Permanent Redirect' },
    { oldUrl: '/bhoomi', newUrl: '/bhoomi', status: 'Canonical Preserved' },
    { oldUrl: '/contact-us', newUrl: '/contact', status: '301 Permanent Redirect' },
    { oldUrl: '/enquiry', newUrl: '/admissions', status: '301 Permanent Redirect' }
  ];

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="Technical Architecture & SEO"
        title="Sitemap & 301 Redirect Mapping"
        description="Preserving organic search rankings and ensuring seamless crawl indexing for the official domain: www.rohanbopannatennisacademy.com"
        breadcrumbs={[{ label: 'Sitemap & SEO' }]}
      />

      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Domain & SEO Configuration Box */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold font-['Sora'] text-[#101D32]">
            Canonical Domain & Structured Data Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 bg-[#EFF2EF] rounded-xl">
              <span className="text-gray-500 block mb-1">Primary Domain</span>
              <span className="font-bold text-[#101D32]">https://www.rohanbopannatennisacademy.com</span>
            </div>
            <div className="p-4 bg-[#EFF2EF] rounded-xl">
              <span className="text-gray-500 block mb-1">Schema.org Entity</span>
              <span className="font-bold text-[#287B54]">SportsClub / TennisAcademy</span>
            </div>
            <div className="p-4 bg-[#EFF2EF] rounded-xl">
              <span className="text-gray-500 block mb-1">Crawl Status</span>
              <span className="font-bold text-emerald-700">Index, Follow, Canonical</span>
            </div>
          </div>
        </div>

        {/* Complete Page Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold font-['Sora'] text-[#101D32] mb-4">
              Core Application Pages
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/ (Homepage — Cinematic Hero, Pathway, Bhoomi, Facilities)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/about (Founder Rohan Bopanna, Mission & Pillars)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/programs (All 7 Development Stages & Pathway Matrix)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/players" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/players (Searchable Roster, Rankings, Career Highs)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/team (Coaching Staff & Specialists)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/facilities (Padukone-Dravid CSE Infrastructure & Lightbox)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/bhoomi" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/bhoomi (Bhoomi Program, CSR Form, Scholar Stories)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/news (Magazine Feed, Tournament Results, Dispatches)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/partners (Institutional Affiliations, Form B)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/admissions (Form A — Assessment Trial Booking, FAQ)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#287B54] font-semibold hover:underline flex items-center justify-between">
                  <span>/contact (Directions, Maps, WhatsApp Hotline)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold font-['Sora'] text-[#101D32] mb-4">
              Individual Program Deep-Dive URLs
            </h3>
            <ul className="space-y-3 text-xs">
              {PROGRAMS_DATA.map((prog) => (
                <li key={prog.id}>
                  <Link
                    to={`/programs/${prog.id}`}
                    className="text-[#287B54] font-semibold hover:underline flex items-center justify-between"
                  >
                    <span>/programs/{prog.id} ({prog.name})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 301 Redirect Mapping Table */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold font-['Sora'] text-[#101D32] mb-2">
            301 Redirect Mapping for Legacy URLs
          </h3>
          <p className="text-xs text-[#57655F] mb-4">
            Preserves Google search ranking authority and backlinks from external sports media during transition to the rebuilt architecture.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#101D32] text-white font-['Sora'] uppercase tracking-wider text-[11px]">
                  <th className="p-3">Legacy URL Pattern</th>
                  <th className="p-3">New Rebuilt Route</th>
                  <th className="p-3">HTTP Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-mono">
                {redirects.map((r, i) => (
                  <tr key={i} className="hover:bg-[#F8F9F6]">
                    <td className="p-3 text-red-700">{r.oldUrl}</td>
                    <td className="p-3 text-[#287B54] font-bold">{r.newUrl}</td>
                    <td className="p-3 text-gray-500">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
