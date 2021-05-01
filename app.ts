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

function add(argument1: Combinable, argument2: Combinable) {

  if (typeof argument1 === 'string' || typeof argument2 === 'string') {
    return argument1.toString() + argument2.toString();
  }

  return argument1 + argument2;
}

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


