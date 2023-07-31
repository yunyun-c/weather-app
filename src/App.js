import "./App.css";
import cloudBackground from "./img/Cloud-background.png";
import shower from "./img/Shower.png";

function App() {
  return (
    <div className="App">
      <div className="local">
        <div className="header-btn">
          <button id="btn-search-places">Seach for places</button>
          <button id="btn-target">
            <span class="material-icons-outlined">my_location</span>
          </button>
        </div>
        <div className="local-weather-img">
          <img
            className="background-image"
            src={cloudBackground}
            alt="background"
          ></img>

          <img className="weather-image" src={shower} alt="weather-image"></img>
        </div>

        <div className="details">
          <h1 className="temperature">
            15<span>°C</span>
          </h1>
          <h2 className="type">Shower</h2>
          <p className="date">Today . Fri, 5 Jun</p>
          <p className="location">
            <span class="material-icons-outlined">room</span> my location
          </p>
        </div>
      </div>
      <div className="next-5-days">
        <div className="day-1">
          <p>Tomorrow</p>
          <img src={shower} alt="shower"></img>
          <p>
            16°C <span>11°C</span>
          </p>
        </div>
        <div className="day-1">
          <p>Tomorrow</p>
          <img src={shower} alt="shower"></img>
          <p>
            16°C <span>11°C</span>
          </p>
        </div>
        <div className="day-1">
          <p>Tomorrow</p>
          <img src={shower} alt="shower"></img>
          <p>
            16°C <span>11°C</span>
          </p>
        </div>
        <div className="day-1">
          <p>Tomorrow</p>
          <img src={shower} alt="shower"></img>
          <p>
            16°C <span>11°C</span>
          </p>
        </div>
        <div className="day-1">
          <p>Tomorrow</p>
          <img src={shower} alt="shower"></img>
          <p>
            16°C <span>11°C</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
