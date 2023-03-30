import { isReferenceType } from "../../common/is-reference";

export function _new(Fn, ...args) {
  const obj = Object.create(Fn.prototype);
  const res = Fn.call(obj, ...args);
  return isReferenceType(res) ? res : obj;
}
