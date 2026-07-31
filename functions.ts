function greetStudent(studentName:string): string{
    return `Welcome, ${studentName}!`;
}

function getInstitute(institute:string = "SVECW"):string {
    return `College: ${institute}`;
}

function sendNotification(receiverEmail:string, message?:string):void {
    console.log(`Sending email to ${receiverEmail}...`);
    if (message) {
        console.log(`Note: ${message}`);
    }
}

function findAverage(...scores: number[]): number {
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

console.log(greetStudent("Reshma"));
console.log(getInstitute());
console.log(getInstitute("JNTUH"));

sendNotification("student@gmail.com");
sendNotification("student@gmail.com", "Assignment submitted");

const avgMarks = findAverage(80, 90, 85, 95);
console.log(`Average Marks: ${avgMarks}`);