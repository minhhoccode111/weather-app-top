// import { useState } from "react";
import PropTypes from "prop-types";
import DayCard from "./DayCard";
import HourCard from "./HourCard";

export default function Main({
  isC,
  days,
  setIndex,
  currentGif,
  currentIndex,
  currentWeather,
}) {
  return (
    <main className="">
      <section className="bg-dark text-light">
        <div className="flex gap-4 justify-evenly max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <header>
              <h2 className="font-bold text-3xl">{currentWeather.text}</h2>
            </header>
            <div className="w-12">
              <img src={currentWeather.icon} className="w-full block" />
            </div>
            <h3 className="text-2xl text-white">
              {currentWeather.daily_chance_of_rain}%
            </h3>
            <h3 className="text-2xl font-extrabold tracking-widest">
              {isC ? currentWeather.avgtemp_c : currentWeather.avgtemp_f}
            </h3>
          </div>
          <div className="flex items-center flex-col">
            <h2 className="text-2xl">The weather be like*</h2>
            <div className="max-w-[200px]">
              <img
                src={currentGif}
                alt="A gif about the weather"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="border">
        <ul className="justify-self-stretch grid grid-cols-autoFit gap-2">
          {currentWeather?.hours?.map((hour) => (
            <HourCard key={hour.id} hour={hour} isC={isC} />
          ))}
        </ul>
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
