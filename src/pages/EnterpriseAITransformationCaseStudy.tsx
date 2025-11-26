import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Target, DollarSign, CheckCircle, Zap, Shield, BarChart } from 'lucide-react';

export default function EnterpriseAITransformationCaseStudy() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [challengeRef, challengeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [solutionRef, solutionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const metrics = [
    {
      icon: Clock,
      value: '75%',
      label: 'Faster Processing',
      description: 'Transaction processing time reduced from hours to minutes'
    },
    {
      icon: Target,
      value: '99.2%',
      label: 'Accuracy Rate',
      description: 'Near-perfect accuracy in automated decision making'
    },
    {
      icon: DollarSign,
      value: '$2.4M',
      label: 'Annual Savings',
      description: 'Combined operational and efficiency cost reductions'
    }
  ];

  const keyFeatures = [
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'AI-powered system processes transactions in real-time, eliminating batch processing delays'
    },
    {
      icon: Shield,
      title: 'Intelligent Risk Assessment',
      description: 'Advanced ML models evaluate risk patterns and flag anomalies instantly'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Data-driven insights for proactive decision making and strategic planning'
    }
  ];

  const timeline = [
    {
      phase: 'Discovery & Assessment',
      duration: '2 weeks',
      description: 'Comprehensive analysis of existing processes and identification of automation opportunities'
    },
    {
      phase: 'AI System Design',
      duration: '4 weeks',
      description: 'Custom AI architecture design and machine learning model development'
    },
    {
      phase: 'Implementation',
      duration: '8 weeks',
      description: 'Phased rollout with seamless integration into existing infrastructure'
    },
    {
      phase: 'Optimization',
      duration: '2 weeks',
      description: 'Fine-tuning algorithms and performance optimization based on real-world data'
    }
  ];

  const businessImpact = [
    {
      metric: '300%',
      description: 'Increase in transaction throughput capacity'
    },
    {
      metric: '95%',
      description: 'Reduction in manual processing errors'
    },
    {
      metric: '60%',
      description: 'Decrease in operational overhead costs'
    },
    {
      metric: '99.9%',
      description: 'System uptime and reliability rate'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black">
        <div className="container mx-auto px-4 lg:px-12">
          <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="px-4 py-2 bg-accent-primary text-text-primary text-sm font-semibold rounded-full">
                  CASE STUDY
                </span>
                <span className="px-3 py-1 bg-white/10 text-text-muted text-sm rounded-full">
                  Financial Services
                </span>
              </div>
              
              <h1 className="text-h1 md:text-[48px] lg:text-[64px] font-bold mb-6 leading-tight">
                Enterprise AI Transformation
              </h1>
              
              <p className="text-h4 md:text-h3 text-text-muted mb-8 max-w-xl">
                Revolutionizing transaction processing with end-to-end AI automation, delivering unprecedented speed, accuracy, and cost savings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-primary/90 transition-all hover:scale-105"
                >
                  Start Your AI Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="#results"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-medium hover:border-accent-primary hover:text-accent-primary transition-all"
                >
                  View Results
                  <TrendingUp className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/enterprise-ai-transformation-hero.avif"
                alt="Enterprise AI Transformation - Advanced AI system visualization"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12">
          <div ref={challengeRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={challengeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6">
                The Challenge
              </h2>
              <p className="text-h4 text-text-muted mb-8">
                A leading financial services organization was struggling with inefficient transaction processing that was limiting growth and increasing operational costs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Slow Processing Times</h3>
                    <p className="text-text-muted">Manual transaction processing taking hours, delaying customer onboarding and transactions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">High Error Rates</h3>
                    <p className="text-text-muted">4-6% error rate in manual processing leading to rework and compliance issues</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Rising Operational Costs</h3>
                    <p className="text-text-muted">High labor costs and resource allocation for transaction processing activities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Limited Scalability</h3>
                    <p className="text-text-muted">Unable to handle increasing transaction volumes without proportional staff increases</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={challengeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-bg-primary rounded-2xl p-8 border border-white/5"
            >
              <h3 className="text-h4 font-bold mb-6">Client Profile</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-text-muted">Industry</span>
                  <span className="font-semibold">Financial Services</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-text-muted">Company Size</span>
                  <span className="font-semibold">$500M+ Revenue</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-text-muted">Transactions Daily</span>
                  <span className="font-semibold">50,000+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-text-muted">Processing Staff</span>
                  <span className="font-semibold">120+ Employees</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-text-muted">Project Duration</span>
                  <span className="font-semibold">16 Weeks</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-12">
          <div ref={solutionRef} className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
            >
              Our AI-Powered Solution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-h4 text-text-muted max-w-3xl mx-auto"
            >
              We designed and implemented a comprehensive end-to-end AI automation system that transformed their entire transaction processing workflow.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-bg-secondary rounded-2xl p-8 border border-white/5 hover:border-accent-primary transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <h3 className="text-h4 font-semibold mb-4">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Implementation Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-bg-secondary rounded-2xl p-8 md:p-12 border border-white/5"
          >
            <h3 className="text-h3 font-bold mb-8 text-center">Implementation Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {timeline.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{phase.phase}</h4>
                  <p className="text-sm text-accent-primary mb-3">{phase.duration}</p>
                  <p className="text-text-muted text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 md:py-32 bg-bg-secondary">
        <div className="container mx-auto px-4 lg:px-12">
          <div ref={resultsRef} className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
            >
              Exceptional Results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-h4 text-text-muted max-w-3xl mx-auto"
            >
              The transformation exceeded all expectations, delivering measurable improvements across every key performance indicator.
            </motion.p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={resultsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-bg-primary rounded-2xl p-8 text-center border border-white/5 hover:border-accent-primary transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <div className="text-5xl font-bold text-accent-primary mb-2">{metric.value}</div>
                  <div className="text-h4 font-semibold mb-4">{metric.label}</div>
                  <p className="text-text-muted">{metric.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Business Impact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-bg-primary rounded-2xl p-8 md:p-12 border border-white/5"
          >
            <h3 className="text-h3 font-bold mb-8 text-center">Additional Business Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessImpact.map((impact, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent-primary mb-2">{impact.metric}</div>
                  <p className="text-text-muted">{impact.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Client Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-accent-primary/10 to-accent-primary/5 rounded-2xl p-8 md:p-12 border border-accent-primary/20"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl text-accent-primary mb-6">"</div>
              <blockquote className="text-h4 md:text-h3 font-medium mb-8 italic">
                This AI transformation didn't just improve our processes—it fundamentally changed how we operate. 
                The 75% reduction in processing time and 99.2% accuracy rate have positioned us as the industry leader. 
                The ROI was immediate and continues to compound.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-accent-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-accent-primary font-bold text-xl">CT</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Chief Technology Officer</div>
                  <div className="text-text-muted">Financial Services Organization</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4 lg:px-12">
          <div ref={ctaRef} className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-h4 text-text-muted mb-8 max-w-2xl mx-auto"
            >
              Join industry leaders who have revolutionized their operations with our AI automation solutions. 
              Start your transformation today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-primary/90 transition-all hover:scale-105"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-medium hover:border-accent-primary hover:text-accent-primary transition-all"
              >
                View More Case Studies
                <TrendingUp className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}