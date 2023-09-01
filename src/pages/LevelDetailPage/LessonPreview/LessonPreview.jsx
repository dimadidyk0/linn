import PropTypes from "prop-types";
import { LESSON_TYPE } from "../../../constants/lessonType";
import s from "./LessonPreview.module.css";

export function LessonPreview({ lesson, type }) {
  if (type === LESSON_TYPE.CHARACTER) {
    return (
      <div className={s.character} key={lesson.character}>
        <span className={s.symbol}>{lesson.character}</span>
        <span className={s.description}>{lesson.meaning}</span>
      </div>
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
  }),
  type: PropTypes.oneOf(LESSON_TYPE),
};

export default LessonPreview;
