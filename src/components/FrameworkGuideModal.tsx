import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FrameworkGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FrameworkGuideModal = ({ isOpen, onClose }: FrameworkGuideModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Call edge function to capture lead and send PDF
      const { data, error: submitError } = await supabase.functions.invoke('capture-lead', {
        body: {
          name: formData.name,
          email: formData.email,
          magnet_type: 'framework_guide',
          stage: 'stage1',
        },
      });

      if (submitError) {
        throw new Error(submitError.message || 'Failed to submit');
      }

      if (data?.error) {
        throw new Error(data.error.message || 'Failed to submit');
      }

      // Success - trigger PDF download
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Simulate PDF download (in production, this would be a real PDF)
      const link = document.createElement('a');
      link.href = '/assets/Bionic_Enterprise_Framework_Implementation_Guide.pdf';
      link.download = 'Bionic-Enterprise-Framework-Implementation-Guide.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close modal after 5 seconds (increased from 3 to give users more time to see success message)
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', email: '' });
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      console.error('Lead capture error:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-bg-secondary border border-white/10 rounded-xlarge p-8 md:p-12 max-w-2xl w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/5 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-text-muted hover:text-text-primary" />
              </button>

              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary" />

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-h3 font-semibold mb-2 text-success">Success!</h3>
                  <p className="text-body text-text-muted mb-4">
                    Your download will begin shortly. Check your email for additional resources.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                      className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Download className="w-8 h-8 text-accent-primary" />
                    </motion.div>
                    <h2 className="text-h2 font-bold mb-4">
                      Download Your Free Enterprise Framework Guide
                    </h2>
                    <p className="text-body text-text-muted">
                      Get our comprehensive 8-page guide on AI-driven enterprise transformation. Learn proven strategies from our research and methodology.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-error/10 border border-error/20 rounded-medium p-4 flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                        <p className="text-body text-error">{error}</p>
                      </div>
                    )}

                    <div>
                      <label htmlFor="modal-name" className="block text-small text-text-muted mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-small text-text-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-bg-primary border border-white/10 rounded-medium text-text-primary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-10 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-0.5 hover:shadow-button transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          <span>Download Free Guide</span>
                        </>
                      )}
                    </button>

                    <p className="text-tiny text-text-muted text-center">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
