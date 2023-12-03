import axios from "axios";
import React, { useEffect, useState } from "react";

const MentorProfile = () => {
  
  const [mentor, setMentor]= useState();

  const getData = async (e) => {
    const uid = localStorage.getItem("uid");
    try {
      const res = await axios.post("/api/mentor/profile", {uid})
      const data = await response.json();
      console.log(data);
      setMentor(data);
    } catch (error) {
      console.log(error)
    }
  }

  const renderUser = (data) => (
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
  );

  const renderAbout = (data) => (
    <div className="text">
      <p>{data.about}</p>
      <h3>Can Help With: </h3>
      <p>{data.help}</p>
    </div>
  );

  const renderCareer = (data) => {
    const skillsListItems = bulletPoints(data.skills);
    const interestsListItems = bulletPoints(data.interests);
    const highlightsListItems = data.educations.map((highlight, index) => (
      <li key={index}>
        <strong>Current Role:</strong> {highlight.role} <br />
        <strong>Years of Experience:</strong> {highlight.experience} <br />
        <strong>Education:</strong> {bulletPoints(highlight.education)}
      </li>
    ));

    return (
      <div className="text">
        <h2>Career Highlights:</h2>
        <ul>{highlightsListItems}</ul>
        <h2>Skills & Expertise:</h2>
        {skillsListItems}
        <h2>Interests:</h2>
        {interestsListItems}
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
    <div>
      {mentorData && (
        <div>
          {renderUser(mentorData.mentor)}
          {renderAbout(mentorData.mentor)}
          {renderCareer(mentorData.mentor)}
        </div>
      )}
    </div>
  );
};

export default MentorProfile;

