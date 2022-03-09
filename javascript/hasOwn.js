// Object.hasOwn()은 Object.hasOwnProperty()를 대체한다.

let foo = {};
console.log(Object.hasOwn(foo, 'prop'));

foo.prop = 'exists';
console.log(Object.hasOwn(foo, 'prop'));

foo.prop = null;
console.log(Object.hasOwn(foo, 'prop'));

foo.prop = undefined;
console.log(Object.hasOwn(foo, 'prop'));

let example = {};
example.prop = 'exists';

// 'hasOwn'은 직접적인 속성의 경우에만 true를 반환한다.
console.log(Object.hasOwn(example, 'prop'));
console.log(Object.hasOwn(example, 'toString'));
console.log(Object.hasOwn(example, 'hasOwnProperty'));

// 'in' 연산자는 직접 또는 상속된 속성에 대해 true를 반환한다.
console.log('prop' in example);
console.log('toString' in example);
console.log('hasOwnProperty' in example);
