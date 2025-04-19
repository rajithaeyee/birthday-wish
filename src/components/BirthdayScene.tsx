import { useState } from "react";
import "./Fireworks.css";

const BirthdayScene = () => {
  const [triggerPopper, setTriggerPopper] = useState(false);

  const triggerCelebrationPopper = () => {
    setTriggerPopper(true);
    setTimeout(() => setTriggerPopper(false), 2000);
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="party" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f093fb" />
            <stop offset="100%" stopColor="#f5576c" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#party)" />

        <g>
          {/* Balloons */}
          <circle cx="200" cy="200" r="50" fill="#ff6b6b" />
          <circle cx="300" cy="180" r="40" fill="#ffcc5c" />
          <circle cx="400" cy="210" r="45" fill="#4ecdc4" />
          <circle cx="500" cy="190" r="40" fill="#5e60ce" />
          
          {/* Balloon strings */}
          <line x1="200" y1="250" x2="200" y2="300" stroke="#fff" strokeWidth="2" />
          <line x1="300" y1="220" x2="300" y2="280" stroke="#fff" strokeWidth="2" />
          <line x1="400" y1="255" x2="400" y2="310" stroke="#fff" strokeWidth="2" />
          <line x1="500" y1="230" x2="500" y2="290" stroke="#fff" strokeWidth="2" />
        </g>

        <g transform="translate(600, 500)">
          <rect x="0" y="0" width="240" height="100" rx="20" fill="#ffffff" />
          <path
            d="M0 0 Q20 -30 40 0 T80 0 T120 0 T160 0 T200 0 T240 0 V100 H0 Z"
            fill="#f39c12"
          />
          <rect x="50" y="-40" width="10" height="40" fill="#3498db" />
          <rect x="115" y="-40" width="10" height="40" fill="#e74c3c" />
          <rect x="180" y="-40" width="10" height="40" fill="#9b59b6" />
          <circle cx="55" cy="-45" r="5" fill="#f1c40f" />
          <circle cx="120" cy="-45" r="5" fill="#f1c40f" />
          <circle cx="185" cy="-45" r="5" fill="#f1c40f" />
        </g>

        {triggerPopper && (
          <g className="celebration-popper">
            {Array.from({ length: 150 }).map((_, i) => {
              const angle = Math.random() * 360;
              const distance = Math.random() * 150 + 50;
              const x = 720 + Math.cos((angle * Math.PI) / 180) * distance;
              const y = 400 + Math.sin((angle * Math.PI) / 180) * distance;
              const size = Math.random() * 5 + 2;
              const color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random color

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={size}
                  fill={color}
                  className="celebration-popper-particle"
                />
              );
            })}
          </g>
        )}
      </svg>

      <button
        onClick={triggerCelebrationPopper}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-pink-500 text-white rounded-full text-lg hover:bg-pink-600 transition z-10"
      >
        Happy Birthday! 🎉
      </button>
    </div>
  );
};

export default BirthdayScene;
