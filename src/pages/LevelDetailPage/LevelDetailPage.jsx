import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import s from "./LevelDetailPage.module.css";
import { useFetchLevelDetail } from "../../hooks/api/useFetchLevelDetail";

export function LevelDetailPage() {
  const { id } = useParams();
  const { data: levelData, isLoading } = useFetchLevelDetail();

  return (
    <Container>
      <h1 className={s.title}>Level {id}</h1>
      {isLoading ? "Loading..." : <div>{levelData.description}</div>}
    </Container>
  );
}

export default LevelDetailPage;
