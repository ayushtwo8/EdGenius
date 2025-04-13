import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});
