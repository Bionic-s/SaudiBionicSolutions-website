import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ArrowRight, Download, FileText, Phone, Mail, TrendingUp, Target, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

// Validation helper functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 5;
};

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

export default function SalesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '+966',
    phone: '',
    companySize: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const countries = [
    { code: '+966', name: 'Saudi Arabia', flag: 'SA' },
    { code: '+971', name: 'UAE', flag: 'AE' },
    { code: '+965', name: 'Kuwait', flag: 'KW' },
    { code: '+973', name: 'Bahrain', flag: 'BH' },
    { code: '+974', name: 'Qatar', flag: 'QA' },
    { code: '+968', name: 'Oman', flag: 'OM' },
    { code: '+1', name: 'USA/Canada', flag: 'US' },
    { code: '+44', name: 'UK', flag: 'GB' },
    { code: '+33', name: 'France', flag: 'FR' },
    { code: '+49', name: 'Germany', flag: 'DE' },
  ];

  const companySizes = [
    '1-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees',
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+',
  ];

  const timelines = [
    'Immediate (within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Just exploring',
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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
          error = 'Business email is required';
        } else if (!validateEmail(formData.email)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'company':
        if (!formData.company.trim()) {
          error = 'Company name is required';
        }
        break;
      case 'message':
        if (!formData.message.trim()) {
          error = 'Please describe your project';
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
      errors.email = 'Business email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.company.trim()) {
      errors.company = 'Company name is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Please describe your project';
      isValid = false;
    }

    setFieldErrors(errors);
    setTouched({ name: true, email: true, company: true, message: true });
    
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
          message: `[SALES INQUIRY]\n\nJob Title: ${formData.jobTitle}\nPhone: ${formData.country} ${formData.phone}\nCompany Size: ${formData.companySize}\nBudget Range: ${formData.budget}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`,
        },
      });

      if (submitError) {
        throw new Error(submitError.message || 'Failed to submit form');
      }

      if (data?.error) {
        throw new Error(data.error.message || 'Failed to submit form');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Sales form error:', err);
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
                <TrendingUp className="w-4 h-4 text-accent-primary" />
                <span className="text-sm text-white/80">Enterprise Sales</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-h1 md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Contact <span className="gradient-text">Sales</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-h4 md:text-h3 text-white/70 max-w-3xl mx-auto"
              >
                Ready to transform your enterprise? Our sales team will help you find the perfect solution for your business needs.
              </motion.p>
            </motion.div>

            {/* Sales Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-bg-secondary/50 border border-white/10 rounded-large p-6 text-center">
                <Target className="w-8 h-8 text-accent-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Custom Solutions</h3>
                <p className="text-sm text-text-muted">Tailored packages for your specific requirements</p>
              </div>
              <div className="bg-bg-secondary/50 border border-white/10 rounded-large p-6 text-center">
                <Presentation className="w-8 h-8 text-accent-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Live Demo</h3>
                <p className="text-sm text-text-muted">See our solutions in action with a personalized demo</p>
              </div>
              <div className="bg-bg-secondary/50 border border-white/10 rounded-large p-6 text-center">
                <TrendingUp className="w-8 h-8 text-accent-primary mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">ROI Analysis</h3>
                <p className="text-sm text-text-muted">Detailed projections for your investment</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-bg-secondary border border-white/10 rounded-large p-8 md:p-12 shadow-2xl backdrop-blur-md">
                {/* Required fields notice */}
                <p className="text-sm text-text-muted mb-6">
                  Fields marked with <span className="text-red-400">*</span> are required
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name and Job Title */}
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
                      <label htmlFor="jobTitle" className="block text-small text-text-muted mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                        placeholder="CTO, IT Director, etc."
                      />
                    </div>
                  </div>

                  {/* Company and Size */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-small text-text-muted mb-2">
                        Company<RequiredIndicator />
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={() => handleBlur('company')}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.company && touched.company}
                        aria-describedby={fieldErrors.company ? 'company-error' : undefined}
                        className={getInputClassName('company')}
                        placeholder="Your Company"
                      />
                      <FieldError message={touched.company ? fieldErrors.company : undefined} id="company-error" />
                    </div>
                    <div>
                      <label htmlFor="companySize" className="block text-small text-text-muted mb-2">
                        Company Size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      >
                        <option value="">Select size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size} className="bg-bg-primary">
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-small text-text-muted mb-2">
                        Business Email<RequiredIndicator />
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
                    <div>
                      <label htmlFor="phone" className="block text-small text-text-muted mb-2">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-28 px-2 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none text-sm"
                        >
                          {countries.map((c) => (
                            <option key={c.code} value={c.code} className="bg-bg-primary">
                              {c.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                          placeholder="50 123 4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-small text-text-muted mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-bg-primary">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-small text-text-muted mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((t) => (
                          <option key={t} value={t} className="bg-bg-primary">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-small text-text-muted mb-2">
                      Tell us about your project<RequiredIndicator />
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
                      rows={5}
                      className={`${getInputClassName('message')} resize-none`}
                      placeholder="Describe your business challenges and goals..."
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
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Quote</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="max-w-2xl mx-auto mt-12"
            >
              <div className="bg-bg-secondary border border-white/10 rounded-large p-8">
                <div className="text-center mb-6">
                  <h3 className="text-h3 font-bold mb-2">Prefer Direct Contact?</h3>
                  <p className="text-body text-text-muted">Our sales team is ready to assist you</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="mailto:sales@Bionics.com.sa"
                    className="flex items-center gap-4 p-4 bg-bg-primary rounded-large hover:border-accent-primary/50 border border-white/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email Sales</p>
                      <p className="text-sm text-accent-primary">sales@Bionics.com.sa</p>
                    </div>
                  </a>
                  <a
                    href="tel:+966112345678"
                    className="flex items-center gap-4 p-4 bg-bg-primary rounded-large hover:border-accent-primary/50 border border-white/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Call Sales</p>
                      <p className="text-sm text-accent-primary">+966 11 234 5678</p>
                    </div>
                  </a>
                </div>
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
                Thank you for your interest!
              </h2>
              <p className="text-h4 text-white/70 mb-8">
                A sales representative will contact you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-bg-secondary border border-white/10 rounded-large p-8 mb-8"
            >
              <p className="text-white/70">
                While you wait, feel free to explore our case studies and framework documentation to learn more about how we've helped similar organizations achieve their goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Case Studies</span>
              </Link>
              <a
                href="/bionic-enterprise-framework-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Framework Guide</span>
              </a>
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
