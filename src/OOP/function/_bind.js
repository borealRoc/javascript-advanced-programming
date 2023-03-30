import "./_call";

Function.prototype._bind = function (ctx, ...outArgs) {
  const self = this;
  return function (...innerArgs) {
    return self._call(ctx, ...outArgs.concat(innerArgs));
  };
};
