let num1: number = 12;
let num2: number = 18;

let a: number = num1;
let b: number = num2;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

let gcd: number = a;
let lcm: number = (num1 * num2) / gcd;

console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("GCD =", gcd);
console.log("LCM =", lcm);