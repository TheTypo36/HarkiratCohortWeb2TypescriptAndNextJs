//given an array of positve intergers as input, return them maximum value in the array.


let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

function getMax(num: number[]) {
  let maxValue = -10909394934349;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > maxValue)
      maxValue = num[i];
    }
  

  console.log(maxValue);
}

getMax(arr);

interface secondUser {
  firstName: string;
  lastName: string;
  age: number;
}

function getLegalUser(users: secondUser[]): secondUser[] {
  return users.filter((user) => user.age >= 18);
}

let usersReal: secondUser[] = [
  { firstName: "Ashish", lastName: "Raghuvanshi", age: 25 },
  { firstName: "anand", lastName: "singh", age: 15 },
  { firstName: "ayush", lastName: "dubey", age: 12 },
  { firstName: "sumit", lastName: "mishra", age: 28 },
  { firstName: "vivek", lastName: "yadav", age: 20 },
  { firstName: "vaibhav", lastName: "kumar", age: 11 },
  { firstName: "arun", lastName: "kalakoti", age: 30 },
];
const legatUser = getLegalUser(usersReal);
console.log(legatUser);
