
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import MentorProfile from "./MentorProfile.jsx";
import StudentProfile from "./StudentProfile.jsx";

const Profile = () => {
  const { isStudent } = useContext(AuthContext);
  return <>{isStudent ? <StudentProfile /> : <MentorProfile />}</>;
};

export default Profile;