class Student {
    name: string;
    rollNo: number;
    course: string;

    constructor(name: string, rollNo: number, course: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }

    display(): void {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNo);
        console.log("Course:", this.course);
    }
}

let student1 = new Student("Reshma", 101, "CSE-AI&DS");
student1.display();