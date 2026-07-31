function fetchFirstItem<T>(values: T[]): T {
    return values[0];
}
function packItem<T>(product: T): { item: T; packedOn: Date } {
    return {
        item: product,
        packedOn: new Date()
    };
}
const fruits = ["Apple", "Mango", "Orange"];
const firstFruit = fetchFirstItem<string>(fruits);
console.log(`First Fruit: ${firstFruit.toUpperCase()}`);
const rollNumbers = [101, 102, 103];
const firstRoll = fetchFirstItem<number>(rollNumbers);
console.log(`First Roll Number: ${firstRoll}`);
interface Laptop {
    company: string;
    version: string;
}
const laptop: Laptop = {
    company: "Dell",
    version: "Inspiron 15"
};
const packedLaptop = packItem<Laptop>(laptop);

console.log(
    `Packed Laptop: ${packedLaptop.item.company} at ${packedLaptop.packedOn}`
);
const autoFruit = fetchFirstItem(fruits);
console.log(`Auto Selected Fruit: ${autoFruit}`);