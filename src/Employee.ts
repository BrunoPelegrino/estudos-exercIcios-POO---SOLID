import Enrollable from "./interfaces/Enrollable";
import Person from "./Person";

export default class Employee extends Person implements Enrollable {
    protected salary: number;
    protected admissionDate: Date;
    protected _enrollment: string;

    constructor (
        name: string,
        birthDate: Date,
        salary: number, 
        ) {
        super(name, birthDate)

        this._enrollment = this.generateEnrollment();
        this.salary = salary;
        this.admissionDate = new Date;
    }
    
    getEnrollment(): string {
        return this._enrollment
    }

    set enrollment(newEnroll: string) {
        if (newEnroll.length < 16) throw new Error ('Deve ter mais de 16 caracteres');
        this._enrollment = newEnroll
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

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `STU${randomStr}`;
    }
}