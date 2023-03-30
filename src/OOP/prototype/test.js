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
