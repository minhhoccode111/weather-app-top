import PropTypes from "prop-types";
export default function Button({ text, type, buttonOnClickCb }) {
  return (
    <button
      onClick={buttonOnClickCb}
      type={type}
      className="bg-blue-500 transition-colors hover:bg-blue-600 capitalize text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Click Me",
  type: "button",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonOnClickCb: PropTypes.func.isRequired,
};
