/**
 * in 연산자와 Object.prototype.hasOwnProperty 메서드 모두 객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.
 * 하지만 in 연산자는 확인 대상 객체의 프로퍼티 뿐만 아니라 확인 대상 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인하므로 주의가 필요하다.
 * Object.prototype 메서드는 그 이름에서 알 수 있듯이 인수로 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환하고 상속받은
 * 프로토타입의 프로퍼티 키인 경우 false를 반환한다.
 */

const dog = {
  name: 'lulu',
  age: 5,
};

console.log('name' in dog); //true

// 아래에서 true를 반환하는 이유는 in 연산자가 person 객체가 속한 프로토타입 체인 상에 존재하는 모든 프로토타입에서 toString 프로퍼티를 검색했기 때문이다.
console.log('toString' in dog); //true

// in 연산자 대신 ES6에서 도입된 Reflect.has 메서드를 사용할 수도 있다. Reflect.has 메서드는 in 연산자와 동일하게 동작한다.

console.log(Reflect.has(dog, 'age')); //true

// hasOwnProperty 메서드는 객체 고유의 키인 경우에만 true를 반환하고 상속받은 프로토타입의 키인 경우 false를 반환한다.

console.log(dog.hasOwnProperty('toString')); //false
