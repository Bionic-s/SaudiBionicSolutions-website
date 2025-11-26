import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function SolutionsHubVisual() {

  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
          >
            Intelligent Enterprise Solutions Model
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-h4 md:text-h3 lg:text-h3 text-text-muted mb-4 max-w-4xl mx-auto"
          >
            Six integrated layers powering tomorrow's AI-first enterprises
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-body text-text-muted max-w-3xl mx-auto"
          >
            A comprehensive enterprise intelligence model that integrates Infrastructure & Service Management with AI, Data Analytics, Automation, and Cybersecurity to deliver end-to-end visibility and real-time actionable business insight.
          </motion.p>
        </div>

        {/* Visual Diagram */}
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center w-full"
          >
            <img
              src="/images/intelligent-enterprise-solutions-model.png"
              alt="Bionic Solutions' Intelligent Enterprise Solutions Model - Six integrated layers powering AI-first enterprises"
              className="w-11/12 md:w-3/4 lg:w-1/2 h-auto rounded-lg shadow-2xl border border-white/10 block mx-auto"
            />
          </motion.div>
        </div>

        {/* View Complete Framework CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="https://pbhovkqw1j8o.space.minimax.io/solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-8 py-3 border-2 border-accent-primary text-accent-primary font-semibold rounded-medium relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.span
                className="absolute inset-0 bg-accent-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
              <span className="relative z-10 group-hover:text-text-primary transition-colors">
                View Intelligent Enterprise Solutions
              </span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}