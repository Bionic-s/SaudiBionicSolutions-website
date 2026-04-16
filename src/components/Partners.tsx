import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

const partners: Partner[] = [
  {
    name: 'Google',
    logo: '/images/partners/google-partner.png',
    alt: 'Google Partner',
  },
  {
    name: 'Microsoft',
    logo: '/images/partners/microsoft-solutions-partner.png',
    alt: 'Microsoft Solutions Partner',
  },
  {
    name: 'Intel',
    logo: '/images/partners/intel-partner.png',
    alt: 'Intel Partner',
  },
  {
    name: 'Salesforce',
    logo: '/images/partners/salesforce-partner.png',
    alt: 'Salesforce Partner',
  },
];

export const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="partners"
      className="py-24 md:py-32 bg-bg-primary relative overflow-hidden"
    >
      {/* Subtle accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(0, 191, 255, 0.08), transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-12 relative">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-6"
          >
            <span className="text-small text-accent-primary font-semibold tracking-wide uppercase">
              Strategic Alliances
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
          >
            Our <span className="text-accent-primary">Technology Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h4 md:text-h3 text-text-muted max-w-4xl mx-auto"
          >
            As a trusted IT system integrator, we partner with the world's
            leading technology vendors to deliver enterprise-grade solutions
            built on platforms you can rely on.
          </motion.p>
        </div>

        {/* Partner logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative bg-bg-secondary rounded-xlarge border border-white/5 p-8 md:p-10 flex items-center justify-center min-h-[160px] md:min-h-[180px] hover:border-accent-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                loading="lazy"
                className="max-h-16 md:max-h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-body text-text-muted">
            Certified partnerships, enterprise-grade platforms,{' '}
            <span className="text-text-primary font-semibold">
              delivered across Saudi Arabia and the GCC.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
