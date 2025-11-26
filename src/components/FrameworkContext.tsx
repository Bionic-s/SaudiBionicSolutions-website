import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, ChevronDown } from 'lucide-react';
import { Brain, Hand, Eye, Shield, Server } from 'lucide-react';
import { useState } from 'react';

interface FrameworkContextProps {
  currentLayer: {
    name: string;
    tagline: string;
    icon: React.ElementType;
    color: string;
  };
  contextDescription?: string;
}

const frameworkLayers = [
  { name: 'AI Systems', tagline: 'Intelligence Layer', icon: Brain, path: '/solutions/ai-systems', color: '#7C3AED' },
  { name: 'Automation', tagline: 'Process Layer', icon: Hand, path: '/solutions/automation', color: '#F59E0B' },
  { name: 'Data & Analytics', tagline: 'Insight Layer', icon: Eye, path: '/solutions/data-analytics', color: '#10B981' },
  { name: 'Service Management', tagline: 'Coordination Layer', icon: Network, path: '/solutions/service-management', color: '#EF4444' },
  { name: 'Cybersecurity & GRC', tagline: 'Protection Layer', icon: Shield, path: '/solutions/cybersecurity-grc', color: '#3B82F6' },
  { name: 'Infrastructure & Cloud', tagline: 'Foundation Layer', icon: Server, path: '/solutions/infrastructure-cloud', color: '#6B7280' },
];

export const FrameworkContext = ({ currentLayer, contextDescription }: FrameworkContextProps) => {
  const relatedLayers = frameworkLayers.filter(layer => layer.name !== currentLayer.name);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-h3 font-semibold mb-4">
            Part of the Intelligent Enterprise Solutions Model
          </h3>
          <p className="text-body text-text-muted max-w-3xl mx-auto">
            <span className="text-accent-primary font-semibold">{currentLayer.name} — {currentLayer.tagline}</span> is part of our Intelligent Enterprise Solutions Model that delivers end-to-end visibility and real-time actionable business insight. Our comprehensive approach ensures your technology investments deliver measurable competitive advantage.
          </p>
          {contextDescription && (
            <div className="mt-6 text-left max-w-4xl mx-auto">
              <button
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                className="w-full bg-bg-secondary/50 border border-white/10 rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300 group"
                aria-expanded={isAccordionOpen}
                aria-label="Toggle framework details"
              >
                <div className="flex items-center justify-between">
                  <p className="text-text-muted text-left flex-1 pr-4">
                    Learn how {currentLayer.name} integrates with the complete Intelligent Enterprise Solutions Model
                  </p>
                  <motion.div
                    animate={{ rotate: isAccordionOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent-primary group-hover:text-accent-primary/80" />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {isAccordionOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-bg-secondary/30 border border-white/10 border-t-0 rounded-b-lg px-6 py-5">
                      <p className="text-text-muted leading-relaxed">
                        {contextDescription}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>

        {/* Current Layer Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-bg-secondary border-2 border-accent-primary rounded-xlarge p-8 mb-8"
        >
          <div className="flex items-center justify-center space-x-4">
            <div 
              className="w-16 h-16 rounded-large flex items-center justify-center"
              style={{ backgroundColor: `${currentLayer.color}20` }}
            >
              <currentLayer.icon className="w-8 h-8" style={{ color: currentLayer.color }} />
            </div>
            <div className="text-left">
              <div className="text-h4 font-semibold">
                {currentLayer.name} — <span className="text-accent-primary">{currentLayer.tagline}</span>
              </div>
              <div className="text-small text-text-muted">You are here</div>
            </div>
          </div>
        </motion.div>

        {/* Other Framework Layers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {relatedLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link to={layer.path}>
                  <motion.div
                    className="bg-bg-secondary border border-white/10 rounded-large p-4 hover:border-accent-primary/50 transition-all duration-300 group text-center h-full"
                    whileHover={{ y: -4 }}
                  >
                    <div 
                      className="w-10 h-10 rounded-medium flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: `${layer.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: layer.color }} />
                    </div>
                    <div className="text-sm font-semibold mb-1 group-hover:text-accent-primary transition-colors">
                      {layer.name}
                    </div>
                    <div className="text-xs text-accent-primary">{layer.tagline}</div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View Complete Framework CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link to="/framework">
            <motion.button
              className="inline-flex items-center space-x-2 px-8 py-3 border-2 border-accent-primary text-accent-primary font-semibold rounded-medium hover:bg-accent-primary hover:text-text-primary transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Complete Framework</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
