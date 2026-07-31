function calculateFinalAmount(amount: number, discount: number): number {
    return amount - (amount * discount);
}
const calculateFinalAmountArrow = (amount: number, discount: number): number => {
    return amount - (amount * discount);
};
const getShopMessage = (shop: string): string =>
    `Welcome to ${shop}!`;
const productPrice: number = 1000;
const discountRate: number = 0.20; // 20% Discount
console.log(getShopMessage("Reliance Trends"));
const finalPrice1 = calculateFinalAmount(productPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);
const finalPrice2 = calculateFinalAmountArrow(productPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);