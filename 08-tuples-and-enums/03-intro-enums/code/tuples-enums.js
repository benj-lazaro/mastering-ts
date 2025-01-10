// Introducing Enums
// Represents 4 statuses; each status represented by a constant
// Implicitly assigns a number value to each constant starting at 0
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 23] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 24] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
console.log(myStatus);
// Function parameter of type enum
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
var myOrder = isDelivered(OrderStatus.DELIVERED);
console.log(myOrder);
