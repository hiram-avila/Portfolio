import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { 
      category: 'Cloud & DevOps', 
      items: ['AWS', 'Docker', 'CI/CD', 'Terraform', 'Kubernetes'],
      icon: '☁️'
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Microservices', 'GraphQL', 'REST APIs', 'Java'],
      icon: '⚙️'
    },
    { 
      category: 'Frontend', 
      items: ['React', 'TypeScript', 'Next.js', 'Redux', 'Jest'],
      icon: '🎨'
    },
    { 
      category: 'Data', 
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Data Modeling'],
      icon: '📊'
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref} 
      className="py-24 px-6 md:px-12 lg:px-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-20 -rotate-2 scale-110 rounded-lg"></span>
                <span className="relative z-10">Soluciones Técnicas Escalables</span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ingeniero Fullstack especializado en arquitecturas de alto rendimiento con 6 años de experiencia
              desarrollando sistemas para más de 1M de usuarios. Certificado AWS y Scrum Master.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {skills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border-2 border-orange-50 hover:border-orange-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skillSet.icon}</span>
                  <h3 className="text-orange-600 text-xl font-semibold">{skillSet.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillSet.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-3 group"
                    >
                      <div className="h-2 w-2 bg-orange-400 rounded-full flex-shrink-0 transition-transform group-hover:scale-150"/>
                      <span className="text-gray-700 text-sm transition-colors group-hover:text-orange-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="p-8 bg-orange-50 rounded-xl border-2 border-orange-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-orange-500/10 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-orange-600 text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Logros Destacados</h3>
                </div>
                <ul className="space-y-4">
                  <li className="text-gray-600 flex items-start">
                    <span className="text-orange-500 mr-2">▹</span>
                    Arquitectura de sistema de pagos procesando $50M+ anuales
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="text-orange-500 mr-2">▹</span>
                    Migración exitosa a microservicios (15+ servicios)
                  </li>
                  <li className="text-gray-600 flex items-start">
                    <span className="text-orange-500 mr-2">▹</span>
                    Implementación de pipeline CI/CD reduciendo deployments en 70%
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="p-8 bg-orange-50 rounded-xl border-2 border-orange-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-orange-500/10 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-orange-600 text-2xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Impacto Medible</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border-2 border-orange-100">
                    <div className="text-3xl font-bold text-orange-600">40%</div>
                    <div className="text-sm text-gray-600">Reducción de latency</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border-2 border-orange-100">
                    <div className="text-3xl font-bold text-orange-600">15K+</div>
                    <div className="text-sm text-gray-600">Requests/segundo</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Methodology Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="border-b-4 border-orange-500 pb-2">Principios de Desarrollo</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Clean Code', 'Test-Driven Development', 'DevSecOps', 'SOLID Principles', 'KISS'].map((principle, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 bg-orange-500/10 text-orange-600 rounded-full border border-orange-200 hover:border-orange-300 transition-all"
                >
                  {principle}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;