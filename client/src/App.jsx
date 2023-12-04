import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Registration/Login";
import LoginStudent from "./pages/Registration/LoginStudent";
import LoginMentor from "./pages/Registration/LoginMentor";
import Register from "./pages/Registration/Register";
import RegisterMentor from "./pages/Registration/RegisterMentor";
import RegisterStudent from "./pages/Registration/RegisterStudent";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./pages/AuthContext";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";
import Search_student from "./pages/Search/Search_student";
import Search_mentor from "./pages/Search/Search_mentor";
import BookMentorMeeting from "./pages/BookMeeting/BookMentorMeeting";
import BookStudentMeeting from "./pages/BookMeeting/BookStudentMeeting";

axios.defaults.baseURL = "http://localhost:4000";

const LayOut = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <ToastContainer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/student/login",
        element: <LoginStudent />,
      },
      {
        path: "/mentor/login",
        element: <LoginMentor />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/search_student",
        element: <Search_student />,
      },
      {
        path: "/search_mentor",
        element: <Search_mentor />,
      },
      {
        path: "/mentor/register",
        element: <RegisterMentor />,
      },
      {
        path: "/student/register",
        element: <RegisterStudent />,
      },
      {
        path: "/book/mentor/:name",
        element: <BookMentorMeeting />,
      },
      {
        path: "/book/student/:name",
        element: <BookStudentMeeting />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
