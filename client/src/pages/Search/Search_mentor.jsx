import React from 'react';
import './Search_mentor.css'; 

const Search_mentor = () => {
  return (
    <>
      <main className='mentor-search'>
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
            <label htmlFor="selectSector">Select Sector:</label>
            <select id="selectSector" name="selectSector">
              <option value="software engineer">Software Engineer</option>
              <option value="product manager">Product Manager</option>
              <option value="data scientist">Data Scientist</option>
              <option value="tech analyst">Business Analyst</option>
            </select>
          </form>
          <form action="#" method="get">
            <label htmlFor="selectType">Select Meet Up Type:</label>
            <select id="selectType" name="selectType">
              <option value="zoom">Zoom</option>
              <option value="phone">Phone</option>
              <option value="inperson">In-Person</option>
            </select>
          </form>
          <input type="submit" value="Submit" />
          <form className="search" action="action_page.php">
            <input type="text" placeholder="Search People.." name="search" />
            <button type="submit-search"><i className="fa fa-search"></i></button>
          </form>
        </section>

        {/* person info */}
        {/* person1 */}
        <section id="info">
          <h1>Unlock Mentorship Possibilities</h1>
          <div className="alumni-block">
            <img src="https://cdn.glitch.global/06dd22aa-8255-4329-8c9e-4213dfe9151b/headshot-smiling-confident-african-american-teen-college-student-with-eyeglasses-looking-camera-vertical-image-education-concept_411082-915.avif?v=1700446486185" alt="Profile Picture" />
            <div className="info">
              <h2>Nathan Tran</h2>
              <p>Major: Computer Science | Graduation Year: 2024</p>
              <p>I love diving into the world of technology. I am seeking exciting opportunities as a software engineer.</p>
              <div className="features">
                <div className="feature">
                  <div className="bubble">Boston, MA</div>
                  <div className="bubble">Resume Review</div>
                  <div className="bubble">Coffee Chats</div>
                </div>
              </div>
            </div>
          </div>

          {/* person2 */}
          <div className="alumni-block">
            <img src="https://cdn.glitch.global/06dd22aa-8255-4329-8c9e-4213dfe9151b/download.jpeg?v=1700446443439" alt="Profile Picture" />
            <div className="info">
              <h2>Emily Nostrant</h2>
              <p>Major: Psychology | Graduation Year: 2025</p>
              <p>I am preparing for interviews for my summer internships. Your advice and help can mean a lot! </p>
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
            <img src="https://cdn.glitch.global/06dd22aa-8255-4329-8c9e-4213dfe9151b/close-headshot-absolutely-happy-woman-260nw-776699968.webp?v=1700446540957" alt="Profile Picture" />
            <div className="info">
              <h2>Hannah Jones</h2>
              <p>Major: English | Graduation Year: 2027</p>
              <p>I find joy in the power of words. I am currently looking for some general career guide advice.</p>
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
