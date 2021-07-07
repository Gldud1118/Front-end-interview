//즉시 실행 함수(IIFE, Immediately-Invoked Function Expression) - 함수의 정의와 동시에 즉시 실행되는 함수
// 즉시 실행되는 함수 표현 - 내부의 변수는 외부로부터 접근 불가
(function () {
  let foo = 1;
})();

//IIFE를 변수에 할당하면 IIFE자체는 저장되지 않고 함수가 실행된 결과만 저장됌
const result = (function () {
  let x = 1;
  let y = 2;

  return x + y;
})();

console.log(result); //3
console.log(foo); //foo is not defined
