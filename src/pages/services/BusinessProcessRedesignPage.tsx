import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Zap, BarChart3, Target, CheckCircle, Settings } from 'lucide-react';

export const BusinessProcessRedesignPage = () => {
  const processAreas = [
    {
      icon: RefreshCw,
      title: 'Workflow Analysis and Optimization',
      description: 'Comprehensive analysis of existing workflows to identify bottlenecks, redundancies, and opportunities for improvement.',
      capabilities: [
        'Current state process mapping',
        'Process efficiency analysis',
        'Bottleneck identification',
        'Workflow optimization recommendations',
        'Automated workflow design',
        'Process standardization'
      ]
    },
    {
      icon: Zap,
      title: 'Automation Enablement',
      description: 'Design and implement intelligent automation solutions that eliminate manual tasks and accelerate business processes.',
      capabilities: [
        'Intelligent process automation (IPA)',
        'Robotic process automation (RPA)',
        'AI-powered decision automation',
        'Document processing automation',
        'Integration automation',
        'Self-service automation'
      ]
    },
    {
      icon: BarChart3,
      title: 'Intelligent Operations Design',
      description: 'Create intelligent operational frameworks that leverage AI and data analytics for optimal business performance.',
      capabilities: [
        'AI-driven decision support systems',
        'Predictive operations management',
        'Real-time monitoring and alerts',
        'Performance optimization algorithms',
        'Intelligent resource allocation',
        'Automated quality control'
      ]
    },
    {
      icon: Target,
      title: 'Enterprise-Wide Efficiency Improvements',
      description: 'Implement enterprise-wide efficiency initiatives that drive sustainable performance improvements across all business functions.',
      capabilities: [
        'Cross-functional process integration',
        'Enterprise resource optimization',
        'Performance metrics and KPIs',
        'Continuous improvement frameworks',
        'Lean methodology implementation',
        'Six Sigma process improvement'
      ]
    }
  ];

  const redesignStages = [
    {
      stage: '1',
      title: 'Discovery & Analysis',
      description: 'Deep dive into existing processes, identifying current state inefficiencies and improvement opportunities.',
      activities: [
        'Process discovery workshops',
        'Stakeholder interviews',
        'Data collection and analysis',
        'Performance baseline establishment'
      ]
    },
    {
      stage: '2',
      title: 'Redesign & Optimization',
      description: 'Design optimized processes that eliminate waste, reduce cycle times, and improve overall efficiency.',
      activities: [
        'Future state process design',
        'Automation opportunity identification',
        'Risk assessment and mitigation',
        'Change impact analysis'
      ]
    },
    {
      stage: '3',
      title: 'Implementation & Integration',
      description: 'Deploy redesigned processes with proper integration into existing systems and workflows.',
      activities: [
        'Phased implementation planning',
        'System integration development',
        'User training and adoption',
        'Performance monitoring setup'
      ]
    },
    {
      stage: '4',
      title: 'Optimization & Scaling',
      description: 'Continuously optimize processes and scale successful implementations across the enterprise.',
      activities: [
        'Performance monitoring and analysis',
        'Continuous improvement initiatives',
        'Scaling successful processes',
        'Best practice documentation'
      ]
    }
  ];

  const valueDrivers = [
    {
      icon: Zap,
      title: 'Speed to Market',
      description: 'Accelerate product and service delivery through streamlined processes'
    },
    {
      icon: BarChart3,
      title: 'Cost Reduction',
      description: 'Eliminate waste and reduce operational costs through process optimization'
    },
    {
      icon: Target,
      title: 'Quality Improvement',
      description: 'Enhance output quality through standardized and automated processes'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Assurance',
      description: 'Ensure consistent compliance through automated process controls'
    }
  ];

  const benefits = [
    '40-60% reduction in process cycle times',
    '30-50% decrease in operational costs',
    '25-40% improvement in quality metrics',
    '50-70% reduction in manual tasks',
    '90%+ process compliance rates',
    'Real-time performance visibility'
  ];

  return (
    <div className="min-h-screen bg-[#0B0D10] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00BFFF] to-white bg-clip-text text-transparent">
                Business Process
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-white">
              Redesign
            </h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We analyze and optimize workflows to enable automation, intelligent operations, and enterprise-wide efficiency. We eliminate inefficiencies and redesign processes to accelerate performance and unlock new value.
            </p>
          </div>
        </div>
      </section>

      {/* Process Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Process Redesign Capabilities</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive process optimization services to drive enterprise-wide efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {processAreas.map((area, index) => (
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
                
                <div>
                  <h4 className="text-[#00BFFF] font-semibold mb-4">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {area.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-[#00BFFF] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesign Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Redesign Methodology</h2>
            <p className="text-xl text-gray-300">
              A structured approach to process transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {redesignStages.map((stage, index) => (
              <div 
                key={index}
                className="bg-[#1A1D23] rounded-lg p-6 border border-white/10 hover:border-[#00BFFF]/30 transition-all"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#00BFFF] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {stage.stage}
                  </div>
                  <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-center">{stage.description}</p>
                
                <div>
                  <h4 className="text-[#00BFFF] font-semibold mb-3">Activities:</h4>
                  <ul className="space-y-1">
                    {stage.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-3 h-3 text-[#00BFFF] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Drivers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Value Creation Drivers</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueDrivers.map((driver, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <driver.icon className="w-8 h-8 text-[#00BFFF]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{driver.title}</h3>
                <p className="text-gray-300">{driver.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Expected Benefits</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our clients typically experience significant improvements across key performance indicators following process redesign initiatives.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-[#1A1D23] rounded-lg border border-white/10"
                  >
                    <CheckCircle className="w-6 h-6 text-[#00BFFF] mr-4 flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#1A1D23] rounded-lg p-8 border border-[#00BFFF]/20">
              <div className="text-center">
                <Settings className="w-16 h-16 text-[#00BFFF] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Performance Acceleration</h3>
                <p className="text-gray-300 mb-6">
                  Process redesign enables organizations to unlock new value and achieve breakthrough performance improvements.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">3x</div>
                    <div className="text-sm text-gray-300">Faster Processing</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">50%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">90%</div>
                    <div className="text-sm text-gray-300">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Redesign Your Business Processes?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your workflows into intelligent, automated systems that drive enterprise-wide efficiency and unlock new value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] transition-all transform hover:scale-105"
            >
              Start Process Redesign
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

export default BusinessProcessRedesignPage;
