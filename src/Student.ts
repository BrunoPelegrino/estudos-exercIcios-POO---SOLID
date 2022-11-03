import Person from "./Person";
import Enrollable from "./interfaces/Enrollable";
import EvaluationResult from "./EvaluationResult";


export default class Student extends Person implements Enrollable {
    protected _enrollment: string;
    private _evaluationResults: EvaluationResult[]; 

    
    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._evaluationResults = []

    
    }

    get enrollment(): string {
        return this._enrollment
    }

    set enrollment(newEnroll: string) {
        if (newEnroll.length < 16) throw new Error ('Deve ter mais de 16 caracteres');
        this._enrollment = newEnroll
    }

    get evaluationResult(): EvaluationResult[] {
        return this._evaluationResults
    }



    sumGrades (): number {
       return [...this._evaluationResults].reduce((prevGrade, grade) =>
        grade.getscore() + prevGrade, 0)
      }

    sumAverageGrade(): number {
        const sumGrades = this.sumGrades();
        const divider = this._evaluationResults.length;
    
        return Math.round(sumGrades / divider);
      }

     generateEnrollment () {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
    }

    addEvaluationResult(value: EvaluationResult) {
        this._evaluationResults.push(value)
    }
}

/* const x = new Student ('bruno', new Date('1994/04/25'))
// x.examsGrades = [10, 8, 7, 10]
// x.worksGrades = [2, 5] 

console.log(x);
console.log(x.sumAverageGrade());
console.log(x.sumGrades()); */


