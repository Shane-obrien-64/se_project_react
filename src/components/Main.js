import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
// import { defaultClothingItems } from "../utils/consts";

import { useContext, useMemo } from "react";
import "../blocks/Main.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { CurrentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[CurrentTemperatureUnit];
  const weather = weatherTemp?.temperature?.F;
  const weatherType = useMemo(() => {
    if (weather >= 80) {
      return "hot";
    } else if (weather >= 66 && weather <= 79) {
      return "warm";
    } else if (weather <= 65) {
      return "cold";
    }
  }, [temp]);

  // const filteredCards = defaultClothingItems.filter((item) => {
  //   return item.weather.toLowerCase() === weatherType;
  // });

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard isDay={true} type="clear" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        <div className="card__suggestion">
          Today is {temp}°{CurrentTemperatureUnit}/ You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => {
            console.log(item.id);
            return (
              <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
