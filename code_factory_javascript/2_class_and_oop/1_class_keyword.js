/**
 * Class Keyword
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// constructor - 생성자

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
