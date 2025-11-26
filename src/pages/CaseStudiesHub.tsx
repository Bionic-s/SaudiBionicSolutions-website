import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Filter, Building2, Users, X, ChevronDown } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { vendorCapabilities, allVendors, allCategories, allIndustries, VendorCapability } from '../data/vendorCapabilitiesData';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  frameworks: string[];
  challenge: string;
  keyMetric: { value: string; description: string };
  image: string;
  path: string;
  industryColor: string;
  isProposed?: boolean;
  vendorSolution?: string;
  vendor?: string;
}

// Existing proven case studies
const existingCaseStudies: CaseStudy[] = [
  {
    id: 'healthcare',
    title: 'Local Healthcare Clinic Network',
    industry: 'Healthcare',
    frameworks: ['AI Systems', 'Data Analytics'],
    challenge: 'Clinic wait times averaged 2.5 hours with appointment scheduling inefficiencies',
    keyMetric: { value: '35%', description: 'Reduction in wait times' },
    image: '/images/data-analytics.avif',
    path: '/case-studies/healthcare-network',
    industryColor: '#4ECDC4',
    isProposed: false
  },
  {
    id: 'finance',
    title: 'Regional Credit Union Compliance',
    industry: 'Finance',
    frameworks: ['Automation', 'Cybersecurity'],
    challenge: 'Compliance reporting required 40+ hours weekly with $350K annual processing errors',
    keyMetric: { value: '55%', description: 'Reduction in compliance time' },
    image: '/images/cybersecurity-shield.avif',
    path: '/case-studies/investment-banking',
    industryColor: '#FFD93D',
    isProposed: false
  },
  {
    id: 'manufacturing',
    title: 'Small Manufacturing Facility Automation',
    industry: 'Manufacturing',
    frameworks: ['Infrastructure', 'Service Management'],
    challenge: 'Equipment breakdowns caused $500K annual losses with 18% quality variations',
    keyMetric: { value: '40%', description: 'Reduction in equipment downtime' },
    image: '/images/it-infrastructure.avif',
    path: '/case-studies/global-manufacturing',
    industryColor: '#FF6B6B',
    isProposed: false
  },
  {
    id: 'retail',
    title: 'Local Retail Chain Inventory Management',
    industry: 'Retail',
    frameworks: ['AI Systems', 'Automation'],
    challenge: 'Inventory carrying costs exceeded $3M with stockout issues causing lost sales',
    keyMetric: { value: '28%', description: 'Reduction in inventory costs' },
    image: '/images/cloud-computing.avif',
    path: '/case-studies/ecommerce-retail',
    industryColor: '#A8DADC',
    isProposed: false
  },
  {
    id: 'technology',
    title: 'Small Technology Services Provider',
    industry: 'Technology',
    frameworks: ['All 6 Frameworks'],
    challenge: 'Platform outages cost $75K per incident with 2-week deployment cycles',
    keyMetric: { value: '99.5%', description: 'Service uptime achieved' },
    image: '/images/ai-cube-specialized.avif',
    path: '/case-studies/tech-infrastructure',
    industryColor: '#457B9D',
    isProposed: false
  }
];

// Updated industries list for proven case studies
const provenIndustries = [
  'All Industries',
  'Healthcare', 
  'Finance', 
  'Manufacturing', 
  'Retail',
  'Technology'
];

