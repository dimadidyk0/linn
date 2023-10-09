import { useState } from "react";
import cx from "classnames";
import Container from "../../components/ui/Container/Container";
import s from "./CreateTestPage.module.css";
import { createTest } from "../../hooks/api/useFetchTests";

export function CreateTestPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTest({ name, description, type: "radio" });
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

        <button className={s.button} type="submit">
          Create
        </button>
      </form>
    </Container>
  );
}

export default CreateTestPage;
