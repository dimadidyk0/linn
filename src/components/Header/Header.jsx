import Navigation from "../Navigation/Navigation";
import Container from "../ui/Container/Container";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div>LOGO</div> {/* TODO: add logo later */}
        <Navigation />
      </Container>
    </header>
  );
}
