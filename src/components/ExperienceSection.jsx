import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaRocket } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    company: "Plataforma de Educación Online (Clientes múltiples)",
    role: "Arquitecto Fullstack",
    duration: "2023 - 2025",
    achievements: [
      "Liderazgo técnico en plataforma con 150k+ usuarios mensuales",
      "Diseño de arquitectura escalable con microservicios (Node.js + React)",
      "Implementación de sistema CI/CD reduciendo deployments en 40%",
      "Optimización de costos AWS  mediante auto-scaling"
    ],
    tech: ["AWS EC2/S3", "Docker", "JWT", "React", "PostgreSQL"],
    icon: <FaRocket className="w-6 h-6 text-orange-600" />,
    impact: "▲ 300% rendimiento ▲ 35% conversión"
  },
  {
    id: 2,
    company: "Startup Fintech (Consultoría)",
    role: "Especialista Backend",
    duration: "2022 - 2023",
    achievements: [
      "Desarrollo de API REST para procesamiento de pagos (50k+ transacciones/día)",
      "Implementación de sistema de colas con Redis",
      "Reducción de latency de 800ms a 350ms",
      "Arquitectura de seguridad con OAuth2.0"
    ],
    tech: ["Node.js", "Redis", "Microservicios", "Terraform", "Prometheus"],
    icon: <FaServer className="w-6 h-6 text-amber-600" />,
    impact: "▼ 65% tiempo respuesta ▼ 30% errores"
  },
  {
    id: 3,
    company: "E-commerce Global (Contrato)",
    role: "DevOps Lead",
    duration: "2021 - 2022",
    achievements: [
      "Migración exitosa a infraestructura cloud-native",
      "Implementación de monitoreo centralizado (ELK Stack)",
      "Automatización del 90% de despliegues",
      "Configuración de VPCs multi-región AWS"
    ],
    tech: ["AWS", "Kubernetes", "CI/CD", "Python", "Ansible"],
    icon: <FaCloud className="w-6 h-6 text-orange-500" />,
    impact: "▲ 99.9% uptime ▼ 70% tiempo deploy"
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.2
    } 
  },
};

const itemVariants = {
  offscreen: { opacity: 0, x: -20 },
  onscreen: { opacity: 1, x: 0 }
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-32 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-20 text-gray-900"
        >
          <span className="border-b-4 border-orange-500 pb-2">Trayectoria Profesional</span>
        </motion.h2>

        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-8 top-0 h-full w-1 bg-orange-100 transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-16 md:space-y-24">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="relative md:pl-24 group"
              >
                {/* Punto de línea de tiempo */}
                <div className="absolute left-0 top-8 w-16 h-16 hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-lg" />
                </div>

                <div className="bg-white p-8 rounded-2xl border-2 border-orange-100 shadow-sm hover:shadow-md transition-all hover:border-orange-200">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-orange-50 p-4 rounded-xl">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-lg text-orange-600 font-medium mt-1">{exp.company}</p>
                      <p className="text-sm text-gray-500 mt-2">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Impacto visual */}
                  <div className="bg-orange-50/50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚀</span>
                      <span className="text-lg font-semibold text-orange-600">{exp.impact}</span>
                    </div>
                  </div>

                  {/* Logros */}
                  <motion.ul className="grid md:grid-cols-2 gap-4 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        variants={itemVariants}
                        className="flex items-start text-gray-700"
                      >
                        <span className="text-orange-500 mr-2 mt-1">▹</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;