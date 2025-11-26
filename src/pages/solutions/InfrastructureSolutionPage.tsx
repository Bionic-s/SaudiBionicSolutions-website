import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { solutionsData } from '../../data/solutionsData';

export default function InfrastructureSolutionPage() {
  return <SolutionPageTemplate {...solutionsData.infrastructure} />;
}
