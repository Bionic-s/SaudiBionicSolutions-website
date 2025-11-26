import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  TrendingDown,
  Clock, 
  DollarSign, 
  CheckCircle,
  Users,
  Building,
  Globe,
  Zap,
  Award,
  ArrowLeft
} from 'lucide-react';
import { proposedCaseStudiesData, ProposedCaseStudy } from '../data/proposed_case_studies_data';

export default function ProposedCaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = proposedCaseStudiesData.find(cs => cs.slug === slug);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-24">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 lg:px-12 py-6">
        <Link 
          to="/case-studies"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5" />
        
        <div className="container mx-auto px-4 lg:px-12 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Vendor Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-2 bg-accent-secondary/20 text-accent-secondary rounded-full text-sm font-semibold border border-accent-secondary/30">
                  PROPOSED VENDOR PARTNERSHIP
                </div>
                <div 
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: caseStudy.industryColor }}
                >
                  {caseStudy.industry}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-text-muted mb-8 leading-relaxed">
                {caseStudy.valueProposition}
              </p>

              {/* Vendor Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-accent-primary" />
                  <div>
                    <div className="text-lg font-semibold">{caseStudy.vendor}</div>
                    <div className="text-sm text-text-muted">{caseStudy.vendorSolution}</div>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary mb-1">{caseStudy.investmentRequired}</div>
                    <div className="text-sm text-text-muted">Investment Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-primary mb-1">{caseStudy.implementationTimeline}</div>
                    <div className="text-sm text-text-muted">Implementation</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={caseStudy.heroImage}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
                
                {/* Vendor Logo Placeholder */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-white font-bold text-lg">{caseStudy.vendor.split(' ')[0]}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Solution Benefits</h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {caseStudy.solutionImpact}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-bg-primary rounded-2xl p-6 border border-white/10 hover:border-accent-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-text-muted">
                  Advanced feature designed to optimize {feature.toLowerCase()} and improve operational efficiency.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold">Current Challenge</h2>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-red-300">{caseStudy.challenge}</h3>
                <p className="text-text-muted">{caseStudy.problemDetails}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-red-300">Key Issues:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-muted">High operational costs and inefficiencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-muted">Limited data-driven decision making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-text-muted">Reactive rather than proactive approach</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-primary/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent-primary" />
                </div>
                <h2 className="text-3xl font-bold">Proposed Solution</h2>
              </div>
              
              <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-accent-primary">{caseStudy.solutionDescription}</h3>
                <p className="text-text-muted">{caseStudy.solutionDescriptionAr}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-accent-primary">Key Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-muted">Improved operational efficiency and cost reduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-muted">Data-driven insights and predictive analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-muted">Proactive problem solving and optimization</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Expected Outcomes</h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Measurable improvements in operational efficiency and business performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-bg-primary rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold">Current State</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-500/10 rounded-lg p-4">
                  <p className="text-text-muted">{caseStudy.kpisBefore}</p>
                </div>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-bg-primary rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-primary/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-2xl font-bold">Expected Results</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-accent-primary/10 rounded-lg p-4">
                  <p className="text-text-muted">{caseStudy.kpisAfter}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Implementation Overview</h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Our comprehensive approach to implementing {caseStudy.vendorSolution}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timeline</h3>
              <p className="text-2xl font-bold text-accent-primary">{caseStudy.implementationTimeline}</p>
              <p className="text-text-muted text-sm">Expected implementation period</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Investment</h3>
              <p className="text-2xl font-bold text-accent-primary">{caseStudy.investmentRequired}</p>
              <p className="text-text-muted text-sm">Total project investment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Projection</h3>
              <p className="text-2xl font-bold text-accent-primary">{caseStudy.roiProjection}</p>
              <p className="text-text-muted text-sm">Expected return on investment</p>
            </motion.div>
          </div>

          {/* Technical Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-bg-secondary rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.technicalRequirements.map((requirement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0" />
                  <span className="text-text-muted">{requirement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vendor Information */}
      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About {caseStudy.vendor}</h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              {caseStudy.vendorBackground}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-bg-primary rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Vendor Credentials & Trust</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.vendorCredibility.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent-primary mt-1 flex-shrink-0" />
                  <span className="text-text-muted">{credential}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Implement This Solution?
              </h2>
              <p className="text-xl text-text-muted mb-8 max-w-3xl mx-auto">
                {caseStudy.partnershipOpportunity}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-1 transition-all duration-300"
                >
                  <Users className="w-5 h-5" />
                  Discuss Partnership
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-primary text-accent-primary font-semibold rounded-full hover:bg-accent-primary hover:text-text-primary transition-all duration-300"
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
