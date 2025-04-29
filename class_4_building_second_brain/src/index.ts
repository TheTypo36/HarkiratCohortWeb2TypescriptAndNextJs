import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { DbConnect } from "./Db/index";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

const port = process.env.PORT || 8080;

DbConnect().then(() => {
  app.on("error", (error) => {
    console.log("error in connecting to db");
  });
});

app.get("/", (req, res) => {
  res.send("<h1> hello world </h1>");
});

import userRouter from "./Routes/userRouter";
import contentRouter from "./Routes/contentRouter";
app.use("/api/v1/user", userRouter);

app.use("/api/v1/content", contentRouter);

app.listen(port, () => {
  console.log("server is running on port", port);
});
