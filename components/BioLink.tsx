import type React from 'react';
import { motion } from 'framer-motion';

interface BioLinkProps {
  icon?: React.ReactNode;
  text: string;
  url: string;
  delay?: number;
}

const BioLink: React.FC<BioLinkProps> = ({ icon, text, url, delay = 0 }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center gap-3 rounded-lg bg-white/80 p-4 text-nail-red shadow-md transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-nail-pink/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-nail-pink to-nail-red opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

      {/* Left accent border */}
      <div className="absolute left-0 top-0 h-full w-1 bg-nail-pink transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

      {icon && (
        <span className="relative z-10 text-nail-pink transition-transform duration-300 group-hover:scale-110 group-hover:text-nail-red">
          {icon}
        </span>
      )}
      <span className="relative z-10 font-medium transition-colors duration-300">{text}</span>

      {/* Right arrow indicator */}
      <span className="absolute right-4 transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">→</span>
    </motion.a>
  );
};

export default BioLink;
