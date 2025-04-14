import express, { json, urlencoded } from "express";
import cors from "cors";
import { DbConnect } from "./src/Db/index.js";
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
// app.use("/api/v1/register", register);
// app.use("/api/v1/sigIn", signIn);
// app.use("/api/v1/signOut", signOut);

app.listen(port, () => {
  console.log("server is running on port", port);
});
