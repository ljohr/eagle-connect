import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <h1>Home page</h1>
      <button>
        <Link to="/mentor/login">Login as a Mentor</Link>
      </button>
      <button>
        <Link to="/student/login">Login as a Student</Link>
      </button>
    </main>
  );
};

export default Home;
