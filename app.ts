  class Department {
  //name: string;
  private employees: string[] = []; // making it private so that it needs to be declared within the class ts feature only

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
    
  }

  describe(this: Department) {
    console.log(`Department number: ${this.id} Department name: ${this.name}`);
  }

  addEmployee(employee: string) {
    
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees)
  }
}

const development = new Department('1', 'Development');
development.addEmployee('Rob');
development.addEmployee('Thom');
development.describe();
development.printEmployeeInfo();
// this will cause an error, in this instance this is refeering to the object that called it, accounting copy. Where a name was never described.
// const accountingCopy = {  describe: development.describe}

// console.log(accountingCopy.describe()); 

// const accountDepartment ={ name: 'Accounting', describe: development.describe} 

// accountDepartment.describe();