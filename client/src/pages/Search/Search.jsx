import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import Search_student from "./Search_student.jsx";
import Search_mentor from "./Search_mentor.jsx";


const Search = () => {
  const { isStudent } = useContext(AuthContext);
  return <>{isStudent ? <Search_student /> : <Search_mentor />}</>;
};

export default Search;
