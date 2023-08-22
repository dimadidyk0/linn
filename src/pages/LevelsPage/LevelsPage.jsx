import LevelBanner from "../../components/LevelBanner/LevelBanner";
import Container from "../../components/ui/Container/Container";
import { useFetchLevels } from "../../hooks/api/useFetchLevels";

export function LevelsPage() {
  const { data, isLoading } = useFetchLevels();

  return (
    <Container>
      {isLoading
        ? "Loading..."
        : data.map((level) => (
            <LevelBanner key={level.id} {...level} />
          ))}
    </Container>
  );
}

export default LevelsPage;
