import SolutionPageTemplate from '../../components/SolutionPageTemplate';
import { solutionsData } from '../../data/solutionsData';

export default function DataAnalyticsSolutionPage() {
  return <SolutionPageTemplate {...solutionsData.dataAnalytics} />;
}
