// import { useState } from "react";
import PropTypes from "prop-types";
import DayCard from "./DayCard";
import HourCard from "./HourCard";
import { Loading } from "./Icons";

export default function Main({
  isC,
  days,
  setIndex,
  currentGif,
  currentIndex,
  isFetchingGif,
  currentWeather,
}) {
  return (
    <main className="bg-dark">
      <section className="text-light sm:pt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-evenly max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-1 sm:gap-4 bg-darker sm:rounded-lg min-w-[200px] p-4">
            <header>
              <h2 className="font-bold text-xl sm:text-3xl text-center">
                {currentWeather.text}
              </h2>
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
          <div className="flex items-center flex-col p-4">
            <h2 className="text-2xl">The weather be like*</h2>
            <div className="max-w-[200px]">
              {isFetchingGif ? (
                <Loading color={"#FBCE00"} />
              ) : (
                <img
                  src={currentGif}
                  alt="A gif about the weather"
                  className="block w-full"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="px-2 sm:px-4 md:px-8 lg:px-16 py-8 sm:py-16 bg-dark">
        <div className="grid grid-cols-autoFit justify-center items-center gap-2 overflow-hidden mx-auto h-full">
          {currentWeather?.hours?.map(
            (hour, index) =>
              !(index % 2) && <HourCard key={hour.id} hour={hour} isC={isC} />,
          )}
        </div>
      </section>
      <section className="bg-light py-4 sm:py-8">
        <ul className="grid grid-cols-3 h-full max-w-xl mx-auto content-center gap-2">
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
      </section>
    </main>
  );
}

Main.propTypes = {
  isC: PropTypes.bool.isRequired,
  days: PropTypes.array.isRequired,
  setIndex: PropTypes.func.isRequired,
  currentGif: PropTypes.string.isRequired,
  isFetchingGif: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number.isRequired,
  currentWeather: PropTypes.object.isRequired,
};
