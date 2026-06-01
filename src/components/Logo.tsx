import React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-14" }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full object-contain"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" fill="none" strokeLinecap="round">
          {/* The right-hand "C" curve */}
          <path d="M 50,15 A 35,35 0 0,1 50,85" strokeWidth="8" />
          
          {/* The three swooping strands from top left */}
          <path d="M 15,20 Q 30,35 40,85" strokeWidth="7" />
          <path d="M 25,15 Q 45,30 55,75" strokeWidth="7" />
          <path d="M 35,10 Q 60,25 70,60" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
}
