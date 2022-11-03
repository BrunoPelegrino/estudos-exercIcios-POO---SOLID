abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void
}

class MeleeCharacter extends Character {
    constructor (private name: string, private specialAtatack: string){
        super()
    }

    talk(): void {
        console.log(`olá,eu sou o ${this.name}`);
    }

    specialMove(): void {
        console.log(`${this.specialAtatack}`);
    }
}

class LongRangeCharacter extends Character {
    constructor(private name: string, private specialAtatack: string) {
        super();
    }
    talk(): void {
        console.log(`olá,eu sou o ${this.name}`);
    }

    specialMove(): void {
        console.log(`${this.specialAtatack}`);
    }
}

function x (character: Character) {
    character.talk();
    character.specialMove();
}

const mario = new LongRangeCharacter('mario', 'triple arrow attack');
console.log(mario);
x(mario);

