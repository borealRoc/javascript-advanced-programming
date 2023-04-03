// 面向对象编程：解决创建多个具有同样接口的对象的问题

// 1. 工厂模式
// 优点：用函数来封装，以特定接口创建对象，解决了创建多个相似对象的问题
// 缺点：无法识别实例的类型
export function createPerson(name) {
  var obj = {};
  obj.name = name;
  obj.sayName = function () {
    console.log(this.name);
  };
  return obj;
}

// 2. 构造函数
// 优点：解决了判断实例类型的问题
// 缺点：没创建一个实例，构造函数都要被执行一遍，产生新的执行上下文，浪费内存
export function Person1(name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}

// 3. 原型
// 优点：所有实例共享对象原型的属性和方法，节省内存
// 缺点：1) 由于没有为构造函数传递初始化参数，所有实例默认情况下取到相同的属性；2) 由于共享的本质，假如实例继承了构造函数原型的引用类型属性，那么当实例修改该属性时，原型上的该属性也会被修改，从而污染了原型

export function Person2() {}
Person2.prototype = {
  name: "CC",
  sayName() {
    console.log(this.name);
  },
};

// 4. 构造函数+原型
// 优点：构造函数用于定义实例私有属性，原型用于定义实例公有属性和方法，节省内存
export function Person3(name) {
  this.name = name;
}
Person3.prototype.sayName = function () {
  console.log(this.name);
};

// 5. class：效果等同于构造函数+原型
export class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}
