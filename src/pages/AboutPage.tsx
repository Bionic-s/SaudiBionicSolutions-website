import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Lightbulb, Rocket, Shield, Heart, Building2, MapPin, Calendar, Mail, Phone } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '10+', label: 'AI Projects Completed', icon: Target },
    { number: '5+', label: 'Enterprise Clients', icon: Users },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '2024', label: 'Founded', icon: Calendar },
  ];



  const timeline = [
    { year: '2024', event: 'Company Founded', description: 'Launched as AI-first technology company in Saudi Arabia' },
    { year: '2024', event: 'Bionic Model Launch', description: 'Introduced comprehensive Intelligent Enterprise Solutions Model' },
    { year: '2025', event: 'First Clients', description: 'Onboarded initial clients and established proof of concept' },
  ];



  const locations = [
    { city: 'Riyadh', country: 'KSA', type: 'Capital Region Office', description: 'Serving Riyadh and the Central Region with enterprise AI solutions' },
    { city: 'Dammam', country: 'KSA', type: 'Eastern Province Office', description: 'Supporting businesses across the Eastern Province and Gulf Coast' },
    { city: 'Jeddah', country: 'KSA', type: 'Western Province Office', description: 'Headquartered in Jeddah, serving the Western Region and Red Sea Coast' },
  ];

  const partners = [
    { name: 'Technology Collaborations', description: 'Working with technology partners to deliver comprehensive AI solutions' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and automation, always staying ahead of the curve to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Partnership Excellence',
      description: 'We don\'t just deliver projects - we become your trusted partners, understanding your unique challenges and co-creating solutions.',
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Every solution is built with enterprise-grade security, ensuring your data and operations are protected at every level.',
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'Our solutions are designed for tomorrow, not just today - building scalable, adaptable systems that grow with your business.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-accent-primary/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container mx-auto px-4 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-accent-primary/10 rounded-full mb-6"
            >
              <Users className="w-8 h-8 text-accent-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-h1 md:text-[52px] lg:text-[64px] font-bold mb-6"
            >
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-primary/70">
                Bionic Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-h4 md:text-h3 lg:text-h3 text-text-muted mb-8 max-w-3xl mx-auto"
            >
              We are the architects of the AI-first enterprise. Transforming organizations through intelligent automation, 
              predictive analytics, and future-ready digital infrastructure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-primary/10 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div className="text-h2 md:text-h1 font-bold text-accent-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-body text-text-muted">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-8"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-h4 md:text-h3 lg:text-h3 text-text-muted mb-8"
            >
              To empower enterprises with intelligent, adaptive systems that don't just respond to change – 
              they anticipate it. We believe that the future belongs to organizations that can seamlessly 
              blend human ingenuity with artificial intelligence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-body text-text-muted"
            >
              Every solution we build is a step toward creating truly bionic enterprises – organizations 
              that are more than the sum of their parts, where technology amplifies human potential 
              and drives sustainable competitive advantage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary to-bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-h4 md:text-h3 text-text-muted max-w-3xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-large p-8 hover:border-accent-primary/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-primary/10 rounded-full mb-6">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <h3 className="text-h4 font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-body text-text-muted">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-8 text-center"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-body text-text-muted">
                Founded in 2024 by a team of AI researchers and enterprise architects, Bionic Solutions emerged from a 
                simple observation: while AI technology was advancing rapidly, most enterprises struggled to translate 
                that innovation into tangible business value.
              </p>
              <p className="text-body text-text-muted">
                We set out to bridge that gap. As an AI-first enterprise technology company based in Saudi Arabia, 
                we work closely with organizations to develop methodologies that integrate AI across all layers of 
                enterprise operations - from technical infrastructure to business processes and strategic decision-making.
              </p>
              <p className="text-body text-text-muted">
                Our Intelligent Enterprise Solutions Model represents cutting-edge innovation and proven methodologies in making 
                AI work for real businesses with real challenges, empowering organizations to achieve sustainable 
                competitive advantage through intelligent automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6"
            >
              Our Journey
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-primary/20"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-accent-primary rounded-full border-4 border-bg-primary"></div>
                  
                  {/* Year badge */}
                  <div className="absolute left-0 top-0 flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-accent-primary" />
                  </div>
                  
                  <div className="bg-bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-large p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-h4 font-bold text-accent-primary">{item.year}</span>
                      <span className="text-h4 font-semibold">{item.event}</span>
                    </div>
                    <p className="text-body text-text-muted">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-bg-primary to-bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-8 justify-center">
                <Building2 className="w-8 h-8 text-accent-primary" />
                <h3 className="text-h3 font-bold">Locations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-full p-6 hover:border-accent-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg mb-1">{location.city}</h4>
                        <p className="text-small text-accent-primary mb-2">{location.type}</p>
                        <p className="text-body text-text-muted">{location.country}</p>
                      </div>
                    </div>
                    <p className="text-small text-text-muted leading-relaxed">{location.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-8 justify-center">
                <Users className="w-8 h-8 text-accent-primary" />
                <h3 className="text-h3 font-bold">Strategic Partners</h3>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-full p-6 hover:border-accent-primary/30 transition-all duration-300 text-center"
                  >
                    <h4 className="font-semibold text-xl mb-3 text-accent-primary">{partner.name}</h4>
                    <p className="text-body text-text-muted">{partner.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6">
                Contact Information
              </h2>
              <p className="text-h4 md:text-h3 text-text-muted">
                Reach out to us through any of these channels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href="mailto:info@bionics.com.sa"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                className="bg-bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-large p-6 text-center hover:border-accent-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">General Inquiries</h4>
                <p className="text-accent-primary text-sm">info@bionics.com.sa</p>
              </motion.a>

              <motion.a
                href="mailto:sales@Bionics.com.sa"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-large p-6 text-center hover:border-accent-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Sales</h4>
                <p className="text-accent-primary text-sm">sales@Bionics.com.sa</p>
              </motion.a>

              <motion.a
                href="mailto:support@Bionics.com.sa"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-large p-6 text-center hover:border-accent-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-accent-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Support</h4>
                <p className="text-accent-primary text-sm">support@Bionics.com.sa</p>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-h2 md:text-[38px] lg:text-h2 font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-primary/70">
                Enterprise?
              </span>
            </h2>
            <p className="text-h4 md:text-h3 lg:text-h3 text-text-muted mb-8">
              Join the organizations that have already begun their journey to becoming 
              truly bionic enterprises. Let's discuss how we can help you build the future.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-accent-primary text-text-primary font-semibold rounded-full relative overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-primary/80 to-accent-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
                <span className="relative z-10">Start Your Transformation</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}