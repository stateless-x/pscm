import { NavLink } from "react-router-dom";
import pscmLogoLight from "../assets/pscm-logo-light.png";
import "../styles/navBar.css";
import { useState, useLayoutEffect } from "react";
// import pscmLogoDark from '../assets/pscm-logo-dark.png'

function NavLinks({ isOpen }) {
  const NavLinksClassName = isOpen ? "nav-links open" : "nav-links";
  return (
    <ul className={NavLinksClassName}>
      <NavLink to="/" className="nav-link">
        <li>Home</li>
      </NavLink>
      <NavLink to="/products" className="nav-link">
        <li>Products</li>
      </NavLink>
      <NavLink to="/about" className="nav-link">
        <li>About Us</li>
      </NavLink>
      <NavLink to="/industries" className="nav-link">
        <li>Industries</li>
      </NavLink>
      <NavLink to="/contact-us" className="nav-link">
        <li>Connect</li>
      </NavLink>
    </ul>
  );
}

function HamburgerMenu({ isOpen, handleClick, isDesktop }) {
  return isDesktop ? null : (
    <div className="menu-icon" onClick={handleClick}>
      {isOpen ? (
        <span className="icon-x">&times;</span>
      ) : (
        <>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </>
      )}
    </div>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  function updateMedia() {
    setIsDesktop(window.innerWidth > 768);
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <NavLink to="/">
          <img src={pscmLogoLight} alt="PSCM Logo" className="logo" />
        </NavLink>
        <HamburgerMenu
          isOpen={isOpen}
          handleClick={handleClick}
          isDesktop={isDesktop}
        />
        {isDesktop && <NavLinks isOpen={isOpen} />}
      </div>
      {!isDesktop && <NavLinks isOpen={isOpen} />}
    </nav>
  );
}

export default NavBar;
