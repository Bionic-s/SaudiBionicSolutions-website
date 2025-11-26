import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Brain, Hand, Eye, Network, Shield, Server, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Server,
    name: 'Infrastructure & Cloud',
    tagline: 'Foundation Layer',
    description: 'The operational foundation that enables intelligent transformation. While competitors focus on solutions in isolation, we ensure your technology infrastructure supports real business outcomes and enables AI deployment.',
    path: '/solutions/infrastructure-cloud',
    color: '#3B82F6',
    highlights: ['Cloud Architecture', 'Operational Foundation', 'AI Infrastructure', 'Real Business Outcomes'],
  },
  {
    icon: Network,
    name: 'Service Management',
    tagline: 'Operational Framework',
    description: 'The service framework that enables operational intelligence and IT monitoring. Build comprehensive visibility and management across your infrastructure to achieve end-to-end business insight.',
    path: '/solutions/service-management',
    color: '#EF4444',
    highlights: ['IT Service Management', 'Operational Intelligence', 'IT Monitoring', 'Service Orchestration'],
  },
  {
    icon: Brain,
    name: 'Artificial Intelligence',
    tagline: 'Intelligence Layer',
    description: "AI that enhances organizational workflows by blending technologies with business operations. Improve efficiency and integration to increase operational capabilities across diverse data types.",
    path: '/solutions/ai-systems',
    color: '#7C3AED',
    highlights: ['ML & Predictive Analytics', 'Business Enhancement', 'Operational Intelligence', 'Data Integration'],
  },
  {
    icon: Eye,
    name: 'Data Analytics',
    tagline: 'Insight Layer',
    description: 'Aggregate and analyze all organizational data - Business Data, IT Infrastructure Data, Log Data, and External Sources. Collaboratively processed to deliver real-time actionable business insight and improved competitiveness.',
    path: '/solutions/data-analytics',
    color: '#10B981',
    highlights: ['Data Aggregation', 'Business Intelligence', 'Real-Time Analytics', 'Competitive Insight'],
  },
  {
    icon: Hand,
    name: 'Automation',
    tagline: 'Process Layer',
    description: 'Create intelligent bots for automatic execution of business processes, enabling swift and precise operations. Empower human resources to work more efficiently and proactively through strategic automation.',
    path: '/solutions/automation',
    color: '#F59E0B',
    highlights: ['Process Automation', 'Intelligent Bots', 'Operational Efficiency', 'Human Empowerment'],
  },
  {
    icon: Shield,
    name: 'Cybersecurity',
    tagline: 'Protection Layer',
    description: 'Comprehensive cybersecurity analysis that protects applications and IT infrastructure. Monitor, analyze, and respond to security threats across all systems to ensure operational continuity and data protection.',
    path: '/solutions/cybersecurity-grc',
    color: '#8B5CF6',
    highlights: ['Security Analysis', 'Threat Detection', 'Infrastructure Protection', 'Operational Continuity'],
  },
];

export default function SolutionsHub() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Intelligent Enterprise
            <span className="block text-accent-primary">Solutions Model</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto mb-12">
            A comprehensive solutions model that integrates Infrastructure & Service Management with AI, Data Analytics, Automation, and Cybersecurity to deliver end-to-end visibility and real-time actionable business insight.
          </p>

          {/* Framework Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-bg-secondary rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-accent-primary mb-2">6</div>
              <div className="text-sm text-text-muted">Intelligent Enterprise Solutions Model Layers</div>
            </div>
            <div className="bg-bg-secondary rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-accent-primary mb-2">40-90%</div>
              <div className="text-sm text-text-muted">Time Reduction</div>
            </div>
            <div className="bg-bg-secondary rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-accent-primary mb-2">25-60%</div>
              <div className="text-sm text-text-muted">Cost Savings</div>
            </div>
            <div className="bg-bg-secondary rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-accent-primary mb-2">3-6mo</div>
              <div className="text-sm text-text-muted">ROI Timeline</div>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={solution.path}
                  className="block h-full bg-bg-secondary rounded-xlarge p-8 border-l-4 hover:-translate-y-2 transition-all duration-300 group"
                  style={{ borderLeftColor: solution.color }}
                >
                  <div
                    className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center"
                    style={{ backgroundColor: `${solution.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: solution.color }} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
                  <p className="text-text-muted text-sm mb-4 italic">{solution.tagline}</p>
                  <p className="text-text-muted mb-6">{solution.description}</p>

                  <div className="space-y-2 mb-6">
                    {solution.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: solution.color }} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform" style={{ color: solution.color }}>
                    <span>Explore Solution</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-xlarge p-12 mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Integrated Intelligent Enterprise Solutions Excellence</h2>
          <p className="text-lg text-text-muted text-center max-w-3xl mx-auto mb-8">
            Most AI implementations fail not because of technology, but because of the missing operational foundation. Infrastructure + Service Management = the missing piece that makes transformation actually work. Your AI investments only succeed with proper operational support.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary mb-2">Enterprise-Scale</div>
              <div className="text-sm text-text-muted">Proven at global scale</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary mb-2">Technology Agnostic</div>
              <div className="text-sm text-text-muted">Best-of-breed integrations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary mb-2">Measurable ROI</div>
              <div className="text-sm text-text-muted">Quantified outcomes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary mb-2">Rapid Deployment</div>
              <div className="text-sm text-text-muted">8-18 month timelines</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary mb-2">Industry Proven</div>
              <div className="text-sm text-text-muted">5+ verticals validated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-primary mb-2">24/7 Support</div>
              <div className="text-sm text-text-muted">Dedicated success team</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Enterprise Transformation?</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            Begin your transformation journey and explore how the Intelligent Enterprise Solutions Model can deliver measurable results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-1 hover:shadow-button transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <Link
              to="/case-studies"
              className="inline-block px-10 py-4 border-2 border-accent-primary text-accent-primary font-semibold rounded-full hover:bg-accent-primary hover:text-text-primary hover:-translate-y-1 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
