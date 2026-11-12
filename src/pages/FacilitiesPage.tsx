import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { FACILITIES_DATA } from '../data/cmsData';
import { Lightbox } from '../components/common/Lightbox';
import { 
  Maximize2, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FacilitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Courts', 'Sports Science', 'Fitness', 'Recovery', 'Residential'];

  const filteredFacilities = selectedCategory === 'All'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === selectedCategory);

  // Flatten all gallery photos for lightbox
  const allImages = FACILITIES_DATA.flatMap((fac) => 
    fac.gallery.map((url) => ({
      url,
      title: fac.title,
      caption: fac.shortDesc
    }))
  );

  const openLightboxAt = (url: string) => {
    const idx = allImages.findIndex((img) => img.url === url);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="Padukone-Dravid CSE Campus"
        title="Where Preparation Meets Performance."
        description="Spread across 15 pristine acres in Bengaluru, our campus at the Padukone–Dravid Centre for Sports Excellence brings together tournament courts, covered arenas, sports science labs, and residential suites in an integrated Olympic-class environment."
        breadcrumbs={[{ label: 'Facilities' }]}
        backgroundImage="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Hard Courts', value: '10+' },
          { label: 'Covered Courts', value: '3' },
          { label: 'Athletic Gym', value: '20,000 sq ft' },
          { label: 'Airport Distance', value: '15 Mins' }
        ]}
      />

      {/* Campus Location Ribbon */}
      <section className="bg-[#101D32] text-white py-4 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D2E635]" />
            <span>Padukone–Dravid Centre for Sports Excellence (CSE), Yelahanka, Bengaluru 562157</span>
          </div>
          <Link
            to="/contact"
            className="text-[#D2E635] hover:underline font-bold uppercase tracking-wider inline-flex items-center gap-1"
          >
            <span>Campus Directions & Airport Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 md:top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
            Filter Infrastructure:
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

      {/* Facilities Detailed Showcase */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredFacilities.map((facility, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={facility.id}
              id={facility.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Photo Gallery Side */}
                <div className={`lg:col-span-6 relative flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Primary Large Image */}
                  <div 
                    onClick={() => openLightboxAt(facility.image)}
                    className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[380px] overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#101D32] text-[#D2E635]">
                        {facility.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                      <span className="text-xs text-gray-200 font-mono">Click to expand view</span>
                      <Maximize2 className="w-4 h-4 text-[#D2E635]" />
                    </div>
                  </div>

                  {/* Secondary Thumbnails */}
                  {facility.gallery && facility.gallery.length > 1 && (
                    <div className="grid grid-cols-3 gap-2 p-2 bg-[#F8F9F6] border-t border-gray-100">
                      {facility.gallery.map((thumb, idx) => (
                        <div
                          key={idx}
                          onClick={() => openLightboxAt(thumb)}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group border border-gray-200"
                        >
                          <img
                            src={thumb}
                            alt={`${facility.title} detail ${idx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Details Side */}
                <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#287B54]">
                      {facility.category} Specifications
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-[#101D32] mt-1">
                      {facility.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-[#57655F] leading-relaxed">
                      {facility.description}
                    </p>

                    {/* Technical Specifications List */}
                    <div className="mt-6 pt-6 border-t border-gray-100 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#101D32] font-['Sora']">
                        Key Features & Engineering Specs:
                      </div>
                      <ul className="space-y-2">
                        {facility.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202723]">
                            <CheckCircle2 className="w-4 h-4 text-[#287B54] shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {facility.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#EFF2EF] text-[11px] font-semibold text-[#101D32]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/admissions"
                      className="px-5 py-2 rounded-xl bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <span>Experience Campus</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#D2E635]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Lightbox for full screen browsing */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        images={allImages}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % allImages.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
      />
    </div>
  );
};
