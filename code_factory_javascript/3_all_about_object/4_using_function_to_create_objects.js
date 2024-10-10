/**
 * Using function to create objects
 */
function IdolModel(name, year) {
  if (!new.target) {
    return new IdolModel(name, year); // new 키워드를 쓰든지 말든지 IdolModel type의 객체를 사용할 수 있음
  }

  this.name = name;
  this.year = year;

  // 되지만 하시마시게
  // Object({})를 반환해버리면...?
  // return {};

  // primitive를 반환해버리면...? 근데 굳이?
  // return 123;

  this.dance = function () {
    return `${this.name}이 춤을 춘데요`;
  };
}
const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.dance());
const yuJin2 = IdolModel("안유진", 2003);
console.log(yuJin2); // undefined

// global (하지말라는 거)
// 파일이 실행되었을 때 자동으로 생성됌
// JS 엔진을 node.js 실행할 때 필요한 값들을 모두 들고있다
console.log(global.name);

const IdolModeArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

const yuJin3 = new IdolModeArrow("안유진", 2003); // Arrow 함수에서는 사용 불가능. 일반 함수에서만 가능