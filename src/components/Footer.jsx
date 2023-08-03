import "../styles/footer.css";
import logo from "../assets/pscm-logo-light.png";
function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-links">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          <div className="service">
            <h5>Our Services</h5>
            <ul>
              <li>Products</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="content">
            <h5>Contents</h5>
            <ul>
              <li>Products</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="contact">
            <h5>Contact</h5>
            <ul>
              <li>Products</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div>social media</div>
        <div>
          <p>copyright</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
