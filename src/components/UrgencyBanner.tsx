import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target to end of current month
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

    const calculateTimeLeft = () => {
      const difference = endOfMonth.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-y border-accent-primary/20">
      <div className="container mx-auto px-4 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock className="w-6 h-6 text-accent-primary" />
            </motion.div>
            <div>
              <p className="text-text-primary font-semibold text-lg">
                Free Consultation for AI Transformation
              </p>
              <p className="text-text-muted text-sm">
                Schedule your assessment this month
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Countdown Timer - Mobile Responsive */}
            <div className="flex items-center justify-center space-x-1 sm:space-x-2">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hrs' },
                { value: timeLeft.minutes, label: 'Min' },
                { value: timeLeft.seconds, label: 'Sec' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-bg-primary border border-white/10 rounded-medium px-2 py-1 sm:px-3 sm:py-2 min-w-[45px] sm:min-w-[60px]">
                    <div className="text-xs sm:text-h4 font-bold text-accent-primary">
                      {String(item.value).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-tiny text-text-muted mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-accent-primary text-text-primary font-semibold rounded-medium hover:bg-accent-secondary hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap text-sm sm:text-base"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
