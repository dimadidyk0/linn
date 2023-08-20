import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Container.module.css";

export default function Container({ children, className }) {
  return <div className={cx(s.container, className)}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
