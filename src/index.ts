import { Agent } from "http";
import { SocketAddress } from "net";

function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

//--------------------------------------------
function isOld(age: number): boolean {
  return age >= 35;
}

//-----------------------------------------------------------------
function countOdd(num: number[]): number {
  const result = num.filter((i) => i % 2 !== 0).length;
  return result;
}

//-----------------------------------------------------------------
function sumEven(arr: number[]): number {
  return arr
    .filter((num) => num % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0);
}

//-----------------------------------------------Using JavaScript
const p = {
  name: "Marcus",
  birthYear: 1972,
  address: {
    street: "Strålgatan",
    streetNo: 23,
    city: "Stockholm",
  },
};
//-----------------------------------------------Using TypeScript

type Address = {
  street: string;
  streetNo: number;
  city: string;
};

type Person = {
  name: string;
  birthYear: number;
  address: Address;
};
//-------------------------------------------------------------------
function getPersonStreetNo(p: Person): number {
  return p.address.streetNo;
}

//-----------------Interfaces---------------------------------------------
interface IPerson {
  name: string;
  birthYear: number;
}

// function getPersonNameString(p: IPerson): string {
//   return `${p.name}, ${p.birthYear.toString()}`;
// }
//OR
// const getPersonNameString = (p: IPerson): string => {
//   return `${p.name}, ${p.birthYear.toString()}`;
// };
//OR
const getPersonNameString = (p: IPerson) =>
  `${p.name}, ${p.birthYear.toString()}`;

//----------------Classes--------------------------------------------------
class PersonClass {
  private name: string = "";

  birthYear: number = 0;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }
  getName() {
    return this.name;
  }
}
class EmployeeClass extends PersonClass {
  employeeId: number = -1;
}

function printThis(p: Person | undefined | null) {
  if (!p) {
    return "no person supplied";
  }
  return p.name;
}

const per = new PersonClass("Tas", 1991);
console.log(per.birthYear);
console.log(per.getName());
const e = new EmployeeClass("Tas Student", 1991);
console.log(e.getName());
console.log(e.employeeId);

//-----------------------------Parameters - optional, default and the rest--------------------
// const optionallyAdd = (num1: number, num2: number, num3?: number, num4?: number, num5?: number) => {
//   let sum = num1 + num2;
//   //  if (num3 !== undefined) {
//   //    sum += num3;
//   //  }

//   //  if (num4) {
//   //    sum += num4;
//   //  }
//   sum += num3 ? num3 : 0;
//   sum += num4 ? num4 : 0;
//   sum += num5 ? num5 : 0;

//   return sum;
// };
//OR
const optionallyAdd = (
  num1: number,
  num2: number,
  num3: number = 0,
  num4: number = 0,
  num5: number = 0
) => {
  return num1 + num2 + num3 + num4 + num5;
};

//-----------------REST Parameter------------
const greetPeople = (greeting: string, ...names: string[]) => {
  return `${greeting} ${names.join(" and ")}`.trim();
};

//-------------------Generics----------------
class Wrapper<T> {
  private list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  public getFirst(): T {
    return this.list[0];
  }
  public getLast(): T {
    return this.list[this.list.length - 1];
  }
}



//------------------------------------------------------------------------
export {
  greet,
  isOld,
  countOdd,
  sumEven,
  Address,
  Person,
  getPersonStreetNo,
  PersonClass,
  EmployeeClass,
  IPerson,
  getPersonNameString,
  printThis,
  optionallyAdd,
  greetPeople,
  Wrapper,
};
