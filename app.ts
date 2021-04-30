  abstract class Department {
  static fiscalYear = 2021;
  protected employees: string[] = []; // making it private so that it needs to be declared within the class ts feature only

  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
    
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  abstract describe(this: Department): void;
    
  

  addEmployee(employee: string) {
    
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees)
  }
}

const employee1 = Department.createEmployee('Rob');

console.log(employee1, Department.fiscalYear);

class Accounting extends Department {
  private lastReport: string = '';

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    } 
    return "hmm, no reports that's not good";
    
  }
  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  constructor(id: string, public managers: string[], private reports: string[], ) {
    super(id, 'Accounting'); // declare super before any properties
    
  }

  describe() {
    console.log(`Accounting department -ID ${this.id}`)
  }

  
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
  addEmployee(name: string) {
    if(name === 'Jenny') {
      console.log('woot woot!');
    }
    this.employees.push(name);
  }
  printLastReport() {
    console.log(this.lastReport);
  }
}


const accounting = new Accounting('2', ['Tommy', 'Billy'],[]);
accounting.addEmployee('Tommy');
accounting.addEmployee('Billy');


accounting.describe();
accounting.mostRecentReport = 'Lalala broke';

accounting.printReports();
console.log(accounting.mostRecentReport);


// this will cause an error, in this instance this is refeering to the object that called it, accounting copy. Where a name was never described.
// const accountingCopy = {  describe: development.describe}

// console.log(accountingCopy.describe()); 

// const accountDepartment ={ name: 'Accounting', describe: development.describe} 

// accountDepartment.describe();