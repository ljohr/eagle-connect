import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Search = () => {
  const { isStudent } = useContext(AuthContext);
  return <>{isStudent ? <StudentSearch /> : <MentorSearch />}</>;
};

export default Search;
