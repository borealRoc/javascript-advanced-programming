export class PubSub {
  constructor() {
    this.eventLists = {};
  }
  subscribe(type, cb) {
    if (!this.eventLists[type]) {
      this.eventLists[type] = [];
    }
    this.eventLists[type].push(cb);
  }
  publish(type, ...args) {
    const fns = this.eventLists[type];
    if (fns) {
      fns.forEach((fn) => fn(...args));
    }
  }
  unsubscribe(type, cb) {
    if (this.eventLists[type]) {
      const index = this.eventLists[type].findIndex((item) => item === cb);
      if (index !== -1) {
        this.eventLists[type].splice(index, 1);
      }
    }
    if (this.eventLists[type].length === 0) {
      delete this.eventLists[type];
    }
  }
}
