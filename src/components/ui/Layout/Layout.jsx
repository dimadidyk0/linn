import PropTypes from "prop-types";
import cx from "classnames";
import s from "./Layout.module.css";

export function Layout({ children, className }) {
  return <div className={cx(s.layout, className)}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
