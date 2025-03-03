
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err.message);
        process.exit(1);
    }
};


mongoose.connection.on("disconnected", () => console.log("⚠️ MongoDB Disconnected"));
mongoose.connection.on("error", (err) => console.error("❌ MongoDB Error:", err));

module.exports = connectDB;


