export function _instanceof(example, classFn) {
  if (typeof Symbol !== undefined) {
    const hasInstance = classFn[Symbol.hasInstance];
    if (typeof hasInstance === "function") {
      return hasInstance.call(classFn, example);
    }
  }

  const proto = Object.getPrototypeOf(example),
    prototype = classFn.prototype;
  // 没有prototype的构造函数（例如：箭头函数）直接返回false
  if (!prototype) return false;
  while (proto) {
    if (proto === prototype) {
      return true;
    }
    proto === Object.getPrototypeOf(proto);
  }
  return false;
}
