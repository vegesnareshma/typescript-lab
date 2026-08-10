let num: number = 12345;
let sum: number = 0;
let originalNum: number = num;

while (num > 0) {
    let digit: number = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
}

console.log("Number:", originalNum);
console.log("Sum of Digits =", sum);