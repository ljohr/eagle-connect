import React from 'react';
import './Search_student.css'; 
const Search_student = () => {
  const [major, setMajor] = useState("Math");
  const [sector, setSector] = useState("Software Engineer");
  const [meet_type, setType] = useState("Zoom");
  const [users, setUsers] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(major, sector, meet_type);
    try{
      const res = await axios.post("/api/student_search", {
        major: major,
        sector: sector,
        meet_type: meet_type
      });
      console.log(res.data.mentor);
      setUsers(res.data.mentor);
    }
    catch(err){
      console.log(err);
    }
  }
 

  return (
    <main className='student-search'>
      <section id="search">
      <form action="#" method="get">
              <label htmlFor="selectMajor">Select Major:</label>
              <select id="selectMajor" name="selectMajor">
                  <option value="math">Math</option>
                  <option value="cs">Computer Science</option>
                  <option value="english">English</option>
                  <option value="psychology">Psychology</option>
              </select>
            </form>
            <form action="#" method="get">
              <label  htmlFor="selectSector">Select Sector:</label>
              <select id="selectSector" name="selectSector">
                  <option value="software engineer">Software Engineer</option>
                  <option value="product manager">Product Manager</option>
                  <option value="data scientist">Data Scientist</option>
                  <option value="tech analyst">Business Analyst</option>
              </select>
          </form>
            <form action="#" method="get">
              <label  htmlFor="selectType">Select Meet Up Type:</label>
              <select id="selectType" name="selectType">
                  <option value="zoom">Zoom</option>
                  <option value="phone">Phone</option>
                  <option value="inperson">In-Person</option>
              </select>
            </form>
            <input type="submit" value="Submit"></input>
            <form className="search" action="action_page.php">
              <input type="text" placeholder="Search People.." name="search"></input>
              <button type="submit-search"><i className="fa fa-search"></i></button>
            </form>
      </section>

      {/* person info */}
      {/* person1 */}
      <section id="info">
        <h1>Connect with Mentors Across Industries</h1>
        <div className="alumni-block">
          <img src="path/to/mentor1-image.jpg" alt="Profile Picture" />
          <div className="info">
            <h2>Mentor Name</h2>
            <p>Mentor Role | Major: Major Name</p>
            <p>Mentor Description</p>
            <div className="features">
              <div className="feature">
                <div className="bubble">Location</div>
                <div className="bubble">Feature 1</div>
                <div className="bubble">Feature 2</div>
              </div>
            </div>
          </div>
        </div>

        {/* person2 */}
        <div className="alumni-block">
          <img
            src="https://cdn.glitch.global/06dd22aa-8255-4329-8c9e-4213dfe9151b/Three-Things-To-Consider-When-Deciding-On-Your-LinkedIn-Profile-Picture-1024x1024.jpg?v=1700436493589"
            alt="Profile Picture"
          />
          <div className="info">
            <h2>Bella Ye</h2>
            <p>Product Manager | Major: Communication</p>
            <p>I can help with mock interviews and give general advice for PM roles.</p>
            <div className="features">
              <div className="feature">
                <div className="bubble">Boston, MA</div>
                <div className="bubble">Interview Advice</div>
                <div className="bubble">Mock Interview</div>
              </div>
            </div>
          </div>
        </div>

        {/* person3 */}
        <div className="alumni-block">
          <img
            src="https://cdn.glitch.global/06dd22aa-8255-4329-8c9e-4213dfe9151b/004.webp?v=1700436521470"
            alt="Profile Picture"
          />
          <div className="info">
            <h2>Mali Wilson</h2>
            <p>Business Analyst | Major: Math</p>
            <p>I thrive on solving complex problems and transforming data into actionable insights.</p>
            <div className="features">
              <div className="feature">
                <div className="bubble">Austin, TX</div>
                <div className="bubble">General Advice</div>
                <div className="bubble">Coffee Chats</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search_student;
