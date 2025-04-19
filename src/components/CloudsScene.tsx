const CloudsScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="800" fill="#A1C4FD" />

        <circle cx="200" cy="150" r="70" fill="#fff" opacity="0.6">
          <animate
            attributeName="cx"
            values="200;600;200"
            dur="15s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="800" cy="120" r="80" fill="#fff" opacity="0.6">
          <animate
            attributeName="cx"
            values="800;1200;800"
            dur="20s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="1200" cy="180" r="90" fill="#fff" opacity="0.5">
          <animate
            attributeName="cx"
            values="1200;1600;1200"
            dur="25s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default CloudsScene;
