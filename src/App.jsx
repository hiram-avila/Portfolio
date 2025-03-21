import { motion } from "framer-motion";
import AboutSection from "./components/AboutSection";
import AnimatedSection from "./components/AnimatedSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import CVModal from "./components/CVModal";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectsSection from "./components/ProjectsSection";
import ScrollParallax from "./components/ScrollParallax";
import ExperienceSection from "./components/ExperienceSection";

const App = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      </motion.div>
      <AnimatedSection />
      <CertificationsSection />
      <ProjectCard />
      <ProjectsSection />
      <ScrollParallax />
      <ExperienceSection />
      <CVModal />
    </div>
  );
};

export default App;
