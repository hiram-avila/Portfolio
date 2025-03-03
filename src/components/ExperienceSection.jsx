import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa'; // Íconos para cada experiencia

// Datos de experiencia laboral (puedes modificarlos)
const experienceData = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    role: "Desarrollador Frontend",
    duration: "Enero 2022 - Presente",
    description: "Lideré el desarrollo de interfaces de usuario para aplicaciones web, utilizando React y TypeScript. Colaboré con equipos de diseño y backend para garantizar una experiencia de usuario óptima.",
    icon: <FaCode className="w-6 h-6 text-blue-500" />, // Ícono personalizado
  },
  {
    id: 2,
    company: "Innovatech",
    role: "Practicante de Desarrollo Web",
    duration: "Junio 2021 - Diciembre 2021",
    description: "Contribuí al desarrollo de componentes reutilizables y optimicé el rendimiento de aplicaciones web existentes. Aprendí buenas prácticas de código y trabajo en equipo.",
    icon: <FaLaptopCode className="w-6 h-6 text-purple-500" />,
  },
  {
    id: 3,
    company: "Freelance",
    role: "Desarrollador Web Independiente",
    duration: "Marzo 2020 - Mayo 2021",
    description: "Trabajé en proyectos variados, desde sitios web estáticos hasta aplicaciones web dinámicas. Me especialicé en HTML, CSS, JavaScript y React.",
    icon: <FaBriefcase className="w-6 h-6 text-green-500" />,
  },
];

// Animaciones
const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExperienceSection = () => {
  return (
    <section id="laboral" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto"> {/* Ancho más pequeño */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Experiencia Laboral
        </motion.h2>
        <div className="space-y-8">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 flex items-start gap-6"
            >
              {/* Ícono */}
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full border-2 border-gray-200">
                {exp.icon}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">{exp.role}</h3>
                <p className="text-lg text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;