import Container from "../../components/ui/Container/Container";
import Loader from "../../components/ui/Loader/Loader";
import { useFetchTests } from "../../hooks/api/useFetchTests";
import s from "./TestsPage.module.css";

export function TestsPage() {
  const { isLoading, data } = useFetchTests();

  console.log("\n\n\n", data);

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
