let arr1 = [1];
let arr2 = [1, 2];
let arr3 = [1, 2, 3];
let arr4 = [1, 2, 3, 4];
let arr5 = [1, 2, 3, 4, 5];

// 빈 배열로 할당
arr1 = [];
console.log(arr1); //[]

// splice 메서드 사용
arr2.splice(0);
console.log(arr2); //[]

// length를 0으로
arr3.length = 0;
console.log(arr3); //[]

// pop
while (arr4.length > 0) {
  arr4.pop();
}
console.log(arr3); //[]

// unshift
while (arr5.length > 0) {
  arr5.shift();
}

console.log(arr4); //[]
