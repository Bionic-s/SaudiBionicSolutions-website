import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { solutionsData } from '../../data/solutionsData';

export default function ServiceManagementSolutionPage() {
  return <SolutionPageTemplate {...solutionsData.serviceManagement} />;
}
