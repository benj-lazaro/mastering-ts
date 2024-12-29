// Delayed initialization & implicit "any" type

const movies = ["hackers", "sneakers", "the net", "the matrix"];

// Implicitly infers the type "any"; NOT ADVISABLE
let foundMovie;

for (let movie of movies) {
  if (movie === "the matrix") foundMovie = movie;
}
