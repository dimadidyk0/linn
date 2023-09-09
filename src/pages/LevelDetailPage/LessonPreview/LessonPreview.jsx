import PropTypes from "prop-types";
import { LESSON_TYPE } from "../../../constants/lessonType";
import { Link } from "react-router-dom";
import { buildRadicalDtailRoute } from "../../../utils/route";
import s from "./LessonPreview.module.css";

export function LessonPreview({ lesson, type }) {
  if (type === LESSON_TYPE.CHARACTER) {
    return (
      <Link
        to={buildRadicalDtailRoute(lesson.id)}
        className={s.character}
        key={lesson.character}
      >
        <span className={s.symbol}>{lesson.character}</span>
        <span className={s.description}>{lesson.meaning}</span>
      </Link>
    );
  }

  if (type === LESSON_TYPE.THEORY) {
    <div key={lesson}>{lesson}</div>;
  }

  return null;
}

LessonPreview.propTypes = {
  lesson: PropTypes.shape({
    character: PropTypes.string,
    meaning: PropTypes.string,
    id: PropTypes.string.isRequired,
  }),
  type: PropTypes.oneOf(LESSON_TYPE),
};

export default LessonPreview;
