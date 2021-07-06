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
