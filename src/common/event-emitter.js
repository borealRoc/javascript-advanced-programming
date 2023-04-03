// 实现发布-订阅模式
// 1. 创建一个对象: EventEmitter
// 2. 在该对象上创建一个缓存列表（调度中心）: EventEmitter.lists
// 3. on 方法用来把函数 fn 都加到缓存列表中
// 4. emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应缓存列表中的函数

const EventEmitter = {};
EventEmitter.lists = {};

EventEmitter.on = function (event, fn) {
  const _this = this;
  (_this.lists[event] || (_this.lists[event] = [])).push(fn);
  return _this;
};

EventEmitter.emit = function () {
  const _this = this,
    event = [].shift.call(arguments),
    fns = _this.lists[event];

  if (!fns || fns.length === 0) return false;
  fns.forEach((fn) => {
    fn.apply(_this, arguments);
  });
  return _this;
};

export default EventEmitter;
