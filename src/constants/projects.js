
const projects = [
  {
    id: 1,
    projectName: "SaaS Cultivate" ,
    projectDescription: "Pataforma diseñada para transformar la industria agrícola, conectando directamente a productores con compradores, eliminando intermediarios y optimizando la cadena de suministro.",
    imageUrl: "/src/assets/images/screenshots/cultivate.png",
    architectureImageUrl: "/src/assets/images/architecture/proyecto1.png", // Ruta de la imagen
    tags: ["Nextjs", "Node.js", "AWS", "SQL", "JWT", "Docker", "CI/CD"],
  },
  {
    id: 2,
    projectName: "E-commerce basado en microservicios con AWS",
    projectDescription: "Escalable y optimizado para alto tráfico con auto-scaling, balanceo de carga y caching inteligente. ",
    imageUrl: "/src/assets/images/screenshots/e-commerce.png",
    architectureImageUrl: "/src/assets/images/architecture/proyecto1.png", // Ruta de la imagen
    tags: ["React", "Node.js", "AWS","Docker", "SQL", "Redis","JWT","Stripe","CI/CD"],
  },
  {
    id: 3,
    projectName: "Arquitectura de Microservicios con AWS",
    projectDescription: "Sistema backend desacoplado mediante microservicios desplegados en ECS con balanceo de carga, comunicación segura vía API Gateway y escalabilidad automática. Incluye integración continua, monitoreo y despliegue sin downtime.",
    imageUrl: "/src/assets/images/screenshots/microservicios.png",
    architectureImageUrl: "/src/assets/images/architecture/proyecto1.png", // Ruta de la imagen
    tags: ["AWS", "ECS", "API Gateway", "Node.js", "Docker", "CI/CD", "JWT", "Microservices", ],
  }
  
];

export default projects;