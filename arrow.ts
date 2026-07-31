function computePenalty(overdueDays: number, chargePerDay: number):number {
    return overdueDays * chargePerDay;
}

const calculatePenalty = (overdueDays: number, chargePerDay: number): number=> {
    return overdueDays * chargePerDay;
};

const displayLibraryGreeting = (library: string): string => `Welcome to ${library} Library!`;

const overdueDays: number = 6;
const dailyCharge: number = 10;

const penaltyTraditional = computePenalty(overdueDays, dailyCharge);
console.log(`Total Fine (Traditional): ${penaltyTraditional} Rs`);

const penaltyArrow = calculatePenalty(overdueDays, dailyCharge);
console.log(`Total Fine (Arrow): ${penaltyArrow}`);

console.log(displayLibraryGreeting("Central"));

const Cube = (num:number):number => num * num * num;