import React from "react";
import "./../../../css/components/header/menu/MenuList.css";

export default function MenuList() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "mission", label: "Misja" },
    { id: "expertise", label: "Czym się zajmuję?" },
    { id: "about", label: "O Mnie" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <ul className="menuSection">
      {menuItems.map((item) => (
        <li key={item.id}>
          <button
            className="menuBtn"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};
