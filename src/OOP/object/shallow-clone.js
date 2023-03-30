export function shallowClone1(obj) {
  return Object.assign({}, obj);
}

export function shallowClone2(obj) {
  return { ...obj };
}

export function shallowClone3(obj) {
  const res = {};
  for (let i in obj) {
    res[i] = obj[i];
  }
  return res;
}
