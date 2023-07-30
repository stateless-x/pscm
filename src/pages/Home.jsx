import Button from "../components/Button";
import "../styles/home.css";
import excellence from "../assets/excellence.svg";
import Helmet from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Specializing in ceramic machinery like ball mills, repairs, spare parts, and custom builds in Thailand. Trusted by industry leaders for over 35 years. Get your free quote today!"
        />
        <title>
          Thailand's Best Ceramic Machinery Provider: 35+ Years of Excellence |
          PSCM
        </title>
      </Helmet>
      <Hero />
      <WhyUs />
    </>
  );
}

function Hero() {
  return (
    <div className="container hero-container">
      <div className="flex-column heading-container">
        <div className="headings-text">
          <h1>The Best Ceramic Machinery In Thailand</h1>
          <h3>
            Reliable Machinery, Reliable Results. Ceramic Mastery. Versatile
            Applications. Engineered for Your Success.
          </h3>
        </div>
        <div className="cta flex-column">
          <img
            src={excellence}
            alt="Excellence since 1986"
            className="excellence"
          />
          <Button
            aria-label="Get a quotation for ceramic machinery"
            message="Get Quotation"
            color="primary"
            className="hero-btn"
          />
        </div>
      </div>
    </div>
  );
}

function WhyUs() {
  return (
    <section>
      <div className="container why-us-container">
        <h2>Why Choose Us For The Best Ceramic Solutions</h2>
        <div className="why-us-description-container flex-column">
          <h3 className="fw-light">
            Leverage our decades-long expertise in the ceramic industry to gain
            a competitive edge. Discover the difference we bring to your
            operations.
          </h3>
          <Button aria-label="" message="Learn More" color="secondary" />
        </div>
      </div>
    </section>
  );
}

export default Home;
