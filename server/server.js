import express from "express";
import cors from "cors";
import "dotenv/config";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/connectDB.js";
import StudentModel from "./models/Student.js";
import MentorModel from "./models/Mentor.js";

const PORT = process.env.PORT || 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());
const clientDistPath = join(__dirname, "../client/dist");
app.use(express.static(clientDistPath));

app.use(
  cors({
    credentials: true,
    origin: "https://eagleconnect.onrender.com",
  })
);

connectDB();

const nameFromSlug = (slug) => {
  return slug.split("-").join(" ");
};

const makeTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

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
        interests: data.interests,
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
        meetingMethodData[method] = true;
      }
    });

    data.adviceSelect.forEach((method) => {
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
        interests: data.interests,
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

app.post("/api/search", async (req, res, next) => {
  try {
    const data = req.body;
    const student = await StudentModel.find({
      major: data.major,
      sector: data.sector,
      meet_type: data.meet_type,
    });
    res.json({ student });
  } catch (error) {
    return res.status(400).json({ message: "User not found." });
  }
});

app.post("/api/search_name", async (req, res, next) => {
  try {
    const data = req.body;
    const student = await StudentModel.find({
      name: data.name,
    });
    res.json({ student });
  } catch (error) {
    return res.status(400).json({ message: "User not found." });
  }
});

app.post("/api/student_search", async (req, res, next) => {
  try {
    const data = req.body;
    const mentor = await MentorModel.find({
      major: data.major,
      sector: data.sector,
      meet_type: data.meet_type,
    });
    res.json({ mentor });
  } catch (error) {
    return res.status(400).json({ message: "User not found." });
  }
});

app.post("/api/student_search_name", async (req, res, next) => {
  try {
    const data = req.body;
    const mentor = await MentorModel.find({
      name: data.name,
    });
    res.json({ mentor });
  } catch (error) {
    return res.status(400).json({ message: "User not found." });
  }
});

app.post("/api/mentor/myprofile", async (req, res, next) => {
  try {
    const data = req.body;
    const mentor = await MentorModel.findOne({ _id: data.uid });
    res.json({ mentor });
  } catch (error) {
    return res.status(400).json({ message: "Mentor Profile not found." });
  }
});

app.post("/api/student/myprofile", async (req, res, next) => {
  try {
    const data = req.body;
    const student = await StudentModel.findOne({ _id: data.uid });
    res.json({ student });
  } catch (error) {
    return res.status(400).json({ message: "Student Profile not found." });
  }
});

app.post("/api/mentor/profile", async (req, res, next) => {
  try {
    const data = req.body;
    const mentor = await MentorModel.findOne({
      name: makeTitleCase(nameFromSlug(data.name)),
    });
    res.json({ mentor });
  } catch (error) {
    return res.status(400).json({ message: "Mentor not found." });
  }
});

app.post("/api/student/profile", async (req, res, next) => {
  try {
    const data = req.body;
    const student = await StudentModel.findOne({
      name: makeTitleCase(nameFromSlug(data.name)),
    });
    res.json({ student });
  } catch (error) {
    return res.status(400).json({ message: "Mentor not found." });
  }
});

app.post("/api/book/mentor/", async (req, res, next) => {
  try {
    const data = req.body;
    const mentor = await MentorModel.findOne({
      name: makeTitleCase(nameFromSlug(data.name)),
    });
    res.json({ mentor });
  } catch (error) {
    return res.status(400).json({ message: "Mentor not found." });
  }
});

app.post("/api/book/student/", async (req, res, next) => {
  try {
    const data = req.body;
    const student = await StudentModel.findOne({
      name: makeTitleCase(nameFromSlug(data.name)),
    });
    res.json({ student });
  } catch (error) {
    return res.status(400).json({ message: "Student not found." });
  }
});

app.get("*", (req, res) => {
  console.log("in get");
  res.sendFile(join(clientDistPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
