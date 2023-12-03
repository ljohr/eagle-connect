import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize state based on localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("uid") ? true : false);
  const [isStudent, setIsStudent] = useState(localStorage.getItem("studentStatus") === "true");

  useEffect(() => {
    // Update isLoggedIn and isStudent state if localStorage changes
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("uid") ? true : false);
      setIsStudent(localStorage.getItem("studentStatus") === "true");
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const login = (uid, studentStatus) => {
    localStorage.setItem("uid", uid);
    localStorage.setItem("studentStatus", studentStatus);
    setIsLoggedIn(true);
    setIsStudent(studentStatus);
  };

  const logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("studentStatus");
    setIsLoggedIn(false);
    setIsStudent(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isStudent, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };