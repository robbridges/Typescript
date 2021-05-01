"use strict";
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
function printEmployeeInformation(employe) {
    console.log(`Name: ${employe.name}`);
    // this the type of if check we need to for Types as we can't check privledges until typescript knows it exists. 
    if ('privileges' in employe) {
        console.log(`Privileges: ${employe.privileges}`);
    }
    if ('startDate' in employe) {
        console.log(`Start Date: ${employe.startDate}`);
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
    }
}
