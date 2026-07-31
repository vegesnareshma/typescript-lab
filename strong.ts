

let num: number = 145;
let originalNum: number = num;
let sum: number = 0;

while (num > 0) {
    let digit: number = num % 10;
    let factorial: number = 1;

    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }

    sum += factorial;
    num = Math.floor(num / 10);
}

if (sum === originalNum) {
    console.log(originalNum + " is a Strong Number");
} else {
    console.log(originalNum + " is not a Strong Number");
}