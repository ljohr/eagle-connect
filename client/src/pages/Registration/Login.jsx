import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main>
      <button>
        <Link to="/mentor/login">Login as a Mentor</Link>
      </button>
      <button>
        <Link to="/student/login">Login as a Student</Link>
      </button>
    </main>
  );
};

export default Login;
