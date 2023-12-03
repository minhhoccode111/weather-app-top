import { useState } from "react";
import PropTypes from "prop-types";

export default function Main({ currentWeather, forecast, currentGif }) {
  const [index, setIndex] = useState(0);

  return (
    <main>
      <a href={currentGif}>gif link</a>

      <div>
        <button className="text-xl px-4 py-2">today</button>
        <button className="text-xl px-4 py-2">tomorrow</button>
        <button className="text-xl px-4 py-2">overmorrow</button>
      </div>
    </main>
  );
}

Main.propTypes = {
  currentWeather: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired,
  currentGif: PropTypes.string.isRequired,
};
