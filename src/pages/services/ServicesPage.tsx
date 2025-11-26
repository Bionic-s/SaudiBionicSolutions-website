import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Layers, Brain, Target, RefreshCw, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Enterprise Integration & Architecture',
    description: 'Seamless integration and architecture services enabling unified, intelligent enterprise ecosystems.',
    path: '/services/enterprise-integration',
    color: '#7C3AED',
    highlights: ['Cloud Integration', 'API & Middleware', 'System Unification', 'Infrastructure Design'],
  },
  {
    icon: Brain,
    title: 'AI Systems & Professional Services',
    description: 'AI consulting, systems implementation, automation, analytics, cybersecurity professional services, and enterprise platform delivery.',
    path: '/services/professional-services-ai',
    color: '#00BFFF',
    highlights: ['AI Implementation', 'Automation', 'Analytics', 'Cybersecurity Services'],
  },
  {
    icon: Target,
    title: 'Strategy & Alignment Services',
    description: 'Strategic alignment of IT, data, and AI capabilities with business goals for competitive advantage.',
    path: '/services/it-business-strategy',
    color: '#10B981',
    highlights: ['IT Strategy', 'Data Strategy', 'Digital Roadmaps', 'Business Alignment'],
  },
  {
    icon: RefreshCw,
    title: 'Process Optimization & Redesign',
    description: 'Workflow transformation, automation enablement, and operational redesign for enterprise efficiency.',
    path: '/services/business-process-redesign',
    color: '#F59E0B',
    highlights: ['Workflow Analysis', 'Process Automation', 'Operational Redesign', 'Efficiency Gains'],
  },
];

export default function ServicesPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-[#0B0D10] text-white pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* AI-themed gradient banner */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/20 via-[#7C3AED]/20 to-[#00BFFF]/20 blur-3xl opacity-50"></div>
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#00BFFF] to-white bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-[#66B0F0] font-light mb-4">
                AI-Driven Enterprise Solutions
              </p>
            </div>
          </div>

          {/* Two-line description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
              Bionic Solutions delivers enterprise-level AI-driven consulting,
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              architecture, strategy, and process transformation.
            </p>
          </div>

          {/* Accent line */}
          <div className="w-24 h-1 bg-[#00BFFF] mx-auto mt-12"></div>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="block h-full bg-[#1A1D23] rounded-xl p-8 border-l-4 hover:-translate-y-2 transition-all duration-300 group"
                  style={{ borderLeftColor: service.color }}
                >
                  <div
                    className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00BFFF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.path}
                    className="inline-flex items-center font-semibold group-hover:translate-x-2 transition-transform"
                    style={{ color: service.color }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-gradient-to-r from-[#00BFFF]/10 to-[#7C3AED]/10 border border-[#00BFFF]/20 rounded-xl p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Bionic Solutions to implement AI-driven transformation that delivers measurable results for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export { ServicesPage };
