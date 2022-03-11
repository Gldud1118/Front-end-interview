// 중첩 배열 평탄화
const arr1 = [1, 2, [3, 4]];

console.log(arr1.flat());
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat());
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat());

// 배열 빈요소 제거
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat());
