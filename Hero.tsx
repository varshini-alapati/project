import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex flex-col justify-center items-center pt-16 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-secondary-100 rounded-full opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-medium text-primary-600 mb-2"></h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Varshini Alapati
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              Aspiring Data Science student | Designer 
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto md:mx-0 mb-8">
              A curious mind with a drive for learning and growth. Passionate about solving problems with data and creating impactful solutions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-md hover:bg-primary-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg shadow-md border border-primary-200 hover:bg-primary-50 transition-colors flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="Varshini Alapati" 
                alt=   "Alapati Varshini  " 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow focus:outline-none"
          aria-label="Scroll down"
        >
          <ChevronDown size={20} className="text-primary-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;