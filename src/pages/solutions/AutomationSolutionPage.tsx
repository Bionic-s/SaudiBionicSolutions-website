import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { solutionsData } from '../../data/solutionsData';

export default function AutomationSolutionPage() {
  return <SolutionPageTemplate {...solutionsData.automation} />;
}
