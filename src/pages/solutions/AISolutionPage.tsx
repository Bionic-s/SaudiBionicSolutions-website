import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { solutionsData } from '../../data/solutionsData';

export default function AISolutionPage() {
  return <SolutionPageTemplate {...solutionsData.aiSystems} />;
}
