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
