const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// اتصال مباشر بقاعدة بيانات Atlas (رابط مكتوب صراحة)
const uri = "mongodb+srv://oubetat1_db_user:t3MwFvZuPdSHe5uy@ecomarket.kqomsrd.mongodb.net/ECOMARKET?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || uri)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ Error connecting:", err));

// استيراد المسارات
app.use("/api/users", require("./routes/users"));
app.use("/api/products", require("./routes/products"));
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/rewards", require("./routes/rewards"));
app.use("/api/reports", require("./routes/reports"));

// تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));