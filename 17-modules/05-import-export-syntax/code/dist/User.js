// Default named export
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out`);
    }
}
// Named export
export function userHelper() {
    console.log("User helper!");
}
