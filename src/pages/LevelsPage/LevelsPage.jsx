import LevelBanner from "../../components/LevelBanner/LevelBanner";
import Container from "../../components/ui/Container/Container";
import Loader from "../../components/ui/Loader/Loader";
import { useFetchLevels } from "../../hooks/api/useFetchLevels";
import s from "./LevelsPage.module.css";

export function LevelsPage() {
  const { data, isLoading } = useFetchLevels();

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className={s.title}>Levels</h1>
          {data.map((level) => (
            <LevelBanner key={level.id} {...level} />
          ))}
        </>
      )}
    </Container>
  );
}

export default LevelsPage;
