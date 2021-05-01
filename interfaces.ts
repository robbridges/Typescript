//type AddFn= (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let addinInterface: AddFn;

addinInterface =(number1: number, number2: number) => {
  return number1 + number2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  greet(greeting: string) {
    console.log(`${greeting} ${user1.name}`);
  }
}

let user1: Person;

user1 = new Person('Rob', 33);

user1.greet('sup');