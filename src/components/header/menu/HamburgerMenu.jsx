import "./../../../css/components/header/menu/HamburgerMenu.css";

export default function HamburgerMenu({ onToggle, showMenu }) {
  return (
    <div className="hamburgerMenu__section">
      <button
        className="hamburgerMenu"
        onClick={onToggle}
        aria-label={showMenu ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={showMenu}
        aria-controls="menu"
        type="button"
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 72 72"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <g id="line">
            <line
              x1="16"
              x2="56"
              y1="26"
              y2="26"
              stroke="#897455"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="16"
              x2="56"
              y1="36"
              y2="36"
              stroke="#897455"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="16"
              x2="56"
              y1="46"
              y2="46"
              stroke="#897455"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}