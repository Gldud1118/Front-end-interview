/**
 * 스코프는 식별자가 유효한 범위를 말한다. 모든 식별자(변수, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
 */

//전역 스코프 - 코드의 가장 바깥 영역
console.log(globalScope);
var globalScope = 1;

//지역 스코프 - 지역변수는 자신의 지역 스코프와 하위 지역(중첩 함수) 스코프에서만 참조할 수 있다.
function localScope() {
  let x = 1;
  let y = 2;
  // console.log(z); z is not defined
  function localScope2() {
    let z = 3;
    console.log(x);
    console.log(y);
  }

  localScope2();
}

localScope();

//함수 레벨 스코프 - var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
//console.log(name); name is not defined
if (true) {
  var funcLevelScope = 'Bob';
}

//블록 레벨 스코프(es6) - let, const 중괄호 안에서만 접근 가능하다. 블록 내부에 정의된 변수는 블록의 실행이 끝나면 해제된다.
// console.log(blockLevelScope); blockLevelScope is not defined
// console.log(blockLevelScope2); blockLevelScope2 is not defined
{
  let blockLevelScope = 20;
  const blockLevelScope2 = 30;
}

//console.log(i); i is not defined
for (let i = 0; i < 10; i++) {
  //...
}
