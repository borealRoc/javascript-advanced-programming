import f1, { a } from "./esm-export";
f1();
console.log(`a的初始值为${a}`);
setTimeout(() => {
  console.log(`1000ms后a的值变成${a}`);
}, 1000);
