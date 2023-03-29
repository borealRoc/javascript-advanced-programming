// 1. 模块化：每一个对象都是一个单独的实例，用来管理自己的私有信息，相互不影响，其实这就是“JS中的单例设计模式”
const M1 = (function () {
  const m = 10;
  const sum = (n) => m + n;
  return {
    m,
    sum,
  };
})();
const M2 = (function () {
  const { m, sum } = M1;
  const total = sum(m, 20);
  return {
    total,
  };
})();
const { total } = M2;
console.log(`模块化 ${total}`);

// 2. 惰性函数
function getStyle1(element, attr) {
  if ("getComputedStyle" in window) {
    return window.getComputedStyle(element)[attr];
  }
  // 兼容IE6~8
  return element.currentStyle[attr];
}
// 上面的实现方法每次执行都要判断 "getComputedStyle" in window, 可利用闭包进行如下优化：
function getStyle2(element, attr) {
  if ("getComputedStyle" in window) {
    console.log("getStyle2执行判断");
    getStyle2 = function (element, attr) {
      return window.getComputedStyle(element)[attr];
    };
  } else {
    getStyle2 = function (element, attr) {
      return element.currentStyle[attr];
    };
  }
  return getStyle2(element, attr);
}

const h1 = document.querySelector("h1");
console.log(
  "惰性函数",
  getStyle2(h1, "font-size"),
  getStyle2(h1, "font-family")
);

// 3. 柯里化：预先处理的思想，利用闭包变量和值不被释放的特性，把一些信息存储起来，后续基于作用域链，就能访问到事先存储的信息，进行相关的处理。
function curryingSum(x) {
  return function (...args) {
    args.unshift(x);
    return args.reduce(function (result, item) {
      return result + item;
    });
  };
}
const sum = curryingSum(10);
console.log("柯里化", sum(1, 2, 3, 4));

// 4. 聚合函数：从右往左执行
function compose(...fns) {
  if (fns.length === 0) {
    return (arg) => arg;
  }
  if (fns.length === 1) {
    return (arg) => fns[0](...args);
  }
  return fns.reduce(
    (pre, next) =>
      (...args) =>
        pre(next(...args))
  );
}
function f1(n) {
  return n + 1;
}
function f2(n) {
  return n * 2;
}
console.log("聚合函数", compose(f2, f1)(9));

// 5. 防抖和节流
// 5.1 防抖：在高频触发下，只触发一次
// 5.1.1 基础实现：默认时间间隔wati后执行一次，无法立即执行
const debounce1 = (fn, wait = 100) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};
// 5.1.2 进阶实现：增加一个“是否立即执行”的参数
const debounce2 = (fn, wait = 100, immediate = true) => {
  let timer = null;
  return (...args) => {
    let now = immediate && !timer;
    now ? fn.apply(this, args) : null;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      !immediate ? fn.apply(this, args) : null;
    }, wait);
  };
};

// 5.2 节流：在高频触发下，每隔一段时间触发一次
const throttle = (fn, wait = 100) => {
  let pre = 0;
  return (...args) => {
    let now = new Date();
    if (now - pre > wait) {
      fn.apply(this, args);
      pre = now;
    }
  };
};

const scrollListener = () => console.log("滚动了");
window.addEventListener("scroll", debounce2(scrollListener, 200));
