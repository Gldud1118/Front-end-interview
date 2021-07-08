const prices = [1, 2, 3, 10, 20, 30];

/**
 * map - 배열의 각 요소에 대하여 주어진 콜백 함수를 실행한 결과를 모아 새로운 배열을 반환하는 메서드
 */
const mapExample = prices.map((value) => value + 1);

/**
 * filter - 배열의 각 요소에 대하여 주어진 콜백 함수를 실행한 결과값이 true인 요소를 모아 새로운 배열을 반환하는 메서드
 */
const filterExample = prices.filter((value) => value < 10);

/**
 * reduce - 배열의 각 요소에 대해 주어진 reducer함수를 실행하고, 하나의 결과값을 반환한다.
 */

//합 구하기
const reduceExample = prices.reduce((total, current) => {
  return (total += current);
}, 0);

const reduceArrayExample = prices.reduce((accumulator, value) => {
  const newValue = value + 1;

  if (newValue <= 20) {
    accumulator.push(newValue);
  }

  return accumulator;
}, []);

//빈도 수 구하기
const fruits = [
  'banana',
  'apple',
  'banana',
  'apple',
  'melon',
  'banana',
  'melon',
];

const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

// 배열 평평하게 하기
const depth = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12]];
const flattenArray = depth.reduce((arr, cur) => {
  return arr.concat(cur);
}, []);

// 배열을 객체로
const item = [
  { id: 1, name: 'pencil', price: 2000 },
  { id: 2, name: 'paper', price: 2000 },
  { id: 3, name: 'cup', price: 2000 },
];

const arrayToObject = item.reduce((arr, cur) => {
  const { id } = cur;
  arr[id] = { ...cur };
  return arr;
}, {});

console.log(mapExample);
console.log(filterExample);
console.log(reduceExample);
console.log(reduceArrayExample);
console.log(count); //{ banana: 3, apple: 2, melon: 2 }
console.log(flattenArray);
console.log(arrayToObject);
