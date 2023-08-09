import "../styles/about.css";
import HistoryImage from "../assets/history-image.png";
import lightBulb from "../assets/light-bulb.svg";
import mousey from "../assets/mousey.svg";
import shield from "../assets/shield.svg";
import Button from "../components/Button";

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
      <div className="core-container">
        <div className="core-header">
          <h3>Our Core Values</h3>
        </div>
        <div className="core-content">
          <div>
            <img src={lightBulb} alt="" />
            <h5>
              Elevate the Ceramic Industry Through Innovation and Collaboration
            </h5>
            <p>
              We're driven to uplift the ceramic industry with cutting-edge
              technology and tailor-made solutions. With PSCM's pug mills, ram
              presses, tile cutting machines, and more, we enable success in
              ceramics.
            </p>
          </div>
          <div>
            <img src={mousey} alt="" />
            <h5>Quality Ceramic Machinery for Your Success</h5>
            <p>
              Quality is our commitment. Our hydraulic presses, agitators,
              de-airing pug mills, and more are designed for your success. Trust
              PSCM's ceramic machines to perform better and succeed faster.
            </p>
          </div>
          <div>
            <img src={shield} alt="" />
            <h5>Thai Excellence to Global Impact</h5>
            <p>
              PSCM's growth since 1986, from a local provider to a global name,
              redefines ceramic production. Our repair services, after-sale
              support, and innovation cater to Thai businesses and international
              clients.
            </p>
          </div>
        </div>
        <div className="join-us-content">
          <h2>Join Us in<br/> Shaping Success</h2>
          <div className="join-us-description">
            <p>
              Explore PSCM's long history of success in ceramic machinery. Our
              legacy, commitment to quality, repair services, and innovative
              solutions await you. Contact us today and let PSCM elevate your
              business.
            </p>
            <Button color="primary" message="Get More Details"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
