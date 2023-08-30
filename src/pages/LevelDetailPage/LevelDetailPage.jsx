import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import s from "./LevelDetailPage.module.css";
import { useFetchLevelDetail } from "../../hooks/api/useFetchLevelDetail";
import { LESSON_TYPE } from "../../constants/lessonType";

export function LevelDetailPage() {
  const { id } = useParams();
  const { data: levelData, isLoading } = useFetchLevelDetail();

  return (
    <Container>
      <h1 className={s.title}>Level {id}</h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <p>{levelData?.description}</p>
          {levelData?.lessonGroups?.map((group) => (
            <div key={group.id}>
              <h2>{group.title}</h2>
              <p>
                Type: <b>{group.type}</b>
              </p>
              {group.type == LESSON_TYPE.CHARACTER ? (
                <div>
                  {group.lessons.map((lesson) => (
                    <div key={lesson.character}>
                      <strong>{lesson.character}</strong>
                      {lesson.meaning}
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {group.lessons.map((lesson) => (
                    <div key={lesson}>{lesson}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default LevelDetailPage;
