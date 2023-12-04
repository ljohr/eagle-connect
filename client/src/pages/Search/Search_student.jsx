import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Search_student.css";
import axios from "axios";

const Search_student = () => {
  const [major, setMajor] = useState("Math");
  const [sector, setSector] = useState("Software Engineer");
  const [meet_type, setType] = useState("Zoom");

  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(major, sector, meet_type);
    try {
      const res = await axios.post("/api/student_search", {
        major: major,
        sector: sector,
        meet_type: meet_type,
      });
      console.log(res.data.mentor);
      setUsers(res.data.mentor);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <main className="student-search">
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

            {/* <button type="submit" value="Submit"> Submit</button> */}
            <input type="submit" value="Submit" />
          </form>
          {/* <input type="text" placeholder="Search People.." name="search" />
              <button type="submit-search"><SearchIcon /></button> */}
        </section>

        {/* person info */}
        {/* person1 */}
        <section id="info">
          <h1>Connect with Mentors Across Industries</h1>
          {users.map((user) => {
            return (
              <div className="alumni-block" key={user._id}>
                <img src={user.photo} alt="Profile Picture" />
                <div className="info">
                  <h2>
                    <Link to="/profile">{user.name}</Link>
                  </h2>
                  <p>
                    {user.sector} | Major: {user.major}{" "}
                  </p>
                  <p>{user.about}</p>
                  <div className="features">
                    <div className="feature">
                      <div className="bubble">{user.region}</div>
                      <div className="bubble">{user.help}</div>
                      <div className="bubble">{user.meet_type}</div>
                      <div className=" booking-link">
                        <Link to={`/book/mentor/${user.name}`}>
                          Book a Meeting
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="alumni-block">
            <img
              src="https://cdn.glitch.global/82f4f962-cdd9-458c-be3f-2ad300c125e2/image_profile1.jpeg?v=1701641843199"
              alt="Profile Picture"
            />

            <div className="info">
              <h2>Keith Scott</h2>
              <p>Software Engineer | Major: Computer Science</p>
              <p>
                I would be happy to give advice to prospective software
                engineers.
              </p>
              <div className="features">
                <div className="feature">
                  <div className="bubble">New York, NY</div>
                  <div className="bubble">Resume Review</div>
                  <div className="bubble">Coffee Chats</div>
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
              <p>Major: Psychology | Major: Communication</p>
              <p>
                I can help with mock interviews and give general advice for PM
                roles.{" "}
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
              src="https://cdn.glitch.global/06dd22aa-8255-4329-8c9e-4213dfe9151b/004.webp?v=1700436521470"
              alt="Profile Picture"
            />
            <div className="info">
              <h2>Mali Wilson</h2>
              <p>Business Analyst | Major: Math</p>
              <p>
                I thrive on solving complex problems and transforming data into
                actionable insights.
              </p>
              <div className="features">
                <div className="feature">
                  <div className="bubble">Austin, TX</div>
                  <div className="bubble">General Advice</div>
                  <div className="bubble">Coffee Chats</div>
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

export default Search_student;
