import { useContext } from "react";
import { AuthContext } from "../AuthContext";
<<<<<<< HEAD
import Search_student from "./Search_student.jsx";
import Search_mentor from "./Search_mentor.jsx";
=======
>>>>>>> lilly_branch

const Search = () => {
  const { isStudent } = useContext(AuthContext);
  return <>{isStudent ? <Search_student /> : <Search_mentor />}</>;
};

export default Search;
