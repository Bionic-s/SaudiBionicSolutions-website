import { Hero } from '../components/Hero';
import { ProvenExperience } from '../components/ProvenExperience';
import { CaseStudies } from '../components/CaseStudies';
import { Contact } from '../components/Contact';
import { SolutionsHubVisual } from '../components/SolutionsHubVisual';

import { UrgencyBanner } from '../components/UrgencyBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <UrgencyBanner />
      
      {/* Stelligence-Inspired Solutions Hub */}
      <SolutionsHubVisual />
      
      <ProvenExperience />
      <CaseStudies />
      <Contact />
    </>
  );
}
