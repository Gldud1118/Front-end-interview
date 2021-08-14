/**
 * 화살표 함수는 ES6문법이다. function 키워드 사용해서 함수를 만든 것보다 간단히 함수를 표현할 수 있다. 화살표 함수는 항상 익명이다.
 * 화살표 함수는의 this는 상위스코프의 this를 가리킨다. 이를 Lexical this라 한다.
 * 화살표 함수로 메서드를 정의, prototype 할당, 생성자 함수로 사용, addEventListener의 콜백 함수로 사용하지 않도록 한다.
 */

let elements = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// 일반 함수
elements.map(function (el) {
  return el.length;
});

// 화살표 함수
elements.map((el) => {
  return el.length;
});

// 화살표 함수에서 return이 유일한 문장일 때 return과 중괄호를 생략할 수 있다.
elements.map((el) => el.length);

// 비구조화 파라미터 할당 가능
elements.map(({ length }) => length);

// this바인딩
function Person() {
  // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
  this.age = 0;

  setTimeout(function growUp() {
    console.log(this.age); //undefined
    this.age++;
  }, 1000);
}

const p = new Person();

function Person2() {
  this.age = 0;

  setTimeout(() => {
    this.age++; // This는 Person객체를 참조
  }, 1000);
}

const p2 = new Person();

const fun1 = function () {
  console.log(arguments);
};

// 화살표 함수는 argument객체를 생성하지 않는다.
const arrFun = () => {
  //console.log(arguments); arguments is not defined
};

fun1(1, 2, 3, 4, 5);

arrFun(1, 2, 3, 4, 5);
