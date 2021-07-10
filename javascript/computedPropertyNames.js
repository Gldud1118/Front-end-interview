//계산된 속성명(computed property names) - 객체의 속성명을 동적으로 결정하기 위해서 나온 문법이다.

function makeObject1(key, value) {
  let obj = {};
  obj[key] = value;
  return obj;
}

function makeObject1(key, value) {
  return {
    [key]: value, //객체를 만들면서 동시에 동적으로 속성 이름을 결정할 수가 있다. 대괄호 안에 변수를 입력할 수 있다.
  };
}
