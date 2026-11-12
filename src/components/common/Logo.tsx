import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  lightMode?: boolean; // if true, text is white for dark backgrounds
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ lightMode = true, className = '', size = 'md' }) => {
  const [imageError, setImageError] = useState(false);
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  const widthClass = isLarge 
    ? 'w-[150px] sm:w-[175px] max-h-14' 
    : isSmall 
    ? 'w-[95px] sm:w-[110px] max-h-9' 
    : 'w-[120px] sm:w-[140px] max-h-11';

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center group transition-opacity hover:opacity-95 shrink-0 ${className}`}
      aria-label="Rohan Bopanna Tennis Academy"
    >
      {!imageError ? (
        /* Official RBTA Logo SVG scaled to authentic proportions */
        <img
          src="https://rohanbopannatennisacademy.com/wp-content/uploads/2025/03/rohan-bopanna-tennis-academy.svg"
          alt="Rohan Bopanna Tennis Academy"
          className={`h-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] ${widthClass} ${
            lightMode ? 'brightness-125 filter' : ''
          }`}
          onError={() => setImageError(true)}
        />
      ) : (
        /* Sleek compact RBTA tennis monogram badge + crisp 2-line title */
        <div className="flex items-center gap-2.5">
          <div className={`relative flex items-center justify-center rounded-lg bg-gradient-to-br from-[#174D3A] to-[#101D32] border border-[#287B54] shadow-sm shrink-0 ${
            isLarge ? 'w-10 h-10' : isSmall ? 'w-7 h-7' : 'w-8 h-8'
          }`}>
            <span className={`font-black tracking-tight text-[#D2E635] font-['Sora'] ${
              isLarge ? 'text-sm' : isSmall ? 'text-[10px]' : 'text-xs'
            }`}>
              RBTA
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-extrabold tracking-wider uppercase font-['Sora'] ${
              isLarge ? 'text-sm' : isSmall ? 'text-[11px]' : 'text-xs'
            } ${lightMode ? 'text-white' : 'text-[#101D32]'}`}>
              ROHAN BOPANNA
            </span>
            <span className={`text-[9px] tracking-[0.2em] uppercase font-bold mt-0.5 ${
              lightMode ? 'text-[#D2E635]' : 'text-[#287B54]'
            }`}>
              TENNIS ACADEMY
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};

