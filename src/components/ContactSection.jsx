import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  const contactRef = useRef(null);
  const inView = useInView(contactRef, { once: false, margin: "-200px" });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="contact" 
      ref={contactRef} 
      className="py-20 px-6 bg-gray-50 absolute"
    >
      <motion.div 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          Contacto
        </h2>
        <form className="space-y-6 mb-8">
          <input 
            type="email" 
            placeholder="Tu email" 
            className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 text-gray-900 placeholder-gray-400 transition-all"
          />
          <textarea 
            placeholder="Mensaje" 
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 text-gray-900 placeholder-gray-400 transition-all"
          />
          <button 
            type="submit" 
            className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            Enviar
          </button>
        </form>
        <p className="text-gray-600 mb-4">O si prefieres, envíame un correo directo:</p>
        <a 
          href="mailto:tucorreo@gmail.com" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Enviar correo
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;