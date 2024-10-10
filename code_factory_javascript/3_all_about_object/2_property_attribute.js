/**
 * Preperty Attribute (프로퍼티 속성)
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                      설정할 때 호출되는 함수로 구성된 프로퍼티
 *                      예를 들면 getter와 setter
 */

const yuJin = {
  name: "안유진",
  year: 2003,
};

// Object -> 생성자 함수이거나 클래스의 이름
// Class에 직접적으로 붙어이는 값 즉, 귀속된 값 static => .getOwnPropertyDescriptor
// console.log(Object.getOwnPropertyDescriptor(프로퍼티 속성을 알고 싶은 객체 넣기, 가져오고 싶은 정보의 키값 넣기));
console.log(Object.getOwnPropertyDescriptor(yuJin, "year"));

/**
 * 외워야함...
 * 
 * 1) value - 실제 프로퍼티의 값
 *
 * 2) writable - 값을 수정할 수 있는지 여부.
 *               false로 설정하면 프로퍼티 값을 수정할 수 없다
 *
 * 3) enumerable - 열거가 가능한지 여부.
 *                 for...in loop 등을 사용할 수 있으면 true를 반환한다
 *
 * 4) configurable - 프로퍼티 속성의 재정의가 가능한지 여부
 *                   false일 경우 프로퍼티 삭제나 속성 변경이 금지된다
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능하다
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));

console.log(Object.getOwnPropertyDescriptors(yuJin));

/**
 * 1) 클래스에서의 getter와 setter
 *    - 클래스 안에서 메서드 정의할 때는 함수처럼 메서드 작성
 *    - JS 문법에서 클래스는 함수 선언 방식과 동일한 방식
 *    - 따라서, method나 getter, setter 사이에 쉼표를 넣지 않음
 *
 * 2) 객체 리터럴에서의 getter와 setter
 *    - 객체 리터럴은 속성들의 목록을 작성하는 방식
 *    - JS 문법에서 객체 리터럴은 각 속성(ey-value)이나
 *      메서드 사이에 쉽표를 넣어 구분해야함
 *    - 따라서, get age()와 set age() 사이에 쉽표를 넣어야함
 */

/**
 * 리터럴(Literal) : 프로그래밍에서 값 자체를 나타내는 표현
 *
 * ex) let num = 42;
 *     let name = "안유진";
 *     let isActive = true;
 *
 * 여기서 42(숫자), "안유진"(문자열), true(불리언)가 리터럴
 */
const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, "age"));

// yuJin2["height"] = 172;
// console.log(yuJin2); // 가장 간단하게 선언, 모두 true가 들어감
// console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

// 직접 property attribute 정의하기
Object.defineProperty(yuJin2, "height", {
  value: 180,
  // 아래 주석 처리하면 모두 false로 변경됨
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));
console.log("");

console.log("[writable]");
/**
 * writable
 */
console.log(yuJin2);

Object.defineProperty(yuJin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

console.log("--------------------");
yuJin2.height = 172;
console.log(yuJin2); // height가 그대로 180임
console.log("");

console.log("[Enumerable]");
/**
 * Enumerable
 * 열거가 불가능하게 함
 */
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}

Object.defineProperty(yuJin2, "name", {
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

console.log("--------------------");
console.log(Object.keys(yuJin2)); // name property 사라짐
for (let key in yuJin2) {
  console.log(key);
}
console.log(yuJin2); // 열거가 불가능해서 name property가 안보임
console.log(yuJin2.name); // 값이 사라진 것은 아님
console.log("");

console.log("[Configurable]");
/**
 * Configurable
 *
 */
Object.defineProperty(yuJin2, "height", {
  writable: true, // writable 증명
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

// Object.defineProperty(yuJin2, "height", {
//   enumerable: false,
// });

Object.defineProperty(yuJin2, "height", {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
  writable: true, // false -> ture = 불가능, 에러...!
});
