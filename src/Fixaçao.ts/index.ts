/* class Student {
    private _name: string;
    private _enroll: number;
    private _examsGrades: number[];
    private _worksGrades: number[];

    constructor(name: string, enroll: number, examsGrades: number[], worksGrades: number[]){
        this._name = name;
        this._enroll = enroll;
        this._examsGrades = examsGrades;
        this._worksGrades = worksGrades;
    }
    getName = () => {
        this._name
    }

    setName = (newName: string) => {
        if(newName.length < 2)
        throw new Error('o nome deve possuir mais de 2 caracteres')
        this._name = newName
    }

    getEnroll = () => {
        this._enroll
    }

    setEnroll = (newEnroll: number) => {
        if(typeof(newEnroll) !== 'number' )
        throw new Error('o nome deve possuir mais de 2 caracteres')
        this._enroll = newEnroll
    }

    set examsGrades(value: number[]) {
        if (value.length > 4) {
          throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }
    
        this._examsGrades = value;
      }
    
      get worksGrades(): number[] {
        return this._worksGrades;
      }
    
      set worksGrades(value: number[]) {
        if (value.length > 2) {
          throw new Error(
            'A pessoa estudante só pode possuir 2 notas de trabalhos.',
          );
        }
    
        this._worksGrades = value;
      }

      sumGrades = (): number => {
        const x = [...this._examsGrades, ...this._worksGrades];
        return x.reduce((prevGrade, grade) => {
        const nextGrade = grade + prevGrade
        return nextGrade
      }, 0)
      }

      sumAverageGrade(): number {
        const sumGrades = this.sumGrades();
        const divider = this._examsGrades.length + this._worksGrades.length;
    
        return Math.round(sumGrades / divider);
      }
}

const personOne = new Student('Maria da Silva', 202001011, [1,6,6,6], [1,3]);

console.log(personOne);

const personTwo = new Student( 'João da Silva', 202001012, [1,6,6,6], [1,3]);

console.log(personTwo);
console.log(personOne);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade()); */
