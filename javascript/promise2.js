// Promise 생성자 함수를 new와 함께 호출하면 프로미스를 생성한다.(Promise 객체)
// Promise 생성자 함수가 인수로 전달받은 콜백 함수 내부에서 비동기 처리를 수행한다. 이때 비동기 처리가 성공하면 콜백 함수의 인수로 전달받은 resolve함수를 호출하고, 비동기 처리가 실패하면 reject함수를 호출한다.

// const promiseGet = (url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.onload = () => {
//       if (xhr.status === 200) {
//         // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
//         console.log(JSON.parse(xhr.response));
//         resolve(JSON.parse(xhr.response));
//       } else {
//         // 에러 처리를 위해 reject 함수를 호출한다.
//         reject(new Error(xhr.status));
//       }
//     };
//   });
// };

// promiseGet('https://jsonplaceholder.typicode.com');

const promise = () => {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
};

promise().then((data) => {
  console.log(data);
});

const fulfilled = new Promise((resolve) => resolve(1));

console.log(fulfilled);

// const rejected = new Promise((_, reject) =>
//   reject(new Error('error occurred'))
// );

// 프로미스는 현재 비동기 처리가 어떻게 진행되고 있는지를 나타내는 상태 정보를 갖는다.
/**
 * pending 비동기 처리가 아직 수행되지 않은 상태
 * fulfilled 비동기 처리가 수행된 상태(성공)
 * rejected 비동기 처리가 수행된 상태(실패)
 */

// 프로미스의 상태는 resolve 또는 reject 함수를 호출하는 것으로 결정된다.
// 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체다.

/**
 * 프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속 처리를 해야 한다. 예를 들어, 프로미스가 fulfilled 상태가 되면 프로미스의 처리 결과를 가지고 무언가를 해야 하고,
 * 프로미스가 rejected 상태가 되면 프로미스의 처리 결과(에러)를 가지고 에러 처리를 해야 한다. 이를 위해 프로미스는 후속 메서드 then, catch, finally를 제공한다.
 * 프로미스의 비동기 처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한 콜백 함수가 선택적으로 호출된다.
 */
// then 메서드 - 두개의 콜백 함수를 인수로 전달받는다. 첫 번째 콜백 함수는 비동기 처리가 성공했을 때 호출되는 성공 처리 콜백 함수이며, 두 번째 콜백 함수는 비동기 처리가 실패했을 때 호출되는 실패 처리 콜백 함수다.
// then 메서드의 두 번째 콜백 함수는 첫 번째 콜백 함수에서 발생한 에러를 캐치하지 못하고 코드가 복잡해져서 가독성이 좋지 않다.
new Promise((resolve) => resolve('fulfilled')).then(
  (v) => console.log(v),
  (e) => console.e(e)
);

// catch 메서드 - catch 메서드의 콜백 함수는 프로미스가 rejected 상태인 경우만 호출된다.
// catch 메서드를 모든 then 메서드를 호출한 이후에 호출하면 비동기 처리에서 발생한 에러뿐만 아니라 then 메서드 내부에서 발생한 에러까지 모두 캐치할 수 있다.
new Promise((_, reject) => reject('rejected')).catch(
  (v) => console.log(v),
  (e) => console.error(e)
);

// finally 메서드 프로미스의 성공 또는 실패와 상관없이 무조건 한 번 호출된다. 프로미스의 상태와 상관없이 공통적으로 수행해야 할 처리 내용이 있을 때 유용하다.
new Promise(() => {}).finally(() => console.log('finally'));

// 프로미스 체이닝 - then, catch, finally 후속 처리 메서드는 언제나 프로미스를 반환하므로 연속적으로 호출할 수 있다.
// 만약 후속 처리 메서드의 콜백 함수가 프로미스가 아닌 값을 반환하더라도 그 값을 암묵적으로 resolve 또는 reject하여 프로미스를 생성해 반환한다.

// 프로미스는 프로미스 체이닝을 통해 비동기 처리 결과를 받아 후속 처리를 하므로 비동기 처리를 위한 콜백 패턴에서 발생하던 콜백 헬이 발생하지 않는다. 다만 프로미스도 콜백 패턴을 사용하므로 콜백 함수를 사용하지 않는 것은 아니다.
// 콜백 패턴은 가독성이 좋지 않다. 이 문제는 ES8에서 도입된 async/await를 통해 해결할 수 있다. async/await를 사용하면 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.

/** Promise.all  */
// 여러 개의 비동기 처리를 모두 병렬 처리할 때 사용한다.
// 만약 여러 개의 비동기 처리가 서로 의존하지 않고 개별적으로 수행되면 즉, 앞선 비동기 처리 결과를 다음 비동기 처리가 사용하지 않는다면 비동기 처리를 순차적으로 처리할 필요 없다.
// Promise.all 메서드는 인수로 전달받은 배열의 프로미스가 하나라도 rejected 상태가 되면 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료한다.

const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 1000));

const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2)), 3000);

const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3)), 2000);

const requestData4 = () =>
  new Promise((_, reject) => setTimeout(() => reject(4)), 2000);

// 전달받은 모든 프로미스가 모두 fulfilled 상태가 되면 모든 처리 결과를 배열에 저장해 새로운 프로미스를 반환한다.
// Promise.all 메서드가 종료하는 데 걸리는 시간은 가장 늦게 fulfilled상태가 되는 프로미스의 처리시간보다 조금 더 길다.
Promise.all([requestData1(), requestData2(), requestData3()]).then((data) => {
  console.log(data);
});

/** Promise.race  */
// Promise.race - Promise.race 메서드는 Promise.all 메서드와 동일하게 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다.
// Promise.race 메서드는 Promise.all 메서드처럼 모든 프로미스가 fulfilled된 상태가 되는 것을 기다리는 것이 아니라 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환한다.
// Promise.race 메서드에 전달된 프로미스가 하나라도 rejected 상태가 되면 에러를 reject하는 새로운 프로미스를 즉시 반환한다.

Promise.race([requestData1(), requestData2(), requestData3()]).then((data) => {
  console.log(data); // 가장 먼저 fulfilled 상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환한다.
});

/** Promise.allSettled  */
// Promise.allSettled 메서드는 프로미스를 요소로 갖는 배열 등의 이터러블을 인수로 전달받는다. 그리고 전달받은 프로미스가 모두 settled 상태(비동기 처리가 수행된 상태), 즉 fulfilled 또는 rejected상태가 되면 처리 결과를 배열로 반환한다.
// ES11(ECMAScript 2020)에 도입된 Promise.allSettled 메서드는 IE를 제외한 대부분의 모던 브라우저에서 지원한다.

Promise.allSettled([
  requestData1(),
  requestData2(),
  requestData3(),
  requestData4(),
]).then((data) => {
  console.log(data);
});

// Promise.allSettled 메서드가 반환한 배열에는 fulfilled 또는 rejected 상태와는 상관없이 Promise.allSettled 메서드가 인수로 전달받은 모든 프로미스들의 처리 결과가 모두 담겨 있다.
