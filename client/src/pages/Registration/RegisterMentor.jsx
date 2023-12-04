import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./RegisterMentor.css";

const RegisterMentor = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [major, setMajor] = useState("");
  const [region, setRegion] = useState("boston");
  const [gradYear, setGradYear] = useState(2023);
  const [sector, setSector] = useState("tech");
  const [jobTitle, setJobTitle] = useState("swe");
  const [meetSelect, setMeetSelect] = useState([]);
  const [adviceSelect, setAdviceSelect] = useState([]);

  const registerMentor = async (e) => {
    e.preventDefault();
    try {
      console.log(
        name,
        email,
        password,
        major,
        region,
        gradYear,
        sector,
        jobTitle,
        meetSelect,
        adviceSelect
      );
      const res = await axios.post("/api/mentor/register", {
        name,
        email,
        password,
        major,
        region,
        gradYear,
        sector,
        jobTitle,
        meetSelect,
        adviceSelect,
      });
      localStorage.setItem("uid", res.data.mentorUID);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error("Email exists!");
      }
    }
  };

  const handleMethodChange = (e) => {
    const value = e.target.value;
    if (meetSelect.includes(value)) {
      setMeetSelect(meetSelect.filter((option) => option !== value));
    } else {
      setMeetSelect([...meetSelect, value]);
    }
  };

  const handleAdviceChange = (e) => {
    const value = e.target.value;
    if (adviceSelect.includes(value)) {
      setAdviceSelect(adviceSelect.filter((option) => option !== value));
    } else {
      setAdviceSelect([...adviceSelect, value]);
    }
  };

  return (
    <main className="register-mentor">
      <h1>Mentor Registration</h1>
      <div className="register-container">
        <form action="" className="signup-form" onSubmit={registerMentor}>
          <div className="input-container">
            <h5>Name</h5>
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="input-text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <h5>Email</h5>
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="input-text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="input-text"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-container">
            <h5>Major</h5>
            <input
              type="text"
              value={major}
              placeholder="Major"
              className="input-text"
              onChange={(e) => setMajor(e.target.value)}
            />
          </div>

          <div className="input-container">
            <h5>Region (for in-person meetings)</h5>
            <select name="region" className="input-select">
              <option
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                Boston
              </option>
              <option
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                New York
              </option>
            </select>
          </div>

          <div className="input-container">
            <h5>Graduation Year</h5>
            <select name="grad-year" className="input-select">
              <option
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
              >
                2023
              </option>
              <option
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
              >
                2022
              </option>
              <option
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
              >
                2021
              </option>
              <option
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
              >
                2020
              </option>
              <option
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
              >
                2019
              </option>
              <option
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
              >
                2018
              </option>
            </select>
          </div>

          <div className="input-container">
            <h5>Sector</h5>
            <select name="grad-year" className="input-select">
              <option
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                Technology
              </option>
              <option
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                Marketing
              </option>
              <option
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                Finance
              </option>
              <option
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              >
                Education
              </option>
            </select>
          </div>

          <div className="input-container">
            <h5>Job Title</h5>
            <select name="job-title" className="input-select">
              <option
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              >
                Software Engineer
              </option>
              <option
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              >
                Product Manager
              </option>
              <option
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              >
                Data Scientist
              </option>
            </select>
          </div>

          <div className="how-to-meet input-container">
            <h5>How would you like to meet?</h5>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="zoom"
                name="interest"
                value="zoom"
                onChange={handleMethodChange}
              />
              <label htmlFor="zoom">Zoom</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="inPerson"
                name="interest"
                value="inPerson"
                onChange={handleMethodChange}
              />
              <label htmlFor="in-person">In-Person Meeting</label>
            </div>
          </div>

          <div className="meeting-purpose input-container">
            <h5>What would you like to help with?</h5>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="general-advice"
                name="interest"
                value="generalCareer"
                onChange={handleAdviceChange}
              />
              <label htmlFor="general-advice">General Career Advice</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="specific-advice"
                name="interest"
                value="specificCareer"
                onChange={handleAdviceChange}
              />
              <label htmlFor="specific-advice">Specific Career QnA</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="resume-review"
                name="interest"
                value="resumeReview"
                onChange={handleAdviceChange}
              />
              <label htmlFor="resume-review">Resume Review</label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="coffee-chat"
                name="interest"
                value="coffeeChat"
                onChange={handleAdviceChange}
              />
              <label htmlFor="coffee-chat">Coffee Chat</label>
            </div>
          </div>
          <button className="register-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegisterMentor;
