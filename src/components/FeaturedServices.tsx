import { motion } from 'framer-motion';
import { Brain, Hand, Eye, Workflow, Shield, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export const FeaturedServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Brain,
      title: 'AI Systems',
      subtitle: 'Intelligence Layer of the Intelligent Enterprise',
      description: 'Build intelligence that learns, predicts, and adapts with next-generation AI technologies.',
      technologies: ['AI/ML Frameworks', 'LangChain', 'Deep Learning', 'AI Platforms'],
      layer: 'Intelligence Layer',
      image: '/images/ai-cube-specialized.avif',
    },
    {
      icon: Hand,
      title: 'Automation',
      subtitle: 'The Engine of Efficiency',
      description: 'Automate with precision and speed using cutting-edge automation technologies.',
      technologies: ['Enterprise RPA', 'Cloud Automation', 'Process Automation', 'Integration Platform'],
      layer: 'Process Layer',
      image: '/images/abstract-patterns.avif',
    },
    {
      icon: Eye,
      title: 'Data & Analytics',
      subtitle: 'The Foundation for Intelligent Decision-Making',
      description: 'See clearly, decide intelligently with comprehensive data and analytics platforms.',
      technologies: ['Enterprise ERP', 'Business Intelligence', 'Visual Analytics', 'Graph Database'],
      layer: 'Insight Layer',
      image: '/images/data-analytics.avif',
    },
    {
      icon: Workflow,
      title: 'Enterprise Service Management',
      subtitle: 'Digitize, Align, and Connect Every Workflow',
      description: 'Bridge execution with intelligence through seamless enterprise service management.',
      technologies: ['Service Management', 'Business Platform', 'Workflow Management', 'Cloud ITSM'],
      layer: 'Coordination Layer',
      image: '/images/it-infrastructure.avif',
    },
    {
      icon: Shield,
      title: 'Cybersecurity & GRC',
      subtitle: 'Trust, Compliance, and Resilience Built In',
      description: 'Defend the enterprise and ensure trust with AI-powered security solutions.',
      technologies: ['SIEM', 'SOAR', 'Endpoint Protection', 'Security Analytics'],
      layer: 'Protection Layer',
      image: '/images/cybersecurity-shield.avif',
    },
    {
      icon: Cloud,
      title: 'Digital Infrastructure & Cloud',
      subtitle: 'The Backbone of the Intelligent Enterprise',
      description: 'Build scalable, AI-optimized digital foundations for the future.',
      technologies: ['Cloud Platform', 'Cloud Infrastructure', 'Container Orchestration', 'Infrastructure as Code'],
      layer: 'Foundation Layer',
      image: '/images/cloud-computing.avif',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="featured-services" className="py-24 md:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-4"
          >
            Intelligent Enterprise Solutions Model
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h4 md:text-h3 lg:text-h3 text-text-muted max-w-3xl mx-auto mb-8"
          >
            Six integrated layers powering tomorrow's AI-first enterprises
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/framework">
              <motion.div
                className="inline-block px-8 py-3 border-2 border-accent-primary text-accent-primary font-semibold rounded-medium relative overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-accent-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
                <span className="relative z-10 group-hover:text-text-primary transition-colors">
                  Explore Framework
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-bg-secondary rounded-xlarge p-8 border border-white/5 relative overflow-hidden group"
              whileHover={{ y: -8, borderColor: 'rgba(0, 191, 255, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 via-accent-primary/10 to-accent-primary/0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="mb-6 relative h-48 rounded-large overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
                </motion.div>

                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-accent-primary/10 rounded-medium flex items-center justify-center"
                    whileHover={{
                      backgroundColor: 'rgba(0, 191, 255, 0.2)',
                      rotate: 5,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <service.icon className="w-6 h-6 text-accent-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-h4 md:text-h3 lg:text-h3 font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-tiny text-accent-primary">{service.subtitle}</p>
                    <p className="text-tiny text-text-muted mt-1">{service.layer}</p>
                  </div>
                </div>

                <p className="text-body text-text-muted mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 191, 255, 0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
