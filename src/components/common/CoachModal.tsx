import React from 'react';
import { X, Award, CheckCircle2, Quote, BookOpen } from 'lucide-react';
import { Coach } from '../../types';
import { Link } from 'react-router-dom';

interface CoachModalProps {
  coach: Coach | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CoachModal: React.FC<CoachModalProps> = ({ coach, isOpen, onClose }) => {
  if (!isOpen || !coach) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#101D32] border border-[#287B54]/40 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
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

        {/* Coach Header banner */}
        <div className="relative h-60 w-full overflow-hidden shrink-0">
          <img
            src={coach.image}
            alt={coach.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101D32] via-[#101D32]/70 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#287B54] text-[#D2E635] mb-2 inline-block">
              {coach.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] text-white">
              {coach.name}
            </h2>
            <p className="text-sm text-[#D2E635] font-medium font-['Sora'] mt-0.5">
              {coach.role}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-200">
          {/* Quote if available */}
          {coach.quote && (
            <div className="p-4 rounded-xl bg-[#174D3A]/30 border-l-4 border-[#D2E635] italic text-gray-200 flex items-start gap-3">
              <Quote className="w-6 h-6 text-[#D2E635] shrink-0 mt-0.5" />
              <p className="text-sm font-serif">"{coach.quote}"</p>
            </div>
          )}

          {/* Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D2E635] mb-2 font-['Sora']">
              About & Coaching Legacy
            </h4>
            <p className="leading-relaxed text-gray-300">
              {coach.bio}
            </p>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D2E635] mb-3 font-['Sora'] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#D2E635]" /> Key Credentials & Honours
            </h4>
            <div className="space-y-2">
              {coach.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#287B54] shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D2E635] mb-2 font-['Sora']">
              Core Technical Specialties
            </h4>
            <div className="flex flex-wrap gap-2">
              {coach.specialties.map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-[#0B1320] border border-white/10 text-xs font-medium text-gray-300"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Experience tag */}
          <div className="p-3 bg-[#0B1320] rounded-lg border border-white/5 flex items-center justify-between text-xs text-gray-400">
            <span>Professional Experience:</span>
            <span className="font-semibold text-white">{coach.experience}</span>
          </div>

          {/* CTA Footer inside modal */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <span className="text-xs text-gray-400">
              Ready to train with our coaching team?
            </span>
            <Link
              to="/admissions"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-[#287B54] hover:bg-[#349E6D] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Enquire for Coaching
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
