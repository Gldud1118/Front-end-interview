/**
 * async, await는 비동기 프로그래밍을 동기 프로그래밍 방식으로 작성하는데 특화된 문법이다.
 * async await를 이용해서 비동기 코드를 작성하면 Promise의 then 메서드보다 가독성이 좋아진다.
 * async, await가 Promise를 완전히 대체하는 것은 아니다. Promise는 비동기 상태를 값으로 다룰 수 있기 때문에 async, await보다 큰 개념이다.
 * async, await는 Promise를 기반으로 동작한다. async, await를 사용하면 Promise의 then/catch/finally 후속 처리 메서드에 콜백 함수를 전달해서 비동기 처리 결과를 후속 처리할 필요 없이 마치 동기 처리처럼 Promise를 사용할 수 있다.
 * Promise는 객체로 존재하지만 async, await는 함수에 적용되는 개념이다.
 * await키워드는 오직 async, await 함수 내부에서만 사용할 수 있다.
 */

async function getData() {
  return 123;
}

//async await 함수는 언제나 Promise객체를 반환하므로 then메서드를 사용하는 것이 가능하다.
getData().then((data) => console.log(data));

//async await 함수 내부에서 반환하는 값이 Promise라면 그 상태와 데이터를 그대로 반환한다.
async function getData2() {
  return Promise.resolve(123);
}

getData2()
  .then((data) => console.log('fulfilled', data))
  .catch((data) => console.log('rejected', data));

function requestData3(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('requestData', value);
      resolve(value);
    }, 1000);
  });
}

// async 함수 내부에서 await 키워드를 사용할 수 있다. await 키워드로 비동기 처리를 기다리면서 동기 프로그래밍 방식으로 코드를 작성할 수 있다.
// await 키워드는 Promise가 settled 상태(비동기 처리가 수행된 상태)가 될 때까지 대기하다가 settled 상태가 되면 Promise가 resolved한 처리 결과를 변수에 할당한다.
async function printData() {
  const data1 = await requestData3(10);
  const data2 = await requestData3(20);
  console.log('printData');
  console.log(data1, data2);
}

printData();

//async await와 Promise는 비동기 프로그래밍을 프로그래밍 방식으로 작성할 수 있게 해준다.
//async await와 Promise의 비교 - 비동기 함수 간의 의존성이 높아질수록 async await와 Promise의 가독성 차이는 더 선명하게 드러난다.

function asyncFunc1() {
  return Promise.resolve(123);
}

function asyncFunc2(value) {
  const data = 456 + value;
  return Promise.resolve(data);
}

function asyncFunc3(value) {
  const data = 789 + value;
  return Promise.resolve(data);
}

function asyncFunc4() {
  return Promise.resolve(10);
}

function asyncFunc5() {
  return Promise.resolve(20);
}

function getDataPromise() {
  asyncFunc1()
    .then((data) => {
      console.log(data);
      return asyncFunc2(data);
    })
    .then((data) => {
      console.log(data);
    });
}

function getDataPromiseAll() {
  return asyncFunc1()
    .then((data1) => Promise.all([data1, asyncFunc2(data1)]))
    .then(([data1, data2]) => {
      return asyncFunc3(data1, data2);
    });
}

getDataPromise();
getDataPromiseAll();

async function getDataAsync() {
  const data1 = await asyncFunc1();
  console.log(data1);
  const data2 = await asyncFunc2(data1);
  console.log(data2);
  return asyncFunc3(data1, data2);
}

getDataAsync();

//async await에서 여러 비동기 함수를 병렬로 처리하는 방법
async function getData3() {
  //두 함수 사이에 의존성이 없다면 동시에 실행하는게 더 빠르다
  const data1 = await asyncFunc4();
  const data2 = await asyncFunc5();
  // ...
}

async function getParallel1() {
  //Promise객체는 생성과 동시에 비동기 코드가 실행이 된다. 두개의 Promise객체를 먼저 생성을 하고 await키워드를 나중에 사용하면 병렬로 실행하는 코드가 된다.
  const p1 = asyncFunc4();
  const p2 = asyncFunc5();
  const data1 = await p1;
  const data2 = await p2;
  console.log({ data1, data2 });
}

async function getParallel2() {
  const [data2, data2] = await Promise.all([asyncFunc4(), asyncFunc5()]);
}

getParallel1();
getParallel2();

// async await함수에서 예외를 처리하는 방법 - async await 함수 내부에서 발생하는 예외는 try catch문으로 처리하는 게 좋다.
function doAsync() {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('doAsync');
      resolve(value);
    }, 1000);
  });
}

function doSync() {
  return 123;
}

async function exceptionHandling() {
  try {
    await doAsync();
    return doAsync();
    //위의 두 함수에서 발생하는 모든 예외가 catch문에서 처리된다. 만약 exceptionHandling함수가 async await 함수가 아니었다면 doAsync함수에서 발생하는 예외는 catch문에서 처리되지 않는다.
    //이는 doAsync함수의 처리가 끝나는 시점을 알 수 없기 때문이다.
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
