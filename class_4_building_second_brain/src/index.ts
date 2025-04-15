import express, { json, urlencoded } from "express";
import cors from "cors";
import { DbConnect } from "./Db/index.ts";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(urlencoded({}));
app.use(json({}));

const port = process.env.PORT || 8080;

DbConnect().then(() => {
  app.on("error", (error) => {
    console.log("error in connecting to db");
  });
});

app.get("/", (req, res) => {
  res.send("<h1> hello world </h1>");
});

import userRouter from "./Routes/userRouter.ts";
import contentRouter from "./Routes/contentRouter.ts";
app.use("/api/v1/user", userRouter);

app.use("/api/v1/content", contentRouter);

app.listen(port, () => {
  console.log("server is running on port", port);
});
