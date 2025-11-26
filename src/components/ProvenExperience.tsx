import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

export const ProvenExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [successRate, setSuccessRate] = useState(0);
  const [npsScore, setNpsScore] = useState(0);

  useEffect(() => {
    if (inView) {
      const animateCounter = (target: number, setter: (value: number) => void, duration: number = 2000) => {
        const startTime = Date.now();
        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setter(Math.floor(easeOutQuart * target));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        animate();
      };

      animateCounter(94, setSuccessRate);
      animateCounter(95, setNpsScore);
    }
  }, [inView]);

  const testimonials = [
    {
      quote: "Bionic Solutions enhanced our operations with flexible solutions that work perfectly together. We started with Infrastructure & Service Management, then added AI and Cybersecurity as needed. The modular approach made transformation manageable and cost-effective.",
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      company: "TechCorp Global",
      image: "/images/testimonial_person_5.png",
    },
    {
      quote: "Their approach to enterprise intelligence is revolutionary. The living systems methodology gave us insights into our organization we never had before, driving a 65% increase in ROI.",
      name: "Michael Rodriguez",
      title: "VP of Operations",
      company: "Enterprise Solutions Inc",
      image: "/images/testimonial_person_9.jpg",
    },
    {
      quote: "The trust and security foundation they built is unmatched. As an AI-first enterprise, we needed bulletproof cybersecurity, and Bionic delivered beyond expectations.",
      name: "Emily Watson",
      title: "Chief Information Security Officer",
      company: "Financial Services Ltd",
      image: "/images/testimonial_person_1.jpg",
    },
  ];

  return (
    <section id="proven-experience" className="py-24 md:py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-4 lg:px-12">
        <div ref={ref} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
          >
            Enterprises as Living Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-h4 md:text-h3 lg:text-h3 text-text-muted max-w-4xl mx-auto mb-6"
          >
            We design intelligence into business. Like living organisms powered by nervous systems, modern enterprises need integrated intelligence, automation, and trust to thrive in an AI-driven world.
          </motion.p>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-bg-primary rounded-xlarge p-8 border border-white/5"
            >
              <div className="text-6xl md:text-7xl font-bold text-accent-primary mb-4">
                {successRate}%
              </div>
              <div className="text-h4 md:text-h3 font-semibold mb-2">Success Rate</div>
              <div className="text-body text-text-muted">vs industry 67%</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-bg-primary rounded-xlarge p-8 border border-white/5"
            >
              <div className="text-6xl md:text-7xl font-bold text-accent-primary mb-4">
                {npsScore}+
              </div>
              <div className="text-h4 md:text-h3 font-semibold mb-2">NPS Score</div>
              <div className="text-body text-text-muted">vs industry median 40</div>
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-bg-primary rounded-xlarge p-8 border border-white/5 hover:border-accent-primary hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-accent-primary mb-6" />
              <p className="text-body text-text-muted mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-h4 font-semibold">{testimonial.name}</div>
                  <div className="text-small text-text-muted">{testimonial.title}</div>
                  <div className="text-small text-accent-primary">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
