import { isObject } from "../../common/is-object";

export function shallowMerge(obj1, obj2) {
  if (!isObject(obj1)) return obj2;
  if (!isObject(obj2)) return obj1;

  for (let i in obj2) {
    obj1[i] = obj2[i];
  }

  return obj1;
}
