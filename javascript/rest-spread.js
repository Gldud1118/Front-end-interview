/**
 * Spread문법은 배열이나 객체를 개별 요소로 분리할 때 사용하는 문법이다.
 * Rest문법은 여러 인자들을 하나의 배열로 반환한다. 배열, 객체, 함수 파라미터에서 사용할 수 있다.
 */

//Spread

Math.max(1, 3, 4, 5);
//spread를 사용하면 아래와 같이 입력할 수 있다.
const numbers = [1, 3, 4, 5];
Math.max(...numbers);

const oddNumArr = numbers.filter((el) => {
  return el % 2 !== 0;
});

const min = Math.min(...oddNumArr);
console.log(min);

//배열이나 객체를 복사할 때도 유용하다. 새로운 배열과 새로운 객체를 만들 때 사용할 수 있다.
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

let obj1 = { id: 1, title: "I'm proud of you" };
let obj2 = { ...obj1 };

//spread 통해서 새로운 객체가 생성(얕은 복사)되었기 때문에 이렇게 속성을 추가하거나 변경해도 원래의 객체에 영향을 주지 않는다.
arr2.push(4);
obj2.date = new Date();

console.log(arr1);
console.log(arr2);
console.log(obj1);
console.log(obj2);

//배열의 경우 spread를 사용하면 그 순서가 유지된다.
console.log([1, ...[2, 3], 4]);
console.log(new Date(...[2018, 11, 24]));

//spread를 사용하면 서로 다른 두 배열이나 객체를 쉽게 합칠 수 있다.
let obj3 = { hobby: 'Yoga' };
let obj4 = { name: 'Nicole', age: 20 };
let obj5 = { ...obj3, ...obj4 };
console.log(obj5);

//객체 리터럴에서 중복된 속성명을 사용했을 때 최종 결과는 마지막 속성명의 값이 된다.
// 중복된 속성명과 spread를 이용하면 객체의 특정 속성값을 변경할 때 이전 객체에 영향을 주지 않고 새로운 객체를 만들어낼 수 있다.
// 이는 변수를 수정 불가능하게 관리할 떄 유용하게 사용할 수 있다.
let obj6 = { x: 1, y: 2, z: 3 };
let obj7 = { ...obj6, z: 4, a: 5, b: 6 };
console.log(obj7);

//Rest

//객체와 배열에서 사용할 때는 비구조화 할당 문법과 함께 사용된다.
const dog = {
  name: 'Lulu',
  currentAge: 1,
  lifespan: 20,
};

const { name, ...rest } = dog;
console.log(rest);

const integers = [0, 1, 2, 3, 4, 5, 6];
const [one, ...others] = integers;
console.log(others);

// 함수에 전달된 인자들을의 목록을 배열로 받는다. 함수의 파라미터가 몇개가 될지 모르는 상황에서 유용하다.
function sum(...args) {
  console.log(args);
  return args.reduce((a, b) => a + b);
}
sum(1, 2, 3, 4, 5, 6);
