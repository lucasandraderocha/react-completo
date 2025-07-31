import Button from "./Button";
import PropTypes from "prop-types";
const Contato = props => {
  return (
    <div style={{ margin: props.margin }}>
      <h1>Hi</h1>
      <Button>Button</Button>
    </div>
  );
};
Contato.propTypes = {
  margin: PropTypes.string,
};
export default Contato;
