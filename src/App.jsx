import { useState, useLayoutEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { ScreenSizeContext } from "./util/ScreenSizeContext";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  function updateMedia() {
    setIsDesktop(window.innerWidth > 1024);
    setIsMobile(window.innerWidth <= 480);
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <ScreenSizeContext.Provider value={{ isDesktop, isMobile }}>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* <Route path='*' element={<NotFound/>} /> */}
        </Routes>
        <Footer/>
      </ScreenSizeContext.Provider>
    </>
  );
}

export default App;
