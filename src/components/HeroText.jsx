/* eslint-disable react/no-unescaped-entities */
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const roleWords = [
    "Developer",
    "Builder",
    "Engineer",
    "Dreamer",
    "Philosopher",
    "Gamer",
    "Researcher",
  ];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Ayush
        </motion.h1>
        {/* Add FlipWords for roles here */}
        <div className="mt-4">
          <FlipWords
            words={roleWords}
            className="font-bold text-neutral-300 text-5xl"
            duration={2000}
          />
        </div>
        <motion.p
          className="mt-2 text-3xl font-semibold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
        >
          Turning ideas into reality
        </motion.p>
        <motion.p
          className="text-xl font-normal text-neutral-200"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
        >
          Crafting logic with soul.
        </motion.p>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Ayush
        </motion.p>
        {/* Add FlipWords for roles here */}
        <div className="mb-2">
          <FlipWords
            words={roleWords}
            className="font-bold text-neutral-300 text-4xl"
            duration={2000}
          />
        </div>
        <motion.p
          className="mt-2 text-2xl font-semibold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
        >
          Turning ideas into reality
        </motion.p>
        <motion.p
          className="text-base font-normal text-neutral-200"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}
        >
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
