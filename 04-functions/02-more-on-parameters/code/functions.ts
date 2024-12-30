// Function Parameter Annotations

// Function parameters each with its own distinct type annotation
const doSomething = (person: string, age: number, isFunny: boolean) => {
  console.log(`${person} aged ${age} is hilarious: ${isFunny}`);
};

doSomething("John Wick", 58, false);

// Error: Too little argument values
// doSomething("John Wick", 58);

// Error: too many argument values
// doSomething("John Wick", 58, false, 12, "babayaga", true, null);

// Error: wrong order of argument values
// doSomething(58, false, "John Constantine");
