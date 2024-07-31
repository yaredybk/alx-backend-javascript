/**
 *
 * @param {Set} set
 * @param {string} startString
 */
export default function cleanSet(set, startString) {
  let str = '';
  if (startString) {
    for (let val of set) {
      if (val.startsWith(startString)) {
        str += '-' + val.replace(startString, '');
      }
    }
  }
  return str.replace('-', '');
}
