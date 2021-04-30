"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //name: string;
        this.employees = []; // making it private so that it needs to be declared within the class ts feature only
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`Department number: ${this.id} Department name: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class Accounting extends Department {
    constructor(id, managers, reports) {
        super(id, 'Accounting'); // declare super before any properties
        this.managers = managers;
        this.reports = reports;
        this.lastReport = '';
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        return "hmm, no reports that's not good";
    }
    set mostRecentReport(value) {
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Jenny') {
            console.log('woot woot!');
        }
        this.employees.push(name);
    }
    printLastReport() {
        console.log(this.lastReport);
    }
}
const development = new Department('1', 'Development');
const accounting = new Accounting('2', ['Tommy', 'Billy'], []);
accounting.addEmployee('Tommy');
accounting.addEmployee('Billy');
accounting.addEmployee('Jessica');
accounting.addEmployee('Jenny');
development.describe();
accounting.mostRecentReport = 'Lalala broke';
accounting.printReports();
console.log(accounting.mostRecentReport);
console.log(accounting);
// this will cause an error, in this instance this is refeering to the object that called it, accounting copy. Where a name was never described.
// const accountingCopy = {  describe: development.describe}
// console.log(accountingCopy.describe()); 
// const accountDepartment ={ name: 'Accounting', describe: development.describe} 
// accountDepartment.describe();
