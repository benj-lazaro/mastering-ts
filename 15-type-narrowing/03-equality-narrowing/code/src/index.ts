// Equality Narrowing

function someDemo(x: string | number, y: string | boolean) {
  if (typeof x === typeof y) {
    console.log(`x = ${x} and y = ${y} are both strings`);
  } else {
    console.log(`x = ${x} and y = ${y} are NOT strings`);
  }
}

someDemo(13, true);
someDemo("test", "workstation");
