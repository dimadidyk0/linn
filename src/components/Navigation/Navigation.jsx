import { Link } from "react-router-dom";
import { useNavigation } from "../../hooks/layout/useNavigation";
import s from "./Navigation.module.css";

export default function Navigation() {
  const navigation = useNavigation();

  return (
    <nav className={s.nav}>
      {navigation.map(({ title, link }) => (
        <Link className={s.link} key={title} to={link} title={title}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
