class Student {
    readonly studentId: number;
    name: string;
    course: string;

    constructor(studentId: number, name: string, course: string) {
        this.studentId = studentId;
        this.name = name;
        this.course = course;
    }

    display(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
}

let student = new Student(101, "Reshma", "CSE-AI&DS");
student.display();