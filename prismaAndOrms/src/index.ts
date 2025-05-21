import express from "express";
import { PrismaClient } from "../node_modules/@prisma/client";

const app = express();
const client = new PrismaClient();

// async function createUser() {
//   await client.user.create({
//     data: {
//       username: "Ashish Raghuvanshi",
//       password: "123243",
//       age: 19,
//       city: "delhi",
//     },
//   });
// }

// async function findUser(userId: any) {
//   const user = await client.user.findFirst({
//     where: {
//       id: userId,
//     },
//     include: {
//       todos: true,
//     },
//   });

//   console.log(user);
// }

// createUser();

// findUser(1);
app.get("/users", async (req, res) => {
  const user = await client.user.findMany();
  console.log(user);
  res.status(200).json({ user });
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const userAndTodos = await client.user.findFirst({
    where: {
      id: parseInt(id),
    },
    select: {
      username: true,
      age: true,
      city: true,
      todos: true,
    },
  });
  res.status(200).json({ userAndTodos });
});

const port = process.env.port || 8085;
app.listen(port, () => {
  console.log("server is running at port", port);
});
