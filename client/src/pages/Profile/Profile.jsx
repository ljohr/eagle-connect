
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import MentorProfile from "./MentorProfile.jsx";
import StudentProfile from "./SearchProfile.jsx";

const Profile = () => {
  const { isStudent } = useContext(AuthContext);
  return <>{isStudent ? <StudentProfile /> : <MentorProfile />}</>;
};

export default Profile;