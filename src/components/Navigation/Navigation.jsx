import { useNavigation } from "../../hooks/layout/useNavigation";
import s from "./Navigation.module.css";

export default function Navigation() {
  const navigation = useNavigation();

  return (
    <nav className={s.nav}>
      {navigation.map(({ title }) => (
        <a className={s.link} key={title} href="/#" title={title}>
          {title}
        </a>
      ))}
    </nav>
  );
}
