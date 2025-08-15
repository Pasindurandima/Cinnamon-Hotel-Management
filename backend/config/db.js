const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = "mongodb://localhost:27017/araliya_db"; // your local or cloud URI

    const conn = await mongoose.connect(mongoURI); // no need for options now

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
