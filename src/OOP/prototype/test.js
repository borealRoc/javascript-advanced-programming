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

import { createPerson, Person1, Person2, Person3, Person } from "./OOP";
const p1 = createPerson("AA");
console.log("工厂函数模式", p1);
const p2 = new Person1("BB");
console.log("构造函数模式", p2);
const p3 = new Person2();
console.log("原型模式", p3);
const p4 = new Person3("DD");
console.log("构造函数+原型模式", p4);
const p = new Person("EE");
console.log("class模式", p);
