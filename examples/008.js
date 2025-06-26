import OclEngine from "@stekoe/ocl.js";
import Person from "./class/person.js";
import Example from "./class/example.js";
import oclExpression from "./008.ocl?raw";
import { Job } from "./class/job.js";

const title = 'An under age person\'s income is the pocket money given by their parents.';
const context = `
const fathersJob = new Job();
fathersJob.salary = 17000;

const father = new Person();
father.jobs.push(fathersJob);

const mothersJob = new Job();
mothersJob.salary = 19000;

const mother = new Person();
mother.jobs.push(mothersJob);

let child = new Person(12);
child.parents.push(father);
child.parents.push(mother);
`;

const fn = function () {
    const fathersJob = new Job();
    fathersJob.salary = 17000;

    const father = new Person();
    father.jobs.push(fathersJob);

    const mothersJob = new Job();
    mothersJob.salary = 19000;

    const mother = new Person();
    mother.jobs.push(mothersJob);

    let child = new Person(12);
    child.parents.push(father);
    child.parents.push(mother);

    return new OclEngine()
        .addOclExpression(oclExpression)
        .evaluate(child);
};

export default () => Example.builder()
    .title(title)
    .context(context)
    .oclExpression(oclExpression)
    .expected(true)
    .fn(fn)
    .build();
