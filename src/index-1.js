function index() {
  return (
    <>
      <section className="left">
        <div className="local">
          <div className="search-nav hidden">
            <button className="btn-close">X</button>
            <div className="navSearch">
              <input type="search" id="search" placeholder="search location" />
              <span class="material-symbols-outlined">search</span>
              <button className="submitBtn" type="submit">
                Search
              </button>
              <div className="options">
                <ul>
                  <li>city</li>
                  <li>city</li>
                  <li>city</li>
                </ul>
              </div>
            </div>
          </div>
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

            <img className="weather-image" src={shower} alt="weather-image" />
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
      </section>
      <section className="right">
        <div className="temperatureUnit show">
          <button id="c-btn">°C</button>
          <button id="f-btn">°F</button>
        </div>
        <div className="next-5-days">
          <div className="day">
            <p>Tomorrow</p>
            <img src={shower} alt="shower"></img>
            <p>
              16°C <span>11°C</span>
            </p>
          </div>
          <div className="day">
            <p>Tomorrow</p>
            <img src={shower} alt="shower"></img>
            <p>
              16°C <span>11°C</span>
            </p>
          </div>
          <div className="day">
            <p>Tomorrow</p>
            <img src={shower} alt="shower"></img>
            <p>
              16°C <span>11°C</span>
            </p>
          </div>
          <div className="day">
            <p>Tomorrow</p>
            <img src={shower} alt="shower"></img>
            <p>
              16°C <span>11°C</span>
            </p>
          </div>
          <div className="day">
            <p>Tomorrow</p>
            <img src={shower} alt="shower"></img>
            <p>
              16°C <span>11°C</span>
            </p>
          </div>
        </div>
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
    </>
  );
}
