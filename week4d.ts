import { Booking } from "./week4c.js";
import { Traveler } from "./week4b.js";

const customer: Traveler = {
    fullName: "Suresh Kumar",
    years: 45,
    seatChoice: "Lower"
};

const reservation = new Booking(customer, 1200, 12626);

reservation.displayTicket();