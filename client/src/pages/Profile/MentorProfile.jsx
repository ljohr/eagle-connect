import axios from "axios"

const MentorProfile = () => {
  
  const getData = async (e) => {
    const uid = localStorage.getItem("uid");
    try {
      const res = await axios.post("/api/mentor/profile", {uid})
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <h1>Mentor Profile</h1>
    </main>
  );
};

export default MentorProfile;

