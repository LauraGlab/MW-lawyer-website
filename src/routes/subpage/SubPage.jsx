import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./../../assets/logo.svg";
import SubPageImg from "./../../assets/subpageImg.jpg";
import "./../../css/sections/SubPage.css";

export default function SubPage({ title, items, description, subTitle }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="subpageSection">
      <Link to="/">
        <img className="logoSubpage" src={Logo} />
      </Link>
      <div className="subpageContent">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="introSection"
        >
          <div className="textSubpage">
            <h2 className="headingSubpage subheading">{title}</h2>
            <hr className="dividerGold" />
            <p>{description}</p>
          </div>
          <div className="imageSubpageWrapper">
            <img
              className="imageSubpage"
              src={SubPageImg}
              alt="woman with books"
            />
          </div>
        </motion.div>
        <div className="detailsSection">
          <h2 className="subheadingSubpage">{subTitle}</h2>
          <hr className="dividerGold" />
          <ul className="listSubpage">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
