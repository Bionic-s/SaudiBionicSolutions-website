import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FrameworkContext } from './FrameworkContext';

interface ValueProp {
  metric: string;
  label: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  features: string[];
}

interface Technology {
  name: string;
  category: string;
}

interface IndustryApp {
  name: string;
  description: string;
}

interface RelatedCase {
  title: string;
  industry: string;
  industryColor: string;
  description: string;
  image: string;
  path: string;
}

interface Architecture {
  title: string;
  description: string;
  flow: string;
  components: string[];
}

interface SolutionPageProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  headline?: string;
  color: string;
  description: string;
  frameworkContext?: string;
  valuePropositions: ValueProp[];
  services: Service[];
  architecture?: Architecture;
  technologies: Technology[];
  industries: IndustryApp[];
  relatedCases: RelatedCase[];
}

export default function SolutionPageTemplate({
  icon: Icon,
  name,
  tagline,
  headline,
  color,
  description,
  frameworkContext,
  valuePropositions,
  services,
  architecture,
  technologies,
  industries,
  relatedCases,
}: SolutionPageProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isFlowAccordionOpen, setIsFlowAccordionOpen] = useState(false);
  const [isComponentsAccordionOpen, setIsComponentsAccordionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
              <Icon className="w-8 h-8" style={{ color }} />
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Intelligent Enterprise Solutions Model</p>
              <h1 className="text-4xl md:text-5xl font-bold" style={{ color }}>
                {name} — {tagline}
              </h1>
            </div>
          </div>
          {headline && (
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
              {headline}
            </h2>
          )}
          <p className="text-xl text-text-muted max-w-4xl">
            {description}
          </p>
        </motion.div>

        {/* Service Offerings */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Core Service Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-bg-secondary border-l-4 rounded-lg p-8" style={{ borderLeftColor: color }}>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-muted mb-4">{service.description}</p>
                <ul className="space-y-2 text-text-muted">
                  {service.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Framework Context */}
        <FrameworkContext 
          currentLayer={{ name, tagline, icon: Icon, color }} 
          contextDescription={frameworkContext}
        />

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {valuePropositions.map((prop, idx) => (
            <div key={idx} className="bg-bg-secondary border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color }}>{prop.metric}</h3>
              <p className="text-lg font-semibold mb-2">{prop.label}</p>
              <p className="text-text-muted text-sm">{prop.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Architecture & Technical Depth */}
        {architecture && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{architecture.title}</h2>
            <p className="text-lg text-text-muted mb-8 max-w-4xl">
              {architecture.description}
            </p>
            
            {/* Coordination Flow Accordion */}
            <div className="mb-8">
              <button
                onClick={() => setIsFlowAccordionOpen(!isFlowAccordionOpen)}
                className="w-full bg-bg-secondary border border-white/10 rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300 group"
                aria-expanded={isFlowAccordionOpen}
                aria-label="Toggle coordination flow details"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-left flex-1 pr-4" style={{ color }}>
                    Coordination Flow Architecture
                  </h3>
                  <motion.div
                    animate={{ rotate: isFlowAccordionOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent-primary group-hover:text-accent-primary/80" />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {isFlowAccordionOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-bg-secondary border border-white/10 border-t-0 rounded-b-lg p-6">
                      <div className="font-mono text-sm text-text-muted bg-bg-primary/50 p-6 rounded-lg overflow-x-auto">
                        {architecture.flow}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Key Components Accordion */}
            <div>
              <button
                onClick={() => setIsComponentsAccordionOpen(!isComponentsAccordionOpen)}
                className="w-full bg-bg-secondary border border-white/10 rounded-lg p-6 hover:border-accent-primary/50 transition-all duration-300 group"
                aria-expanded={isComponentsAccordionOpen}
                aria-label="Toggle key components details"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-left flex-1 pr-4" style={{ color }}>
                    Technical Components & Integration Points
                  </h3>
                  <motion.div
                    animate={{ rotate: isComponentsAccordionOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent-primary group-hover:text-accent-primary/80" />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence>
                {isComponentsAccordionOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-bg-secondary border border-white/10 border-t-0 rounded-b-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {architecture.components.map((component, idx) => {
                          const [title, ...descParts] = component.split(':');
                          const desc = descParts.join(':').trim();
                          return (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: color }}></div>
                              <div>
                                <span className="font-semibold">{title}:</span>
                                <span className="text-text-muted"> {desc}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Technology Stack</h2>
          <p className="text-lg text-text-muted mb-8">
            We work with leading technology platforms and frameworks to deliver enterprise-grade solutions.
          </p>
          <div className="bg-bg-secondary rounded-lg p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg font-semibold mb-1">{tech.name}</div>
                  <div className="text-sm text-text-muted">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industry Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-bg-secondary rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                <p className="text-text-muted text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCases.map((relatedCase, idx) => (
              <Link
                key={idx}
                to={relatedCase.path}
                className="group bg-bg-secondary rounded-xlarge overflow-hidden border border-white/5 hover:border-accent-primary transition-all duration-300 hover:-translate-y-2"
              >
                <img src={relatedCase.image} alt={relatedCase.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span 
                    className="px-3 py-1 text-xs font-semibold rounded-full"
                    style={{ backgroundColor: `${relatedCase.industryColor}20`, color: relatedCase.industryColor }}
                  >
                    {relatedCase.industry}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-accent-primary transition-colors">
                    {relatedCase.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">{relatedCase.description}</p>
                  <div className="flex items-center text-accent-primary font-semibold">
                    <span>Read Case Study</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center rounded-xlarge p-12"
          style={{ background: `linear-gradient(to right, ${color}10, ${color}05)` }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Transformation</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            Begin your transformation journey and explore how {name} can deliver measurable business outcomes for your enterprise.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-1 hover:shadow-button transition-all duration-300"
          >
            Start Your Transformation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
