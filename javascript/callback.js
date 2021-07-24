/**
 * 콜백은 어떤 함수의 인자로 넘겨지는 함수이다.
 */

function add5(val) {
  return val + 5;
}

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.map(add5);
