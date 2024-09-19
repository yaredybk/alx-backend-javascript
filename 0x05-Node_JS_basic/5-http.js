const fs = require('fs');
const http = require('http');

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
        stat += `Number of students in ${key}: ${gr.count}. List: ${gr.names.join(', ')}`;
      });
      resolve(stat);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const url = new URL(req.url, `http://localhost:${req.socket.localPort}`);
  const { pathname } = url;
  switch (pathname) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
      break;
    case '/students':
      countStudents(process.argv[2])
        .then((stat) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(stat);
        })
        .catch((error) => {
          console.warn(error);
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
        });
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      break;
  }
});

app.listen(1245);

module.exports = app;
