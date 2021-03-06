"use strict";
var _a;
const e1 = {
    name: 'Rob',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(argument1, argument2) {
    if (typeof argument1 === 'string' || typeof argument2 === 'string') {
        return argument1.toString() + argument2.toString();
    }
    return argument1 + argument2;
}
const result = add('Rob', ' Bridges');
result.split('');
const axiosUserData = {
    id: 'u1',
    name: 'Rob',
    job: { title: 'Developer', description: 'He makes the computer go brr' },
};
const userInputNull = '';
const storedData = userInputNull !== null && userInputNull !== void 0 ? userInputNull : 'DEFAULT'; // if the first item is null or undefined it will go to default, but it will print the empty string
console.log(storedData);
console.log((_a = axiosUserData === null || axiosUserData === void 0 ? void 0 : axiosUserData.job) === null || _a === void 0 ? void 0 : _a.title); // this is type script chaining, we're basically making sure that the object exists or not. 
function printEmployeeInformation(employee) {
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
    loadCargo(amount) {
        console.log(`Loading cargo: ${amount}`);
    }
}
const vehicle1 = new Car();
const vehicle2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    //problem trying to use load Cargo need to do an if check. Instance of is best for classes
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(10);
    }
}
useVehicle(vehicle1);
useVehicle(vehicle2);
function moveAnimal(animal) {
    // while we can use 'flyingSpeed | runningSpeed in animal' this becomes burdensome if we add more animals and introduces more code errors. A better option is below
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`${animal.type} is Moving at speed: ${speed}`);
}
moveAnimal({ type: 'bird', flyingSpeed: 50 });
moveAnimal({ type: 'horse', runningSpeed: 30 });
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
//const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // better way to do this to not conflict with react JSX. 
// honestly the best way to do this, we're just just telling type script to shut up and sit down, we're checking to see if it exists, then type casting it. 
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there';
}
const errorBag = {
    email: 'Not a valid email',
    username: 'Tommy'
};
