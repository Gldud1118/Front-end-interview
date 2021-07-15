/**
 * 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. 이를 값에 의한 전달이라 한다.
 * 이에 비해 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조값이 복사되어 전달된다. 이를 참조에 의한 전달이라 한다.
 */

var x = 10;
var y = 20;
x = 5;

console.log(x);
console.log(y);

let person = {
  name: 'Bob',
  age: 23,
};

// 프로퍼티 값 갱신
person.name = 'Judy';

// 프로퍼티 동적 생성
person.hobby = 'golf';

console.log(person);

let copy = person;

console.log(copy);

copy.name = 'Sora';

console.log(person); //어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받는다.
