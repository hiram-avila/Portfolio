import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProjectsSection = () => {
  const projectsRef = useRef(null);
  const inView = useInView(projectsRef, { once: false, margin: "-200px" });

  const projects = [1, 2, 3]; // Puedes reemplazar o mapear sobre tus datos reales

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-6 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-[url('https://picsum.photos/400/300')] bg-cover bg-center" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Proyecto {project}</h3>
                <p className="text-gray-600">Descripción breve del proyecto y tecnologías utilizadas.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
