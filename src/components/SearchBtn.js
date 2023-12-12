export default function SearchBtn({ setIsOpen }) {
  return (
    <div className="header-btn">
      <button id="btn-search-places" onClick={() => setIsOpen((open) => !open)}>
        Seach for places
      </button>
      <button id="btn-target">
        <span className="material-icons-outlined">my_location</span>
      </button>
    </div>
  );
}
