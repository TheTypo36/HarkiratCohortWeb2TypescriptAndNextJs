interface User {
  name: string;
  age: number;
  address: {
    city: string;
    pincode: number;
  };
}

function isLegal(user: User): boolean {
  return user.age > 18;
}

const greeting = isLegal({
  name: "Ashish",
  age: 22,
  address: { city: "new delhi", pincode: 110037 },
});

// console.log(greeting);

interface People {
  name: string;
  age: number;
  greet(): string;
}

const person: People = {
  name: "Ashish",
  age: 22,
  greet: () => {
    return "Ashish";
  },
};

interface Vechile {
  name: string;
  model: string;
  year: number;
}

// class Car implements Vechile {
//   name: string;
//   model: string;
//   year: number;
//   constructor(name: string, model: string, year: number) {
//     (this.name = name), (this.model = model), (this.year = year);
//   }
// }

class Car implements Vechile {
  constructor(public name: string, public model: string, public year: number) {}
}
const a = new Car("wagnor", "maruti", 2019);

console.log(a);
