const mongoose = require("mongoose");
const { MONGO_URL } = require("./serverConfig");
const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};
module.exports = connect;
