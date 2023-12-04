// import { useState } from "react";
import PropTypes from "prop-types";
import DayCard from "./DayCard";

export default function Main({
  isC,
  days,
  setIndex,
  currentGif,
  currentIndex,
  currentWeather,
}) {
  return (
    <main className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
      <section className="flex flex-col items-center justify-between">
        <header>
          <h2 className="font-bold text-3xl">{currentWeather.text}</h2>
        </header>
        <div className="w-12">
          <img src={currentWeather.icon} className="w-full block" />
        </div>
        <h3 className="text-2xl text-blue-500">
          {currentWeather.daily_chance_of_rain}%
        </h3>
        <h3 className="text-2xl">
          {isC ? currentWeather.avgtemp_c : currentWeather.avgtemp_f}
        </h3>
      </section>
      <section></section>
      <section className="flex items-center flex-col justify-between">
        <h2 className="text-2xl">The weather be like*</h2>
        <div className="max-h-36 h-full flex items-center justify-center">
          <img
            src={currentGif}
            alt="gif"
            className="block h-full object-cover w-auto object-center"
          />
        </div>
      </section>
      <section className="">
        <nav className="h-full">
          <ul className="grid grid-cols-3 h-full content-center gap-2">
            {days.map((day, index) => (
              <DayCard
                isDisabled={currentIndex === index}
                isC={isC}
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
  isC: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number.isRequired,
};
