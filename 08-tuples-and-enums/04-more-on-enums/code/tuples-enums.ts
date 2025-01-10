// A Bit More On Enums

// Enum of numbers; each member explictly assigned with a unique value
enum OrderStatus {
  PENDING = 10,
  SHIPPED = 34,
  DELIVERED = 324,
  RETURNED = 98,
}

let myStatus = OrderStatus.SHIPPED;
console.log(myStatus);

myStatus = OrderStatus.DELIVERED;
console.log(myStatus);

// Function parameter of type enum
function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

const myOrder = isDelivered(OrderStatus.DELIVERED);
console.log(`Ordered Item Delivered: ${myOrder}`);

// Enum of strings & numbers
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 789,
}

console.log(`You pressed "${ArrowKeys.DOWN}" key`);
console.log(`You pressed "${ArrowKeys.UP}" key`);
