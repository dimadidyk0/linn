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
        <div className={s.root}>
          <h1 className={s.title}>
            Level {levelData.title}{" "}
            <span className={s.subtext}>
              {levelData.titleSubtext}
            </span>
          </h1>
          <p className={s.description}>{levelData?.description}</p>

          {levelData?.lessonGroups?.map((group) => (
            <div key={group.id}>
              <h2 className={s.listTitle}>{group.title}</h2>

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
      )}
    </Container>
  );
}

export default LevelDetailPage;
