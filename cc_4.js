// Task 1 - Customer Discounts

var purchaseAmount = 150; // The purchase amount is $150

if (purchaseAmount > 100) {
    let discount = .15; // the discount is 15%
    let finalAmount = purchaseAmount - (purchaseAmount * discount);
    console.log(`Final amount after discount: $${finalAmount}`);
} else {
    console.log(`Final amount after discount: $${PurchaseAmount}`);
} // This says that if an item costs more than $100, then a 15% discount will be applied. 
// If it costs less than $100, it will keep the original purchase amount.


