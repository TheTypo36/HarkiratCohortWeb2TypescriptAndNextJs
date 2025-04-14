import mongoose from "mongoose";

const DbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.DbUrl}/BuildingSecondBrain`
    );
    console.log("we are connected to db", connection);
  } catch (error) {
    throw error;
  }
};

export { DbConnect };
