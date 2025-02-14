import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = ({ onCVPreview }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center absolute inset-0 opacity-10" />
      </motion.div>

      <div className="text-center z-10 p-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900">
          Hola, soy Juan
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light">Desarrollador Full Stack</p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/hiram-avila"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            Ver GitHub
          </a>
          <button
            onClick={onCVPreview}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            Previsualizar CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
