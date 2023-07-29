import Button from "../components/Button";
import "../styles/home.css";
import excellence from "../assets/excellence.svg";
function Home() {
  return (
    <>
      <div className="container">
        <div className="heading-container">
          <div className="headings-text">
            <h1>
              The Best Ceramic
              Machinery In Thailand
            </h1>
            <h3>
              Reliable Machinery, Reliable Results.
              Ceramic Mastery. Versatile Applications.
              Engineered for Your Success.
            </h3>
          </div>
          <div className="cta">
            <img
              src={excellence}
              alt="Excellence since 1986"
              className="excellence"
            />
            <Button
              aria-label="Get a quotation for ceramic machinery"
              message="Get Quotation"
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
