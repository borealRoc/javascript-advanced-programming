// 继承：子类继承父类的属性和方法，使得子类的实例化对象不仅有子类的属性和方法，还有父类的属性和方法
export function Parent() {
  this.x = 100;
}
Parent.prototype.getX = function () {
  console.log(this.x);
};

// 1. 原型继承：子类的原型指向父类的实例
// 弊端：父类的私有属性和共有属性，全都变成子类实例的公有属性
export function Child1() {
  this.y = 200;
}
Child1.prototype = new Parent();

// 2. call 继承
// 弊端：子类实例只能继承父类的私有属性
export function Child2() {
  Parent.call(this);
  this.y = 200;
}

// 3. 寄生组合继承：call 继承（继承父类私有属性）+ 原型继承（继承父类公有属性）
export function Child3() {
  Parent.call(this);
  this.y = 200;
}
Child3.prototype.__proto__ = Parent.prototype;

// 4. extends 继承：继承效果等同于寄生组合式继承
export class P {
  constructor() {
    this.x = 100;
  }
  getX() {
    console.log(this.x);
  }
}
export class C extends P {
  constructor() {
    super();
    this.y = 200;
  }
}
