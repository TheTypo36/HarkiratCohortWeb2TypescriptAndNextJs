type employees = {
  name: string;
  department: string;
};

type manager = {
  company: string;
  salary: number;
};

type teamLeader = employees & manager;

let ashish: employees = {
  name: "Ashish",
  department: "IT",
};

let anand: manager = {
  company: "google",
  salary: 50000,
};

let ruhi: teamLeader = {
  name: "Ruhi",
  department: "Accounding",
  salary: 100000,
  company: "google",
};

console.log(ruhi);
