class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    showDetails(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

class Manager extends Employee {
    displayDepartment(): void {
        console.log("Department:", this.department);
    }
}

let emp = new Employee("Reshma", 50000, "AI&DS");
console.log("Employee Name:", emp.name);
emp.showDetails();

let mgr = new Manager("Ravi", 70000, "CSE");
mgr.displayDepartment();