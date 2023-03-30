export function _instanceof(example, classFn) {
  if (typeof Symbol !== undefined) {
    const hasInstance = classFn[Symbol.hasInstance];
    if (typeof hasInstance === "function") {
      return hasInstance.call(classFn, example);
    }
  }

  const proto = Object.getPrototypeOf(example),
    prototype = classFn.prototype;
  while (proto) {
    if (proto === prototype) {
      return true;
    }
    proto === Object.getPrototypeOf(proto);
  }
  return false
}
