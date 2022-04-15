const string = 'I am learning JavaScript not Java.';
const re = /Java[a-z]*/gi;

let result = string.matchAll(re);

for (match of result) {
  console.log(match);
}

const string2 = 'My name is Albert. YOUR NAME is Soyuj.';

const re2 = /name\sis\s(?<name>[a-zA-Z]+)\./gi;
let found = string2.matchAll(re2);

for (const match of found) {
  console.log(
    `Found "${match[0]}" at index ${match.index}. Captured name = ${match.groups['name']}`
  );
}
