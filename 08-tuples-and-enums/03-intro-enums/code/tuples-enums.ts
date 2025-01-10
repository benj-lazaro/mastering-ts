// Introducing Enums

// Represents 4 statuses; each status represented by a constant
// Implicitly assigns a number value to each constant starting at 0
enum OrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED = 23, // explicit value assignment
  RETURNED, // 24 = implicitly value assignment based on previous member
}

const myStatus = OrderStatus.DELIVERED;
console.log(myStatus);

// Function parameter of type enum
function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

const myOrder = isDelivered(OrderStatus.DELIVERED);
console.log(myOrder);
