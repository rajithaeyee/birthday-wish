const SunsetScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sunsetSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF7E5F" />
            <stop offset="50%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#F7C26A" />
          </linearGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#sunsetSky)" />

        <circle cx="720" cy="600" r="80" fill="#FFD700" opacity="0.9">
          <animate
            attributeName="cy"
            values="550;600;550"
            dur="10s"
            repeatCount="indefinite"
            keyTimes="0;0.5;1"
          />
        </circle>

        <path
          d="M0,620 C300,700 1140,550 1440,630 L1440,800 L0,800 Z"
          fill="#3B755F"
        />
      </svg>
    </div>
  );
};

export default SunsetScene;
