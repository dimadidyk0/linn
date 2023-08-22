import LevelBanner from "../../components/LevelBanner/LevelBanner";
import Container from "../../components/ui/Container/Container";
import { useFetchLevels } from "../../hooks/api/useFetchLevels";
import s from "./LevelsPage.module.css";

export function LevelsPage() {
  const { data, isLoading } = useFetchLevels();

  return (
    <Container>
      <h1 className={s.title}>Levels</h1>
      {isLoading
        ? "Loading..."
        : data.map((level) => (
            <LevelBanner key={level.id} {...level} />
          ))}
    </Container>
  );
}

export default LevelsPage;
