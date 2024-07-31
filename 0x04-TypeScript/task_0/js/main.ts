interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

let student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Addis Ababa"
};

let student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Addis Ababa"
};
let studentsList: Array<Student> = [
  student1, student2
]

function renderTable(students: Array<Student>): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}