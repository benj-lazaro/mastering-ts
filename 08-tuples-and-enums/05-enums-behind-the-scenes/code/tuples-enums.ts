// Enums Behind The Scenes

// Removes pollutant transpiled code in JavaScript
const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

// Object with a property assigned with an enum
const order = {
  orderNumber: 1234,
  status: OrderStatus.PENDING,
};

const order2 = {
  orderNumber: 6578,
  status: OrderStatus.DELIVERED,
};

console.log(order);
console.log(order2);
