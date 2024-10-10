/**
 * Immutable Object
 */
const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin);
console.log("");

console.log("[Extensible]");
/**
 * Extensible
 * - 값을 추가하지 못하게하는 기능
 */
console.log(Object.isExtensible(yuJin));

yuJin["position"] = "Vocal";

console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin["groupName"] = "IVE";
console.log(yuJin); // property 생성 불가, 에러를보여주지는 않음

delete yuJin["position"];
console.log(yuJin); // 삭제 가능

console.log("");

console.log("[Seal]");
/**
 * Seal
 * configurable false + 값 추가/삭제 불가
 */
const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date.getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date.getFullYear() - age;
  },
};
console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); // 봉인이 되어있느냐? O (Initial Value)

Object.seal(yuJin2); // configurable도 false로 변경함
console.log(Object.isSealed(yuJin2)); // 봉인이 되어있느냐? X

yuJin2["groupName"] = "IVE";
console.log(yuJin2);

delete yuJin2["name"];
console.log(yuJin2); // 삭제 불가

Object.defineProperty(yuJin2, "name", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));
console.log("");

console.log("[Freezed]");
/**
 * Freezed
 * 가장 높은 Immutable
 *
 * 읽기 외에 모든 기능을 불가능하게 만든다
 *
 * 값을 추가, 삭제, 변경 불가 + property attribute 도 변경 불가
 */
const yuJin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date.getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date.getFullYear() - age;
  },
};
console.log(Object.isFrozen(yuJin3)); // 동결되었니? O (Initial Value)

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // 동결되었니? X

yuJin3["groupName"] = "IVE";
console.log(yuJin3);

delete yuJin3["name"];
console.log(yuJin3);

// Object.defineProperty(yuJin3, "name", {
//   value: "Code Factory",
// });

console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));
console.log("");

console.log("[Freeze - Object in Object]");
/**
 * Object 안의 Object
 * 내부의 있는 값까지 Frozen하지 못함
 */
const yuJin4 = {
  name: "안유진",
  year: 2003,
  wonYoung: {
    name: "장원영",
    year: 2002,
  },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));

console.log(Object.isFrozen(yuJin4["wonYoung"])); // 안의 속성 Frozen 불가 -> 재귀함수 같은 거 써야함
console.log("");