/* interface Logger {

  
  log (myParam: string): void
}

class ConsoleLogger implements Logger {
  // constructor() {}

  log = (myParam: string) => {
    console.log('logeer1', myParam);
    
  }
}

class ConsoleLogger2 {
  // constructor() {}

  log = (myParam: string) => {
    console.log('logger2', myParam);
    
  }
}

class ConsoleLogger3 {
  // constructor() {}

  log = (myParam: string) => {
    console.log('logger3', myParam);
    
  }
}


interface Database {
  logger: Logger

  save(key: string, value: string): void
}

class ExampleDataBase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`${key} e ${value}`)
  }
}

const x = new ConsoleLogger();
const x2 = new ConsoleLogger2();
const x3 = new ConsoleLogger3();

const e = new ExampleDataBase(x);
const e2 = new ExampleDataBase(x2);
const e3 = new ExampleDataBase(x3);
const e4 = new ExampleDataBase();

const save = e.save('chave1', 'valor1')
const save2 = e2.save('chave2', 'valor2')
const save3 = e3.save('chave3', 'valor3')
const save4 = e4.save('chave4', 'valor4') */