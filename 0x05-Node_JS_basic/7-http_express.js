const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const lines = data
        .split('\n')
        .map((line) => line.split(','))
        .filter((line) => line.length > 1);
      const header = lines.shift();
      const fieldInd = header.findIndex((el) => el === 'field');
      const nameInd = header.findIndex((el) => el === 'firstname');
      const groups = {};
      lines.forEach((line) => {
        const field = line[fieldInd];
        if (groups[field]) {
          groups[field].count += 1;
          groups[field].names.push(line[nameInd]);
        } else if (field) {
          groups[field] = { count: 1, names: [line[nameInd]] };
        }
      });
      let stat = 'This is the list of our students';
      stat += `Number of students: ${lines.length}`;
      Object.keys(groups).forEach((key) => {
        const gr = groups[key];
        stat += `Number of students in ${key}: ${
          gr.count
        }. List: ${gr.names.join(', ')}`;
      });
      resolve(stat);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((stat) => {
      res.status(200).send(stat);
    })
    .catch((error) => {
      console.warn(error);
      res.status(404).send('Not Found');
    });
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
