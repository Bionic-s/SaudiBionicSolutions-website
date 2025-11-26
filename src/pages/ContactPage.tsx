import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ArrowRight, Download, FileText, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import OfficeLocations from '../components/OfficeLocations';
import { contactEmails, contactPhone, businessHours } from '../data/contactData';

// Validation helper functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  // Check if phone has at least 5 digits (allowing spaces, dashes, etc.)
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '+966',
    phone: '',
    message: '',
  });

  // Common countries for phone number dropdown
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
    { code: '+39', name: 'Italy', flag: 'IT' },
    { code: '+34', name: 'Spain', flag: 'ES' },
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
    
    // Clear the specific field error when user starts typing
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (error) setError(null);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setFormData({
      ...formData,
      country: newCountry,
      phone: '', // Reset phone number when country changes
    });
    if (fieldErrors.phone) {
      setFieldErrors(prev => ({ ...prev, phone: undefined }));
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
      case 'phone':
        if (!formData.phone.trim()) {
          error = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'company':
        if (!formData.company.trim()) {
          error = 'Company name is required';
        }
        break;
      case 'message':
        if (!formData.message.trim()) {
          error = 'Please tell us about your project';
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

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Validate company
    if (!formData.company.trim()) {
      errors.company = 'Company name is required';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Please tell us about your project';
      isValid = false;
    }

    setFieldErrors(errors);
    // Mark all fields as touched to show all errors
    setTouched({ name: true, email: true, phone: true, company: true, message: true });
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setError('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error: submitError } = await supabase.functions.invoke('contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: `${formData.country} ${formData.phone}`,
          message: formData.message,
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
      console.error('Contact form error:', err);
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
    return `${baseClass} w-full px-5 py-4 bg-bg-primary border rounded-medium text-text-primary focus:outline-none focus:ring-2 transition-all ${
      hasError 
        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
        : 'border-white/10 focus:border-accent-primary focus:ring-accent-primary/20'
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-primary to-bg-secondary/50 grid-pattern pt-32 pb-24 relative overflow-hidden">
      {/* Neural network background effect */}
      <div className="absolute inset-0 gradient-overlay"></div>
      
      {/* Subtle tech background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neural network nodes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-accent-primary/5 via-accent-primary/10 to-transparent blur-3xl"></div>
        
        {/* Tech accent glow */}
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-accent-primary/3 via-accent-primary/5 to-transparent blur-2xl"></div>

        {/* Subtle animated elements */}
        <motion.div
          className="absolute top-20 right-20 w-1 h-1 bg-accent-primary rounded-full opacity-40"
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        
        <motion.div
          className="absolute bottom-32 left-32 w-2 h-2 bg-accent-primary/60 rounded-full blur-sm"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        ></motion.div>
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
              {/* Mission notification badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
                </span>
                <span className="text-sm text-white/80">Ready for Enterprise Transformation</span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-h1 md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Let's Build Your <span className="gradient-text">AI-First Enterprise</span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-h4 md:text-h3 text-white/70 max-w-3xl mx-auto"
              >
                Ready to transform your enterprise with AI-driven solutions that integrate across all business layers?
              </motion.p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-bg-secondary border border-white/10 rounded-large p-10 md:p-16 shadow-2xl backdrop-blur-md">
                {/* Required fields notice */}
                <p className="text-sm text-text-muted mb-6">
                  Fields marked with <span className="text-red-400">*</span> are required
                </p>

                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {/* Name and Company - Two column layout on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Field */}
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

                    {/* Company Field */}
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
                  </div>

                  {/* Email Field - Full width */}
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
                      placeholder="john.smith@company.com"
                    />
                    <FieldError message={touched.email ? fieldErrors.email : undefined} id="email-error" />
                  </div>

                  {/* Phone Field - Full width on mobile */}
                  <div>
                    <label htmlFor="country" className="block text-small text-text-muted mb-2">
                      Phone Number<RequiredIndicator />
                    </label>
                    <div className="w-full flex flex-col sm:flex-row gap-2 items-stretch sm:items-start">
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleCountryChange}
                        className="w-full sm:w-40 flex-shrink-0 px-4 py-4 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code} className="bg-bg-primary">
                            {country.flag} {country.name} ({country.code})
                          </option>
                        ))}
                      </select>
                      <div className="flex-1">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur('phone')}
                          aria-required="true"
                          aria-invalid={!!fieldErrors.phone && touched.phone}
                          aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                          className={getInputClassName('phone')}
                          placeholder="50 123 4567"
                        />
                        <FieldError message={touched.phone ? fieldErrors.phone : undefined} id="phone-error" />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="message" className="block text-small text-text-muted">
                        A few words about your project<RequiredIndicator />
                      </label>
                      <span className="text-small text-text-muted">
                        {formData.message.length}/1000
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.message && touched.message}
                      aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                      maxLength={1000}
                      rows={8}
                      className={`${getInputClassName('message')} resize-none`}
                      placeholder="Tell us about your enterprise transformation goals..."
                    />
                    <FieldError message={touched.message ? fieldErrors.message : undefined} id="message-error" />
                  </div>

                  {/* Error Message */}
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-5 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-primary/90 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Contact us</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Alternative Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="max-w-5xl mx-auto mt-16"
            >
              <div className="text-center mb-8">
                <h3 className="text-h3 font-bold mb-2">Other Ways to Reach Us</h3>
                <p className="text-body text-text-muted">Choose the contact method that works best for you</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="bg-bg-secondary border border-white/10 rounded-large p-6 hover:border-accent-primary/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-accent-primary" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Call Us</h4>
                    <a 
                      href={contactPhone.href} 
                      className="text-accent-primary hover:text-accent-primary/80 transition-colors mb-1"
                    >
                      {contactPhone.number}
                    </a>
                    <p className="text-small text-text-muted">{contactPhone.hours}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-bg-secondary border border-white/10 rounded-large p-6 hover:border-accent-primary/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-accent-primary" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Email Us</h4>
                    <a 
                      href={`mailto:${contactEmails.general}`} 
                      className="text-accent-primary hover:text-accent-primary/80 transition-colors mb-1"
                    >
                      {contactEmails.general}
                    </a>
                    <p className="text-small text-text-muted">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Our Offices */}
              <OfficeLocations variant="card" showDescription={false} />

              {/* Office Hours */}
              <div className="mt-8 bg-bg-secondary border border-white/10 rounded-large p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">Office Hours</h4>
                    <div className="space-y-2 text-body text-text-muted">
                      <div className="font-medium text-white">{businessHours.workingDays}</div>
                      <div>{businessHours.hours}</div>
                      <div className="text-small">{businessHours.timezone}</div>
                      <div className="mt-3 pt-3 border-t border-white/10">{businessHours.offDays}</div>
                      <div className="text-small text-accent-primary mt-2">{businessHours.emergency}</div>
                    </div>
                  </div>
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
            {/* Success Icon */}
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

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-h1 md:text-5xl font-bold text-white mb-4">
                Thank you for reaching out!
              </h2>
              <p className="text-h4 text-white/70 mb-8">
                We're excited to learn more about your enterprise transformation journey.
              </p>
            </motion.div>

            {/* Timeline Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-bg-secondary border border-white/10 rounded-large p-8 mb-8 backdrop-blur-md"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-3xl font-bold text-accent-primary">24-48 hours</div>
                <div className="text-white/60">response time</div>
              </div>
              <p className="text-white/70">
                Our enterprise solutions team will review your message and respond within 1-2 business days with next steps for your AI transformation initiative.
              </p>
            </motion.div>

            {/* Additional Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Download Framework Guide */}
              <a
                href="/assets/Bionic_Enterprise_Framework_Implementation_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Framework Guide</span>
              </a>

              {/* Explore Case Studies */}
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-primary border border-white/10 rounded-full text-text-muted hover:border-accent-primary/50 hover:text-text-primary transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>View Case Studies</span>
              </Link>
            </motion.div>

            {/* Return to Home */}
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
