import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import quoteRoutes from "./routes/quote.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/quote", quoteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
