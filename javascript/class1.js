//클래스 - 함수와 프로토타입 기반으로 만들어져 있음
class Person {
  age = 23; //클래스 필드 - 이렇게 등호를 사용하면 프로토타입이 아니라 객체에 할당이 된다.
  // constructor에서 멤버 면수를 만들면 이 값은 프로토타입 객체에 들어가는 것이 아니고 각 객체에 할당
  constructor(name) {
    this._name = name;
  }

  //getter - 만약 getter만 사용하면 read-only처럼 사용 가능
  get name() {
    return this._name;
  }

  //setter
  set name(value) {
    this._name = value;
  }

  printName = () => {
    console.log(this.name); //멤버변수 뿐만 아니라 메서드에서도 등호 사용 가능
  };

  sayHi() {
    console.log(`Hi! ${this._name}`);
  }

  getRandom() {
    return Math.floor(Math.random() * 10);
  }
}

const person = new Person('Bob');
person.sayHi();

console.log(typeof Person); //function
console.log(Object.keys(Person.prototype)); //[] 클래스의 프로토타입 객체는 조회할 수 없게 설정되어 있어서 Object.keys()로는 안된다.
console.log(Object.getOwnPropertyNames(Person.prototype)); //Object.getOwnPropertyNames()사용하여 조회 ['constructor', name, sayHi]
console.log(Object.keys(person)); //['name']

console.log(Person.prototype.constructor) === Person; //true
console.log(Person.prototype.sayHi); //true

//getter호출
console.log(person.name); //Bob
//setter호출
person.name = 'Ella'; //Ella
console.log(person.name);

//상속

class Engineer extends Person {
  constructor(name, language) {
    super(name); //super를 호출하면 부모의 constructor가 호출이 된다. 호출하지 않으면 에러가 난다.
    this.language = language;
  }

  // 메서드 오버라이딩
  sayHi() {
    super.sayHi(); //부모의 메서드를 호출할 때
    console.log(`Hi ${this.language} is great`);
    console.log(`Your dice number is ${this.getRandom()}`);
  }

  getRandom() {
    return Math.floor(Math.random() * 10) + 20;
  }
}

//constructor는 반드시 정의하지 않아도 된다. 만약 constructor를 호출하지 않는다면 아래와 같은 constructor가 기본으로 사용 됌
// class Engineer extends Person {
//   constructor(...args) {
//     super(...arge);
//   }
// }

const engineer = new Engineer('Joe', 'react');
engineer.sayHi();

//클래스 상속은 프로토타입을 기반으로 구현되어 있다. 모든 클래스는 프로토타입 객체를 갖고 있다.
console.log(Object.getPrototypeOf(Engineer.prototype) === Person.prototype); //프로토타입 체인
console.log(Object.getPrototypeOf(Engineer) === Person); //생성자 함수 자체도 프로토타입 체인으로 연결
console.log(Engineer.prototype.__proto__ === Person.prototype);
Object.setPrototypeOf(Engineer.prototype, {});

// 클래스 필드 - 부모 클래스에서 클래스 필드로 메서드를 정의하면 자식에서 super를 사용해서 호출할 수 없다
console.log(Person.prototype.age, Person.prototype.printName); //undefined undefined
const person1 = new Person('Jane');
const person2 = new Person('Chris');
person1.age = 100;
console.log(person1.age, person2.age);
