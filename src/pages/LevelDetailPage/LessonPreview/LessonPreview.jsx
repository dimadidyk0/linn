import PropTypes from "prop-types";
import { LESSON_TYPE } from "../../../constants/lessonType";

export function LessonPreview({ lesson, type }) {
  if (type === LESSON_TYPE.CHARACTER) {
    return (
      <div key={lesson.character}>
        <strong>{lesson.character}</strong>
        {lesson.meaning}
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
