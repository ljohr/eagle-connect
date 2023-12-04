import { Link } from "react-router-dom";
import LogoLink from "../../assets/LogoBC.png"
import "./Register.css";

const Register = () => {
  return (
    <body>
      <div class="bclogo">
        <img src={LogoLink} width="480" height="270"></img>
      </div>
      <main>
        <h2>Select Your Identity</h2>
        <button>
          <Link to="/mentor/register">Register as a Mentor</Link>
        </button>
        <button>
          <Link to="/student/register">Register as a Student</Link>
        </button>
      </main>
    </body>
  );
};

export default Register;
