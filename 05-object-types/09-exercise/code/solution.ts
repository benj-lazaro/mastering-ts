// Exercise 01:
// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

// Exercise 02:
// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget

// For example...
// getProfit(cats) => -21166652

function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}

// Using nested destructuring on the function's parameter list
// function getProfit({ boxOffice: { grossWorldwide, budget } }: Movie): number {
//   return grossWorldwide - budget;
// }

// Exercise 01 test code
console.log(
  `The movie ${dune.title} originally titled "${dune.originalTitle}" was directed by ${dune.director}`
);

console.log(`The movie ${cats.title} was directed by ${cats.director}`);

// Exercise 02 test code
let profit = getProfit(dune);
console.log(
  `${dune.title} released on ${dune.releaseYear} had profitted ${profit} USD`
);

profit = getProfit(cats);
console.log(
  `${cats.title} released on ${cats.releaseYear} had profitted ${profit} USD`
);
