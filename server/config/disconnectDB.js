import mongoose from "mongoose";
import "dotenv/config";

const disconnectDB = async () => {
  try {
    await mongoose.disconnect(process.env.MONGODB_URI);
    console.log("db disconnect");
  } catch (error) {
    console.error("DB connection error: ", error);
    throw error;
  }
};

export default disconnectDB;
