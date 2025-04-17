import type React from 'react';
import { motion } from 'framer-motion';
import { NailPolishIcon, HeartIcon } from './NailIcons';

export const BackgroundGradient: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-nail-pink-light via-nail-off-white to-white opacity-70" />
  );
};

export const FloatingElements: React.FC = () => {
  const elements = [
    { id: 'polish-1', icon: NailPolishIcon, position: 'top-20 left-10', delay: 0, size: 24, duration: 7 },
    { id: 'heart-1', icon: HeartIcon, position: 'top-40 right-12', delay: 1.5, size: 18, duration: 6 },
    { id: 'polish-2', icon: NailPolishIcon, position: 'bottom-32 left-14', delay: 0.8, size: 20, duration: 8 },
    { id: 'heart-2', icon: HeartIcon, position: 'bottom-20 right-10', delay: 2.2, size: 16, duration: 7 },
    { id: 'polish-3', icon: NailPolishIcon, position: 'top-72 left-5', delay: 3, size: 16, duration: 9 },
  ];

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {elements.map((element) => {
        const Icon = element.icon;

        return (
          <motion.div
            key={element.id}
            className={`absolute ${element.position} text-nail-pink opacity-20`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: element.duration,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <Icon size={element.size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export const CircleDecoration: React.FC = () => {
  return (
    <div className="fixed -bottom-40 -left-40 -z-5 h-96 w-96 rounded-full bg-nail-pink opacity-10 blur-3xl" />
  );
};

export const Decoration: React.FC = () => {
  return (
    <>
      <BackgroundGradient />
      <FloatingElements />
      <CircleDecoration />
      <div className="fixed -top-40 -right-40 -z-5 h-96 w-96 rounded-full bg-nail-red opacity-10 blur-3xl" />
    </>
  );
};
