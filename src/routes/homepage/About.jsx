import { motion } from "framer-motion";
import AboutImg from "./../../assets/Martyna.jpg";
import "./../../css/sections/homepage/About.css";

export default function About() {

  return (
    <div className="aboutSection" id="about">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img className="aboutImg" src={AboutImg} alt="Woman lawyer" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="aboutText__section"
      >
        <p className="lawyerAbout">prawnik</p>
        <h2 className="h2About">Martyna Winiarska</h2>
        <p className="aboutText">
          Jestem prawnikiem specjalizującym się w sprawach cywilnych i
          gospodarczych. Pomagam klientom w rozwiązywaniu trudnych problemów
          prawnych oraz oferuję wsparcie w podejmowaniu kluczowych decyzji
          biznesowych.
        </p>
        <hr className="hrElement" />
        <h4 className="educationTitle">Doświadczenie</h4>
        <p className="educationAbout">
          Posiadam wieloletnie doświadczenie w pracy z klientami indywidualnymi
          i korporacyjnymi. Brałam udział w negocjacjach międzynarodowych umów
          oraz prowadziłam skomplikowane sprawy sądowe, które wymagały
          precyzyjnego podejścia i głębokiej wiedzy prawniczej.
        </p>
        <h4 className="educationTitle">Edukacja</h4>
        <p className="educationAbout">
          Ukończyłam studia prawnicze na renomowanym uniwersytecie,
          specjalizując się w prawie cywilnym i handlowym. W trakcie kariery
          odbyłam również liczne kursy doszkalające, które pozwoliły mi pogłębić
          wiedzę w obszarze mediacji oraz arbitrażu. <br />
        </p>
      </motion.div>
    </div>
  );
}
