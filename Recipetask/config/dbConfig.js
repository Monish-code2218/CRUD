const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://monishrao011:oGwvPAwmJAUMkru5@cluster0.k2wmm.mongodb.net/guviTaskManager");
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDB;
