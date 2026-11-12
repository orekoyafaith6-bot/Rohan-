import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { PLAYERS_DATA } from '../data/cmsData';
import { Player, PlayerCategory } from '../types';
import { PlayerModal } from '../components/common/PlayerModal';
import { 
  Search, 
  Trophy, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  ChevronRight, 
  Award,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PlayersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Junior', 'High Performance', 'Pro Circuit', 'Bhoomi Scholar'];

  const filteredPlayers = useMemo(() => {
    return PLAYERS_DATA.filter((player) => {
      const matchesSearch = 
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.hometown.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.currentRanking.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All' 
          ? true 
          : selectedCategory === 'Bhoomi Scholar'
            ? player.bhoomiScholar === true
            : player.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleOpenPlayer = (player: Player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#F8F9F6] text-[#202723]">
      <PageHeader
        badge="Athlete Roster & Rankings"
        title="Driven by Ambition. Defined by Performance."
        description="Meet the athletes training at Rohan Bopanna Tennis Academy. From junior state contenders to Davis Cup representatives and Grand Slam trainees, our roster represents relentless dedication and sporting excellence."
        breadcrumbs={[{ label: 'Players' }]}
        backgroundImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=80"
        stats={[
          { label: 'Active Trainees', value: '75+' },
          { label: 'Davis Cup Alumni', value: '3+' },
          { label: 'Bhoomi Scholars', value: '40+' },
          { label: 'National Titles', value: '25+' }
        ]}
      />

      {/* Search & Filter Toolbar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 md:top-[68px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, hometown, ranking..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#EFF2EF] rounded-xl border border-transparent focus:border-[#287B54] focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-mono text-gray-400 hidden lg:inline-block mr-1">
              Category:
            </span>
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

      {/* Players Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPlayers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 p-8">
            <p className="text-lg font-bold text-[#101D32] font-['Sora']">No players found matching your search</p>
            <p className="text-sm text-gray-500 mt-1">Try clearing your search keyword or switching category filter.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#287B54] text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player) => (
              <div
                key={player.id}
                onClick={() => handleOpenPlayer(player)}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#287B54] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Image & Overlays */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101D32]/90 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#101D32]/85 text-[#D2E635] border border-white/10 backdrop-blur-sm">
                      {player.category}
                    </span>
                    {player.bhoomiScholar && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-600 text-white flex items-center gap-1 shadow-sm">
                        <ShieldCheck className="w-3 h-3" /> Bhoomi
                      </span>
                    )}
                  </div>

                  {/* Player Name & Ranking on bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-['Sora'] group-hover:text-[#D2E635] transition-colors leading-tight">
                      {player.name}
                    </h3>
                    <p className="text-xs text-[#D2E635] font-mono mt-0.5 font-semibold">
                      {player.currentRanking}
                    </p>
                  </div>
                </div>

                {/* Card Body & Specs */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#57655F]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#287B54]" /> {player.hometown}
                    </span>
                    <span className="font-mono text-gray-500">Age {player.age}</span>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {player.bio}
                  </p>

                  {/* Top achievement bullet */}
                  {player.achievements[0] && (
                    <div className="p-2 rounded-lg bg-[#EFF2EF] text-[11px] text-[#202723] font-medium flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-[#287B54] shrink-0" />
                      <span className="truncate">{player.achievements[0]}</span>
                    </div>
                  )}

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono text-[10px]">High: {player.careerHigh}</span>
                    <span className="font-bold text-[#287B54] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View Profile <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Trial Assessment Callout */}
      <section className="py-16 bg-[#174D3A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Sora']">
            Do You Have What It Takes to Join Our Squad?
          </h3>
          <p className="text-sm sm:text-base text-gray-200 mt-2 max-w-xl mx-auto">
            Our high-performance team conducts structured on-court trials for ranked junior and professional competitors.
          </p>
          <div className="mt-6">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#D2E635] text-[#101D32] font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors shadow-lg"
            >
              <span>Apply for Player Assessment Trial</span>
              <ChevronRight className="w-4 h-4 text-[#101D32]" />
            </Link>
          </div>
        </div>
      </section>

      <PlayerModal
        isOpen={isModalOpen}
        player={selectedPlayer}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
