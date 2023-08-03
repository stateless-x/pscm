import "../styles/footer.css";
import logo from "../assets/pscm-logo-light.png";
import fb from "../assets/fb.svg"
import ig from "../assets/ig.svg"
import yt from "../assets/yt.svg"

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-links">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="footer-head">
            <h5>Our Services</h5>
            <ul>
              <li>Products</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="footer-head">
            <h5>Contents</h5>
            <ul>
              <li>Products</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="footer-head">
            <h5>Contact</h5>
            <ul>
              <li>Products</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={yt} alt="" />
        </div>
        <div className="right-reserved">
          <p>© 2023 Petkasem Ceramic Machine Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
