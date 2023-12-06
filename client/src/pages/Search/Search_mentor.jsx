import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search_mentor.css";
import { Link } from "react-router-dom";
import axios from "axios";

const nameToSlug = (name) => {
  return name.toLowerCase().split(" ").join("-");
};

const Search_mentor = () => {
  const [major, setMajor] = useState("Math");
  const [sector, setSector] = useState("Software Engineer");
  const [meet_type, setType] = useState("Zoom");

  const [name, setName] = useState('');

  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(major, sector, meet_type);
    try {
      const res = await axios.post("/api/search", {
        major: major,
        sector: sector,
        meet_type: meet_type,
      });
      console.log(res.data.student);
      setUsers(res.data.student);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNameSearch = async (e) => {
    e.preventDefault();
    console.log(name);
    try {
      const res = await axios.post("/api/search_name", {
        name: name
      });
      console.log(res.data.student);
      setUsers(res.data.student);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main className="mentor-search">
        <section id="search">
          <form action="#" method="get" onSubmit={handleSearch}>
            <div id="search-bar">
              <label htmlFor="selectMajor">Select Major:</label>
              <select
                id="selectMajor"
                name="selectMajor"
                onChange={(e) => setMajor(e.target.value)}
              >
                <option value="Math">Math</option>
                <option value="Computer Science">Computer Science</option>
                <option value="English">English</option>
                <option value="Psychology">Psychology</option>
              </select>
            </div>

            <div id="search-bar">
              <label htmlFor="selectSector">Select Sector:</label>
              <select
                id="selectSector"
                name="selectSector"
                onChange={(e) => setSector(e.target.value)}
              >
                <option value="Software Engineer">Software Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Business Analyst">Business Analyst</option>
              </select>
            </div>

            <div id="search-bar">
              <label htmlFor="selectType">Select Meet Up Type:</label>
              <select
                id="selectType"
                name="selectType"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Zoom">Zoom</option>
                <option value="Phone">Phone</option>
                <option value="In-Person">In-Person</option>
              </select>
            </div>
            <input type="submit" value="Submit" />
          </form>

            <form action="#" method="get" onSubmit={handleNameSearch}>
            <div class="look-bar">
            <input type="text" placeholder="Search People.." name="search" value={name} onChange={(e) => setName(e.target.value)}/>
              <button type="submit" className="search-button" ><SearchIcon /></button>
            </div>
          </form>
        </section>

        {/* person info */}
        {/* person1 */}
        <section id="info">
          <h1>Unlock Mentorship Possibilities</h1>
          {users.map((user) => {
            return (
              <div className="alumni-block" key={user._id}>
                <img src={user.photo} alt="Profile Picture" />
                <div className="info">
                  <h2>
                    <Link to={`/student/profile/${nameToSlug(user.name)}`}>
                      {user.name}
                    </Link>
                  </h2>
                  <p>
                    Major: {user.major} | Graduation Year: {user.gradYear}
                  </p>
                  <p>{user.about}</p>
                  <div className="features">
                    <div className="feature">
                      <div className="bubble">{user.region}</div>
                      <div className="bubble">{user.help}</div>
                      <div className="bubble">{user.meet_type}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="alumni-block">
            <img
              src="https://cdn.glitch.global/82f4f962-cdd9-458c-be3f-2ad300c125e2/FRA-1699dark-sq.jpg?v=1701643947535"
              alt="Profile Picture"
            />

            <div className="info">
              <h2>Nathan Tran</h2>
              <p>Major: Philosophy | Graduation Year: 2024</p>
              <p>
                Enthusiastic philosophy major with a fervor for exploring ideas
                and critical thinking, seeking opportunities to apply analytical
                insights and contribute to meaningful discussions.
              </p>
              <div className="features">
                <div className="feature">
                  <div className="bubble">Boston, MA</div>
                  <div className="bubble">General Discussion</div>
                  <div className="bubble">Coffee Chats</div>
                </div>
              </div>
            </div>
          </div>

          {/* person2 */}
          <div className="alumni-block">
            <img
              src="https://cdn.glitch.global/06dd22aa-8255-4329-8c9e-4213dfe9151b/download.jpeg?v=1700446443439"
              alt="Profile Picture"
            />
            <div className="info">
              <h2>Emily Nostrant</h2>
              <p>Major: Psychology | Graduation Year: 2025</p>
              <p>
                I am preparing for interviews for my summer internships. Your
                advice and help can mean a lot!{" "}
              </p>
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
              src="https://cdn.glitch.global/06dd22aa-8255-4329-8c9e-4213dfe9151b/close-headshot-absolutely-happy-woman-260nw-776699968.webp?v=1700446540957"
              alt="Profile Picture"
            />
            <div className="info">
              <h2>Hannah Jones</h2>
              <p>Major: English | Graduation Year: 2027</p>
              <p>
                I find joy in the power of words. I am currently looking for
                some general career guide advice.
              </p>
              <div className="features">
                <div className="feature">
                  <div className="bubble">Boston, MA</div>
                  <div className="bubble">General Advice</div>
                  <div className="bubble">Zoom</div>
                  <div className="bubble">Phone</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="module" src="../js/main.js"></script>
    </>
  );
};

export default Search_mentor;
