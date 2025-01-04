// The readonly Modifier
var user = {
    id: 12345,
    username: "babayaga",
};
console.log(user.id);
console.log(user.username);
// Flags an error due to an attempt to write on a readonly property
// user.id = 10;
