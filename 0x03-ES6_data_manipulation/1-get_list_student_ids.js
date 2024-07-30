/**
 * This function is taking one argument which is an array of objects.
 * and this array is the same format as getListStudents from task 0.
 * If the argument is not an array, the function is returning an empty array
 * @param {[import('./0-get_list_students').Student]} listSturdent
 * @returns {[number]}
 */
export default function getListStudentIds(listSturdent) {
  if (!Array.isArray(listSturdent)) return [];
  return listSturdent.map(({ id }) => id);
}
