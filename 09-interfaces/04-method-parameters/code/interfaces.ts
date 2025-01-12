// Interface Method Parameters

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(`The ${shoes.name} is currently priced at $${shoes.price}`);
console.log(`Discount price: $${shoes.applyDiscount(0.4)}`);
