export function deepClone(obj) {
  const res = Array.isArray(obj) ? [] : {};

  for (let i in obj) {
    if (obj !== null && typeof obj[i] === "object") {
      res[i] = Array.isArray(obj[i]) ? [] : {};
      res[i] = deepClone(obj[i]);
    } else {
      res[i] = obj[i];
    }
  }

  return res;
}
