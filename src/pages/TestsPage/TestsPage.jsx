import { useCallback, useState } from "react";
import Container from "../../components/ui/Container/Container";
import Loader from "../../components/ui/Loader/Loader";
import { useFetchTests } from "../../hooks/api/useFetchTests";
import TestForm from "./TestForm/TestForm";
import s from "./TestsPage.module.css";

export function TestsPage() {
  const [answers, setAnswers] = useState({});
  const { isLoading, data } = useFetchTests();
  const handleSubmit = useCallback(
    (data) => {
      setAnswers((answers) => ({ ...answers, ...data }));
    },
    [setAnswers]
  );

  console.log("\n\n\n", answers, "\n\n\n\n");

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={s.title}>Tests</h1>
          <p>{data.length} questions</p>

          {data.map((test) => (
            <TestForm
              key={test.id}
              onSubmit={handleSubmit}
              {...test}
            />
          ))}
        </>
      )}
    </Container>
  );
}

export default TestsPage;
