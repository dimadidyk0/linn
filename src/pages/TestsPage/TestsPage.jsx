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

  const questionsCountToDo =
    data?.length - Object.keys(answers)?.length;
  const isFinished = questionsCountToDo === 0;

  const correctAnswersCount =
    isFinished &&
    data.filter(
      (question) => answers[question.id] === question.correct
    ).length;

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!isFinished ? (
            <p className={s.reminder}>
              <strong>{questionsCountToDo}</strong> questions remain
            </p>
          ) : (
            <div className={s.result}>
              Result: {correctAnswersCount} / {data.length}
            </div>
          )}

          {data?.map?.(
            (test) =>
              !answers[test.id] && (
                <TestForm
                  key={test.id}
                  onSubmit={handleSubmit}
                  {...test}
                />
              )
          )}
        </>
      )}
    </Container>
  );
}

export default TestsPage;
