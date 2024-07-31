/**
 * returns a boolean if all the elements in the array exist within the set.
 * @param {Set} set
 * @param {Array} array
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return !array.some((e) => {
    return !set.has(e);
  });
}
