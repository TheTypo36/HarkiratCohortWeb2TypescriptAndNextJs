import express, { json, urlencoded } from "express";
import { Client } from "pg";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
app.use(cors());
app.use(json());
app.use(cookieParser());
app.use(urlencoded());

const pgClient = new Client(process.env.DB_URL);

// const pgClient2 = new Client({
//   user: "neondb_owner",
//   password: "npg_8uEqonyHLD2z",
//   port: 5432,
//   host: "ep-autumn-cloud-a4yngqs7-pooler.us-east-1.aws.neon.tech",
//   database: "neondb",
// });

async function main() {
  await pgClient.connect();
  //   await pgClient.query(
  //     "INSERT INTO users (username,email,password) VALUES ('anvi','anvi@gmail.com','password')"
  //   );
  //   const response = await pgClient.query("SELECT * FROM users");
  //   console.log(response.rows);
  //   await pgClient.query("UPDATE users SET username='anvisha' WHERE id=5");
  //   const response2 = await pgClient.query("SELECT * FROM users");
  //   console.log(response2.rows);
}

main();

app.post("/signup", async (req, res) => {
  const { username, email, password, city, country, state, street, pincode } =
    req.body;

  const response = await pgClient.query(
    `INSERT INTO users(username,email,password) VALUES ($1,$2,$3) RETURNING id`,
    [username, email, password]
  );
  const userId = response.rows[0].id;
  const addressesReponse = await pgClient.query(
    `INSERT INTO address(city, country, street, pincode, state, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [city, country, street, pincode, state, userId]
  );

  console.log(addressesReponse.rows);

  res.status(200).json(response);
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const response1 = await pgClient.query(
    `SELECT username, email FROM users WHERE id=$1`,
    [id]
  );

  const response2 = await pgClient.query(
    `SELECT * FROM address WHERE user_id=$1`,
    [id]
  );

  res.status(200).json({
    user: response1.rows[0],
    addresses: response2.rows,
  });
});

app.get("/better-metadata", async (req, res) => {
  const id = req.query.id;

  const response = await pgClient.query(
    `
      SELECT users.id, users.username, users.email, address.id, address.street, address.city, address.state, address.country, address.pincode FROM users JOIN address ON users.id = address.user_id WHERE users.id = $1
    `,
    [id]
  );

  res.status(200).json({
    response: response.rows,
  });
});
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log("server is running at ", PORT);
});
