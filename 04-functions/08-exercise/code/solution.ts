// Exercise #1:
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

function twoFer(person: string = "you"): string {
  return `One for ${person}, one for me`;
}

let result = twoFer("John Wick");
console.log(result);

result = twoFer();
console.log(result);

// Exercise #2:
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

function isLeapYear(year: number): boolean {
  //   if (year % 4 === 0 && year % 100 !== 0) return true;
  //   else if (year % 400 === 0) return true;
  //   return false;
  return (year % 4 === 0 && year % 100 !== 8) || year % 400 === 0;
}

let leapYear = isLeapYear(2012);
console.log(leapYear);

leapYear = isLeapYear(2013);
console.log(leapYear);

leapYear = isLeapYear(2025);
console.log(leapYear);