// Multi-select dropdown component
function MultiSelectDropdown({ 
  label, 
  options, 
  selected, 
  onToggle 
}: { 
  label: string; 
  options: string[]; 
  selected: string[]; 
  onToggle: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-bg-secondary border border-white/10 rounded-lg text-sm font-medium text-text-primary hover:border-accent-primary transition-colors"
      >
        {label}
        {selected.length > 0 && (
          <span className="px-2 py-0.5 bg-accent-primary text-text-primary text-xs rounded-full">
            {selected.length}
          </span>
        )}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-64 max-h-80 overflow-y-auto bg-bg-secondary border border-white/10 rounded-lg shadow-lg z-20">
            {options.map(option => (
              <label
                key={option}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => onToggle(option)}
                  className="w-4 h-4 rounded border-white/20 bg-bg-primary text-accent-primary focus:ring-2 focus:ring-accent-primary focus:ring-offset-0"
                />
                <span className="text-sm text-text-primary">{option}</span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Filter chip component
function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex items-center gap-2 px-3 py-1.5 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-sm font-medium text-accent-primary"
    >
      {label}
      <button
        onClick={onRemove}
        className="hover:bg-accent-primary/20 rounded-full p-0.5 transition-colors"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}

export default function CaseStudiesHub() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProposed, setShowProposed] = useState(false);
  
  // Advanced filters for vendor capabilities
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Toggle functions for multi-select filters
  const toggleVendor = useCallback((vendor: string) => {
    setSelectedVendors(prev => 
      prev.includes(vendor) 
        ? prev.filter(v => v !== vendor)
        : [...prev, vendor]
    );
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }, []);

  const toggleIndustry = useCallback((industry: string) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) 
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  }, []);

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setSelectedVendors([]);
    setSelectedCategories([]);
    setSelectedIndustries([]);
    setSearchQuery('');
  }, []);

  // Filtered vendor capabilities with advanced filtering
  const filteredVendorCapabilities = useMemo(() => {
    let filtered = vendorCapabilities;

    // Apply vendor filter
    if (selectedVendors.length > 0) {
      filtered = filtered.filter(cap => 
        cap.vendor.some(v => selectedVendors.includes(v))
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(cap => 
        cap.category.some(c => selectedCategories.includes(c))
      );
    }

    // Apply industry filter
    if (selectedIndustries.length > 0) {
      filtered = filtered.filter(cap => 
        cap.industry.some(i => selectedIndustries.includes(i) || cap.industry.includes('All Industries'))
      );
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(cap =>
        cap.capability_name.toLowerCase().includes(query) ||
        cap.description.toLowerCase().includes(query) ||
        cap.vendor.some(v => v.toLowerCase().includes(query)) ||
        cap.category.some(c => c.toLowerCase().includes(query)) ||
        cap.industry.some(i => i.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedVendors, selectedCategories, selectedIndustries, searchQuery]);

  // Filtered proven case studies (existing logic)
  const filteredProvenCaseStudies = useMemo(() => {
    let filtered = selectedIndustry === 'All Industries'
      ? existingCaseStudies
      : existingCaseStudies.filter(cs => cs.industry === selectedIndustry);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(cs =>
        cs.title.toLowerCase().includes(query) ||
        cs.industry.toLowerCase().includes(query) ||
        cs.frameworks.some(f => f.toLowerCase().includes(query)) ||
        cs.challenge.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedIndustry, searchQuery]);

  // Get the appropriate filtered list based on toggle
  const displayedCapabilities = showProposed ? filteredVendorCapabilities : filteredProvenCaseStudies;
  const totalCapabilities = showProposed ? vendorCapabilities.length : existingCaseStudies.length;
  
  // Check if any filters are active
  const hasActiveFilters = selectedVendors.length > 0 || selectedCategories.length > 0 || selectedIndustries.length > 0;

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Page Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Enterprise Transformation
            <span className="block text-accent-primary">Case Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-8">
            Real implementations. Proposed vendor partnerships. Proven frameworks that deliver measurable ROI.
          </p>
          
          {/* Proven vs Proposed Toggle */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              onClick={() => {
                setShowProposed(false);
                clearAllFilters();
                setSelectedIndustry('All Industries');
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                !showProposed
                  ? 'bg-accent-primary text-text-primary'
                  : 'bg-bg-secondary text-text-muted hover:text-text-primary border border-white/10'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Proven Implementations ({existingCaseStudies.length})
            </button>
            <button
              onClick={() => {
                setShowProposed(true);
                setSelectedIndustry('All Industries');
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                showProposed
                  ? 'bg-accent-primary text-text-primary'
                  : 'bg-bg-secondary text-text-muted hover:text-text-primary border border-white/10'
              }`}
            >
              <Users className="w-5 h-5" />
              Implementation Capabilities ({vendorCapabilities.length})
            </button>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <SearchBar
            key={showProposed ? 'vendor-search' : 'proven-search'}
            placeholder={
              showProposed 
                ? "Search vendor solutions, frameworks, or use cases..."
                : "Search proven case studies by industry, framework, or vendor..."
            }
            onSearch={setSearchQuery}
          />
        </motion.div>

        {/* Advanced Filter Bar for Vendor Capabilities */}
        {showProposed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-text-muted">
                <Filter className="w-5 h-5" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              <MultiSelectDropdown
                label="Vendor"
                options={allVendors}
                selected={selectedVendors}
                onToggle={toggleVendor}
              />
              
              <MultiSelectDropdown
                label="Solution Category"
                options={allCategories}
                selected={selectedCategories}
                onToggle={toggleCategory}
              />
              
              <MultiSelectDropdown
                label="Industry"
                options={allIndustries}
                selected={selectedIndustries}
                onToggle={toggleIndustry}
              />

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-accent-primary transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Active Filter Chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2">
                {selectedVendors.map(vendor => (
                  <FilterChip
                    key={vendor}
                    label={vendor}
                    onRemove={() => toggleVendor(vendor)}
                  />
                ))}
                {selectedCategories.map(category => (
                  <FilterChip
                    key={category}
                    label={category}
                    onRemove={() => toggleCategory(category)}
                  />
                ))}
                {selectedIndustries.map(industry => (
                  <FilterChip
                    key={industry}
                    label={industry}
                    onRemove={() => toggleIndustry(industry)}
                  />
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="mt-6 text-center">
              <p className="text-lg font-medium text-text-primary">
                Showing {displayedCapabilities.length} of {totalCapabilities} capabilities
              </p>
            </div>
          </motion.div>
        ) : (
          /* Simple Filter Bar for Proven Case Studies */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            ref={ref}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-text-muted">
              <Filter className="w-5 h-5" />
              <span className="text-sm font-medium">Filter by Industry:</span>
            </div>
            {provenIndustries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-accent-primary text-text-primary shadow-lg'
                    : 'bg-bg-secondary text-text-muted hover:text-text-primary hover:bg-white/5 border border-white/10'
                }`}
              >
                {industry}
              </button>
            ))}
          </motion.div>
        )}

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-xlarge p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">
                {showProposed ? '20+' : '15-35%'}
              </div>
              <div className="text-sm text-text-muted">
                {showProposed ? 'Vendor Solutions' : 'ROI/Savings Range'}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">
                {showProposed ? '$2-8M' : '$2-5M'}
              </div>
              <div className="text-sm text-text-muted">
                {showProposed ? 'Potential Value' : 'Value Delivered'}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">12-18 Mo.</div>
              <div className="text-sm text-text-muted">Avg. ROI Timeline</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-primary mb-2">
                {showProposed ? '10+ Indus' : '5 Indus'}
              </div>
              <div className="text-sm text-text-muted">
                {showProposed ? 'Market Coverage' : 'Proven Success'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study Grid or Vendor Capabilities Grid */}
        {displayedCapabilities.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 px-4"
          >
            <p className="text-xl text-text-muted mb-6">
              {showProposed 
                ? "No vendor capabilities match your search criteria. Try:"
                : "No case studies found matching your criteria."
              }
            </p>
            {showProposed && (
              <ul className="text-lg text-text-muted mb-6 max-w-md mx-auto text-left list-disc list-inside">
                <li>Removing some filters</li>
                <li>Using different keywords</li>
                <li>Clearing all filters to see all results</li>
              </ul>
            )}
            <button
              onClick={() => {
                if (showProposed) {
                  clearAllFilters();
                } else {
                  setSelectedIndustry('All Industries');
                  setSearchQuery('');
                }
              }}
              className="px-6 py-2 border border-accent-primary text-accent-primary rounded-full hover:bg-accent-primary hover:text-text-primary transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        ) : showProposed ? (
          /* Vendor Capabilities Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVendorCapabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
              >
                <Link
                  to={capability.path}
                  className="block h-full bg-bg-secondary rounded-xlarge overflow-hidden border border-white/5 hover:border-accent-primary hover:-translate-y-2 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={capability.image}
                      alt={capability.capability_name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div 
                        className="px-4 py-2 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: capability.industryColor, color: '#FFFFFF' }}
                      >
                        {capability.category[0]}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
                      {capability.capability_name}
                    </h3>
                    
                    {/* Vendor Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {capability.vendor.slice(0, 3).map((vendor, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs font-medium rounded-full border border-accent-primary/30"
                        >
                          {vendor}
                        </span>
                      ))}
                      {capability.vendor.length > 3 && (
                        <span className="px-3 py-1 bg-white/5 text-text-muted text-xs rounded-full border border-white/10">
                          +{capability.vendor.length - 3} more
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-text-muted mb-4 line-clamp-2">
                      {capability.description}
                    </p>

                    {/* Implementation Details */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <div className="text-text-muted mb-1">Implementation</div>
                          <div className="font-semibold">{capability.implementation_time}</div>
                        </div>
                        <div>
                          <div className="text-text-muted mb-1">ROI Range</div>
                          <div className="font-semibold text-accent-primary">{capability.roi_range}</div>
                        </div>
                      </div>
                    </div>

                    {/* Industry Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {capability.industry.slice(0, 3).map((ind, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-white/5 text-text-muted text-xs rounded-full border border-white/10"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-accent-primary">
                          View Details
                        </span>
                        <ArrowRight className="w-6 h-6 text-accent-primary group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Proven Case Studies Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProvenCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  to={caseStudy.path}
                  className="block h-full bg-bg-secondary rounded-xlarge overflow-hidden border border-white/5 hover:border-accent-primary hover:-translate-y-2 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4">
                      <div 
                        className="px-4 py-2 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: caseStudy.industryColor, color: '#0B0D10' }}
                      >
                        {caseStudy.industry}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
                      {caseStudy.title}
                    </h3>
                    
                    {/* Framework Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.frameworks.map((framework, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 text-text-muted text-xs rounded-full border border-white/10"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-text-muted mb-4 line-clamp-2">
                      {caseStudy.challenge}
                    </p>

                    {/* Key Metric */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-accent-primary mb-1">
                            {caseStudy.keyMetric.value}
                          </div>
                          <div className="text-xs text-text-muted">
                            {caseStudy.keyMetric.description}
                          </div>
                        </div>
                        <ArrowRight className="w-6 h-6 text-accent-primary group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 pt-16 border-t border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {showProposed 
              ? 'Ready to Implement These Solutions?'
              : 'Ready to Start Your Transformation?'
            }
          </h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            {showProposed 
              ? 'Partner with us to implement cutting-edge AI solutions from industry-leading vendors.'
              : 'Join these growing businesses and achieve measurable results with our proven framework approach.'
            }
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-1 hover:shadow-button transition-all duration-300"
          >
            {showProposed ? 'Discuss Partnership' : 'Schedule Strategy Session'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
