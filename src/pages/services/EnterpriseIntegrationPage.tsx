import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Server, Settings } from 'lucide-react';

export const EnterpriseIntegrationPage = () => {
  const capabilities = [
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamlessly integrate with Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) environments.',
      features: [
        'Multi-cloud strategy implementation',
        'Hybrid cloud architecture design',
        'Cloud-native application integration',
        'Scalable infrastructure deployment'
      ]
    },
    {
      icon: Shield,
      title: 'Secure API & Middleware Integration',
      description: 'Implement robust, secure API management and middleware solutions that ensure reliable data flow and system communication.',
      features: [
        'API gateway configuration',
        'Middleware architecture design',
        'Secure data transmission protocols',
        'Real-time data synchronization'
      ]
    },
    {
      icon: Server,
      title: 'Cybersecurity & Identity Integration',
      description: 'Integrate comprehensive security frameworks and identity management systems across your enterprise infrastructure.',
      features: [
        'Identity and access management (IAM)',
        'Zero-trust security implementation',
        'Multi-factor authentication systems',
        'Security policy automation'
      ]
    },
    {
      icon: Settings,
      title: 'Infrastructure & Systems Management',
      description: 'Centralized management and monitoring of your entire IT infrastructure for optimal performance and reliability.',
      features: [
        '24/7 infrastructure monitoring',
        'Automated system maintenance',
        'Performance optimization',
        'Disaster recovery planning'
      ]
    }
  ];

  const additionalServices = [
    'Business Continuity Architecture',
    'Hardware Lifecycle & Support',
    'Servers, Devices, Printers & Kiosks',
    'Retail & Store Technology Systems'
  ];

  return (
    <div className="min-h-screen bg-[#0B0D10] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#00BFFF] to-white bg-clip-text text-transparent">
                  Enterprise Integration
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-white">
                Seamless Integration Across Your Enterprise
              </h2>
              <div className="w-24 h-1 bg-[#00BFFF] mb-8"></div>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                We design seamless integration across applications, data flows, automation, and cloud environments—ensuring your enterprise operates as one intelligent organism
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/enterprise-integration-hero.jpg" 
                alt="Enterprise Integration - Data Center" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Integration Capabilities</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive integration services extend the value of existing systems while enabling AI readiness at scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-[#0B0D10] rounded-lg p-8 border border-white/10 hover:border-[#00BFFF]/30 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#00BFFF]/10 rounded-lg mr-4 group-hover:bg-[#00BFFF]/20 transition-colors">
                    <capability.icon className="w-8 h-8 text-[#00BFFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                    {capability.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {capability.description}
                </p>
                
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-[#00BFFF] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Additional Integration Services</h2>
            <p className="text-lg text-gray-300">
              Comprehensive support across all aspects of enterprise infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-[#1A1D23] rounded-lg p-6 border border-white/10 hover:border-[#00BFFF]/30 transition-all"
              >
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#00BFFF] mr-3" />
                  <span className="text-white font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Integration Services?</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-[#00BFFF]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Operation</h3>
              <p className="text-gray-300">
                All your systems work together as one unified, intelligent organism
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#00BFFF]" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise-Ready Security</h3>
              <p className="text-gray-300">
                Built-in security and compliance across all integrated systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-[#00BFFF]" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI-Ready Infrastructure</h3>
              <p className="text-gray-300">
                Future-proof integration that enables AI transformation at scale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Integrate Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's design a seamless integration strategy that transforms your organization into an intelligent, unified enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] transition-all transform hover:scale-105"
            >
              Start Your Integration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseIntegrationPage;
