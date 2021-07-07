//call과 apply는 Function.prototype의 메서드로 모든 함수에서 사용할 수 있다.
//call과 apply는 함수를 호출한다. 이 둘은 this로 사용할 객체와 인수 리스트를 인수로 전달받아 함수를 호출한다.
//call은 함수를 실행할 때 인수를 하나하나 전달한다면 apply는 전달한 인수를 배열로 묶어 한번에 전달한다.

function food1(item) {
  console.log('오늘 ' + this.time + '은 ' + item + '입니다');
}

function food2(item1, item2) {
  console.log(this);
  [item1, item2].forEach(function (element) {
    console.log('오늘 ' + this.time + '은 ' + element + '입니다');
  }, this);
  [item1, item2].forEach((element) => {
    console.log('오늘 ' + this.time + '은 ' + element + '입니다');
  });
}

const breakfast = {
  time: '아침',
};

const lunch = {
  time: '점심',
};

const dinner = {
  time: '저녁',
};

food1.call(breakfast, '샌드위치'); //오늘 아침은 샌드위치입니다
food1.call(lunch, '피자'); //오늘 아침은 피자입니다
food1.call(dinner, '곱창'); //오늘 아침은 곱창입니다

food2.apply(breakfast, ['주스', '샌드위치']); //오늘 아침은 샌드위치입니다
food2.apply(lunch, ['피자', '파스타']); //오늘 아침은 피자입니다
food2.apply(dinner, ['곱창', '볶음밥']); //오늘 아침은 곱창입니다
