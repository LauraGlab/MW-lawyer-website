import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import civilIcon from "./../../assets/icons/civilIcon.svg";
import economIcon from "./../../assets/icons/economicIcon.svg";
import estateIcon from "./../../assets/icons/estateIcon.svg";
import familyIcon from "./../../assets/icons/familyIcon.svg";
import jobIcon from "./../../assets/icons/jobIcon.svg";
import dataIcon from "./../../assets/icons/personaldataIcon.svg";
import "./../../css/sections/homepage/Expertise.css";

export default function Expertise() {
  return (
    <section
      className="expertiseSection"
      id="expertise"
      aria-labelledby="expertise-heading"
      role="region"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 id="expertise-heading" className="expertiseTitle subheading">
          Zapoznaj się z moimi obszarami specjalizacji
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="gridSection">
          {[
            {
              icon: civilIcon,
              alt: "Ikona przedstawiająca prawo cywilne",
              to: "/prawo-cywilne",
              title: "Prawo Cywilne",
              description:
                "Zajmuję się sprawami dotyczącymi sporządzania i negocjacji umów, dochodzenia roszczeń oraz odszkodowań, a także ochroną praw osobistych. Reprezentuję klientów w sprawach cywilnych przed sądem oraz podczas mediacji.",
            },
            {
              icon: familyIcon,
              alt: "Ikona przedstawiająca prawo rodzinne",
              to: "/prawo-rodzinne",
              title: "Prawo Rodzinne",
              description:
                "Pomagam klientom w kwestiach rozwodowych, ustaleniu opieki nad dziećmi, alimentów oraz podziału majątku. Zajmuję się również sporami rodzinnymi, zapewniając wsparcie w trudnych sytuacjach życiowych.",
            },
            {
              icon: economIcon,
              alt: "Ikona przedstawiająca prawo gospodarcze",
              to: "/prawo-gospodarcze",
              title: "Prawo Gospodarcze",
              description:
                "Doradzam firmom w zakresie tworzenia umów handlowych, przekształceń spółek oraz sporów gospodarczych. Wspieram przedsiębiorstwa na każdym etapie ich działalności, dbając o zgodność z przepisami prawnymi.",
            },
            {
              icon: jobIcon,
              alt: "Ikona przedstawiająca prawo pracy",
              to: "/prawo-pracy",
              title: "Prawo Pracy",
              description:
                "Reprezentuję zarówno pracowników, jak i pracodawców w sprawach dotyczących umów o pracę, zwolnień, sporów pracowniczych oraz mobbingu. Doradzam w zakresie praw i obowiązków wynikających z kodeksu pracy.",
            },
            {
              icon: estateIcon,
              alt: "Ikona przedstawiająca prawo nieruchomości",
              to: "/prawo-nieruchomosci",
              title: "Prawo Nieruchomości",
              description:
                "Oferuję kompleksową pomoc prawną w zakresie kupna, sprzedaży, wynajmu nieruchomości oraz sporów związanych z prawem własności. Pomagam w sporządzaniu umów, negocjacjach oraz prowadzeniu spraw sądowych dotyczących nieruchomości.",
            },
            {
              icon: dataIcon,
              alt: "Ikona przedstawiająca ochronę danych osobowych",
              to: "/prawo-danych",
              title: "Prawo Ochrony Danych Osobowych",
              description:
                "Zajmuję się doradztwem w zakresie przepisów dotyczących ochrony danych osobowych (RODO). Pomagam firmom dostosować się do wymogów prawnych, sporządzać polityki prywatności oraz chronić dane klientów.",
            },
          ].map((item, index) => (
            <Link className="gridElement" key={index} to={item.to}>
              <img className="gridImg" src={item.icon} alt={item.alt} />
              <h3 className="lawTitle">{item.title}</h3>
              <p className="lawDescription">{item.description}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}