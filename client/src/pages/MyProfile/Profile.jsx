import { useContext } from "react";
import { AuthContext } from "../AuthContext.jsx";
import MentorProfile from "./MentorProfile.jsx";
import StudentProfile from "./StudentProfile.jsx";

const MyProfile = () => {
  const { isStudent } = useContext(AuthContext);
  return <>{isStudent ? <StudentProfile /> : <MentorProfile />}</>;
};

export default MyProfile;
