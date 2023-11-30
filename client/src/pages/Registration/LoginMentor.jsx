import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";

const LoginMentor = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);
      const res = await axios.post("/api/mentor/login", {
        email,
        password,
      });
      console.log(res);
      localStorage.setItem("uid", res.data.mentorUID);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="register-student">
      <h1>Mentor Login</h1>
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

export default LoginMentor;
