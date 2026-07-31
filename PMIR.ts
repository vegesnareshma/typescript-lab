let num1: number = 10;
let num2: number = 50;

console.log(`Prime numbers between ${start} and ${end} are:`);

for (let i = start; i <= end; i++) {
    let isPrime: boolean = true;

    if (i < 2) {
        isPrime = false;
    } else {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(i);
    }
}