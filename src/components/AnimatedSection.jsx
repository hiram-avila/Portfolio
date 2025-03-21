import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
export default function AnimatedSection({ children, className, id }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id={id}
      className={`${className} max-w-6xl mx-auto`}
    >
      {children}
    </motion.section>
  );
}