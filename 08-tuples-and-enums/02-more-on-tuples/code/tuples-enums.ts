// More On Tuples

// Custom type of tuple
type HTTPResponse = [number, string];

// An array of tuples
const responses: HTTPResponse[] = [];

// Push new items of tuples into the array
responses.push([101, "Switching Protocols"]);
responses.push([202, "Accepted"]);
responses.push([301, "Moved Permanently"]);
console.log(responses);

// Conterintuitive Tuple design & implementation
const goodResponse: HTTPResponse = [200, "OK"];
console.log(goodResponse);

// Adding an extra items that violates tuple's declared order
goodResponse.push("Extra Item");
console.log(goodResponse);

// Pop item(s) from tuple that violates tuple's declared order
goodResponse.pop();
goodResponse.pop();
goodResponse.pop();
console.log(goodResponse);
