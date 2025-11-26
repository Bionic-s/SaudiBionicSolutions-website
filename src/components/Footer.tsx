import { Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutions = [
    { name: 'AI Systems — Intelligence Layer', href: '/solutions/ai-systems' },
    { name: 'Automation — Process Layer', href: '/solutions/automation' },
    { name: 'Data, Analytics & ERP — Insight Layer', href: '/solutions/data-analytics' },
    { name: 'Enterprise Service Management — Coordination Layer', href: '/solutions/service-management' },
    { name: 'Cybersecurity & GRC — Protection Layer', href: '/solutions/cybersecurity-grc' },
    { name: 'Digital Infrastructure & Cloud — Foundation Layer', href: '/solutions/infrastructure-cloud' },
  ];

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Sales', href: '/sales' },
    { name: 'Support', href: '/support' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Social Media, Logo and Description */}
          <div className="lg:col-span-1">
            {/* Social Media Buttons */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/company/bionic-solutions-ksa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-primary rounded-full flex items-center justify-center hover:bg-accent-primary hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-text-muted group-hover:text-text-primary" />
              </a>
              <a
                href="https://twitter.com/bionics_Sa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-primary rounded-full flex items-center justify-center hover:bg-accent-primary hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-text-muted group-hover:text-text-primary" />
              </a>
            </div>
            
            {/* Logo */}
            <Link to="/" className="inline-block mb-4 hover:opacity-80 transition-opacity footer-logo-link">
              <img 
                src="/bionic-full-dark.svg" 
                alt="Bionic Solutions" 
                className="h-10 w-auto footer-logo"
                style={{ filter: 'brightness(0) saturate(100%) invert(79%) sepia(13%) saturate(2174%) hue-rotate(164deg) brightness(99%) contrast(93%)' }}
              />
            </Link>
            
            {/* Empowerment Text */}
            <p className="text-body text-text-muted">
              Empowering your success with AI-driven innovation.
            </p>
          </div>

          {/* Our Solutions */}
          <div className="lg:col-span-1">
            <h3 className="text-h4 font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link
                    to={solution.href}
                    className="text-body text-text-muted hover:text-accent-primary transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-h4 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-body text-text-muted hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-h4 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-body text-text-muted hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-h4 font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:info@bionics.com.sa"
                className="block text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                info@bionics.com.sa
              </a>
              <a
                href="mailto:sales@Bionics.com.sa"
                className="block text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                sales@Bionics.com.sa
              </a>
              <a
                href="mailto:support@Bionics.com.sa"
                className="block text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                support@Bionics.com.sa
              </a>
            </div>
            <Link
              to="/book-discovery-call"
              className="inline-block px-6 py-3 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-small text-text-muted">
              &copy; {currentYear} Bionic Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/about" className="text-small text-text-muted hover:text-accent-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-small text-text-muted hover:text-accent-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
