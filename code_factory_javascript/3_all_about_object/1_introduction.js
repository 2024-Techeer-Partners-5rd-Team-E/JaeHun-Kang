/**
 * All about Object
 *
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) Object를 생성해서 객체 생성 - 기본기 {}
 * 2) Class를 instance화 해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

const yuJin = {
  name: "안유진",
  year: "2003",
};

console.log(yuJin);

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
console.log(new IdolModel("안유진", 2003));

/**
 * this keyword로 property를 할당해준 경우에만
 * new keyword를 넣고서 객체를 생성할 수 있다
 * 
 * 이것이 바로 생성자 함수
 */
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}
const gaEul = new IdolFunction("가을", 2002);
console.log(gaEul);