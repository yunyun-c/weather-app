import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import WeatherImage from "../src/components/WeatherImage";

let api_key = "d9e41930c6cec91658673cbda0952d92";

export default function App() {
  const [city, setCity] = useState("Taipei");
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState(null);
  const [unit, setUnit] = useState("C");
  const [weather, setWeather] = useState("");

  const [cityList, setCityList] = useState([
    "Taipei",
    "Chicago",
    "New york",
    "Tokyo",
    "San Francisco",
    "Austin",
    "Seattle",
  ]);

  const celsiusToFahrenheit = (temp) => {
    return (temp * 9) / 5 + 32;
  };

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
      }
      weatherAPI();
    },
    [city, date, temp]
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
      />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <section className="right">
      <UnitChange />
      <FiveDaysReport />
      <div className="hightlight">
        <h3>Today's Hightlights</h3>
        <div className="hightlights">
          <div id="wind">
            <p>Wind status</p>
            <h1>
              7<span>mph</span>
            </h1>
            <p>WSW</p>
          </div>

          <div id="humidity">
            <p>Wind status</p>
            <h1>
              84<span>%</span>
            </h1>
            <div className="perectage-bar">
              <ul>
                <li>0</li> <li>50</li> <li>100</li>
              </ul>
              <progress id="file" max="100" value="84">
                84%
              </progress>
              <p>%</p>
            </div>
          </div>
          <div id="visibility">
            <p>Visibility</p>
            <h1>
              6,4<span>miles</span>
            </h1>
          </div>
          <div id="air">
            <p>Air Pressure</p>
            <h1>
              998<span>mb</span>
            </h1>
          </div>
        </div>
      </div>
      <footer>
        <p>created by username - devChallenges.io</p>
      </footer>
    </section>
  );
}

function UnitChange() {
  return (
    <div className="temperatureUnit show">
      <button id="c-btn">°C</button>
      <button id="f-btn">°F</button>
    </div>
  );
}

function FiveDaysReport() {
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
