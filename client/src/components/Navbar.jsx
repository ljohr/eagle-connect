import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";
import "./Navbar.css";

const renderLoggedInMain = () => {
  return (
    <>
      <li>
        <Link to="/profile" className="nav-item">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="nav-item">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/search" className="nav-item">
          Search
        </Link>
      </li>
    </>
  );
};

const renderRegisterLogin = () => {
  return (
    <>
      <li>
        <Link to="/register" className="nav-item">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-item">
          Login
        </Link>
      </li>
    </>
  );
};

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <ul className="navbar-inner">
        <li>
          <Link to="/" className="nav-title">
            Home
          </Link>
        </li>
        {isLoggedIn && renderLoggedInMain()}
      </ul>
      <ul className="navbar-inner login-register">
        {!isLoggedIn && renderRegisterLogin()}
        {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      </ul>
    </nav>
  );
};

export default Navbar;
