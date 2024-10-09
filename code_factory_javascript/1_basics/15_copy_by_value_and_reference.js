/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value 이다
 * 2) 객채는 copy by reference이다
 */
// 1) copy by value
let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

console.log("----------------");

clone += " 안유진 입니다";
console.log(original);
console.log(clone);

console.log(original === clone);

console.log("----------------");

// 2) copy by reference
let originalObj = {
  name: "안유진",
  group: "IVE",
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log("----------------");
originalObj["group"] = "Code Facotory";
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);

console.log("----------------");

originalObj = {
  name: "최지호",
  group: "Code Factory",
};

originalObj = {
  name: "최지호",
  group: "Code Factory",
};

console.log(originalObj == cloneObj);

console.log("----------------");

const yuJin1 = {
  name: "안유진",
  group: "IVE",
};
const yuJin2 = yuJin1;
const yuJin3 = {
  name: "안유진",
  group: "IVE",
};

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

console.log("----------------");

/**
 * Spread oprartor
 * 위치가 굉장히 중요하다~
 * 이건 copy by value
 */
const yuJin4 = {
  ...yuJin3,
};
console.log(yuJin4 === yuJin3);

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};
console.log(yuJin5);

// Spread에 name값이 Code Factory보다 밑에 있어서 값이 안 변함
const yuJin6 = {
  name: "Code Factory",
  ...yuJin3,
};
console.log(yuJin6);

// 이건 변함
const yuJin7 = {
  ...yuJin3,
  name: "Code Factory",
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [10, ...numbers, 11];
console.log(numbers2);
