interface SizedItem {
    length: number;
}

function findSize<T extends SizedItem>(data: T): number {
    return data.length;
}

console.log(findSize("TypeScript"));
console.log(findSize([10, 20, 30]));