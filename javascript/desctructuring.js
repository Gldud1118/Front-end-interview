/**
 * 비구조화 할당(구조 분해 할당)문법- 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 문법이다.
 */

// 배열 비구조화

const arr = [1, 2];
const [a, b] = arr;
console.log(a); //1
console.log(b); //2

// 기존에 존재하는 변수에도 할당을 할 수가 있다.
let x, y;
[x, y] = [3, 4];
console.log(x); //3
console.log(y); //4

// 기본값을 정의할 수 있다.
const arr2 = [1];
const [c = 10, d = 20] = arr2;
console.log({ c, d });

// 두 변수의 값을 쉽게 교환할 수 있다. 변수의 값을 교환하기 위해 제 3의 변수가 필요하지 않다.
let e = 1;
let f = 2;
[e, f] = [f, e];
console.log({ a, b });

// 배열 비구조화에서 일부 속성값을 무시하고 싶다면 건너뛰고 싶은 개수만큼 쉼표를 입력하면 된다.
const arr3 = [1, 2, 3];
const [g, , h] = arr3;
console.log({ g, h });

// Rest문법과 함께 쓰이면서 나머지 모두를 새로운 배열로 만들 수 있다.
const arr4 = [4, 5, 6];
const [first, ...rest1] = arr4;
console.log(rest1);
// 모두가 입력된 상태에서 rest를 사용하면 빈 배열이 할당된다.
const [i, j, k, ...rest2] = arr4;
console.log(rest2);

// 객체 비구조화

// 객체 비구조화에서는 순서는 중요하지 않다.
const obj = { age: 21, name: 'Richard' };
const { name, age } = obj;
console.log({ age, name });

// 원래 속성 이름과 다른 이름으로 변수를 생성할 수 있다. - 중복된 변수명이 있을 때, 좀 더 구체적인 변수명으로 만들 때
const food = { name: 'pasta', price: '10000' };
const { name: theName, price } = food;
console.log(theName);
console.log(price);

// 객체 비구조화에서도 기본값을 정의할 수 있다. 속성값 이름을 변경하면서 동시에 기본값도 정의할 수 있다. 또한 기본값으로 함수의 반환값을 넣을 수 있다.
function getDefaultGrade() {
  return 'F';
}
const user = { username: 'Grace', hobby: 'dance', grade: 'A' };
const {
  username = 'noName',
  hobby: theHobby = 'meditation',
  grade = getDefaultGrade(), //기본값이 사용될 때만 함수가 호출된다.
} = user;
console.log({ username, theHobby, grade });

// 객체 비구조화에서도 Rest문법을 사용하여 사용되지 않은 나머지 속성들을 별도의 객체로 생성할 수 있다.
const foo = {
  title: 'Hello',
  date: new Date(),
};
const { title, ...others } = foo;
console.log(others);

// for문에서 객체 비구조화를 사용이 가능하다.
const fruits = [
  { name: 'banana', color: 'yellow' },
  { name: 'strawberry', color: 'red' },
];

for (const { name, color } of fruits) {
  //...
}

// 중첩되어 있는 경우에도 사용할 수 있다.
const article = { id: '1', writer: { department: 'entertainment' } };
const {
  id,
  writer: { department },
} = article;
console.log({ id, department });
//console.log(writer) 변수로 할당하지 않았기 때문에 에러 발생

// 기본값의 정의는 변수로 한정되지 않는다.
const [{ prop: l } = { prop: 123 }] = [];
console.log(l); //123
const [{ prop: m } = { prop: 123 }] = [{}];
console.log(m); //undefined

// 계산된 속성명을 사용할 수 있다.
const index = 1;
const { [`key${index}`]: valueOfTheIndex } = { key1: 123 };
console.log(valueOfTheIndex);
