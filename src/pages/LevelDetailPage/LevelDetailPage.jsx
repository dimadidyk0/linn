// import PropTypes from "prop-types";
import Container from "../../components/ui/Container/Container";
import s from "./LevelDetailPage.module.css";

export function LevelDetailPage() {
  // const { data, isLoading } = useFetchLevelDetail();

  return (
    <Container>
      <h1 className={s.title}>Level ID</h1>
      {/* {isLoading
        ? "Loading..."
        : data.map((level) => (
            <LevelBanner key={level.id} {...level} />
          ))} */}
    </Container>
  );
}

LevelDetailPage.propTypes = {};

export default LevelDetailPage;
