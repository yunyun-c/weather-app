import { useState } from "react";
import { images } from "../Images";
import { celsiusToFahrenheit } from "../App";

import WeatherImage from "./WeatherImage";
import Search from "./Search";
import SearchBtn from "./SearchBtn";

export default function Sidebar({
  city,
  date,
  temp,
  unit,
  weather,
  cityList,
  setCity,
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="left">
      <div className="local">
        {isOpen ? (
          <SearchBtn setIsOpen={setIsOpen} />
        ) : (
          <Search setIsOpen={setIsOpen} cityList={cityList} setCity={setCity} />
        )}

        <div className="local-weather-img">
          <img
            className="background-image"
            src={images.cloudBackground}
            alt="background"
          ></img>
          <div className="weather-image">
            <WeatherImage />
          </div>
        </div>

        <div className="details">
          <h1 className="temperature">
            {unit === "C" ? temp : celsiusToFahrenheit(temp)}
            <span>°{unit}</span>
          </h1>
          <h2 className="type">{weather}</h2>
          <p className="date">{date}</p>
          <p className="location">
            <span className="material-icons-outlined">room</span>
            {city}
          </p>
        </div>
      </div>
    </section>
  );
}
