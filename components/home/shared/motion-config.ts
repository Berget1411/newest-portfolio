export const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const TRANSITION_SECTION = {
  duration: 0.3,
};

export const PROFESSIONAL_JOURNEY_VARIANTS = {
  enter: { opacity: 0, y: -20, filter: "blur(4px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: 20, filter: "blur(4px)" },
};

export const PROFESSIONAL_JOURNEY_TRANSITION = {
  duration: 0.2,
  ease: "easeInOut" as const,
};
