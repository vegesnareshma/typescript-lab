class SavingsAccount {
    public accountHolder: string;
    public depositAmount: number;
    public interestPercent: number;
    public durationYears: number;
    constructor(holder: string, amount: number);
    constructor(holder: string, amount: number, interest: number, duration: number);

    constructor(holder: string, amount: number, interest?: number, duration?: number) {
        this.accountHolder = holder;
        this.depositAmount = amount;
        this.interestPercent = interest ?? 5;
        this.durationYears = duration ?? 2;
    }
    public calculateAmount(): number {
        const interest =
            (this.depositAmount * this.interestPercent * this.durationYears) / 100;
        return this.depositAmount + interest;
    }
  public showDetails(): void {
        console.log("----- Savings Account -----");
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Deposit: ₹${this.depositAmount}`);
        console.log(`Interest: ${this.interestPercent}%`);
        console.log(`Duration: ${this.durationYears} year(s)`);
        console.log(`Maturity Amount: ₹${this.calculateAmount()}`);
        console.log("--------------------------");
    }
}
const account1 = new SavingsAccount("Ravi", 40000);
const account2 = new SavingsAccount("Priya", 80000, 7, 4);

account1.showDetails();
account2.showDetails();

account2.depositAmount = 90000;
console.log(`Updated Maturity Amount: ₹${account2.calculateAmount()}`);