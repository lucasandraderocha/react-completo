import PropTypes from "prop-types";

const Button = props => {
  const btnStyle = {
    margin: props.margin,
    width: `${props.width}px`,
    height: `${props.width / 3}px`,
    borderRadius: `${props.radius}px`,
    background: props.background,
  };

  return (
    <button style={btnStyle} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  width: 100,
  disabled: false,
};
Button.propTypes = {
  margin: PropTypes.string.isRequired,
  background: PropTypes.string,
  width: PropTypes.number,
  borderRadius: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Button;
