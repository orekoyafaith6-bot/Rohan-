import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { NEWS_ARTICLES } from '../data/cmsData';
import { NewsArticle } from '../types';
import { 
  Calendar, 
  Clock, 
  Search, 
  ArrowRight, 
  X, 
  Tag, 
  Share2, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Tournament Results', 'Academy News', 'Bhoomi Program', 'Tour Insights'];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((art) => {
      const matchesSearch = 
        art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        art.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  const featured = NEWS_ARTICLES.find((a) => a.featured) || NEWS_ARTICLES[0];

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="News & Tour Dispatches"
        title="Inside the World of RBTA."
        description="Stay updated with our athletes' tournament results, coaching insights from Grand Slam champions, Bhoomi scholarship milestones, and behind-the-scenes developments at the Padukone-Dravid CSE campus."
        breadcrumbs={[{ label: 'News' }]}
        backgroundImage="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Search & Filter Toolbar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 md:top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search news, topics, tournaments..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#EFF2EF] rounded-xl border border-transparent focus:border-[#287B54] focus:bg-white focus:outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
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

      {/* Main Magazine Feed */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Story Hero Card */}
        {selectedCategory === 'All' && !searchTerm && (
          <div 
            onClick={() => setActiveArticle(featured)}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#101D32] text-[#D2E635]">
                    Featured Headline
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mb-2">
                    <span className="text-[#287B54] font-semibold">{featured.category}</span>
                    <span>•</span>
                    <span>{featured.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-[#101D32] group-hover:text-[#287B54] transition-colors leading-tight">
                    {featured.title}
                  </h2>

                  <p className="mt-4 text-sm text-[#57655F] leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-mono">{featured.readTime}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#287B54] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#287B54] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#101D32]/90 text-[#D2E635] border border-white/10">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#287B54]" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5 text-[#287B54]" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold font-['Sora'] text-[#101D32] group-hover:text-[#287B54] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#57655F] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F8F9F6] border-t border-gray-100 flex items-center justify-between text-xs text-[#57655F]">
                <span className="text-[11px] font-mono text-gray-400">By {article.author}</span>
                <span className="font-bold text-[#287B54] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl text-[#202723] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#287B54] text-[#D2E635] mb-2 inline-block">
                  {activeArticle.category}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-['Sora'] leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-gray-300 font-mono mt-2">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                  <span>•</span>
                  <span>{activeArticle.author}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm sm:text-base text-[#57655F] leading-relaxed">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-[#287B54]" />
                  {activeArticle.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#EFF2EF] text-xs font-medium text-[#101D32]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
