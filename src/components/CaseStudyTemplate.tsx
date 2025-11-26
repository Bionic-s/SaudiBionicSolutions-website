import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
  description: string;
  detail: string;
  icon: 'trending' | 'target' | 'dollar' | 'users' | 'clock';
  color: string;
}

interface Solution {
  framework: string;
  items: string[];
}

interface RelatedCaseStudy {
  title: string;
  industry: string;
  industryColor: string;
  description: string;
  image: string;
  path: string;
}

interface CaseStudyData {
  title: string;
  industry: string;
  industryColor: string;
  frameworks: string[];
  implementation: string;
  clientType: string;
  heroImage: string;
  challengeText: string;
  challengePoints: string[];
  solutionText: string;
  solutions: Solution[];
  metrics: Metric[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
  relatedCases: RelatedCaseStudy[];
}

const iconMap = {
  trending: TrendingUp,
  target: Target,
  dollar: DollarSign,
  users: Users,
  clock: Clock,
};

export default function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.title}
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
                <span 
                  className="px-4 py-2 text-bg-primary text-sm font-semibold rounded-full"
                  style={{ backgroundColor: data.industryColor }}
                >
                  {data.industry}
                </span>
                {data.frameworks.map((framework, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-accent-primary/10 border border-accent-primary text-accent-primary text-sm font-semibold rounded-full"
                  >
                    {framework}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {data.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-text-muted">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{data.implementation} implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{data.clientType}</span>
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
                {data.challengeText}
              </p>
              <div className="space-y-4">
                {data.challengePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full mt-2" />
                    <p className="text-text-muted">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
              <p className="text-lg text-text-muted mb-6">
                {data.solutionText}
              </p>
              <div className="space-y-6">
                {data.solutions.map((solution, idx) => (
                  <div key={idx} className="bg-bg-secondary border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 text-accent-primary">{solution.framework}</h3>
                    <ul className="space-y-2 text-text-muted">
                      {solution.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
            Measurable improvements across all key performance indicators
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.metrics.map((metric, idx) => {
              const Icon = iconMap[metric.icon];
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-${metric.color}/10 to-bg-secondary border rounded-xlarge p-8`}
                  style={{ borderColor: `${metric.color}20` }}
                >
                  <Icon className="w-10 h-10 mb-4" style={{ color: metric.color }} />
                  <div className="text-5xl font-bold mb-2" style={{ color: metric.color }}>{metric.value}</div>
                  <div className="text-lg font-semibold mb-2">{metric.label}</div>
                  <div className="text-sm text-text-muted mb-4">{metric.description}</div>
                  <p className="text-sm text-text-muted">{metric.detail}</p>
                </div>
              );
            })}
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
              {data.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent-primary" />
              </div>
              <div>
                <div className="text-xl font-semibold">{data.testimonial.author}</div>
                <div className="text-text-muted">{data.testimonial.title}</div>
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
            {data.relatedCases.map((relatedCase, idx) => (
              <Link
                key={idx}
                to={relatedCase.path}
                className="group bg-bg-secondary rounded-xlarge overflow-hidden border border-white/5 hover:border-accent-primary transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={relatedCase.image}
                  alt={relatedCase.title}
                  className="w-full h-48 object-cover"
                />
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={resultsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xlarge p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
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
