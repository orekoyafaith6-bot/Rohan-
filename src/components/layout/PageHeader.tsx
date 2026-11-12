import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs: { label: string; path?: string }[];
  backgroundImage?: string;
  stats?: { label: string; value: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  breadcrumbs,
  backgroundImage = 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1600&q=80',
  stats
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#101D32] text-white overflow-hidden border-b border-white/10">
      {/* Background with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320] via-[#101D32]/90 to-[#174D3A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101D32] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-4 font-mono uppercase tracking-wider">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#D2E635] font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#287B54]/40 border border-[#287B54] text-[#D2E635] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2E635] animate-pulse"></span>
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Sora'] text-white max-w-4xl">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}

        {/* Stats Row if provided */}
        {stats && stats.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                <div className="text-2xl font-black text-[#D2E635] font-['Sora']">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
