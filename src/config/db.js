const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Database is running on ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`Error in connecting with the database ${error}`.bgRed.white);
  }
};
module.exports = connectDB;
