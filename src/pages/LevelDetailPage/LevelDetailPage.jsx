import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import s from "./LevelDetailPage.module.css";
import { useFetchLevelDetail } from "../../hooks/api/useFetchLevelDetail";
import LessonPreview from "./LessonPreview/LessonPreview";
import Loader from "../../components/ui/Loader/Loader";

export function LevelDetailPage() {
  const { id } = useParams();
  const { data: levelData, isLoading } = useFetchLevelDetail();

  console.log(id);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={s.title}>Level {levelData.title}</h1>
          <div>
            <p>{levelData?.description}</p>
            {levelData?.lessonGroups?.map((group) => (
              <div key={group.id}>
                <h2>{group.title}</h2>
                <p>
                  Type: <b>{group.type}</b>
                </p>

                <div className={s.list}>
                  {group.lessons.map((lesson) => (
                    <LessonPreview
                      key={lesson.character || lesson}
                      lesson={lesson}
                      type={group.type}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}

export default LevelDetailPage;
