import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, TrendingUp, Users, Building2, Shield, Zap, Download } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface CaseStudyDetailProps {
  capability: {
    id: string;
    capability_name: string;
    vendor: string[];
    category: string[];
    industry: string[];
    description: string;
    implementation_time: string;
    roi_range: string;
    image: string;
    industryColor: string;
  };
  content: {
    executive_summary: string;
    key_benefits: string[];
    technical_overview: {
      title: string;
      description: string;
      components: string[];
    };
    implementation_approach: {
      phases: Array<{
        phase: string;
        duration: string;
        activities: string[];
      }>;
    };
    roi_metrics: Array<{
      metric: string;
      value: string;
      description: string;
    }>;
    use_cases: Array<{
      industry: string;
      scenario: string;
      outcome: string;
    }>;
    vendor_ecosystem: {
      primary_vendors: string[];
      integrations: string[];
      certifications: string[];
    };
    why_bionic: string[];
  };
}

export default function VendorCaseStudyDetail({ capability, content }: CaseStudyDetailProps) {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 lg:px-12 mb-8">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <Link to="/" className="hover:text-accent-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/case-studies" className="hover:text-accent-primary transition-colors">Case Studies</Link>
          <span>/</span>
          <Link to="/case-studies" state={{ showProposed: true }} className="hover:text-accent-primary transition-colors">
            Implementation Capabilities
          </Link>
          <span>/</span>
          <span className="text-text-primary">{capability.capability_name}</span>
        </div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/case-studies', { state: { showProposed: true } })}
          className="flex items-center gap-2 mt-4 text-accent-primary hover:text-accent-secondary transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Implementation Capabilities
        </button>
      </div>

      <div className="container mx-auto px-4 lg:px-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {capability.category.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full border border-accent-primary/30"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {capability.capability_name}
              </h1>
              
              <p className="text-xl text-text-muted mb-8">
                {capability.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-bg-secondary border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-accent-primary" />
                    <span className="text-sm text-text-muted">Implementation</span>
                  </div>
                  <div className="text-2xl font-bold text-accent-primary">{capability.implementation_time}</div>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent-primary" />
                    <span className="text-sm text-text-muted">ROI Range</span>
                  </div>
                  <div className="text-2xl font-bold text-accent-primary">{capability.roi_range}</div>
                </div>
              </div>

              {/* Vendor Badges */}
              <div className="mb-6">
                <p className="text-sm text-text-muted mb-3">Technology Partners:</p>
                <div className="flex flex-wrap gap-2">
                  {capability.vendor.map((vendor, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium"
                    >
                      {vendor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-1 hover:shadow-button transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
                <button className="px-8 py-4 border border-accent-primary text-accent-primary font-semibold rounded-full hover:bg-accent-primary hover:text-text-primary transition-all duration-300">
                  Download Guide
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xlarge overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={capability.image}
                  alt={capability.capability_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent-primary to-accent-secondary p-6 rounded-xlarge shadow-xl">
                <p className="text-sm text-text-primary mb-1">Trusted by</p>
                <p className="text-3xl font-bold text-text-primary">500+ Enterprises</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 border border-accent-primary/20 rounded-xlarge p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {content.executive_summary}
          </p>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.key_benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-bg-secondary border border-white/10 rounded-xlarge p-6 hover:border-accent-primary transition-colors"
              >
                <CheckCircle2 className="w-8 h-8 text-accent-primary mb-4" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Overview */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 30 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">{content.technical_overview.title}</h2>
          <div className="bg-bg-secondary border border-white/10 rounded-xlarge p-8 mb-8">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {content.technical_overview.description}
            </p>
            <h3 className="text-xl font-bold mb-4">Core Components:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.technical_overview.components.map((component, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                  <span className="text-text-muted">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ROI Metrics */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 30 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">ROI & Business Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.roi_metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 rounded-xlarge p-6 text-center"
              >
                <div className="text-4xl font-bold text-accent-primary mb-2">{metric.value}</div>
                <div className="text-xl font-semibold mb-2">{metric.metric}</div>
                <p className="text-sm text-text-muted">{metric.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Approach */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 30 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Implementation Methodology</h2>
          <div className="space-y-6">
            {content.implementation_approach.phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-bg-secondary border border-white/10 rounded-xlarge p-6 hover:border-accent-primary transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{phase.phase}</h3>
                  <span className="px-4 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-medium">
                    {phase.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map((activity, actIdx) => (
                    <li key={actIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 30 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Industry Use Cases</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {content.use_cases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-bg-secondary border border-white/10 rounded-xlarge p-6 hover:border-accent-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-accent-primary" />
                  <h3 className="text-xl font-bold">{useCase.industry}</h3>
                </div>
                <p className="text-text-muted mb-4">{useCase.scenario}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-accent-primary font-medium mb-2">Outcome:</p>
                  <p className="text-text-muted">{useCase.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vendor Ecosystem */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 30 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Vendor Ecosystem & Integrations</h2>
          <div className="bg-bg-secondary border border-white/10 rounded-xlarge p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent-primary" />
                  Primary Vendors
                </h3>
                <ul className="space-y-2">
                  {content.vendor_ecosystem.primary_vendors.map((vendor, idx) => (
                    <li key={idx} className="text-text-muted">{vendor}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent-primary" />
                  Key Integrations
                </h3>
                <ul className="space-y-2">
                  {content.vendor_ecosystem.integrations.map((integration, idx) => (
                    <li key={idx} className="text-text-muted">{integration}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent-primary" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {content.vendor_ecosystem.certifications.map((cert, idx) => (
                    <li key={idx} className="text-text-muted">{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Bionic Solutions */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 30 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Why Choose Bionic Solutions</h2>
          <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/30 rounded-xlarge p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.why_bionic.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xlarge p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-lg text-text-primary/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can implement {capability.capability_name} to drive measurable business value for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-4 bg-white text-accent-primary font-semibold rounded-full hover:bg-bg-primary hover:-translate-y-1 hover:shadow-button transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/framework"
              className="px-10 py-4 bg-transparent border-2 border-white text-text-primary font-semibold rounded-full hover:bg-white hover:text-accent-primary transition-all duration-300"
            >
              Learn About Our Framework
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
