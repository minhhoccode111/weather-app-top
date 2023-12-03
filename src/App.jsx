import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const weatherAPI = "fad6a35f4297467f9ca111534232707";
  const giphyAPI = "z800BvIjQqE4M0LUNitC9B6IGD9X5n3L";
  // const [isCDegree, setIsCDegree] = useState(true);
  const [currentLocation, setCurrentLocation] = useState("ho chi minh");
  const [isValidLocation, setIsValidLocation] = useState(true);
  const [currentWeather, setCurrentWeather] = useState("cloudy");
  const [forecast, setForecast] = useState([]);
  const [currentGif, setCurrentGif] = useState("");

  // fetch weather
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsValidLocation(true);
        const weatherData = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${currentLocation}&days=3`,
          { mode: "cors" },
        );
        if (weatherData.status !== 200) {
          setIsValidLocation(false);
          throw new Error();
        }
        const weatherJson = await weatherData.json();
        setForecast([...weatherJson.forecast.forecastday]);
        setCurrentWeather(
          weatherJson.forecast.forecastday[0].day.condition.text,
        );
      } catch (e) {
        console.log(e);
      }
    };
    fetchWeatherData();
  }, [currentLocation]);

  // fetch giphy
  useEffect(() => {
    const fetchGiphyData = async () => {
      try {
        const giphyData = await fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${
            currentWeather + " cat"
          }`,
          { mode: "cors" },
        );
        if (giphyData.status !== 200) {
          throw new Error();
        }
        const giphyJson = await giphyData.json();
        setCurrentGif(giphyJson.data.images.original.url);
      } catch (e) {
        console.log(e);
      }
    };
    fetchGiphyData();
  }, [currentWeather]);
  return (
    <>
      <Header
        setCurrentLocation={setCurrentLocation}
        isValidLocation={isValidLocation}
      />
      <Main
        forecast={forecast}
        currentGif={currentGif}
        currentWeather={currentWeather}
      />
      {/* <Footer /> */}
    </>
  );
}

export default App;
