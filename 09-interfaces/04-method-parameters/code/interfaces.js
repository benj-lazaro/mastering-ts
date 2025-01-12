// Interface Method Parameters
var shoes = {
    name: "Blue Suede shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log("The ".concat(shoes.name, " is currently priced at $").concat(shoes.price));
console.log("Discount price: $".concat(shoes.applyDiscount(0.4)));
