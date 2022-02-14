/**
 * 콜백 함수를 통해 비동기 처리 결과에 대한 후속 처리를 수행하는 함수가 비동기 처리 결과를 가지고 또 다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡되가 높아지는 현상이 발생하는 데, 이를 콜백 헬이라 한다.
 * 자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다. 하지만 전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하며 여러 개의 비동기 처리를 한번에 처리하는데도 한계가 있다.
 */

const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  };
};

const url = 'https://jsonplaceholder.typicode.com';

get(`${url}/posts/1`, ({ userId }) => {
  console.log(userId);

  // post의 userId를 사용하여 user 정보를 취득
  get(`${url}/users/${userId}`, (userInfo) => {
    console.log(userInfo);
  });
});

// 이 예제를 보면 GET 요청을 통해 서버로부터 응답을 취득하고 이 데이터를 사용하여 또 다시 GET요청을 한다. 콜백 헬은 가독성을 나쁘게 하여 실수를 유발하는 원인이 된다.
