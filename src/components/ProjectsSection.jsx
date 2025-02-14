import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import projects from '../constants/projects'; // Importa los proyectos

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsRef = useRef(null);
  const inView = useInView(projectsRef, { once: false, margin: "-200px" });

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Proyectos</h2>

        {/* Lista de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }} // Animación inicial
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animación cuando está en vista
              transition={{ duration: 0.8, ease: "easeOut" }} // Transición suave
              whileHover={{ scale: 1.05 }} // Animación al hacer hover
              whileTap={{ scale: 0.95 }} // Animación al hacer clic
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48">
                <img
                  src={project.imageUrl}
                  alt={project.projectName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.projectName}</h3>
                <p className="text-gray-600 mb-4">{project.projectDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para detalles del proyecto */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden">
            <div className="relative h-64">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.projectName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedProject.projectName}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.projectDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags?.map((tag) => (
                  <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;