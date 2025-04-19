import { JSX, useState } from 'react';
import { VARIANTS } from './utils/constants';
import { motion, AnimatePresence } from 'framer-motion';

import CloudsScene from './components/CloudsScene';
import NightScene from './components/NightScene';
import FlowersScene from './components/FlowersScene';
import SunsetScene from './components/SunsetScene';
import BirthdayScene from './components/BirthdayScene';

type Scene = {
  Component: () => JSX.Element;
  text: string;
};

const scenes: Scene[] = [
  {
    Component: CloudsScene,
    text: "Hey love, even though we're miles apart, you're always close to my heart. ❤️",
  },
  {
    Component: NightScene,
    text: "Every moment without you makes me cherish you even more. 🌙",
  },
  {
    Component: FlowersScene,
    text: "I wish I could hug you tight right now and whisper happy birthday in your ear. 💫",
  },
  {
    Component: SunsetScene,
    text: "No distance can lessen what I feel for you. You're amazing. 💌",
  },
  {
    Component: BirthdayScene,
    text: "🎉 HAPPY BIRTHDAY, MY LOVE! 🎂💖 I can't wait to celebrate together soon!",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const SceneComponent = scenes[index].Component;

  const next = () => {
    if (index < scenes.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <SceneComponent />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={VARIANTS}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10"
        >
          <div className="backdrop-blur-md bg-black/30 p-6 rounded-xl shadow-xl max-w-xl w-full text-white">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
              {scenes[index].text}
            </p>
            {index < scenes.length - 1 && (
              <button
                onClick={next}
                className="mt-4 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition"
              >
                Next 💌
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
