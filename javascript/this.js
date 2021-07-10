/**
 * this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
 * this바인딩 - this바인딩은 함수 호출 방식에 의해 동적으로 결정된다.
 */

//함수 호출 방식

//일반 함수 호출 - 일반 함수로 호출된 모든 함수(중첩함수, 콜백함수 포함)기본적으로 this에는 전역 객체가 바인딩된다.
function foo() {
  console.log("foo's this " + this); // window

  function bar() {
    console.log("bar's this " + this); // window
  }
}

foo();

let obj1 = {
  value: 200,
  foo() {
    function bar() {
      console.log("obj bar's this " + this); //this
      console.log(this.value); //undefined
    }
    bar();
    // setTimeout(function () {
    //   console.log(this.value); //undefined
    // }, 2000);
    setTimeout(() => {
      console.log(this.value); //200 화살표 함수 내부의 this는 상위 스코프의 this를 가리킨다.
    }, 100);
  },
};

obj1.foo();

// 메서드 호출 - 메서드 내부의 this에는 메서드를 호출한 객체가 바인딩된다. this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩 된다.
let obj2 = {
  value: 100,
  foo() {
    console.log(this.value); //100
  },
};

// 생성자 함수 호출 - 생성자 함수 내부의 this에는 생성자 함수가 미래에 생성할 인스턴스가 바인딩된다.
function Food(name) {
  this.name = name;
  console.log(this.name);
}

const food1 = new Food('떡볶이');
const food2 = new Food('라면');
