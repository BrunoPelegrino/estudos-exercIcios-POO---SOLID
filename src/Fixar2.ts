
interface Character2 {
    name: string;
    specialMove: string;
}

interface DbCharacter extends Character2 {
    id: number;
}

const db: DbCharacter[] = [];

interface IModel {
    getAll(): Promise<DbCharacter[]>;
    getById(id: number): Promise<DbCharacter>
    create(character2: Character2): Promise<DbCharacter>
    update(id: number, newCharacter : Character2): Promise<DbCharacter>
    delete(id: number): Promise<boolean>
} 

class LocalDbModel implements IModel {
    getAll = async () => db;

    findIndexById = (id: number) => {
        const index = db.findIndex((character) => character.id === id);
        if (index < 0) throw new Error('Character not found');
        return index;
      };

    getById = async (id: number) => {
        const index = this.findIndexById(id);
        return db[index]
    }

    create = async (character: Character2) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  update = async (id: number, newCharacter: Character2) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...newCharacter };
    return db[indexToUpdate];
  }

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

}

class CharacterService {
    constructor(readonly model: LocalDbModel) { }

    findIndexById = (id: number) => {
        const index = db.findIndex((character) => character.id === id);
        if (index < 0) throw new Error('Character not found');
        return index;
      };
  
    async create(character: Character2) {
      const newCharacter = await this.model.create(character);
      return ({ status: 201, data: newCharacter });
    }
  
    async getAll() {
      const allCharacter = await this.model.getAll();
      return ({ status: 200, data: allCharacter });
    }

    async delete(id: number) {
    const indexToDelete = this.findIndexById(id);
    await this.model.delete(id)
    return ({ status: 200 })
    }
  }

  class CharacterService2 {
    constructor(readonly model: IModel) { }

    findIndexById = (id: number) => {
        const index = db.findIndex((character) => character.id === id);
        if (index < 0) throw new Error('Character not found');
        return index;
      };
  
    async create(character: Character2) {
      const newCharacter = await this.model.create(character);
      return ({ status: 201, data: newCharacter });
    }
  
    async getAll() {
      const allCharacter = await this.model.getAll();
      return ({ status: 200, data: allCharacter });
    }

    async delete(id: number) {
    const indexToDelete = this.findIndexById(id);
    await this.model.delete(id)
    return ({ status: 200 })
    }
  }

  class MockDbModel implements IModel {
    async create(character: Character2) {
      console.log('character created');
      return { id: 1, name: 'Peach', specialMove: 'Toad' };
    }
  
    async update(id: number, character: Character2) {
      console.log('character updated');
      return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
    }
  
    async delete(id: number) {
      console.log('character deleted');
      return true;
    }
  
    async getAll() {
      return [
        { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
        { id: 2, name: 'Kirby', specialMove: 'Inhale' },
      ];
    }
  
    async getById(id: number) {
      return { id: 1, name: 'Mario', specialMove: 'Fireball' };
    }
  }

  const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService2(new MockDbModel());
B.getAll().then(console.log);