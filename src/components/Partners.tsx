import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Partner {
  name: string;
  logo: string;
  alt: string;
}

/**
 * Bionic Solutions — certified technology partners.
 *
 * Logo files live in /public/images/partners/ and must be the official
 * partner badges provided by each vendor's partner program.
 */
const partners: Partner[] = [
  {
    name: 'Google',
    logo: '/images/partners/google-partner.png',
    alt: 'Google Partner',
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
      {/* Electric-blue signature glow — brand: 90% dark, 10% electric */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(0, 191, 255, 0.10), transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-12 relative">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/5 mb-6"
          >
            <span className="text-small text-accent-primary font-semibold tracking-wider uppercase">
              Certified Alliances
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={
              inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}
            }
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-h2 md:text-[48px] lg:text-h2 font-bold mb-6 tracking-tight"
          >
            Engineered with the{' '}
            <span className="text-accent-primary">world's best</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-h4 md:text-h3 text-text-muted max-w-4xl mx-auto font-normal"
          >
            We design intelligence into business — backed by certified
            partnerships with the platforms that power modern enterprises.
          </motion.p>
        </div>

        {/* Partner logo grid — brand: glass cards, electric hover glow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={
                inView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative rounded-2xl border border-white/[0.08] backdrop-blur-md bg-white/[0.02] p-8 md:p-10 flex items-center justify-center min-h-[160px] md:min-h-[180px] transition-all duration-300 hover:border-accent-primary/60 hover:-translate-y-1"
              style={{
                boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
              }}
            >
              {/* Electric-blue hover glow (brand motion spec) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 24px rgba(0, 191, 255, 0.35)',
                }}
              />

              <img
                src={partner.logo}
                alt={partner.alt}
                loading="lazy"
                className="relative max-h-16 md:max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-body text-text-muted">
            Enterprise-grade platforms,{' '}
            <span className="text-text-primary font-semibold">
              delivered with precision across Saudi Arabia and the GCC.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
