import type React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const NailPolishIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`nail-polish-icon ${className}`}
    >
      <path d="M8 9l2-6h4l2 6" />
      <rect x="6" y="9" width="12" height="12" rx="2" />
      <path d="M12 12v3" />
      <path d="M15 12v3" />
    </svg>
  );
};

export const NailFileIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`nail-file-icon ${className}`}
    >
      <path d="M18 6L6 18" />
      <path d="M15 3L7 11" />
      <path d="M21 9L13 17" />
    </svg>
  );
};

export const SparkleIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`sparkle-icon ${className}`}
    >
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="M12 3 8 7" />
      <path d="M12 3l4 4" />
      <path d="M12 21l-4-4" />
      <path d="M12 21l4-4" />
      <path d="M3 12l4-4" />
      <path d="M3 12l4 4" />
      <path d="M21 12l-4-4" />
      <path d="M21 12l-4 4" />
    </svg>
  );
};

export const HeartIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`heart-icon ${className}`}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};
