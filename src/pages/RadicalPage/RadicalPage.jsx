import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import Loader from "../../components/ui/Loader/Loader";
import { useFetchRadicalDetail } from "../../hooks/api/useFetchRadical";
import s from "./RadicalPage.module.css";

export function RadicalPage() {
  const { id } = useParams();
  const { data, isLoading } = useFetchRadicalDetail(id);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data?.id ? (
            <div className={s.root}>
              <h1 className={s.title}>Radical {data?.character}</h1>
              <p>{data?.meaning}</p>
            </div>
          ) : (
            "No radical"
          )}
        </>
      )}
    </Container>
  );
}

export default RadicalPage;
