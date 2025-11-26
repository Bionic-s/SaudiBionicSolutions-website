import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCTABar } from './components/StickyCTABar';
import { ProgressiveProfiling } from './components/ProgressiveProfiling';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FrameworkPage from './pages/FrameworkPage';
import ContactPage from './pages/ContactPage';
import BookDiscoveryCallPage from './pages/BookDiscoveryCallPage';
import GetInformationPage from './pages/GetInformationPage';
import CaseStudiesHub from './pages/CaseStudiesHub';
import EnterpriseAITransformationCaseStudy from './pages/EnterpriseAITransformationCaseStudy';
import HealthcareCaseStudy from './pages/case-studies/HealthcareCaseStudy';
import FinanceCaseStudy from './pages/case-studies/FinanceCaseStudy';
import ManufacturingCaseStudy from './pages/case-studies/ManufacturingCaseStudy';
import RetailCaseStudy from './pages/case-studies/RetailCaseStudy';
import TechnologyCaseStudy from './pages/case-studies/TechnologyCaseStudy';
import ProposedCaseStudyPage from './pages/ProposedCaseStudyPage';
import VendorCaseStudyPage from './pages/VendorCaseStudyPage';
import SolutionsHub from './pages/SolutionsHub';
import AISolutionPage from './pages/solutions/AISolutionPage';
import AutomationSolutionPage from './pages/solutions/AutomationSolutionPage';
import DataAnalyticsSolutionPage from './pages/solutions/DataAnalyticsSolutionPage';
import ServiceManagementSolutionPage from './pages/solutions/ServiceManagementSolutionPage';
import CybersecuritySolutionPage from './pages/solutions/CybersecuritySolutionPage';
import InfrastructureSolutionPage from './pages/solutions/InfrastructureSolutionPage';
import ServicesPage from './pages/services/ServicesPage';
import EnterpriseIntegrationPage from './pages/services/EnterpriseIntegrationPage';
import ProfessionalServicesAIPage from './pages/services/ProfessionalServicesAIPage';
import ITBusinessStrategyPage from './pages/services/ITBusinessStrategyPage';
import BusinessProcessRedesignPage from './pages/services/BusinessProcessRedesignPage';
import FreeEnterpriseFrameworkGuide from './pages/FreeEnterpriseFrameworkGuide';
import SalesPage from './pages/SalesPage';
import SupportPage from './pages/SupportPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      prevent: (node: any) => {
        // Prevent Lenis from handling clicks on React Router links
        return node.tagName === 'A' || node.closest('a');
      },
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  // Stop Lenis on route change to allow smooth page transitions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/framework" element={<FrameworkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-discovery-call" element={<BookDiscoveryCallPage />} />
          <Route path="/get-information" element={<GetInformationPage />} />
          <Route path="/case-studies" element={<CaseStudiesHub />} />
          <Route path="/case-studies/enterprise-ai-transformation" element={<EnterpriseAITransformationCaseStudy />} />
          <Route path="/case-studies/healthcare-network" element={<HealthcareCaseStudy />} />
          <Route path="/case-studies/investment-banking" element={<FinanceCaseStudy />} />
          <Route path="/case-studies/global-manufacturing" element={<ManufacturingCaseStudy />} />
          <Route path="/case-studies/ecommerce-retail" element={<RetailCaseStudy />} />
          <Route path="/case-studies/tech-infrastructure" element={<TechnologyCaseStudy />} />
          
          {/* Vendor Capability Case Studies - Dynamic Route */}
          <Route path="/case-studies/:capabilityId" element={<VendorCaseStudyPage />} />
          
          {/* Proposed Vendor Partnership Case Studies */}
          <Route path="/case-studies/tempus-genomic-ai" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/pathai-digital-pathology" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/olive-ai-automation" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/zest-ai-credit-scoring" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/kensho-market-analytics" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/uipath-banking-rpa" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/falkonry-predictive-maintenance" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/sight-machine-industrial" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/vue-ai-ecommerce" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/snowflake-retail-cloud" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/c3-ai-energy" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/c3-ai-oilgas" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/ericsson-ai-ops" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/prospera-agriculture" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/minesense-mining" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/stats-perform-sports" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/openai-media" element={<ProposedCaseStudyPage />} />
          <Route path="/case-studies/palantir-defense" element={<ProposedCaseStudyPage />} />
          <Route path="/solutions" element={<SolutionsHub />} />
          <Route path="/solutions/ai-systems" element={<AISolutionPage />} />
          <Route path="/solutions/automation" element={<AutomationSolutionPage />} />
          <Route path="/solutions/data-analytics" element={<DataAnalyticsSolutionPage />} />
          <Route path="/solutions/service-management" element={<ServiceManagementSolutionPage />} />
          <Route path="/solutions/cybersecurity-grc" element={<CybersecuritySolutionPage />} />
          <Route path="/solutions/infrastructure-cloud" element={<InfrastructureSolutionPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/enterprise-integration" element={<EnterpriseIntegrationPage />} />
          <Route path="/services/professional-services-ai" element={<ProfessionalServicesAIPage />} />
          <Route path="/services/it-business-strategy" element={<ITBusinessStrategyPage />} />
          <Route path="/services/business-process-redesign" element={<BusinessProcessRedesignPage />} />
          <Route path="/free-enterprise-framework-guide" element={<FreeEnterpriseFrameworkGuide />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyCTABar />
      <ProgressiveProfiling triggerAfterSeconds={40} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
