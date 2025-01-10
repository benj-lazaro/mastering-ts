// A Bit More On Enums
// Enum of numbers; each member explictly assigned with a unique value
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 10] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 34] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 324] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 98] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.SHIPPED;
console.log(myStatus);
myStatus = OrderStatus.DELIVERED;
console.log(myStatus);
// Function parameter of type enum
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
var myOrder = isDelivered(OrderStatus.DELIVERED);
console.log("Ordered Item Delivered: ".concat(myOrder));
// Enum of string
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
console.log("You pressed \"".concat(ArrowKeys.DOWN, "\" key"));
console.log("You pressed \"".concat(ArrowKeys.UP, "\" key"));
