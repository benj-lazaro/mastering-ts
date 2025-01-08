// Type Narrowing With Union Types
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
// Passes a value of type number
var tax = calculateTax(45, 0.07);
console.log(tax);
// Passes a value of type string
tax = calculateTax("$45", 0.07);
console.log(tax);
