// Exhaustiveness Checks With never

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

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

// Union Type
type FarmAnimal = Pig | Cow | Rooster | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moo!";
    case "rooster":
      return "Cockadoodledoo!";
    case "sheep":
      return "Baa!";
    default:
      // Should NEVER EVER make it here, if handled all cases correctly
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Steevie Chicks",
  weight: 2,
  age: 2,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
