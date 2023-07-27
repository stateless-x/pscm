import NavBar from "../components/NavBar";
import "../styles/home.css";
import excellence from '../assets/excellence.svg'
function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="message-container">
          <div className="headings">
            <h1>The Best Ceramic <br />Machinery In Thailand</h1>
            <h3>
              Reliable Machinery, Reliable Results. <br />
              Ceramic Mastery. Versatile Applications. <br />
              Engineered for Your Success.
            </h3>
          </div>
          <div className="cta">
            <img src={excellence} alt="Excellence since 1986" className="excellence" />
          {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
