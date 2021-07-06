/** var */
//변수 선언문 이전에 참조 가능
foo = 1;
var foo;
console.log(foo); //1

//변수 중복 선언 허용이 가능하다
var foo = 2;
console.log(foo); //1

// 함수 레벨 스코프
var x = 1;

if (true) {
  var x = 10;
}

console.log(x);

/**
 * ES6 - let, const
 */

//변수 선언문 이전에 참조 불가능
//console.log(bar); Cannot access 'bar' before initialization
//console.log(baz)

let bar = 1;
const baz = 100;

// 변수 중복 선언 불가능
//let bar; Identifier 'bar' has already been declared
//const baz = 200; Identifier 'baz' has already been declared

// 블록 레벨 스코프
let y = 1;
const z = 2;

if (true) {
  let y = 11;
  const z = 12;
}

console.log(y); //1
console.log(z); //2

// const 같은 경우 변수 선언과 동시에 초기화 재할당이 불가능(원시값)
const RATE = 20;

const user = {};
const item = [];
user.name = 'Ella';
item[0] = 'banana';

console.log(user); //{name: "Ella"}
console.log(item); //["banana"]
