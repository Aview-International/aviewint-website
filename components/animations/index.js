import { motion } from 'framer-motion';

// Animate a page when it's mounted
// Wrap the page with this component
export const PageTransition = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 300, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  };
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={'linear'}
    >
      {children}
    </motion.main>
  );
};
