"use strict";
// Using 3rd Party Libraries: Axios
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Make a basic HTTP request; annotate with the custom interface
axios_1.default.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log("It worked!");
    // printUser(res.data);
    res.data.forEach(printUser);
});
function printUser(user) {
    console.log(`Username: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Phone: ${user.phone}\n`);
}
