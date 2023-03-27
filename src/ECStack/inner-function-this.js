const obj = {
  a: 1,
  showA: function () {
    console.log("对象方法的this", this);
    function foo() {
      console.log("对象方法内部嵌套的函数this", this);
    }
    foo();
  },
};
obj.showA();

const obj1 = {
  a: 1,
  showA: function () {
    console.log("对象方法的this", this);
    const foo = () => {
      console.log("对象方法内部嵌套的箭头函数的this", this);
    };
    foo();
  },
};
obj1.showA();
