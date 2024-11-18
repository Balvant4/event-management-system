import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connenctionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      `\n MONGODB connected !! DB HOST: ${connenctionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILD", error);
    process.exit(1);
  }
};

export default connectDB;
