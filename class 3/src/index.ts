interface User {
  name: string;
  age: number;
  password: string;
  email: string;
}

type partialUser = Partial<User>;
function sumOfAge(user1: partialUser): void {
  console.log(user1);

  //   return user1.age + user2.age;
}

console.log(sumOfAge({ name: "anand", age: 23 }));

// type pickedUser = Pick<User, "email" | "password">;
const userOne: User = {
  name: "Ashish",
  age: 12,
  password: "123",
  email: "thetty",
};

userOne.name = "Aanand";

const userTwo: Readonly<User> = {
  name: "Ashish",
  age: 12,
  password: "123",
  email: "thetty",
};

// userTwo.name = "Yash";

sumOfAge({ email: "HELLO@GMAIL.COM" });

type UsersAge = Record<string, number>;

const userThree: UsersAge = {
  ashish: 23,
  anand: 27,
};
