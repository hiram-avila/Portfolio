import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'; // Importar íconos
import ParticlesComponent from './ParticlesComponent'; // Importar el componente de partículas

const HeroSection = ({ onCVPreview }) => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con partículas (solo en el HeroSection) */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent id="tsparticles" />
      </div>

      {/* Contenido principal */}
      <div className="text-center z-10 p-4">
        {/* Título con estilo mejorado */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-100">
            Hola, soy Juan
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light mb-8">
          Desarrollador Full Stack
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/hiram-avila"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
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
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
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