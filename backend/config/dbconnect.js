import mongoose from "mongoose";

const connectDB = async () => {
  const dbConnectionString =
    "mongodb+srv://amaan07devloper:aman@cluster0.hav4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  try {
    const db = await mongoose.connect(dbConnectionString);
    if (db) {
      console.log("connected to DB");
    }
  } catch (error) {
    console.log("Error while connecting to DB" + error);
  }
};
export default connectDB;
