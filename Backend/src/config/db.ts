import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    await mongoose.connect(config.databaseUrl);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Unable to connect to Database", error);
    process.exit(1);
  }
};

export default connectDB;