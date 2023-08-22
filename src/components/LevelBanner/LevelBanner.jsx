import PropTypes from "prop-types";
import s from "./LevelBanner.module.css";

export function LevelBanner({ title, color, id, sublevels }) {
  return (
    <div className={s.levelBanner} style={{ "--color": color }}>
      <h3 className={s.title}>{title}</h3>
      <div className={s.list}>
        {sublevels.map((sublevel) => (
          <div className={s.sublevel} key={sublevel.id}>
            {sublevel.title}
          </div>
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
