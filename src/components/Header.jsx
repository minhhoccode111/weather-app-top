import { useState } from "react";
import PropTypes from "prop-types";

export default function Header({ setCurrentLocation, isValidLocation }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentLocation(inputValue);
    setInputValue("");
  };
  return (
    <header className="">
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
        <button type="submit">Search</button>
        {!isValidLocation && (
          <p className="text-red-500 absolute top-full bg-lightFade p-2">
            Please enter a valid city name
          </p>
        )}
      </form>
    </header>
  );
}

Header.defaultProps = {
  isValidLocation: true,
};

Header.propTypes = {
  isValidLocation: PropTypes.bool.isRequired,
  setCurrentLocation: PropTypes.func.isRequired,
};
