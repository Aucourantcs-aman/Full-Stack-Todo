import mongoose from "mongoose";

const connectDB = async () => {
  // aman Branch string
  // const dbConnectionString =
  //   "mongodb+srv://amaan07devloper:aman@cluster0.hav4m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  // main branch string
  const dbConnectionString = `${process.env.DB_URL}`;
  // const dbConnectionString =
  //   "mongodb+srv://amaan07devloper:Practise@cluster0.smdys9e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  //Misc
  // const dbConnectionString =
  //   "mongodb+srv://amanaucourantcs:aman@cluster0.ya1jx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
