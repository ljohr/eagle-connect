import mongoose from "mongoose";
const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  major: String,
  region: String,
  sector: String,
  jobTitle: String,
  gradYear: { type: Number, default: 2020 },
  meetingMethod: {
    zoom: { type: Boolean, default: false },
    inPerson: { type: Boolean, default: false },
  },
  helpType: {
    generalCareer: { type: Boolean, default: false },
    specificCareer: { type: Boolean, default: false },
    resumeReview: { type: Boolean, default: false },
    coffeeChat: { type: Boolean, default: false },
  },
});

const StudentModel = mongoose.model("Student", StudentSchema);

export default StudentModel;
