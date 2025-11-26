import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredCase = {
    title: 'Enterprise AI Transformation',
    industry: 'Financial Services',
    service: 'AI & Automation',
    description: '75% faster. 99.2% accurate. Millions saved. Implemented end-to-end AI automation system transforming transaction processing.',
    results: [
      { label: 'Processing Time', value: '-75%' },
      { label: 'Accuracy', value: '99.2%' },
      { label: 'Annual Savings', value: '$2.4M' },
    ],
    image: '/images/case-study-enterprise-ai-transformation.png',
  };

  const caseStudies = [
    {
      title: 'Data Analytics Platform',
      industry: 'Healthcare',
      service: 'Data Analytics & ERP',
      description: 'Built comprehensive analytics platform aggregating patient data across 50+ facilities',
      result: '40% faster diagnoses',
      image: '/images/case-study-healthcare-analytics.png',
    },
    {
      title: 'Cybersecurity Modernization',
      industry: 'Technology',
      service: 'Cybersecurity & GRC',
      description: 'Implemented AI-powered threat detection preventing 500+ security incidents',
      result: '99.8% threat prevention',
      image: '/images/case-study-cybersecurity-modernization.png',
    },
    {
      title: 'Cloud Infrastructure Migration',
      industry: 'Retail',
      service: 'Digital Infrastructure',
      description: 'Migrated legacy systems to AI-optimized cloud infrastructure',
      result: '60% cost reduction',
      image: '/images/case-study-cloud-migration.png',
    },
  ];

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-4 lg:px-12">
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-4"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h4 md:text-h3 lg:text-h3 text-text-muted max-w-3xl mx-auto mb-8"
          >
            Tech Projects that Redefined ROI
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/case-studies"
              className="inline-block px-8 py-3 border-2 border-accent-primary text-accent-primary font-semibold rounded-medium hover:bg-accent-primary hover:text-text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              View All Case Studies
            </Link>
          </motion.div>
        </div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-bg-primary rounded-xlarge overflow-hidden border border-white/5 hover:border-accent-primary transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredCase.image}
                  alt={featuredCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-accent-primary text-text-primary text-sm font-semibold rounded-full">
                    FEATURED
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm rounded-full">
                    {featuredCase.industry}
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-text-muted text-sm rounded-full">
                    {featuredCase.service}
                  </span>
                </div>
                <h3 className="text-h3 md:text-h2 lg:text-h2 font-bold mb-4">{featuredCase.title}</h3>
                <p className="text-body text-text-muted mb-6">{featuredCase.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {featuredCase.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-accent-primary mb-1">
                        {result.value}
                      </div>
                      <div className="text-tiny text-text-muted">{result.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-studies/enterprise-ai-transformation"
                  className="inline-flex items-center space-x-2 text-accent-primary font-semibold hover:translate-x-1 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <Link
              key={index}
              to="/case-studies"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-bg-primary rounded-xlarge overflow-hidden border border-white/5 hover:border-accent-primary hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm rounded-full">
                      {caseStudy.industry}
                    </span>
                    <span className="px-3 py-1 bg-white/5 text-text-muted text-sm rounded-full">
                      {caseStudy.service}
                    </span>
                  </div>
                  <h4 className="text-h4 md:text-h3 lg:text-h3 font-semibold mb-3">{caseStudy.title}</h4>
                  <p className="text-body text-text-muted mb-4">{caseStudy.description}</p>
                  <div className="flex items-center space-x-2 text-accent-primary font-semibold">
                    <TrendingUp className="w-5 h-5" />
                    <span>{caseStudy.result}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
