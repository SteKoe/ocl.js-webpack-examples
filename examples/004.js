import OclEngine from "@stekoe/ocl.js";
import Person from "./class/person.js";
import Example from "./class/example.js";
import oclExpression from "./004.ocl?raw";

const title = 'A person younger than 18 years old owns no cars.';
const context = `var person = new Person(6);`;

const fn = function () {
    const person = new Person(6);

    return new OclEngine()
        .addOclExpression(oclExpression)
        .evaluate(person);
};

export default () => Example.builder()
    .title(title)
    .context(context)
    .oclExpression(oclExpression)
    .expected(true)
    .fn(fn)
    .build();