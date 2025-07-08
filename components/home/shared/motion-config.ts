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
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const TRANSITION_SECTION = {
  duration: 0.6,
  ease: "easeOut",
};

export const PROFESSIONAL_JOURNEY_VARIANTS = {
  enter: { opacity: 0, y: -20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const PROFESSIONAL_JOURNEY_TRANSITION = {
  duration: 0.2,
  ease: "easeInOut" as const,
};
