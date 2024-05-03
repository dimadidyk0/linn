import { useState } from "react";
import cx from "classnames";
import Container from "../../components/ui/Container/Container";
import s from "./CreateTestPage.module.css";
import { useCreateTestMutaion } from "../../hooks/api/useFetchTests";

const optionsForCorrectAnswer = ["a)", "b)", "c)", "d)"];

export function CreateTestPage() {
  const [name, setName] = useState("");
  const [correct, setCorrect] = useState("");
  const [answers, setAnswers] = useState({});
  const [description, setDescription] = useState("");
  const { mutate: createTest } = useCreateTestMutaion({
    onSuccess: () => {
      setName("");
      setCorrect("");
      setAnswers({});
      setDescription("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = {
      name,
      correct,
      description,
      type: "radio",
      answerOptions: Object.entries(answers).map(([key, value]) => ({
        name: key,
        value,
      })),
    };
    createTest(test);
  };

  return (
    <Container>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          className={cx(s.field, s.input)}
          placeholder="Name"
        />

        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={cx(s.field, s.textarea)}
          placeholder="Description"
        />

        <fieldset>
          <legend>Correct:</legend>
          {optionsForCorrectAnswer.map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={option}
                name="correct"
                checked={correct === option}
                onChange={() => setCorrect(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </fieldset>

        {optionsForCorrectAnswer.map((option) => (
          <div key={option}>
            <input
              placeholder={option}
              className={cx(s.field, s.input)}
              name={option}
              value={answers[option] || ""}
              onChange={(e) =>
                setAnswers((prev) => ({
                  ...prev,
                  [option]: e.target.value,
                }))
              }
            />
          </div>
        ))}

        <button className={s.button} type="submit">
          Create
        </button>
      </form>
    </Container>
  );
}

export default CreateTestPage;
