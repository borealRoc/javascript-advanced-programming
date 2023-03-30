import { isObject } from "../../common/is-object";
import { shallowMerge } from "./shallow-merge";

export function deepMerge(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) return shallowMerge(obj1, obj2);

  for (let i in obj2) {
    if (isObject(obj1[i])) {
      obj1[i] = deepMerge(obj1[i], obj2[i]);
    } else {
      obj1[i] = obj2[i];
    }
  }

  return obj1;
}
