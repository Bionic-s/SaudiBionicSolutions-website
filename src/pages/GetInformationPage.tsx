import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Shield, Clock, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function GetInformationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [hasError, setHasError] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please tell us how we can help you';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide more details (minimum 10 characters)';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setHasError(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send information request via existing edge function
      const { data, error: functionError } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          phone: '',
          message: `INFORMATION REQUEST:\n\n${formData.message}`,
        },
      });

      if (functionError) {
        console.error('Submission error:', functionError);
        throw new Error('CONNECTION_ERROR');
      }

      if (data && data.error) {
        console.error('Response error:', data.error);
        throw new Error('SERVER_ERROR');
      }

      console.log('Information request sent successfully:', data);
      setIsSuccess(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 5000);

    } catch (err: any) {
      console.error('Request error:', err);
      setHasError(true);
      
      // Provide user-friendly error messages based on error type
      let userMessage = '';
      
      if (err.message === 'CONNECTION_ERROR') {
        userMessage = 'We are having trouble connecting to our server. Please check your internet connection and try again in a few moments.';
      } else if (err.message === 'SERVER_ERROR') {
        userMessage = 'We are experiencing a temporary issue processing your request. Your message was not sent.';
      } else if (err.message?.toLowerCase().includes('network')) {
        userMessage = 'Network connection issue detected. Please check your internet connection and try again.';
      } else {
        userMessage = 'Something went wrong while sending your request. Please try again.';
      }
      
      setError(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-success/10 border border-success rounded-large p-8 md:p-12 text-center">
              <CheckCircle className="w-20 h-20 text-success mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Received!</h2>
              <p className="text-lg text-text-muted mb-6">
                Thank you for your interest in Bionic Solutions. We have received your request and will respond within 24 hours.
              </p>
              <p className="text-body text-text-muted mb-8">
                A confirmation email has been sent to <strong className="text-accent-primary">{formData.email}</strong>
              </p>
              <div className="space-y-4">
                <Link
                  to="/"
                  className="inline-block px-8 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary transition-all duration-300"
                >
                  Return to Home
                </Link>
                <p className="text-small text-text-muted">
                  Need urgent assistance? Call us or email <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline">info@bionics.com.sa</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get Information
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-8">
              Tell us about your needs and we'll send you detailed information about our AI-driven enterprise solutions. No commitment required.
            </p>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-text-muted">
                <Shield className="w-5 h-5 text-accent-primary" />
                <span className="text-small">Privacy Protected</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-text-muted">
                <Clock className="w-5 h-5 text-accent-primary" />
                <span className="text-small">24h Response Time</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-text-muted">
                <CheckSquare className="w-5 h-5 text-accent-primary" />
                <span className="text-small">No Spam Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-bg-secondary border border-white/10 rounded-large p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-small font-medium mb-2">
                    Your Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-bg-primary border ${
                      fieldErrors.name ? 'border-error' : 'border-white/10'
                    } rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors`}
                    placeholder="John Doe"
                  />
                  {fieldErrors.name && (
                    <p className="text-error text-tiny mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-small font-medium mb-2">
                    Email Address <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-bg-primary border ${
                      fieldErrors.email ? 'border-error' : 'border-white/10'
                    } rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors`}
                    placeholder="john@company.com"
                  />
                  {fieldErrors.email && (
                    <p className="text-error text-tiny mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-small font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-small font-medium mb-2">
                    How Can We Help You? <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-bg-primary border ${
                      fieldErrors.message ? 'border-error' : 'border-white/10'
                    } rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors resize-none`}
                    placeholder="Tell us about your business challenges, technology needs, or questions about our AI-driven solutions..."
                  />
                  {fieldErrors.message && (
                    <p className="text-error text-tiny mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {fieldErrors.message}
                    </p>
                  )}
                  <p className="text-tiny text-text-muted mt-2">
                    The more details you provide, the better we can assist you.
                  </p>
                </div>

                {/* Error Display */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-error/10 border border-error rounded-medium p-4 md:p-5 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-small md:text-body text-error font-medium mb-2">{error}</p>
                        <p className="text-tiny md:text-small text-text-muted">
                          If this problem continues, please contact us directly:
                        </p>
                        <div className="mt-2 space-y-1">
                          <p className="text-tiny md:text-small text-text-primary">
                            Email: <a href="mailto:info@bionics.com.sa" className="text-accent-primary hover:underline font-medium">info@bionics.com.sa</a>
                          </p>
                          <p className="text-tiny md:text-small text-text-primary">
                            Sales: <a href="mailto:sales@bionics.com.sa" className="text-accent-primary hover:underline font-medium">sales@bionics.com.sa</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : hasError ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Information Request
                    </>
                  )}
                </button>

                <p className="text-tiny text-text-muted text-center">
                  By submitting this form, you agree to receive information from Bionic Solutions. We respect your privacy and will never share your data.
                </p>
              </form>

              {/* Alternative Option */}
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-body text-text-muted mb-4">
                  Ready to discuss your project in detail?
                </p>
                <Link
                  to="/book-discovery-call"
                  className="inline-block px-6 py-3 border-2 border-accent-primary text-accent-primary font-semibold rounded-full hover:bg-accent-primary hover:text-text-primary transition-all duration-300"
                >
                  Book Strategic Discovery Call
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
