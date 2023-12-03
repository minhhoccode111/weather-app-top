import { useState } from "react";

export default function Header({ setCurrentLocation }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentLocation(inputValue);
  };
  return (
    <header className="">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className=""
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
