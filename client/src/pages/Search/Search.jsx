import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import StudentSearch from "./StudentSearch.jsx";
import MentorSearch from "./MentorSearch.jsx";

const Search = () => {
  const { isStudent } = useContext(AuthContext);
  return <>{isStudent ? <StudentSearch /> : <MentorSearch />}</>;
};

export default Search;
