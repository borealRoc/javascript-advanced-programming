// const a = require("./cjs-exports");
// console.log("a", a);

// const foo = require('./cjs-exports')
// foo()

// const { msg, showMsg } = require("./cjs-exports");
// console.log(msg);
// showMsg();

// const Person = require("./cjs-exports");
// const person = new Person("xu");
// console.log("导出一个class", person);
// person.logName();

const { add, arr } = require("./cjs-exports");
const [a, b] = arr;
console.log(add(a, b));
