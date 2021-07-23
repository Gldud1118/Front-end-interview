/**
 * 객체와 마찬가지로 배열도 다양한 생성 방식이 있다. 가장 일반적이고 간편한 배열 생성 방식은 배열 리터럴을 사용하는 것이다.
 */

// 배열 리터럴
const arr = [];

// Array 생성자 함수 - Array 생성자 함수를 통해 배열을 생성할 수도 있다. Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요하다.
const newArray = new Array();

// 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
const newArray2 = new Array(1, 2);
const newArray3 = new Array({});
const newArray4 = new Array(1);

console.log(newArray); // []
console.log(newArray2); //[1,2]
console.log(newArray3); //[{}]
console.log(newArray4); // [ ]

// Array.of - ES6에서 도입된 Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다. Array.of는 Array생성자 함수와 다르게
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.

const arrayOf = Array.of(1);
const arrayOf2 = Array.of(1, 2, 3);
const arrayOf3 = Array.of('string');
console.log(arrayOf);
console.log(arrayOf2);
console.log(arrayOf3);

// ES6에서 도입된 Array.from메서드는 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.

console.log(Array.from({ length: 2, 0: 'a', 1: 'b' })); //['a' 'b']
console.log(Array.from('Hello'));

// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다
console.log(Array.from({ length: 3 })); //[undefined, undefined, undefined]
// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다.
console.log(Array.from({ length: 3 }, (_, i) => i)); //[0,1,2]
