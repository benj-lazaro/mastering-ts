// Interfaces vs Type Aliasses

// Interface
// Limited to ONLY object types
interface Person {
  name: string;
  age: number;
}

// Extending an interface
interface Employee extends Person {
  jobTitle: string;
}

// Type Alias
// Describe the shape of literal types
type Color = "red" | "blue";

// Extending a Type Alias
type Name = {
  name: string;
};

type Job = Name & {
  job: string;
};
