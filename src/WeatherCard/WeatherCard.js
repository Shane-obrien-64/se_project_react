// import { type } from "@testing-library/user-event/dist/type";
import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../images/weather-cards/day-clear.svg").default,
    isDay: true,
    type: "clear",
  },
  {
    url: require("../images/weather-cards/day-cloudy.svg").default,
    isDay: true,
    type: "cloudy",
  },
  {
    url: require("../images/weather-cards/day-rain.svg").default,
    isDay: true,
    type: "rain",
  },
  {
    url: require("../images/weather-cards/day-storm.svg").default,
    isDay: true,
    type: "storm",
  },
  {
    url: require("../images/weather-cards/day-snow.svg").default,
    isDay: true,
    type: "snow",
  },
  {
    url: require("../images/weather-cards/day-fog.svg").default,
    isDay: true,
    type: "fog",
  },

  {
    url: require("../images/weather-cards/night-clear.svg").default,
    isDay: false,
    type: "clear",
  },
  {
    url: require("../images/weather-cards/night-cloudy.svg").default,
    isDay: false,
    type: "cloudy",
  },
  {
    url: require("../images/weather-cards/night-rain.svg").default,
    isDay: false,
    type: "rain",
  },
  {
    url: require("../images/weather-cards/night-storm.svg").default,
    isDay: false,
    type: "storm",
  },
  {
    url: require("../images/weather-cards/night-snow.svg").default,
    isDay: false,
    type: "snow",
  },
  {
    url: require("../images/weather-cards/night-fog.svg").default,
    isDay: false,
    type: "fog",
  },
];

const WeatherCard = ({ isDay, type, temp }) => {
  const imageSrc = weatherOptions.filter((i) => {
    // console.log(i);
    return i.isDay === isDay && i.type === type;
  });
  const src = imageSrc[0].url;
  console.log(src);
  //   console.log(src);

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{temp}</div>
      <img className="weather__img" src={src} alt=""></img>
    </section>
  );
};

export default WeatherCard;
