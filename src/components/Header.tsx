import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Menu, ArrowRight } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();

  // Solutions data
  const solutions = [
    { 
      name: 'Artificial Intelligence Systems — Intelligence Layer', 
      title: 'Artificial Intelligence Systems',
      layer: 'Intelligence Layer',
      description: 'Intelligence & decision-making layer',
      path: '/solutions/ai-systems' 
    },
    { 
      name: 'Automation — Process Layer', 
      title: 'Automation',
      layer: 'Process Layer',
      description: 'Process automation and optimization',
      path: '/solutions/automation' 
    },
    { 
      name: 'Data, Analytics & ERP — Insight Layer', 
      title: 'Data, Analytics & ERP',
      layer: 'Insight Layer',
      description: 'Data management and analytical insights',
      path: '/solutions/data-analytics' 
    },
    { 
      name: 'Enterprise Service Management — Coordination Layer', 
      title: 'Enterprise Service Management',
      layer: 'Coordination Layer',
      description: 'Service coordination and workflow management',
      path: '/solutions/service-management' 
    },
    { 
      name: 'Cybersecurity & GRC — Protection Layer', 
      title: 'Cybersecurity & GRC',
      layer: 'Protection Layer',
      description: 'Security, governance, risk and compliance',
      path: '/solutions/cybersecurity-grc' 
    },
    { 
      name: 'Digital Infrastructure & Cloud — Foundation Layer', 
      title: 'Digital Infrastructure & Cloud',
      layer: 'Foundation Layer',
      description: 'Cloud infrastructure and foundation services',
      path: '/solutions/infrastructure-cloud' 
    },
  ];

  // Services data
  const services = [
    { 
      title: 'Enterprise Integration & Architecture',
      description: 'Unified architecture and seamless system integration',
      path: '/services/enterprise-integration' 
    },
    { 
      title: 'AI Systems & Professional Services',
      description: 'Strategic AI consulting and platform implementation',
      path: '/services/professional-services-ai' 
    },
    { 
      title: 'Strategy & Alignment Services',
      description: 'IT-business alignment for competitive advantage',
      path: '/services/it-business-strategy' 
    },
    { 
      title: 'Process Optimization & Redesign',
      description: 'Workflow transformation and operational efficiency',
      path: '/services/business-process-redesign' 
    },
  ];

  // Resources data
  const resources = [
    { 
      title: 'Free Enterprise Framework Guide',
      description: 'Comprehensive guide on AI-driven enterprise transformation',
      path: '/free-enterprise-framework-guide' 
    },
  ];

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <>
      {/* Main Header - Always Visible */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B0D10]/95 backdrop-blur-md shadow-lg' 
            : 'bg-[#0B0D10]/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/bionic-full-dark.svg" 
                alt="Bionic Solutions" 
                className="h-10 w-auto"
                style={{ 
                  filter: 'brightness(0) saturate(100%) invert(79%) sepia(13%) saturate(2174%) hue-rotate(164deg) brightness(99%) contrast(93%)'
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/about" 
                className="text-white hover:text-[#00BFFF] transition-colors font-medium"
              >
                About
              </Link>
              
              {/* Solutions Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link 
                  to="/solutions"
                  className="flex items-center space-x-1 text-white hover:text-[#00BFFF] transition-colors font-medium py-2"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Invisible bridge to prevent hover gap */}
                {solutionsOpen && (
                  <div className="absolute top-full left-0 h-2 w-full" />
                )}
                
                {solutionsOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-80 bg-[#212125] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                      {/* Scrollable Solutions Container */}
                      <div className="max-h-96 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
                        {solutions.map((solution, index) => (
                          <Link
                            key={index}
                            to={solution.path}
                            className="block px-6 py-3 text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                          >
                            <div className="space-y-1">
                              <div className="text-[#66B0F0] font-medium text-sm">
                                {solution.title} — {solution.layer}
                              </div>
                              <div className="text-[#B0B0B0] text-sm font-normal">
                                {solution.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* View All Solutions Button */}
                      <div className="border-t border-white/10 pt-4 px-4 pb-4">
                        <Link
                          to="/solutions"
                          className="flex items-center justify-center px-4 py-3 text-white hover:text-[#66B0F0] transition-colors bg-[#25282F] hover:bg-[#2A2D33] rounded-full"
                        >
                          <span className="font-medium">View All Solutions</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link 
                  to="/services"
                  className="flex items-center space-x-1 text-white hover:text-[#00BFFF] transition-colors font-medium py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Invisible bridge to prevent hover gap */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 h-2 w-full" />
                )}
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-80 bg-[#212125] border border-white/10 rounded-lg shadow-2xl py-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-6 py-3 text-white hover:bg-white/5 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="text-[#66B0F0] font-medium text-sm">
                            {service.title}
                          </div>
                          <div className="text-[#B0B0B0] text-sm font-normal">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                      {/* View All Services Button */}
                      <div className="border-t border-white/10 mt-4 pt-4 px-4">
                        <Link
                          to="/services"
                          className="flex items-center justify-center px-4 py-3 text-white hover:text-[#66B0F0] transition-colors bg-[#25282F] hover:bg-[#2A2D33] rounded-full"
                        >
                          <span className="font-medium">View All Services</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/case-studies" 
                className="text-white hover:text-[#00BFFF] transition-colors font-medium"
              >
                Case Studies
              </Link>
              
              {/* Resources Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button
                  className="flex items-center space-x-1 text-white hover:text-[#00BFFF] transition-colors font-medium py-2"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Invisible bridge to prevent hover gap */}
                {resourcesOpen && (
                  <div className="absolute top-full left-0 h-2 w-full" />
                )}
                
                {resourcesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-80 bg-[#212125] border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                      <div className="py-2">
                        {resources.map((resource, index) => (
                          <Link
                            key={index}
                            to={resource.path}
                            className="block px-6 py-3 text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                          >
                            <div className="space-y-1">
                              <div className="text-[#66B0F0] font-medium text-sm">
                                {resource.title}
                              </div>
                              <div className="text-[#B0B0B0] text-sm font-normal">
                                {resource.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact" 
                className="text-white hover:text-[#00BFFF] transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-[#00BFFF] text-white font-semibold rounded-full hover:bg-[#0099CC] transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={openMobileMenu}
              className="md:hidden p-2 text-white hover:text-[#00BFFF] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Slides in from right */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Dark Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div 
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#1A1D23] shadow-2xl"
            style={{
              animation: 'slideInRight 0.3s ease-out forwards'
            }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMobileMenu}
                className="p-2 text-white hover:text-[#00BFFF] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Menu Content */}
            <nav className="px-6 py-4">
              <div className="space-y-2">
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-full transition-colors"
                >
                  About
                </Link>
                
                {/* Mobile Solutions */}
                <div>
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-full transition-colors"
                  >
                    <span>Solutions</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileSolutionsOpen && (
                    <div className="mt-2 ml-4">
                      {/* Scrollable Solutions Container */}
                      <div className="space-y-1 max-h-80 overflow-y-auto">
                        {solutions.map((solution, index) => (
                          <Link
                            key={index}
                            to={solution.path}
                            onClick={closeMobileMenu}
                            className="block px-4 py-3 text-gray-300 hover:text-[#66B0F0] hover:bg-white/5 rounded-lg transition-colors"
                          >
                            <div className="space-y-1">
                              <div className="text-[#66B0F0] font-medium text-sm">
                                {solution.title} — {solution.layer}
                              </div>
                              <div className="text-[#B0B0B0] text-sm font-normal">
                                {solution.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* View All Solutions Button - Mobile */}
                      <div className="border-t border-white/10 mt-2 pt-2">
                        <Link
                          to="/solutions"
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between px-4 py-3 text-white hover:text-[#66B0F0] transition-colors bg-[#25282F] hover:bg-[#2A2D33] rounded-full"
                        >
                          <span className="font-medium">View All Solutions</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-full transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="mt-2 ml-4 space-y-1">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          onClick={closeMobileMenu}
                          className="block px-4 py-3 text-gray-300 hover:text-[#66B0F0] hover:bg-white/5 rounded-lg transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="text-[#66B0F0] font-medium text-sm">
                              {service.title}
                            </div>
                            <div className="text-[#B0B0B0] text-sm font-normal">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                      {/* View All Services Button - Mobile */}
                      <div className="border-t border-white/10 mt-2 pt-2">
                        <Link
                          to="/services"
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between px-4 py-3 text-white hover:text-[#66B0F0] transition-colors bg-[#25282F] hover:bg-[#2A2D33] rounded-full"
                        >
                          <span className="font-medium">View All Services</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Mobile Resources */}
                <div>
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-full transition-colors"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileResourcesOpen && (
                    <div className="mt-2 ml-4 space-y-1">
                      {resources.map((resource, index) => (
                        <Link
                          key={index}
                          to={resource.path}
                          onClick={closeMobileMenu}
                          className="block px-4 py-3 text-gray-300 hover:text-[#66B0F0] hover:bg-white/5 rounded-lg transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="text-[#66B0F0] font-medium text-sm">
                              {resource.title}
                            </div>
                            <div className="text-[#B0B0B0] text-sm font-normal">
                              {resource.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link
                  to="/case-studies"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-full transition-colors"
                >
                  Case Studies
                </Link>
                
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-full transition-colors"
                >
                  Contact
                </Link>
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full px-6 py-3 bg-[#00BFFF] text-white text-center text-lg font-semibold rounded-full hover:bg-[#0099CC] transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* CSS Animation for slide-in */}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
