import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import WeatherImage from "../src/components/WeatherImage";

let api_key = "d9e41930c6cec91658673cbda0952d92";

export const celsiusToFahrenheit = (temp) => {
  return (temp * 9) / 5 + 32;
};

export default function App() {
  const [city, setCity] = useState("Taipei");
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState(null);
  const [unit, setUnit] = useState("C");
  const [weather, setWeather] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [pressure, setPressure] = useState("");
  const [today, setToday] = useState("");

  const [cityList, setCityList] = useState([
    "Taipei",
    "Chicago",
    "New york",
    "Tokyo",
    "San Francisco",
    "Austin",
    "Seattle",
  ]);

  function handleUnitChnage(unit) {
    setUnit(unit);
  }

  useEffect(
    function () {
      async function weatherAPI() {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        );
        const data = await res.json();

        if (data.dt) {
          const unixTimestamp = data.dt;
          const date = new Date(unixTimestamp * 1000);
          const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = date.toLocaleDateString("en-US", options);
          setDate(formattedDate);
          setToday(unixTimestamp);
        }

        if (data.name) {
          setCity(data.name);
        }

        if (data.main && data.main.temp) {
          setTemp((data.main.temp - 273.25).toFixed(1));
        }

        if (data.weather) {
          const weatherDetail = data.weather[0].description;
          setWeather(weatherDetail);
        }

        if (data.wind) {
          setWind(data.wind.speed);
        }

        if (data.main && data.main.humidity) {
          setHumidity(data.main.humidity);
        }

        if (data.visibility) {
          const toMiles = data.visibility * 0.000621;
          setVisibility(toMiles);
        }

        if (data.main && data.main.pressure) {
          setPressure(data.main.pressure);
        }
      }
      weatherAPI();
    },
    [city, date, temp, wind, humidity, visibility, pressure, today]
  );

  return (
    <div className="App">
      <Sidebar
        city={city}
        setCity={setCity}
        date={date}
        temp={temp}
        unit={unit}
        weather={weather}
        cityList={cityList}
        handleUnitChnage={handleUnitChnage}
      />
      [city, date, temp, wind, humidity, visibility, pressure] [city, date,
      temp, wind, humidity, visibility, pressure]
      <Main
        wind={wind}
        humidity={humidity}
        visibility={visibility}
        pressure={pressure}
        today={today}
      />
    </div>
  );
}

function Main({
  handleUnitChnage,
  wind,
  humidity,
  visibility,
  pressure,
  today,
}) {
  return (
    <section className="right">
      <UnitChange OnUnitChange={handleUnitChnage} />
      <FiveDaysReport today={today} />
      <Hightlight
        wind={wind}
        humidity={humidity}
        visibility={visibility}
        pressure={pressure}
      />
      <footer>
        <p>created by username - devChallenges.io</p>
      </footer>
    </section>
  );
}

function Hightlight({ wind, humidity, visibility, pressure }) {
  return (
    <>
      <div className="hightlight">
        <h3>Today's Hightlights</h3>
        <div className="hightlights">
          <div id="wind">
            <p>Wind status</p>
            <h1>
              {wind}
              <span> mph</span>
            </h1>
            <p>WSW</p>
          </div>

          <div id="humidity">
            <p>Humidity</p>
            <h1>
              {humidity}
              <span>%</span>
            </h1>
            <div className="perectage-bar">
              <ul>
                <li>0</li> <li>50</li> <li>100</li>
              </ul>
              <progress id="file" max="100" value={humidity}>
                {humidity}%
              </progress>
              <p>%</p>
            </div>
          </div>
          <div id="visibility">
            <p>Visibility</p>
            <h1>
              {visibility}
              <span> miles</span>
            </h1>
          </div>
          <div id="air">
            <p>Air Pressure</p>
            <h1>
              {pressure}
              <span> mb</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

function UnitChange({ OnUnitChange }) {
  const [activeBtn, setActiveBtn] = useState(null);

  const handleClick = (unit) => {
    OnUnitChange(unit);
    setActiveBtn(unit);
  };

  return (
    <div className="temperatureUnit show">
      <button
        type="button"
        onClick={() => handleClick("C")}
        style={{
          backgroundColor: activeBtn === "C" ? "blue" : "white",
          color: activeBtn === "C" ? "white" : "black",
        }}
      >
        °C
      </button>
      <button
        type="button"
        onClick={() => handleClick("F")}
        style={{
          backgroundColor: activeBtn === "C" ? "blue" : "white",
          color: activeBtn === "C" ? "white" : "black",
        }}
      >
        °F
      </button>
    </div>
  );
}

function FiveDaysReport({ today }) {
  return (
    <div className="next-5-days">
      <div className="day">
        <p>Tomorrow</p>
        <WeatherImage />
        <p>
          16°C <span>11°C</span>
        </p>
      </div>
      <div className="day">
        <p>Tomorrow</p>
        <WeatherImage />
        <p>
          16°C <span>11°C</span>
        </p>
      </div>
      <div className="day">
        <p>Tomorrow</p>
        <WeatherImage />
        <p>
          16°C <span>11°C</span>
        </p>
      </div>
      <div className="day">
        <p>Tomorrow</p>
        <WeatherImage />
        <p>
          16°C <span>11°C</span>
        </p>
      </div>
      <div className="day">
        <p>Tomorrow</p>
        <WeatherImage />
        <p>
          16°C <span>11°C</span>
        </p>
      </div>
    </div>
  );
}
