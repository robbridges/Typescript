interface Greetable {
  readonly name: string;
  
  
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