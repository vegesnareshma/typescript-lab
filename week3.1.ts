class BankDeposit {
    public accountName: string;
    public depositAmount: number;
    public interestRate: number;
    public duration: number;
    constructor(name: string, amount: number);
    constructor(name: string, amount: number, rate: number, years: number);

    constructor(name: string, amount: number, rate?: number, years?: number) {
        this.accountName = name;
        this.depositAmount = amount;

        this.interestRate = rate ?? 6.5;
        this.duration = years ?? 1;
    }
public calculateMaturity(): number {
        const interest =
            (this.depositAmount * this.interestRate * this.duration) / 100;
        return this.depositAmount + interest;
    }
 public displayDetails(): void {
        console.log("--- Bank Deposit Receipt ---");
        console.log(`Account Holder: ${this.accountName}`);
        console.log(`Deposit Amount: ₹${this.depositAmount}`);
        console.log(`Interest Rate: ${this.interestRate}%`);
        console.log(`Duration: ${this.duration} year(s)`);
        console.log(`Maturity Amount: ₹${this.calculateMaturity()}`);
        console.log("----------------------------\n");
    }
}
const deposit1 = new BankDeposit("Rahul", 50000);
const deposit2 = new BankDeposit("Sneha", 100000, 7.5, 3);
deposit1.displayDetails();
deposit2.displayDetails();
deposit2.depositAmount = 110000;
console.log(`Updated Maturity Amount: ₹${deposit2.calculateMaturity()}`);