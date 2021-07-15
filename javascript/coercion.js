/**
 * 자바스크립트 엔진은 표현식을 평가할 때 개발자의 의도와는 상관없이 코드의 문맥을 고려해 암묵적으로 데이터 타입을 강제 변환(암묵적 타입 변환)
 * 할 떄가 있다. 암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환한다.
 */

// 코드의 문맥에 부합하지 않는 다양한 상황이 올 수 있다.
console.log('10' + 2); //102
console.log(5 * '10'); //50
console.log(!0); //true

// 문자열 타입으로 변환 - 자바스크립트 엔진은 문자열 연결 연산자 표현식을 평가하기 위해 문자열 연결 연산자의 피연산자 중에서 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환한다.
// 숫자 타입
console.log(1 + '2');
console.log(`1+1=${1 + 1}`);
console.log(0 + ''); //"0"

// 불리언 타입
console.log(true + ''); //"true"
console.log(false + ''); //"false"

// null 타입
console.log(null + ''); //"null"

// undefined 타입
console.log(undefined + ''); //"undefined"

// 심볼 타입
// console.log(Symbol() + ''); Cannot convert a Symbol value to a string

// 숫자 타입으로 변환 -

// 산술 연산자의 역할은 숫자 값을 만드는 것이다. 따라서 산술 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야 한다.
console.log(1 - '1'); //0
console.log(1 * '10');
console.log(1 / 'one'); //NaN

// 자바스크립트 엔진은 비교 연산자 표현식을 평가하기 위해 비교 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(5 == '5'); //true
console.log(3 > '2'); //true

// 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환을 수행한다.
console.log(+''); //0
console.log(+true); //1
console.log(+null);

// 불리언 타입으로 변환 - if문이나 for문과 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언 값, 즉 논리적 참/거젓으로 평가되어야 하는 표현식이다.
// 자바스크립트 엔진은 평가 결과를 불리언 타입으로 암묵적 타입 변환한다.

if (true) {
  console.log('1'); //1
}

if ('str') {
  console.log('2'); //2
}
