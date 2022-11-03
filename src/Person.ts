export default abstract class Person {
    private _name : string;
    private _birthDate: Date;

    constructor (name: string, birthDate: Date) {
        this._name = name;
        this._birthDate = birthDate;
    }

    getName () {
        // console.log(this._name)
        return this._name;
    }

    setName (newName: string) {
        if (newName.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
        this._name = newName;
    }

    get birthDate (): Date {
        return this._birthDate;
    }

    static getAge (value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime())
        const yearMilisec  = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMilisec);
    }

    set birthDate (newBirhDate: Date) {
        if(newBirhDate.getTime() > new Date().getTime() ) throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if(Person.getAge(newBirhDate) > 120) throw new Error('a idade nao pode ser maior que 120 anos');

        this._birthDate = newBirhDate
    }
}

// const x = new Person('Bruno', new Date('1994/04/25'))


// console.log(x)