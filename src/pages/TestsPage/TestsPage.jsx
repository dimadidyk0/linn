import Container from "../../components/ui/Container/Container";
import Loader from "../../components/ui/Loader/Loader";
import { useFetchTests } from "../../hooks/api/useFetchTests";
import TestForm from "./TestForm/TestForm";
import s from "./TestsPage.module.css";

export function TestsPage() {
  const { isLoading, data } = useFetchTests();

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={s.title}>Tests</h1>

          {data.map((test) => (
            <TestForm key={test.id} {...test} />
          ))}
        </>
      )}
    </Container>
  );
}

export default TestsPage;
