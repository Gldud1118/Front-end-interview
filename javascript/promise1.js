/**
 * 자바스크립트에서 비동기 처리를 하는 방식은 두가지가 있는데 promise와 콜백 패턴이다. 콜백 패턴은 Promise가 보급되기 전에 많이 쓰였다.
 * Promise - 비동기 상태를 값으로 다룰 수 있는 객체, Promise를 사용하면 비동기 프로그래밍을 할 때 동기 프로그래밍 형식으로 코드를 작성할 수 있다.
 * Promise 3가지 상태
 * 대기 중(pending) - 비동기 처리가 끝나지 않았을 때
 * 아래 둘은 settled 상태라고도 부른다. settled상태가 되면 더 이상 다른 상태로 변경되지 않는다.
 * 성공(fulfilled)
 * 실패(rejected)
 * Promise객체는 상태 말고도 데이터를 입력할 수 있다.
 * 비동기 처리가 끝난 후 처리할 일을 then메서드로 정의할 수 있다.
 * resolve는 비동기 작업을 성공적으로 완료해 결과를 값으로 반환할 떄 호출해야 하고,
 * reject는 작업 실패하여 오류의 원인을 반환할 떄 호출하면 된다.
 */

//콜백 패턴
function requestData1(callback) {
  setTimeout(() => {
    callback({ name: 'abc', age: 23 });
  }, 1000);
}

function requestData2(callback) {
  setTimeout(() => {
    callback({ name: 'def', age: 45 });
  }, 1000);
}

function onSuccess1(data) {
  console.log(data);
  requestData2(onSuccess2);
}

function onSuccess2(data) {
  console.log(data);
}

console.log('call requestData');
requestData1(onSuccess1);

const p1 = new Promise((resolve, reject) => {});
const p2 = Promise.reject('error message');
// const p3 = Promise.resolve(param);

function requestData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

function requestData4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    });
  });
}

requestData3()
  .then((data) => {
    console.log(data);
    return requestData4();
  })
  .then((data) => {
    console.log(data);
    return data + 1;
  })
  .then((data) => {
    console.log(data);
    return new Error('some error');
  })
  .then(null, (error) => {
    console.log('error!!!');
  })
  .then((data) => {
    console.log(data);
  });

requestData4().then((data) => {
  console.log(data);
});

//then 메서드는 항상 연결된 순서대로 호출 Promise를 리턴하고 두 개의 콜백함수를 인수로 받는다. 하나는 Promise가 이행했을 떄, 다른 하나는 거부했을 때를 위한 콜백이다
Promise.reject('err')
  .then(() => console.log('then 1'))
  .then(() => console.log('the2'))
  .then(
    () => console.log('then 3'),
    () => console.log('then 4')
  )
  .then(
    () => console.log('then 5'),
    () => console.log('then 6')
  );

//catch 메서드 - 예외 처리
Promise.reject(1).then(null, (error) => {
  console.log(error);
});

//then의 두번째 함수를 이용하는 것보다 catch를 이용하는게 좀 더 낫다
Promise.reject(1).catch((error) => {
  console.log(error);
});

Promise.resolve(1)
  .then(() => {
    throw new Error('some error');
  })
  .catch((error) => {
    console.log(error);
  });

//then과 마찬가지로 catch도 Promise객체를 반환한다.
Promise.reject(10)
  .then((data) => {
    console.log('then1:', data);
    return 20;
  })
  .catch((data) => {
    console.log('catch:', data);
    return 30;
  })
  .then((data) => {
    console.log('then2:', data);
  });

//finally
Promise.reject(10)
  .then((data) => {
    console.log('onThen:', data);
    return data + 1;
  })
  .catch((error) => {
    console.log('onCatch');
    return 100;
  })
  //fulfilled와 rejected 상태를 모두 처리할 수 있다. 데이터가 넘어오지 않는다. 이전에 있던 Promise객체를 그대로 반환한다.
  .finally(() => {
    console.log('onFinally');
  })
  .then((data) => {
    console.log('onThen', data);
    return data + 1;
  });

Promise.resolve(10)
  .then((data) => {
    console.log('onThen:', data);
    return data + 1;
  })
  .catch((error) => {
    console.log('onCatch');
    return 100;
  })
  //fulfilled와 rejected 상태를 모두 처리할 수 있다. 데이터가 넘어오지 않는다. 이전에 있던 Promise객체를 그대로 반환한다.
  .finally(() => {
    console.log('onFinally');
  })
  .then((data) => {
    console.log('onThen', data);
    return data + 1;
  });
