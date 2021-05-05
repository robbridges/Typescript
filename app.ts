function Logger() {
  return function(constructor: Function) {
    console.log('logging');
    console.log(constructor);
  };
  
}

@Logger()
class Person1 {
  name = "Rob";

  constructor() {
    console.log('Creating person object...');
  }

  
}

const person1 = new Person1();
console.log(person1);