/**
 * Super and Override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요. ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  // 노래, 춤,
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  sayHello() {
    // constructor가 아닌 곳에서는 this 사용!
    // 변수값을 불러올 때는 super key를 함수 안에서 사용하면 안된다
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다`;

    // 부모 클래스의 sayHello 가져오기
    return `${super.sayHello()} ${this.part}를 맡고 있습니다.`;
  }
}

console.log("");
console.log("<Super Keyword>");
const yuJin = new FemaleIdolModel("안유진", 2003, "Vocal");
console.log(yuJin);
console.log("");

console.log("<sayHello Function>");
const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());
console.log("");
