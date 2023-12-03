// import { useState } from "react";
import PropTypes from "prop-types";
import DayCard from "./DayCard";

export default function Main({ setIndex, currentGif, currentWeather, days }) {
  console.log(currentWeather.icon);
  return (
    <main className="grid grid-cols-2 grid-rows-2 gap-4">
      <section></section>
      <section></section>
      <section>
        <div>
          <img
            src={currentGif}
            alt="gif"
            className="w-full h-full block object-cover"
          />
        </div>
      </section>
      <section>
        <nav>
          <ul className="flex items-center justify-between">
            {days.map((day, index) => (
              <DayCard
                key={day.id}
                index={index}
                cardClickCb={() => setIndex(index)}
                day={day}
              />
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}

Main.propTypes = {
  setIndex: PropTypes.func.isRequired,
  currentGif: PropTypes.string.isRequired,
  currentWeather: PropTypes.object.isRequired,
  days: PropTypes.array.isRequired,
};
