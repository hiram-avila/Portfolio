import { motion } from 'framer-motion';

export default function ScrollParallax({ children, yTransform }) {
  return (
    <motion.div
      style={{ y: yTransform }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}
