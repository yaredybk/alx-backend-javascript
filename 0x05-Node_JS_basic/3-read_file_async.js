const fs = require('fs');

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
      console.log(`Number of students: ${lines.length}`);
      Object.keys(groups).forEach((key) => {
        const gr = groups[key];
        console.log(
          `Number of students in ${key}: ${gr.count}. List: ${gr.names.join(', ')}`,
        );
      });
      resolve();
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;
