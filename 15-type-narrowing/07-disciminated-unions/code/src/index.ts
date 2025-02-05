// Discriminated Unions

// Interfaces with a disciminant with a literal type value
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

// Union Type
type FarmAnimal = Pig | Cow | Rooster;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moo!";
    case "rooster":
      return "Cockadoodledoo!";
  }
}

const stevie: Rooster = {
  name: "Steevie Chicks",
  weight: 2,
  age: 2,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
