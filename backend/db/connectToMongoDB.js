import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to MongoDB");
  } catch (erorr) {
    console.log("Erorr connecting to MongoDB", erorr.message);
  }
};

export default connectToMongoDB;
