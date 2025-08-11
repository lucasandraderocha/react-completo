import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
