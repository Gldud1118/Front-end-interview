/**
 * 렉시컬 환경(lexical environment)은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트다.
 * 실행 컨텍스트 스택이 코드의 실행 순서를 관리한다면 렉시컬 환경은 스코프와 식별자를 관리한다.
 * 함수가 생성될 때 부모 함수의 렉시컬 환경을 기억한다. 그리고 그 함수가 호출될 때 부모 함수의 렉시컬 환경을 체인으로 연결한다.
 */

function makeAdd(v1) {
  return function (v2) {
    //내부에서 함수가 만들어지는 경우에는 렉시컬 환경이 유지가 된다.
    return v1 + v2;
  };
}

// 호출이 되면 기억했던 렉시컬 환경으로 연결을 한다. 그래서 함수 안에서 어떤 변수를 사용할 때 그 변수를 자기 자신에서 찾아보고
// 만약 없다면 연결된 곳으로 가서 그 변수를 찾는다.
const add3 = makeAdd(3);
console.log(add3(10));
const add7 = makeAdd(7); //만약 이런 식으로 변수에 할당되지 않았다면 내부 함수를 반환했더라고 나중에 사용될 수가 없기 때문에 렉시컬 환경도 제거된다.
console.log(add7(10));

function main() {
  let v = 0;
  function f1() {
    v++;
    console.log(v);
  }

  function f2() {
    v++;
    console.log(v);
  }

  return { f1, f2 };
}

const obj = main();
// 하나의 렉시컬 환경을 여러 함수가 공유한다.
obj.f1();
obj.f2();
obj.f1();
obj.f2();
