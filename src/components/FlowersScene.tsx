const FlowersScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >

        <rect width="1440" height="800" fill="#A1C4FD" />

        <circle cx="120" cy="100" r="60" fill="#FFD700" opacity="0.8" />

        <path
          d="M0,600 C360,700 1080,500 1440,620 L1440,800 L0,800 Z"
          fill="#2C8D42"
        />

        {[
          { cx: 200, cy: 600, r: 20, fill: "#FF6347", dur: "3s" },
          { cx: 500, cy: 620, r: 18, fill: "#FFD700", dur: "4s" },
          { cx: 800, cy: 590, r: 22, fill: "#FF4500", dur: "2.5s" },
          { cx: 350, cy: 610, r: 16, fill: "#FF69B4", dur: "3.5s" },
          { cx: 650, cy: 625, r: 19, fill: "#ADFF2F", dur: "4.2s" },
          { cx: 1000, cy: 580, r: 21, fill: "#FF1493", dur: "3s" },
          { cx: 1200, cy: 610, r: 17, fill: "#FFB6C1", dur: "3.8s" },
        ].map((flower, i) => (
          <circle key={i} cx={flower.cx} cy={flower.cy} r={flower.r} fill={flower.fill}>
            <animate
              attributeName="cy"
              values={`${flower.cy};${flower.cy - 10};${flower.cy}`}
              dur={flower.dur}
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default FlowersScene;
