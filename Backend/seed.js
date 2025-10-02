// seed.js
import mongoose from "mongoose";
import Aptitude from "./models/Menu.model.js";
import Data from "./Data.js";
import dotenv from "dotenv";

dotenv.config({ path: './.env' });

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Aptitude.deleteMany({});
  await Aptitude.insertMany(Data);
  console.log("✅ Data Seeded Successfully!");
  mongoose.connection.close();
};

seedDB();
