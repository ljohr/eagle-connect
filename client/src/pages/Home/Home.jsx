import eagleEarthLink from "../../assets/eagle-earth.svg";
import { Link } from "react-router-dom";
import "./Home.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={eagleEarthLink} alt="Profile" />
      <h1>Eagle Connect</h1>
      <h3>Networking opportunities with </h3>
      <div className="login-container">
        <button>
          <Link to="/mentor/login">Login as a Mentor</Link>
        </button>
        <button>
          <Link to="/student/login">Login as a Student</Link>
        </button>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="info">
      <h2>What is Eagle Connect?</h2>
      <p>
        Eagle Connect is an application made for BC students to help their job
        application process{" "}
      </p>
    </div>
  );
};

const HowToJoin = () => {
  return (
    <div className="how-to-join">
      <h2>How can you join?</h2>
    </div>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <Info />
      <HowToJoin />
    </main>
  );
};

export default Home;
