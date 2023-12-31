import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import axios from "axios";
import "./Login.css";

const LoginStudent = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await axios.post("/api/student/login", {
        email,
        password,
      });
      console.log(res);

      login(res.data.studentUID, true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="register-student">
      <h1>Student Login</h1>
      <div className="register-container">
        <form action="" className="signup-form" onSubmit={loginHandler}>
          <div className="input-container">
            <h5>Email</h5>
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="input-text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="input-text"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="register-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginStudent;
