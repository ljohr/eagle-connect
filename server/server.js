import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/connectDB.js";
import StudentModel from "./models/Student.js";
import MentorModel from "./models/Mentor.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

connectDB();

app.post("/api/student/register", async (req, res, next) => {
  try {
    const data = req.body;
    let student = await StudentModel.findOne({ email: data.email });
    if (student) {
      return res
        .status(409)
        .json({ message: "A student with this email already exists." });
    }

    let meetingMethodData = {
      zoom: false,
      inPerson: false,
    };

    let helpTypeData = {
      generalCareer: false,
      specificCareer: false,
      resumeReview: false,
      coffeeChat: false,
    };

    data.meetSelect.forEach((method) => {
      if (meetingMethodData.hasOwnProperty(method)) {
        meetingMethodData[method] = true;
      }
    });

    data.adviceSelect.forEach((method) => {
      if (helpTypeData.hasOwnProperty(method)) {
        helpTypeData[method] = true;
      }
    });

    if (!student) {
      student = await StudentModel.create({
        name: data.name,
        email: data.email,
        password: data.password,
        major: data.major,
        region: data.region,
        sector: data.sector,
        jobTitle: data.jobTitle,
        gradYear: data.gradYear,
        meetingMethod: meetingMethodData,
        helpType: helpTypeData,
        photo: data.photo,
        linkedin: data.linkedin,
        about: data.about,
        resume: data.resume,
        aspiration: data.aspiration,
        skills: data.skills,
        interests: data.interests
      });
      await student.save();
    }

    res.json({ studentUID: student._id });
  } catch (error) {
    next(error);
  }
});

app.post("/api/mentor/register", async (req, res, next) => {
  try {
    const data = req.body;
    let mentor = await MentorModel.findOne({ email: data.email });
    if (mentor) {
      return res
        .status(409)
        .json({ message: "A mentor with this email already exists." });
    }
    let meetingMethodData = {
      zoom: false,
      inPerson: false,
    };

    let helpTypeData = {
      generalCareer: false,
      specificCareer: false,
      resumeReview: false,
      coffeeChat: false,
    };

    data.meetSelect.forEach((method) => {
      if (meetingMethodData.hasOwnProperty(method)) {
        console.log(method);
        meetingMethodData[method] = true;
      }
    });

    data.adviceSelect.forEach((method) => {
      console.log(method);
      if (helpTypeData.hasOwnProperty(method)) {
        helpTypeData[method] = true;
      }
    });

    if (!mentor) {
      mentor = await MentorModel.create({
        name: data.name,
        email: data.email,
        password: data.password,
        major: data.major,
        region: data.region,
        sector: data.sector,
        jobTitle: data.jobTitle,
        gradYear: data.gradYear,
        meetingMethod: meetingMethodData,
        helpType: helpTypeData,
        photo: data.photo,
        linkedin: data.linkedin,
        about: data.about,
        resume: data.resume,
        educations: data.educations,
        skills: data.skills,
        interests: data.interests
      });
      await mentor.save();
    }

    res.json({ mentorUID: mentor._id });
  } catch (error) {
    next(error);
  }
});

app.post("/api/student/login", async (req, res, next) => {
  try {
    const data = req.body;
    const student = await StudentModel.findOne({ email: data.email });
    res.json({ studentUID: student._id });
  } catch (error) {
    return res.status(400).json({ message: "User not found." });
  }
});
app.post("/api/mentor/login", async (req, res, next) => {
  try {
    const data = req.body;
    const mentor = await MentorModel.findOne({ email: data.email });
    res.json({ mentorUID: mentor._id });
  } catch (error) {
    return res.status(400).json({ message: "Mentor not found." });
  }
});

app.post("/api/mentor/profile", async (req, res, next) => {
  try {
    const data = req.body;
    const mentor = await MentorModel.findOne({ _id: data.uid });
    console.log("hi from server", mentor);
    res.json({ mentor });
  } catch (error) {
    return res.status(400).json({ message: "Mentor Profile not found." });
  }
});

app.post("/api/student/profile", async (req, res, next) => {
  try {
    const data = req.body;
    const student = await StudentModel.findOne({ _id: data.uid });
    console.log("hi from server", student);
    res.json({ student });
  } catch (error) {
    return res.status(400).json({ message: "Student Profile not found." });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

