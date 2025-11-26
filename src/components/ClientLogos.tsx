import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ClientLogos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simulated client logos (in production, use actual logo images)
  const clients = [
    { name: 'Healthcare Startup', logo: 'HC' },
    { name: 'Manufacturing Tech', logo: 'GM' },
    { name: 'FinTech Innovator', logo: 'IB' },
    { name: 'Cloud Infrastructure', logo: 'TI' },
    { name: 'E-Commerce Platform', logo: 'EC' },
    { name: 'Digital Services', logo: 'FS' },
  ];

  return (
    <section className="py-16 md:py-20 bg-bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-h3 font-semibold mb-2">
            Trusted by <span className="text-accent-primary">50+ Growing Companies</span> Worldwide
          </h3>
          <p className="text-body text-text-muted">
            Forward-thinking organizations choose Bionic Solutions for AI-driven transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-24 h-24 bg-bg-primary border border-white/10 rounded-medium flex items-center justify-center hover:border-accent-primary/50 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-primary/70 group-hover:text-accent-primary transition-colors">
                    {client.logo}
                  </div>
                  <div className="text-tiny text-text-muted mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Enterprise
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-8 text-text-muted">
            <div className="text-center">
              <div className="text-h3 font-bold text-accent-primary">90%</div>
              <div className="text-small">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-h3 font-bold text-accent-primary">$5M+</div>
              <div className="text-small">Cost Savings Delivered</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-h3 font-bold text-accent-primary">25+</div>
              <div className="text-small">AI Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
