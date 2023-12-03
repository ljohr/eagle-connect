
import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentProfile = () => {

  const [student, setStudent]= useState();

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

  const renderMain = (data) => {
    const user = document.querySelector('.user');
    user.innerHTML += renderUser(data.student);
    const about = document.querySelector('.about');
    about.innerHTML += renderAbout(data.student);
    const career = document.querySelector('.career');
    career.innerHTML += renderCareer(data.student);
  };

  const renderUser = (data) => (
    <div className="text">
      <img src={data.photo} alt="alumni-photo" />
      <h1>{data.name}</h1>
      <h3>
        <a href={data.email}>{data.email}</a>
      </h3>
      <h3>
        <a href={data.linkedin}>{data.linkedin}</a>
      </h3>
      <h3>
        <a href={data.resume}>{data.resume}</a>
      </h3>
    </div>
  );

  const renderAbout = (data) => (
    <div className="text">
      <p>{data.about}</p>
      <h3>Looking For Help With: </h3>
      <p>{data.help}</p>
    </div>
  );

  const renderCareer = (data) => {
    const skillsListItems = bulletPoints(data.skills);
    const interestsListItems = bulletPoints(data.interests);

    return (
      <div className="text">
        <h2>Skills:</h2>
        {skillsListItems}
        <h2>Career Aspirations:</h2>
        <p>{data.aspirations}</p>
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
      <div className="user"></div>
      <div className="about"></div>
      <div className="career"></div>
    </div>
  );
};

export default StudentProfile;

  