import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 60 50" 
      className={`${className} transition-all duration-500 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]`}
      aria-label="TOCHMOC Logo"
    >
      <g transform="translate(14, 0)">
        {/* Outer Frame */}
        <rect 
          x="0.5" 
          y="0.5" 
          width="31" 
          height="31" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="1" 
          strokeOpacity="0.4" 
        />
        
        {/* Architectural T Mark */}
        <g transform="translate(4, 4)">
          <rect x="2" y="5" width="20" height="4" fill="#D4AF37" />
          <rect x="10" y="11" width="4" height="11" fill="#D4AF37" />
        </g>
      </g>

      {/* Typography */}
      <text 
        x="30" 
        y="46" 
        textAnchor="middle" 
        fontFamily="'Cormorant Garamond', serif" 
        fontWeight="600" 
        fontSize="8px" 
        letterSpacing="0.3em" 
        fill="#D4AF37"
      >
        TOCHMOC
      </text>
    </svg>
  );
};

export default Logo;