const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((studentsByField) => {
        let stat = 'This is the list of our students';
        Object.keys(studentsByField).forEach((key) => {
          const gr = studentsByField[key];
          stat += `\nNumber of students in ${key}: ${
            gr.count
          }. List: ${gr.names.join(', ')}`;
        });
        res.status(200).send(stat);
      })
      .catch((err) => {
        console.warn(err);
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((studentsByField) => {
        res.status(200).send(`List: ${
          studentsByField[major].names.join(', ')}`);
      })
      .catch((err) => {
        console.warn(err);
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
