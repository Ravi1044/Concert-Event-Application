import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import db from "./db.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT;
console.log(PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/admin", adminRoutes);
app.use("/api", userRoutes);

app.listen(PORT, async () => {
  try {
    db();
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
  console.log(`Server is running on the port ${PORT}`);
});
