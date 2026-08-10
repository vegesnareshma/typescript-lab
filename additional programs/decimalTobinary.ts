let decimal: number = 25;
let binary: string = "";

let num: number = decimal;

if (num === 0) {
    binary = "0";
} else {
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
}

console.log("Decimal Number:", decimal);
console.log("Binary Number:", binary);