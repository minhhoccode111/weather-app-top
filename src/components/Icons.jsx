import Artwork from "./../assets/weather-img.jpg";
import PropTypes from "prop-types";

export const WeatherImage = (props) => {
  return (
    <div className={props.divClass}>
      <img
        className={props.imgClass}
        style={{ width: "100%", display: "block" }}
        src={Artwork}
        alt="Artwork"
      />
    </div>
  );
};

WeatherImage.propTypes = {
  divClass: PropTypes.string,
  imgClass: PropTypes.string,
};

WeatherImage.defaultProps = {
  divClass: "",
  imgClass: "w-full block",
};

export const Github = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
    ></path>
  </svg>
);

Github.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

Github.defaultProps = {
  width: "20px",
  height: "20px",
  color: "#152A55",
};

export const Question = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M15.333 9.5A3.5 3.5 0 0 0 8.8 7.75a1 1 0 0 0 1.733 1a1.503 1.503 0 0 1 1.3-.75a1.5 1.5 0 1 1 0 3h-.003a.95.95 0 0 0-.19.039a1.032 1.032 0 0 0-.198.04a.983.983 0 0 0-.155.105a1.008 1.008 0 0 0-.162.11a1.005 1.005 0 0 0-.117.174a.978.978 0 0 0-.097.144a1.023 1.023 0 0 0-.043.212a.948.948 0 0 0-.035.176v1l.002.011v.491a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .998-1.002l-.002-.662A3.494 3.494 0 0 0 15.333 9.5Zm-4.203 6.79a1 1 0 0 0 .7 1.71a1.036 1.036 0 0 0 .71-.29a1.015 1.015 0 0 0 0-1.42a1.034 1.034 0 0 0-1.41 0Z"
    ></path>
  </svg>
);

const normal = {
  width: "30px",
  height: "30px",
  color: "#152A55",
};

Question.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

Question.defaultProps = normal;

export const Close = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
    ></path>
  </svg>
);

Close.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

Close.defaultProps = normal;

export const Search = (props) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={props.color}
      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
    ></path>
  </svg>
);

Search.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

Search.defaultProps = normal;

export const Loading = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="2" r="0" fill={props.color}>
      <animate
        attributeName="r"
        begin="0"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;2;0;0"
      ></animate>
    </circle>
    <circle
      cx="12"
      cy="2"
      r="0"
      fill={props.color}
      transform="rotate(45 12 12)"
    >
      <animate
        attributeName="r"
        begin="0.125s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;2;0;0"
      ></animate>
    </circle>
    <circle
      cx="12"
      cy="2"
      r="0"
      fill={props.color}
      transform="rotate(90 12 12)"
    >
      <animate
        attributeName="r"
        begin="0.25s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;2;0;0"
      ></animate>
    </circle>
    <circle
      cx="12"
      cy="2"
      r="0"
      fill={props.color}
      transform="rotate(135 12 12)"
    >
      <animate
        attributeName="r"
        begin="0.375s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;2;0;0"
      ></animate>
    </circle>
    <circle
      cx="12"
      cy="2"
      r="0"
      fill={props.color}
      transform="rotate(180 12 12)"
    >
      <animate
        attributeName="r"
        begin="0.5s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;2;0;0"
      ></animate>
    </circle>
    <circle
      cx="12"
      cy="2"
      r="0"
      fill={props.color}
      transform="rotate(225 12 12)"
    >
      <animate
        attributeName="r"
        begin="0.625s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;2;0;0"
      ></animate>
    </circle>
    <circle
      cx="12"
      cy="2"
      r="0"
      fill={props.color}
      transform="rotate(270 12 12)"
    >
      <animate
        attributeName="r"
        begin="0.75s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;2;0;0"
      ></animate>
    </circle>
    <circle
      cx="12"
      cy="2"
      r="0"
      fill={props.color}
      transform="rotate(315 12 12)"
    >
      <animate
        attributeName="r"
        begin="0.875s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
        repeatCount="indefinite"
        values="0;2;0;0"
      ></animate>
    </circle>
  </svg>
);
Loading.defaultProps = normal;
Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};
