// 단축 속성명(shorthand property names) - 객체 리터럴 코드를 간편하게 작성할 목적으로 만들어진 문법

const name = 'Ella';
const obj = {
  age: 20,
  name, //변수 이름 그대로 속성 이름이 되고 값은 변수가 갖고 있던 값이 그대로 할당이 됌
};

function makePerson1(age, name) {
  return { age, name };
}

//단축 속성명이 없었다면?
const obj2 = {
  age: 20,
  name, //변수 이름 그대로 속성 이름이 되고 값은 변수가 갖고 있던 값이 그대로 할당이 됌
};

function makePerson2(age, name) {
  return { age: age, name: name };
}
