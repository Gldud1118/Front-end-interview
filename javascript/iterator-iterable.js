/**
 * ES6에서 도입된 이터레이션 프로토콜은 순회 가능한 데이터 컬렉션(자료구조)을 만들기 위해 ECMAScript사양에 정의하여 미리 약속한 규칙이다.
 * ES6 이전의 순회 가능한 데이터 컬렉션, 즉 배열, 문자열, 유사 배열 객체, DOM 컬렉션 등은 통일된 규약없이 각자 나름의 구조를 가지고 for 문, for..in문,
 * forEach메서드등 다양한 방법으로 순회할 수 있었다. ES6에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of문,
 * 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다.
 */

// 이터러블(iterable) - 이터러블은 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체를 말한다.

const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === 'function';

console.log(isIterable([]));
console.log(isIterable(''));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable({})); // false

// 배열은 Array.prototype의 Symbol.iterator메서드를 상속받는 이터러블이다.
const array = [1, 2, 4];
console.log(Symbol.iterator in array);

// 이터러블은 for...of문으로 순회할 수 있다.
for (const item of array) {
  console.log(item);
}

// 이터러블은 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
console.log([...array]);

// 이터러블인 배열은 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.
const [a, ...rest] = array;
console.log(a);
console.log(rest);

// Symbol.iterator 매서드를 직접 구현하지 않거나 상속받지 않은 일반 객체는 이터러블 프로토콜을 준수한 이터러블이 아니다. 따라서 일반 객체는 for...of문으로 순회할 수 없으며
// 스프레드 문법과 배열 디스트럭처링 대상으로 사용할 수 없다.

const obj = { a: 1, b: 2, c: 3 };

console.log(Symbol.iterator in obj);

// 이터러블이 아닌 일반 객체는 for...of문으로 순회할 수 없다.
// for (const item of obj) {
//   console.log(item); obj is not iterable
// }

// 이터러블이 아닌 일반 객체는 배열 디스트럭처링 할당의 대상으로 사용할 수 없다.
// const [a, b] = obj;

// 스프레드 프로퍼티 제안은 일반 객체에 스프레드 문법의 사용을 허용한다.
console.log({ ...obj }); //{ a: 1, b: 2, c: 3 }

// 이터레이터 - 이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
// 이터러블의 Symbol.iterator메서드가 반환한 이터레이터는 next 메서드를 갖는다.
// 이터레이터의 next메서드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할을 한다. 즉, next 메서드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.
// 이터레이터 리절트 객체는 value와 done프로퍼티를 갖는 객체이다.

const arr = [10, 20, 30];
const iter = arr[Symbol.iterator]();
console.log(iter.next()); //배열의 아이템이 순차적으로 반환된다.
console.log(iter.next());
console.log(iter.next());
