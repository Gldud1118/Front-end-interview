/**
 * 제너레이터는(generator) 함수의 실행을 중간에 멈추고 재개할 수 있는 독특한 기능이다.
 * 실행을 멈출 때 값을 전달할 수 있기 때문에 반복문에서 제너레이터가 전달하는 값을 하나씩 꺼내서 사용할 수 있다.
 * 이는 배열이 반복문에서 사용되는 방식과 같다. 다만 제너레이터는 배열과 달리 값을 미리 만들어 놓지 않는다. 값을 미리 만들어 놓으면
 * 불필요하게 메모리를 사용하는 단점이 있다. 제너레이터를 사용하면 필요한 순간에 값을 계산해서 전달할 수 있기 때문에
 * 메모리 측면에서 효율적이다. 제너레이터는 별표와 함께 정의된 함수와 그 함수가 반환하는 제너레이터 객체로 구성된다.
 */

// yield를 사용하면 함수의 실행을 멈출 수 있다.
function* f1() {
  yield 10;
  yield 20;
  return 'finished';
}

const gen = f1();

// next메서드를 호출해야 실행된다. next메서드가 반환하는 객체는 value와 done이라는 속성값을 가진 객체이다.
function* f2() {
  console.log('f2-1');
  yield 10;
  console.log('f2-2');
  yield 20;
  console.log('f2-3');
  return 'finished'; // return키워드는 done을 true로 만드는 효과가 있다.
}

const gen2 = f2();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.return('abc'));
console.log(gen2.next()); //{value: undefined , done:true} 아무리 next를 호출해도 한번 done이 true가 되면 그 이후에 실행되지 않는다.

function* f3() {
  try {
    console.log('f3-1');
    yield 10;
    console.log('f3-2');
    yield 20;
  } catch (e) {
    console.log('f3-catch', e);
    yield 30;
    console.log('f3-3');
    yield 40;
    console.log('f3-4');
  }
}

const gen3 = f2();
console.log(gen3.next());
// console.log(gen3.throw('some error')); //throw메서드가 호출되면 예외가 발생한 것으로 인식한다.
console.log(gen3.next());
console.log(gen3.next());

//제너레이터는 iterable이면서 iterator이다.
function* f4() {}

const gen4 = f4();

console.log(gen4[Symbol.iterator]() === gen4); // 함수를 호출하면 자기 자신이 된다.

function* f5() {
  yield 10;
  yield 20;
  yield 30;
}

for (const v of f5()) {
  // iterable로부터 iterator를 얻을 수 있다. done 속성값이 참이 될 때까지 반복한다.
  console.log(v);
}

const arr = [...f5()]; //done 속성값이 참이 될 때까지 값을 펼친다.
console.log(arr);

/**
 * 제너레이터 함수와 일반 함수의 차이
 * - 제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다. 함수의 제어권을 함수가 독점하는 것이 아니라 함수 호출자에게 양도할 수 있다는 것을 의미한다.
 * - 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다. 일반 함수는 함수가 실행되고 있는 동안에는 함수 외부에서 함수 내부로 값을 전달하여 함수의 상태를 변경할 수 없다. 제너레이터 함수는 함수 호출자와 양방향으로 함수의 상태를 주고받을 수 있다. 다시 말해, 제너레이터 함수는 함수 호출자에게 상태를 전달할 수 있고 함수 호출자로부터 상태를 전달받을 수도 있다.
 * - 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다. 일반 함수를 호출하면 함수 코드를 일괄 실행하고 값을 반환한다. 제너레이터 함수를 호출하면 함수 코드를 실행하는 것이 아니라 이터러블이면서 동시에 이터레이터인 제너레이터 객체를 반환한다.
 * - 제너레이터 함수를 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 제너레이터 객체를 생성해 반환한다. 제너레이터 함수가 반환한 제너레이터 객체는 이터러블이면서 동시에 이터레이터이다.
 *
 *
 *
 */

function* genFunc() {
  yield 1;
}

// 제너레이터 함수는 화살표 함수로 정의할 수 없다.

// const getArrowFunc = * () => yield 1; SyntaxError: Unexpected token

// 제너레이터 함수는 new 연산자와 함께 생성자 함수로 호출할 수 없다.
// new genFunc(); TypeError: genFunc is not a constructor

const generator = genFunc();

// 제너레이터 객체의 next메서드는 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다.
const generatorNext = generator.next();

// next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에는 yield 표현식에서 yield된 값이 할당되고 done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 불리언 값이 할당된다.
console.log(generatorNext.value);
console.log(generatorNext.done);
