//for in 루프는 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복한다.  배열의 반복을 위해서는 추천되지 않는다.

let obj = { a: 1, b: 2, c: 3 };
let obj2 = { d: 4 };
Object.setPrototypeOf(obj2, obj);

for (const prop in obj2) {
  console.log(`${prop} = ${obj2[prop]}`);
}
console.log(obj2);

//for of 구문은 컬렉션 전용이다. for of는 모든 객체보다는 [Symbol.iterator]속성이 있는 모든 컬렉션 요소에 대해 반복한다.
let str = 'boo';

for (let value of str) {
  console.log(value);
}

//for in과 for of의 비교
let iterable = [3, 5, 7];
iterable.foo = 'hello';
for (let i in iterable) {
  console.log(i); // 0,1,2,foo
}

for (let i of iterable) {
  console.log(i); // 3,5,7
}
