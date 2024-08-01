namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return ("Here is the list of requirements for React");
    }
    getAvailableTeacher(): string {
      let tmp = this.teacher.experienceTeachingReact;
      return (typeof tmp === 'number' && tmp > 0) ? `Teacher: ${this.teacher.firstName}` : 'No available teacher'
    }
  }
}