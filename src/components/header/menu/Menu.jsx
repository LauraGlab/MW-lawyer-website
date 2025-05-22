import { useState, useEffect, useRef } from "react";
import MenuExp from "./MenuExp.jsx";
import ArrowDownIcon from "./../../../assets/icons/icon-arrow-down.svg";
import ArrowUpIcon from "./../../../assets/icons/icon-arrow-up.svg";
import CloseIcon from "./../../../assets/icons/closeIcon.svg";
import "./../../../css/components/header/menu/Menu.css";

const menuItems = [
  { label: "Strona Główna", id: "home"},
  { label: "Misja", id: "mission" },
  {
    label: "Czym się zajmuję?",
    id: "expertise",
    expandable: true,
  },
  { label: "O mnie", id: "about" },
  { label: "Kontakt", id: "contact" },
];

export default function Menu({ onClose }) {
  const [animation, setAnimation] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const menuRef = useRef();

  const onCloseAll = () => {
    setAnimation(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onCloseAll();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleClick = (item) => {
    if (item.expandable) {
      setShowExp(!showExp);
    } else {
      if (item.scrollTo === 0) {
        window.scroll({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(item.id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
      onCloseAll();
    }
  };

  return (
    <>
      <nav
        className={`sideMenu ${animation ? "closing" : ""}`}
        ref={menuRef}
        aria-label="Główne menu nawigacyjne"
      >
        <button
          className="closeMenuBtn"
          onClick={onCloseAll}
          aria-label="Zamknij menu"
        >
          <img src={CloseIcon} alt="Ikona zamknięcia menu" />
        </button>

        <ul className="sideMenuList">
          {menuItems.map((item, index) => {
            const isExpanded = item.expandable && showExp;

            return (
              <li
                key={index}
                className={`sideMenuItem ${
                  item.expandable ? "sideMenuItemExpandable" : ""
                } ${isExpanded ? "expanded" : ""}`}
              >
                <div className={item.expandable ? "sideMenuItemRow" : ""}>
                  <button
                    className="sideMenuLink"
                    onClick={() => handleClick(item)}
                    aria-expanded={item.expandable ? showExp : undefined}
                    aria-controls={item.expandable ? "submenu" : undefined}
                  >
                    {item.label}
                  </button>

                  {item.expandable && (
                    <button
                      className="toggleSubmenuBtn"
                      onClick={() => setShowExp(!showExp)}
                      aria-label={showExp ? "Zwiń podmenu" : "Rozwiń podmenu"}
                      aria-expanded={showExp}
                      aria-controls="submenu"
                    >
                      <img
                        src={showExp ? ArrowUpIcon : ArrowDownIcon}
                        alt={showExp ? "Strzałka w górę" : "Strzałka w dół"}
                      />
                    </button>
                  )}
                </div>

                {item.expandable && showExp && (
                  <MenuExp onClose={() => setShowExp(false)} id="submenu" />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
