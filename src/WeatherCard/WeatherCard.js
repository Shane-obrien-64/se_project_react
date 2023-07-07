// import { type } from "@testing-library/user-event/dist/type";
import "./WeatherCard.css";

const weatherOptions = [
  { url: "/images/weather-cards/day-clear.svg", isDay: true, type: "clear" },
  { url: "/images/weather-cards/day-cloudy.svg", isDay: true, type: "cloudy" },
  { url: "/images/weather-cards/day-rain.svg", isDay: true, type: "rain" },
  { url: "/images/weather-cards/day-storm.svg", isDay: true, type: "storm" },
  { url: "/images/weather-cards/day-snow.svg", isDay: true, type: "snow" },
  { url: "/images/weather-cards/day-fog.svg", isDay: true, type: "fog" },

  { url: "/images/weather-cards/night-clear.svg", isDay: false, type: "clear" },
  {
    url: "/images/weather-cards/night-cloudy.svg",
    isDay: false,
    type: "cloudy",
  },
  { url: "/images/weather-cards/night-rain.svg", isDay: false, type: "rain" },
  { url: "/images/weather-cards/night-storm.svg", isDay: false, type: "storm" },
  { url: "/images/weather-cards/night-snow.svg", isDay: false, type: "snow" },
  { url: "/images/weather-cards/night-fog.svg", isDay: false, type: "fog" },
];

const WeatherCard = ({ isDay, type }) => {
  const imageSrc = weatherOptions.filter((i) => {
    // console.log(i);
    return i.isDay === isDay && i.type === type;
  });
  const src = imageSrc[0].url;
  console.log(src);
  //   console.log(src);

  return (
    <section className="weather" id="weather">
      <div className="weather__info">100F</div>
      <img className="weather__img" src={src} alt=""></img>
    </section>
  );
};

export default WeatherCard;
