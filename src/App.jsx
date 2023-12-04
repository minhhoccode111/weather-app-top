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
  const [currentGif, setCurrentGif] = useState("");
  const [currentIndex, setIndex] = useState(0);
  const [days, setDays] = useState([]);
  const currentWeather = days[currentIndex] || {};

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
        const forecast = weatherJson.forecast.forecastday;
        const days = forecast.reduce((total, current) => {
          const {
            date,
            day: {
              condition: { icon, text },
              avgtemp_c,
              avgtemp_f,
              daily_chance_of_rain,
              maxtemp_c,
              maxtemp_f,
              mintemp_c,
              mintemp_f,
            },
            hour,
          } = current;
          total.push({
            date,
            // access icon from root
            icon: "/src/assets" + icon.match(/(?<=\.com).*/).join(""),
            id: Math.random().toString(32),
            text,
            avgtemp_c,
            avgtemp_f,
            daily_chance_of_rain,
            hour,
            maxtemp_c,
            maxtemp_f,
            mintemp_c,
            mintemp_f,
          });
          return total;
        }, []);
        setDays(days);
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
            days[currentIndex].text + " cat"
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
  }, [days, currentIndex]);
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
        currentIndex={currentIndex}
        currentWeather={currentWeather}
        days={days}
        isC={isC}
      />
      {/* <Footer /> */}
    </>
  );
}

export default App;
