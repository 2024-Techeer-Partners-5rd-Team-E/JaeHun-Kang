/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할때
   * 2) private한 값을 반환할 때
   * 함수처럼 보이지만, getter는 그냥 key값으로 value를 가져오는 것
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  /**
   * 값을 새로 저장할 때
   * parameter를 무조건 하나 받아야함
   * 정의된 값을 바꾸는 걸 선호하지는 않음
   */
  set setName(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = "장원영";
console.log(yuJin);

class IdolModel2 {
  // private값, 다른 곳에서 참조 못함
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  // get을 이용해서 private값을 가져옴
  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}
const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = "Code Factory";
console.log(yuJin2.name);                  