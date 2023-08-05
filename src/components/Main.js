import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { defaultClothingItems } from "../utils/consts";

import { useContext, useMemo } from "react";
import "../blocks/Main.css";
import { CurrentTempUnitContext } from "../contexts/CurrentTempUnitContext";

function Main({ weatherTemp, onSelectCard }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const temp = weatherTemp?.temperature?.[currentTempUnit];
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

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard isDay={true} type="clear" weatherTemp={temp} />
      <section className="card__section" id="card-section">
        <div className="card__suggestion">
          Today is {temp}°{currentTempUnit}/ You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
