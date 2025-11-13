import { motion } from 'framer-motion';

export default function ProjectCard({ projectName, projectDescription, imageUrl }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className=""
      style={{
        isolation: 'isolate', // Crea nuevo contexto de apilamiento
        willChange: 'transform' // Optimiza animaciones
      }}
    >
      {/* Imagen con capa de protección */}
      <div 
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Contenido con máxima prioridad */}
      <div className="">
        <h3 className="text-xl font-bold  text-gray-900">{projectName}</h3>
        <p className="text-gray-600">{projectDescription}</p>
      </div>
    </motion.div>
  );
}