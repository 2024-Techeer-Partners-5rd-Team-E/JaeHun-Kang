/**
 * Object / 객체
 */

// key : value pair
// this -> 현재 객체를 가져옴
let yuJin = {
  name: "안유진",
  group: "IVE",
  dance: function () {
    return `${this.name}이 춤을 춥니다`;
  },
};
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin["name"]);

const key = "name";
console.log(yuJin[key]);

// 함수는 실행을 해줘야함 -> ()
console.log(yuJin.dance());
console.log(" ");

console.log("[키:밸류 호출]");

const nameKey = "name";
const nameValue = "안유진";

const groupKey = "group";
const groupValue = "IVE";

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다`;
  },
};
console.log(yuJin2);
console.log(yuJin.dance());

console.log(" ");

yuJin2["group"] = "Code Factory";
console.log(yuJin2);

// 새로운 property가 생성됨
yuJin2["englishName"] = "An Yu Jin";
console.log(yuJin2);

// 해당 key 삭제
delete yuJin2["englishName"];
console.log(yuJin2);

/**
 * 객체의 특정
 *
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다
 */
const wonYoung = {
  name: "장원영",
  group: "IVE",
};
console.log(wonYoung);

// 1)
// wonYoung = {};

// 2)
wonYoung["group"] = "Code Factory";
console.log(wonYoung);

/**
 * 모든 Key 값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 Value값 다 가져오기
 */
console.log(Object.values(wonYoung));

/**
 *두개 같음
 */
const name = "안유진";

const yuJin3 = {
  name,
  name: name,
};
console.log(yuJin3);
