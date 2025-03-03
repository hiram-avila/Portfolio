import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'; // Importar íconos

const HeroSection = ({ onCVPreview }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '0%']); // Efecto de parallax

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Fondo con efecto de parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div
          className="bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center absolute inset-0 opacity-20" // Fondo con opacidad reducida
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="text-center z-10 p-4">
        {/* Título con estilo mejorado */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-800 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
            Hola, soy Juan
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">
          Desarrollador Full Stack
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/hiram-avila"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <FaGithub className="w-5 h-5" /> {/* Ícono de GitHub */}
            Ver GitHub
          </a>
          <button
  onClick={onCVPreview}
  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
>
  <FaFilePdf className="w-5 h-5" /> {/* Ícono de PDF */}
  Previsualizar CV
</button>
        </div>
        {/* Botón de LinkedIn proporcional */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.linkedin.com/in/juan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <FaLinkedin className="w-5 h-5" /> {/* Ícono de LinkedIn */}
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;