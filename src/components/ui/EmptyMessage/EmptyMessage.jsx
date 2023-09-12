import PropTypes from "prop-types";
import cx from "classnames";
import s from "./EmptyMessage.module.css";

export default function EmptyMessage({ children, className }) {
  return <div className={cx(s.root, className)}>{children}</div>;
}

EmptyMessage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
