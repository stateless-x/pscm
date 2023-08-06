import "../styles/about.css";
import HistoryImage from "../assets/history-image.png";
function About() {
  return (
    <>
      <div className="history-container">
        <div className="history-description">
          <h2>Our History</h2>
          <h3>A Legacy of Excellence</h3>
          <p>
            Since 1986, PSCM, part of Petkasem Ceramic Machine Ltd, has set
            industry standards in ceramic machinery. From ball mills to custom
            solutions, our innovation and quality make us leaders.
          </p>
        </div>
        <div className="history-image">
          <img src={HistoryImage} alt="pscm-historical-image" />
        </div>
      </div>
    </>
  );
}

export default About;
