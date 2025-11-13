import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import ParticlesComponent from './ParticlesComponent';

const HeroSection = ({ onCVPreview }) => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con partículas */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent id="tsparticles" />
      </div>

      {/* Contenido principal con máxima prioridad */}
      <div className="text-center relative z-[9999] p-4 space-y-6"> {/* Z-index extremo */}
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-100">
            Hola, soy Hiram
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 font-light">
          Desarrollador Full Stack
        </p>

        {/* Botones con doble protección */}
        <div className="flex flex-col items-center gap-4 relative z-[99999]">
          <div className="flex gap-4">
            <a
              href="https://github.com/hiram-avila"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700/90 hover:bg-gray-600/90 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 backdrop-blur-sm relative z-[99999]"
            >
              <FaGithub className="w-5 h-5" />
              Ver GitHub
            </a>
            <button
              onClick={onCVPreview}
              className="bg-red-600/90 hover:bg-red-700/90 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 backdrop-blur-sm relative z-[99999]"
            >
              <FaFilePdf className="w-5 h-5" />
              Previsualizar CV
            </button>
          </div>
          
          <a
            href="https://www.linkedin.com/in/juan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700/90 hover:bg-blue-600/90 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 backdrop-blur-sm relative z-[99999]"
          >
            <FaLinkedin className="w-5 h-5" />
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;