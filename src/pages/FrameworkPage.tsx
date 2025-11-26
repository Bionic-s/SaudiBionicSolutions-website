import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Rocket, Target, Zap } from 'lucide-react';
import { ServicesEnhanced } from '../components/ServicesEnhanced';

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-accent-primary/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-accent-primary hover:text-accent-primary/80 transition-colors group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
              <span className="text-h5 font-medium">Back to Home</span>
            </Link>
          </motion.div>

          {/* Header Content */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-accent-primary/10 rounded-full mb-6"
            >
              <Rocket className="w-8 h-8 text-accent-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-h1 md:text-[52px] lg:text-[64px] font-bold mb-6"
            >
              The Bionic Enterprise{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-primary/70">
                Framework
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-h4 md:text-h3 lg:text-h3 text-text-muted mb-8 max-w-3xl mx-auto"
            >
              An operational intelligence and AI transformation framework. Our comprehensive approach integrates Infrastructure & Service Management with AI, Data Analytics, Automation, and Cybersecurity to deliver end-to-end visibility and real-time actionable business insight that improves competitiveness.
            </motion.p>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
            >
              <div className="flex items-center justify-center space-x-3 text-text-muted">
                <Target className="w-5 h-5 text-accent-primary" />
                <span className="text-tiny">Purpose-Built Architecture</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-text-muted">
                <Zap className="w-5 h-5 text-accent-primary" />
                <span className="text-tiny">AI-First Design</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-text-muted">
                <Rocket className="w-5 h-5 text-accent-primary" />
                <span className="text-tiny">Future-Ready Solutions</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Framework Content */}
      <ServicesEnhanced />

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6">
              Ready to Build Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-primary/70">
                Bionic Enterprise
              </span>
              ?
            </h2>
            <p className="text-h4 md:text-h3 lg:text-h3 text-text-muted mb-8">
              Transform your organization with our proven framework. 
              Let's discuss how to implement these integrated layers in your enterprise.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent-primary text-text-primary font-semibold rounded-full relative overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary/80 to-accent-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
                <span className="relative z-10">Start Your Transformation</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
