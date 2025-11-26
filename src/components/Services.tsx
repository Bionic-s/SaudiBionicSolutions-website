import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Hand, Eye, Workflow, Shield, Cloud, ChevronDown } from 'lucide-react';

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const frameworkLayers = [
    {
      icon: Brain,
      title: 'AI Systems',
      subtitle: 'Intelligence Layer',
      layer: 'Intelligence Layer',
      description: 'Build intelligence that learns, predicts, and adapts. Our AI systems are engineered to understand complex business contexts and make intelligent decisions that drive competitive advantage.',
      technologies: [
        { name: 'AI/ML Frameworks', desc: 'Advanced language models and conversational AI' },
        { name: 'LangChain', desc: 'Sophisticated AI application framework' },
        { name: 'Deep Learning', desc: 'Custom machine learning and deep learning solutions' },
        { name: 'AI Platforms', desc: 'Unified machine learning platform' },
      ],
      useCases: [
        'Predictive analytics and forecasting',
        'Intelligent document processing',
        'Automated decision-making systems',
        'Natural language understanding and generation',
      ],
    },
    {
      icon: Hand,
      title: 'Automation',
      subtitle: 'Process Layer',
      layer: 'Execution Layer',
      description: 'Automate with precision and speed. Transform manual processes into seamless, intelligent workflows that operate 24/7 with unprecedented accuracy and efficiency.',
      technologies: [
        { name: 'Enterprise RPA', desc: 'Enterprise RPA and process automation' },
        { name: 'Intelligent Automation', desc: 'Intelligent automation platform' },
        { name: 'Low-Code Automation', desc: 'Low-code automation solution' },
        { name: 'Workflow Automation', desc: 'Visual workflow automation platform' },
      ],
      useCases: [
        'End-to-end process automation',
        'Robotic process automation (RPA)',
        'Intelligent document processing',
        'Cross-system data integration',
      ],
    },
    {
      icon: Eye,
      title: 'Data, Analytics & ERP',
      subtitle: 'Insight Layer',
      layer: 'Insight Layer',
      description: 'See clearly, decide intelligently. Transform raw data into actionable insights that power AI-driven decision making across your entire enterprise ecosystem.',
      technologies: [
        { name: 'Enterprise ERP', desc: 'Next-generation ERP suite' },
        { name: 'Cloud ERP', desc: 'Integrated enterprise resource planning' },
        { name: 'Business Applications', desc: 'Intelligent business applications' },
        { name: 'Business Intelligence', desc: 'Data visualization and reporting' },
        { name: 'Visual Analytics', desc: 'Advanced data visualization platform' },
        { name: 'Data Virtualization', desc: 'Data virtualization and integration' },
        { name: 'Advanced Analytics', desc: 'Advanced data preparation and analytics' },
        { name: 'Graph Database', desc: 'Native graph database platform' },
      ],
      useCases: [
        'Real-time business intelligence dashboards',
        'Advanced predictive analytics',
        'Enterprise data integration and consolidation',
        'Performance management and KPI tracking',
      ],
    },
    {
      icon: Workflow,
      title: 'Enterprise Service Management',
      subtitle: 'Coordination Layer',
      layer: 'Workflow Alignment Layer',
      description: 'Digitize, align, and connect every workflow. Bridge execution with intelligence through seamless enterprise service management that ensures optimal performance across all departments.',
      technologies: [
        { name: 'Enterprise Service Mgmt', desc: 'Enterprise service management platform' },
        { name: 'Low-Code Platform', desc: 'Low-code application platform' },
        { name: 'Work Management', desc: 'Work operating system for teams' },
        { name: 'Cloud ITSM', desc: 'IT service management solution' },
      ],
      useCases: [
        'IT service management optimization',
        'HR service delivery automation',
        'Cross-departmental workflow orchestration',
        'Service catalog and request management',
      ],
    },
    {
      icon: Shield,
      title: 'Cybersecurity & GRC',
      subtitle: 'Protection Layer',
      layer: 'Trust & Protection Layer',
      description: 'Defend the enterprise and ensure trust. AI is only as strong as the trust and security foundation beneath it. Our comprehensive cybersecurity framework protects your entire digital ecosystem.',
      technologies: [
        { name: 'SIEM', desc: 'Security information and event management' },
        { name: 'SOAR', desc: 'Security orchestration and automated response' },
        { name: 'Endpoint Protection', desc: 'Next-generation endpoint protection' },
        { name: 'IBM QRadar', desc: 'SIEM and threat detection platform' },
        { name: 'ISO 27001 Frameworks', desc: 'Information security management standards' },
      ],
      useCases: [
        'Real-time threat detection and response',
        'Security compliance and governance',
        'Risk assessment and vulnerability management',
        'Incident response automation',
      ],
    },
    {
      icon: Cloud,
      title: 'Digital Infrastructure & Cloud',
      subtitle: 'Foundation Layer',
      layer: 'Foundation Layer',
      description: 'Build scalable, AI-optimized digital foundations. Our cloud-first approach ensures scalable, secure, and high-performance computing environments optimized for AI workloads and enterprise growth.',
      technologies: [
        { name: 'Cloud Infrastructure', desc: 'Cloud platform' },
        { name: 'Microsoft Cloud', desc: 'Cloud computing platform' },
        { name: 'Cloud Computing Services', desc: 'Cloud computing services' },
        { name: 'Container Orchestration', desc: 'Container orchestration platform' },
        { name: 'Virtualization', desc: 'Virtualization and cloud infrastructure' },
        { name: 'Infrastructure as Code', desc: 'Infrastructure as code platform' },
      ],
      useCases: [
        'Multi-cloud strategy and optimization',
        'AI infrastructure and MLOps',
        'Scalable data processing environments',
        'DevOps and continuous integration pipelines',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-bg-primary relative">
      <div className="container mx-auto px-4 lg:px-12">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
          >
            Intelligent Enterprise Solutions Model
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h4 md:text-h3 lg:text-h3 text-text-muted max-w-4xl mx-auto leading-relaxed"
          >
            Six integrated layers powering tomorrow's AI-first enterprises.
          </motion.p>
        </div>

        <div className="space-y-6">
          {frameworkLayers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-bg-secondary rounded-xlarge border border-white/5 overflow-hidden hover:border-accent-primary transition-colors duration-300"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-accent-primary/10 rounded-large flex items-center justify-center flex-shrink-0">
                    <layer.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="text-h3 md:text-h3 lg:text-h3 font-semibold">
                        {layer.title}
                      </h3>
                      <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm rounded-full">
                        {layer.layer}
                      </span>
                    </div>
                    <p className="text-body text-accent-primary">{layer.subtitle}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-accent-primary transition-transform duration-300 flex-shrink-0 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="border-t border-white/5 pt-6">
                        <p className="text-body text-text-muted mb-8">{layer.description}</p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-h4 font-semibold mb-4 text-accent-primary">Technologies</h4>
                            <div className="space-y-3">
                              {layer.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: techIndex * 0.05 }}
                                  className="flex items-start space-x-3 p-3 bg-bg-primary rounded-large"
                                >
                                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                                  <div>
                                    <div className="text-body font-semibold">{tech.name}</div>
                                    <div className="text-small text-text-muted">{tech.desc}</div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-h4 font-semibold mb-4 text-accent-primary">Use Cases</h4>
                            <div className="space-y-3">
                              {layer.useCases.map((useCase, useCaseIndex) => (
                                <motion.div
                                  key={useCaseIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: useCaseIndex * 0.05 }}
                                  className="flex items-start space-x-3 p-3 bg-bg-primary rounded-large"
                                >
                                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                                  <div className="text-body text-text-muted">{useCase}</div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
