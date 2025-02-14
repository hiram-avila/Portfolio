import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const inView = useInView(aboutRef, { once: false, margin: "-200px" });

  return (
    <section id="about" ref={aboutRef} className="py-20 px-6 md:px-20 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Sobre mí</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Desarrollador con 5 años de experiencia creando aplicaciones web modernas.
            Especializado en React y Node.js. Apasionado por el diseño UI/UX y las tecnologías
            emergentes.
          </p>
        </div>
        <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/600/400')] bg-cover bg-center transform hover:scale-105 transition-transform duration-500" />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
