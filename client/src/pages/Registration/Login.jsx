import { Link } from "react-router-dom";
import LogoLink from "../../assets/LogoBC.png";
import "./Login.css";

const Login = () => {
  return (
  <div className="login-container">
    <div className="bclogo">
        <img src={LogoLink} width="480" height="270"></img>
    </div>
    <main className="login-main">
      <h2>Select Your Identity</h2>
      <button>
        <Link to="/mentor/login">Login as a Mentor</Link>
      </button>
      <button>
        <Link to="/student/login">Login as a Student</Link>
      </button>
    </main>
  </div>
  );
};

export default Login;
