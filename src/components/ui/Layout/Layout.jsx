import PropTypes from "prop-types";
import cx from "classnames";
import Header from "../Header/Header";
import s from "./Layout.module.css";

export function Layout({ children, className }) {
  return (
    <div className={cx(s.layout, className)}>
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
