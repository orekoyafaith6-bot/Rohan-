import React from 'react';
import { X, Trophy, Award, MapPin, Activity, Calendar, ShieldCheck } from 'lucide-react';
import { Player } from '../../types';
import { Link } from 'react-router-dom';

interface PlayerModalProps {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ player, isOpen, onClose }) => {
  if (!isOpen || !player) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#101D32] border border-[#287B54]/40 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white/80 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Hero */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101D32] via-[#101D32]/60 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#287B54] text-[#D2E635]">
                {player.category}
              </span>
              {player.bhoomiScholar && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-600/90 text-white flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Bhoomi Scholar
                </span>
              )}
              <span className="text-xs text-gray-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D2E635]" /> {player.hometown}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-white">
              {player.name}
            </h2>
            <p className="text-sm text-[#D2E635] font-medium font-mono mt-0.5">
              Current Rank: {player.currentRanking}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-200">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0B1320] p-4 rounded-xl border border-white/5">
            <div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider">Age</div>
              <div className="text-base font-bold text-white mt-0.5">{player.age} Years</div>
            </div>
            <div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider">Plays</div>
              <div className="text-base font-bold text-white mt-0.5 truncate">{player.plays}</div>
            </div>
            <div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider">Career High</div>
              <div className="text-base font-bold text-[#D2E635] mt-0.5">{player.careerHigh}</div>
            </div>
            <div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider">Racquet</div>
              <div className="text-base font-bold text-white mt-0.5 truncate">{player.racket}</div>
            </div>
          </div>

          {/* Biography */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D2E635] mb-2 font-['Sora']">
              Player Profile & Development
            </h4>
            <p className="leading-relaxed text-gray-300">
              {player.bio}
            </p>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D2E635] mb-2 font-['Sora'] flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-[#D2E635]" /> Career Achievements
            </h4>
            <ul className="space-y-2">
              {player.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <Award className="w-4 h-4 text-[#287B54] shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Results */}
          {player.recentResults && player.recentResults.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D2E635] mb-2 font-['Sora'] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D2E635]" /> Recent Tournament Results
              </h4>
              <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-[#0B1320] overflow-hidden">
                {player.recentResults.map((res, i) => (
                  <div key={i} className="p-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-white">{res.tournament}</span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#174D3A] text-[#D2E635] font-semibold">
                        {res.result}
                      </span>
                      <span className="text-gray-400">{res.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer inside modal */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400">
              Interested in training alongside our competitive squad?
            </span>
            <Link
              to="/admissions"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors text-center"
            >
              Apply for Trial Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
