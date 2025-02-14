import React from 'react';

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <iframe
          src="/mi-cv.pdf" // Actualiza esta ruta según la ubicación de tu CV
          className="w-full h-[80vh]"
          title="Previsualización del CV"
        />
      </div>
    </div>
  );
};

export default CVModal;
