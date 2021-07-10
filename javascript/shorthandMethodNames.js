// 단축 메서드명
//function키워드를 생략할 수 있다.
function formatMessage(name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    // save: function () {
    // save message
    // },
    save() {
      // save message
    },
  };
}
