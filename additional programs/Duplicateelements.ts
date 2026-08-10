let arr = [1, 2, 3, 2, 4, 5, 3, 6, 1];
let duplicates: number[] = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j] && duplicates.indexOf(arr[i]) == -1) {
            duplicates.push(arr[i]);
        }
    }
}

console.log("Array:", arr);
console.log("Duplicate Elements:", duplicates);