import { useState } from "react";
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
        />
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </Container>
  );
}

export default CreateTestPage;
