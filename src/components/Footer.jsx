import { NavLink } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/pscm-logo-light.png";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";

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
              <NavLink to="/products">
                <li>Products</li>
              </NavLink>
              <NavLink to="/about-us">
                <li>About Us</li>
              </NavLink>
              <NavLink to="http://www.pscmceramic.com/index.htm">
                <li>Legacy Site</li>
              </NavLink>
              <NavLink to="/terms-and-conditions">
                <li>Terms and Conditions</li>
              </NavLink>
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
          <NavLink to="https://www.facebook.com/petkasem.ceramicmachine">
            <img src={fb} alt="" />
          </NavLink>
          <NavLink to="https://www.instagram.com">
            <img src={ig} alt="" />
          </NavLink>
          <NavLink to="https://www.youtube.com/@aritut/featured">
            <img src={yt} alt="" />
          </NavLink>
        </div>
        <div className="right-reserved">
          <p>© 2023 Petkasem Ceramic Machine Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
