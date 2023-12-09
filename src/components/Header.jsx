import { useState } from "react";
import PropTypes from "prop-types";
import { Search, Close } from "./Icons";

const Header = ({
  isC,
  setIsC,
  isOpenAbout,
  setIsOpenAbout,
  isValidLocation,
  setCurrentLocation,
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentLocation(inputValue);
    setInputValue("");
  };
  return (
    <header className="flex flex-col gap-4 p-4 text-3xl bg-light text-darker">
      <div className="flex items-center justify-between gap-24">
        <h1 className="text-4xl whitespace-nowrap">Weather App</h1>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="border-blue-500 underline underline-offset-4 grid place-items-center w-14 h-14 rounded-full bg-darker text-light"
            onClick={() => setIsC(!isC)}
          >
            {isC ? "℃" : "℉"}
          </button>
          <button
            className="text-4xl w-14 h-14 rounded-full grid place-items-center text-light bg-darker"
            onClick={() => setIsOpenAbout(!isOpenAbout)}
          >
            {isOpenAbout ? <Close color={"#FBCE00"} /> : "?"}
          </button>
        </div>
      </div>
      <div
        className={"text-lg text-right" + " " + (!isOpenAbout ? "hidden" : "")}
      >
        <p className="py-1">
          Powered by{" "}
          <a
            className="underline decoration-dotted hover:decoration-solid"
            href="https://www.weatherapi.com"
            target="_blank"
            rel="noreferrer"
          >
            WeatherAPI
          </a>
        </p>
        <p className="py-1">
          Make with ❤️ by{" "}
          <a
            className="underline decoration-dotted hover:decoration-solid"
            href="https://github.com/minhhoccode111"
            target="_blank"
            rel="noreferrer"
          >
            minhhoccode111
          </a>
        </p>
        <p className="py-1">
          View the{" "}
          <a
            className="underline decoration-dotted hover:decoration-solid"
            href="https://github.com/minhhoccode111/weather-app-top"
            target="_blank"
            rel="noreferrer"
          >
            source code
          </a>
        </p>
      </div>
      <div className="grid place-items-center">
        <form
          className="relative flex items-end"
          type="search"
          onSubmit={handleSubmit}
        >
          <input
            required={true}
            type="search"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Search for a city"
            maxLength={50}
            minLength={2}
            title="Search for a city"
            className="max-w-xs text-darker px-4 border-b-2 border-blue-500 bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            title="Search"
            className="border-b-2 border-blue-500"
          >
            <Search color="gray" />
          </button>
          {!isValidLocation && (
            <p className="text-red-500 bg-lightFade rounded absolute top-full p-2">
              Please enter a valid city name
            </p>
          )}
        </form>
      </div>
    </header>
  );
};

Header.defaultProps = {
  isValidLocation: true,
  isC: true,
};

Header.propTypes = {
  isC: PropTypes.bool.isRequired,
  setIsC: PropTypes.func.isRequired,
  isOpenAbout: PropTypes.bool.isRequired,
  setIsOpenAbout: PropTypes.func.isRequired,
  isValidLocation: PropTypes.bool.isRequired,
  setCurrentLocation: PropTypes.func.isRequired,
};
export default Header;
