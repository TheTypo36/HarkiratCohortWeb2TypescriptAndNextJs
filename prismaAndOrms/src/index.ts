import { PrismaClient } from "../node_modules/@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "Ashish Raghuvanshi",
      password: "123243",
      age: 19,
      city: "delhi",
    },
  });
}

async function findUser(userId: any) {
  const user = await client.user.findFirst({
    where: {
      id: userId,
    },
  });

  console.log(user);
}

createUser();

findUser(1);
