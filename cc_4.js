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

// Task 2 - Sales Report

let sales = [50, 70, 40, 90, 80]; // these are the sales figures
let totalSales = 0; // initialize the variable before the loop
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; 
}; // this adds the figures in the array together

console.log(`Total Sales: ${totalSales}`) // this logs the total sales to the console

// Task 3 - Inventory Depletion

let stock = 10; // initialize the stock variable
while (stock >= 0) { // loop runs while stock is greater than or equal to 0
    console.log(`Stock is: ${stock}`); // this logs the stock value to the console
    stock-- ;// this ensures the value of "Stock" is decreasing by a count of 1
};

// Task 4 - Customer Surveys

let responses = 0; // initialize the variable
 do {
    console.log(`Response ${responses}`);
    responses ++;
} while (responses <= 3); // creats a while loop until the amount of responses hits 3

// Task 5 - Employee Information

let employee = {
    name: "Alice", // employee's name is Alice
    position: "Manager", // Alice is a Manager
    salary: 75000 // Alice makes $75000 a year
};
for (let key in employee) {
    
    console.log (`${key}: ${employee[key]}`) // logs the employee information
        
    }

// Task 6 - Product Listing

let products = ["Laptop", "Mouse", "Keyboard"]; // The products are Laptops, Mouses, and Keyboards
for (let product of products ){
    console.log(`Product: ${product}`)
} // logs each product e.g. Product: Laptops


