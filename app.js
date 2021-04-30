"use strict";
class Department {
    constructor(name) {
        this.employees = []; // making it private so that it needs to be declared within the class ts feature only
        this.name = name;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const development = new Department('Development');
development.addEmployee('Rob');
development.addEmployee('Thom');
development.describe();
development.printEmployeeInfo();
// this will cause an error, in this instance this is refeering to the object that called it, accounting copy. Where a name was never described.
// const accountingCopy = {  describe: development.describe}
// console.log(accountingCopy.describe()); 
// const accountDepartment ={ name: 'Accounting', describe: development.describe} 
// accountDepartment.describe();
