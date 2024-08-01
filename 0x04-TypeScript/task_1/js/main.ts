interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  age: number,
  location: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string {
  return (`${firstName[0]}. ${lastName}`)
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName, this.lastName = lastName
  }
  workOnHomework(): string {
    return 'Currently working'
  }
  displayName(): string {
    return this.firstName
  }
}