Function.prototype._apply = function (ctx, args) {
  ctx == null ? (ctx = window) : null;

  const self = this,
    key = Symbol("fn");

  ctx[key] = self;
  const res = ctx[key](...args);
  return res;
};
