export interface VendorCapability {
  id: string;
  capability_name: string;
  vendor: string[];
  category: string[];
  industry: string[];
  description: string;
  implementation_time: string;
  roi_range: string;
  image: string;
  path: string;
  industryColor: string;
}

export const vendorCapabilities: VendorCapability[] = [
  {
    id: 'sap-erp',
    capability_name: 'Enterprise Resource Planning Suite',
    vendor: ['SAP', 'Oracle'],
    category: ['Data & Analytics', 'Service Management'],
    industry: ['Manufacturing', 'Healthcare', 'Finance', 'Retail'],
    description: 'Comprehensive ERP solutions for enterprise resource management, financial planning, supply chain optimization, and business process automation',
    implementation_time: '12-18 months',
    roi_range: '25-40%',
    image: '/images/data-analytics.avif',
    path: '/case-studies/sap-erp',
    industryColor: '#4F46E5'
  },
  {
    id: 'servicenow-itsm',
    capability_name: 'IT Service Management Platform',
    vendor: ['ServiceNow', 'BMC'],
    category: ['Service Management', 'Automation'],
    industry: ['Technology', 'Finance', 'Healthcare', 'All Industries'],
    description: 'Advanced ITSM platform for incident management, change control, asset tracking, and IT operations automation across enterprise environments',
    implementation_time: '6-12 months',
    roi_range: '30-50%',
    image: '/images/cloud-computing.avif',
    path: '/case-studies/servicenow-itsm',
    industryColor: '#10B981'
  },
  {
    id: 'cisco-network',
    capability_name: 'Software-Defined Networking Infrastructure',
    vendor: ['Cisco', 'Juniper'],
    category: ['Infrastructure', 'Cybersecurity'],
    industry: ['Technology', 'Finance', 'Retail', 'All Industries'],
    description: 'Enterprise-grade network infrastructure with SD-WAN, zero-trust security, and intelligent traffic management for distributed operations',
    implementation_time: '8-14 months',
    roi_range: '20-35%',
    image: '/images/it-infrastructure.avif',
    path: '/case-studies/cisco-network',
    industryColor: '#0EA5E9'
  },
  {
    id: 'microsoft-azure',
    capability_name: 'Cloud Computing & AI Platform',
    vendor: ['Microsoft', 'AWS', 'Google Cloud'],
    category: ['Cloud Computing', 'AI Systems', 'Data & Analytics'],
    industry: ['All Industries'],
    description: 'Comprehensive cloud platform with Azure AI services, data warehousing, containerization, and enterprise application hosting',
    implementation_time: '10-16 months',
    roi_range: '35-55%',
    image: '/images/cloud-computing.avif',
    path: '/case-studies/microsoft-azure',
    industryColor: '#6366F1'
  },
  {
    id: 'oracle-database',
    capability_name: 'Enterprise Database Management System',
    vendor: ['Oracle', 'PostgreSQL', 'MongoDB'],
    category: ['Data & Analytics', 'Infrastructure'],
    industry: ['Finance', 'Healthcare', 'Manufacturing', 'Retail'],
    description: 'Mission-critical database systems with high availability, disaster recovery, real-time analytics, and automated performance tuning',
    implementation_time: '6-10 months',
    roi_range: '25-40%',
    image: '/images/data-analytics.avif',
    path: '/case-studies/oracle-database',
    industryColor: '#EF4444'
  },
  {
    id: 'palo-alto-security',
    capability_name: 'Next-Generation Cybersecurity Platform',
    vendor: ['Palo Alto Networks', 'Fortinet', 'Checkpoint'],
    category: ['Cybersecurity', 'Infrastructure'],
    industry: ['Finance', 'Healthcare', 'Technology', 'All Industries'],
    description: 'Advanced threat prevention with AI-powered detection, zero-trust architecture, cloud security, and automated incident response',
    implementation_time: '8-12 months',
    roi_range: '40-60%',
    image: '/images/cybersecurity-shield.avif',
    path: '/case-studies/palo-alto-security',
    industryColor: '#DC2626'
  },
  {
    id: 'salesforce-crm',
    capability_name: 'Customer Relationship Management Suite',
    vendor: ['Salesforce', 'HubSpot', 'Dynamics 365'],
    category: ['Service Management', 'AI Systems', 'Automation'],
    industry: ['Retail', 'Finance', 'Technology', 'All Industries'],
    description: 'Enterprise CRM with AI-powered sales forecasting, marketing automation, customer service workflows, and analytics dashboards',
    implementation_time: '6-12 months',
    roi_range: '30-45%',
    image: '/images/ai-cube-specialized.avif',
    path: '/case-studies/salesforce-crm',
    industryColor: '#F59E0B'
  },
  {
    id: 'workday-hcm',
    capability_name: 'Human Capital Management System',
    vendor: ['Workday', 'SAP SuccessFactors', 'Oracle HCM'],
    category: ['Service Management', 'Data & Analytics'],
    industry: ['All Industries'],
    description: 'Cloud-based HCM for workforce planning, talent acquisition, performance management, payroll processing, and employee analytics',
    implementation_time: '8-14 months',
    roi_range: '25-40%',
    image: '/images/cloud-computing.avif',
    path: '/case-studies/workday-hcm',
    industryColor: '#8B5CF6'
  },
  {
    id: 'snowflake-datawarehouse',
    capability_name: 'Cloud Data Warehousing Platform',
    vendor: ['Snowflake', 'Databricks', 'BigQuery'],
    category: ['Data & Analytics', 'Cloud Computing'],
    industry: ['Retail', 'Finance', 'Healthcare', 'Technology'],
    description: 'Modern data warehouse with instant scalability, data sharing capabilities, machine learning integration, and real-time analytics',
    implementation_time: '6-10 months',
    roi_range: '35-50%',
    image: '/images/data-analytics.avif',
    path: '/case-studies/snowflake-retail-cloud',
    industryColor: '#06B6D4'
  },
  {
    id: 'rpa-platform',
    capability_name: 'Robotic Process Automation Platform',
    vendor: ['UiPath', 'Automation Anywhere', 'Blue Prism'],
    category: ['Automation', 'AI Systems'],
    industry: ['Finance', 'Healthcare', 'Manufacturing', 'Retail'],
    description: 'Intelligent automation for repetitive tasks, document processing, data entry, compliance workflows, and business process optimization',
    implementation_time: '4-8 months',
    roi_range: '45-65%',
    image: '/images/ai_automation_icon_2.avif',
    path: '/case-studies/rpa-platform',
    industryColor: '#F97316'
  },
  {
    id: 'splunk-observability',
    capability_name: 'Security Information & Event Management',
    vendor: ['Splunk', 'Elastic', 'Datadog'],
    category: ['Cybersecurity', 'Data & Analytics', 'Infrastructure'],
    industry: ['Technology', 'Finance', 'Healthcare', 'All Industries'],
    description: 'Real-time security monitoring, log aggregation, threat intelligence, compliance reporting, and automated incident investigation',
    implementation_time: '6-10 months',
    roi_range: '35-50%',
    image: '/images/cybersecurity-shield.avif',
    path: '/case-studies/splunk-observability',
    industryColor: '#14B8A6'
  },
  {
    id: 'tableau-analytics',
    capability_name: 'Business Intelligence & Visualization',
    vendor: ['Tableau', 'Power BI', 'Qlik'],
    category: ['Data & Analytics', 'AI Systems'],
    industry: ['All Industries'],
    description: 'Interactive dashboards, self-service analytics, predictive modeling, and data storytelling for data-driven decision making',
    implementation_time: '4-8 months',
    roi_range: '30-45%',
    image: '/images/data-analytics.avif',
    path: '/case-studies/tableau-analytics',
    industryColor: '#3B82F6'
  },
  {
    id: 'vmware-virtualization',
    capability_name: 'Infrastructure Virtualization Platform',
    vendor: ['VMware', 'Hyper-V', 'Citrix'],
    category: ['Infrastructure', 'Cloud Computing'],
    industry: ['Technology', 'Finance', 'Healthcare', 'All Industries'],
    description: 'Server virtualization, desktop infrastructure, hybrid cloud management, and disaster recovery for enterprise IT environments',
    implementation_time: '8-12 months',
    roi_range: '30-45%',
    image: '/images/it-infrastructure.avif',
    path: '/case-studies/vmware-virtualization',
    industryColor: '#64748B'
  },
  {
    id: 'aws-infrastructure',
    capability_name: 'Cloud Infrastructure Services',
    vendor: ['AWS', 'Azure', 'Google Cloud'],
    category: ['Cloud Computing', 'Infrastructure', 'Data & Analytics'],
    industry: ['All Industries'],
    description: 'Scalable compute, storage, networking, serverless architecture, and managed services for modern application deployment',
    implementation_time: '8-14 months',
    roi_range: '40-60%',
    image: '/images/cloud-computing.avif',
    path: '/case-studies/aws-infrastructure',
    industryColor: '#F59E0B'
  },
  {
    id: 'crowdstrike-endpoint',
    capability_name: 'Endpoint Detection & Response',
    vendor: ['CrowdStrike', 'SentinelOne', 'Carbon Black'],
    category: ['Cybersecurity', 'AI Systems'],
    industry: ['Finance', 'Healthcare', 'Technology', 'All Industries'],
    description: 'Cloud-native endpoint protection with AI threat detection, behavioral analysis, and automated response capabilities',
    implementation_time: '4-6 months',
    roi_range: '50-70%',
    image: '/images/cybersecurity-shield.avif',
    path: '/case-studies/crowdstrike-endpoint',
    industryColor: '#DC2626'
  },
  {
    id: 'openai-gpt',
    capability_name: 'Generative AI Integration Platform',
    vendor: ['OpenAI', 'Anthropic', 'Google AI'],
    category: ['AI Systems', 'Automation'],
    industry: ['Technology', 'Retail', 'Finance', 'All Industries'],
    description: 'Large language models for content generation, customer support automation, code assistance, and intelligent document processing',
    implementation_time: '3-6 months',
    roi_range: '55-75%',
    image: '/images/ai-cube-specialized.avif',
    path: '/case-studies/openai-media',
    industryColor: '#10B981'
  },
  {
    id: 'palantir-data',
    capability_name: 'Enterprise Data Integration Platform',
    vendor: ['Palantir', 'Informatica', 'Talend'],
    category: ['Data & Analytics', 'AI Systems'],
    industry: ['Finance', 'Healthcare', 'Manufacturing', 'Technology'],
    description: 'Advanced data integration, analytics, and decision intelligence for complex enterprise data environments and operations',
    implementation_time: '10-16 months',
    roi_range: '30-50%',
    image: '/images/data-analytics.avif',
    path: '/case-studies/palantir-defense',
    industryColor: '#6366F1'
  },
  {
    id: 'datadog-monitoring',
    capability_name: 'Infrastructure Monitoring & APM',
    vendor: ['Datadog', 'New Relic', 'Dynatrace'],
    category: ['Infrastructure', 'Data & Analytics'],
    industry: ['Technology', 'Finance', 'Retail', 'All Industries'],
    description: 'Full-stack observability with application performance monitoring, infrastructure metrics, log management, and distributed tracing',
    implementation_time: '4-8 months',
    roi_range: '35-50%',
    image: '/images/it-infrastructure.avif',
    path: '/case-studies/datadog-monitoring',
    industryColor: '#8B5CF6'
  },
  {
    id: 'zscaler-security',
    capability_name: 'Zero Trust Network Access',
    vendor: ['Zscaler', 'Cloudflare', 'Akamai'],
    category: ['Cybersecurity', 'Cloud Computing'],
    industry: ['Finance', 'Healthcare', 'Technology', 'All Industries'],
    description: 'Cloud security platform with zero trust access, secure web gateway, DDoS protection, and cloud firewall capabilities',
    implementation_time: '6-10 months',
    roi_range: '40-55%',
    image: '/images/cybersecurity-shield.avif',
    path: '/case-studies/zscaler-security',
    industryColor: '#0EA5E9'
  },
  {
    id: 'confluent-streaming',
    capability_name: 'Real-Time Data Streaming Platform',
    vendor: ['Confluent', 'Apache Kafka', 'Pulsar'],
    category: ['Data & Analytics', 'Infrastructure'],
    industry: ['Finance', 'Retail', 'Technology', 'All Industries'],
    description: 'Event streaming platform for real-time data pipelines, stream processing, and event-driven architecture implementations',
    implementation_time: '6-12 months',
    roi_range: '30-45%',
    image: '/images/data-analytics.avif',
    path: '/case-studies/confluent-streaming',
    industryColor: '#06B6D4'
  },
  {
    id: 'servicenow-itom',
    capability_name: 'IT Operations Management',
    vendor: ['ServiceNow'],
    category: ['Infrastructure', 'Automation', 'Data & Analytics'],
    industry: ['Technology', 'Finance', 'Healthcare', 'All Industries'],
    description: 'Complete ITOM solution with real-time infrastructure monitoring, automated incident response, capacity planning, and predictive analytics',
    implementation_time: '6-10 months',
    roi_range: '40-55%',
    image: '/images/it-infrastructure.avif',
    path: '/case-studies/servicenow-itom',
    industryColor: '#0EA5E9'
  },
  {
    id: 'servicenow-irm',
    capability_name: 'Identity & Access Management',
    vendor: ['ServiceNow'],
    category: ['Cybersecurity', 'Service Management'],
    industry: ['Finance', 'Healthcare', 'Technology', 'All Industries'],
    description: 'Enterprise IAM platform for user provisioning, access governance, compliance monitoring, privileged access management, and audit trails',
    implementation_time: '6-9 months',
    roi_range: '45-60%',
    image: '/images/cybersecurity-shield.avif',
    path: '/case-studies/servicenow-irm',
    industryColor: '#DC2626'
  },
  {
    id: 'servicenow-crm-banking',
    capability_name: 'Customer Relationship Management for Banking',
    vendor: ['ServiceNow'],
    category: ['Service Management', 'Data & Analytics'],
    industry: ['Finance'],
    description: 'Specialized CRM solution for financial institutions with regulatory compliance, risk management, customer onboarding, and financial services workflows',
    implementation_time: '9-14 months',
    roi_range: '35-50%',
    image: '/images/data-analytics.avif',
    path: '/case-studies/servicenow-crm-banking',
    industryColor: '#F59E0B'
  },
  {
    id: 'servicenow-crm-oilgas',
    capability_name: 'Customer Relationship Management for Oil & Gas',
    vendor: ['ServiceNow'],
    category: ['Service Management', 'Data & Analytics'],
    industry: ['Energy & Utilities', 'Oil & Gas'],
    description: 'Industry-specific CRM for energy sector with asset management, safety compliance, field service automation, and energy operations workflows',
    implementation_time: '8-12 months',
    roi_range: '30-45%',
    image: '/images/cloud-computing.avif',
    path: '/case-studies/servicenow-crm-oilgas',
    industryColor: '#F97316'
  },
  {
    id: 'servicenow-ai-tower',
    capability_name: 'AI Tower of ServiceNow',
    vendor: ['ServiceNow'],
    category: ['AI Systems', 'Data & Analytics', 'Automation'],
    industry: ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'All Industries'],
    description: 'Comprehensive AI-powered intelligence platform with machine learning, predictive analytics, natural language processing, and automated decision-making capabilities integrated across all ServiceNow modules',
    implementation_time: '10-16 months',
    roi_range: '35-55%',
    image: '/images/data-analytics.avif',
    path: '/case-studies/servicenow-ai-tower',
    industryColor: '#8B5CF6'
  },
  {
    id: 'redwood-automation',
    capability_name: 'Redwood Automation Platform',
    vendor: ['Redwood'],
    category: ['Automation', 'Infrastructure'],
    industry: ['Technology', 'Finance', 'Manufacturing', 'Healthcare', 'All Industries'],
    description: 'Enterprise automation platform for job scheduling, workload automation, and business process orchestration with advanced monitoring and reporting capabilities',
    implementation_time: '6-12 months',
    roi_range: '25-45%',
    image: '/images/automation.avif',
    path: '/case-studies/redwood-automation',
    industryColor: '#DC2626'
  }
];

// Extract unique values for filters
const vendorSet = new Set<string>();
vendorCapabilities.forEach(vc => {
  vc.vendor.forEach(v => vendorSet.add(v));
});
export const allVendors = Array.from(vendorSet).sort();

const categorySet = new Set<string>();
vendorCapabilities.forEach(vc => {
  vc.category.forEach(c => categorySet.add(c));
});
export const allCategories = Array.from(categorySet).sort();

const industrySet = new Set<string>();
vendorCapabilities.forEach(vc => {
  vc.industry.forEach(i => {
    if (i !== 'All Industries') {
      industrySet.add(i);
    }
  });
});
export const allIndustries = Array.from(industrySet).sort();
