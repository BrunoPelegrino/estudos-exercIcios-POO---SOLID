// import Person from "./Person";
import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Employee{
    private _subject: Subject;


    constructor(name: string, birthDate: Date, salary: number, subject: Subject,) {
        super(name, birthDate, salary);
       
        this._subject = subject;
    }


    getSubject (): Subject {
        return this._subject;
    }

    setSubject (value: Subject) {
        this._subject = value;
    }


    getSalary (): number {
        return this.salary;
    }

    setSalary (value: number) {
        if (value < 0) throw new Error (' O salário deve ser um número positivo')
        this.salary = value;
    }

    getAdmissionDate (): Date {
        return this.admissionDate;
    }

    setAdmissionDate (value: Date) {
        if (value.getTime() > new Date().getTime()) throw new Error ('A data não pode ser no futuro')
        this.admissionDate = value;
    }

    generateRegistration(): string {
        const registration = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return registration
    }
    
}

/* const math = new Subject('Matematica')

const x = new Teacher('Bruno', new Date('1980/12/12'), 5000, math  )

console.log(x) */
