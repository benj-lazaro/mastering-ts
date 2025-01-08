// Type Narrowing With Union Types

// Takes price as either number or string type, returns a number type
function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// Passes a value of type number
let tax = calculateTax(45, 0.07);
console.log(tax);

// Passes a value of type string
tax = calculateTax("$45", 0.07);
console.log(tax);
