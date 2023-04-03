import { _new } from "./_new";
import { _instanceof } from "./_instanceof";

function Fn(name) {
  this.name = name;
}
const person = _new(Fn, "xu");
console.log(
  "手动实现new ~~",
  person instanceof Fn,
  person.__proto__ === Fn.prototype,
  person
);
console.log("手动实现instanceof ~~", _instanceof(person, Fn));

import { Child1, Child2, Child3, C } from "./inherit";
const c1 = new Child1();
console.log("原型继承", c1);
const c2 = new Child2();
console.log("call继承", c2);
const c3 = new Child3();
console.log("寄生组合继承继承", c3);
const c = new C();
console.log("extends 继承", c);
