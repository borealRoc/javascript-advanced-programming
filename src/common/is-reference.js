export function isReferenceType(val) {
  return val !== null && (typeof val === "function" || typeof val === "object");
}
