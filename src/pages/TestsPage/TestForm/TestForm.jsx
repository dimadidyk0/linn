import PropTypes from "prop-types";
import s from "./TestFrom.module.css";
import { useCallback, useState } from "react";

export default function TestForm({
  description,
  answerOptions,
  type,
  onSubmit,
  id,
  name,
}) {
  const [answer, setAnswer] = useState(null);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit({ [id]: answer });
    },
    [answer, onSubmit, id]
  );

  return (
    <form className={s.root} onSubmit={handleSubmit}>
      {name && <h3 className={s.name}>{name}</h3>}
      <p className={s.description}>{description}</p>

      {answerOptions?.map?.((option) => {
        return (
          <label className={s.option} key={option.name}>
            <input
              type={type}
              name="fav_language"
              value={option.value}
              onChange={() => setAnswer(option.name)}
            />
            {option.name} {option.value}
          </label>
        );
      })}

      <button disabled={!answer} className={s.submit}>
        Submit
      </button>
    </form>
  );
}

TestForm.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  answerOptions: PropTypes.arrayOf(),
  type: PropTypes.string, // TODO: add const for types
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
};
