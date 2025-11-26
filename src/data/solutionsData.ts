import { Brain, Hand, Eye, Network, Shield, Server } from 'lucide-react';

export const solutionsData = {
  aiSystems: {
    icon: Brain,
    name: 'Artificial Intelligence Systems',
    tagline: 'Intelligence Layer',
    headline: 'Build Enterprise Intelligence That Learns, Predicts, and Transforms at Scale',
    color: '#7C3AED',
    description: 'The operational intelligence layer that transforms enterprise workflows into intelligent, self-optimizing systems. We architect end-to-end AI capabilities that deliver real-time actionable business insight, from predictive analytics to autonomous decision-making, enabling organizations to achieve measurable competitive advantage through operational excellence and intelligent automation within the Intelligent Enterprise Solutions Model.',
    frameworkContext: 'AI Systems serves as the Intelligence Layer in the Intelligent Enterprise Solutions Model — functioning as the enterprise brain that drives transformation. Just as the brain processes information and enables intelligent responses, this layer processes operational data to generate real-time actionable insights, predictions, and autonomous decisions. It powers intelligent automation workflows, enriches data analytics platforms, enables intelligent service coordination, strengthens cybersecurity with threat intelligence, and optimizes infrastructure operations. This is where data becomes operational intelligence within the Intelligent Enterprise Solutions Model.',
    valuePropositions: [
      {
        metric: '50-80%',
        label: 'Decision Accuracy Improvement',
        description: 'Enhanced predictive accuracy through advanced ML models and real-time intelligence'
      },
      {
        metric: '40-60%',
        label: 'Processing Time Reduction',
        description: 'Faster insights through automated feature engineering and model inference'
      },
      {
        metric: '60-90%',
        label: 'Routine Decision Automation',
        description: 'Autonomous decision-making for high-volume, rule-based business processes'
      },
      {
        metric: '$3-7',
        label: 'ROI per Dollar Invested',
        description: 'Typical enterprise AI investment return through efficiency and revenue gains'
      }
    ],
    services: [
      {
        title: 'AI Strategy & Governance',
        description: 'Establish enterprise AI foundations with comprehensive governance frameworks, ethical AI principles, explainability standards, and compliance controls for responsible AI at scale.',
        features: [
          'AI strategy and roadmap development aligned with business objectives',
          'Model explainability frameworks (SHAP, LIME) for regulatory compliance',
          'Bias detection and fairness testing across demographic groups',
          'AI governance policies with audit trails and version control',
          'Responsible AI frameworks for ethical decision-making',
          'Compliance automation for GDPR, CCPA, and industry regulations'
        ]
      },
      {
        title: 'Machine Learning Operations (MLOps)',
        description: 'Industrialize AI with enterprise MLOps platforms enabling automated pipelines, continuous training, A/B testing, and production-grade model lifecycle management.',
        features: [
          'End-to-end ML pipeline automation from data ingestion to deployment',
          'Feature store implementation with real-time and batch serving',
          'Model versioning, registry, and artifact management',
          'A/B testing frameworks for champion/challenger model evaluation',
          'Automated drift detection and model performance monitoring',
          'Continuous retraining pipelines with feedback loop integration'
        ]
      },
      {
        title: 'Advanced AI Capabilities',
        description: 'Deploy cutting-edge AI including large language models, computer vision, predictive analytics, and reinforcement learning for complex enterprise challenges.',
        features: [
          'Natural Language Processing with LLM fine-tuning and RAG architectures',
          'Computer Vision for quality inspection, document intelligence, medical imaging',
          'Predictive analytics with time-series forecasting and anomaly detection',
          'Recommendation engines with collaborative and content-based filtering',
          'Reinforcement learning for optimization and autonomous decision-making',
          'Generative AI for content creation, code generation, and synthetic data'
        ]
      },
      {
        title: 'AI Integration & Deployment',
        description: 'Operationalize AI across cloud, edge, and hybrid environments with API-first architectures, real-time inference, and enterprise system integration.',
        features: [
          'Real-time inference engines with sub-100ms latency SLAs',
          'Edge AI deployment for offline operation and data sovereignty',
          'API-first model serving with autoscaling and load balancing',
          'Batch prediction pipelines for high-volume scoring',
          'Federated learning for privacy-preserving distributed training',
          'Enterprise integration with ERP, CRM, and operational systems'
        ]
      }
    ],
    architecture: {
      title: 'AI Lifecycle Architecture',
      description: 'Enterprise AI transformation follows a comprehensive lifecycle that transforms raw data into intelligent, production-ready systems with continuous improvement',
      flow: 'Data Ingestion → Feature Engineering → Model Development → Training & Validation → Deployment → Real-Time Inference → Monitoring & Observability → Drift Detection → Automated Retraining → Continuous Improvement',
      components: [
        'Feature Stores: Centralized feature management with real-time and batch serving capabilities for consistent model inputs',
        'ML Pipeline Orchestration: Automated workflows coordinating data prep, training, validation, and deployment',
        'Model Registry: Versioned artifact management with lineage tracking and governance controls',
        'A/B Testing Framework: Champion/challenger evaluation with statistical significance testing',
        'Real-Time Inference Engines: Low-latency model serving with autoscaling and load balancing',
        'AI Observability Stack: Comprehensive monitoring for model performance, drift detection, and data quality'
      ]
    },
    technologies: [
      { name: 'MLOps Lifecycle Automation', category: 'End-to-End Pipelines' },
      { name: 'Feature Engineering Platforms', category: 'Feature Stores' },
      { name: 'Model Versioning & Registry', category: 'Artifact Management' },
      { name: 'Real-Time Inference Engines', category: 'Low-Latency Serving' },
      { name: 'AI Observability Stack', category: 'Monitoring & Alerting' },
      { name: 'Automated Retraining Systems', category: 'Continuous Learning' },
      { name: 'Edge AI Deployment', category: 'Distributed Intelligence' },
      { name: 'Federated Learning Platforms', category: 'Privacy-Preserving AI' }
    ],
    industries: [
      { 
        name: 'Financial Services', 
        description: 'Real-time fraud detection with graph neural networks, credit risk assessment with explainable AI, algorithmic trading with reinforcement learning, customer intelligence with NLP sentiment analysis, regulatory compliance automation, anti-money laundering (AML) pattern recognition'
      },
      { 
        name: 'Healthcare', 
        description: 'Medical imaging diagnostics with computer vision and FDA-validated models, drug discovery with molecular property prediction, patient care optimization with predictive staffing, clinical documentation automation with NLP, predictive health risk stratification, genomic analysis with deep learning'
      },
      { 
        name: 'Manufacturing', 
        description: 'Visual quality inspection with defect detection models, predictive maintenance with IoT sensor analytics, production yield optimization with causal inference, supply chain demand forecasting, autonomous robotics with computer vision, energy consumption optimization'
      },
      { 
        name: 'Retail & E-commerce', 
        description: 'Personalization engines with collaborative filtering and deep learning, demand forecasting with multi-variate time-series models, dynamic pricing optimization with reinforcement learning, inventory optimization across distribution networks, customer behavior prediction, visual search and recommendation'
      }
    ],
    relatedCases: [
      {
        title: 'Regional Healthcare Network Transformation',
        industry: 'Healthcare',
        industryColor: '#4ECDC4',
        description: '67% reduction in ER wait times with AI-powered patient triage and predictive staffing',
        image: '/images/case_study_featured_6.jpg',
        path: '/case-studies/healthcare-network'
      },
      {
        title: 'E-commerce Retail Optimization',
        industry: 'Retail',
        industryColor: '#A8DADC',
        description: '68% reduction in inventory costs through AI demand forecasting and optimization',
        image: '/images/case_study_featured_8.jpg',
        path: '/case-studies/ecommerce-retail'
      }
    ]
  },
  automation: {
    icon: Hand,
    name: 'Automation',
    tagline: 'Process Layer',
    color: '#F59E0B',
    description: 'Intelligent process automation that transforms routine operations into self-optimizing workflows with real-time visibility and measurable business impact. We design end-to-end automation platforms that deliver operational intelligence through intelligent routing, predictive process optimization, and seamless integration across enterprise systems for maximum efficiency gains and competitive advantage within the Intelligent Enterprise Solutions Model.',
    frameworkContext: 'Automation serves as the Process Layer in the Intelligent Enterprise Solutions Model — the engine that transforms insights into intelligent action. Like an efficient circulatory system that delivers oxygen throughout an organism, this layer executes intelligent workflows, processes, and automations based on insights from AI systems (Intelligence Layer) and analytics platforms (Insight Layer). It operates within the coordination framework (Service Management Layer), protected by cybersecurity controls (Protection Layer), and running on resilient infrastructure (Foundation Layer). This is where operational intelligence becomes measurable business outcomes within the Intelligent Enterprise Solutions Model.',
    valuePropositions: [
      {
        metric: '30-200%',
        label: 'First-Year ROI',
        description: 'Typical return on automation investment with sub-12-month payback'
      },
      {
        metric: '15-25%',
        label: 'Process Efficiency Gains',
        description: 'Through intelligent automation and workflow optimization'
      },
      {
        metric: '40-70%',
        label: 'Cost Reduction',
        description: 'On repetitive manual tasks through RPA deployment'
      }
    ],
    services: [
      {
        title: 'RPA Solutions',
        description: 'Software robots that replicate user actions to perform rule-based tasks at speed with high accuracy.',
        features: [
          'Process discovery and bot design',
          'Attended and unattended bot deployment',
          'Credential vaulting and access controls',
          'Testing and environment management'
        ]
      },
      {
        title: 'Intelligent Workflow Automation',
        description: 'Orchestrate multi-step processes across teams and systems with AI-powered classification and routing.',
        features: [
          'Document processing and classification',
          'Multi-system workflow coordination',
          'SLA management and exception handling',
          'Intent extraction and smart routing'
        ]
      },
      {
        title: 'Process Orchestration',
        description: 'Coordinate complex end-to-end processes with state management and adaptive decision-making.',
        features: [
          'Business process automation (BPA)',
          'Digital process automation (DPA)',
          'Event-driven workflow triggers',
          'Cross-functional process coordination'
        ]
      },
      {
        title: 'Integration Middleware',
        description: 'API-first integration platforms connecting systems of record and enabling seamless data flow.',
        features: [
          'iPaaS platform deployment',
          'Pre-built connectors and APIs',
          'Event-driven integration patterns',
          'Error handling and retry logic'
        ]
      }
    ],
    technologies: [
      { name: 'Enterprise RPA', category: 'Process Automation' },
      { name: 'Cloud RPA', category: 'Scalable Bots' },
      { name: 'Governance-First RPA', category: 'Compliance Controls' },
      { name: 'Microsoft Automation', category: 'Office Integration' },
      { name: 'SaaS Integration', category: 'Cloud Connectors' },
      { name: 'Enterprise iPaaS', category: 'Integration Platform' },
      { name: 'Workflow Engine', category: 'Process Orchestration' },
      { name: 'Integration Platform', category: 'API Management' }
    ],
    industries: [
      { name: 'Banking & Finance', description: 'Trade settlement, compliance reporting, risk assessment, KYC automation' },
      { name: 'Healthcare', description: 'Claims processing, patient scheduling, eligibility verification, billing automation' },
      { name: 'Manufacturing', description: 'Supply chain automation, production scheduling, quality documentation, inventory management' },
      { name: 'Retail', description: 'Order processing, inventory replenishment, customer service automation, pricing updates' }
    ],
    relatedCases: [
      {
        title: 'National Investment Banking Compliance',
        industry: 'Finance',
        industryColor: '#FFD93D',
        description: '83% reduction in compliance time with automated reporting workflows',
        image: '/images/case_study_featured_9.jpg',
        path: '/case-studies/investment-banking'
      },
      {
        title: 'E-commerce Retail Optimization',
        industry: 'Retail',
        industryColor: '#A8DADC',
        description: '91% automation of inventory management processes',
        image: '/images/case_study_featured_8.jpg',
        path: '/case-studies/ecommerce-retail'
      }
    ]
  },
  dataAnalytics: {
    icon: Eye,
    name: 'Data, Analytics & ERP',
    tagline: 'Insight Layer',
    color: '#10B981',
    description: 'Comprehensive data aggregation and analytics platforms that transform enterprise data into real-time operational intelligence and actionable business insight. We architect unified data ecosystems with streaming analytics, intelligent dashboarding, and predictive modeling capabilities that deliver end-to-end visibility across all organizational functions for strategic decision-making and competitive advantage within the Intelligent Enterprise Solutions Model.',
    frameworkContext: 'Data Analytics serves as the Insight Layer in the Intelligent Enterprise Solutions Model — the eyes and ears of the enterprise. Like sensory organs that process and interpret information from the environment, this layer aggregates data from all enterprise sources to generate real-time insights and actionable intelligence. It feeds AI systems (Intelligence Layer) with clean, processed data, enables intelligent automation (Process Layer), coordinates service management (Service Management Layer), informs cybersecurity decisions (Protection Layer), and optimizes infrastructure performance (Foundation Layer). This is where operational data becomes strategic insight.',
    valuePropositions: [
      {
        metric: '214%',
        label: 'Average ROI',
        description: 'From BI platform deployments with 0.5-year payback'
      },
      {
        metric: '41%',
        label: 'Gen AI ROI',
        description: 'Average AI analytics return reported by early adopters'
      },
      {
        metric: '60%',
        label: 'Faster Insights',
        description: 'Through real-time data processing and streaming analytics'
      }
    ],
    services: [
      {
        title: 'BI & Analytics Platforms',
        description: 'Governed semantic models, self-service analytics, and AI augmentation for enterprise-wide visibility.',
        features: [
          'Unified data platform deployment',
          'Visual analytics platform implementation',
          'Governed semantic models with RLS/OLS',
          'AI-powered report generation and Q&A'
        ]
      },
      {
        title: 'Real-Time Streaming Analytics',
        description: 'High-throughput event processing with distributed streaming platforms for operational intelligence.',
        features: [
          'Cloud event streaming configuration',
          'Distributed event streaming deployment and management',
          'Stream processing with analytics',
          'Schema governance and capture'
        ]
      },
      {
        title: 'ERP Integration & Optimization',
        description: 'Connect ERP systems to analytics for operational KPIs and financial insights.',
        features: [
          'ERP to data warehouse pipelines',
          'Financial close acceleration',
          'Order-to-cash performance tracking',
          'Procure-to-pay compliance monitoring'
        ]
      },
      {
        title: 'Data Warehousing & Governance',
        description: 'Enterprise data platforms with lakehouse architecture, data quality, and compliance controls.',
        features: [
          'Cloud data warehouse deployment',
          'Lakehouse architecture with Delta Lake',
          'Data governance frameworks',
          'Quality monitoring and lineage'
        ]
      }
    ],
    technologies: [
      { name: 'Business Intelligence', category: 'Analytics & Reporting' },
      { name: 'Unified Data Platform', category: 'End-to-End Analytics' },
      { name: 'Visual Analytics', category: 'Interactive Dashboards' },
      { name: 'Event Streaming', category: 'Real-Time Data' },
      { name: 'Event Streaming Platform', category: 'Message Processing' },
      { name: 'Data Warehouse', category: 'Analytics Storage' },
      { name: 'Lakehouse Platform', category: 'Unified Data' },
      { name: 'Enterprise ERP', category: 'Business Systems' }
    ],
    industries: [
      { name: 'Healthcare', description: 'Patient analytics, operational metrics, clinical insights, population health management' },
      { name: 'Finance', description: 'Risk analytics, regulatory reporting, trading analytics, customer intelligence' },
      { name: 'Retail', description: 'Sales analytics, inventory intelligence, customer behavior, supply chain visibility' },
      { name: 'Manufacturing', description: 'Production analytics, quality metrics, supply chain optimization, predictive maintenance' }
    ],
    relatedCases: [
      {
        title: 'Regional Healthcare Network Transformation',
        industry: 'Healthcare',
        industryColor: '#4ECDC4',
        description: 'Integrated EHR analytics with predictive modeling for patient flow optimization',
        image: '/images/case_study_featured_6.jpg',
        path: '/case-studies/healthcare-network'
      },
      {
        title: 'Cloud Infrastructure Provider Scale',
        industry: 'Technology',
        industryColor: '#457B9D',
        description: 'Real-time service health monitoring and analytics at enterprise scale',
        image: '/images/cloud_infrastructure_icon_9.webp',
        path: '/case-studies/tech-infrastructure'
      }
    ]
  },
  serviceManagement: {
    icon: Network,
    name: 'Enterprise Service Management',
    tagline: 'Coordination Layer',
    headline: 'Unify Your Enterprise Services with Intelligent Coordination and Workflow Automation',
    color: '#EF4444',
    description: 'The operational coordination framework that transforms service delivery into intelligent, self-optimizing business processes. We architect enterprise service orchestration platforms that deliver end-to-end visibility, real-time actionable intelligence, and seamless coordination across all organizational functions through AI-powered routing, federated workflows, and unified service intelligence for measurable operational excellence within the Intelligent Enterprise Solutions Model.',
    frameworkContext: 'Enterprise Service Management serves as Layer 4 in the Intelligent Enterprise Solutions Model — the Coordination Layer that acts as the intelligent nervous system connecting all organizational functions. Just as the nervous system coordinates signals between brain, organs, and limbs, this layer orchestrates service requests, workflows, and decisions across IT, HR, Finance, Operations, and Customer Service. It bridges the gap between strategic AI systems (Layer 1) and operational automation (Layer 2), ensuring seamless coordination with real-time visibility from analytics platforms (Layer 3), all protected by cybersecurity controls (Layer 5) and running on resilient infrastructure (Layer 6).',
    valuePropositions: [
      {
        metric: '40-60%',
        label: 'Service Delivery Acceleration',
        description: 'Reduction in average service fulfillment time through intelligent routing and automation'
      },
      {
        metric: '85%',
        label: 'Cross-Department Efficiency',
        description: 'Improvement in multi-team workflow coordination and collaboration'
      },
      {
        metric: '70%',
        label: 'Manual Coordination Reduction',
        description: 'Decrease in manual handoffs through federated workflow orchestration'
      },
      {
        metric: '90%+',
        label: 'SLA Compliance',
        description: 'Achievement rate with AI-powered prioritization and automated escalation'
      }
    ],
    services: [
      {
        title: 'Enterprise Service Management Platforms',
        description: 'Deploy unified service management platforms with multi-domain service models, AI-powered classification, and enterprise CMDB for comprehensive organizational coordination.',
        features: [
          'Multi-domain service catalog design (IT, HR, Finance, Facilities, Legal)',
          'Enterprise Configuration Management Database (CMDB) with service graph modeling',
          'AI-powered request classification and intelligent routing',
          'ITIL-aligned process frameworks with continuous service improvement',
          'Self-service portals with conversational AI interfaces',
          'Service level agreement (SLA) orchestration and automated escalation'
        ]
      },
      {
        title: 'Unified Workflow Orchestration',
        description: 'Architect federated workflow orchestration platforms that coordinate complex, multi-system processes with event-driven triggers, state management, and adaptive decision-making.',
        features: [
          'Federated workflow engines with cross-departmental orchestration',
          'Event-driven coordination patterns and real-time triggers',
          'State management and exception handling across distributed systems',
          'Multi-system integration with API orchestration and service mesh',
          'Dynamic task assignment based on skill matching and workload balancing',
          'Workflow performance analytics and bottleneck identification'
        ]
      },
      {
        title: 'Integrated Risk & Compliance Coordination',
        description: 'Implement platform-agnostic governance, risk, and compliance platforms with automated policy enforcement, audit trail management, and regulatory reporting.',
        features: [
          'Integrated GRC platform deployment with policy automation',
          'Risk assessment workflows with quantitative scoring models',
          'Compliance monitoring with automated evidence collection',
          'Audit trail management and chain-of-custody tracking',
          'Regulatory reporting automation for SOX, HIPAA, PCI-DSS, GDPR',
          'Third-party risk management and vendor assessment workflows'
        ]
      },
      {
        title: 'Operations Monitoring & Service Intelligence',
        description: 'Deploy AIOps platforms with event correlation, predictive alerting, and operational analytics for proactive service delivery and continuous optimization.',
        features: [
          'AIOps deployment with event correlation and noise reduction',
          'Predictive alerting and anomaly detection for service health',
          'Real-time service dashboards with operational KPIs',
          'Incident correlation across infrastructure, applications, and services',
          'Root cause analysis automation with ML-powered pattern recognition',
          'Service intelligence analytics for continuous improvement'
        ]
      }
    ],
    architecture: {
      title: 'Coordination Architecture',
      description: 'Enterprise service coordination follows a multi-layered architecture that transforms service requests into intelligent, automated outcomes',
      flow: 'Service Requests → AI Classification → Intelligent Routing → SLA Orchestration → Workflow Execution → Automated Resolution → Continuous Learning',
      components: [
        'Multi-Domain Service Models: Unified service catalog spanning IT, HR, Finance, Operations, and Customer Service',
        'Federated Workflow Orchestration: Distributed workflow engines coordinating cross-functional processes',
        'Enterprise CMDB: Comprehensive configuration management with service dependency mapping',
        'AIOps with Event Correlation: Intelligent operations platforms with predictive alerting and anomaly detection',
        'Service Mesh Integrations: API-first architecture connecting enterprise systems of record',
        'Knowledge Graph: Semantic knowledge base with AI-powered recommendation engine'
      ]
    },
    technologies: [
      { name: 'Event-Driven Orchestration', category: 'Workflow Coordination' },
      { name: 'AI-Powered Classification', category: 'Intelligent Routing' },
      { name: 'Federated Knowledge Base', category: 'Service Intelligence' },
      { name: 'Enterprise Service Graph', category: 'Configuration Management' },
      { name: 'Service Mesh Integration', category: 'System Connectivity' },
      { name: 'Workflow Automation Engine', category: 'Process Orchestration' },
      { name: 'AIOps Platform', category: 'Operations Intelligence' },
      { name: 'Multi-Domain Service Catalog', category: 'Unified Service Management' }
    ],
    industries: [
      { 
        name: 'Financial Services', 
        description: 'IT service coordination, incident management with regulatory compliance, change control for trading systems, automated KYC workflows, risk assessment coordination across departments, customer service integration with CRM systems, regulatory reporting automation for SOX and PCI-DSS'
      },
      { 
        name: 'Healthcare', 
        description: 'Clinical service management with HIPAA compliance, medical device lifecycle management, patient request coordination across departments, care team collaboration workflows, EHR integration with service requests, supply chain coordination for medical supplies, regulatory compliance tracking for Joint Commission'
      },
      { 
        name: 'Manufacturing', 
        description: 'Production support with predictive maintenance workflows, quality incident management across production lines, supply chain coordination between procurement and operations, equipment service requests with IoT integration, cross-plant collaboration for global operations, safety incident tracking and resolution'
      },
      { 
        name: 'Retail', 
        description: 'Store support coordination across thousands of locations, POS system incident management with real-time escalation, inventory service requests integrated with supply chain, employee onboarding workflows across HR and IT, customer service integration with e-commerce platforms, facilities management for physical stores'
      }
    ],
    relatedCases: [
      {
        title: 'Cloud Infrastructure Provider Scale',
        industry: 'Technology',
        industryColor: '#457B9D',
        description: 'Intelligent service orchestration and workflow management at scale',
        image: '/images/cloud_infrastructure_icon_9.webp',
        path: '/case-studies/tech-infrastructure'
      },
      {
        title: 'Global Manufacturing Excellence',
        industry: 'Manufacturing',
        industryColor: '#FF6B6B',
        description: 'Predictive maintenance workflow automation and service orchestration',
        image: '/images/case_study_featured_7.png',
        path: '/case-studies/global-manufacturing'
      }
    ]
  },
  cybersecurity: {
    icon: Shield,
    name: 'Cybersecurity & GRC',
    tagline: 'Protection Layer',
    color: '#3B82F6',
    description: 'Intelligent cybersecurity protection that transforms threat detection and compliance into predictive operational intelligence. We architect end-to-end security platforms that deliver real-time threat visibility, automated compliance monitoring, and proactive risk management across all enterprise systems, enabling organizations to achieve operational excellence with confidence and measurable security outcomes within the Intelligent Enterprise Solutions Model.',
    frameworkContext: 'Cybersecurity serves as the Protection Layer in the Intelligent Enterprise Solutions Model — the immune system that safeguards organizational health. Like an immune system that protects all organs while maintaining communication with the nervous system, this layer provides comprehensive security intelligence across all enterprise operations. It protects AI Systems (Intelligence Layer), secures automation workflows (Process Layer), monitors data analytics platforms (Insight Layer), coordinates enterprise service management security (Service Management Layer), and protects infrastructure operations (Foundation Layer). This is where operational intelligence meets enterprise security.',
    valuePropositions: [
      {
        metric: '70-85%',
        label: 'Automation Rate',
        description: 'SOC process automation target for security operations'
      },
      {
        metric: '60-80%',
        label: 'MTTD Reduction',
        description: 'Mean time to detect threats with AI-powered security'
      },
      {
        metric: '99.9%',
        label: 'Compliance Rate',
        description: 'Regulatory compliance target with automated controls'
      }
    ],
    services: [
      {
        title: 'SOC-as-a-Service',
        description: '24/7 security operations center with SIEM, SOAR, and threat intelligence for comprehensive protection.',
        features: [
          'SIEM deployment and management',
          'SOAR playbook automation',
          'Threat intelligence integration',
          '24/7 security monitoring'
        ]
      },
      {
        title: 'Managed Detection & Response (MDR)',
        description: 'Advanced threat detection and rapid response with XDR, EDR, and NDR platforms.',
        features: [
          'XDR platform deployment',
          'Endpoint detection and response',
          'Network detection and response',
          'Incident response orchestration'
        ]
      },
      {
        title: 'GRC Automation',
        description: 'Automate governance, risk, and compliance processes for continuous regulatory adherence.',
        features: [
          'Compliance framework implementation',
          'Risk assessment automation',
          'Policy management and enforcement',
          'Audit trail and reporting'
        ]
      },
      {
        title: 'Vulnerability Management',
        description: 'Continuous vulnerability assessment, prioritization, and remediation tracking.',
        features: [
          'Automated vulnerability scanning',
          'Risk-based prioritization',
          'Patch management automation',
          'Remediation tracking and reporting'
        ]
      }
    ],
    technologies: [
      { name: 'SOAR Platform', category: 'Security Orchestration' },
      { name: 'SIEM', category: 'Security Monitoring' },
      { name: 'Extended Detection', category: 'XDR Solutions' },
      { name: 'Endpoint Protection', category: 'Device Security' },
      { name: 'Cloud SIEM', category: 'Cloud Security' },
      { name: 'Vulnerability Mgmt', category: 'Risk Assessment' },
      { name: 'GRC Platform', category: 'Governance Risk' },
      { name: 'Integrated GRC', category: 'Compliance Management' }
    ],
    industries: [
      { name: 'Healthcare (HIPAA)', description: 'Patient data protection, HIPAA compliance, medical device security, PHI safeguards' },
      { name: 'Finance (PCI/SOX)', description: 'Payment security, SOX compliance, fraud prevention, transaction monitoring' },
      { name: 'Manufacturing (OT)', description: 'Operational technology security, industrial control systems, supply chain protection' },
      { name: 'Public Sector (CMMC)', description: 'CMMC compliance, federal security standards, classified data protection' }
    ],
    relatedCases: [
      {
        title: 'National Investment Banking Compliance',
        industry: 'Finance',
        industryColor: '#FFD93D',
        description: 'Automated regulatory compliance monitoring and real-time threat detection',
        image: '/images/case_study_featured_9.jpg',
        path: '/case-studies/investment-banking'
      },
      {
        title: 'Cloud Infrastructure Provider Scale',
        industry: 'Technology',
        industryColor: '#457B9D',
        description: 'Advanced security monitoring and compliance automation at scale',
        image: '/images/cloud_infrastructure_icon_9.webp',
        path: '/case-studies/tech-infrastructure'
      }
    ]
  },
  infrastructure: {
    icon: Server,
    name: 'Digital Infrastructure & Cloud',
    tagline: 'Foundation Layer',
    color: '#6B7280',
    description: 'The operational foundation that enables intelligent transformation and delivers enterprise-grade scalability with real-time infrastructure intelligence. We architect cloud-native platforms, hybrid architectures, and DevOps automation that provide end-to-end visibility, predictive scaling, and operational resilience for digital transformation success within the Intelligent Enterprise Solutions Model.',
    frameworkContext: 'Digital Infrastructure & Cloud serves as the Foundation Layer in the Intelligent Enterprise Solutions Model — the skeletal and circulatory system that supports all organizational functions. Like bones and blood vessels that provide structure and deliver nutrients throughout the body, this layer provides the technical foundation and operational infrastructure that enables all other layers to function effectively. It hosts AI systems (Intelligence Layer), powers automation workflows (Process Layer), supports data analytics platforms (Insight Layer), enables enterprise service management coordination (Service Management Layer), and secures cybersecurity operations (Protection Layer). This is where operational intelligence finds its technical foundation.',
    valuePropositions: [
      {
        metric: '20-50%',
        label: 'Cost Reduction',
        description: 'Through cloud optimization and FinOps practices'
      },
      {
        metric: '59-77%',
        label: 'Spot Instance Savings',
        description: 'Compute cost optimization with preemptible instances'
      },
      {
        metric: '99.95%',
        label: 'Availability Target',
        description: 'Infrastructure reliability with auto-scaling and redundancy'
      }
    ],
    services: [
      {
        title: 'Cloud Migration (7 Rs)',
        description: 'Comprehensive migration strategies from rehost to refactor for optimal cloud transformation.',
        features: [
          'Migration assessment and planning',
          'Rehost, replatform, refactor strategies',
          'Application modernization',
          'Data migration and validation'
        ]
      },
      {
        title: 'Hybrid & Multi-Cloud Architecture',
        description: 'Design and implement resilient hybrid cloud architectures across major cloud providers.',
        features: [
          'Multi-cloud strategy and design',
          'Hybrid connectivity solutions',
          'Cloud-agnostic architecture patterns',
          'Vendor lock-in mitigation'
        ]
      },
      {
        title: 'Infrastructure Automation & IaC',
        description: 'Automate infrastructure provisioning with Terraform, ARM templates, and GitOps workflows.',
        features: [
          'Terraform/ARM template development',
          'Infrastructure as Code pipelines',
          'Configuration management',
          'Automated compliance scanning'
        ]
      },
      {
        title: 'DevOps & GitOps',
        description: 'Implement modern DevOps practices with CI/CD, container orchestration, and observability.',
        features: [
          'CI/CD pipeline automation',
          'Kubernetes deployment and management',
          'GitOps workflow implementation',
          'Monitoring and observability stack'
        ]
      }
    ],
    technologies: [
      { name: 'Kubernetes Service', category: 'Container Orchestration' },
      { name: 'Container Platform', category: 'Cloud Containers' },
      { name: 'Cloud Kubernetes', category: 'Managed K8s' },
      { name: 'Infrastructure as Code', category: 'Cloud Provisioning' },
      { name: 'CI/CD Platforms', category: 'Automation Pipelines' },
      { name: 'Container Orchestration', category: 'Microservices' },
      { name: 'Observability Stack', category: 'Monitoring' },
      { name: 'GitOps', category: 'Deployment Automation' }
    ],
    industries: [
      { name: 'Healthcare', description: 'HIPAA-compliant cloud infrastructure, secure data storage, disaster recovery' },
      { name: 'Finance', description: 'Secure hybrid architecture, low-latency trading infrastructure, compliance controls' },
      { name: 'Manufacturing', description: 'Edge computing for IoT, hybrid cloud for OT/IT convergence, scalable data processing' },
      { name: 'Public Sector', description: 'Sovereign cloud solutions, FedRAMP compliance, secure government infrastructure' }
    ],
    relatedCases: [
      {
        title: 'Global Manufacturing Excellence',
        industry: 'Manufacturing',
        industryColor: '#FF6B6B',
        description: 'Cloud-native IoT platform with hybrid architecture for global operations',
        image: '/images/case_study_featured_7.png',
        path: '/case-studies/global-manufacturing'
      },
      {
        title: 'Cloud Infrastructure Provider Scale',
        industry: 'Technology',
        industryColor: '#457B9D',
        description: 'Cloud-native architecture with auto-scaling for 10,000+ enterprise clients',
        image: '/images/cloud_infrastructure_icon_9.webp',
        path: '/case-studies/tech-infrastructure'
      }
    ]
  }
};
