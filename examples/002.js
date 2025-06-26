import OclEngine from "@stekoe/ocl.js";
import Person from "./class/person.js";
import Example from "./class/example.js";
import Car from "./class/car.js";
import oclExpression from "./002.ocl?raw";

const title = 'The fleet size of a person must not exceed 3 cars.';
const context = `
var person = new Person(29);
var car = new Car('red');

person.fleet.push(car);
person.fleet.push(car);
person.fleet.push(car);
person.fleet.push(car);
`;

const fn = function () {
    const person = new Person(29);
    const car = new Car('red');

    person.fleet.push(car);
    person.fleet.push(car);
    person.fleet.push(car);
    person.fleet.push(car);

    return new OclEngine()
        .addOclExpression(oclExpression)
        .evaluate(person);
};

export default () => Example.builder()
    .title(title)
    .context(context)
    .oclExpression(oclExpression)
    .expected(false)
    .fn(fn)
    .build();