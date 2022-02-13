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

// map, reduce, filter와 같은 고차 함수에 인수로 전달할 수 있다. 일반적인 함수 표현식보다 표현이 더 간결하고 가독성이 좋다.
// 이처럼 화살표 함수는 콜백 함수로서 정의할 떄 유용하다.

// 화살표 함수에서 return이 유일한 문장일 때 return과 중괄호를 생략할 수 있다.
elements.map((el) => el.length);

// 비구조화 파라미터 할당 가능
elements.map(({ length }) => length);

// this바인딩 - 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다. 이를 lexical this라 한다.
// 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 대안으로 유용하다.
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

// 화살표 함수는 생성자 함수로서 호출할 수 없다. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor이다. 화살표 함수는 인스턴스를 생성할 수 없으므로 prototype프로퍼티가 없고 프로토타입도 생성하지 않는다.
const Foo = () => {};

//const foo1 = new Foo(); Foo is not a constructor

// 화살표 함수는 중복된 매개변수 이름을 선언할 수 없다.
function commonFun(a, a) {
  return a + a;
}

console.log(commonFun(1, 1));

// const arrowFun = (a, a) => a + a; //Duplicate parameter name not allowed in this context

// 화살표 함수는 함수 자체의 this, arguments, super, new target 바인딩을 갖지 않는다. 따라서 화살표 함수 내부에서 this, arguments, super, new.target을 참조하면 스코프 체인을 통해 상위 스코프인 this, arguments, super, new.target을 참조한다.

// 화살표 함수는 argument객체를 생성하지 않는다.
const fun1 = function () {
  console.log(arguments);
};

function commonFun2() {
  const arrFun = () => {
    console.log(arguments);
  };

  arrFun();
}
const arrFun = () => {
  //console.log(arguments); arguments is not defined
};

// 만약 화살표 함수와 화살표 함수가 중첩되어 있다면 상위 화살표 함수에도 this, arguments, super, new.target 바인딩이 없으므로 스코프 체인 상에서
// 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this, arguments, super, new.target을 참조한다.
function commonFun3() {
  const arrFun1 = () => {
    const arrFun2 = () => {
      console.log(arguments);
    };

    arrFun2();
  };

  arrFun1();
}

fun1(1, 2, 3, 4, 5);
commonFun2(1, 2, 3);
commonFun3(1, 2, 3);
arrFun(1, 2, 3, 4, 5);

// 메서드를 화살표 함수로 정의하는 것은 피해야 한다.
const dog = {
  name: 'black',
  sayHi: () => console.log(`${Hi}, this.name`),
};

// sayHi 프로퍼티에 할당한 화살표 함수 내부의 this는 메서드를 호출한 객체인 dog를 사기리지 않고 상위 스코프인 전역의 this가 가리키는 전역 객체를 가리킨다.
// 따라서 화살표 함수로 메서드를 정의하는 것은 바람직하지 않다. 메서드를 정의할 때는 ES6 메서드 축약 표현으로 정의한 ES6 메서드를 사용하는 것이 좋다.

// 프로토타입 객체의 프로토 타입에 화살표 함수를 할당하는 경우도 동일한 문제가 발생한다.
