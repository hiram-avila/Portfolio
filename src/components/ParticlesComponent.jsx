import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Cargar solo las funcionalidades necesarias

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  // Inicializar el motor de partículas
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Cargar solo las funcionalidades básicas
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Opciones de configuración de las partículas
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#d95a16", // Color de fondo (azul oscuro)
        },
      },
      fpsLimit: 120, // Límite de fotogramas por segundo
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "grab", // Las partículas se repelen al hacer clic
          },
          onHover: {
            enable: true,
            mode: 'repulse', // Las partículas se agrupan al pasar el mouse
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150, // Distancia de agarre
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Color de las partículas (blanco)
        },
        links: {
          color: "#FFFFFF", // Color de los enlaces entre partículas
          distance: 110, // Distancia máxima entre partículas para crear enlaces
          enable: true,
          opacity: 0.3, // Opacidad de los enlaces
          width: 1, // Grosor de los enlaces
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Las partículas rebotan en los bordes
          },
          random: true,
          speed: 2, // Velocidad de movimiento
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 350, // Número de partículas
        },
        opacity: {
          value: 1.0, // Opacidad de las partículas
        },
        shape: {
          type: "circle", // Forma de las partículas (círculos)
        },
        size: {
          value: { min: 1, max: 3 }, // Tamaño de las partículas
        },
      },
      detectRetina: true, // Optimización para pantallas Retina
    }),
    [],
  );

  // Renderizar el componente de partículas
  if (init) {
    return (
      <Particles
        id={props.id}
        options={options}
        style={{
          position: 'absolute', // Asegura que el canvas esté posicionado correctamente
          top: 0,
          left: 0,
          width: '100%', // Ocupa el 100% del ancho del contenedor
          height: '10%', // Ocupa el 100% de la altura del contenedor
        }}
      />
    );
  }

  return null; // No renderizar nada hasta que el motor esté listo
};

export default ParticlesComponent;