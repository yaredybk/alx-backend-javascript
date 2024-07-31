/**
 * calculates the sum of all the student ids.
 * @param {[import("./0-get_list_students").Student]} students students list
 * @returns {number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((pre, cur) => (pre += cur.id), 0);
  }
  return 0;
}
