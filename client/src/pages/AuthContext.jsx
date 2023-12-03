import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const login = (uid, studentStatus) => {
    if (studentStatus) {
      setIsStudent(true);
    }
    localStorage.setItem("uid", uid);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("uid");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isStudent, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
