import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Compass, BarChart3 } from 'lucide-react';

export const ITBusinessStrategyPage = () => {
  const strategyComponents = [
    {
      icon: Target,
      title: 'IT & AI-Aligned Business Strategy',
      description: 'Develop comprehensive strategies that align your technology investments with business objectives for maximum ROI and competitive advantage.',
      deliverables: [
        'Strategic IT roadmap development',
        'AI transformation strategy',
        'Technology portfolio optimization',
        'Digital business model design',
        'Competitive advantage analysis',
        'Innovation strategy planning'
      ]
    },
    {
      icon: Users,
      title: 'Operating Model Design',
      description: 'Redesign organizational structures and processes to support AI-driven operations and enable agile, data-driven decision making.',
      deliverables: [
        'Organizational structure optimization',
        'Governance framework design',
        'Decision-making process improvement',
        'Role and responsibility alignment',
        'Cross-functional collaboration models',
        'Performance measurement systems'
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Strategy Development',
      description: 'Create comprehensive data strategies that enable AI capabilities and drive informed business decisions across all levels.',
      deliverables: [
        'Data architecture planning',
        'Data governance frameworks',
        'Analytics strategy development',
        'AI-ready data infrastructure',
        'Privacy and compliance strategies',
        'Data monetization strategies'
      ]
    },
    {
      icon: Compass,
      title: 'Digital Roadmaps for AI Era',
      description: 'Design future-ready roadmaps that guide your organization through digital transformation in the age of artificial intelligence.',
      deliverables: [
        'Digital transformation roadmap',
        'AI adoption timeline',
        'Technology migration plans',
        'Investment prioritization',
        'Risk mitigation strategies',
        'Success metrics and KPIs'
      ]
    }
  ];

  const transformationAreas = [
    {
      title: 'Business Strengths Optimization',
      description: 'Identify and leverage your unique business strengths to create sustainable competitive advantages',
      focus: [
        'Core competency analysis',
        'Competitive differentiation strategies',
        'Value proposition enhancement',
        'Market positioning optimization'
      ]
    },
    {
      title: 'Technology Integration Planning',
      description: 'Seamlessly integrate emerging technologies with existing systems for maximum business impact',
      focus: [
        'Legacy system modernization',
        'Cloud migration strategies',
        'API-first architecture design',
        'Enterprise integration planning'
      ]
    },
    {
      title: 'Change Management & Adoption',
      description: 'Ensure successful adoption of new strategies through effective change management and stakeholder engagement',
      focus: [
        'Change readiness assessment',
        'Stakeholder engagement strategies',
        'Communication planning',
        'Training and capability development'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased ROI',
      description: 'Maximize technology investments with strategic alignment'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Acceleration',
      description: 'Faster time-to-market for new products and services'
    },
    {
      icon: Target,
      title: 'Competitive Advantage',
      description: 'Transform strengths into market-leading capabilities'
    },
    {
      icon: Compass,
      title: 'Strategic Clarity',
      description: 'Clear direction for technology and business evolution'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0D10] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00BFFF] to-white bg-clip-text text-transparent">
                IT Alignment with
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-white">
              Business Strategy
            </h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-8"></div>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We help organizations transform their strengths into competitive advantage with IT & AI-aligned business strategy. Our work spans operating models, data strategy, and digital roadmaps designed for the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Components */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Strategic Components</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive strategic services to align your technology with business objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {strategyComponents.map((component, index) => (
              <div 
                key={index}
                className="bg-[#0B0D10] rounded-lg p-8 border border-white/10 hover:border-[#00BFFF]/30 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-[#00BFFF]/10 rounded-lg mr-4 group-hover:bg-[#00BFFF]/20 transition-colors">
                    <component.icon className="w-8 h-8 text-[#00BFFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                    {component.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {component.description}
                </p>
                
                <div>
                  <h4 className="text-[#00BFFF] font-semibold mb-4">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {component.deliverables.map((deliverable, delIndex) => (
                      <li key={delIndex} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-[#00BFFF] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transformation Focus Areas</h2>
            <p className="text-xl text-gray-300">
              Specialized approaches to maximize strategic impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transformationAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-[#1A1D23] rounded-lg p-8 border border-white/10 hover:border-[#00BFFF]/30 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{area.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                
                <div>
                  <h4 className="text-[#00BFFF] font-semibold mb-4">Focus Areas:</h4>
                  <ul className="space-y-2">
                    {area.focus.map((focus, focusIndex) => (
                      <li key={focusIndex} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-[#00BFFF] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{focus}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-4xl font-bold mb-6">Strategic Benefits</h2>
            <div className="w-24 h-1 bg-[#00BFFF] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#00BFFF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#00BFFF]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Strategic Methodology</h2>
            <p className="text-xl text-gray-300">
              A proven approach to business-IT alignment
            </p>
          </div>
          
          <div className="bg-[#1A1D23] rounded-lg p-8 border border-[#00BFFF]/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00BFFF] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h3 className="text-lg font-bold mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Current state analysis and capability mapping</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00BFFF] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h3 className="text-lg font-bold mb-2">Strategy</h3>
                <p className="text-gray-300 text-sm">Strategic roadmap and alignment planning</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00BFFF] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h3 className="text-lg font-bold mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Operating model and framework design</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#00BFFF] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h3 className="text-lg font-bold mb-2">Implementation</h3>
                <p className="text-gray-300 text-sm">Execution support and change management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1D23]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Align IT with Your Business Strategy?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business strengths into competitive advantage with strategic IT alignment designed for the AI era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#00BFFF] text-white font-semibold rounded-lg hover:bg-[#0099CC] transition-all transform hover:scale-105"
            >
              Start Strategic Alignment
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

export default ITBusinessStrategyPage;
