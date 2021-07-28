/**
 * bind 메서드는 apply와 call 메서드와 달리 함수를 호출하지 않고 this로 사용할 객체만 전달한다.
 */

function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

// bind 메서드는 함수에 this로 사용할 객체를 전달한다.
console.log(getThisBinding.bind(thisArg));

// bind 메서드는 함수를 호출하지 않으므로 명시적으로 호출해야 한다.
console.log(getThisBinding.bind(thisArg)()); //{a:1}

// bind 메서드는 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.

const person = {
  name: 'Lee',
  foo(callback) {
    setTimeout(callback, 1000); // 콜백 함수 내부의 this를 외부 함수
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}`);
});
