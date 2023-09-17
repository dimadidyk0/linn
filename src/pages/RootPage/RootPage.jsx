import { Link } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import {
  LESSONS_ROUTE,
  REVIEW_ROUTE,
} from "../../constants/routeTemplates";
import { useFetchReviews } from "../../hooks/api/useFetchReviews";
import { useFetchLessosns } from "../../hooks/api/useFetchLessons";

export function RootPage() {
  const { data: reviews, isLoading: isReveiwsLoading } =
    useFetchReviews();
  const { data: lessons, isLoading: isLessonsLoading } =
    useFetchLessosns();

  return (
    <Container>
      <div>
        <div>
          <Link to={LESSONS_ROUTE}>
            Lessons {isLessonsLoading ? "..." : lessons.length}
          </Link>
        </div>
        <div>
          <Link to={REVIEW_ROUTE}>
            Reviews {isReveiwsLoading ? "..." : reviews.length}
          </Link>
        </div>
      </div>

      <div>Progress block</div>
    </Container>
  );
}

export default RootPage;
