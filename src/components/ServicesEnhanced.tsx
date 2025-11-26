import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Hand, Eye, Workflow, Shield, Cloud, ChevronDown, Zap, Target, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesEnhanced = () => {
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
      color: '#ff6b6b',
      path: '/solutions/ai-systems',
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
      color: '#4ecdc4',
      path: '/solutions/automation',
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
      ],
      useCases: [
        'Real-time business intelligence dashboards',
        'Advanced predictive analytics',
        'Enterprise data integration and consolidation',
        'Performance management and KPI tracking',
      ],
      color: '#45b7d1',
      path: '/solutions/data-analytics',
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
      color: '#96ceb4',
      path: '/solutions/service-management',
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
      ],
      useCases: [
        'Real-time threat detection and response',
        'Security compliance and governance',
        'Risk assessment and vulnerability management',
        'Incident response automation',
      ],
      color: '#ffeaa7',
      path: '/solutions/cybersecurity-grc',
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
      ],
      useCases: [
        'Multi-cloud strategy and optimization',
        'AI infrastructure and MLOps',
        'Scalable data processing environments',
        'DevOps and continuous integration pipelines',
      ],
      color: '#fd79a8',
      path: '/solutions/infrastructure-cloud',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: any = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const iconVariants: any = {
  hidden: { scale: 0.9, rotate: -3 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

  return (
    <section id="services-enhanced" className="py-24 md:py-32 bg-bg-primary relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
          >
            The Intelligent Enterprise Solutions Model
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-h4 md:text-h3 lg:text-h3 text-text-muted max-w-4xl mx-auto leading-relaxed"
          >
            Six integrated layers powering tomorrow's AI-first enterprises.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-6"
        >
          {frameworkLayers.map((layer, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-bg-secondary rounded-xlarge border border-white/5 overflow-hidden hover:border-accent-primary/50 transition-all duration-500 relative">
                {/* Animated border glow */}
                <div 
                  className="absolute inset-0 rounded-xlarge opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, ${layer.color}40, transparent, ${layer.color}40)`,
                    padding: '2px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                  }}
                />
                
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-colors relative z-10"
                >
                  <div className="flex items-center space-x-6">
                    <motion.div
                      variants={iconVariants}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-large flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${layer.color}20, ${layer.color}10)`,
                        boxShadow: `0 0 20px ${layer.color}20`,
                      }}
                    >
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle, ${layer.color}30 0%, transparent 70%)`,
                        }}
                      />
                      <layer.icon className="w-8 h-8 text-accent-primary relative z-10" />
                    </motion.div>
                    <div className="text-left">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-h3 md:text-h3 lg:text-h3 font-semibold group-hover:text-accent-secondary transition-colors duration-300">
                          {layer.title}
                        </h3>
                        <motion.span 
                          className="px-3 py-1 text-sm rounded-full relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${layer.color}20, ${layer.color}10)`,
                            color: layer.color,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {layer.layer}
                        </motion.span>
                      </div>
                      <p className="text-body text-accent-primary group-hover:text-accent-primary transition-colors duration-300">{layer.subtitle}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <ChevronDown className="w-6 h-6 text-accent-primary flex-shrink-0" />
                    {/* Particle effect around chevron */}
                    <motion.div
                      className="absolute -inset-2 rounded-full"
                      animate={{
                        scale: expandedIndex === index ? [1, 1.5, 1] : 1,
                        opacity: expandedIndex === index ? [0.5, 0, 0.5] : 0,
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{
                        background: `radial-gradient(circle, ${layer.color}50 0%, transparent 70%)`,
                      }}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, 
                        ease: "easeInOut"
                       }}
                      className="overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      <div className="px-8 pb-8 relative z-10">
                        <div className="border-t border-white/5 pt-6">
                          <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-body text-text-muted mb-8"
                          >
                            {layer.description}
                          </motion.p>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <motion.div
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="flex items-center space-x-2 mb-4">
                                <Zap className="w-5 h-5 text-accent-primary" />
                                <h4 className="text-h4 font-semibold text-accent-primary">Technologies</h4>
                              </div>
                              <div className="space-y-3">
                                {layer.technologies.map((tech, techIndex) => (
                                  <motion.div
                                    key={techIndex}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + techIndex * 0.05 }}
                                    className="flex items-start space-x-3 p-3 bg-bg-primary rounded-large hover:bg-white/5 transition-colors group/tech"
                                    whileHover={{ x: 5 }}
                                  >
                                    <motion.div 
                                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                      style={{ backgroundColor: layer.color }}
                                      whileHover={{ scale: 1.5 }}
                                    />
                                    <div>
                                      <div className="text-body font-semibold group-hover/tech:text-accent-secondary transition-colors duration-300">
                                        {tech.name}
                                      </div>
                                      <div className="text-small text-text-muted">{tech.desc}</div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>

                            <motion.div
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="flex items-center space-x-2 mb-4">
                                <Target className="w-5 h-5 text-accent-primary" />
                                <h4 className="text-h4 font-semibold text-accent-primary">Use Cases</h4>
                              </div>
                              <div className="space-y-3">
                                {layer.useCases.map((useCase, useCaseIndex) => (
                                  <motion.div
                                    key={useCaseIndex}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + useCaseIndex * 0.05 }}
                                    className="flex items-start space-x-3 p-3 bg-bg-primary rounded-large hover:bg-white/5 transition-colors group/case"
                                    whileHover={{ x: 5 }}
                                  >
                                    <motion.div 
                                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                      style={{ backgroundColor: layer.color }}
                                      whileHover={{ scale: 1.5 }}
                                    />
                                    <div className="text-body text-text-muted group-hover/case:text-text-primary transition-colors duration-300">
                                      {useCase}
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>

                          {/* Explore This Layer CTA */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8 pt-6 border-t border-white/5"
                          >
                            <Link to={layer.path}>
                              <motion.button
                                className="flex items-center space-x-2 px-6 py-3 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary transition-all duration-300 group/btn"
                                whileHover={{ x: 5, boxShadow: `0 10px 30px ${layer.color}40` }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <Rocket className="w-5 h-5" />
                                <span>Explore {layer.title} Solutions</span>
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </motion.button>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};