namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return ("Here is the list of requirements for Cpp");
    }
    getAvailableTeacher(): string {
      let tmp = this.teacher.experienceTeachingC;
      return (typeof tmp === 'number' && tmp > 0) ? `Teacher: ${this.teacher.firstName}` : 'No available teacher'
    }
  }
}