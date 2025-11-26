import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { FrameworkGuideModal } from '../components/FrameworkGuideModal';

export default function FreeEnterpriseFrameworkGuide() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Free Enterprise Framework
            <span className="block text-accent-primary">Guide</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto mb-12">
            Download our comprehensive guide on AI-driven enterprise transformation. Learn proven strategies from our research and methodology.
          </p>
        </motion.div>

        {/* Main Guide Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-bg-secondary border border-white/10 rounded-xlarge p-8 md:p-12 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary" />

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-20 h-20 bg-accent-primary/10 rounded-full flex items-center justify-center mb-6"
                  >
                    <Download className="w-10 h-10 text-accent-primary" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Enterprise Framework Guide</h3>
                  <p className="text-lg text-text-muted mb-6">
                    Download our comprehensive guide on AI-driven enterprise transformation. Learn proven strategies from our research and methodology.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      'AI implementation roadmap',
                      'ROI calculation framework',
                      'Risk mitigation strategies',
                      'Case studies and benchmarks',
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-accent-primary rounded-full" />
                        <span className="text-body text-text-primary">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-secondary hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Free Guide</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-xlarge p-8 backdrop-blur-sm"
                  >
                    <div className="aspect-[3/4] bg-bg-primary rounded-medium border border-white/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl font-bold text-accent-primary mb-4">8</div>
                        <div className="text-xl md:text-2xl text-text-muted">Pages of Expert Insights</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 border border-white/10 rounded-xlarge p-8 md:p-12 mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why Download This Guide?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Framework</h3>
              <p className="text-text-muted">Battle-tested methodology from real enterprise transformations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent-secondary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">ROI Calculations</h3>
              <p className="text-text-muted">Quantify the business impact and justify your AI investments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Risk Mitigation</h3>
              <p className="text-text-muted">Avoid common pitfalls and ensure successful implementation</p>
            </div>
          </div>
        </motion.div>

        {/* Related Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Enterprise?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-secondary hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Schedule Discovery Call
            </a>
            <a
              href="/case-studies"
              className="inline-block px-8 py-4 border-2 border-accent-primary text-accent-primary font-semibold rounded-medium hover:bg-accent-primary hover:text-text-primary hover:-translate-y-1 transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>

      <FrameworkGuideModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}