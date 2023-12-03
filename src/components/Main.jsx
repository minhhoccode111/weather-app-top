import { useState } from "react";
import PropTypes from "prop-types";

export default function Main({ setIndex, currentGif, currentWeather, hour }) {
  return (
    <main className="w-full h-screen">
      <a href={currentGif}>gif link</a>

      <div>
        <button
          type="button"
          title="Today"
          onClick={() => setIndex(0)}
          className="px-4 py-2 capitalize"
        >
          today
        </button>
        <button
          type="button"
          title="Tomorrow"
          onClick={() => setIndex(1)}
          className="px-4 py-2 capitalize"
        >
          tomorrow
        </button>
        <button
          type="button"
          title="overmorrow"
          onClick={() => setIndex(2)}
          className="px-4 py-2 capitalize"
        >
          overmorrow
        </button>
      </div>
    </main>
  );
}

Main.propTypes = {
  setIndex: PropTypes.func.isRequired,
  currentGif: PropTypes.string.isRequired,
};
