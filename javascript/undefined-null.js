//null과 undefined 둘다 값이 없음을 나타내지만 목적과 의미가 다르다.
//undefined - 선언이 되었지만 값이 할당되어 있지 않은 상태
var user1;
let user2;
console.log(user1);
console.log(user2);
console.log(typeof user1);

//null 값이 없음을 의도적으로 나타냄
var user3 = null;
console.log(user3);
console.log(typeof user3);
console.log(user2 == user3); //true
console.log(user2 === user3); //false
