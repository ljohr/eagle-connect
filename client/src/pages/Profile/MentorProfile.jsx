import axios from "axios";
import React, { useEffect, useState } from "react";
import './MentorProfile.css';

const MentorProfile = () => {
  
  const [mentor, setMentor]= useState([]);

  const getData = async () => {
    const uid = localStorage.getItem("uid");
    try {
      console.log("hi from getdata", uid);
      const res = await axios.post("/api/mentor/profile", {uid});
      console.log(res.data.mentor);
      setMentor(res.data.mentor);
    } catch (error) {
      console.log("here")
      console.error(error)
    }
  }

  useEffect(() => {
    getData(); 
  }, []);

  const renderUser = (data) => (
    <div className="user">
      <div className="text">
        <img src={data.photo} alt="alumni-photo" />
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
          <a href="#">Make an Appointment</a>
        </h3>
      </div>
    </div>
  );

  const renderAbout = (data) => (
    <div className="about">
      <div className="text">
        <h3>About</h3>
        <p>{data.about}</p>
        <h3>Can Help With: </h3>
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
        <h2>Education:</h2>
        <ul>
          {data.educations && data.educations.map((education, index) => (
            <li key={index}>
              {education}
            </li>
          ))}
        </ul>
        <h2>Skills & Expertise:</h2>
        {skillsListItems}
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
        {renderUser(mentor)}
        {renderAbout(mentor)}
        {renderCareer(mentor)}
      </div>
  );
};

export default MentorProfile;

