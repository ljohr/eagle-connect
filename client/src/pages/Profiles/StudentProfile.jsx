import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const [student, setStudent] = useState("");
  const { name } = useParams();

  useEffect(() => {
    try {
      const getData = async (name) => {
        const res = await axios.post(`/api/student/profile`, { name });
        console.log(res.data);
        setStudent(res.data.student);
      };

      if (name) {
        getData(name);
      }
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  const renderUser = (data) => (
    <div className="user">
      <div className="text">
        <img src={data.photo} alt="student-photo" />
        <h1>{data.name}</h1>
        <h3>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </h3>
        <h3>
          <a href={data.linkedin}>{data.linkedin}</a>
        </h3>
        <h3>
          <a href={data.resume}>{data.resume}</a>
        </h3>
        <h3 className="appoint">
          <a href={`/student/book/${data.name}`}>Make an Appointment</a>
        </h3>
      </div>
    </div>
  );

  const renderAbout = (data) => (
    <div className="about">
      <div className="text">
        <h3>About</h3>
        <p>{data.about}</p>
        <h3>Looking For Help With: </h3>
        <p>{data.help}</p>
      </div>
    </div>
  );

  const renderCareer = (data) => {
    const skillsListItems = bulletPoints(data.skills);
    const interestsListItems = bulletPoints(data.interests);

    return (
      <div className="career">
        <div className="text">
          <h2>Skills:</h2>
          {skillsListItems}
          <h2>Career Aspirations:</h2>
          <p>{data.aspirations}</p>
          <h2>Interests:</h2>
          {interestsListItems}
        </div>
      </div>
    );
  };

  const bulletPoints = (items) => {
    if (Array.isArray(items)) {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {Array.isArray(item) ? bulletPoints(item) : item}
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>Invalid data format</p>;
    }
  };

  return (
    <div className="container">
      {renderUser(student)}
      {renderAbout(student)}
      {renderCareer(student)}
    </div>
  );
};

export default StudentProfile;
