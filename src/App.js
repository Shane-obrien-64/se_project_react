// import logo from "./logo.svg";
import Header from "./Header/Header";
import WeatherCard from "./WeatherCard/WeatherCard";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard isDay={true} type="storm" />
        <section id="cards">Cards</section>
      </main>
    </div>
  );
}

export default App;
