function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
  
}

function WithTemplate(template: string, hookId: string) {
  //return function(_: Function) { // we can pass in an underscore so that typescript knows we understand there's an argument here, but we're not nessecairly using it right now
    return function(constructor: any) {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

//@Logger('Logging - Person') // better to pass the decorator as a fuction so that we can then update what our decorator initially does. 
@Logger('Hey Rob')
@WithTemplate('<h1> My Name is Rob </h1>','app') // executes the fuction logging template bottom up, but at initialization logger would create first
class Person1 {
  name = "Rob";

  constructor() {
    console.log('Creating person object...');
  }

  
}

const person1 = new Person1();
console.log(person1);