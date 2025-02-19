import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mb-8"
          >
            <Code2 size={80} className="text-blue-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            ACM Chapter
          </h1>

          <div className="text-xl md:text-2xl mb-8 h-20 text-gray-300">
            <Typewriter
              options={{
                strings: [
                  'Empowering Innovators',
                  'Building the Future',
                  'One Line of Code at a Time'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
};

export default Hero;