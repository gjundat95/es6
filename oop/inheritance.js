class Employee {

  constructor(_firstName, _lastName){
    this.firstName = _firstName;
    this.lastName = _lastName;
  }

  getFullName(){
      return `Empoyee ${this.firstName} ${this.lastName}`;
  }  
}

class Manager extends Employee {
    constructor(firstName, lastName){
        super(firstName, lastName);
        this._managerEmployee = [];
    }

    addEmployee(employee){
        this._managerEmployee.push(employee);
    }

    getFullName(){
        return `Manager ${this.firstName} ${this.lastName}`;
    }
    
}

let empl1 = new Employee('Tinh','Ngo');
let empl2 = new Employee('Tinh', 'Doan');
let manger = new Manager('Tinh', 'Tang');
manger.addEmployee(empl1);
manger.addEmployee(empl2);

console.log(manger.getFullName());

