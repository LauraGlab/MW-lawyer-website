import { Link } from "react-router-dom";
import "./../../../css/components/header/menu/MenuExp.css";

const lawLinks = [
  { label: "Prawo Cywilne", path: "/prawo-cywilne" },
  { label: "Prawo Rodzinne", path: "/prawo-rodzinne" },
  { label: "Prawo Gospodarcze", path: "/prawo-gospodarcze" },
  { label: "Prawo Pracy", path: "/prawo-pracy" },
  { label: "Prawo Nieruchomości", path: "/prawo-nieruchomosci" },
  { label: "Prawo Ochrony Danych Osobowych", path: "/prawo-danych" },
];

export default function MenuExp() {
  return (
    <div className="submenuWrapper">
      <ul
        className="submenuList"
        role="menu"
        aria-label="Podmenu dziedzin prawa"
      >
        {lawLinks.map(({ label, path }) => (
          <li key={path} className="submenuItem" role="none">
            <hr aria-hidden="true" />
            <Link
              to={path}
              className="submenuLink"
              role="menuitem"
              tabIndex={0}
              aria-label={`Przejdź do strony ${label}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}