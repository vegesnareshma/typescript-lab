function sayHello(studentName: string): string {
    return `Hello, ${studentName}!`;
}
function getDepartment(department: string = "CSE"): string {
    return `Department: ${department}`;
}
function sendNotification(studentId: number, note?: string): void {
    console.log(`Sending notification to Student ID: ${studentId}`);
    if (note) {
        console.log(`Note: ${note}`);
    }
}
function calculateAverage(...marks: number[]): number {
    return marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
}
console.log(sayHello("Anjali"));
console.log(getDepartment());
console.log(getDepartment("AI & DS"));

sendNotification(101);
sendNotification(101, "Project submission tomorrow");

const averageMarks = calculateAverage(85, 90, 88, 92);
console.log(`Average Marks: ${averageMarks}`);