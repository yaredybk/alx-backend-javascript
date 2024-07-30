/**
 * returns an array of students who are located in a specific city.
 * You must use the filter function on the array.
 * @param {[import("./0-get_list_students").Student]} Students students list
 * @param {string} city city name
 * @returns {[import("./0-get_list_students").Student]}
 */
export default function getStudentsByLocation(Students, city) {
  return Students.filter((student) => student.location === city);
}
