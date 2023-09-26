import PropTypes from "prop-types";
import s from "./TestFrom.module.css";

export default function TestForm({
  desription,
  answerOptions,
  type,
  onSubmit,
}) {
  return (
    <form className={s.root} onSubmit={onSubmit}>
      <p className={s.description}>{desription}</p>

      {answerOptions.map((option) => {
        return (
          <label className={s.option} key={option.name}>
            <input
              type={type}
              name="fav_language"
              value={option.value}
            />
            {option.name} {option.value}
          </label>
        );
      })}

      <button className={s.submit}>Submit</button>
    </form>
  );
}

TestForm.propTypes = {
  id: PropTypes.string.isRequired,
  desription: PropTypes.string,
  answerOptions: PropTypes.arrayOf(),
  type: PropTypes.string, // TODO: add const for types
  onSubmit: PropTypes.func.isRequired,
};
