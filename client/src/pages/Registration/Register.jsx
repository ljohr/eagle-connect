import { Link } from "react-router-dom";
const Register = () => {
  return (
    <main>
      <button>
        <Link to="/mentor/register">Register as a Mentor</Link>
      </button>
      <button>
        <Link to="/student/register">Register as a Student</Link>
      </button>
    </main>
  );
};

export default Register;
