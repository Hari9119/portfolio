import HeroText from "../components/HeroText";
import NeuralNetworkBackground from "../components/NeuralNetworkBackground";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space relative">
      <NeuralNetworkBackground />
      <HeroText />
      {/* User Photo */}
      <div className="absolute right-0 top-0 hidden md:block w-1/2 h-full flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full h-full"
        >
          <img
            src="/assets/haritha-photo.png"
            alt="Haritha Bandhanatham"
            className="w-full h-full object-cover"
            style={{ 
              maskImage: 'linear-gradient(to left, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl border-4 border-blue-500 text-center px-4">
            <p className="text-white">Add your photo to:<br/>public/assets/haritha-photo.png</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
