const NightScene = () => {
    return (
        <div className="absolute inset-0 w-full h-full">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 800"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
            >

                <rect width="1440" height="800" fill="#2C3E50" />


                <circle cx="100" cy="100" r="3" fill="#fff" />
                <circle cx="400" cy="200" r="2" fill="#fff" />
                <circle cx="700" cy="100" r="2" fill="#fff" />
                <circle cx="1000" cy="300" r="3" fill="#fff" />
                <circle cx="1300" cy="500" r="4" fill="#fff" />
                <circle cx="300" cy="500" r="4" fill="#fff" />
                <circle cx="500" cy="500" r="4" fill="#fff" />
                <circle cx="600" cy="500" r="4" fill="#fff" />
                <circle cx="800" cy="500" r="4" fill="#fff" />
                <circle cx="1100" cy="200" r="60" fill="#f0f0f0" opacity="0.8" />
            </svg>
        </div>
    );
};

export default NightScene;
