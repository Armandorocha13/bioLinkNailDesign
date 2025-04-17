import type React from 'react';
import { motion } from 'framer-motion';
import { SparkleIcon } from './NailIcons';

interface ProfileHeaderProps {
  image: string;
  title: string;
  subtitle?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ image, title, subtitle }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated avatar with glow effect */}
      <motion.div
        className="group relative h-55 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-nail-pink/30"
        whileHover={{ scale: 1.05 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
          initial={{ x: '-100%', y: '-100%' }}
          animate={{ x: '100%', y: '100%' }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "linear", repeatDelay: 0.5 }}
        />

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Decorative elements */}
        <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-nail-pink shadow-lg" />
        <div className="absolute -top-1 -left-1 h-5 w-5 rounded-full bg-nail-red shadow-sm" />
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <motion.h1
          className="flex items-center gap-2 text-2xl font-bold text-nail-red"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
          >
          </motion.span>
          <span className="bg-gradient-to-r from-nail-red to-nail-pink bg-clip-text text-transparent">{title}</span>
          <motion.span
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
          >
          </motion.span>
        </motion.h1>

        {subtitle && (
          <motion.p
            className="max-w-xs text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          className="mt-2 h-0.5 w-20 rounded-full bg-gradient-to-r from-nail-pink to-nail-red"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
