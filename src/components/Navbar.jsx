import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900"> Portfolio</h1>
      <div className="hidden md:flex gap-6">
        <a href="#about" className="hover:text-gray-600 transition-colors text-lg">Sobre mí</a>
        <a href="#projects" className="hover:text-gray-600 transition-colors text-lg">Proyectos</a>
        <a href="#certifications" className="hover:text-gray-600 transition-colors text-lg">Certificaciones</a>
        <a href="#laboral" className="hover:text-gray-600 transition-colors text-lg">Experiencia laboral</a>
      </div>
    </nav>
  );
};

export default Navbar;
