// 异步编程方法
// 假定有两个函数f1和f2，后者等待前者的执行结果：f1(), f2()
// 如果f1是一个很耗时的任务, 应该把 f1 设置为一个异步任务

function f2() {
  console.log("f2开始执行");
}
// function f1() {
//     for (let i = 0; i<1000000000;i++) {}
//     console.log('f1执行完毕')
// }
// f1();
// f2();
// console.log("一些同步的代码");

// 1. 回调函数
// 优点：简单、容易理解和部署
// 缺点：不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数
// function f1(cb) {
//   setTimeout(function () {
//     for (let i = 0; i < 1000000000; i++) {}
//     console.log('f1执行完毕')
//     cb();
//   });
// }
// f1(f2)
// console.log("一些同步的代码");

// 2. 事件监听
// 优点：可以绑定多个事件
// 缺点：整个程序都要变成事件驱动型，运行流程会变得很不清晰
// function f1() {
//   setTimeout(function () {
//     for (let i = 0; i < 1000000000; i++) {}
//     f1.trgger("done");
//   });
// }
// f1.on("done", f2);

// 3. 发布/订阅
// 优点：这种方法的性质与"事件监听"类似，但因为有统一的任务中心进行管理，所以流程比较清晰
import { PubSub } from "../design-mode/publish-subscribe-mode";
const eventEmitter = new PubSub();
function f1() {
  setTimeout(function () {
    for (let i = 0; i < 1000000000; i++) {}
    console.log("f1执行完毕");
    eventEmitter.publish("done");
  });
}
eventEmitter.subscribe("done", f2);
f1();
console.log("一些同步的代码");

// 4. Promise
// const f1 = new Promise((res, rej) => {
//   setTimeout(function () {
//     for (let i = 0; i < 1000000000; i++) {}
//     console.log("f1执行完毕");
//     res();
//   });
// });
// f1.then(f2);
// console.log("一些同步的代码");
