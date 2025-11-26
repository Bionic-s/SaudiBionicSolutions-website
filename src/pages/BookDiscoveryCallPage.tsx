import { motion } from 'framer-motion';
import { Calendar, Clock, Video, CheckCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

export default function BookDiscoveryCallPage() {

  const benefits = [
    {
      icon: Calendar,
      title: 'Strategic Assessment',
      description: 'Discuss your business challenges and digital transformation goals with our experts',
    },
    {
      icon: CheckCircle,
      title: 'Custom Solutions',
      description: 'Learn how our AI-driven solutions can address your specific needs',
    },
    {
      icon: Video,
      title: 'Expert Consultation',
      description: 'Get insights from our technology leaders with proven enterprise experience',
    },
  ];

  const meetingDetails = [
    { icon: Clock, label: 'Duration', value: '30-45 minutes' },
    { icon: Video, label: 'Format', value: 'Video Conference (Zoom/Teams)' },
    { icon: Calendar, label: 'Availability', value: 'Sunday-Thursday, 8AM-5PM UTC+3' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-accent-primary/10 border border-accent-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-accent-primary text-small font-semibold">30-Minute Strategic Consultation - Complimentary</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Book Your Strategic Discovery Call
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-6">
              Schedule a complimentary consultation with our technology experts to explore how Bionic Solutions can transform your enterprise with AI-driven innovation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-small text-text-muted">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Quick Response Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Available Slots Limited</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              What to Expect During Your Discovery Call
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-bg-secondary border border-white/5 rounded-large p-6 hover:border-accent-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <h3 className="text-h4 font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-body text-text-muted">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meeting Details */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Meeting Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {meetingDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-bg-secondary/30 rounded-large p-4"
                >
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <detail.icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">{detail.label}</p>
                    <p className="text-body font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 md:py-20 bg-bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-bg-secondary border border-white/10 rounded-large p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Schedule Your Discovery Call
              </h2>
              <p className="text-center text-text-muted mb-8 max-w-2xl mx-auto">
                Choose a date and time that works best for you. You'll receive a confirmation email with meeting details and a calendar invite.
              </p>
              
              {/* Booking Form Component */}
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-bg-secondary border border-white/5 rounded-large p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How to Prepare for Your Call
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                  <span className="text-body text-text-muted">
                    Identify your key business challenges and digital transformation objectives
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                  <span className="text-body text-text-muted">
                    Consider your current technology stack and integration requirements
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                  <span className="text-body text-text-muted">
                    Prepare questions about our solutions, implementation process, and support
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-1" />
                  <span className="text-body text-text-muted">
                    Have stakeholders available if needed for comprehensive discussion
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-12 md:py-16 bg-bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Need More Information First?
            </h2>
            <p className="text-body text-text-muted mb-8">
              Not ready to book a call yet? Request information and we'll send you details about our solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Link
                to="/get-information"
                className="flex flex-col items-center justify-center space-y-3 bg-bg-secondary border border-white/10 rounded-large p-6 hover:border-accent-primary/50 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-accent-primary group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="text-sm text-text-muted">Get Information</p>
                  <p className="text-body font-medium">Request Details</p>
                </div>
              </Link>
              <a
                href="mailto:sales@Bionics.com.sa"
                className="flex flex-col items-center justify-center space-y-3 bg-bg-secondary border border-white/10 rounded-large p-6 hover:border-accent-primary/50 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-accent-primary group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="text-sm text-text-muted">Email Us</p>
                  <p className="text-body font-medium">sales@Bionics.com.sa</p>
                </div>
              </a>
              <Link
                to="/contact"
                className="flex flex-col items-center justify-center space-y-3 bg-bg-secondary border border-white/10 rounded-large p-6 hover:border-accent-primary/50 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 text-accent-primary group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="text-sm text-text-muted">Contact Page</p>
                  <p className="text-body font-medium">Visit Contact</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
