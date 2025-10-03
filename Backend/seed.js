// seed.js
import mongoose from "mongoose";
import Menu from "./models/Menu.model.js";
import Data from "./Data.js";
import dotenv from "dotenv";

dotenv.config({ path: './.env' });

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Menu.deleteMany({});
  await Menu.insertMany(Data);
  console.log("✅ Data Seeded Successfully!");
  mongoose.connection.close();
};

seedDB();
