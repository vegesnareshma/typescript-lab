let str = "programming";
let frequency: { [key: string]: number } = {};

for (let ch of str) {
    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

console.log("String:", str);
console.log("Character Frequency:");

for (let ch in frequency) {
    console.log(ch + " : " + frequency[ch]);
}