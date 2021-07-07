//자바스크립트의 모든 객체에는 프로토타입이라는 숨겨진 속성이 있다.
//프로토타입은 null 또는 object 타입이다.

const food = {
  name: 'pasta',
};

const article = {
  id: 1,
  title: 'Life is good',
};

const blog = {
  section: 'Food',
};

Object.setPrototypeOf(article, food);
Object.setPrototypeOf(blog, article);
//article.__proto__ = food
//프로토타입에 접근하는 안전하고 공식적인 방법은 getPrototypeOf 함수를 사용하는 것이다.
console.log(Object.getPrototypeOf(article));
console.log(article.name); //자기 자신에서 속성이 없을 떄 프로토타입에서 그 속성을 찾는다.
console.log(blog.title, blog.name);
console.log(blog.__proto__.__proto__.name);
console.log(blog.__proto__.title);

for (const prop in article) {
  console.log(prop);
}

for (const prop in article) {
  if (article.hasOwnProperty(prop)) console.log(prop);
}

for (const prop in Object.keys(article)) {
  console.log(prop);
}

//생성자 함수
function Item(id, name, price) {
  // this = {}
  this.id = id;
  this.name = name;
  this.price = price;
  // return this;
}

//함수의 프로토타입과 프로토타입 속성은 다르다. 프로토타입 속성은 함수에만 있는 특별한 속성
//new 키워드로 생성된 객체의 프로토타입은 자신을 만들 때 사용한 그 생성자 함수의 prototype 속성과 같다.
const item = new Item('1', 'cup', 3000);
console.log(item.name);

console.log(Item.prototype);
console.log(typeof Item.prototype);
console.log(Object.getPrototypeOf(item) === Item.prototype); //true

console.log(Object.getPrototypeOf(Item) === Item.prototype); //false
console.log(Object.getPrototypeOf(item) === Item.prototype); //true
console.log(Object.getPrototypeOf(Item.prototype) === Object.prototype); //true
console.log(Object.getPrototypeOf(Item) === Function.prototype); //true
console.log(Item.prototype.constructor === Item);
console.log(Item.constructor === Function);

console.log(Object.getPrototypeOf(Object) === Function.prototype); //true
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype); //true
console.log(Object.getPrototypeOf(Object.prototype) === null); //true
