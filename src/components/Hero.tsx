import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useAnimatedText } from '../hooks/useAnimatedText';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { displayedWord, isAnimating, animationState } = useAnimatedText([
    'intelligence',
    'automation', 
    'trust',
    'resilience',
    'velocity'
  ], 3000, 80, 40, 2000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 grid-pattern">
      {/* Animated Background with Neural Network Effect */}
      <div className="absolute inset-0 gradient-overlay">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero_background_7.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      </div>

      {/* Neural Network Pulse Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl top-1/4 left-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl bottom-1/4 right-1/4"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline with Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We design{' '}
              <motion.span
                className="gradient-text inline-block"
                animate={animationState as any}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                key={displayedWord} // Force re-render on word change
              >
                {displayedWord}
              </motion.span>{' '}
              into business.
            </h1>
          </motion.div>

          {/* Enhanced Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-text-muted mb-12 max-w-4xl mx-auto">
              We transform organizations into intelligent, automated, high-trust systems built for tomorrow.
            </p>
          </motion.div>

          {/* Animated Metrics with CountUp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
          >
            {[
              { 
                value: 10, 
                suffix: '+',
                label: 'AI Projects Completed',
                description: 'Delivered with precision'
              },
              { 
                value: 5, 
                suffix: '+',
                label: 'Enterprise Clients',
                description: 'Global transformation'
              },
              { 
                value: 95, 
                suffix: '%',
                label: 'Success Rate',
                description: 'Mission accomplished'
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                ref={ref}
              >
                <motion.div
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-primary mb-2 group-hover:text-accent-secondary transition-colors duration-300"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1, type: 'spring' }}
                >
                  {inView && (
                    <CountUp
                      start={0}
                      end={metric.value}
                      duration={2.5}
                      delay={1 + index * 0.2}
                      suffix={metric.suffix}
                      useEasing={true}
                    />
                  )}
                </motion.div>
                <div className="text-sm md:text-base font-medium text-text-primary mb-1">{metric.label}</div>
                <div className="text-xs text-text-muted group-hover:text-accent-primary transition-colors duration-300">{metric.description}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-10 py-4 bg-accent-primary text-text-primary font-semibold rounded-full relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Your Free Enterprise Assessment</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with Pulse */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-accent-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};