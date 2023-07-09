import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../utils/consts";
import "./Main.css";

const temp = "101° F";

function Main() {
  return (
    <main className="main">
      <WeatherCard isDay={false} type="clear" temp={temp} />
      <section className="card__section" id="card-section">
        <div className="card__suggestion">
          Today is {temp} / You may want to wear:
        </div>
        <div className="card__items">
          {defaultClothingItems.map((x) => {
            return <ItemCard x={x} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
