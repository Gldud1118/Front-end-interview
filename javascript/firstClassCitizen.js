//자바스크립트는 First class citizen 일급 함수이다.

//함수를 변수에 담을 수 있다.
const add10 = function (b) {
  return 10 + b;
};

function apply(arr, op) {
  return arr.map(op);
}

// 함수를 매개변수로 전달할 수 있다.
apply([1, 2, 3], add10);

console.log(apply([1, 2, 3], add10));

function makeAdd(v1) {
  return function (v2) {
    return v1 + v2;
  };
}

const add3 = makeAdd(3);
console.log(add3(10));
const add7 = makeAdd(7);
console.log(add7(10));

//함수를 반환할 수 있다.
// 변수를 사용하여 함수를 반환
const sayHello = function () {
  return function () {
    console.log('Hello!');
  };
};
const myFunc = sayHello();
myFunc();

//이중 괄호를 사용하여 함수를 반환
function sayHi() {
  return function () {
    console.log('Hi!');
  };
}
sayHi()();
