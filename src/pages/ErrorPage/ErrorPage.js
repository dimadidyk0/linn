import { Link } from "react-router-dom";
import Container from "../../components/ui/Container/Container";

export function ErrorPage() {
  return (
    <Container>
      <Link to={`/`}>Go home</Link>
    </Container>
  );
}
