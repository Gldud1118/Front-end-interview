/**
 * prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다.
 * 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다.
 */
console.log(function () {}.hasOwnProperty('prototype')); //true

console.log({}.hasOwnProperty('prototype')); //false

// prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.

const ArrowFunc = () => {};
const GeneralFunc = function () {};

function* generatorFunc() {}

console.log(new GeneralFunc().prototype);
console.log(new generatorFunc().prototype); // generatorFunc is not a constructor
console.log(new ArrowFunc().prototype); // ArrowFunc is not a constructor
