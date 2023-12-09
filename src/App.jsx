import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [isC, setIsC] = useState(true);
  const [days, setDays] = useState([]);
  const [currentIndex, setIndex] = useState(0);
  const [currentGif, setCurrentGif] = useState("");
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isFetchingGif, setIsFetchingGif] = useState(true);
  const [isValidLocation, setIsValidLocation] = useState(true);
  const [currentLocation, setCurrentLocation] = useState("ho chi minh");
  const [currentCityName, setCurrentCityName] = useState(
    "Asia - Viet Nam - Ho Chi Minh City",
  );

  const currentWeather = days[currentIndex] || {};
  const giphyAPI = "Niu936Hs3eI8XlsMs1AaLxJcwP1A5h9X";
  const weatherAPI = "fad6a35f4297467f9ca111534232707";

  // fetch weather
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsValidLocation(true);
        setIsFetchingGif(true);
        const weatherData = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${currentLocation}&days=3`,
          { mode: "cors" },
        );
        if (weatherData.status !== 200) {
          throw new Error("Something went wrong");
        }
        const weatherJson = await weatherData.json();
        const cityName =
          weatherJson.location.tz_id.split("/")[0] +
          " - " +
          weatherJson.location.country +
          " - " +
          weatherJson.location.name;
        setCurrentCityName(cityName);
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
            icon: icon.split(".com")[1],
            id: Math.random().toString(32),
            text,
            avgtemp_c,
            avgtemp_f,
            daily_chance_of_rain,
            hours: hour.map((item) => ({
              ...item,
              id: Math.random().toString(32),
            })),
            maxtemp_c,
            maxtemp_f,
            mintemp_c,
            mintemp_f,
          });
          return total;
        }, []);
        setDays(days);
      } catch (e) {
        setIsValidLocation(false);
        // console.log(e);
      }
    };
    fetchWeatherData();
  }, [currentLocation]);

  // fetch giphy
  useEffect(() => {
    const fetchGiphyData = async () => {
      try {
        const giphyData = await fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=${giphyAPI}&s=${days[currentIndex].text}`,
          { mode: "cors" },
        );
        if (giphyData.status !== 200) {
          throw new Error();
        }
        const giphyJson = await giphyData.json();
        setCurrentGif(giphyJson.data.images.original.url);
        setIsFetchingGif(false);
      } catch (e) {
        setIsFetchingGif(true);
        // console.log(e);
      }
    };
    fetchGiphyData();
    return () => {
      setIsFetchingGif(true);
    };
  }, [days, currentIndex]);
  return (
    <>
      <Header
        isC={isC}
        setIsC={setIsC}
        isOpenAbout={isOpenAbout}
        setIsOpenAbout={setIsOpenAbout}
        isValidLocation={isValidLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <Main
        isC={isC}
        days={days}
        setIndex={setIndex}
        currentGif={currentGif}
        currentIndex={currentIndex}
        isFetchingGif={isFetchingGif}
        currentWeather={currentWeather}
        currentCityName={currentCityName}
      />
    </>
  );
};

export default App;
