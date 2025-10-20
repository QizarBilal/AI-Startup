import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showBackground?: boolean;
}

export default function Logo({
  className = "",
  size = "md",
  showBackground = true,
}: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  };

  const iconSize = iconSizes[size];

  return (
    <div
      className={`${sizeClasses[size]} ${
        showBackground
          ? "rounded-xl bg-gradient-to-br from-navy-600 to-purple-600 dark:from-navy-500 dark:to-purple-500 shadow-lg"
          : ""
      } flex items-center justify-center ${className}`}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Neural network node connections - forming an abstract brain/network */}
        <g className="animate-pulse-slow">
          {/* Central core circle */}
          <circle cx="50" cy="50" r="12" fill="white" opacity="0.95" />

          {/* Outer nodes */}
          <circle cx="20" cy="30" r="6" fill="white" opacity="0.85" />
          <circle cx="80" cy="30" r="6" fill="white" opacity="0.85" />
          <circle cx="20" cy="70" r="6" fill="white" opacity="0.85" />
          <circle cx="80" cy="70" r="6" fill="white" opacity="0.85" />

          {/* Connection lines with gradient */}
          <line
            x1="26"
            y1="32"
            x2="44"
            y2="45"
            stroke="white"
            strokeWidth="2.5"
            opacity="0.6"
            strokeLinecap="round"
          />
          <line
            x1="74"
            y1="32"
            x2="56"
            y2="45"
            stroke="white"
            strokeWidth="2.5"
            opacity="0.6"
            strokeLinecap="round"
          />
          <line
            x1="26"
            y1="68"
            x2="44"
            y2="55"
            stroke="white"
            strokeWidth="2.5"
            opacity="0.6"
            strokeLinecap="round"
          />
          <line
            x1="74"
            y1="68"
            x2="56"
            y2="55"
            stroke="white"
            strokeWidth="2.5"
            opacity="0.6"
            strokeLinecap="round"
          />

          {/* Accent dots for tech feel */}
          <circle cx="50" cy="20" r="3" fill="white" opacity="0.7" />
          <circle cx="50" cy="80" r="3" fill="white" opacity="0.7" />

          {/* Subtle spark/star accent */}
          <path
            d="M50 10 L52 16 L58 16 L53 20 L55 26 L50 22 L45 26 L47 20 L42 16 L48 16 Z"
            fill="white"
            opacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
}

// Alternative icon-only export for flexible usage
export function LogoIcon({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Same neural network design */}
      <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.95" />
      <circle cx="20" cy="30" r="6" fill="currentColor" opacity="0.85" />
      <circle cx="80" cy="30" r="6" fill="currentColor" opacity="0.85" />
      <circle cx="20" cy="70" r="6" fill="currentColor" opacity="0.85" />
      <circle cx="80" cy="70" r="6" fill="currentColor" opacity="0.85" />
      <line
        x1="26"
        y1="32"
        x2="44"
        y2="45"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.6"
        strokeLinecap="round"
      />
      <line
        x1="74"
        y1="32"
        x2="56"
        y2="45"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.6"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="68"
        x2="44"
        y2="55"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.6"
        strokeLinecap="round"
      />
      <line
        x1="74"
        y1="68"
        x2="56"
        y2="55"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.6"
        strokeLinecap="round"
      />
      <circle cx="50" cy="20" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="50" cy="80" r="3" fill="currentColor" opacity="0.7" />
      <path
        d="M50 10 L52 16 L58 16 L53 20 L55 26 L50 22 L45 26 L47 20 L42 16 L48 16 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}
