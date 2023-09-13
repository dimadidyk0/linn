import { Link } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import {
  LESSONS_ROUTE,
  REVIEW_ROUTE,
} from "../../constants/routeTemplates";

export function RootPage() {
  return (
    <Container>
      <div>
        <div>
          <Link to={LESSONS_ROUTE}>Lessons</Link>
        </div>
        <div>
          <Link to={REVIEW_ROUTE}>Reviews</Link>
        </div>
      </div>

      <div>Progress block</div>
    </Container>
  );
}

export default RootPage;
