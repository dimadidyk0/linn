import Container from "../../components/ui/Container/Container";
// import Loader from "../../components/ui/Loader/Loader";
// import { useFetchLevels } from "../../hooks/api/useFetchLevels";
import s from "./ReviewPage.module.css";

export function ReviewPage() {
  // const { data, isLoading } = useFetchLevels();

  return (
    <Container>
      {/* {isLoading ? (
        <Loader />
      ) : (
        <> */}
      <h1 className={s.title}>Review Page</h1>
      {/* </>
      )} */}
    </Container>
  );
}

export default ReviewPage;
