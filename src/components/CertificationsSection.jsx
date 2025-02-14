import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CertificationsSection = () => {
  const certificationsRef = useRef(null);
  const inView = useInView(certificationsRef, { once: false, margin: "-200px" });

  return (
    <section id="certifications" ref={certificationsRef} className="py-20 px-6 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Certificaciones</h2>
        <p className="text-gray-600 text-lg">
          Aquí puedes agregar tus certificaciones o logros.
        </p>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
