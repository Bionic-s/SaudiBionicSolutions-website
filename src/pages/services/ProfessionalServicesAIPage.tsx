import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, BarChart3, Building, GraduationCap, Users, Cog, Shield } from 'lucide-react';

export const ProfessionalServicesAIPage = () => {
  const serviceAreas = [
    {
      icon: Brain,
      title: 'AI Systems, Automation & Workflow Optimization',
      description: 'Design and implement intelligent AI systems that automate complex workflows and optimize business processes.',
      capabilities: [
        'Machine learning model development and deployment',
        'Intelligent process automation (IPA)',
        'AI-powered workflow optimization',
        'Natural language processing solutions',
        'Computer vision implementations',
        'Predictive analytics systems'
      ]
    },
    {
      icon: BarChart3,
      title: 'Data, Analytics & Enterprise Systems',
      description: 'Transform raw data into actionable insights with advanced analytics and enterprise-wide data strategies.',
      capabilities: [
        'Enterprise data architecture design',
        'Real-time analytics platforms',
        'Business intelligence implementation',
        'Data governance and quality management',
        'Advanced analytics and AI modeling',
        'Dashboard and visualization systems'
      ]
    },
    {
      icon: Building,
      title: 'Systems Integration',
      description: 'Seamlessly connect disparate systems and applications to create unified, efficient enterprise operations.',
      capabilities: [
        'Legacy system modernization',
        'API development and management',
        'Microservices architecture',
        'Enterprise service bus (ESB)',
        'Event-driven architecture',
        'Cloud-native integration patterns'
      ]
    },
    {
      icon: Users,
      title: 'Program Management & PMO',
      description: 'Expert program management to ensure successful delivery of complex AI and technology transformations.',
      capabilities: [
        'Strategic program planning',
        'Agile project management',
        'Risk management and mitigation',
        'Stakeholder management',
        'Quality assurance and testing',
        'Change management and adoption'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Professional Services',
      description: 'Bionic Solutions provides cybersecurity assessments, IAM integration, zero-trust architecture, SOC support, vulnerability management, and advisory services to secure AI and enterprise systems.',
      capabilities: [
        'Cybersecurity assessments and audits',
        'Identity and Access Management (IAM) integration',
        'Zero-trust architecture implementation',
        'SOC support and monitoring',
        'Vulnerability management',
        'Security advisory services'
      ]
    }
  ];

  const industrySolutions = [
    'Finance', 'Government', 'Healthcare', 'Retail', 'Telecom', 'Manufacturing'
  ];

  const additionalCapabilities = [
    'Multi-Platform Expertise (Multi tech vendors)',
    'AMS, Managed Services & Outsourcing',
    'Digital Transformation & Enterprise Architecture',
    'Enterprise Training & Capability Building'
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
                  Professional Services
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-white">
                with AI Focus
              </h2>
              <div className="w-24 h-1 bg-[#00BFFF] mb-8"></div>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                We deliver consulting, implementation, and technical services required to build AI-powered enterprises. Our team supports modernization, automation, and advanced enterprise platform deployment.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/professional-services-ai-hero.jpg" 
                alt="Professional Services with AI Focus" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Professional Services Include</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive services to build and transform AI-powered enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-[#0B0D10] rounded-lg p-8 border border-white/10 hover:border-[#00BFFF]/30 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#00BFFF]/10 rounded-lg mr-4 group-hover:bg-[#00BFFF]/20 transition-colors">
                    <area.icon className="w-8 h-8 text-[#00BFFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                    {area.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {area.description}
                </p>
                
                <ul className="space-y-2">
                  {area.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-[#00BFFF] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Solutions</h2>
            <p className="text-xl text-gray-300 mb-8">
              Specialized expertise across key industry verticals
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industrySolutions.map((industry, index) => (
              <div 
                key={index}
                className="bg-[#1A1D23] rounded-lg p-6 text-center border border-white/10 hover:border-[#00BFFF]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00BFFF]/20 transition-colors">
                  <Building className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <h3 className="text-white font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Additional Capabilities</h2>
              <div className="space-y-4">
                {additionalCapabilities.map((capability, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 bg-[#0B0D10] rounded-lg border border-white/10"
                  >
                    <ArrowRight className="w-5 h-5 text-[#00BFFF] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-white">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#0B0D10] rounded-lg p-8 border border-[#00BFFF]/20">
              <div className="text-center">
                <GraduationCap className="w-16 h-16 text-[#00BFFF] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Enterprise Training & Capability Building</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive training programs to build internal AI capabilities and ensure successful technology adoption across your organization.
                </p>
                <ul className="text-left space-y-2 text-gray-300">
                  <li>• AI strategy and roadmap development</li>
                  <li>• Technical skills development</li>
                  <li>• Change management support</li>
                  <li>• Continuous learning programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Platform Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Multi-Platform Expertise</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading technology vendors to provide the best solutions for your unique business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#1A1D23] rounded-lg border border-white/10">
              <Cog className="w-12 h-12 text-[#00BFFF] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Cloud Platforms</h3>
              <p className="text-gray-300">
                AWS, Azure, Google Cloud, and multi-cloud strategies
              </p>
            </div>
            
            <div className="text-center p-6 bg-[#1A1D23] rounded-lg border border-white/10">
              <Brain className="w-12 h-12 text-[#00BFFF] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">AI/ML Platforms</h3>
              <p className="text-gray-300">
                TensorFlow, PyTorch, Azure ML, AWS SageMaker, and more
              </p>
            </div>
            
            <div className="text-center p-6 bg-[#1A1D23] rounded-lg border border-white/10">
              <BarChart3 className="w-12 h-12 text-[#00BFFF] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Enterprise Systems</h3>
              <p className="text-gray-300">
                SAP, Salesforce, Microsoft 365, and enterprise integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your AI-Powered Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our expert team guide your transformation with proven AI services and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] transition-all transform hover:scale-105"
            >
              Start Your AI Journey
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

export default ProfessionalServicesAIPage;
