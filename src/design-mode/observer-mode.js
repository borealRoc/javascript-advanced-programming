export class Subject {
  constructor() {
    this.observerLists = [];
  }
  addObserver(observer) {
    this.observerLists.push(observer);
  }
  notify() {
    this.observerLists.forEach((ob) => ob.update());
  }
}

export class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`${this.name}执行任务`);
  }
}
