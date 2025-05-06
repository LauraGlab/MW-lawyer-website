import { motion } from "framer-motion";
import "./../../css/sections/homepage/Mission.css";

export default function Mission() {
  return (
    <section
      className="missionSection"
      id="mission"
      aria-labelledby="mission-heading"
      role="region"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        onViewportEnter={() => console.log("Animation triggered!")}
      >
        <h2 id="mission-heading" className="missionTitle subheading">
          Dbamy o <br />
          naszych klientów
        </h2>
      </motion.div>

      <hr className="hrElement" aria-hidden="true" />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: false, amount: 0.1 }}
        className="missionText__section"
      >
        <p className="missionText">
          Jako ambitny, młody prawnik, jestem zaangażowana w dostarczanie
          innowacyjnej i dopasowanej pomocy prawnej, aby sprostać zróżnicowanym
          potrzebom moich klientów. Skupiając się na jasnej komunikacji, empatii
          oraz dogłębnym zrozumieniu prawa, dążę do tego, aby proces prawny był
          jak najbardziej przejrzysty i bezstresowy. Zapoznaj się z oferowanymi
          przeze mnie usługami i dowiedz się, jak mogę Ci pomóc w pewnym i
          spokojnym pokonywaniu wyzwań prawnych.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true, amount: 0.4 }}
        className="missionButton__section"
      >
        <button
          className="missionButton"
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Przejdź do sekcji kontaktowej"
        >
          <span aria-hidden="true">Kontakt</span>
        </button>
      </motion.div>
    </section>
  );
}