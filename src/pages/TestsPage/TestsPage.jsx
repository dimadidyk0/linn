import Container from "../../components/ui/Container/Container";
import Loader from "../../components/ui/Loader/Loader";
import s from "./TestsPage.module.css";

export function TestsPage() {
  const isLoading = false;

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={s.title}>Tests</h1>
        </>
      )}
    </Container>
  );
}

export default TestsPage;
