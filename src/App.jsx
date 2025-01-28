import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-gray-900/90 backdrop-blur-sm shadow-lg">
        <h1 className="text-2xl font-bold text-cyan-400">Mi Portfolio</h1>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-cyan-400 transition-colors text-lg">Sobre mí</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors text-lg">Proyectos</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors text-lg">Contacto</a>
        </div>
      </nav>

      {/* Hero Section con Parallax */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center absolute inset-0 opacity-30"/>
        </motion.div>
        
        <div className="text-center z-10 p-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Hola, soy Juan
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-light">Desarrollador Full Stack</p>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="about" className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-cyan-400">Sobre mí</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Desarrollador con 5 años de experiencia creando aplicaciones web modernas.
              Especializado en React y Node.js. Apasionado por el diseño UI/UX y las tecnologías
              emergentes.
            </p>
          </motion.div>
          <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/600/400')] bg-cover bg-center transform hover:scale-105 transition-transform duration-500"/>
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Proyectos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div 
                key={project}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-cyan-400/20 transition-shadow duration-300"
              >
                <div className="h-48 bg-[url('https://picsum.photos/400/300')] bg-cover bg-center"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400">Proyecto {project}</h3>
                  <p className="text-gray-300">Descripción breve del proyecto y tecnologías utilizadas.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400">Contacto</h2>
          <form className="space-y-6">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400"
            />
            <textarea 
              placeholder="Mensaje" 
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400"
            ></textarea>
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}