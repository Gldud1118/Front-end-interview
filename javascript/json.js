const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis'],
};

//객체를 JSON포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);

console.log(json); //{"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}
console.log(typeof json); // string

//객체를 JSON포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(prettyJson);
/**
 * {
  "name": "Lee",
  "age": 20,
  "alive": true,
  "hobby": [
    "traveling",
    "tennis"
  ]
}
 */

//JSON 포맷의 문자열을 객체로 변환한다.
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);

const todos = [
  { id: 1, language: 'HTML', completed: false },
  { id: 1, language: 'CSS', completed: true },
  { id: 1, language: 'Javascript', completed: true },
];

//배열을 JSON 포맷의 문자열로 변환한다.
const json2 = JSON.stringify(todos);
console.log(json2);

//JSON 포맷의 문자열을 배열로 변환한다. 배열의 요소까지 객체로 변환한다.
const parsed2 = JSON.parse(json2);
console.log(parsed2);
