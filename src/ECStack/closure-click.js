const btns = document.querySelectorAll("button");
const len = btns.length;

// for (var i = 0; i < len; i++) {
//   btns[i].onclick = function () {
//     console.log(`点击的是${i}号按钮`);
//   };
// }

// for (var i = 0; i < len; i++) {
//   (function (i) {
//     btns[i].onclick = function () {
//       console.log(`点击的是${i}号按钮`);
//     };
//   })(i);
// }
// for (var i = 0; i < len; i++) {
//   btns[i].onclick = (function (i) {
//     return function () {
//       console.log(`点击的是${i}号按钮`);
//     };
//   })(i);
// }
// for (let i = 0; i < len; i++) {
//   btns[i].onclick = function () {
//     console.log(`点击的是${i}号按钮`);
//   };
// }

// for (var i = 0; i < len; i++) {
//   btns[i].index = i;
//   btns[i].onclick = function () {
//     console.log(`点击的是${this['index']}号按钮`);
//   };
// }

document.addEventListener("click", (e) => {
  const target = e.target;
  if (target.nodeName === "BUTTON") {
    const index = target.getAttribute("index");
    console.log(`点击的是${index}号按钮`);
  }
});
