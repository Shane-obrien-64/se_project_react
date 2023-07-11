import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../utils/consts";

import { useMemo } from "react";
import "./Main.css";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 80) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 79) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard isDay={true} type="clear" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        <div className="card__suggestion">
          Today is {weatherTemp}°F/ You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => {
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
