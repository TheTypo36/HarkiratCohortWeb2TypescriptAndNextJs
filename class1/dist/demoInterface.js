"use strict";
function isLegal(user) {
    return user.age > 18;
}
const greeting = isLegal({
    name: "Ashish",
    age: 22,
    address: { city: "new delhi", pincode: 110037 },
});
const person = {
    name: "Ashish",
    age: 22,
    greet: () => {
        return "Ashish";
    },
};
// class Car implements Vechile {
//   name: string;
//   model: string;
//   year: number;
//   constructor(name: string, model: string, year: number) {
//     (this.name = name), (this.model = model), (this.year = year);
//   }
// }
class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
}
const a = new Car("wagnor", "maruti", 2019);
console.log(a);
