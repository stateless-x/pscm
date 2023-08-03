import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import "../styles/home.css";
import excellence from "../assets/excellence.png";
import Helmet from "react-helmet";
import img1 from "../assets/service-1.jpg";
import img2 from "../assets/service-2.jpg";
import img3 from "../assets/service-3.jpg";
import testImg1 from "../assets/test-img1.png";
import testImg2 from "../assets/test-img2.jpg";

function Home() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Specializing in ceramic machinery like ball mills, repairs, spare parts, and custom builds in Thailand. Trusted by industry leaders for over 35 years. Get your free quote today!"
        />
        <title>
          PSCM | The Best Ceramic Machinery Provider in Thailand with 35+ Years
          of Excellence
        </title>
      </Helmet>
      <Hero />
      <WhyUs />
      <OurServices />
      <Highlight />
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
    <div className="container why-us-container">
      <h2>Why Choose Us For The Best Ceramic Solutions</h2>
      <div className="why-us-description-container flex-column">
        <h3 className="fw-light">
          Leverage our decades-long expertise in the ceramic industry to gain a
          competitive edge. Discover the difference we bring to your operations.
        </h3>
        <Button aria-label="" message="Learn More" color="secondary" />
      </div>
    </div>
  );
}

function OurServices() {
  return (
    <div className="container our-services-container">
      <h2>What We Offer</h2>
      <div className="card-list-container">
        <ServiceCard
          title="Custom Manufacturing"
          desc="Crafting unique machinery solutions. Precision meets your production needs."
          image={img1}
        />
        <ServiceCard
          title="Reliable Repairs"
          desc="Keeping your operations smooth. We ensure minimal downtime."
          image={img2}
        />
        <ServiceCard
          title="Essential Parts Supply"
          desc="Quality parts on demand. Optimizing your production uptime."
          image={img3}
        />
      </div>
    </div>
  );
}

function Highlight() {
  return (
    <div>
      <div className="highlight-header">
        <h2>Highlighting Key Solutions</h2>
        <h3>A Glimpse into Our Extensive Offerings</h3>
      </div>
      <HighlightedItem image={testImg1} />
      <HighlightedItem image={testImg2} />
      <HighlightedItem image={testImg1} />
    </div>
  );
}

function HighlightedItem({ image }) {
  return (
    <div className="highlighted-item-container">
      <div className="highlighted-item-description">
        <h3>Ball Mill</h3>
        <h5>Grinding Materials</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          autem provident corrupti itaque porro molestias quisquam odio velit
          hic odit.
        </p>
        <Button aria-label="" message="Get More Details" color="primary" />
      </div>
      <img src={image} alt="" loading="lazy" />
    </div>
  );
}
export default Home;
