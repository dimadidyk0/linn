import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import s from "./LevelBanner.module.css";
import { buildLevelDtailRoute } from "../../utils/route";

export function LevelBanner({ title, color, id }) {
  return (
    <Link
      className={s.level}
      to={buildLevelDtailRoute(id)}
      key={id}
      style={{ "--color": color }}
    >
      {title}
    </Link>
  );
}

LevelBanner.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.number,
};

export default LevelBanner;
