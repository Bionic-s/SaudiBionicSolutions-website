import { useParams, Navigate } from 'react-router-dom';
import { vendorCapabilities } from '../data/vendorCapabilitiesData';
import { getCaseStudyContent } from '../data/vendorCaseStudyContent';
import VendorCaseStudyDetail from '../components/VendorCaseStudyDetail';

export default function VendorCaseStudyPage() {
  const { capabilityId } = useParams<{ capabilityId: string }>();

  // Find the capability
  const capability = vendorCapabilities.find(cap => cap.id === capabilityId);
  
  // Get the content
  const content = capabilityId ? getCaseStudyContent(capabilityId) : undefined;

  // If capability or content not found, redirect to case studies hub
  if (!capability || !content) {
    return <Navigate to="/case-studies" replace />;
  }

  return <VendorCaseStudyDetail capability={capability} content={content} />;
}
