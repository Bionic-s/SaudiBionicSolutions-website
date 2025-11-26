import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { format, addDays, isSunday, isMonday, isTuesday, isWednesday, isThursday, isSaturday, isBefore, startOfDay } from 'date-fns';
import { supabase } from '../lib/supabase';

interface BookingFormProps {
  onSuccess?: (bookingData: any) => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [hasError, setHasError] = useState(false);

  // Available time slots (Sunday-Thursday, 8AM-5PM UTC+3)
  const timeSlots = [
    '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM',
  ];

  // Get next 30 days for booking
  const getAvailableDates = () => {
    const dates: Date[] = [];
    const today = startOfDay(new Date());
    
    for (let i = 1; i <= 30; i++) {
      const date = addDays(today, i);
      // Only Sunday-Thursday (business days in Saudi Arabia)
      if (isSunday(date) || isMonday(date) || isTuesday(date) || isWednesday(date) || isThursday(date)) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

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

    if (!selectedDate) {
      errors.date = 'Please select a date';
    }

    if (!selectedTime) {
      errors.time = 'Please select a time slot';
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
      // Format booking data as a message for the contact form endpoint
      const bookingMessage = `
DISCOVERY CALL BOOKING REQUEST

Preferred Date & Time: ${selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Not specified'} at ${selectedTime}

Additional Information:
${formData.notes || 'No additional notes provided.'}

---
This is a discovery call booking request. Please contact the client to schedule the meeting and send calendar invitation.
      `.trim();

      // Use the existing submit-contact endpoint which is already deployed
      const { data, error: functionError } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone || 'Not provided',
          date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
          timeSlot: selectedTime,
          notes: formData.notes || 'No additional notes provided.',
        },
      });

      if (functionError) {
        console.error('Edge function error:', functionError);
        throw new Error('CONNECTION_ERROR');
      }

      // Check if the response contains an error
      if (data && data.error) {
        console.error('Response error:', data.error);
        throw new Error('SERVER_ERROR');
      }

      // Success! Email was sent via the contact form endpoint
      console.log('Booking request sent successfully:', data);
      setIsSuccess(true);
      
      if (onSuccess) {
        onSuccess({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
          timeSlot: selectedTime,
          notes: formData.notes,
        });
      }

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', company: '', phone: '', notes: '' });
        setSelectedDate(null);
        setSelectedTime('');
      }, 5000);

    } catch (err: any) {
      console.error('Booking error:', err);
      setHasError(true);
      
      // Provide user-friendly error messages based on error type
      let userMessage = '';
      
      if (err.message === 'CONNECTION_ERROR') {
        userMessage = 'We are having trouble connecting to our server. Please check your internet connection and try again in a few moments.';
      } else if (err.message === 'SERVER_ERROR') {
        userMessage = 'We are experiencing a temporary issue processing your booking. Your request was not completed.';
      } else if (err.message?.toLowerCase().includes('network')) {
        userMessage = 'Network connection issue detected. Please check your internet connection and try again.';
      } else {
        userMessage = 'Something went wrong while processing your booking. Please try again.';
      }
      
      setError(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear field error when user types
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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-success/10 border border-success rounded-large p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <h3 className="text-h3 font-bold mb-2">Booking Confirmed!</h3>
        <p className="text-body text-text-muted mb-4">
          Thank you for scheduling a discovery call with Bionic Solutions.
        </p>
        <p className="text-small text-text-muted mb-4">
          A confirmation email has been sent to our team at <strong className="text-accent-primary">m.aljawharji@bionics.com.sa</strong>
        </p>
        <p className="text-small text-text-muted mb-4">
          You will receive a confirmation email at <strong className="text-accent-primary">{formData.email}</strong> with meeting details shortly.
        </p>
        <p className="text-tiny text-text-muted mt-4">
          <strong>Preferred Time:</strong> {selectedDate && format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Date Selection */}
      <div>
        <label className="block text-small font-medium mb-3">
          Select a Date <span className="text-error">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {availableDates.slice(0, 12).map((date, index) => {
            const isSelected = selectedDate && format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(''); // Reset time when date changes
                  if (fieldErrors.date) {
                    setFieldErrors(prev => {
                      const newErrors = { ...prev };
                      delete newErrors.date;
                      return newErrors;
                    });
                  }
                }}
                className={`p-3 rounded-medium text-center transition-all duration-200 ${
                  isSelected
                    ? 'bg-accent-primary text-text-primary font-semibold'
                    : 'bg-bg-secondary border border-white/10 hover:border-accent-primary/50 text-text-muted hover:text-text-primary'
                }`}
              >
                <div className="text-tiny">{format(date, 'EEE')}</div>
                <div className="text-body font-semibold">{format(date, 'd')}</div>
                <div className="text-tiny">{format(date, 'MMM')}</div>
              </button>
            );
          })}
        </div>
        {fieldErrors.date && (
          <p className="text-error text-tiny mt-2 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {fieldErrors.date}
          </p>
        )}
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label className="block text-small font-medium mb-3">
            Select a Time (UTC+3) <span className="text-error">*</span>
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => {
                    setSelectedTime(time);
                    if (fieldErrors.time) {
                      setFieldErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.time;
                        return newErrors;
                      });
                    }
                  }}
                  className={`p-2 rounded-medium text-center transition-all duration-200 text-small ${
                    isSelected
                      ? 'bg-accent-primary text-text-primary font-semibold'
                      : 'bg-bg-secondary border border-white/10 hover:border-accent-primary/50 text-text-muted hover:text-text-primary'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
          {fieldErrors.time && (
            <p className="text-error text-tiny mt-2 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {fieldErrors.time}
            </p>
          )}
        </motion.div>
      )}

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-small font-medium mb-2">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-bg-secondary border ${
              fieldErrors.name ? 'border-error' : 'border-white/10'
            } rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors`}
            placeholder="John Doe"
          />
          {fieldErrors.name && (
            <p className="text-error text-tiny mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {fieldErrors.name}
            </p>
          )}
        </div>

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
            className={`w-full px-4 py-3 bg-bg-secondary border ${
              fieldErrors.email ? 'border-error' : 'border-white/10'
            } rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors`}
            placeholder="john@company.com"
          />
          {fieldErrors.email && (
            <p className="text-error text-tiny mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-small font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
            placeholder="+966 XX XXX XXXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-small font-medium mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors resize-none"
          placeholder="Tell us about your project requirements or questions..."
        />
      </div>

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
                  Email: <a href="mailto:m.aljawharji@bionics.com.sa" className="text-accent-primary hover:underline font-medium">m.aljawharji@bionics.com.sa</a>
                </p>
                <p className="text-tiny md:text-small text-text-primary">
                  Phone: <a href="tel:+966XXXXXXXXX" className="text-accent-primary hover:underline font-medium">+966 XX XXX XXXX</a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : hasError ? (
          <>
            <AlertCircle className="w-5 h-5" />
            Try Again
          </>
        ) : (
          <>
            <CalendarIcon className="w-5 h-5" />
            Confirm Booking
          </>
        )}
      </button>

      <p className="text-tiny text-text-muted text-center">
        By booking this call, you agree to receive communication from Bionic Solutions regarding your inquiry.
      </p>
    </form>
  );
}
