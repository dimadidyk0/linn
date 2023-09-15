import Container from "../../components/ui/Container/Container";
import { useFetchReviews } from "../../hooks/api/useFetchReviews";
import Loader from "../../components/ui/Loader/Loader";
import s from "./ReviewPage.module.css";

export function ReviewPage() {
  const { data, isLoading } = useFetchReviews();

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className={s.title}>Review Page</h1>
          <p>To do: {data.length}</p>
        </div>
      )}
    </Container>
  );
}

export default ReviewPage;
