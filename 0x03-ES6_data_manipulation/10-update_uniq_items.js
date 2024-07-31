/**
 * For each entry of the map where the quantity is 1,
 * update the quantity to 100.
 * If updating the quantity is not possible
 * (argument is not a map) the error Cannot process should be thrown.
 * @param {Map} map
 */
export default function updateUniqueItems(map) {
  try {
    map.forEach((val, key) => {
      if (val === 1) {
        map.set(key, 100);
      }
    });
  } catch (error) {
    throw new Error('Cannot process');
  }
}
