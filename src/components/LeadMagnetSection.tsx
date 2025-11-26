import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FrameworkGuideModal } from './FrameworkGuideModal';

interface LeadMagnetSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export const LeadMagnetSection = ({
  title = 'Get Your Free Enterprise Framework Guide',
  description = 'Download our comprehensive guide on AI-driven enterprise transformation. Learn proven strategies from our research and methodology.',
  buttonText = 'Download Free Guide',
}: LeadMagnetSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5">
        <div className="container mx-auto px-4 lg:px-12">
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

                  <h3 className="text-h2 font-bold mb-4">{title}</h3>
                  <p className="text-body text-text-muted mb-6">{description}</p>

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
                    <span>{buttonText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="relative hidden md:block">
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
                        <div className="text-h4 text-text-muted">Pages of Expert Insights</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FrameworkGuideModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
