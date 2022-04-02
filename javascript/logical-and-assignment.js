// Logical AND assignment

// assigns if x is truthy
let x = true;

// if (x) {
//   x = 'value';
// }

x &&= 'value';

// assigns if y is falsy
let y = false;

// if (!y) {
//   y = 'value';
// }

y ||= 'value';

// assigns if z is nullish
let z = undefined;

// if (z === undefined) {
//   z = 'value';
// }

z ??= 'value';
