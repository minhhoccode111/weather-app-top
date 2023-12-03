import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";

function App() {
  const weatherAPI = "fad6a35f4297467f9ca111534232707";
  const giphyAPI = "z800BvIjQqE4M0LUNitC9B6IGD9X5n3L";
  const [isC, setIsC] = useState(true);
  const [currentLocation, setCurrentLocation] = useState("ho chi minh");
  const [isValidLocation, setIsValidLocation] = useState(true);
  const [currentWeather, setCurrentWeather] = useState("cloudy");
  const [currentGif, setCurrentGif] = useState("");
  const [index, setIndex] = useState(0);
  const [hour, setHour] = useState([]);

  // extract data
  // what they want to know: date, time, change of rain, tempc, tempf, icon

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
        const forecast = weatherJson.forecast.forecastday[index];
        const {
          day: {
            condition: { icon, text },
            avgtemp_c,
            avgtemp_f,
            daily_chance_of_rain,
          },
          hour,
        } = forecast;
        setCurrentWeather({
          icon,
          text,
          avgtemp_c,
          avgtemp_f,
          daily_chance_of_rain,
        });
        setHour(hour);
      } catch (e) {
        console.log(e);
      }
    };
    fetchWeatherData();
  }, [currentLocation, index]);

  // fetch giphy
  useEffect(() => {
    const fetchGiphyData = async () => {
      try {
        const giphyData = await fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${
            currentWeather.text + " cat"
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
        isC={isC}
        setIsC={setIsC}
        isValidLocation={isValidLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <Main
        currentGif={currentGif}
        setIndex={setIndex}
        hour={hour}
        currentWeather={currentWeather}
      />
      {/* <Footer /> */}
    </>
  );
}

export default App;
