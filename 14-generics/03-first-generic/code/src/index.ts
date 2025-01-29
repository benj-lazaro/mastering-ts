// Writing Out First Generic

interface Cat {
  name: string;
  breed: string;
}

// Whatever the type of the argument value is, that will be the return type
function identity<Type>(item: Type): Type {
  return item;
}

// A string type
console.log(identity<string>("Hi there!"));
console.log(typeof identity<string>("Hi there!"));

// A number type
console.log(identity<number>(123));
console.log(typeof identity<number>(123));

// An interface Cat type
console.log(identity<Cat>({ name: "Garfield", breed: "Orange Tabby" }));
console.log(typeof identity<Cat>({ name: "Garfield", breed: "Orange Tabby" }));
