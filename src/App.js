import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Wheather App</h1>
      <WeatherSearch />
      <p>
        This project was coded by Gabriela Lefter an it is
        <a
          href="https://github.com/gabrielalowe/weather-react"
          target="_blank"
          rel="noreferrer noopener"
        >
          open-sourced
        </a>
      </p>
    </div>
  );
}

export default App;
