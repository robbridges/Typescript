type Admin = {
  name: string;
  privileges: string[];

};

type Employee = {
  name: string;
  startDate: Date;

};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Rob',
  privileges: ['create-server'],
  startDate: new Date(),
}

type UnknownEmployee = Employee | Admin;

type Combinable = string | number;
type Numeric = number | boolean;
type Unerviseral = Combinable & Numeric;

function add(argument1: string, argument2: string): string;
function add(argument1: number, argument2: number): number
function add(argument1: Combinable, argument2: Combinable) {

  if (typeof argument1 === 'string' || typeof argument2 === 'string') {
    return argument1.toString() + argument2.toString();
  }

  return argument1 + argument2;
}

const result = add('Rob', 'Bridges');
result.split('')

function printEmployeeInformation(employee: UnknownEmployee) {
  console.log(`Name: ${employee.name}`);
  // this the type of if check we need to for Types as we can't check privledges until typescript knows it exists. 
  if ('privileges' in employee) {
    console.log(`Privileges: ${employee.privileges}`);
  }
  if ('startDate' in employee) {
    console.log(`Start Date: ${employee.startDate}`);
  }

}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck!');
  }
  loadCargo(amount: number) {
    console.log(`Loading cargo: ${amount}`);
  }
}

type Vehicle = Car| Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //problem trying to use load Cargo need to do an if check. Instance of is best for classes
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  } 
}

useVehicle(vehicle1);
useVehicle(vehicle2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // while we can use 'flyingSpeed | runningSpeed in animal' this becomes burdensome if we add more animals and introduces more code errors. A better option is below
  let speed
  switch (animal.type) {
    case 'bird':
      speed =animal.flyingSpeed;
      break;
    case 'horse':
      speed =animal.runningSpeed;
      break;
  }
  console.log(`${animal.type} is Moving at speed: ${speed}`);
}

moveAnimal({type: 'bird', flyingSpeed: 50});
moveAnimal({type: 'horse', runningSpeed: 30});

//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
//const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // better way to do this to not conflict with react JSX. 

// honestly the best way to do this, we're just just telling type script to shut up and sit down, we're checking to see if it exists, then type casting it. 
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value ='Hi there';
}

interface ErrorContainer {
  [prop: string]: string; // we are essentially saying the prop will contain an property and string, though we may not know what the property name is
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Tommy'
}
