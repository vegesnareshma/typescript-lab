class Student {
    static collegeName: string = "ABC Engineering College";

    name: string;
    rollNo: number;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Roll Number:", this.rollNo);
    }

    static displayCollege(): void {
        console.log("College Name:", Student.collegeName);
    }
}

let student1 = new Student("Reshma", 101);

student1.display();
Student.displayCollege();
