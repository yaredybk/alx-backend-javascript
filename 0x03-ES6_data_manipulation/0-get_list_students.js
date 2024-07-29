/**
 * @typedef {object} Student
 * @property {number} id
 * @property {string} firstName
 * @property {string} location
 *
 */

/**
 * returns an array of objects.
 * @returns {[Student]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
