import { useState } from "react";

export default function Search({ setIsOpen, cityList, setCity }) {
  const [searchInput, setSearchInput] = useState("");

  function sumbitSearch() {
    setIsOpen(true);
    setCity(searchInput);
  }

  return (
    <>
      <div className="search-nav">
        <button
          className="btn-close"
          onClick={() => setIsOpen((open) => !open)}
        >
          X
        </button>
        <form className="navSearch">
          <div>
            <input
              type="search"
              id="search"
              placeholder="search location"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <span className="material-symbols-outlined">search</span>
            <button className="submitBtn" type="submit" onClick={sumbitSearch}>
              Search
            </button>
          </div>

          <div className="options">
            <ul>
              {cityList
                .filter((city) =>
                  city.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((filteredCity) => (
                  <li
                    key={filteredCity}
                    onClick={() => setSearchInput(filteredCity)}
                  >
                    {filteredCity}
                  </li>
                ))}
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}
