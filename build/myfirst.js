"use strict";
// explicit type
let firstName = "Ian";
// firstName = 33; /* throws an error */
// implicit type
let lastName = "Cooley";
// lastName = 12; /* throws an error */
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
let v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
const names = [];
names.push("Ian"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
const moreNames = ["Dylan"];
// moreNames.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[0]; // no error
// define our tuple
let ourTuple;
// initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// define our tuple
let ourOtherTuple;
// initialize correctly
ourOtherTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourOtherTuple.push('Something new and wrong');
console.log(ourOtherTuple);
// define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
const graph = [55.2, 41.3];
const [x, y] = graph;
console.log(`x: ${x}, y: ${y}`);
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
const otherCar = {
    type: "Toyota",
};
otherCar.type = "Ford"; // no error
//   otherCar.type = 2; // Error: Type 'number' is not assignable to type 'string'.
// const thirdCar: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// thirdCar.mileage = 2000;
const fourthCar = {
    type: "Toyota",
};
fourthCar.mileage = 2000;
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
//   // throws error as 'North' is not a valid enum
//   currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3["North"] = "North";
    CardinalDirections3["East"] = "East";
    CardinalDirections3["South"] = "South";
    CardinalDirections3["West"] = "West";
})(CardinalDirections3 || (CardinalDirections3 = {}));
;
// logs "North"
console.log(CardinalDirections3.North);
// logs "West"
console.log(CardinalDirections3.West);
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car2 = {
    year: carYear,
    type: carType,
    model: carModel
};
// interface Rectangle {
//     height: number,
//     width: number
//   }
//   const rectangle: Rectangle = {
//     height: 20,
//     width: 10
//   };
//   interface ColoredRectangle extends Rectangle {
//     color: string
//   }
//   const coloredRectangle: ColoredRectangle = {
//     height: 20,
//     width: 10,
//     color: "red"
//   };
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(5, 5);
console.log(rect.getArea());
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
let val = true; // a string cannot be used here since Exclude removed it from the type.
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
