/**
 * optional chaining연산자는 참조나 기능이 undefined 또는 null일 수 있을 때 연결된 객체의 값에 접근하는 단순화할 수 있는 방법을 제공한다.
 */

const person = null;
const name = person && person.name;
// person.name에 접근하기 전 person가 null 또는 undefined가 아니라는 것을 암묵적으로 확인.
const name2 = person?.name;
// 아래와 같다고 볼 수 있다.
// const name2 = person === null || person === undefined ? undefined : person.name

// 함수를 호출할 때도 optional chaining을 사용할 수 있다.
// 존재하지 않을 수 있는 메서드를 호출할 때, optional chaining을 사용할 수 있다.
const food = {
  getFoodName() {
    return 'abc';
  },
};

const foodName = food.getName?.();
console.log(foodName); //undefined

function loadData(onComplete) {
  console.log('loading...');
  onComplete?.();
}

loadData(); //함수를 입력하지 않은 경우에도 문제없이 실행

// 배열의 아이템에 접근할 떄도 사용될 수 있다.
const student = { friends: null, hobby: null };

const firstStudent = student.friends?.[0];

const prop = 'type';
const type = student.hobby?.[prop];
console.log(prop);
console.log(type);

// 검사하는 단계가 많을수록 유용하다.
const secondStudent =
  student && student.friends && student.friends[0] && student.friends[0].count;

const secondStudent2 = student?.friends?.[0].count;
console.log(secondStudent2);

// nullish coalescing과 함께 사용하기 좋다.
const secondStudent3 = student?.friends?.[0].count ?? 0;
console.log(secondStudent3);
