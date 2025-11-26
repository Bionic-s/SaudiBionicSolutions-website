import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, ArrowRight, Phone, Mail, MessageSquare, Book, HelpCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

// Validation helper functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface FieldErrors {
  name?: string;
  email?: string;
  subject?: string;
  category?: string;
  message?: string;
}

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    priority: 'normal',
    category: '',
    message: '',
  });

  const categories = [
    'Technical Issue',
    'Account & Billing',
    'Product Question',
    'Feature Request',
    'Integration Help',
    'Performance Issue',
    'Security Concern',
    'Other',
  ];

  const priorities = [
    { value: 'low', label: 'Low', description: 'General questions' },
    { value: 'normal', label: 'Normal', description: 'Standard support' },
    { value: 'high', label: 'High', description: 'Business impacted' },
    { value: 'critical', label: 'Critical', description: 'System down' },
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const faqs = [
    {
      question: 'What are your support hours?',
      answer: 'Our standard support is available Sunday-Thursday, 8 AM - 5 PM UTC+3 (Arabian Standard Time). Enterprise clients with premium support have access to 24/7 emergency support.'
    },
    {
      question: 'How do I access the client portal?',
      answer: 'You can access your client portal at portal.bionics.com.sa. If you need login credentials or have trouble accessing your account, please contact support.'
    },
    {
      question: 'What is your typical response time?',
      answer: 'Critical issues: within 1 hour. High priority: within 4 hours. Normal: within 24 hours. Low priority: within 48 hours.'
    },
    {
      question: 'How do I request a new feature?',
      answer: 'Submit a support ticket with the category "Feature Request". Our product team reviews all requests and considers them for our roadmap.'
    },
    {
      question: 'Can I schedule a training session?',
      answer: 'Yes! Contact your account manager or submit a ticket requesting training. We offer both virtual and on-site training options.'
    },
  ];

  // Clear field error when user starts typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (error) setError(null);
  };

  // Handle field blur for real-time validation feedback
  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field);
  };

  // Validate a single field
  const validateField = (field: string): boolean => {
    let error = '';
    
    switch (field) {
      case 'name':
        if (!formData.name.trim()) {
          error = 'Full name is required';
        }
        break;
      case 'email':
        if (!formData.email.trim()) {
          error = 'Email address is required';
        } else if (!validateEmail(formData.email)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'subject':
        if (!formData.subject.trim()) {
          error = 'Subject is required';
        }
        break;
      case 'category':
        if (!formData.category) {
          error = 'Please select a category';
        }
        break;
      case 'message':
        if (!formData.message.trim()) {
          error = 'Please describe your issue';
        }
        break;
    }
    
    if (error) {
      setFieldErrors(prev => ({ ...prev, [field]: error }));
      return false;
    }
    return true;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const errors: FieldErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.category) {
      errors.category = 'Please select a category';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Please describe your issue';
      isValid = false;
    }

    setFieldErrors(errors);
    setTouched({ name: true, email: true, subject: true, category: true, message: true });
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setError('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error: submitError } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          message: `[SUPPORT TICKET]\n\nSubject: ${formData.subject}\nCategory: ${formData.category}\nPriority: ${formData.priority}\n\nDescription:\n${formData.message}`,
        },
      });

      if (submitError) {
        throw new Error(submitError.message || 'Failed to submit ticket');
      }

      if (data?.error) {
        throw new Error(data.error.message || 'Failed to submit ticket');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Support form error:', err);
    }
  };

  // Helper component for required field indicator
  const RequiredIndicator = () => (
    <span className="text-red-400 ml-1" aria-hidden="true">*</span>
  );

  // Helper component for inline error message
  const FieldError = ({ message, id }: { message?: string; id: string }) => (
    message ? (
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className="mt-1.5 text-sm text-red-400 flex items-center gap-1"
        id={id}
        role="alert"
      >
        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
        {message}
      </motion.p>
    ) : null
  );

  // Helper function to get input border class based on error state
  const getInputClassName = (fieldName: keyof FieldErrors, baseClass: string = '') => {
    const hasError = fieldErrors[fieldName] && touched[fieldName];
    return `${baseClass} w-full px-4 py-3 bg-bg-primary border rounded-medium text-text-primary focus:outline-none focus:ring-2 transition-all ${
      hasError 
        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
        : 'border-white/10 focus:border-accent-primary focus:ring-accent-primary/20'
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-primary to-bg-secondary/50 pt-32 pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-accent-primary/5 via-accent-primary/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-accent-primary/3 via-accent-primary/5 to-transparent blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {!isSubmitted ? (
          <>
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm"
              >
                <HelpCircle className="w-4 h-4 text-accent-primary" />
                <span className="text-sm text-white/80">Customer Support</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-h1 md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                How Can We <span className="gradient-text">Help?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-h4 md:text-h3 text-white/70 max-w-3xl mx-auto"
              >
                Our support team is here to help you get the most out of your Bionic Solutions.
              </motion.p>
            </motion.div>

            {/* Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <a
                href="mailto:support@Bionics.com.sa"
                className="bg-bg-secondary/50 border border-white/10 rounded-large p-6 text-center hover:border-accent-primary/50 transition-all"
              >
                <Mail className="w-8 h-8 text-accent-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Email Support</h3>
                <p className="text-sm text-accent-primary">support@Bionics.com.sa</p>
              </a>
              <a
                href="tel:+966112345679"
                className="bg-bg-secondary/50 border border-white/10 rounded-large p-6 text-center hover:border-accent-primary/50 transition-all"
              >
                <Phone className="w-8 h-8 text-accent-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-sm text-accent-primary">+966 11 234 5679</p>
              </a>
              <div className="bg-bg-secondary/50 border border-white/10 rounded-large p-6 text-center">
                <Clock className="w-8 h-8 text-accent-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Support Hours</h3>
                <p className="text-sm text-text-muted">Sun-Thu, 8AM-5PM</p>
                <p className="text-xs text-text-muted mt-1">UTC+3 (AST)</p>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-h3 font-bold text-center mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-bg-secondary border border-white/10 rounded-large overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-semibold text-white">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-accent-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-text-muted" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4 text-text-muted">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Support Ticket Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-bg-secondary border border-white/10 rounded-large p-8 md:p-12 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-accent-primary" />
                  <h2 className="text-h3 font-bold">Submit a Support Ticket</h2>
                </div>

                {/* Required fields notice */}
                <p className="text-sm text-text-muted mb-6">
                  Fields marked with <span className="text-red-400">*</span> are required
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name and Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-small text-text-muted mb-2">
                        Full Name<RequiredIndicator />
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.name && touched.name}
                        aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                        className={getInputClassName('name')}
                        placeholder="John Smith"
                      />
                      <FieldError message={touched.name ? fieldErrors.name : undefined} id="name-error" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-small text-text-muted mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-small text-text-muted mb-2">
                      Email Address<RequiredIndicator />
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email && touched.email}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      className={getInputClassName('email')}
                      placeholder="john@company.com"
                    />
                    <FieldError message={touched.email ? fieldErrors.email : undefined} id="email-error" />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-small text-text-muted mb-2">
                      Subject<RequiredIndicator />
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={() => handleBlur('subject')}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.subject && touched.subject}
                      aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                      className={getInputClassName('subject')}
                      placeholder="Brief description of your issue"
                    />
                    <FieldError message={touched.subject ? fieldErrors.subject : undefined} id="subject-error" />
                  </div>

                  {/* Category and Priority */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-small text-text-muted mb-2">
                        Category<RequiredIndicator />
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        onBlur={() => handleBlur('category')}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.category && touched.category}
                        aria-describedby={fieldErrors.category ? 'category-error' : undefined}
                        className={getInputClassName('category')}
                      >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat} className="bg-bg-primary">
                            {cat}
                          </option>
                        ))}
                      </select>
                      <FieldError message={touched.category ? fieldErrors.category : undefined} id="category-error" />
                    </div>
                    <div>
                      <label htmlFor="priority" className="block text-small text-text-muted mb-2">
                        Priority
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      >
                        {priorities.map((p) => (
                          <option key={p.value} value={p.value} className="bg-bg-primary">
                            {p.label} - {p.description}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-small text-text-muted mb-2">
                      Describe your issue<RequiredIndicator />
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.message && touched.message}
                      aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                      rows={6}
                      className={`${getInputClassName('message')} resize-none`}
                      placeholder="Please provide as much detail as possible, including any error messages, steps to reproduce, and what you expected to happen..."
                    />
                    <FieldError message={touched.message ? fieldErrors.message : undefined} id="message-error" />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{error}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Ticket</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Knowledge Base Link */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="max-w-2xl mx-auto mt-8 text-center"
            >
              <div className="bg-bg-secondary/50 border border-white/10 rounded-large p-6">
                <Book className="w-8 h-8 text-accent-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Looking for Documentation?</h3>
                <p className="text-sm text-text-muted mb-4">
                  Check out our framework guide for detailed documentation and best practices.
                </p>
                <a
                  href="/SLA.pdf"
                  download="Bionic-Solutions-SLA.pdf"
                  className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 transition-colors"
                >
                  <span>View Framework Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        ) : (
          /* Success Section */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 border-2 border-green-500 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-h1 md:text-5xl font-bold text-white mb-4">
                Ticket Submitted!
              </h2>
              <p className="text-h4 text-white/70 mb-8">
                We've received your support request and will respond shortly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-bg-secondary border border-white/10 rounded-large p-8 mb-8"
            >
              <div className="text-left">
                <h3 className="font-semibold text-white mb-4">Expected Response Times:</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span>Critical issues: Within 1 hour</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span>High priority: Within 4 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span>Normal priority: Within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span>Low priority: Within 48 hours</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <span>Return to homepage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
