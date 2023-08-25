import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import s from "./LevelBanner.module.css";
import { buildLevelDtailRoute } from "../../utils/route";

export function LevelBanner({ title, color, id, sublevels }) {
  return (
    <div className={s.levelBanner} style={{ "--color": color }}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.list}>
        {sublevels.map((sublevel) => (
          <Link
            className={s.sublevel}
            to={buildLevelDtailRoute(sublevel.id)}
            key={sublevel.id}
          >
            {sublevel.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

LevelBanner.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.number,
  sublevels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      desciption: PropTypes.string,
    })
  ),
};

export default LevelBanner;
