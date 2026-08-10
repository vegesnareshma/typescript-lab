namespace IdentityChecker {
    const idSize = 12;
    export function checkAadhaar(cardNumber: string): boolean {
        const onlyDigits = /^\d+$/.test(cardNumber);
        return onlyDigits && cardNumber.length === idSize;
    }

    export function checkPAN(panCode: string): boolean {
        const pattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return pattern.test(panCode.toUpperCase());
    }
    export namespace Charges {
        export function findGST(price: number): number {
            return price * 0.18;
        }
    }
}

const aadhaarCard = "123456789012";
const panCard = "ABCDE1234F";

console.log(`Aadhaar Valid: ${IdentityChecker.checkAadhaar(aadhaarCard)}`);
console.log(`PAN Valid: ${IdentityChecker.checkPAN(panCard)}`);

const totalAmount = 1000;
const gstValue = IdentityChecker.Charges.findGST(totalAmount);

console.log(`GST on ₹${totalAmount} is ₹${gstValue}`);