import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Referencias para las secciones
  const aboutRef = useRef();
  const projectsRef = useRef();
  const certificationsRef = useRef();
  const contactRef = useRef();

  // Animaciones de aparición
  const aboutInView = useInView(aboutRef, { once: false, margin: "-200px" });
  const projectsInView = useInView(projectsRef, { once: false, margin: "-200px" });
  const certificationsInView = useInView(certificationsRef, { once: false, margin: "-200px" });
  const contactInView = useInView(contactRef, { once: false, margin: "-200px" });

  // Estado para el modal del CV
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Mi Portfolio</h1>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-gray-600 transition-colors text-lg">Sobre mí</a>
          <a href="#projects" className="hover:text-gray-600 transition-colors text-lg">Proyectos</a>
          <a href="#certifications" className="hover:text-gray-600 transition-colors text-lg">Certificaciones</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors text-lg">Contacto</a>
        </div>
      </nav>

      {/* Hero Section con Parallax */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center absolute inset-0 opacity-20"/>
        </motion.div>
        
        <div className="text-center z-10 p-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900">
            Hola, soy Juan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">Desarrollador Full Stack</p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/hiram-avila" // Reemplaza con tu enlace de GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Ver GitHub
            </a>
            <button
              onClick={() => setIsCVModalOpen(true)}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Previsualizar CV
            </button>
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="about" ref={aboutRef} className="py-20 px-6 md:px-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
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
            <div className="absolute inset-0 bg-[url('https://picsum.photos/600/400')] bg-cover bg-center transform hover:scale-105 transition-transform duration-500"/>
          </div>
        </motion.div>
      </section>

      {/* Sección Proyectos */}
      <section id="projects" ref={projectsRef} className="py-20 px-6 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Proyectos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div 
                key={project}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-[url('https://picsum.photos/400/300')] bg-cover bg-center"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Proyecto {project}</h3>
                  <p className="text-gray-600">Descripción breve del proyecto y tecnologías utilizadas.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sección Certificaciones */}
 

      {/* Sección Contacto */}
      <section id="contact" ref={contactRef} className="py-20 px-6 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Contacto</h2>
          <form className="space-y-6">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 text-gray-900 placeholder-gray-400"
            />
            <textarea 
              placeholder="Mensaje" 
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 text-gray-900 placeholder-gray-400"
            ></textarea>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300">
              Enviar
            </button>
          </form>
        </motion.div>
      </section>

      {/* Modal para previsualizar el CV */}
      {isCVModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-3xl relative">
            <button
              onClick={() => setIsCVModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <iframe
              src="/ruta-a-tu-cv.pdf" // Reemplaza con la ruta a tu CV
              className="w-full h-[80vh]"
              title="Previsualización del CV"
            />
          </div>
        </div>
      )}
    </div>
  );
}