import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import "./../css/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection footerInfo">
          <img className="footerLogo" src={Logo} alt="Logo kancelarii" />
          <p className="footerDescription">
            Świadczę usługi prawne w biurze oraz zdalnie, dostosowując się do
            potrzeb klientów w całym kraju.
          </p>
        </div>

        <div className="footerSection footerContact">
          <h3 className="footerHeading">Dane kontaktowe</h3>
          <address className="footerAddress">
            <p>
              E-mail: <a href="mailto:martyna@gmail.com">martyna@gmail.com</a>
            </p>
            <p>
              Telefon: <a href="tel:+123456789">(+48)123456789</a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/martynaw"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/martynaw
              </a>
            </p>
          </address>
        </div>

        <div className="footerSection footerSpecialties">
          <h3 className="footerHeading">Obszary specjalizacji</h3>
          <nav aria-label="Obszary specjalizacji">
            <ul className="footerLinks">
              <li>
                <Link to="/prawo-cywilne">Prawo Cywilne</Link>
              </li>
              <li>
                <Link to="/prawo-rodzinne">Prawo Rodzinne</Link>
              </li>
              <li>
                <Link to="/prawo-gospodarcze">Prawo Gospodarcze</Link>
              </li>
              <li>
                <Link to="/prawo-pracy">Prawo Pracy</Link>
              </li>
              <li>
                <Link to="/prawo-nieruchomosci">Prawo Nieruchomości</Link>
              </li>
              <li>
                <Link to="/prawo-danych">Prawo Ochrony Danych Osobowych</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerCredit">Designed and Coded by Laura Głąb</p>
      </div>
    </footer>
  );
}