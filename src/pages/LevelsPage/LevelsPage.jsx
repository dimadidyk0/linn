import Container from "../../components/ui/Container/Container";
import { useFetchLevels } from "../../hooks/api/useFetchLevels";

export function LevelsPage() {
  const { data, isLoading } = useFetchLevels();

  return (
    <Container>
      {isLoading
        ? "Loading..."
        : data.map((level) => (
            <div key={level.id}>{level.title}</div>
          ))}
    </Container>
  );
}

export default LevelsPage;
