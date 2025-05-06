import InfoItem from "./InfoItem";
import BubbleIcon from "./../../../assets/icons/bubbleIcon.svg";
import PhoneIcon from "./../../../assets/icons/phoneIcon.svg";
import LetterIcon from "./../../../assets/icons/mailIcon.svg";
import ClockIcon from "./../../../assets/icons/clockIcon.svg";
import "./../../../css/sections/homepage/hero/InfoBar.css";

export default function InfoBar({ onScrollToSection }) {
  return (
    <div className="infoBar">
      <div className="infoSection">
        <InfoItem icon={PhoneIcon} text="+48 123 456 789" />
        <span className="dot">•</span>
        <InfoItem icon={LetterIcon} text="martynaw@gmail.com" />
        <span className="dot">•</span>
        <InfoItem icon={ClockIcon} text="Pon-Pt 9:00-16:00" />
      </div>
      <button
        className="messageButton"
        onClick={() => onScrollToSection("contact")}
      >
        <img className="bubble" src={BubbleIcon} alt="bubble chat icon" />
        Napisz wiadomość
      </button>
    </div>
  );
}
