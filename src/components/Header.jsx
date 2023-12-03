import { useState } from "react";
import PropTypes from "prop-types";

export default function Header({
  setCurrentLocation,
  isValidLocation,
  isC,
  setIsC,
}) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentLocation(inputValue);
    setInputValue("");
  };
  return (
    <header className="flex items-center justify-between gap-4 p-4 text-3xl">
      <div className="">
        <h1>Weather App</h1>
      </div>
      <div className="">
        <form className="relative" type="search" onSubmit={handleSubmit}>
          <input
            required={true}
            type="search"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="border rounded"
            placeholder="Search for a city"
            maxLength={50}
            minLength={2}
            title="Search for a city"
          />
          <button type="submit" title="Search" className="">
            Search
          </button>
          {!isValidLocation && (
            <p className="text-red-500 rounded absolute top-full p-2">
              Please enter a valid city name
            </p>
          )}
        </form>
      </div>
      <div className="">
        <button
          type="button"
          className="border-b-2 border-blue-500 "
          onClick={() => setIsC(!isC)}
        >
          {isC ? "℃" : "℉"}
        </button>
      </div>
    </header>
  );
}

Header.defaultProps = {
  isValidLocation: true,
  isC: true,
};

Header.propTypes = {
  isC: PropTypes.bool.isRequired,
  setIsC: PropTypes.func.isRequired,
  isValidLocation: PropTypes.bool.isRequired,
  setCurrentLocation: PropTypes.func.isRequired,
};
