// some() 메서드는 배열 안의 어떤 요소라도 주어진 콜백 함수를 통과하는지 테스트한다.
// 배열 내 요소 중 하나라도 10보다 큰지 판별한다.

function isBiggerThan10(element, index, array) {
  return element > 10;
}
console.log([2, 5, 8, 1, 4].some(isBiggerThan10)); // false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); // true

// every() 메서드는 배열 안의 모든 요소가 주어진 콜백 함수를 통과하는지 테스트한다. Boolean 값을 반환한다.
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold)); // true
