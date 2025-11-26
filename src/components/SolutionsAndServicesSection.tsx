import React from 'react';
import { motion } from 'framer-motion';

export function SolutionsAndServicesSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Our Solutions and Services
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Our solutions categorised based on our metaphor 
            <br />
            <span className="text-white font-semibold">Intelligent Enterprise Solutions Model</span>
            <br />
            Six integrated layers powering tomorrow's AI-first enterprises.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-400 text-white text-lg font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            Explore Framework
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}