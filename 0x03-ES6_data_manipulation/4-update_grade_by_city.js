/**
 *
 * @param {[import("./0-get_list_students").Student]} students
 * @param {string} city
 * @param {[{studentId:number, grade:number}]} newGrades
 * @returns {[{...import("./0-get_list_students").Student,grade:number | 'N/A'}]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((stu) => stu.location === city)
    .map((student) => {
      const grade =
        newGrades.find((g) => g.studentId === student.id)?.grade || 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
