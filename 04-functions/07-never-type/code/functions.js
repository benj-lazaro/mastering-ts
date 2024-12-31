// Never Type
// A function that is intended NEVER to return any value
function makeError(msg) {
    throw new Error(msg);
}
makeError("DO NOT PANIC! This is an intentionally thrown error.");
