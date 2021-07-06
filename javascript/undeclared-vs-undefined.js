//undeclared - var, let, const 등의 식별자를 통해서 선언되어 있지 않고 값이 할당
test = 'test';

function foo() {
  x = 1;
}

foo();
console.log(test);
console.log(x);

//undefined - 선언이 되었지만 값이 할당되어 있지 않은 상태
var user1;
let user2;
console.log(user1);
console.log(user2);
console.log(typeof user1);
