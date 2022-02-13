/**
 * 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첨 함수를 클로저라고 한다
 * 클로저는 자바스크립트 고유의 개념이 아니다. 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어 등에서 사용되는 중요한 특성이다.
 */

//예제 1
function foo() {
  const x = 1;
  const y = 2;

  // 클로저
  // 중첨 함수 bar는 외부 함수보다 더 오래 유지되며 상위 스코프의 식별자를 참조한다.
  function bar() {
    console.log(x);
  }

  return bar;
}

const bar = foo;
bar();

//일반적으로 함수가 종료하면 함수가 생성한 스코프도 소멸한다. 하지만 누군가가 스코프를 참조하고 있다면 스코프는 해제되지 않고 생존하게 된다.

//예제 2
function foo2() {
  const a = 2;
  function baz() {
    console.log(a);
  }
  bar2(baz);
}

function bar2(fn) {
  fn();
}

foo2();

//클로저의 활용 - 클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다.
const counter = (function () {
  let num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
