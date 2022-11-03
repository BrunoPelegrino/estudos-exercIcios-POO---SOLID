export default class Subject {
    private _name: string;

    constructor (name: string) {
        this._name = name
    }

    get name(): string {
        return this._name
    }

    set name(value: string) {
        this.nameValidation(value);
        this._name = value;
      }

    nameValidation (value: string) {
        if (value.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres')
    }
    
}

// Para testar!
// ./index.ts


/* const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

// deve retornar erro
// const invalidSubjectName = new Subject('Po'); */
