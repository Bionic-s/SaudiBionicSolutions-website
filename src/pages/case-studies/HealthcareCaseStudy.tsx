import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

export default function HealthcareCaseStudy() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <img
          src="/images/data-analytics.avif"
          alt="Healthcare Network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-bg-primary/60 to-bg-primary" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 lg:px-12 pb-16">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-[#4ECDC4] text-bg-primary text-sm font-semibold rounded-full">
                  Healthcare
                </span>
                <span className="px-4 py-2 bg-accent-primary/10 border border-accent-primary text-accent-primary text-sm font-semibold rounded-full">
                  AI Systems
                </span>
                <span className="px-4 py-2 bg-accent-primary/10 border border-accent-primary text-accent-primary text-sm font-semibold rounded-full">
                  Data Analytics
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Local Healthcare Clinic Network
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-text-muted">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>6 months pilot phase</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>3-clinic network</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 py-16">
        {/* Challenge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-text-muted mb-6">
                The local clinic network struggled with patient scheduling efficiency and appointment wait times. Clinic wait times averaged 2.5 hours, and staff coordination inefficiencies led to $180K annual productivity losses.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2" />
                  <p className="text-text-muted">2.5-hour average clinic wait times causing patient dissatisfaction</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2" />
                  <p className="text-text-muted">Appointment scheduling inefficiencies across 3 locations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2" />
                  <p className="text-text-muted">$180K annual losses from coordination inefficiencies</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
              <p className="text-lg text-text-muted mb-6">
                Bionic Solutions implemented a comprehensive AI-driven healthcare intelligence platform combining machine learning, predictive analytics, and real-time data integration.
              </p>
              <div className="space-y-6">
                <div className="bg-bg-secondary border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-accent-primary">AI Systems — Intelligence Layer</h3>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Machine learning algorithms for patient risk stratification</li>
                    <li>• Predictive analytics for emergency department staffing</li>
                    <li>• Computer vision for automated diagnostic image analysis</li>
                    <li>• Natural language processing for clinical documentation</li>
                  </ul>
                </div>
                <div className="bg-bg-secondary border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-accent-primary">Data & Analytics — Insight Layer</h3>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Real-time patient flow dashboards</li>
                    <li>• Integrated EHR analytics with predictive modeling</li>
                    <li>• Clinical decision support systems</li>
                    <li>• Performance metrics across all facilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          ref={resultsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={resultsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Quantified Results</h2>
          <p className="text-lg text-text-muted text-center mb-12 max-w-3xl mx-auto">
            Measurable improvements across all key performance indicators within 6 months
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#00D4AA]/10 to-bg-secondary border border-[#00D4AA]/20 rounded-xlarge p-8">
              <TrendingUp className="w-10 h-10 text-[#00D4AA] mb-4" />
              <div className="text-5xl font-bold text-[#00D4AA] mb-2">35%</div>
              <div className="text-lg font-semibold mb-2">Reduction in Wait Times</div>
              <div className="text-sm text-text-muted mb-4">2.5 hours → 1.6 hours</div>
              <p className="text-sm text-text-muted">AI-powered patient triage and predictive staffing</p>
            </div>

            <div className="bg-gradient-to-br from-accent-primary/10 to-bg-secondary border border-accent-primary/20 rounded-xlarge p-8">
              <Target className="w-10 h-10 text-accent-primary mb-4" />
              <div className="text-5xl font-bold text-accent-primary mb-2">88%</div>
              <div className="text-lg font-semibold mb-2">Appointment Accuracy</div>
              <div className="text-sm text-text-muted mb-4">For scheduled visits</div>
              <p className="text-sm text-text-muted">Automated scheduling and patient reminder system</p>
            </div>

            <div className="bg-gradient-to-br from-[#FFB800]/10 to-bg-secondary border border-[#FFB800]/20 rounded-xlarge p-8">
              <DollarSign className="w-10 h-10 text-[#FFB800] mb-4" />
              <div className="text-5xl font-bold text-[#FFB800] mb-2">$120K</div>
              <div className="text-lg font-semibold mb-2">Annual Cost Savings</div>
              <div className="text-sm text-text-muted mb-4">Through optimization</div>
              <p className="text-sm text-text-muted">Optimized resource allocation and reduced inefficiencies</p>
            </div>

            <div className="bg-gradient-to-br from-accent-primary/10 to-bg-secondary border border-accent-primary/20 rounded-xlarge p-8">
              <Users className="w-10 h-10 text-accent-primary mb-4" />
              <div className="text-5xl font-bold text-accent-primary mb-2">32%</div>
              <div className="text-lg font-semibold mb-2">Patient Satisfaction Increase</div>
              <div className="text-sm text-text-muted mb-4">Across all touchpoints</div>
              <p className="text-sm text-text-muted">Faster service and improved care quality</p>
            </div>

            <div className="bg-gradient-to-br from-[#00D4AA]/10 to-bg-secondary border border-[#00D4AA]/20 rounded-xlarge p-8 md:col-span-2 lg:col-span-1">
              <Clock className="w-10 h-10 text-[#00D4AA] mb-4" />
              <div className="text-5xl font-bold text-[#00D4AA] mb-2">14 Months</div>
              <div className="text-lg font-semibold mb-2">ROI Achievement</div>
              <div className="text-sm text-text-muted mb-4">Full return on investment</div>
              <p className="text-sm text-text-muted">Through efficiency gains and cost reductions</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={resultsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-accent-primary/5 to-bg-secondary border-2 border-accent-primary/20 rounded-xlarge p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-6xl text-accent-primary/20 mb-4">"</div>
            <blockquote className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
              The Bionic platform improved our clinic operations significantly. We're now managing patient flow more efficiently with better scheduling. The pilot program showed promising results that we're expanding to additional locations.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent-primary" />
              </div>
              <div>
                <div className="text-xl font-semibold">Dr. Maria Rodriguez</div>
                <div className="text-text-muted">Clinic Director</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={resultsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Related Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/case-studies/investment-banking"
              className="group bg-bg-secondary rounded-xlarge overflow-hidden border border-white/5 hover:border-accent-primary transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src="/images/case_study_featured_9.jpg"
                alt="Finance Case Study"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="px-3 py-1 bg-[#FFD93D]/20 text-[#FFD93D] text-xs font-semibold rounded-full">Finance</span>
                <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-accent-primary transition-colors">
                  Regional Credit Union Compliance
                </h3>
                <p className="text-text-muted text-sm mb-4">55% reduction in compliance time with automated workflows</p>
                <div className="flex items-center text-accent-primary font-semibold">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
            <Link
              to="/case-studies/global-manufacturing"
              className="group bg-bg-secondary rounded-xlarge overflow-hidden border border-white/5 hover:border-accent-primary transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src="/images/case_study_featured_7.png"
                alt="Manufacturing Case Study"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="px-3 py-1 bg-[#FF6B6B]/20 text-[#FF6B6B] text-xs font-semibold rounded-full">Manufacturing</span>
                <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-accent-primary transition-colors">
                  Small Manufacturing Facility Automation
                </h3>
                <p className="text-text-muted text-sm mb-4">40% reduction in equipment downtime through IoT integration</p>
                <div className="flex items-center text-accent-primary font-semibold">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={resultsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xlarge p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            Schedule a strategy session to explore how the Intelligent Enterprise Solutions Model can deliver measurable results for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-1 hover:shadow-button transition-all duration-300"
          >
            Schedule Strategy Session
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
