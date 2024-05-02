import { Link } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import {
  LESSONS_ROUTE,
  REVIEW_ROUTE,
} from "../../constants/routeTemplates";
import { useFetchReviews } from "../../hooks/api/useFetchReviews";
import { useFetchLevels } from "../../hooks/api/useFetchLevels";

export function RootPage() {
  const { data: reviews, isLoading: isReveiwsLoading } =
    useFetchReviews();
  const { data: levels, isLoading: isLevelesLoading } =
    useFetchLevels();

  return (
    <Container>
      <div>
        <div>
          <Link to={LESSONS_ROUTE}>
            Levels {isLevelesLoading ? "..." : levels.length}
          </Link>
        </div>
        <div>
          <Link to={REVIEW_ROUTE}>
            Reviews {isReveiwsLoading ? "..." : reviews.length}
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default RootPage;
