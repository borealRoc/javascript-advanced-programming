import "./_call";
import "./_apply";
import "./_bind";

function fn(mes) {
  console.log(`${mes}, ${this.name}`);
}
window.name = "xu";
var obj = {
  name: "liu",
};
fn._call(obj, "hello");
fn._apply(null, ["hi"]);
const f1 = fn._bind(obj, "heihei");
f1();
