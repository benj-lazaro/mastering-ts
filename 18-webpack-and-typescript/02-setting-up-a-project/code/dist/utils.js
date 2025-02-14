import _ from "lodash";
export function add(x, y) {
    // To demonstrate dependency from a 3rd party library i.e. lodash
    // Triggers an error when served, looking for lodash
    return _.add(x, y);
}
export function multiply(x, y) {
    return x * y;
}
export function divide(x, y) {
    return x / y;
}
