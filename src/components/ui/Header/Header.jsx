import { Link } from "react-router-dom";
import Navigation from "../../Navigation/Navigation";
import Container from "../Container/Container";
import s from "./Header.module.css";
import { ROOT_ROUTE } from "../../../constants/routeTemplates";

export default function Header() {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <Link to={ROOT_ROUTE}>
          <div>LOGO</div>
          {/* TODO: add logo later */}
        </Link>

        <Navigation />
      </Container>
    </header>
  );
}
