import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import s from "./LevelDetailPage.module.css";

export function LevelDetailPage() {
  const { id } = useParams();

  return (
    <Container>
      <h1 className={s.title}>Level {id}</h1>
    </Container>
  );
}

export default LevelDetailPage;
