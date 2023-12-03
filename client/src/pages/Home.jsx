import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <img src="../assets/eagle-shield.svg" alt="" />
      <h1>Eagle Connect</h1>
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
