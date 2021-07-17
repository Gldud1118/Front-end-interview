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
