function getDefault() {
  console.log('called getDefault');
  return 1;
}

function printLog(a = getDefault()) {
  //기본값이 사용되는 경우에만 함수 호출
  console.log({ a });
}

printLog();
printLog(3);

function required() {
  throw new Error('no parameter');
}

function printLog2(a = required()) {
  console.log({ a });
}
// 반드시 입력해야 하는 매개변수에 required함수를 입력해주면 필수값이 된다.
// printLog2(); 에러 발생

// 첫번째 매개변수를 제외한 나머지 모든 매개변수가 rest라는 매개변수에 담긴다.(배열 형태로) -rest parameter
// es6이전에는 arguments라는 키워드가 비슷한 역할을 했다. 하지만 arguments의 존재가 명시적으로 드러나지 않기 때문에 가독성이 좋지 않다.
// 또한 arguments는 배열이 아니기 때문에 배열로 변환하는 과정이 필요하다.
function printLog3(a, ...rest) {
  console.log({ a, rest });
}

printLog3(1, 2, 3);

// 명명된 매개변수(names parameter)
const numbers = [10, 20, 30, 40];
//const result1 = getValues1(numbers,5,25) 무엇을 의미하는지 알기 힘들다.
function getValue1(numbers, greaterThan, lessThan) {
  return numbers.filter((item) => greaterThan < item && item < lessThan);
}

// 명명된 매개변수는 입력하고 싶은 매개변수만 입력하면 된다.
function getValue2({
  numbers,
  greaterThan = 0,
  lessThan = Number.MAX_SAFE_INTEGER,
}) {
  return numbers.filter((item) => greaterThan < item && item < lessThan);
}

// 명명된 매개변수에서도 나머지 매개변수(rest parameter)를 사용할 수 있다.
function f1({ p1, p3, ...rest }) {
  console.log({ p1, p3, rest });
}

f1({ p1: 'a', p2: 'b', p3: 'c', p4: 'd' });
f1({ pa: 'a', p3: 'b' });

// 화살표 함수
const add = (a, b) => a + b; //명시적으로 return키워드를 작성하지 않아도 된다.
const add5 = (a) => a + 5;
const addAndReturnObject = (a, b) => ({ result: a + b });

const sum = (a, b) => {
  if (a <= 0 || b <= 0) {
    throw new Error('must be positive number');
  }

  return a + b;
};

//화살표 함수가 일반함수와 다른점은 this와 arguments가 바인딩되지 않는다는 점이다.
const printLog4 = (...rest) => {
  console.log(rest);
};
printLog4(1, 2);
