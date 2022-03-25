/**
 * @description Function invert string texts
 * @param {String} entry - string para invertir
 * @returns {String}
 */
export function invertirString(entry) {
  if (typeof entry !== "string") return;
  if (!entry.length) return "";
  const stringToArray = entry.split("");
  const invertedArray = stringToArray.reverse();
  return invertedArray.join("");
}

export function revertString2(entry) {
  if (typeof entry !== "string") return;
  if (!entry.length) return "";
  const stringToArray = entry.split("");
  const invertedArray = stringToArray.reverse();
  return invertedArray.join("");
}