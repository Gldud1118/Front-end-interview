/**
 * 함수를 명시적으로 호출하지 않고 일정 시간이 경과된 이후에 호출되도록 함수 호출을 예약하려면 타이머 함수를 이용한다.
 * 자바스크립트는 타이머를 생성할 수 있는 타이머 함수 setTimeout과 setInterval, 타이머를 제거할 수 있는 타이머 함수 clearTimeout, clearInterval
 * 을 제공한다. 타이머 함수는 ECMAScript 사양에 정의된 빌트인 함수가 아니다. 하지만 브라우저 환경과 Node.js 환경에서 모두
 * 전역 객체의 메서드로서 타이머 함수를 제공한다. 즉, 타이머 함수는 호스트 객체다.
 * 자바스크립트 엔진은 싱글 스레드로 동작한다. 이런 이유로 타이머 함수 setTimeout과 setInterval은 비동기 처리 방식으로 동작한다.
 */

// setTimeout 함수는 두 번째 인수로 전달받은 시간으로 단 한 번 동작하는 타이머를 생성한다. 이후 타이머가 만료되면 첫 번째 인수로 전달받은 콜백 함수가 호출된다.

// setTimeout 함수의 콜백 함수는 타이머가 만료되면 단 한 번 호출된다.
setTimeout(() => console.log('Hi'), 1000);

// 두 번째 인수(delay)를 생략하면 기본값 0이 지정된다.

// setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다.
// setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소할 수 있다.
const timerId = setTimeout(() => console.log('Hello'), 1000);

clearTimeout(timerId);

// setInterval 함수의 콜백 함수는 타이머가 만료될 때마다 반복 호출된다.
// setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다. setInterval 함수가 반환한 타이머 id는 브라우저 환경인 경우 숫자이며 Node.js 환경인 경우 객체다.
let count = 1;

const timeoutId = setInterval(() => {
  console.log(count);

  if (count++ === 5) clearInterval(timeoutId);
}, 1000);
