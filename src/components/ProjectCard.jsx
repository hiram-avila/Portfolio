import { motion } from 'framer-motion';

export default function ProjectCard({ projectName, projectDescription, imageUrl }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 z-30"
    >
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{projectName}</h3>
        <p className="text-gray-600">{projectDescription}</p>
      </div>
    </motion.div>
  );
}
