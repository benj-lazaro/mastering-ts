// Literal Types

// Literal type of "yes", "no" & "maybe"
const giveAnAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}.`;
};

let response = giveAnAnswer("yes");
console.log(response);

let mood: "Happy" | "Sad" = "Happy";
console.log(mood);

// Custom literal type defined using Type Alias
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";
console.log(`Today is ${today}`);
