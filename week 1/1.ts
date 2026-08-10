let studentName: string = "Rahul";
let studentAge: number = 20;
let isPresent: boolean = true;

console.log("Data type of studentName is --> " + typeof studentName);
console.log("Data type of studentAge is --> " + typeof studentAge);
console.log("Data type of isPresent is --> " + typeof isPresent);

function displayStudent(name: string, age: number, present: boolean): void {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Status: " + (present ? "Present" : "Absent"));
}

displayStudent(studentName, studentAge, isPresent);
