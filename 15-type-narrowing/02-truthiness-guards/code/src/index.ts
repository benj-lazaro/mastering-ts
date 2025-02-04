// Truthiness Guards

const targetElement = document.getElementById("username");

// In a conditional statement
if (!targetElement) {
  console.log(`Returns ${targetElement}`);
} else {
  console.log(`Returns ${targetElement.outerHTML}`);
}

// In an arrow function
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("You forgot to pass a word / string value");
  }
};

printLetters("Testing");
printLetters("");
