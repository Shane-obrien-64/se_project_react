// import { type } from "@testing-library/user-event/dist/type";
import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/consts";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ isDay, type, weatherTemp }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const imageSrc = weatherOptions.filter((i) => {
    return i.isDay === isDay && i.type === type;
  });

  return (
    <section className="weather" id="weather">
      <div className="weather__container">
        <div className="weather__temp">
          {weatherTemp} °{currentTemperatureUnit}
        </div>
        <img
          preserveAspectRatio="xMinYMin meet"
          className="weather__img"
          src={imageSrc[0].url}
          alt={imageSrc[0].type + " skies"}
        ></img>
      </div>
    </section>
  );
};

export default WeatherCard;
