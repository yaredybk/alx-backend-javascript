namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return ("Here is the list of requirements for Java");
    }
    getAvailableTeacher(): string {
      let tmp = this.teacher.experienceTeachingJava;
      return (typeof tmp === 'number' && tmp > 0) ? `Teacher: ${this.teacher.firstName}` : 'No available teacher'
    }
  }
}