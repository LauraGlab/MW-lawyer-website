import HamburgerMenu from "./menu/HamburgerMenu.jsx";
import MenuList from "./menu/MenuList.jsx";
import LogoSection from "./Logo.jsx";
import Menu from "./menu/Menu.jsx";
import "./../../css/components/header/Header.css";

export default function NavSection({
  showMenu,
  onToggleMenu,
  showLogo = true,
}) {
  return (
    <header id="header" role="banner">
      <nav
        className="main-navigation"
        aria-label="Główna nawigacja"
        role="navigation"
      >
        <HamburgerMenu
          onToggle={onToggleMenu}
          showMenu={showMenu}
          aria-label={showMenu ? "Zamknij menu" : "Otwórz menu"}
        />
        {showMenu && <Menu onClose={onToggleMenu} />}
        <MenuList />
      </nav>
      {showLogo && (
        <div role="img" aria-label="Logo kancelarii">
          <LogoSection />
        </div>
      )}
    </header>
  );
}