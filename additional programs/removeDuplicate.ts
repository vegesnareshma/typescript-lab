let str = "programming";
let result = "";

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (result.indexOf(ch) === -1) {
        result = result + ch;
    }
}

console.log("Original String: " + str);
console.log("After Removing Duplicates: " + result);