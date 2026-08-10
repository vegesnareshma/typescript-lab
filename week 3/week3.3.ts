class BankBranch {
 public static readonly bankTitle: string = "SBI Bank";
  public static totalCustomers: number = 0;

  // Readonly property
  public readonly customerId: string;
  public customerName: string;

  constructor(name: string, id: string) {
    this.customerName = name;
    this.customerId = id;

    BankBranch.totalCustomers++;
  }

  public static getBankPolicy(): void {
    console.log(`Welcome to ${this.bankTitle}. Follow all banking rules.`);
  }

  public showCustomer(): void {
    console.log(`Customer: ${this.customerName}`);
    console.log(`Customer ID: ${this.customerId}`);
  }
}
console.log(BankBranch.bankTitle);
BankBranch.getBankPolicy();

const customer1 = new BankBranch("Rahul Kumar", "SBI1001");
const customer2 = new BankBranch("Anjali Sharma", "SBI1002");

customer1.showCustomer();

console.log(customer1.customerId);

console.log(`Total Customers: ${BankBranch.totalCustomers}`);