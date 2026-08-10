let dataValue: any = 50;
dataValue = "Welcome to TypeScript";
dataValue = false;
let inputData: unknown = "Hello Student";
if (typeof inputData === "string") {
    console.log("Length of input string: " + inputData.length);
}

// 3. Using the 'void' type
function showMessage(text: string): void {
    console.log("MESSAGE: " + text);
}

showMessage("Project Completed Successfully!");