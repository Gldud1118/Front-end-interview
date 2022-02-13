//null과 undefined 둘다 값이 없음을 나타내지만 목적과 의미가 다르다.
//undefined - 선언이 되었지만 값이 할당되어 있지 않은 상태 이는 개발자가 의도적으로 할당하기 위한 값이 아니라 자바스크립트 엔진이 변수를 초기화할 때 사용하는 값이다.
// 자바스크립트 엔진이 변수를 초기화하는 데 사용하는 undefined를 개발자가 의도적으로 변수에 할당한다면 undefined의 본래 취지와 어긋날뿐더러 혼란을 줄 수 있으므로 권장하기 않는다.
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
