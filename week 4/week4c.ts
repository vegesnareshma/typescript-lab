import { TAX_PERCENT, SERVICE_CHARGE } from "./week4.js";
import { Traveler } from "./week4b.js";

export class Booking {

    constructor(
        public traveler: Traveler,
        private ticketPrice: number,
        public coachNumber: number
    ) { }

    public getTotalAmount(): number {
        const tax = this.ticketPrice * TAX_PERCENT;
        return this.ticketPrice + tax + SERVICE_CHARGE;
    }

    public displayTicket(): void {
        console.log("----- Railway Ticket -----");
        console.log(`Traveler : ${this.traveler.fullName} (${this.traveler.years})`);
        console.log(`Coach No : ${this.coachNumber}`);
        console.log(`Amount   : ${this.getTotalAmount()}`);
        console.log("--------------------------");
    }
}