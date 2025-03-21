import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import projects from '../constants/projects'; // Importa los proyectos

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArchitecture, setSelectedArchitecture] = useState(null); // Estado para la arquitectura
  const [selectedTag, setSelectedTag] = useState(null); // Estado para el filtro
  const projectsRef = useRef(null);
  const inView = useInView(projectsRef, { once: false, margin: "-200px" });

  // Obtener todas las tecnologías únicas
  const allTags = [...new Set(projects.flatMap((project) => project.tags))];

  // Filtrar proyectos por tecnología
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-6 bg-gray-50 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-12 text-gray-900 font-bebas">
          Proyectos
        </h2>

        {/* Filtros por tecnología */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setSelectedTag(null)} // Mostrar todos los proyectos
            className={`px-4 py-2 rounded-lg transition-colors ${
              !selectedTag
                ? "bg-gray-900 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)} // Filtrar por tecnología
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTag === tag
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Lista de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                <button
  onClick={() => setSelectedProject(project)}
  className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2 flex-1"
>
  <FaGithub className="w-5 h-5" /> {/* Ícono de GitHub */}
  <span>Ver proyecto</span>
</button>
                  <button
                    onClick={() => setSelectedArchitecture(project)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex-1"
                  >
                    Arquitectura
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para detalles del proyecto */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl">
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

      {/* Modal para previsualizar la arquitectura */}
      {selectedArchitecture && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                Arquitectura de {selectedArchitecture.projectName}
              </h3>
            </div>
            <div className="relative h-[70vh] p-6">
              <img
                src={selectedArchitecture.architectureImageUrl}
                alt={`Arquitectura de ${selectedArchitecture.projectName}`}
                className="w-full h-full object-contain rounded-lg border border-gray-200 shadow-sm"
              />
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedArchitecture(null)}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
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