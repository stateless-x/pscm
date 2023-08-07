import { NavLink } from "react-router-dom";
import "../styles/footer.css";
import logo from "../assets/pscm-logo-light.png";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import locationIcon from "../assets/location-icon.svg";
import mailIcon from "../assets/mail-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import clockIcon from "../assets/clock-icon.svg";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-links">
          <div className="image">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
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
              <NavLink to="/blog">
                <li>Blog</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer-head">
            <h5>Contact</h5>
            <ul>
              <li className="address-icon">
                <img src={locationIcon} alt="location-icon" />
                <NavLink to="https://goo.gl/maps/paaZ2CnYCLcAYygUA">
                  <li>Visit us</li>
                </NavLink>
              </li>
              <li className="address-icon">
                <img src={mailIcon} alt="adderss-icon" />
                <li>pscm73@hotmail.com</li>
              </li>
              <li className="address-icon">
                <img src={phoneIcon} alt="phone-icon" />
                <li>(+66) 02-431-2100</li>
              </li>
              <li className="address-icon">
                <img src={clockIcon} alt="clock-icon" />
                <li>Hours: Mon-Fri, 9AM-5PM (UTC+7)</li>
              </li>
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
